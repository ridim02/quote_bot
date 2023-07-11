// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
require('dotenv/config');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) {
    return;
  }

  else if (message.content.startsWith(`${process.env.PREFIX}quote`)) {
    // to read original message from a reply
    const repliedMessage = await message.fetchReference();
    console.log(repliedMessage.content);
    console.log(repliedMessage.author);

    const embed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Quote')
      .setAuthor({ name: `${repliedMessage.author.username}`})
      .setDescription(`${repliedMessage.content}\n`)
      .setThumbnail('https://imgur.com/t/elephant/YxcXHZS')
      .addFields(
        { name: 'Baam', value: 'Chor' }
      )
      .addFields({ name: 'Anish', value: 'Fat', inline: true })
      .setImage('https://imgur.com/t/elephant/YxcXHZS')
      .setTimestamp()
      .setFooter({ text: 'made by ridim' });

      client.channels.fetch(process.env.CHANNELID)
      .then(channel => channel.send({ embeds: [embed] }));

      //  message.channel.send({ embeds: [embed] });
}

});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);
// `
/* client.channels.fetch(process.env.CHANNELID)
      .then(channel => channel.send(embeds : [embed]));
      */
// `${repliedMessage.content}\n -${repliedMessage.author}`