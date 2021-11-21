module.exports = async (bot,message,args,argsF) => {


   
  if(args[0]== 'животное?'){
    message.channel.send({
        tts: true,
        content: "Так точно капитан"
    })
    return
  }
message.channel.send({
    tts: true,
    content: "Привет чуууурос, занюхнииии,мммммммммммммммммм,бебрааааааааа ай ай ай"
})
  
  
};
module.exports.names = ["ping", "пинг", "бебра", "андрей"];
module.exports.interaction = {
  name: 'ping',
  description: 'Просто проверочная команда, ничего больше',
  options: [
      {
          name: "any",
          description: "Другие настройки команды ping",
          type: "STRING",
        choices: [
              {
                  name: "pingx2",
                  value: "ping"
              }
          ],
          required: false
      },
  ],
  defaultPermission: true
};