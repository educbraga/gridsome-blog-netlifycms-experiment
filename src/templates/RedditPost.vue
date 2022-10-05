<template>
  <Layout>
    <h1>{{$page.redditPost.title}}</h1>
    <img :src="$page.redditPost.fields.thumbnail" alt="thumbnail"/>
  </Layout>
</template>

<page-query>
  query RedditPost ($path: String!){
    redditPost: redditPost (path: $path) {
      title
      path
      fields {
        thumbnail
      }
    }
  }
</page-query>

<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.redditPost.title,
      }
    }
  }
</script>