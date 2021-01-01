
//var databases = ['qmrappdb','anotherdb'];
//
//for (var i = databases.length - 1; i >= 0; i--) {
//  db = db.getSiblingDB(databases[i])
//
//  db.createUser({
//    user: "root",
//    pwd: "password",
//    roles: ["readWrite"]
//  })
//}

db.createUser ({
	user: "admin",
	pwd: "adminpwd123",
	roles: [
		{
			role: "readWrite",
			db: "taskmandb"
		}
	]
})
taskmandb = db.getSiblingDB('taskmandb')

//taskmandb.fruit.createIndex( { "name": 1 }, { unique: true } )