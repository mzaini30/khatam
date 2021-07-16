<template>
  <router-link to='/' class="has-background-info p-3 is-block has-text-white">
    Khatam
  </router-link>
  <router-view></router-view>
  <ReloadPrompt/>
</template>

<script setup>
	import ReloadPrompt from './ReloadPrompt.vue'
  import 'bulma/css/bulma.min.css'
</script>
