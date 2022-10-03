<template>
  <BlogLayout>
    <div class="markdown-body" v-html="$page.post.content" />
  </BlogLayout>
</template>

<page-query>
  query Post ($path: String!){
  post: post (path: $path) {
  title
  content
  }
  }
</page-query>

<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.post.title,
      }
    }
  }
</script>

<style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-light.min.css');

  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }
</style>