module.exports = (bot) => {
    bot
    .on('ready', (ABC)=>require('./ready')(bot))
    .on('messageCreate', (message) => require('./messageCreate')(bot, message))
    
   
};