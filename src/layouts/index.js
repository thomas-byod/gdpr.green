import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PlusIcon from 'react-icons/lib/fa/plus'
import SearchIcon from 'react-icons/lib/go/search'
import GithubIcon from 'react-icons/lib/go/mark-github'
import ProductHuntIcon from 'react-icons/lib/fa/product-hunt'
import icon from '../images/icon.svg'
import { colors } from '../shared/styles'

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
        flexFlow: 'row wrap'
      }}
    >

      {/* Logo */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
             <div style={{ width: 24, height: 24, borderRadius: '50%', background: colors.green, marginRight: '7px', display: 'inline-block' }}></div>
            GDPR
          </Link>
        </h1> 
        <span 
          style={{ 
            color: 'rgb(160, 165, 179)', 
            fontSize: '1rem', marginLeft: '10px' 
            }}
          > 
          | GDPR Readiness directory
        </span>
      </div>

      {/* Search */}
      <div style={{ flex: 1, justifyContent: 'center' }}>
        <input type="text" style={{ borderRadius: '3px', padding: '14px 15px', width: '400px', border: '1px solid #EEE', background: '#FFF' }} placeholder={<SearchIcon /> + `Search product or company`}/>
      </div>

      {/* Menu */}
      <div style={{ flex: 1 }}>
        <ul style={{ listStyle: 'none', float: 'right', margin: 0 }}>
          <Li><div><p> 100 : 20 : 04 : 01</p></div></Li>
          <Li>About</Li>
          <Li><a href="https://github.com/Gdewilde/gdpr.green"><GithubIcon color='#FFF' size={24} /></a></Li>
          <Li><ProductHuntIcon color='#FFF' size={24} /></Li>
          <Li style={{ margin: 0, padding: 0 }}>
            <a href='https://github.com/Gdewilde/gdpr.green/blob/master/src/data/companies.json'>
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