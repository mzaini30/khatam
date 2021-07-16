<template>
  <router-link to='/' class="has-background-info p-3 is-block atas has-text-white">
    Khatam
  </router-link>
  <router-view></router-view>
  <ReloadPrompt/>
</template>

<script setup>
	import ReloadPrompt from './ReloadPrompt.vue'
  import 'bulma/css/bulma.min.css'
</script>

<style scoped="">
  .atas {
    position: sticky;
    top: 0;
    z-index: 2;
  }
</style>