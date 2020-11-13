var ghpages = require('gh-pages')

ghpages.publish(
  '__sapper__/export/bravely.github.io',
  {
    branch: 'main',
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
