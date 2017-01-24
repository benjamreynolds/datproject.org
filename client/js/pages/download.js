const html = require('choo/html')
const header = require('../components/header')

module.exports = function (state, prev, send) {
  return html`
    <div>
      ${header(state, prev, send)}
      <section class="section">
        <div class="container">
          <h1 class="f1 content-title horizontal-rule">Download a Dat</h1>
          <p>1. Install node for your platform using <a href="http://nodejs.org">this link.</a></p>

          <p>2. Download the dat command line tool to download:</p>
          <pre>
            <code>
$ npm install -g dat
$ dat clone ${state.archive.key}
            </code>
          </pre>

          <p>
            Having trouble installing dat? Try our <a href="http://docs.datproject.org/#troubleshooting">troubleshooting checklist</a>.
          </p>
        </div>
      </section>
    </div>
  `
}