<script setup>
	document.title = 'Khatam'
	import tambah from '/src/icon/tambah.vue'
</script>

<template>
	<div class="p-3">
		<div class="message">
			<div class="message-header list has-background-success" v-for='x in Array(20)'>
				2021-08-13 08:13:11
				<div class="delete"></div>
			</div>
		</div>
		<div class="icon">
			<tambah></tambah>
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
	.icon {
		--posisi: 30px;
		cursor: pointer;
		position: fixed;
		display: block;
		right: var(--posisi);
		bottom: var(--posisi);
		color: #3e8ed0!important;
	}
</style>