const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login('MTAwNzE5OTEzOTQ0MTk1MDcyMA.G332Wc.DfKUfcQWo1Ox0UsbY4bBIMlTxDcW3kiDknhq3M');