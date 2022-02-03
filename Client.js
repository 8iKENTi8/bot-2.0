const Discord = require('discord.js'),
    fs = require('fs'),
    config = require('./config.json')
config.cfg.intents = new Discord.Intents(config.cfg.intents)

const bot = new Discord.Client(config.cfg)
bot.login(config.token)

require('./events')(bot)

bot.commands = new Discord.Collection()

bot.commands.any = []

const cmdF = fs.readdirSync('./cmds')

for (const file of cmdF) {
    const cmd = require(`./cmds/${file}`)
    cmd.names.forEach(el => {
        bot.commands.set(el, cmd)
    });
    bot.commands.any.push(cmd)
}

//console.log(bot.commands);

bot.Memory = require('./memory.json')

setInterval(()=> {
    fs.writeFileSync(`./memory.json`, JSON.stringify(bot.Memory, null, '\t'));
}, 1000*67*2)

function isObj(object) {
    if(
        Array.isArray(object)||
        typeof object !== 'object'
    ) return false
    if(typeof object == 'object') return true
}

bot.createGuild = (message) => {
    return {
        id: message.guild.id,
        name: message.guild.name,
        members: {},
        warns: 0
    }
}


bot.createUser = (message) => {
    return {
        id: message.author.id,
        name: message.author.username,
        notes: []
    }
}
bot.createMember = (message) => {
    return {
        id: message.author.id,
        name: message.author.username,
        money: 1000,
        warns: []
    }
}

const msg = {
    guild: {
        id: "1",
        name: "1"
    },
    author: {
        id: "1",
        username: "1"
    }
};



const PREFIX = '*';
const _CMD_HELP        = PREFIX + 'help';
const _CMD_JOIN        = PREFIX + 'join';
const _CMD_LEAVE       = PREFIX + 'leave';
const _CMD_DEBUG       = PREFIX + 'debug';
const _CMD_TEST        = PREFIX + 'hello';
const _CMD_LANG        = PREFIX + 'lang';

const guildMap = new Map();




bot.on = async (message) => {
    if (!('guild' in message) || !message.guild) return; // prevent private messages to bot
        const mapKey = message.guild.id;
        if (message.content.trim().toLowerCase() == _CMD_JOIN) {
            if (!message.member.voice.channelID) {
                message.reply('Error: please join a voice channel first.')
            } else 
                if (!guildMap.has(mapKey))
                    await connect(message, mapKey)
                else
                message.reply('Already connected')
}
}



for(let keys in bot.Memory.guilds) { //Обновлятель памяти
    const origin = bot.Memory.guilds[keys]; //Получаем гильдию
    const serv = bot.createGuild(msg); //Получаем гильдию по новому стандарту
    for(let key in serv) { //Проходимся по ключам
        if(key !== "members") {
            if(origin[key] === undefined) origin[key] = serv[key]; //Если ключа нет - создать
            if(isObj(serv[key])) {
                for(let keyT2 in serv[key]) {
                    if(origin[key][keyT2] === undefined) origin[key][keyT2] = serv[key][keyT2];
                    if(isObj(serv[key][keyT2])) {
                        for(let keyT3 in serv[key][keyT2]) {
                            if(origin[key][keyT2][keyT3] === undefined) origin[key][keyT2][keyT3] = serv[key][keyT2][keyT3];
                        }
                    }
                }
            }
        }
    }
    for(let key in origin) {
        if(key !== "members") {
            if(serv[key] === undefined) delete origin[key];
            if(isObj(origin[key])) {
                for(let keyT2 in origin[key]) {
                    if(serv[key][keyT2] === undefined) delete origin[key][keyT2];
                    if(isObj(origin[key][keyT2])) {
                        for(let keyT3 in origin[key][keyT2]) {
                            if(serv[key][keyT2][keyT3] === undefined) delete origin[key][keyT2][keyT3];
                        }
                    }
                }
            } 
        }
    }
    for(let keyer in origin.members) {
        const memberUser = origin.members[keyer];
        const member = bot.createMember(msg);
        for(let key in member) {
            if(memberUser[key] === undefined) memberUser[key] = member[key];
            if(isObj(member[key])) {
                for(let keyT2 in member[key]) {
                    if(memberUser[key][keyT2] === undefined) memberUser[key][keyT2] = member[key][keyT2];
                    if(isObj(member[key][keyT2])) {
                        for(let keyT3 in member[key][keyT2]) {
                            if(memberUser[key][keyT2][keyT3] === undefined) memberUser[key][keyT2][keyT3] = member[key][keyT2][keyT3];
                        }
                    }
                }
            }
        }
    }
}

for(let keys in bot.Memory.users) { //Обновлятель памяти
    const origin = bot.Memory.users[keys];
    const user = bot.createUser(msg);
    for(let key in user) {
        if(origin[key] === undefined) origin[key] = user[key];
        if(isObj(user[key])) {
            for(let keyT2 in user[key]) {
                if(origin[key][keyT2] === undefined) origin[key][keyT2] = user[key][keyT2];
            }
        }
    }
    for(let key in origin) {
        if(user[key] === undefined) delete origin[key]; else
        if(isObj(origin[key])) {
            for(let keyT2 in origin[key]) {
                if(user[key][keyT2] === undefined) delete origin[key][keyT2];
            }
        } 
    }
}


