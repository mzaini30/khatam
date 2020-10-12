db = new Dexie('database khatam')
db.version(1).stores({
	data: '++id, tanggal'
})
moment.locale('id')