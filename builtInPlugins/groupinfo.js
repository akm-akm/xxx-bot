const http = require("http");

module.exports = {
  name: "groupinfo",
  usage: "groupinfo",
  desc: "Provides all the information about setting of the group.",
  eg: ["groupinfo"],
  group: true,
  owner: false,
  async handle(Bot) {
    const grpdata =
      "\n💮 *Title* : " +
      "*" +
      Bot.groupMetadata.subject +
      "*" +
      "\n\n🏊 *Member* : " +
      "```" +
      Bot.groupMetadata.participants.length +
      "```" +
      "\n🏅 *Admins*  : " +
      "```" +
      Bot.groupAdmins.length +
      "```" +
      "\n🎀 *Prefix*      : " +
      "```" +
      Bot.groupdata.prefix +
      "```" +
      "\n💡 *Useprefix*        : " +
      "```" +
      Bot.groupdata.useprefix +
      "```" +
      "\n🐶 *Autosticker*    : " +
      "```" +
      Bot.groupdata.autosticker +
      "```" +
      "\n🤖 *Botaccess*      : " +
      "```" +
      Bot.groupdata.membercanusebot +
      "```" +
      "\n🌏 *Filterabuse*     : " +
      "```" +
      Bot.groupdata.allowabuse +
      "```" +
      "\n⚠️ *NSFW detect*  : " +
      "```" +
      Bot.groupdata.nsfw +
      "```" +
      "\n🎫 *Credits used*  : " +
      "```" +
      Bot.groupdata.totalmsgtoday +
      "```" +
      "\n🧶 *Total credits*  : " +
      "```" +
      Bot.botdata.dailygrouplimit +
      "```" +
      "\n🚨 *Banned users* : " +
      "```" +
      (Number(Bot.groupdata.banned_users.length) - 1) +
      "```\n";

    try {
      const ppUrl = await Bot.client.getProfilePicture(from);
      ran = getRandom(".jpeg");
      const file = fs.createWriteStream(ran);
      http.get(ppUrl, function (response) {
        response.pipe(file);
        file.on("finish", function () {
          file.close(async () => {
            await Bot.replyimage(ran, grpdata);
            fs.unlinkSync(ran);
          });
        });
      });
    } catch (error) {
      Bot.replytext(grpdata);
    }
  },
};
