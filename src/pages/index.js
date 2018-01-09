import React from 'react'
import Link from 'gatsby-link'
import Flag from 'react-world-flags'
import EmailIcon from 'react-icons/lib/fa/envelope'
import FormIcon from 'react-icons/lib/md/description'
import instantsearch from 'instantsearch.js'
import { colors } from '../shared/styles'

import { Column, Table } from 'react-virtualized'
import 'react-virtualized/styles.css'

const companies = []

for (var o = 0; o < 1000; o++) {
  companies.push({
    id: o,
    name: "Beatswitch",
    description: "Event Management Platform",
    logo: "https://pbs.twimg.com/profile_images/922908923207839744/5EZID3tH_400x400.jpg",
    website: "https://www.beatswitch.com",
    country: "BE",
    gdprStatus: "inProgress",
    termsUrl: "https://beatswitch.com/terms",
    privacyUrl: "https://beatswitch.com/privacy",
    dataCenters: ["EU"],
    hostingPartners: ["AWS"],
    DPO: {
      name: "Gertjan De Wilde",
      email: "gertjan@beatswitch.com",
      role: "CEO/CTO"
    },
    dataBreaches: [{
      date: "10/12/2017",
      url: "https://www.beatswtich.com/breach"
    }],
    dataRentention: "",
    formUrl: "https://bs.gdprform.io",
    certifications: ["ISO27k", "HIPAA"]
  })
}

const list = []

for(var i = 0; i < 500; i++) {
  list.push({ name: 'John', description: 'Information for the table' })
}

const Status = props => (
  <div className='tooltip'>
    <div style={{ width: 12, height: 12, borderRadius: '50%', margin: '0 auto', background: props.color }}>
      <span className='tooltiptext'>{props.title}</span>
    </div>
  </div>
)
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
          <th className='name'>Name</th>
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
        {/* { companies && companies.map((node, index) => */}
        { data && data.allCompaniesJson.edges.map(({ node }, index) =>
          <tr key={index}>
            <td>
              <img src={node.logo} className='icon' alt={`${node.name} icon`} /> 
            </td>
            <td className='name'>
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
              {node.dataBreaches && node.dataBreaches.length ? node.dataBreaches.length : '-'}
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
              {node.formUrl ? <a href={`https://${node.name}.gdprform.io`} target='_blank'><FormIcon size={20} /></a> : ''}
            </td>
            <td>
              <a href={`https://${node.name}.gdprform.io`}>Edit</a>
            </td>
          </tr>
        )}
      </tbody>
    </table>

    {/* <Table
      width={900}
      height={300}
      headerHeight={20}
      rowHeight={30}
      rowCount={list.length}
      rowGetter={({index}) => list[index]}
    >
      <Column label='Name' dataKey='name' />
      <Column label='Description' dataKey='description' />
    </Table> */}
  </div>
)

{/* <Table
width={300}
height={300}
headerHeight={20}
rowHeight={30}
rowCount={list.length}
rowGetter={({ index }) => list[index]}
>
<Column
  label='Name'
  dataKey='name'
  width={100}
/>
<Column
  width={200}
  label='Description'
  dataKey='description'
/>
</Table>, */}

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
