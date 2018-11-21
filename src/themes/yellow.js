import theme from './base'

const yellow = '#fd0'
const white = '#fffceb'
const White = '#fff'
const black = '#351e38'
const blue = '#2d5dd7'
export default {
  ...theme,
  font: '"Gloria Hallelujah", system-ui, sans-serif',
  weights: [400, 700],
  fontSizes: ['0.5em', '0.8em', '0.9em', '1.5em', '2em'],
  monospace: '"Roboto Mono", monospace',
  colors: {
    text: black,
    background: white,
    link: blue,
    pre: White,
    preBackground: black,
    code: White,
    codeBackground: black
  },
  heading: {
    textTransform: 'uppercase',
    fontWeight: 700
  },
  blockquote: {
    fontWeight: 700
  },
  pre: {
    textAlign: 'left'
  },
  paragraph: {
    textAlign: 'left'
  }
}
