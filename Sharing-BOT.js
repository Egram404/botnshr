const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام عليكم 

فديتك...
                               [https://discord.gg/26BQjzp] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login('NDcxMjM5NjQ2ODc4MjM2Njgy.Djq5ew.ST2JcccJ25YjSeNqrLZbgGg-d-4');