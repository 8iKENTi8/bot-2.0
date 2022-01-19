module.exports = async (bot,message,args,argsF) => {

    // console.log(member);
    // let role = message.guild.roles.cache.find(r => r.id === "931628294409945138");

    var role = message.guild.roles.cache.find(role => role.id === "931628294409945138")
    var user = message.guild.members.cache.get(message.author.id);
    user.roles.add(role)    

    // member.roles.add(role);

    // member.roles.add(role);

    // message.mentions.members.first().addRole('931628294409945138');
    // var memberObj = message.author
    // // let role = message.mentions.roles.get("931628294409945138");
    // console.log(memberObj);
    // // console.log(role.id);

    //  memberObj.addRole(931628294409945138).catch(console.error);
    // message.mentions.roles.forEach(role => {
//     console.log(role.id);
    
// }

};

module.exports.names = ["!role1" ];
