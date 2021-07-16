<script setup>
	document.title = 'Khatam'
</script>

<template>
	<div class="p-3">
		<div class="message">
			<div class="message-header list has-background-success" v-for='x in Array(20)'>
				2021-08-13 08:13:11
				<div class="delete"></div>
			</div>
		</div>
		<img src="/src/aset/plus.png" class="tombol-tambah" alt="">
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
	.tombol-tambah {
		width: 40px;
		cursor: pointer;
		height: auto;
		position: fixed;
		--jarak: 10px;
		right: var(--jarak);
		bottom: var(--jarak);
	}
</style>