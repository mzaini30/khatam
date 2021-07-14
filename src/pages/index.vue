<template>
	<div class="p-3 isi">
		<article class="panel is-success">
		  <p class="panel-heading">
		    Khatam
		  </p>

		  <span class="panel-block" v-for='x in Array(20)'>
		    2021-08-17
		  </span>

		</article>
	</div>

	<div class="menu-bawah p-3">
		<nav class="breadcrumb is-centered" aria-label="breadcrumbs">
		  <ul>
		    <li><a href="/">Selesai</a></li>
		    <li><a href="/">Open Data</a></li>
		    <li><a href="/">Save Data</a></li>
		  </ul>
		</nav>
	</div>
</template>	

<script setup>
	document.title = 'Khatam'
</script>

<style scoped="">
	.menu-bawah {
		background: hsl(153deg 53% 53%);
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.menu-bawah * {
		color: white !important;
	}
	.menu-bawah .breadcrumb li+li::before {
		color: white;
	}

	.isi {
		margin-bottom: 50px;
	}
</style>