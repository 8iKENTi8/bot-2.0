const Discord = require('discord.js'),
    fs = require('fs'),
    config = require('./config.json')
config.cfg.intents = new Discord.Intents(config.cfg.intents)

const bot = new Discord.Client(config.cfg)
bot.login(config.token)

require('./events')(bot)

bot.commands = new Discord.Collection()

const cmdF = fs.readdirSync('./cmds')

for (const file of cmdF) {
    const cmd = require(`./cmds/${file}`)
    cmd.names.forEach(el => {
        bot.commands.set(el, cmd)
    });
    
}

console.log(bot.commands);