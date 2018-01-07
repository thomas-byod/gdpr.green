import React from 'react'
import Link from 'gatsby-link'
import Flag from 'react-world-flags'
import EmailIcon from 'react-icons/lib/fa/envelope'
import FormIcon from 'react-icons/lib/md/description'
import instantsearch from 'instantsearch.js'
import { colors } from '../shared/styles'

const Status = props => <div style={{ width: 12, height: 12, borderRadius: '50%', margin: '0 auto', background: props.color }}></div>
const Pill = ({ title, index }) => <span style={{ background: 'rgb(78, 126, 255)', padding: '3px 7px', borderRadius: '10px', marginRight: '3px', color: '#FFF', fontSize: '12px' }}>{title}</span>
const A = ({link, title}) =>  <a href={link} target='_blank'>{title}</a>

const gdprStatuses = []

const GdprStatus = props => {
  switch(props.status) {
    case 'ready':
      return <Status color='#00BC76' title='Ready' />
    case 'inProgress':
      return <Status color='#4f7fff'  title='In progress' />
    case 'nonCompliant':
      return <Status color='red' title='Non compliant' />  
    case 'unknown':
      return <Status color='grey' title='Unknown' />  
    default:
      return <div>Invalid</div>
      break;
  }
}

const IndexPage = ({ data }) => (
  <div>
    <table>
      <thead>
        <tr style={{ backgroundColor: 'rgb(91, 95, 105)' }}>
          <th></th>
          <th>Name</th>
          <th>Status</th>
          {/* <th>Category</th> */}
          <th>Country</th>
          <th>Website</th>
          <th>ToC</th>
          <th>Privacy</th>
          <th>Articles</th>
          <th>Data centers</th>
          <th>Data breaches</th>
          <th>DPO</th>
          <th>Certifications</th>
          {/* <th>Last updated</th> */}
          <th>Form</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { data && data.allCompaniesJson.edges.map(({ node }, index) =>
          <tr key={index}>
            <td>
              <img src={node.logo} className='icon' alt={`${node.name} icon`} /> 
            </td>
            <td>
              <p style={{ fontWeight: 'bold' }}>{node.name}</p>
            </td>
            <td>
              <GdprStatus status={node.gdprStatus} />
            </td>
            {/* <td>
              Category
            </td> */}
            <td>
              <Flag code={node.country} height='12' />
            </td>
            <td>
              <A link={node.website} title='Website' />
            </td>
            <td>
              <A link={node.termsUrl} title='Terms' />
            </td>
            <td>
              <A link={node.privacyUrl} title='Privacy' />
            </td>
            <td>
              {node.articles && node.articles.length ? node.articles.length : '-' }
            </td>
            <td>
              {node.dataCenters.map((d, index) => <Pill key={index} title={d} />)}
            </td>
            <td>
              {node.dataBreaches.length ? node.dataBreaches.length : '-'}
            </td>
            <td>
              {node.DPO.email ? <a href={`mailto:${node.DPO.email}`}><EmailIcon style={{ marginRight: '5px' }} />{node.DPO.name}</a> : '-' }
            </td>
            <td>
              {node.certifications && node.certifications.map((d, index) => <Pill key={index} title={d} />)}
            </td>
            {/* <td>
              {Date.now()}
            </td> */}
            <td>
              {node.formUrl ? <a href={`https://${node.name}.gdprform.io`}><FormIcon size={20} /></a> : ''}
            </td>
            <td>
              <a href={`https://${node.name}.gdprform.io`}>Edit</a>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

export default IndexPage

export const query = graphql`
  query Com10 {
    allCompaniesJson {
      edges {
        node {
          name
          country
          logo
          website
          termsUrl
          gdprStatus
          privacyUrl,
          dataBreaches {
            date
            url
          },
          DPO {
            name
            email
            role
          },
          dataCenters
          formUrl,
          certifications
          articles {
            date,
            url
          }
        }
      }
    }
  }
`
