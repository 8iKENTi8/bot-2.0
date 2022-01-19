module.exports = async (bot, interaction) => {
    bot.on('presenceUpdate', async (oldPresence, newPresence) => {
        let member = newPresence.member
        console.log(member.id);
      });
}