<script setup>
	document.title = 'Khatam'
</script>

<template>
	<div class="p-3">
		<div class="message">
			<div class="message-header list" v-for='x in Array(10)'>
				2021-08-13 08:13:11
				<div class="delete"></div>
			</div>
		</div>
	</div>
</template>

<style scoped="">
	.list {
		border-radius: 0;
		font-weight: normal;
	}
</style>