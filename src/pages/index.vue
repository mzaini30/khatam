<script setup>
	document.title = 'Khatam'
</script>

<template>
	<div class="p-3">
		<div class="field has-addons">
			<div class="control">
				<div class="button is-info is-outlined">khatam</div>
			</div>
			<div class="control">
				<div class="button is-info is-outlined">open data</div>
			</div>
			<div class="control">
				<div class="button is-info is-outlined">save data</div>
			</div>
		</div>
		<div class="message">
			<div class="message-header list has-background-success" v-for='x in Array(20)'>
				2021-08-13 08:13:11
				<div class="delete"></div>
			</div>
		</div>
		<p class="has-text-centered mb-3">
			<router-link to="/credit">Credit</router-link>
		</p>
	</div>
</template>

<style scoped="">
	.list {
		border-radius: 0;
		font-weight: normal;
		border: 1px solid white;
	}
</style>