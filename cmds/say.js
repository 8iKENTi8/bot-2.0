module.exports = async (bot,message,args,argsF) => {

const cont = argsF.join(" ")


if(cont[0] == "{"){
  const options =  JSON.parse(cont)
  message.channel.send(options)
  .catch(err => hannel.send("ошибка"))
}
else{

await  message.channel.send({
  tts: true,
  content: cont
})}
  
if(message.isCommand) message.reply({ephemeral: true, content: "Выполнена"})

message.delete()
};

module.exports.names = ["!say", "скажи" ];
