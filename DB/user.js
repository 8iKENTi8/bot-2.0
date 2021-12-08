const mng = require('mongoose')

const User = new mng.Schema({
   id: String,
   username: {
       type: String,
       default: "user"
   },
   nt: String
})

module.exports = mng.model('User', User)