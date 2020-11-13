var ghpages = require('gh-pages')

ghpages.publish(
  '__sapper__/export/blog',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/bravely/blog.git',
    user: {
      name: 'Jake Demarest-Mays',
      email: 'Your Email address'
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)
