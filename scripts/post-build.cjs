const fs = require('fs')
const path = require('path')

const htmlPath = path.join(__dirname, '..', 'dist', 'index.html')

if (!fs.existsSync(htmlPath)) {
  console.error('dist/index.html not found. Run npm run build first.')
  process.exit(1)
}

let html = fs.readFileSync(htmlPath, 'utf8')

// Fastify inline module script so it works locally via file://.
// The bundle uses import.meta, which forces an inline <script type="module">.
// We must keep type="module" but drop crossorigin (harmless here) so the
// single-file build runs when opened directly without a server.
html = html.replace(/<script type="module" crossorigin>/g, '<script type="module">')

fs.writeFileSync(htmlPath, html)
console.log('Post-build: normalized inline module script.')