<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <h2>Mine</h2>
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.node.id">
        <g-link class="nav__link" :to="post.node.path">{{post.node.title}}</g-link>
      </li>
    </ul>
    
    <h2>Reddit</h2>
    <ul>
      <li v-for="post in $page.redditPosts.edges" :key="post.node.id">
        <g-link class="nav__link" :to="post.node.path">{{post.node.title}}</g-link>
      </li>
    </ul>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>
<page-query>
  query Posts {
  	posts: allPost {
    	edges {
        node {
          id
          title
          path
        }
      }
    }
  	redditPosts: allRedditPost{
    	edges {
        node {
          id
          title
          path
        }
      }
    }
  }
  
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
