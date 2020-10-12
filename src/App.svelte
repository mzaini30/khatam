<div class="container">
	<br>
	<h5 class="text-center">Khatam</h5>
	{#if data.length > 0}
		<hr>
		<p>Kamu sudah khatam sebanyak <strong>{data.length}</strong> kali</p>
		<ol class="jarak-bawah">
			{#each data as x}
				<li><strong>{new Date(x.tanggal).getDate()} {namaBulan[new Date(x.tanggal).getMonth()]} {new Date(x.tanggal).getFullYear()}</strong> (<em>{moment(x.tanggal).fromNow()}</em>) <span class="hapus" on:click={hapus(x.id)}>[hapus]</span></li>
			{/each}
		</ol>
	{/if}
	<div class="melayang btn btn-info" on:click={tambah}>&plus;</div>
</div>
<style type="text/css">
	.melayang {
		position: fixed;
		right: 20px;
		bottom: 20px;
	}
	.hapus {
		cursor: pointer;
		user-select: none;
	}
	.jarak-bawah {
		margin-bottom: 75px;
	}
</style>
<script type="text/javascript">
	import {onMount} from 'svelte'
	let data = []
	const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
	const tampil = () => db.data.reverse().toArray(x => data = x)
	const hapus = (n) => {
		const tanya = confirm('Hapus kah?')
		if (tanya) {
			db.data.delete(n).then(() => tampil())
		}
	}
	onMount(() => tampil())
	const tambah = () => {
		let kalender = new Date
		let tanggal = `${kalender.getFullYear()}-${kalender.getMonth() + 1}-${kalender.getDate()} ${kalender.getHours()}:${kalender.getMinutes()}:${kalender.getSeconds()}`
		db.data.add({tanggal: tanggal}).then(() => tampil())
	}
</script>