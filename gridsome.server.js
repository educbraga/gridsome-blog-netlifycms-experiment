// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = function (api) {
//   api.loadSource(({ addCollection }) => {
//     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
//   })

//   api.createPages(({ createPage }) => {
//     // Use the Pages API here: https://gridsome.org/docs/pages-api/
//   })
// }

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://www.reddit.com/r/aww.json?raw_json=1')

    const collection = actions.addCollection('RedditPost')

    api.createPages(({ createPage }) => {
      createPage({
        path: '/reddit/:id',
        component: './src/templates/RedditPost.vue'
      })
    })  
    

    for (const post of data.data.children) {
      collection.addNode({
        id: post.data.id,
        title: post.data.title,
        path: '/reddit/'+ post.data.id,
        fields: {
          thumbnail: post.data.thumbnail,
          // img: post.data.preview.images[0].source.url,
        }
      })
    }
  })
}