const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "!!";

bot.on('ready', () => {
    bot.user.setStatus('available')
    console.log("Le bot est bien lancer !") //S'affichera dans la console pour vous montrez qu'il ets bien en ligne !
    bot.user.setPresence({
        game: {
            name: 'Fait un tuto ( !! )', //Le nom qui s'affichera en status
            type: "STREAMING", //PLAYING , LISTENING , STREAMING , WATCHING
            url: "https://www.twitch.tv/bot/" // Vous pouvew mettre n'importe quoi ou une vrai chaine twitch
        }
    })
})

//Je vous conseil de faire ceci , c'est pour voir qui envoie des messages en privee au bot 

bot.on("message", message => {
    if(message.channel.type === "dm") {
        console.log(`${message.author.tag} a envoyer un message au bot , voici le message : ( ${message.content} ).`)
    }
});

//Maintenant voici la commande ping , donc le bot vous repondre le nombre de ms qu'il a

bot.on('message', message => {
    if(message.content === PREFIX + "ping") { // PREFIX = se que vous avez mit ligne 4 et se qui se mettra devant le ping. Exemple: !!ping
        message.delete() // Quand vous avez mit la commande dans le tchat sa se supprimera
        message.channel.send(`Pong 🏓: ${Math.round(bot.ping)} ms !`)
        console.log("La commande ping a etait effectuer")
    }
});

bot.login('NjY1NTQ4OTQwNzUzNjMzMjkx.XhnqWA.UDGB0t4f2MIGkZBM9Ji7UCaBx84');
