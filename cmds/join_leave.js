module.exports = async (bot,msg,args,argsF) => {

 
    const memberID = msg.author.id;   // you want to add/remove roles. Only members have roles not users. So, that's why I named the variable memberID for keeping it clear.
  

    const guild = bot.guilds.cache.get('859156583928561705');  
     
    const member = await guild.members.fetch(memberID); 
    console.log( msg.member.voice.channelID)


// const mapKey = msg.guild.id;
// const member = await mapKey.members.fetch(msg.author.id); 
// console.log( member.voice.channelID)
// ab= bot.voiceConnections.get(GuildID).channel.id

// console.log(ab);

// bot.voiceConnections.map(voiceConnection => console.log(voiceConnection));

//         const mapKey = msg.guild.id;

//          console.log(mapKey);
//         // console.log(msg.member.voice.channelID);
        
//             if (!msg.member.voice.channelID) {
//                 msg.reply('Error: please join a voice channel first.')
//             } else 
//                 if (!guildMap.has(mapKey))
//                     await connect(msg, mapKey)
//                 else
//                     msg.reply('Already connected')
            
        
}
          

module.exports.names = ["!join", "!leave" ];