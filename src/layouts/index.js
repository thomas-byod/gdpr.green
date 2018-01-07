import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PlusIcon from 'react-icons/lib/fa/plus'
import GithubIcon from 'react-icons/lib/go/mark-github'
import ProductHuntIcon from 'react-icons/lib/fa/product-hunt'
import icon from '../images/icon.svg'

import './index.css'

const Li = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem', color: '#FFF', ...props.style }}>{props.children}</li>
)

const Header = () => (
  <div
    style={{
      background: '#202534',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        padding: '1.2rem 1.0875rem',
      }}
    >
      <div style={{ flex: 1, display: 'flex' }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
             <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#4FFFBE', marginRight: '7px', display: 'inline-block' }}></div>
            GDPR
          </Link>
          <span style={{ color: '#BBB', fontSize: '1rem', marginLeft: '5px' }}> | GDPR Readiness directory</span>
        </h1> 
      </div>
      <div style={{ flex: 1, justifyContent: 'center' }}>
        <input type="text" style={{ borderRadius: '3px', padding: '10px 15px', width: '400px', border: '1px solid #EEE', background: '#FFF' }} placeholder='Search product or company' />
      </div>
      <div style={{ flex: 1 }}>
        <ul style={{ listStyle: 'none', float: 'right', margin: 0 }}>
          <Li><div><p> 100 : 20 : 04 : 01</p></div></Li>
          <Li>About</Li>
          <Li><GithubIcon color='#FFF' style={{width: '32px'}} /></Li>
          <Li><ProductHuntIcon color='#FFF' height='32px' /></Li>
          <Li style={{ margin: 0, padding: 0 }}>
            <a href='https://github.com/Gdewilde/gdpr.green/edit/master/companies.json'>
              <div style={{ 
              borderRadius: 3, 
              backgroundColor: '#4F7FFF', 
              padding: '14px 15px', 
              textDecoration: 'none', 
              color: 'white',
              fontWeight: 'bold'
              }}>
                <PlusIcon style={{ marginRight: '5px' }} />Add company
              </div>
            </a> 
          </Li>
        </ul>
      </div>
    </div>
  </div>
)

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="GDPR.green - GDPR directory of SAAS & Cloud products."
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        width: '100%',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper