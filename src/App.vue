<template>
  <router-view></router-view>
  <ReloadPrompt/>
</template>

<script setup>
	import ReloadPrompt from './ReloadPrompt.vue'
  import 'bulma/css/bulma.min.css'
</script>
