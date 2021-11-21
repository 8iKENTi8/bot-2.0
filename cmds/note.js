module.exports = async (bot,message,args,argsF) => {

   if(args[0]=="open"){
       const notes = bot.Memory.users[message.author.id].notes.join("\n")
       return message.reply({
           embeds: [{
               title: "Мои записи",
               description: notes
           }]
       })
   }


if(args[0] == "delete"){
    if(!args[1] || isNaN(args[1])) return message.reply("Укажите число")
    bot.Memory.users[message.author.id].notes.splice(args[1],1)
    return message.reply("Удалено")
}

const cont = args.join(" ")
bot.Memory.users[message.author.id].notes.push(cont)
return message.reply("Запись добавлена")


    };
    
    module.exports.names = ["!note"];
    