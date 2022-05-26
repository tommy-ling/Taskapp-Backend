// CRUD app

// require the driver created by MongoDB below
const mongodb = require('mongodb')
// below var is used to call connect function and connect node backend with mongoDB database
const MongoClient = mongodb.MongoClient

const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to database')
  }
  const db = client.db(databaseName)

  // db.collection('users').deleteMany({
  //   age: 27
  // }).then(result => {
  //   console.log(result)
  // }).catch(error => {
  //   console.log(error)
  // })

  db.collection('tasks').deleteOne({
    description: 'clean the house'
  }).then(result => {
    console.log(result)
  }).catch(error => {
    console.log(error)
  })
})