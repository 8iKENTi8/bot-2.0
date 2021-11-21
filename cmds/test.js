module.exports = async (bot,message,args,argsF) => { 


const act ={
    type: 'ACTION_ROW',
    components: [{
        type: 'BUTTON',
        label: 'Ответа нет',
        customId: 'b0',
        style: 'SECONDARY',
        url: null,
        disabled: false
    },
    {
    type: 'BUTTON',
    label: 'Ответ есть',
    customId: 'b1',
    style: 'SECONDARY',
    url: null,
    disabled: false
    }]
}

const msg = await message.reply({
    content: "test",
    components: [act]
})

const collector = await msg.createMessageComponentCollector()

collector.on('collect', Interaction =>{
    if(Interaction.customId == "b1"){
        Interaction.reply({ephemeral: true, content: "aboba : "+Interaction.customId})
    }

 
        if(Interaction.customId == "b0"){
            Interaction.reply({ephemeral: false})
        }
   
    
})
}

module.exports.names = ["test"];