// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv/config');
const prefix = '/';
// Create a new client instance
// src = https://discordjs.guide/popular-topics/intents.html#enabling-intents
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  else if (message.content.startsWith(`${prefix}quote`)) {
    //to read original message from a reply
    const repliedMessage = await message.fetchReference();
    console.log(repliedMessage.content);
    message.channel.send(`${repliedMessage.content}`);
  }
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);

// /quote
