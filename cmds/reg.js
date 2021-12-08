var con = require('../DB/conDb');
module.exports = async (bot,message,args,argsF) => {

    const cont = argsF.join(" ")

   function regUser() {
    con.query('INSERT INTO `users` (`id`, `pass`, `id_r`) VALUES (?, ?, 2)',
    [message.author.id,cont], async (err,res,fields)=>{
        if(err)
           return console.log(err.message);
   
           message.delete()
           message.channel.send("Регистрация прошла успешно")
         
   })
}

    con.query('SELECT * FROM `users` WHERE `users`.`id` = ? ',
       [message.author.id], async (err,res,fields)=>{
           if(err)
              return console.log(err.message);
      
              if(!res.length ==0) {
                  return message.reply("Вы уже зарегистрированы")
                }
                else{
                    
                    if(cont==""){
                         message.delete()
                        
                        return message.channel.send("Для регистрации введите пароль после !reg")
                    }
                       regUser()
                    }
                })

    };
    
    module.exports.names = ["!reg"];