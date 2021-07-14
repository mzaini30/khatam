<template>
	<h1>Bismillah</h1>
	<p>Mantap</p>

	<span v-for='x in Array(10)'>
		.
		<span v-for='y in Array(20)'>
			,
		</span>
	</span>
</template>

<script setup>
	document.title = 'Khatam'
</script>