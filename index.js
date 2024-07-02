const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.send('Hello');
});
require('events').EventEmitter.defaultMaxListeners = 30;
app.listen(3000, () => {
  console.log('server started');
});
const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");
const fs = require("fs");
const db = require("quick.db");
const moment = require("moment");
require('discord-reply');
const prefix = ""

client.on("ready", () => {
  console.log(`(${client.user.username}) Is Online Now :)`);
  client.user.setActivity("تحت خدمة السيرفر", {
    type: "PLAYING",
    url: "https://youtube.com/@gxwwe-k2v?si=cdXVcB9Kzyth4Kd1"
  });
});

const developer = "1253412936823865408";
const developer1 = "1245556136216887407";

client.on("message", (message) => {
   if (message.channel.type === "dm") {
   if (message.author.id === client.user.id) return;
  client.users.cache.get(developer).send(`**From:** <@!${message.author.id}> \n **Text:** ${message.content}`)
    }
});

process.on("unhandledRejection", error => {
  return console.log(error)
});

const name = "!help"
const Duration = require('humanize-duration');

client.on("message", message => {
      if(message.author.bot) return
    if(!message.guild) return
  let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `منع`) {
if (message.author.id !== developer) return
    let userID = message.content.split(' ').slice(1).join(' ')
    var user = message.mentions.members.first() || client.users.cache.get(userID)
    if (!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name}\`**`)
    db.set(`Blacklist_${user.id}`, "on");
      message.react(`☑`)
  }
});

client.on("message", message => {
      if(message.author.bot) return
    if(!message.guild) return
  let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `سماح`) {
if (message.author.id !== developer) return
    let userID = message.content.split(' ').slice(1).join(' ')
    var user = message.mentions.members.first() || client.users.cache.get(userID)
    if (!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name}\`**`)
    db.delete(`Blacklist_${user.id}`);
    message.react(`✅`)
  }
});



client.on("message", message => {
      if(message.author.bot) return
    if(!message.guild) return
  let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `منع`) {
if (message.author.id !== developer1) return
    let userID = message.content.split(' ').slice(1).join(' ')
    var user = message.mentions.members.first() || client.users.cache.get(userID)
    if (!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name}\`**`)
    db.set(`Blacklist_${user.id}`, "on");
      message.react(`☑`)
  }
});

client.on("message", message => {
      if(message.author.bot) return
    if(!message.guild) return
  let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `سماح`) {
if (message.author.id !== developer1) return
    let userID = message.content.split(' ').slice(1).join(' ')
    var user = message.mentions.members.first() || client.users.cache.get(userID)
    if (!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name}\`**`)
    db.delete(`Blacklist_${user.id}`);
    message.react(`✅`)
  }
});




client.on("message", message => {
      if(message.author.bot) return
    if(!message.guild) return
  let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `منع`) {
if (message.author.id !== developer2) return
    let userID = message.content.split(' ').slice(1).join(' ')
    var user = message.mentions.members.first() || client.users.cache.get(userID)
    if (!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name}\`**`)
    db.set(`Blacklist_${user.id}`, "on");
      message.react(`☑`)
  }
});

client.on("message", message => {
      if(message.author.bot) return
    if(!message.guild) return
  let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `سماح`) {
if (message.author.id !== developer2) return
    let userID = message.content.split(' ').slice(1).join(' ')
    var user = message.mentions.members.first() || client.users.cache.get(userID)
    if (!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name}\`**`)
    db.delete(`Blacklist_${user.id}`);
    message.react(`✅`)
  }
});


client.on("message", message => {
      if(message.author.bot) return
    if(!message.guild) return
  let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `منع`) {
if (message.author.id !== developer3) return
    let userID = message.content.split(' ').slice(1).join(' ')
    var user = message.mentions.members.first() || client.users.cache.get(userID)
    if (!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name}\`**`)
    db.set(`Blacklist_${user.id}`, "on");
      message.react(`☑`)
  }
});

client.on("message", message => {
      if(message.author.bot) return
    if(!message.guild) return
  let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `سماح`) {
if (message.author.id !== developer3) return
    let userID = message.content.split(' ').slice(1).join(' ')
    var user = message.mentions.members.first() || client.users.cache.get(userID)
    if (!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name}\`**`)
    db.delete(`Blacklist_${user.id}`);
    message.react(`✅`)
  }
});


var credits = require("./credits.json");
function save() {
    fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
}

var ashm = require("./ashm.json");
function saves() {
    fs.writeFileSync("./ashm.json", JSON.stringify(ashm, null, 4));
}

client.on("message", async function (message) {
    if(message.author.bot) return
    if(!message.guild) return
    var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
    var args = message.content.split(" ");
    var cmd = args[0].toLowerCase();
    if (!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "توب")) {
            var topArray = Object.values(credits[message.guild.id]);
      var num = 1;
  var sorted = Object.entries(credits[message.guild.id]) 
    .map(v => [v[0], v[0].credits])
    .sort((a, b) => b[0] - a[0])
      sorted.length = 10
      var textStr = `${topArray.sort((a, b) => b.credits - a.credits).slice(0, 10).map(function (user) {
                if (user.credits > 0) {
                    return `**#${num++} |** <@!${user.id}> **\`${user.credits}\`** :dollar:`
                }
            }).join("\n")}`;
            var embed = new Discord.MessageEmbed()
  .setColor("13B813")
                .setAuthor(message.guild.name)
        .setDescription(textStr)
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
            message.lineReply(embed);
}
});

client.on("message", async function (message) {
    if(message.author.bot) return
    if(!message.guild) return
    var args = message.content.split(" ");
  if(message.content.startsWith("-توب")) {
            var topArray = Object.values(credits[message.guild.id]);
      var num = 1;
  var sorted = Object.entries(credits[message.guild.id]) 
    .map(v => [v[0], v[0].credits])
    .sort((a, b) => b[0] - a[0])
      sorted.length = 100000
      var textStr = `${topArray.sort((a, b) => b.credits - a.credits).slice(0, 500).map(function (user) {
                if (user.credits > 0) {
                    return `**#${num++} |** <@!${user.id}> **\`${user.credits}\`** :dollar:`
                }
            }).join("\n")}`;
            var embed = new Discord.MessageEmbed()
  .setColor("13B813")
        .setDescription(textStr)
            .setTimestamp()
            message.channel.send(embed);
}
});

const cooldownratb = new Map();
client.on("message", async message =>{
    if(message.author.bot) return
    if(!message.guild) return
    if (!credits[message.guild.id]) credits[message.guild.id] = {};
    if (!credits[message.guild.id][message.author.id]) credits[message.guild.id][message.author.id] = {
    "credits": 0,
    "id": `${message.author.id}`
    }
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `راتب`) {
      var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
var flos = ["1100", "2250", "3350", "4450", "5550"]
var wt = ["بنده", "باريستا", "مساج", "فراش", "نوم", "ربة منزل", "عاطل", "مذيع", "سواق تكسي", "راعي غنم", "مربية اطفال", "خدامه", "كابتن اوبر", "كهربائي", "عامل توصيل", "صياد", "عسكري", "كابتن كريم", "متذوق طعام", "دكتور", "حلاق", "سكيورتي", "كوفيره", "خطابه", "متداول", "امام مسجد", "مودل", "ممثل", "شرطي", "معلم شاورما", "مدرس", "مبرمج", "طيار", "طباخ", "تاجر ممنوعات", "دكتور", "راعي غنم", "كناس", "سواق", "بياع حبوب", "بقال", "بياع مؤلف", "حفار قبور", "سباك"]
   let amount = flos[Math.floor(Math.random() * flos.length)];
      var amounts = amount * 2
   let wtt = wt[Math.floor(Math.random() * wt.length)];
{const cooldownTime = ms('5m');
  const cooldownUser = cooldownratb.get(message.author.id);
  if(cooldownUser) {
    let remaining = Duration(cooldownUser - Date.now(), { units: ["w", "d", "h", "m", "s"], round: true });

    message.lineReplyNoMention(`> **\`${remaining} ⏱\`**`);
  } else {
       credits[message.guild.id][message.author.id].credits += +amounts;
      var bal = credits[message.guild.id][message.author.id].credits
      const embed = new Discord.MessageEmbed()
          .setAuthor(message.guild.name)
      .setTitle(`ايداع راتب`)
      .setThumbnail(`https://cdn4.iconfinder.com/data/icons/customer-support/500/all_time-512.png`)
      .setDescription(`> **اشعار ايداع راتب**
الراتب: **${amounts}$**
وظيفتك: **${wtt}**
رصيدك: **${bal}$**`)
.setFooter(message.guild.name, message.guild.iconURL())
message.lineReply(embed)
      }
 save();
      cooldownratb.set(message.author.id, Date.now() + cooldownTime);
      setTimeout(() => {
          cooldownratb.delete(message.author.id)
      }, cooldownTime);
  }}
});

      
client.on("message", message =>{
    if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `فلوسي`|| command == prefix + `قروشي`|| command == prefix + `دراهمي`|| command == prefix + `فلوس`|| command == prefix + `دراهم`) {
      var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
 let user = message.mentions.users.first() || message.author;
    if (!credits[message.guild.id]) credits[message.guild.id] = {};
    if (!credits[message.guild.id][user.id]) credits[message.guild.id][user.id] = {
    "credits": 0,
    "id": `${user.id}`
    }
      save();
      var men = user.id;
      var cr = credits[message.guild.id][user.id].credits

      var embed = new Discord.MessageEmbed()
          .setColor(`fcbd0f`)
.setThumbnail('https://cdn.discordapp.com/attachments/911030299230625842/975040506180554822/money.png')
      .setTitle(`${user.username}`, message.author.avatarURL())
      .setDescription(`مجموع فلوس <@!${user.id}> هي\n **\`${cr.toLocaleString("pt-BR")}$\`**`)
      .setTimestamp()
      .setFooter(message.guild.name, message.guild.iconURL())
      return message.lineReplyNoMention(embed)
      save();
}});

setInterval(async function() {
let shm1 = db.get(`shm1`)
let shm2 = db.get(`shm2`)
let shm3 = db.get(`shm3`)
let shm4 = db.get(`shm4`)
let shm5 = db.get(`shm5`)
let shm6 = db.get(`shm6`)
let shm7 = db.get(`shm7`)
let shm8 = db.get(`shm8`)
let amount2 = Math.floor(shm1 / 0.5) + 1500;
let amount3 = Math.floor(shm1 / 80) + 1500;
let demo1 = [`${amount2}`, `${amount3}`];
let amount1 = demo1[Math.floor(Math.random() * demo1.length)];
let apple1 = Math.floor(shm4 / 0.4) + 1350;
let apple2 = Math.floor(shm4 / 100) + 1350;
let demo2 = [`${apple1}`, `${apple2}`];
let apple = demo2[Math.floor(Math.random() * demo2.length)];
let microsoft1 = Math.floor(shm3 / 0.3) + 1500;
let microsoft2 = Math.floor(shm3 / 180) + 1500;
let demo3 = [`${microsoft1}`, `${microsoft2}`];
let microsoft = demo3[Math.floor(Math.random() * demo3.length)];
let amazon1 = Math.floor(shm2 / 0.099) + 3000;
let amazon2 = Math.floor(shm2 / 110) + 3000;
let demo4 = [`${amazon1}`, `${amazon2}`];
let amazon = demo4[Math.floor(Math.random() * demo4.length)];
let zydh1 = Math.floor(shm5 / 0.12) + 3000;
let zydh2 = Math.floor(shm5 / 100) + 3000;
let demo5 = [`${zydh1}`, `${zydh2}`];
let zydh = demo5[Math.floor(Math.random() * demo5.length)];
let jra71 = Math.floor(shm6 / 0.3) + 2000;
let jra72 = Math.floor(shm6 / 80) + 2000;
let demo6 = [`${jra71}`, `${jra72}`];
let jra7 = demo6[Math.floor(Math.random() * demo6.length)];
let khaled1 = Math.floor(shm7 / 0.09) + 2200;
let khaled2 = Math.floor(shm7 / 100) + 2200;
let demo7 = [`${khaled1}`, `${khaled2}`];
let khaled = demo7[Math.floor(Math.random() * demo7.length)];
let diverso1 = Math.floor(shm8 / 0.09) + 1500;
let diverso3 = Math.floor(shm8 / 0.0001) + 1500;
let diverso2 = Math.floor(shm8 / 80) + 1500;
let demo8 = [`${diverso1}`, `${diverso2}`, `${diverso3}`];
let diverso = demo8[Math.floor(Math.random() * demo8.length)];

if(amount1 > 30000) amount1 = 30000
if(apple > 19900) apple = 19900
if(microsoft > 19800) microsoft = 19800
if(amazon > 18500) amazon = 18500
if(zydh > 23000) zydh = 23000
if(jra7 > 20000) jra7 = 20000
if(khaled > 15000) khaled = 15666
if(diverso > 10000) diverso = 10290
db.set(`found`, amount1)
db.set(`apple`, apple)
db.set(`microsoft`, microsoft)
db.set(`amazon`, amazon)
db.set(`zydh`, zydh)
db.set(`jra7`, jra7)
db.set(`khaled`, khaled)
db.set(`diverso`, diverso)
}, 15 * 60 * 1000)

client.on("message", message => {
    if(message.author.bot) return
    if(!message.guild) return
    if (!ashm[message.guild.id]) ashm[message.guild.id] = {};
    if (!ashm[message.guild.id][message.author.id]) ashm[message.guild.id][message.author.id] = {
        "shm1": 0,
        "shm2": 0,
        "shm3": 0,
        "shm4": 0,
        "shm5": 0,
        "shm6": 0,
        "shm7": 0,
        "shm8": 0,
        "total": 0,
        "id": `${message.author.id}`,
    }
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `اسهم`) {
      let found = db.get(`found`)
      let apple = db.get(`apple`)
      let microsoft = db.get(`microsoft`)
      let amazon = db.get(`amazon`)
      let zydh = db.get(`zydh`)
      let jra7 = db.get(`jra7`)
      let khaled = db.get(`khaled`)
      let diverso = db.get(`diverso`)
      var embed = new Discord.MessageEmbed()
     .setTitle(`سوق الاسهم`)
     .setColor(`2f3135`)
    .setThumbnail(`https://cdn2.iconfinder.com/data/icons/webina-seo-development-and-marketing/128/seo_web-91-512.png`)
          .addField(`**\`1\`** : **\`شركة فاوند\`**`, `السعر: **\`${found}\`**`, true)
          .addField(`**\`2\`** : **\`شركة امازون\`**`, `السعر: **\`${amazon}\`**`, true)
          .addField(`**\`3\`** : **\`مايكروسوفت\`**`, `السعر: **\`${microsoft}\`**`, true)
          .addField(`**\`4\`** : **\`شركة أبل\`**`, `السعر: **\`${apple}\`**`, true)
          .addField(`**\`5\`** : **\`مقهى\`**`, `السعر: **\`${zydh}\`**`, true)
          .addField(`**\`6\`** : **\`شركة جراح\`**`, `السعر: **\`${jra7}\`**`, true)
          .addField(`**\`7\`** : **\`محطة للإتصالات\`**`, `السعر: **\`${khaled}\`**`, true)
          .addField(`**\`8\`** : **\`غراج\`**`, `السعر: **\`${diverso}\`**`, true)
      .setFooter(`${message.guild.name} • لشراء الاسهم اكتب: #شراء [رقم الشركة] [عدد الاسهم]`, message.guild.iconURL())
      message.lineReply(embed)
      saves();
}});

client.on("message", message => {
    if(message.author.bot) return
    if(!message.guild) return
    if (!ashm[message.guild.id]) ashm[message.guild.id] = {};
    if (!ashm[message.guild.id][message.author.id]) ashm[message.guild.id][message.author.id] = {
        "shm1": 0,
        "shm2": 0,
        "shm3": 0,
        "shm4": 0,
        "shm5": 0,
        "shm6": 0,
        "shm7": 0,
        "shm8": 0,
        "total": 0,
        "id": `${message.author.id}`,
    }
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `شراء`) {
      let args = message.content.toLowerCase().split(" ")[1];
      if(!args) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} [رقم الشركة] [عدد الاسهم]\`**`)
      let found = db.get(`found`)
      let apple = db.get(`apple`)
      let microsoft = db.get(`microsoft`)
      let amazon = db.get(`amazon`)
      let zydh = db.get(`zydh`)
      let jra7 = db.get(`jra7`)
      let khaled = db.get(`khaled`)
      let diverso = db.get(`diverso`)
      let args2 = message.content.toLowerCase().split(" ")[2];
      var founds = found * args2
      var apples = apple * args2
      var diversos = diverso * args2
      var microsofts = microsoft * args2
      var amazons = amazon * args2
      var zydhs = zydh * args2
      var jra7s = jra7 * args2
      var khaleds = khaled * args2
      if(isNaN(args)) return 
      if(isNaN(args2)) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} [رقم الشركة] [عدد الاسهم]\`**`)
    if (message.content.includes('-')) return message.lineReply(`** لايمكنك وضع عدد بالسالب **`)
    let member = credits[message.guild.id][message.author.id].credits
    if (member < founds) {
        return message.lineReply(`** فلوسك أقل من المبلغ **`)
    }
    if(args === "1") {
        db.add(`shm1`, args2)
    ashm[message.guild.id][message.author.id].shm1 += +args2
    ashm[message.guild.id][message.author.id].total += +founds
        credits[message.guild.id][message.author.id].credits += -founds
        saves();
        const embed1 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية شراء`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/office-perks/64/equity-512.png`)
        .setDescription(`> **عملية شراء اسهم**
المشتري: ${message.author}
عدد الاسهم: **${args}**
المبلغ: **${founds}$**`)
        .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed1)
    }
    if(args === "2") {
        db.add(`shm2`, args2)
    ashm[message.guild.id][message.author.id].shm2 += +args2
    ashm[message.guild.id][message.author.id].total += +amazons
        credits[message.guild.id][message.author.id].credits += -amazons
        saves();
        const embed2 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية شراء`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/office-perks/64/equity-512.png`)
        .setDescription(`> **عملية شراء اسهم**
المشتري: ${message.author}
عدد الاسهم: **${args}**
المبلغ: **${amazons}$**`)
        .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed2)
    }
    if(args === "3") {
        db.add(`shm3`, args2)
    ashm[message.guild.id][message.author.id].shm3 += +args2
    ashm[message.guild.id][message.author.id].total += +microsofts
        credits[message.guild.id][message.author.id].credits += -microsofts
        saves();
        const embed3 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية شراء`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/office-perks/64/equity-512.png`)
        .setDescription(`> **عملية شراء اسهم**
المشتري: ${message.author}
عدد الاسهم: **${args}**
المبلغ: **${microsofts}$**`)
        .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed3)
    }
    if(args === "4") {
        db.add(`shm4`, args2)
    ashm[message.guild.id][message.author.id].shm4 += +args2
    ashm[message.guild.id][message.author.id].total += +apples
        credits[message.guild.id][message.author.id].credits += -apples
        saves();
        const embed4 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية شراء`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/office-perks/64/equity-512.png`)
        .setDescription(`> **عملية شراء اسهم**
المشتري: ${message.author}
عدد الاسهم: **${args}**
المبلغ: **${apples}$**`)
        .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed4)
    }
    if(args === "5") {
        db.add(`shm5`, args2)
    ashm[message.guild.id][message.author.id].shm5 += +args2
    ashm[message.guild.id][message.author.id].total += +zydhs
        credits[message.guild.id][message.author.id].credits += -zydhs
        saves();
        const embed5 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية شراء`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/office-perks/64/equity-512.png`)
        .setDescription(`> **عملية شراء اسهم**
المشتري: ${message.author}
عدد الاسهم: **${args}**
المبلغ: **${zydhs}$**`)
        .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed5)
    }
    if(args === "6") {
        db.add(`shm6`, args2)
    ashm[message.guild.id][message.author.id].shm6 += +args2
    ashm[message.guild.id][message.author.id].total += +jra7s
        credits[message.guild.id][message.author.id].credits += -jra7s
        saves();
        const embed6 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية شراء`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/office-perks/64/equity-512.png`)
        .setDescription(`> **عملية شراء اسهم**
المشتري: ${message.author}
عدد الاسهم: **${args}**
المبلغ: **${jra7s}$**`)
        .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed6)
    }
      if(args === "7") {
          db.add(`shm7`, args2)
    ashm[message.guild.id][message.author.id].shm7 += +args2
    ashm[message.guild.id][message.author.id].total += +khaleds
        credits[message.guild.id][message.author.id].credits += -khaleds
          saves();
        const embed7 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية شراء`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/office-perks/64/equity-512.png`)
        .setDescription(`> **عملية شراء اسهم**
المشتري: ${message.author}
عدد الاسهم: **${args}**
المبلغ: **${khaleds}$**`)
        .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed7)
    }
      if(args === "8") {
          db.add(`shm8`, args2)
    ashm[message.guild.id][message.author.id].shm8 += +args2
    ashm[message.guild.id][message.author.id].total += +diversos
        credits[message.guild.id][message.author.id].credits += -diversos
          saves();
        const embed8 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية شراء`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/office-perks/64/equity-512.png`)
        .setDescription(`> **عملية شراء اسهم**
المشتري: ${message.author}
عدد الاسهم: **${args}**
المبلغ: **${diversos}$**`)
        .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed8)
    }
    saves();
}});

client.on("message", message => {
        if(message.author.bot) return
    if(!message.guild) return
    if (!ashm[message.guild.id]) ashm[message.guild.id] = {};
    if (!ashm[message.guild.id][message.author.id]) ashm[message.guild.id][message.author.id] = {
        "shm1": 0,
        "shm2": 0,
        "shm3": 0,
        "shm4": 0,
        "shm5": 0,
        "shm6": 0,
        "shm7": 0,
        "shm8": 0,
        "total": 0,
        "id": `${message.author.id}`,
    }
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `اسهمي`) {
      let user = message.mentions.members.first() || message.author
      if (!ashm[message.guild.id]) ashm[message.guild.id] = {};
    if (!ashm[message.guild.id][user.id]) ashm[message.guild.id][user.id] = {
        "shm1": 0,
        "shm2": 0,
        "shm3": 0,
        "shm4": 0,
        "shm5": 0,
        "shm6": 0,
        "shm7": 0,
        "shm8": 0,
        "total": 0,
        "id": `${user.id}`,
    }
      saves();
      let ashm1 = ashm[message.guild.id][user.id].shm1
      let all = ashm[message.guild.id][user.id].total
      let ashm2 = ashm[message.guild.id][user.id].shm2
      let ashm3 = ashm[message.guild.id][user.id].shm3
      let ashm4 = ashm[message.guild.id][user.id].shm4
      let ashm5 = ashm[message.guild.id][user.id].shm5
      let ashm6 = ashm[message.guild.id][user.id].shm6
      let ashm7 = ashm[message.guild.id][user.id].shm7
      let ashm8 = ashm[message.guild.id][user.id].shm8
      if(all === 0) return message.lineReply(`> هذا الشخص لايملك اسهم`)
      const embed = new Discord.MessageEmbed()
     .setTitle(`مجموع الاسهم`)
     .setColor(`2f3135`)
          .setThumbnail(`https://cdn2.iconfinder.com/data/icons/employees-perks-and-benefits/512/Perks_512x512_4Stock-512.png`)
          .addField(`**\`1\`** : **\`شركة فاوند\`**`, `سهم: **\`${ashm1}\`**`, true)
          .addField(`**\`2\`** : **\`شركة امازون\`**`, `سهم: **\`${ashm2}\`**`, true)
          .addField(`**\`3\`** : **\`مايكروسوفت\`**`, `سهم: **\`${ashm3}\`**`, true)
          .addField(`**\`4\`** : **\`شركة أبل\`**`, `سهم: **\`${ashm4}\`**`, true)
          .addField(`**\`5\`** : **\`مقهى\`**`, `سهم: **\`${ashm5}\`**`, true)
          .addField(`**\`6\`** : **\`شركة جراح\`**`, `سهم: **\`${ashm6}\`**`, true)
          .addField(`**\`7\`** : **\`شركة للإتصالات\`**`, `سهم: **\`${ashm7}\`**`, true)
          .addField(`**\`8\`** : **\`غراج\`**`, `سهم: **\`${ashm8}\`**`, true)
      .setFooter(`${message.guild.name} • لبيع الاسهم اكتب: #بيع [رقم الشركة] [عدد الاسهم]`, message.guild.iconURL())
      message.lineReply(embed)
      saves();
}});

client.on("message", message => {
        if(message.author.bot) return
    if(!message.guild) return
    if (!ashm[message.guild.id]) ashm[message.guild.id] = {};
    if (!ashm[message.guild.id][message.author.id]) ashm[message.guild.id][message.author.id] = {
        "shm1": 0,
        "shm2": 0,
        "shm3": 0,
        "shm4": 0,
        "shm5": 0,
        "shm6": 0,
        "shm7": 0,
        "shm8": 0,
        "total": 0,
        "id": `${message.author.id}`,
    }
      if (message.author.bot || message.channel.type === "dm") return;
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `بيع`) {
      let args = message.content.toLowerCase().split(" ")[1];
      if(!args) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} [رقم الشركة] [عدد الاسهم]\`**`)
      let found = db.get(`found`)
      let apple = db.get(`apple`)
      let microsoft = db.get(`microsoft`)
      let amazon = db.get(`amazon`)
      let zydh = db.get(`zydh`)
      let jra7 = db.get(`jra7`)
      let khaled = db.get(`khaled`)
      let diverso = db.get(`diverso`)
      let member = credits[message.guild.id][message.author.id].credits
      let args2 = message.content.toLowerCase().split(" ")[2];
      var founds = found * args2
      var apples = apple * args2
      var microsofts = microsoft * args2
      var amazons = amazon * args2
      var zydhs = zydh * args2
      var jra7s = jra7 * args2
      var khaleds = khaled * args2
      var diversos = diverso * args2
      var all = ashm[message.guild.id][message.author.id].total
      if(isNaN(args)) return 
      if(isNaN(args2)) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} [رقم الشركة] [عدد الاسهم]\`**`)
    if (message.content.includes('-')) return message.lineReply(`** لايمكنك وضع عدد بالسالب **`)
          if(args === "0") {
message.react(`❌`);
    }
    if(args === "1") {
        let aaaas1 = ashm[message.guild.id][message.author.id].com1
        if (aaaas1 === "0") return message.lineReply(`> لايوجد لديك اسهم في هذه الشركة!`)
        let sshm1 = ashm[message.guild.id][message.author.id].shm1
        if (args2 > sshm1) return message.lineReply(`> لايوجد معك هذا العدد من الاسهم!`)
        db.add(`shm1`, -args2)
        ashm[message.guild.id][message.author.id].shm1 -= args2
        var shm1 = ashm[message.guild.id][message.author.id].shm1
        var ff = all / shm1 * args2
    ashm[message.guild.id][message.author.id].total -= ff
        credits[message.guild.id][message.author.id].credits += +founds
        saves();
        const embed1 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية بيع`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/INVESTMENT-512.png`)
        .setDescription(`> **عملية بيع اسهم**
المستفيد: ${message.author}
عدد الاسهم: **${args2}**
المبلغ **${founds}$**`)
    .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed1)
    }
    if(args === "2") {
        let aaaas2 = ashm[message.guild.id][message.author.id].com2
        if (aaaas2 === "0") return message.lineReply(`> لايوجد لديك اسهم في هذه الشركة!`)
        let sshm2 = ashm[message.guild.id][message.author.id].shm2
        if (args2 > sshm2) return message.lineReply(`> لايوجد معك هذا العدد من الاسهم!`)
        db.add(`shm2`, -args2)
ashm[message.guild.id][message.author.id].shm2 -= args2
        var shm1 = ashm[message.guild.id][message.author.id].shm1
        var shm2 = ashm[message.guild.id][message.author.id].shm2
        var ff = all / shm1 * args2
    ashm[message.guild.id][message.author.id].total -= ff
        credits[message.guild.id][message.author.id].credits += +amazons
        saves();
        const embed2 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية بيع`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/INVESTMENT-512.png`)
        .setDescription(`> **عملية بيع اسهم**
المستفيد: ${message.author}
عدد الاسهم: **${args2}**
المبلغ **${amazons}$**`)
    .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed2)
    }
    if(args === "3") {
      let aaaas3 = ashm[message.guild.id][message.author.id].com3
        if (aaaas3 === "0") return message.lineReply(`> لايوجد لديك اسهم في هذه الشركة!`)
    let sshm3 = ashm[message.guild.id][message.author.id].shm3
        if (args2 > sshm3) return message.lineReply(`> لايوجد معك هذا العدد من الاسهم!`)
        db.add(`shm3`, -args2)
    ashm[message.guild.id][message.author.id].shm3 -= args2
        var shm3 = ashm[message.guild.id][message.author.id].shm3
        var ff = all / shm1 * args2
    ashm[message.guild.id][message.author.id].total -= ff
        credits[message.guild.id][message.author.id].credits += +microsofts
        saves();
        const embed3 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية بيع`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/INVESTMENT-512.png`)
        .setDescription(`> **عملية بيع اسهم**
المستفيد: ${message.author}
عدد الاسهم: **${args2}**
المبلغ **${microsofts}$**`)
    .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed3)
    }
    if(args === "4") {
        let sshm4 = ashm[message.guild.id][message.author.id].shm4
                let aaaas4 = ashm[message.guild.id][message.author.id].com4
        if (aaaas4 === "0") return message.lineReply(`> لايوجد لديك اسهم في هذه الشركة!`)
        if (args2 > sshm4) return message.lineReply(`> لايوجد معك هذا العدد من الاسهم!`)
        db.add(`shm4`, -args2)
    ashm[message.guild.id][message.author.id].shm4 -= args2
        var shm4 = ashm[message.guild.id][message.author.id].shm4
        var ff = all / shm1 * args2
    ashm[message.guild.id][message.author.id].total -= ff
        credits[message.guild.id][message.author.id].credits += +apples
        saves();
        const embed4 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية بيع`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/INVESTMENT-512.png`)
        .setDescription(`> **عملية بيع اسهم**
المستفيد: ${message.author}
عدد الاسهم: **${args2}**
المبلغ **${apples}$**`)
    .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed4)
    }
    if(args === "5") {
   let aaaas5 = ashm[message.guild.id][message.author.id].com5
        if (aaaas5 === "0") return message.lineReply(`> لايوجد لديك اسهم في هذه الشركة!`)
        let sshm5 = ashm[message.guild.id][message.author.id].shm5
   if (args2 > sshm5) return message.lineReply(`> لايوجد معك هذا العدد من الاسهم!`)
        db.add(`shm5`, -args2)
   ashm[message.guild.id][message.author.id].shm5 -= args2
        var shm5 = ashm[message.guild.id][message.author.id].shm5
        var ff = all / shm1 * args2
    ashm[message.guild.id][message.author.id].total -= ff
        credits[message.guild.id][message.author.id].credits += +zydhs
        saves();
        const embed5 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية بيع`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/INVESTMENT-512.png`)
        .setDescription(`> **عملية بيع اسهم**
المستفيد: ${message.author}
عدد الاسهم: **${args2}**
المبلغ **${zydhs}$**`)
    .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed5)
    }
    if(args === "6") {
        let aaaas6 = ashm[message.guild.id][message.author.id].com6
        if (aaaas6 === "0") return message.lineReply(`> لايوجد لديك اسهم في هذه الشركة!`)
        let sshm6 = ashm[message.guild.id][message.author.id].shm6
        if (args2 > sshm6) return message.lineReply(`> لايوجد معك هذا العدد من الاسهم!`)
        db.add(`shm6`, -args2)
   ashm[message.guild.id][message.author.id].shm6 -= args2
        var shm6 = ashm[message.guild.id][message.author.id].shm6
        var ff = all / shm1 * args2
    ashm[message.guild.id][message.author.id].total -= ff
        credits[message.guild.id][message.author.id].credits += +jra7s
        saves();
        const embed6 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية بيع`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/INVESTMENT-512.png`)
        .setDescription(`> **عملية بيع اسهم**
المستفيد: ${message.author}
عدد الاسهم: **${args2}**
المبلغ **${jra7s}$**`)
    .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed6)
    }
      if(args === "7") {
        let aaaas7 = ashm[message.guild.id][message.author.id].com7
        if (aaaas7 === "0") return message.lineReply(`> لايوجد لديك اسهم في هذه الشركة!`)
        let sshm7 = ashm[message.guild.id][message.author.id].shm7
        if (args2 > sshm7) return message.lineReply(`> لايوجد معك هذا العدد من الاسهم!`)
          db.add(`shm7`, -args2)
   ashm[message.guild.id][message.author.id].shm7 -= args2
          var shm7 = ashm[message.guild.id][message.author.id].shm7
          var ff = all / shm1 * args2
    ashm[message.guild.id][message.author.id].total -= ff
        credits[message.guild.id][message.author.id].credits += +khaleds
          saves();
        const embed7 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية بيع`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/INVESTMENT-512.png`)
        .setDescription(`> **عملية بيع اسهم**
المستفيد: ${message.author}
عدد الاسهم: **${args2}**
المبلغ **${khaleds}$**`)
    .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed7)
    }
      if(args === "8") {
     let sshm8 = ashm[message.guild.id][message.author.id].shm8
     let aaaas8 = ashm[message.guild.id][message.author.id].com8
        if (aaaas8 === "0") return message.lineReply(`> لايوجد لديك اسهم في هذه الشركة!`)
        if (args2 > sshm8) return message.lineReply(`> لايوجد معك هذا العدد من الاسهم!`)
          db.add(`shm8`, -args2)
   ashm[message.guild.id][message.author.id].shm8 -= args2
          var shm8 = ashm[message.guild.id][message.author.id].shm8
          var ff = all / shm1 * args2
    ashm[message.guild.id][message.author.id].total -= ff
        credits[message.guild.id][message.author.id].credits += +diversos
          saves();
        const embed8 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle(`عملية بيع`)
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/INVESTMENT-512.png`)
        .setDescription(`> **عملية بيع اسهم**
المستفيد: ${message.author}
عدد الاسهم: **${args2}**
المبلغ **${diversos}$**`)
    .setFooter(`${message.guild.name} • ${prefix}اسهمي`, message.guild.iconURL())
        return message.lineReply(embed8)
    }
      saves();
}});

client.on("message", async function (message) {
    if(message.author.bot) return
    if(!message.guild) return
    var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
    var args = message.content.split(" ");
    var cmd = args[0].toLowerCase();
    if (!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "متداولين")) {
           var topArray = Object.values(ashm[message.guild.id]);
      var num = 1;
  var sorted = Object.entries(ashm[message.guild.id]) 
    .map(v => [v[0], v[0].total])
    .sort((a, b) => b[0] - a[0])
      sorted.length = 10
      var textStr = `${topArray.sort((a, b) => b.total - a.total).slice(0, 5).map(function (user) {
                if (user.total > 0) {
                                        return `**#${num++}** | <@!${user.id}> | **${user.total}** 💰`
                }
            }).join("\n")}`;
        //  args[22] += `**#${num++} |** <@${sorted.credits}> | **\`\`** :dollar: \n`;
            var embed = new Discord.MessageEmbed()
                .setTitle(`قائمة أعلى المتداولين`)
  .setColor("#076F7B")
        .setDescription(textStr)
                .setFooter(message.guild.name, message.guild.iconURL())
            .setTimestamp()
            message.channel.send(embed);
}
});

client.on("message", async message =>{
    if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `تحويل`) {
      var author = message.author.id
      var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
    let args = message.content.split(" ").slice(2)
    let user = message.mentions.members.first() 
    let member = credits[message.guild.id][message.author.id].credits
    if (!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)

    if (!args) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)

    if (message.content.includes('-')) { 
      return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
    }
    if (member < args) {
        return message.lineReply(`**\`رصيدك البنكي اقل من المبلغ المراد تحويله\`**`)
    }
      if(user.id === message.author.id) return message.lineReply(`***\`ماتقدر تحول لنفسك\`***`)
    if(isNaN(args)) 
return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
    if (!credits[message.guild.id]) credits[message.guild.id] = {};
    if (!credits[message.guild.id][user.id]) credits[message.guild.id][user.id] = {
    "credits": 0,
    "id": `${user.id}`
    }
      save();
      const embed = new Discord.MessageEmbed()
      .setTitle(`حوالة بنكية`)
          .setAuthor(message.guild.name, message.guild.iconURL())
      .setColor(`97f3f6`)
      .setThumbnail(`https://cdn.discordapp.com/attachments/911030299230625842/974621711158878248/investment.png`)
          .setDescription(`من : ${message.author}
حساب رقم: **\`${message.author.id}\`**
الى : <@!${user.id}>
حساب رقم: **\`${user.id}\`**
المبلغ : **${args}$**`)
.setFooter(`يمكنك استعمال المبلغ بعد 3 دقائق واي محاولة سيتم سحبه`)
      message.lineReply(embed)
      const embed2 = new Discord.MessageEmbed()
      .setTitle(`إيصال التحويل`)
      .setColor(`97f3f6`)
          .setThumbnail(`https://cdn.discordapp.com/attachments/911030299230625842/974621711158878248/investment.png`)
      .setDescription(`حوالة من: ${message.author}
حساب رقم: \n**\`${message.author.id}\`**\n
المبلغ: **${args}**\n
لعرض التحويل: [[اضغط هنا](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})]`)
      .setFooter(`يمكنك استعمال المبلغ بعد 3 دقائق واي محاولة سيتم سحبه`)
      client.users.cache.get(user.id).send(embed2)
      credits[message.guild.id][message.author.id].credits += -args;
     credits[message.guild.id][user.id].credits += +args
      db.add(`t7_${user.id}`, args)
           save();
      setTimeout(() => {
            db.delete(`t7_${user.id}`)
   }, ms('3m'));
}});

const cooldown7mayh = new Map();
client.on("message", async message =>{
      if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `حمايه`) {
      let user = message.author.id
      let member = credits[message.guild.id][message.author.id].credits
if(member < 100000) return message.lineReply(`> رصيدك البنكي اقل من مبلغ الحمايه`)
      {const cooldownTime = ms('1h');
  const cooldownUser = cooldown7mayh.get(message.author.id);
  if(cooldownUser) {
    let remaining = Duration(cooldownUser - Date.now(), { units: ["w", "d", "h", "m", "s"], round: true });

    message.lineReplyNoMention(`> \`${remaining} ⏱\``);
  } else {
      time = "1h"
      db.set(`7mayh_${message.author.id}`, message.author.id)
      credits[message.guild.id][message.author.id].credits += -200000;
      message.lineReply(`تم تفعيل الحمايه لمدة ساعة`)
      cooldown7mayh.set(message.author.id, Date.now() + cooldownTime);
      setTimeout(() => {
          cooldown7mayh.delete(message.author.id)
      }, cooldownTime);
   setTimeout(() => {
       client.users.cache.get(message.author.id).send(`نفيدكم بانتهاء الحماية الخاصه بكم وان حسابكم قد يتعرض للاحتيال والنهب في اي لحظة`)
            db.delete(`7mayh_${message.author.id}`)
   }, ms(time));
  }
}}});

//



//

const cooldownb5 = new Map();
client.on("message", async message =>{
      if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `بخشيش`) {
      var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
  let amount = Math.floor(Math.random() * 1000) + 100;
    let user = message.author;

{const cooldownTimeb5 = ms('3m');
  const cooldownUserb5 = cooldownb5.get(message.author.id);
  if(cooldownUserb5) {
    let remaining = Duration(cooldownUserb5 - Date.now(), { units: ["w", "d", "h", "m", "s"], round: true });
message.lineReplyNoMention(`> **\`${remaining} ⏱\`**`);
  } else {
    credits[message.guild.id][message.author.id].credits += +amount;
message.lineReply(`امسك **\`${amount}\`** يا فقير
ما نقص مال من صدقه`)
      cooldownb5.set(message.author.id, Date.now() + cooldownTimeb5);
      setTimeout(() => {
          cooldownb5.delete(message.author.id)
      }, cooldownTimeb5);
  }
}}});

client.on("message", async message =>{
    if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `تبرع`) {
      var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
    let args = message.content.toLowerCase().split(" ")[1];
    let member = credits[message.guild.id][message.author.id].credits
      if (!args) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} 500\`**`)

    if (message.content.includes('-')) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} 500\`**`)
    if (member < args) return message.lineReply(`**\`مبلغ التبرع فوق رصيدك\`**`)
if(isNaN(args)) 
return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} 500\`**`)
     if(args < 500) return message.lineReply(`**\`أقل مبلغ هو للتبرع 500\`**`)
    credits[message.guild.id][client.user.id].credits += +args;
      credits[message.guild.id][message.author.id].credits += -args;
      save();
      let bal = credits[message.guild.id][message.author.id].credits
message.lineReply(`شكراً لك على التبرع\n **مبلغ التبرع** **\`${args}\`**\n**رصيدك الحالي** **\`${bal}\`**`)
      const embed2 = new Discord.MessageEmbed()
      .setTitle(`إيصال التبرع`)
      .setColor(`2f3135`)
      .setDescription(`من: ${message.author}
حساب رقم: \n**\`${message.author.id}\`**\n
المبلغ: **${args}**\n
لعرض التحويل: [[اضغط هنا](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})]`)
      client.users.cache.get(message.author.id).send(embed2)
}});

const cooldownass = new Map();
client.on("message", async message =>{
    if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `استثمار`) {
      var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
      var author = message.author.id
    let args = message.content.toLowerCase().split(" ")[1];
    let member = credits[message.guild.id][author].credits
      var khh = args / 30
      var args1 = args / 3.92
      var args2 = args / 4.4
let amount1 = Math.floor(Math.random() * args1) + 1;
let amount2 = Math.floor(Math.random() * -khh);
let amount3 = Math.floor(Math.random() * args2) + 1;

let demo = [`${amount1}`, `${amount2}`, `${amount3}`];
let amount = demo[Math.floor(Math.random() * demo.length)];
{const cooldownTimeass = ms('5m');
  const cooldownUserass = cooldownass.get(message.author.id);
  if(cooldownUserass) {
    let remaining = Duration(cooldownUserass - Date.now(), { units: ["w", "d", "h", "m", "s"], round: true });

   message.lineReplyNoMention(`> **\`${remaining} ⏱\`**`);
  } else {
          if (!args) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} 500\`**`)

    if (message.content.includes('-')) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} 500\`**`)
    if(isNaN(args)) 
return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} 500\`**`)
    if (member < args) return message.lineReply(`**\`رصيدك اقل من المبلغ\`**`)

     if(args < 500) return message.lineReply(`**\`اقل مبلغ هو 500\`**`)
            var t7 = db.get(`t7_${message.author.id}`)
      var m7 = member - t7
    if(m7 < args) { 
        credits[message.guild.id][message.author.id].credits -= t7
    message.lineReply(`> **\`${t7}$\`** تم سحب \nالسبب: محاولة غسيل اموال`)
    } else {
    credits[message.guild.id][author].credits += +amount;
      save();
      let bal = credits[message.guild.id][author].credits
      function percentage(partialValue, totalValue) {
   return (100 * partialValue) / totalValue;
} 
      const nsbhh = await percentage(amount, args)
var number = nsbhh
var nsbh = Math.round(number * 10) / 10;
      
const embed1 = new Discord.MessageEmbed()
      .setTitle(`استثمار 📈`) .setThumbnail('https://cdn.discordapp.com/attachments/911030299230625842/975044597719896064/as2.png')
      .setDescription(`> **إستثمار خاسر**
نسبة الخسارة: **%${nsbh}**
مبلغ الخسارة: **$${amount}**
رصيدك: **$${bal}**`)
.setFooter(message.guild.name, message.guild.iconURL())
if(amount.includes("-")) return message.lineReply(embed1);

      const embed2 = new Discord.MessageEmbed()
            .setTitle(`استثمار 📈`)
  .setThumbnail('https://cdn.discordapp.com/attachments/911030299230625842/974610427810045982/as1.png')
      .setDescription(`> **إستثمار رابح**
نسبة الربح: **%${nsbh}**
الارباح: **$${amount}**
رصيدك: **$${bal}**`)
.setFooter(message.guild.name, message.guild.iconURL())
message.lineReply(embed2);
      cooldownass.set(message.author.id, Date.now() + cooldownTimeass);
      setTimeout(() => {
          cooldownass.delete(message.author.id)
      }, cooldownTimeass);
  }}
}}});

const tdaol = new Map();
client.on("message", async message =>{
      if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `تداول`) {
      var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
    let args = message.content.split(' ').slice(1).join(' ')
    let member = credits[message.guild.id][message.author.id].credits
const cooldownTime = ms('5m');
const cooldownUser = tdaol.get(message.author.id);
if(cooldownUser) {
let remaining = Duration(cooldownUser - Date.now(), { units: ["m", "s"], round: true });
message.lineReply(`> **\`${remaining} ⏱\`**`);
  } else {
          if (!args) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} 500\`**`)

    if (message.content.includes('-')) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} 500}\`**`)
    if(isNaN(args)) 
return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} 500\`**`)
    if (member < args) return message.lineReply(`> **\`المبلغ فوق رصيدك\`**`)
    if(args < 500) return message.lineReply(`> **\`أقل مبلغ 500\`**`)
          var t7 = db.get(`t7_${message.author.id}`)
      var m7 = member - t7
    if(m7 < args) { 
        credits[message.guild.id][message.author.id].credits -= t7
    message.lineReply(`> **\`${t7}$\`** تم سحب \nالسبب: محاولة غسيل اموال`)
    } else {
    var wt = ["اسهم ابل","بوفيه","اسهم شركة تويوتا","شركة امازون","ستاربكس","سوق الغنم","اسهم مايكروسوفت","شركة شركة نون","السيرفر","اسهم قوقل","اسهم ماكدونالدز","اسهم بنك الراجحي","ارامكو السعوديه","عملة الايثيريوم","مشروع نيوم","شركة تيسلا","شركة المراعي","اسواق المال","عملة البيتكوين","شركة زيده للعقار"]
      var tdaols = args / 1.2
let amount1 = Math.floor(Math.random() * tdaols) + 1;
let amount2 = Math.floor(Math.random() * -tdaols) + 1;
let wtt = wt[Math.floor(Math.random() * wt.length)];
let demo = [`${amount1}`, `${amount2}`];
let amount = demo[Math.floor(Math.random() * demo.length)];
          function percentage(partialValue, totalValue) {
   return (100 * partialValue) / totalValue;
} 
      const nsbhh = await percentage(amount, args)
var number = nsbhh
var nsbh = Math.round(number * 10) / 10;
    credits[message.guild.id][message.author.id].credits += +amount;
      let bal = credits[message.guild.id][message.author.id].credits
    const embed1 = new Discord.MessageEmbed()
    .setTitle(`تداول`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/911030299230625842/974624450098126888/4221653.png`)
        .setAuthor(message.guild.name)
    .setDescription(`**تداول فاشل**
تداولت في ${wtt}
مبلغ التداول: **${args}$**
الخسارة: **${amount}$**
رصيدك: **${bal}$**`)
.setFooter(message.guild.name, message.guild.iconURL())
if(amount.includes("-")) return message.lineReply(embed1)
    const embed2 = new Discord.MessageEmbed()
        .setTitle(`تداول رابح`)
        .setAuthor(message.guild.name)
    .setThumbnail(`https://cdn.discordapp.com/attachments/911030299230625842/974625117739057192/4221633.png`)
    .setDescription(`**تداول رابح بنسبة __${nsbh}%__**
تداولت في ${wtt}
مبلغ التداول: **${args}$**
الارباح: **${amount}$**
رصيدك: **${bal}$**`)
.setFooter(message.guild.name, message.guild.iconURL())
    message.lineReply(embed2)
tdaol.set(message.author.id, Date.now() + cooldownTime);
    setTimeout(() => {
        tdaol.delete(message.author.id) 
    }, cooldownTime);
  }}
}});

const cooldownnhb = new Map();
const cooldowmnnhb = new Map();
client.on("message", async message =>{
    if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `سرقه`|| command == prefix + `سرق`|| command == prefix + `سرقة`|| command == prefix + `نهب`) {
      var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
      let user = message.mentions.members.first()
      if (!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name}\`**`)
  let mnhoob = db.get(`mn_${user.id}`)
const cooldownTime = ms('10m');
  const cooldownUser = cooldowmnnhb.get(user.id);
  if(cooldownUser) {
    let remaining = Duration(cooldownUser - Date.now(), { units: ["w", "d", "h", "m", "s"], round: true });
  if(user.id === mnhoob) return message.lineReply(`> هذا العضو تمت سرقته انتظر \n **\`${remaining} ⏱\`**`);
  }
      cooldowmnnhb.set(user.id, Date.now() + cooldownTime);
      setTimeout(() => {
          cooldowmnnhb.delete(user.id) 
      }, cooldownTime);
      
      let data = credits[message.guild.id][user.id].credits
     if(data < 1000) return message.lineReply(`**\`لايمكنك نهب احد رصيده اقل من 1000\`**`)
      let hmayh = db.get(`7mayh_${user.id}`)
     if(user.id === hmayh) return message.lineReply(`> هذا العضو لديه حمايه خاصه`)
      if(user.id === message.author.id) return message.lineReply(`> **لايمكنك نهب نفسك**`)
      if(user.id === client.user.id) return message.lineReply(`> **لايمكنك السرقه من ميزانية البنك**`)

    if (message.content.includes('-')) { 
      return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name}\`**`)
    }
let argses = data / 80
    let args = Math.floor(argses) + 101;
      const cooldownUsers = cooldownnhb.get(message.author.id);
  if(cooldownUsers) {
    let remaining = Duration(cooldownUsers - Date.now(), { units: ["w", "d", "h", "m", "s"], round: true });
    message.lineReply(`> **\`${remaining} ⏱\`**`);
  } else {
      var bob = 100000
if(args > 100000) {
    message.lineReply(`**تمت السرقة بنجاح** المبلغ: **\`${bob}\`** ||انتبه لايسرقك||`)
      const embed2 = new Discord.MessageEmbed()
      .setAuthor(`${user.user.username}#${user.user.discriminator}`, user.user.avatarURL())
          .setTitle(`تم سرقتك <:laa:969310857962078248>`)
      .setDescription(`ذا <@!${message.author.id}>\n سرق منك ***\`${bob}\`***
||الحقق رح اسرقه||

لعرض الدليل: [[اضغط هنا](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})]`)
          .setThumbnail(message.guild.iconURL())
      .setTimestamp()
      .setFooter(message.guild.name)
      const embed1 = new Discord.MessageEmbed()
          .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())
          .setTitle(`كفو عليك يالحرامي 🤫`)
      .setDescription(`تمت سرقة <@!${user.id}>\n المبلغ: **\`${bob}\`**
||انتبه لايسرقك||`)
          .setThumbnail(message.guild.iconURL())
      .setTimestamp()
      .setFooter(message.guild.name)
       client.users.cache.get(user.id).send(embed2)
      client.users.cache.get(message.author.id).send(embed1)
      
      credits[message.guild.id][user.id].credits += -bob;
   credits[message.guild.id][message.author.id].credits += +bob;
      db.set(`mn_${user.id}`, user.id)
      db.add(`nhb_${message.author.id}`, bob)
} else {
    message.lineReply(`**تمت السرقة بنجاح** المبلغ: **\`${args}\`** ||انتبه لايسرقك||`)
      const embed2 = new Discord.MessageEmbed()
      .setAuthor(`${user.user.username}#${user.user.discriminator}`, user.user.avatarURL())
          .setTitle(`قام <${message.author.username} بسرقتك`)
      .setDescription(`الحرامي: <@!${message.author.id}>
المبلغ المسروق: **${args}$**


لعرض الدليل: [[اضغط هنا](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})]`)
          .setThumbnail(`https://cdn4.iconfinder.com/data/icons/business-and-safety-liconica-color/128/theft-insurance-sack-money-512.png`)
      .setTimestamp()
      .setFooter(message.guild.name)
      const embed1 = new Discord.MessageEmbed()
          .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())
          .setTitle(`كفو عليك يالحرامي 🤫`)
      .setDescription(`تمت سرقة: <@!${user.id}>\n المبلغ: **\${args}
 بس هااه انتبه احد يدري او تعلم احد انا عن نفسي ما بعلم 🫣**`)
      .setTimestamp()
      .setFooter(message.guild.name)
       client.users.cache.get(user.id).send(embed2)
      client.users.cache.get(message.author.id).send(embed1)
      
      credits[message.guild.id][user.id].credits += -args;
   credits[message.guild.id][message.author.id].credits += +args;
      db.set(`mn_${user.id}`, user.id)
      db.add(`nhb_${message.author.id}`, args)
      cooldownnhb.set(message.author.id, Date.now() + cooldownTime);
      setTimeout(() => {
          cooldownnhb.delete(message.author.id)
      }, cooldownTime);
}
  }
  
}});

client.on("message", async message =>{
    if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `عطه`) {
if (message.author.id !== developer) return
let args = message.content.split(" ").slice(2); 
    let user = message.mentions.members.first() 
if(!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
      if(!args) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
  credits[message.guild.id][user.id].credits += +args;
      save();
message.lineReply(`> **تم إعطائك ${args} **
<@!${user.id}>`)
}});

client.on("message", async message =>{
    if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `سحب`) {
if (message.author.id !== developer) return
let args = message.content.split(" ").slice(2); 
    let user = message.mentions.members.first() 
if(!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
      if(!args) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
      if(isNaN(args)) 
return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
  credits[message.guild.id][user.id].credits += -args;
      save();
message.lineReply(`> **تم سحب منك ${args} **
<@!${user.id}>`)
}});


client.on("message", async message =>{
    if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `سحب`) {
if (message.author.id !== developer1) return
let args = message.content.split(" ").slice(2); 
    let user = message.mentions.members.first() 
if(!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
      if(!args) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
      if(isNaN(args)) 
return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
  credits[message.guild.id][user.id].credits += -args;
      save();
message.lineReply(`> **تم سحب منك ${args} **
<@!${user.id}>`)
}});

client.on("message", async message =>{
    if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `سحب`) {
if (message.author.id !== developer2) return
let args = message.content.split(" ").slice(2); 
    let user = message.mentions.members.first() 
if(!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
      if(!args) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
      if(isNaN(args)) 
return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
  credits[message.guild.id][user.id].credits += -args;
      save();
message.lineReply(`> **تم سحب منك ${args} **
<@!${user.id}>`)
}});

client.on("message", async message =>{
    if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `سحب`) {
if (message.author.id !== developer3) return
let args = message.content.split(" ").slice(2); 
    let user = message.mentions.members.first() 
if(!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
      if(!args) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
      if(isNaN(args)) 
return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
  credits[message.guild.id][user.id].credits += -args;
      save();
message.lineReply(`> **تم سحب منك ${args} **
<@!${user.id}>`)
}});


client.on("message", async message =>{
    if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `تصفير`) {
if (message.author.id !== developer) return
    let user = message.mentions.members.first() 
if(!user) return message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${command} ${name} 500\`**`)
      message.react(`✅`)
   credits[message.guild.id][user.id].credits += 20;
  }
});




const xxoo = new Map();
client.on('message' , message => {
  if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `xo`|| command == prefix + `اكس او`|| command == prefix + `اكس`) {
      var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
      const cooldownTime = ms('5m');
  const cooldownUser = xxoo.get(message.author.id);
  if(cooldownUser) {
    let remaining = Duration(cooldownUser - Date.now(), { units: ["w", "d", "h", "m", "s"], round: true });
  message.lineReply(`> **\`${remaining} ⏱\`**`);
  } else {
      
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
  if (message.author.id === array_of_mentions.id) return message.lineReply(`> لايمكنك اللعب مع نفسك`)
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    message.channel.send('انتظر قليلاً')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s إضغط على الرمز ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
    })
  
      xxoo.set(message.author.id, Date.now() + cooldownTime);
      setTimeout(() => {
          xxoo.delete(message.author.id) 
      }, cooldownTime);
  } else {
    message.lineReply(`> يُرجى استعمال الأمر بالطريقة الصحيحة ، 
**\`${prefix}لعبه ${name}\`**`)
  }
  }
}
});

client.on('message', async (message) => {
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `p`) {
      if(message.author.id !== developer) return
var states = "🟢 ممتاز جداً";
            var states2 = "🟢 ممتاز جداً";
            var msg = `${Date.now() - message.createdTimestamp}`;
            var api = `${Math.round(client.ws.ping)}`;
            if (Number(msg) > 70) states = "🟢 ممتاز";
            if (Number(msg) > 170) states = "🟡 ليس سيء";
            if (Number(msg) > 350) states = "🔴 سيء جداً";
            
            if (Number(api) > 70) states2 = "🟢 ممتاز";
            if (Number(api) > 170) states2 = "🟡 ليس سيء";
            if (Number(api) > 350) states2 = "🔴 سيء جداً";
            let embed = new Discord.MessageEmbed()
                .setAuthor(`وقت استجابة البوت 🏓`)
                .addField("**Time Taken:**", msg + " ms 📶 | " + states)
                .addField("**WebSocket:**", api + " ms 📶 | " + states2)
                .setTimestamp()
                .setColor('#303434')
            message.lineReplyNoMention(embed);
}
});

client.on('message', message => {
    if(message.author.bot) return;
    if(!message.guild) return
    if(message.content === prefix + "حراميه") {
        var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
        let xp = db.all().filter(data => data.ID.startsWith(`nhb_`)).sort((a, b) => b.data - a.data)
        xp.length = 10;
        var hello= "";
        var i = 0;
        for (i in xp) {
          hello += `**#${xp.indexOf(xp[i])+1} |** <@${xp[i].ID.split('_')[1]}> | **\`${xp[i].data}\`** :dollar: \n`;
        }
            const embed1 = new Discord.MessageEmbed()
            .setThumbnail()
            .setColor('#5c943c')
             .setTitle(`قائمة الحراميه`)
            .setDescription(hello)
            .setTimestamp()
            message.lineReply(embed1)
        }
});

client.on('message', async message => {
    if(message.author.bot) return;
    if(!message.guild) return
  let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `اوامر`) {
      var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
  const embed = new Discord.MessageEmbed()
      .setColor(`c1c3c4`)
      .setAuthor(message.guild.name)
      .setTitle(`اوامر بوت البنك`)
      .setDescription(`${prefix}راتب\n${prefix}حمايه\n${prefix}استثمار\n${prefix}تحويل\n${prefix}توب\n${prefix}سرقه\n${prefix}حراميه\n${prefix}فلوس\n${prefix}لعبه\n${prefix}تداول\n${prefix}اسهم\n${prefix}شراء\n${prefix}اسهمي\n${prefix}بيع\n${prefix}متداولين\n${prefix}تبرع\n${prefix}بخشيش\n${prefix}اكس او\n`)
      .setFooter(`${message.guild.name} • Created By ${name}`, message.guild.iconURL())
      message.lineReply(embed);
  }
});



const cooldownl3b = new Map();
client.on('message', async message => {
    if(message.author.bot) return
    if(!message.guild) return
let command = message.content.toLowerCase().split(" ")[0];
  if (command == prefix + `لعبه`|| command == prefix + `لعبة`|| command == prefix + `لعب`) {
      var blacklist = db.get(`Blacklist_${message.author.id}`)
    if (blacklist) return
          const cooldownTime = ms('5m');
  const cooldownUser = cooldownl3b.get(message.author.id);
  if(cooldownUser) {
    let remaining = Duration(cooldownUser - Date.now(), { units: ["w", "d", "h", "m", "s"], round: true });
    message.lineReplyNoMention(`> **\`${remaining} ⏱\`**`);
  } else {
let embed = new Discord.MessageEmbed()
        .setTitle("اختر من الرياكشن")
    .setColor(`BLACK`)
        .setDescription(`اذا فزت بتاخذ **2000$**
اذا خسرت او تعادل لن تاخذ شيء`)
    .setTimestamp()
      .setFooter(message.guild.name, message.guild.iconURL())
        let msg = await message.channel.send(embed)
        await msg.react("🧱")
        await msg.react("✂️")
        await msg.react("📰")

        const filter = (reaction, user) => {
            return ['🧱', '✂️', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

      const choices = ['🧱', '✂️', '📰']
      const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 20000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()

                if ((me === "🧱" && reaction.emoji.name === "✂️") ||
                (me === "📰" && reaction.emoji.name === "🧱") ||
                (me === "✂️" && reaction.emoji.name === "📰")) {
                    let result = new Discord.MessageEmbed()
                        .setTitle("خسارة ❌")
                        .setColor(`RED`)
                        .setTimestamp()
                .setDescription(`انت اخترت ${reaction.emoji.name}, وانا اخترت ${me}!`)
                
            return msg.edit(result)
            } else if (me === reaction.emoji.name) {
                let result = new Discord.MessageEmbed()
                .setTitle("تعادل 🚫")
                    .setColor(`WHITE`)
                    .setTimestamp()
                .setDescription(`انت اخترت ${reaction.emoji.name}, وانا اخترت ${me}!`)
            return await msg.edit(result)
            } else {       { let result = new Discord.MessageEmbed()
                .setTitle("فزت ✅")
                    .setColor(`GREEN`)
                    .setTimestamp()
                .setDescription(`اانت اخترت ${reaction.emoji.name}, وانا اخترت ${me}!`)
            await msg.edit(result)
                    credits[message.guild.id][message.author.id].credits += +2000
                            save();
                           }
            }
        })
        .catch(collected => {
            {
                let embeds = new Discord.MessageEmbed()
        .setTitle("اختر من الرياكشن")
    .setColor(`BLACK`)
        .setDescription(`اذا فزت بتاخذ **2000$**
اذا خسرت او تعادل لن تاخذ شيء`)
                .setFooter(message.guild.name, message.guild.iconURL())
                .setTimestamp()
                msg.edit(`❌ تم انهاء اللعبة لعدم التفاعل`,embeds);
               return msg.reactions.removeAll()
            }
            })
      cooldownl3b.set(message.author.id, Date.now() + cooldownTime);
      setTimeout(() => {
          cooldownl3b.delete(message.author.id) 
      }, cooldownTime);

}
  } 
});

client.login(process.env.token);


setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3*1000*60);


