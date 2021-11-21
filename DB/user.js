const mng = require('mongoose')

const User = new mng.Schema({
   id: String,
   username: {
       type: String,
       default: "user"
   }
})

module.exports = mng.model('User', User)