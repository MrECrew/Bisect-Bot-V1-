const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const fs = require('fs');

//resources test

var os = require('os');

console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem())

//Bird command

client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }
  var feelings = ["https://imgur.com/Fob5jni.png", "https://imgur.com/qQY4Lxp.png", "https://imgur.com/UMZI4Ve.png", "https://imgur.com/XbE6L94.png", "https://imgur.com/3732dC4.png", "https://imgur.com/hKgpGCV.png"];
  var feel = Math.floor(Math.random() * feelings.length);
  const I = new Discord.MessageEmbed()
    .setColor("#9B59B6")
    .setTitle("**CUTE BIRD**")
    .setDescription(`${feelings[feel]}`)
    .setImage(`${feelings[feel]}`)
    .setFooter("MrEthλn#8605")
    .setTimestamp()
  if (message.content == '?cb') {
    message.reply(I);
  }
});

client.on('message', (message) => {

const G = new Discord.MessageEmbed()
     .setColor("#9B59B6")
    .setTitle("**Roles**")
    .setDescription(`?announcements - For announcement pings \n ?notimportant - For not important announcement pings \n ?gamenights - For gamenight pings`)
    .setFooter("MrEthλn#8605")
    .setTimestamp()

  if (message.content == `Ethan`) {
    message.channel.send('contacting vmods... code name ETHAN');
  }
    if (message.content == `?how`) {
    message.channel.send("https://discordjs.guide/");
  }
    if (message.content == '[as]') {
      message.channel.send("6,1,2")
    }
       if (message.content == '.killcode 8542') {
      message.channel.send("Warhead Initated: Code Black")
      message.channel.send(".killcode 5423")
    }
  
    if (message.content == "?pings") {
      message.channel.send(G)
    }
    if (message.content == ('?minecraft')) {
      message.channel.send("The earth mc survival server will start soon.")
    }
  if (message.content.includes("!ban")) {
    message.channel.send('faqck u hell nah')
  }
    if (message.content.includes("?rr")) {
    message.channel.send('#rules')
  }
      if (message.content.includes("?pingroles")) {
    message.channel.send(G)
  }
  const badwords = ["fuck", "shit", "crap", "dick", "maddy"]
  if (badwords.some(word => message.content.toLowerCase().includes(word))) {
    message.channel.send('***LANGUAGE***')
  }

  
     const badwords2 = ["fag", "faggot", "nigga", "retard", "faggy","thisisatestslur"]
  if (badwords2.some(word => message.content.toLowerCase().includes(word))) {
    message.reply('Slur detected staff contacted <&@837773674865623090>')
  }
});

  
    

client.on('guildMemberAdd', member => {
    member.guild.channels.get('837775225864978513').send(`Hi, <@${
      member.id
    }>! dont forget to do your introduction in the #adoption-applications channel! \n Stuff you need to include will be at the top of the channel :)`); 
});




client.once('ready', () => {
    console.log('System Running'); 

      const A = new Discord.MessageEmbed()
    .setColor("#00FF00")
    .setTitle("**RESTART**")
    .setDescription(`The bot has restarted, this could either \n be a outage or a update!`)
    .setFooter("MrEthλn#8605")
    .setTimestamp()

    client.channels.cache.get("879423427042222141").send(A);
    
});

//ping roles

client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content == '?announcements') {
    let role = message.member.guild.roles.cache.find(role => role.name === "Announcements");
if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
    message.reply("check ur roles!");
  }
});

client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content == '?notimportant') {
    let role = message.member.guild.roles.cache.find(role => role.name === "Non important announcements");
if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
    message.reply("check ur roles!");
  }
});

client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content == '?gamenights') {
    let role = message.member.guild.roles.cache.find(role => role.name === "Gamenights");
if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
    message.reply("check ur roles!");
  }
});

client.on('ready', (ready) => {

    client.user.setActivity("The offical chaotic fammily bot! ");
});




client.login("ODM4MzE5NjI4OTIwMjkxMzU4.YI5X_g.O4uX5xyKSrYr9tOVNht93J3Ug3w");