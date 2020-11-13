const { spawnSync } = require('child_process')
const fs = require('fs')
const ghpages = require('gh-pages')

const args = process.argv.slice(2)
if (!args.includes('--built')) {
  spawnSync('npm', ['run', 'export'], {stdio: 'inherit'})
}

// This needs to run *after* export.
fs.writeFileSync(`${__dirname}/../__sapper__/export/jake.demarest-mays.com/CNAME`, 'jake.demarest-mays.com')
console.log('Copied over CName')

ghpages.publish(
  '__sapper__/export/jake.demarest-mays.com',
  {
    repo: 'git@github.com:bravely/bravely.github.io.git',
    branch: 'gh-pages',
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

