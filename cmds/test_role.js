module.exports = async (bot,message,args,argsF) => {

    // console.log(member);
    // let role = message.guild.roles.cache.find(r => r.id === "931628294409945138");

//     var role = message.guild.roles.cache.find(role => role.id === "931628294409945138")
//     var user = message.guild.members.cache.get(message.author.id);
//    console.log(user.roles);

   
//     console.log(message.author.id);


//     const devID = '257871068532834304';
//      const dev = await bot.fetchUser(devID);

//      console.log(dev);

    const memberID = '257871068532834304';   // you want to add/remove roles. Only members have roles not users. So, that's why I named the variable memberID for keeping it clear.
    const roleID = '933483006511972352';

    const guild = bot.guilds.cache.get('859156583928561705');   // copy the id of the server your bot is in and paste it in place of guild-ID.
    const role = guild.roles.cache.get(roleID);  // here we are getting the role object using the id of that role.
    const member = await guild.members.fetch(memberID); // here we are getting the member object using the id of that member. This is the member we will add the role to.
    member.roles.add(role);   // here we just added the role to the member we got.


    // message.channel.send(bot.guilds.cache.map(guild => guild.id).join(", \n"));

    // member.roles.add(role);

    // member.roles.add(role);

    // message.mentions.members.first().addRole('931628294409945138');
    // var memberObj = message.author
    // // let role = message.mentions.roles.get("931628294409945138");
    // console.log(memberObj);
    // // console.log(role.id);

    //  memberObj.addRole(931628294409945138).catch(console.error);
 

};

module.exports.names = ["!role1" ];
