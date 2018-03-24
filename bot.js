const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "r!";
let owner = "335082465561673728"; 

bot.on("ready", () => {
    bot.user.setGame(prefix + "yardım | " + bot.guilds.size + " Sunucu") 
    console.log("Bağlandım!")   
});

 

bot.on("message", message => {

    if (message.content === prefix + "ping") {
        message.reply("**Benim Pingim `" + bot.ping + "` ms 🏓** ");
      }
 
    if (message.content.toLowerCase() === "sa") {
        message.reply("**Aleyküm Selam!**")
    }
    if (message.content.toLowerCase() === prefix + 'reload') {
        message.delete()
        if (message.author.id !== '335082465561673728' ) {
          message.reply('`reload` komutunu kullanmak için gerekli izne sahip değilsin!');
        } else {
          message.channel.sendMessage(`**Yeniden Başlıyorum** `).then(message => {
          console.log(`BOT: Bot yeniden başlatılıyor...`);
          process.exit(0);
        })
       }
      }
      if (message.content.toLowerCase() === prefix + 'temizle') {
        if (message.author.id !== '335082465561673728' ) {
            message.reply('`temizle` komutunu kullanmak için gerekli izne sahip değilsin!');
          } else {
            message.channel.bulkDelete(100);
            message.channel.sendMessage(":white_check_mark:  `100` adet mesaj başarılı bir şekilde silindi!");
   }
  }

    if (message.content === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()

        .setAuthor(message.author.username, message.author.avatarURL)

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xa0522d)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "yardım") {
        const embed = new Discord.RichEmbed()

        .setAuthor(message.author.username, message.author.avatarURL)
           
           .addField('= ___Moderasyan Komutları___ =','r!temizle (100 adet mesaj siler)')

           .addField(' = ___Bot Komutları___ =','r!yardım = Botun Bütün komutları gösterir.\nr!sunucbilgi = Sunucu hakkındabilgi verir. \nr!bot-bilgi = Bot hakkında bilgi verir.\nr+ping = Botun pingini gösterir.')

           .addField('= ___Kullanıcı Komutları___ =', 'r!avatar = Komutu kullanan kişinin avatarını gösterir.\nr!bdavet = Botun davet linkini gösterir. \nr!dsunucu = Botun destek sunucusunu gösterir')

           .addField('= ___Eğlence Komutları___ =', 'r!kurabiye = Size kurabiye verir.')

           .addField('•__Yapımcı__', 'Batu#2016')

           .setColor(0x6a5acd)

        return message.channel.sendEmbed(embed)
    }
    
    if (message.content === prefix + "avatar") {
        const embed = new Discord.RichEmbed()

            .addField(message.author.avatarURL,'***Yukardaki linkten avatarına ulaşabilirsin***')

            .setColor(0x97ffff)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "dsunucu") {
        const embed = new Discord.RichEmbed()

            .addField('https://discord.gg/KG7K5hT','***Yukardaki linkten botun destek sunucusuna ulaşabilirsin***')

            .setColor(0x97ffff)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "bdavet") {
        const embed = new Discord.RichEmbed()

            .addField('https://discordapp.com/oauth2/authorize?client_id=424222307280617495&scope=bot&permissions=2146958591','***Yukardaki linkten botun davet edebilirsiniz***')

            .setColor(0x97ffff)
        
        return message.channel.sendEmbed(embed)
    }


    if (message.content === prefix + "bot-bilgi") {
        const embed = new Discord.RichEmbed()

        .setAuthor(message.author.username, message.author.avatarURL)

            .addField("Bot Sahibi", `<@${owner}>`, true)

            .addField("Version", "0.0.2", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)
            
            .addField("Toplam Kanal Sayısı", bot.channels.size, true)

            .addField("Kitaplık Türü", "discord.js")

            .setColor(0x97ffff)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")
    }

});

bot.on("message", message => {

    const kufur = ["amk", "aq"];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("***Sen Kime Küfür Ediyorsun Lan Küfür Yasak Eğer Çok İstiyorsan adamla adama özelden küfür et!Chati kirletmeye hakkın yok***")
        message.delete()
    }
});

bot.login("NDI0MjIyMzA3MjgwNjE3NDk1.DZbK1w.PD39GCLCmqkQ0hdoN5FOUtBU_L4")

