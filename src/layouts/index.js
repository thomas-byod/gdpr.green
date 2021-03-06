import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PlusIcon from 'react-icons/lib/fa/plus'
import SearchIcon from 'react-icons/lib/go/search'
import GithubIcon from 'react-icons/lib/go/mark-github'
import ProductHuntIcon from 'react-icons/lib/fa/product-hunt'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import icon from '../images/icon.svg'
import { colors } from '../shared/styles'
import Countdown from '../components/Countdown'

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
      className='navigation'
      style={{
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        padding: '1.2rem 1.0875rem',
      }}
    >

      {/* Logo */}
      <div style={{ flex: 1, display: 'flex', flexWrap: 'nowrap', flexDirection: 'column' }}>
        <div className='logoBox'>
          <h1 style={{ margin: 0 }} className='logo'>
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
          <Countdown />
        </div>
        <div style={{ flex: 1 }}>
          <span 
            style={{ 
              color: 'rgb(160, 165, 179)', 
              fontSize: '1rem'
              }}
            > 
            GDPR Readiness directory for Cloud Services
          </span>
        </div>
      </div>

      {/* Search */}
      <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <input type="text" className='search' placeholder={`Search product or company`}/>
      </div>

      {/* Menu */}
      <div style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
        <ul style={{ listStyle: 'none', float: 'right', margin: 0 }}>
          <Li>About</Li>
          <Li>
            <a href="https://github.com/Gdewilde/gdpr.green">
              <GithubIcon id='gh' color='#FFF' size={24} />
              </a>
          </Li>
          <Li>
            <a href="https://github.com/Gdewilde/gdpr.green">
              <ProductHuntIcon id='ph' color='#FFF' size={24} />
            </a>
          </Li>
          <Li>
            <a href="https://github.com/Gdewilde/gdpr.green">
              <TwitterIcon id='ph' color='#FFF' size={24} />
            </a>
          </Li>
        </ul>
      </div>
      <div>
        <a 
          href=''
          target='_blank'
          style={{ 
            textDecoration: 'none'
            }}
          >
          <div style={{ 
          borderRadius: 3, 
          backgroundColor: '#4F7FFF', 
          padding: '14px 18px', 
          textDecoration: 'none', 
          color: 'white',
          fontWeight: 'bold',
          textDecoration: 'none'
          }}>
            <PlusIcon style={{ marginRight: '5px' }} />Add company
          </div>
        </a> 
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