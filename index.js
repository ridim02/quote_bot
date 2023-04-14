// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv/config');

// Create a new client instance
// src = https://discordjs.guide/popular-topics/intents.html#enabling-intents
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', (message) => {
    console.log(message);
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);

// /quote