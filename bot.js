const Discord = require('discord.js');
const client = new Discord.Client();

console.log("a7bk egram");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
لو سمحت ا ادخل السيرفر
                               [ https://discord.gg/7vhfWTu ] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 

لو سمحت ا ادخل السيرفر
                               [ https://discord.gg/7vhfWTu ] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
