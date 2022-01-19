var con = require('../DB/conDb');
module.exports = async (bot,message,args,argsF) => {

       // OTA3NjEzNDkwODU0OTIwMjIy.YYpu7g.pUEzFnCtPIvQjnIfRdclAKZDDis

    const cont = argsF.join(" ")

    if(cont==""){
        message.delete()

      
       return message.channel.send("Для авторизации введите пароль после !auth")
   }

   con.query('SELECT * FROM `users` WHERE `users`.`id` = ? AND `users`.`pass` = ? ',
   [message.author.id, cont], async (err,res,fields)=>{
       if(err)
          return console.log(err.message);
  
          if(!res.length ==0) {

            // setTimeout(()=>{
            //     bot.message.delete()
            // },3000)

            message.delete()
            
               message.channel.send("Авторизация прошла успешно ")

               if(res[0].id_r==1){
                message.channel.send(({
                    embeds: [{
                        title: "Доступные функции пользователя",
                        description:  "!My_appreciations\n!Mysuggestions\n!My_visitability"
                    }]}))
               }
               if(res[0].id_r==2){
                message.channel.send(({
                    embeds: [{
                        title: "Доступные функции Старосты",
                        description:  "!My_appreciations\n!Mysuggestions\n!My_visitability\n!All_users"
                    }]}))
               }
               if(res[0].id_r==3){
                message.channel.send(({
                    embeds: [{
                        title: "Доступные функции Админ",
                        description:  "!My_appreciations\n!Mysuggestions\n!My_visitability\n!All_users\nGive_elder"
                    }]}))
               }
               
                 
               
               
             

            }
            else{
                message.delete()
                return message.channel.send("Неккоректные данные")
                
            }})
    };
    

    module.exports.names = ["!auth"];
 
    