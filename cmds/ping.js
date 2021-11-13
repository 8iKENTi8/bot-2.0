module.exports = async (bot,msg,args,argsF) => {

  console.log(args, argsF);

  if(args[0] == "пошёл" && args[1]=="нафиг"||args[1]=="нахер"){
    msg.channel.send({
        content: "Нюхай бебру , чмо",
        tts: true
    })
    return 'success bebra'
  }
        msg.channel.send({
            content: "Схс схс схс схс ,ахаххахаха",
            tts: true
        })
    
        return 'success'
};

module.exports.names = ["саня", "sanya"]