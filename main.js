const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js')
const bot = new Client();

const token = 'NzQ4NjA4NjIzODE4ODMzOTQx.X0f6HA.1lEzcyv2dsZouQpKWT0SiPqhvjI';

const prefix = '_';

bot.on('ready', () => {
    console.log('Commander_SP_Bot is online!');
})

bot.on('message', message =>{
   
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'send':
            const attachment = new Discord.MessageAttachment('https://cdn-www.bluestacks.com/bs-images/banner6_02.jpg')
            message.channel.send(message.author, attachment)
        break;
        case 'tree..julius.rally':
            const attachment2 = new Discord.MessageAttachment('./test1.2.2.jpg');
            message.channel.send('explanations', attachment2)
        break;
        case '.sun-openfield-attack':
            const attachment3 = new Discord.MessageAttachment('./sun-openfield.jpg');
            message.channel.send('explanations', attachment3)
        break;
        case '.sun-garrison':
            const attachment4 = new Discord.MessageAttachment('./sun-garrison.jpg');
            message.channel.send('explanations', attachment4)
        break;
        case '.sun-openfield-nuke':
            const attachment5 = new Discord.MessageAttachment('./sun-openfield-attack.jpg');
            message.channel.send('explanations', attachment5)
        break;
        case '.pelagius-openfield-nuke':
            const attachment6 = new Discord.MessageAttachment('./pelagius-openfield-nuker.jpg');
            message.channel.send('explanations', attachment6)
        break;
        case '.pelagius-openfield':
            const attachment7 = new Discord.MessageAttachment('./pelagius-openfield-general.jpg');
            message.channel.send('explanations', attachment7)
        break;
        case '.belisarius-openfield':
            const attachment8 = new Discord.MessageAttachment('./belisarius-openfield.jpg');
            message.channel.send('explanations', attachment8)
        break;
        case '.belisarius-pve':
            const attachment9 = new Discord.MessageAttachment('./belisarius-pve.jpg');
            message.channel.send('explanations', attachment9)
        break;
        case '.belisarius-speed':
            const attachment10 = new Discord.MessageAttachment('./belisarius-speed.jpg');
            message.channel.send('explanations', attachment10)
        break;
        case '.boudica-pve':
            const attachment11 = new Discord.MessageAttachment('./boudica-pve.jpg');
            message.channel.send('explanations', attachment11)
        break;
        case '.boudica-openfield':
            const attachment12 = new Discord.MessageAttachment('./boudica-openfield.jpg');
            message.channel.send('explanations', attachment12)
        break;
        case '.ysg-openfield-nuke':
            const attachment13 = new Discord.MessageAttachment('./ysg-openfield-nuke.jpg');
            message.channel.send('explanations', attachment13)
        break;
        case '.ysg-garrison':
            const attachment14 = new Discord.MessageAttachment('./ysg-garrison.jpg');
            message.channel.send('explanations', attachment14)
        break;
    }
   
})

bot.login(process.env.token);
