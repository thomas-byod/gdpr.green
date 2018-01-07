import React from 'react'
import Link from 'gatsby-link'
import Flag from 'react-world-flags'
import instantsearch from 'instantsearch.js'

const Status = props => <div style={{ width: 16, height: 16, borderRadius: '50%', margin: '0 auto', background: props.color }}></div>

const gdprStatuses = []

const GdprStatus = props => {
  switch(props.status) {
    case 'ready':
      return <Status color='green' title='Ready' />
    case 'in-process':
      return <Status color='#4f7fff'  title='In progress' />
    case 'no':
      return <Status color='red' title='No' />  
    case 'unknown':
      return <Status color='grey' title='Unknown' />  
  }
}

const IndexPage = ({ data }) => (
  <div>
    <table>
      <thead>
        <tr style={{ backgroundColor: 'rgb(91, 95, 105)' }}>
          <th style={{ width: '60px' }}></th>
          <th>Name</th>
          <th>Status</th>
          <th>Category</th>
          <th>Country</th>
          <th>Website</th>
          <th>ToC</th>
          <th>Privacy URL</th>
          <th>Articles</th>
          <th>Data centers</th>
          <th>Data breaches</th>
          <th>DPO</th>
          <th>Certifications</th>
          <th>Last updated</th>
          <th>Form</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        { data && data.allCompaniesJson.edges.map(({ node }, index) =>
          <tr key={index}>
            <td><img src={node.logo} style={{ width: 24, marginBottom: 0, marginRight: '10px' }} alt=""/> </td>
            <td>
             {node.name}
            </td>
            <td>
              <GdprStatus status={node.gdprStatus} />
            </td>
            <td>
              Category
            </td>
            <td>
              <Flag code={node.country} height='12' />
            </td>
            <td>
              <a href={node.website}>Website</a>
            </td>
            <td>
              <a href={node.termsUrl}>Terms</a>
            </td>
            <td>
            <a href={node.privacyUrl}>Privacy</a>
            </td>
            <td>
              4
            </td>
            <td>
              {node.dataCenters.map((d, index) => <span key={index}>{d}</span>)}
            </td>
            <td>
              {node.dataBreaches.length ? node.dataBreaches.length : '-'}
            </td>
            <td>
              {node.DPO.name}
            </td>
            <td>
              {node.certifications && node.certifications.map((d, index) => <span style={{ background: '#DDD', padding: '3px', borderRadius: '3px', marginRight: '3px' }} key={index}>{d}</span>)}
            </td>
            <td>
              {Date.now()}
            </td>
            <td>
              {console.log(node)}
              {node.formUrl ? <a href={`https://${node.name}.gdprform.io`}>Form</a> : ''}
            </td>
            <td>
              <a href={`https://${node.name}.gdprform.io`}>Update</a>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

export default IndexPage

export const query = graphql`
  query Com4 {
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
        }
      }
    }
  }
`
