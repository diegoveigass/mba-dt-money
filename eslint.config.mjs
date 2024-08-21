import styledA11y from 'eslint-plugin-styled-components-a11y'
import config from '@rocketseat/eslint-config/react.mjs'

export default [
  ...config,
  {
    plugins: {
      'styled-components-a11y': styledA11y,
    },
  },
]
