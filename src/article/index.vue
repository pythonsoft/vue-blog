<template>
  <div class="container">
      <leftHeader></leftHeader>
      <div class="mid-col">
        <div class="mid-col-container">
          <div id="content" class="inner">
            <article class="post post-list" v-html="htmlStr">

            </article>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import leftHeader from '../components/header.vue'

export default {
  name: 'article',
  data () {
    return {htmlStr: ''}
  },
  created () {
  },
  components: {
    leftHeader
  }
}
</script>
