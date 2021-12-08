module.exports = async (bot,message,args,argsF) => {

    const User = await bot.Users.findOne({id: message.author.id}); 
    const notes = bot.Memory.users[message.author.id].notes.join("\n")

   if(args[0]=="open"){
    
       return message.reply({
           embeds: [{
               title: "Мои записи",
               description:  User.nt
           }]
       })
   }


// if(args[0] == "delete"){
//     if(!args[1] || isNaN(args[1])) return message.reply("Укажите число")
//     bot.Memory.users[message.author.id].notes.splice(args[1],1)
//     User.nt = bot.Memory.users[message.author.id].notes.join("\n")
//     User.save()
//     return message.reply("Удалено")
// }
if(args[0] == "delete"){
    User.nt = ""
    User.save()
    return message.reply("Удалено")
}
else{
    const cont = args.join(" ")
    User.nt = User.nt + "\n" + cont
    User.save()
    // bot.Memory.users[message.author.id].notes.push(cont)
    return message.reply("Запись добавлена")
}




    };
    
    module.exports.names = ["!note"];
    