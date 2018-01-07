import Typography from 'typography'

const typography = new Typography({
  headerFontSize: '30px',
  baseFontSize: '15px',
  // baseLineHeigth: '2em',
  baseLineHeight: '1.65em',
  headerLineHeight: '1.4em',
  headerFontFamily: [
    'Helvetica Neue', 'Helvetica'
  ],
  bodyFontFamily: [
    'Helvetica'
  ]
})

// Hot reload typography in development.
if(process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography