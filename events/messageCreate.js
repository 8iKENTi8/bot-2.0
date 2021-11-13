

module.exports = (bot, msg) => {
    
    if(msg.author.bot) return
    
   const {content} = msg;

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