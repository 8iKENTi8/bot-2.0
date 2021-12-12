const { Message } = require("discord.js");


module.exports = async (bot, msg) => {
    
    if(msg.author.bot) return

//   const User = await bot.Users.findOne({id: msg.author.id}); //Создание новой записи в DB
   
//     const notes = bot.Memory.users[msg.author.id].notes.join("\n")
//     if(User == null) {
//         const newUser = new bot.Users({
//             id: msg.author.id,
//             username: msg.author.username,
//             nt: notes
//         });
//         newUser.save();
//     }
    
    // const notes = bot.Memory.users[message.author.id].notes.join("\n")
    
   const {content, author, guild} = msg

   if(!bot.Memory.users[author.id]) bot.Memory.users[author.id] = bot.createUser(msg)
   if(!bot.Memory.guilds[guild.id]) bot.Memory.guilds[guild.id] = bot.createGuild(msg)
   if(!bot.Memory.guilds[guild.id].members[author.id]) 
        bot.Memory.guilds[guild.id].members[author.id] = bot.createMember(msg)

   const msgAr = content.toLowerCase().split(' '),
   cmd = msgAr[0],
   args = msgAr.slice(1),
   msgArFull = content.split(' '),
   argsF= msgArFull.slice(1),
   cmdRun = bot.commands.get(cmd)

    if(cmdRun) cmdRun(bot,msg,args,argsF)
    .then(any => console.log(any))
    .catch(err => console.error(err))
    
};