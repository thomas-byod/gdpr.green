import React from 'react'
import Countdown from 'react-countdown-now'

const Renderer = ({days, hours, minutes, seconds, completed}) => {
  if (completed) {
    return 'Active'
  } else {
    return <span>{days} Day(s) until deadline!</span>
  }
}

const Component = () => (
  <div style={{ background: '#ffa', color: '#73641a', borderRadius: '15 px', padding: '2px 15px', fontSize: '14px', borderRadius: '3px', textAlign: 'center', marginLeft: '10px', marginTop: '4px' }}>
    <Countdown 
      date='05/25/2018 12:00 AM' 
      renderer={Renderer} />
  </div>
)

export default Component