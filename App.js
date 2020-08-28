  
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
// Ping Command
	if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
        // End Ping Command

// Beep Command
	} else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
        // End Beep Command

// Server Information Command
	} else if (message.content === `${prefix}server`) {
        message.channel.send(`***Server Name***: ${message.guild.name}\n***Total Members***: ${message.guild.memberCount}`);
        // End Server information Command

// User Information Command
	} else if (message.content === `${prefix}user-info`) {
        message.channel.send(`***Your Username***: ${message.author.username}\n***Your ID***: ${message.author.id}`);
        // End User Information Command

// Member Joined Date Command
	} else if (message.content === `${prefix}joined`) {
        message.reply(` joined this server on: ${message.guild.joinedAt}.`)
        // End Member Joined Date Command

// Testing Reaction Command
    } else if (message.content === `${prefix}testreact`) {
        message.reply(`This is a random text for the bot to add reactions to...`)
        message.react('😄')
            .then(() => message.react('😩'))
            .then(() => message.react('😋'))
            .catch(() => console.error('One of the emojis failed to react.'));
            //End Testing Reaction Command
    }
});

client.login(token);
