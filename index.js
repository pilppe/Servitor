const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


client.login(config.token);
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("ready", function () {
  console.log("Online");
  client.user.setGame("!help komennoille");
});

client.on("message", async message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;


  if (message.content.startsWith(config.prefix + "torisetti") && (message.channel.id === ("347005433623478283") && (message.content.match(/(https?:\/\/).*/g)))) {
    let eliittiLeader = message.guild.roles.get("303898932864352256");
    message.channel.send(`Settisi näyttää vitun täydelliseltä. Annakkus ${eliittiLeader} katsoo tuota settiä`);
  } else if (message.channel.id === ("347005433623478283")) {
    message.delete()
      .then(msg => console.log(`Deleted message from ${msg.author}`));
    message.channel.send(`Väärä kanava tai väärä linkki. Tarkista mihin kirjoitat ja mitä kirjoitat ${message.author.username}`);
  }
  if (message.content.startsWith(config.prefix + "siivous") && (message.author.id !== config.ownerID)); {
    const args = message.content.split(" ").slice(1);
    const deleteCount = parseInt(args[0], 10);

    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Anna numero 2 ja 100:n välillä!");
    const fetched = await message.channel.fetchMessages({
      count: deleteCount
    });
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`En pystyny poistaa viestejä koska: ${error}`));
  }
});