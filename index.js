// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
require('dotenv/config');
// const prefix = '/';

// Create a new client instance
// src = https://discordjs.guide/popular-topics/intents.html#enabling-intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

// const channel = client.channels.cache.get(process.env.CHANNELID);
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', async (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) {
    return;
  }

  else if (message.content.startsWith(`${process.env.PREFIX}quote`)) {
    // to read original message from a reply
    const repliedMessage = await message.fetchReference();
    console.log(repliedMessage.content);
    console.log(repliedMessage.author);

    message.channel.send(`${repliedMessage.content}\n -${repliedMessage.author}`);
  }
});
// why are there two instances of the same message as a reply from the bot i am very confused and infuriated
// Log in to Discord with your client's token
client.login(process.env.TOKEN);

// /quote
