const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// Make Express automatically parse incoming JSON data to an object. This is a middleware from Express
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})

// MULTER FILE UPLOAD
// const multer = require('multer')
// const upload = multer({
//   // destination(directory) that the file should go is 'images'
//   dest: 'images',
//   limits: {
//     fileSize: 1000000
//   },
//   fileFilter(req, file, cb) {
//     if(!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error('Please upload a word document'))
//     }
//     cb(undefined, true)
//   }
// })

// // look for 'upload' (upload.single('upload')) keyword when choosing a file to upload
// app.post('/upload', upload.single('upload'), (req, res) => {
//   res.send()
// }, 
// // the second callback is to handle the errors from our middleware. All arguments must be provided as below in the same order
// (err, req, res, next) => {
//   res.status(400).send({
//     error: err.message
//   })
// })

// POPULATE AND EXECPOPULATE
// const main = async() => {
//   const task = await Task.findById('628be5d197453b73328147ef')
//   await task.populate('owner').execPopulate()
//   console.log(task.owner)

//   const user = await User.findById('628be5b797453b73328147ed')
//   await user.populate('tasks').execPopulate()
//   console.log(user.tasks)
// }

// THE toJSON() PROPERTY OF AN OBJECT
// const pet = {
//   name: 'Hal'
// }
// pet.toJSON = function() {
//   console.log(this)
//   return this
//   // return {}
// }
// console.log(JSON.stringify(pet))

// ADDING AUTH TOKEN
// const myFunction = async() => {
//   const token = jwt.sign({ _id: 'abc123' }, "thisismynewcourse", { expiresIn: '7 days' })
//   console.log(token)

//   const data = jwt.verify(token, 'thisismynewcourse')
//   console.log(data)
// }

// HASHING PASSWORD
// const myFunction = async() => {
//   const password = 'Red12345!'
//   const hashedPassword = await bcrypt.hash(password, 8)

//   console.log(password)
//   console.log(hashedPassword)

//   const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//   console.log(isMatch)
// }