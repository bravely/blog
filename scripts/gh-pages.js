const { spawnSync } = require('child_process')
const fs = require('fs')
const ghpages = require('gh-pages')

const args = process.argv.slice(2)
if (!args.includes('--built')) {
  spawnSync('npm', ['run', 'export'], {stdio: 'inherit'})
}

// This needs to run *after* export.
fs.writeFileSync(`${__dirname}/../__sapper__/export/bravely.github.io/CNAME`, 'jake.demarest-mays.com')
console.log('Copied over CName')

ghpages.publish(
  '__sapper__/export/bravely.github.io',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:bravely/bravely.github.io.git',
    user: {
      name: 'Jake Demarest-Mays',
      email: 'jake@demarest-mays.com'
    }
  },
  (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Deploy Complete!')
    }
  }
)

