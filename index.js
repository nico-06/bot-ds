const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login("Nzk5MzAxNjQyMjkzMDg0MjAx.YABlqQ.V9OiOUMiXz5bWrQ1E03HAwrpYGE");

bot.on('message', (message) => {
    if (message.content == '!time') {
		var data = new Date();
		var ora = data.getHours();
		var minuto = data.getMinutes();

		message.channel.send('ORA ATTUALE :alarm_clock: :' + ora + ':' + minuto);
	}
});
