const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("howto-support")
    .setDescription("sends embed detailing use of '/support'"),
  async execute(interaction) {
    const ROLE = interaction.member.guild.roles.cache.get("572293133455458325");
    if (interaction.member.roles.has(MOD_ROLE)) {
    const CHANNEL = await interaction.channel;
    const embeds = [];
    const EMBED_1 = new EmbedBuilder()
      .setTitle("**Support-a-Creator how-to**")
      .setColor(0xff7373)
      .setAuthor({ name: "Sloth Helper" })
      .setDescription("Follow these steps to play with Ahren!")
      .addFields(
        {
          name: "\u200b",
          value: "\u200b",
        },
        {
          name: "Getting started:",
          value:
            "To begin, type /support in any channel you have access to.",
          inline: true,
        }
      );
    const EMBED_2 = new EmbedBuilder()
      .setTitle("Fill in the image and username fields!")
      .setColor(0xff7373)
      .setAuthor({ name: "Sloth Helper" })
      .setDescription(
        "Add an up to date screenshot or picture displaying Ahren's creator code in your shop. For the username field, please enter your Fortnite username."
      )
      .addFields(
        {
          name: "\u200b",
          value: "\u200b",
        },
      )
      .setImage("https://i.imgur.com/2effU0l.png");
    const EMBED_3 = new EmbedBuilder()
      .setTitle("Finishing up")
      .setColor(0xff7373)
      .setAuthor({ name: "Slot Helper" })
      .setDescription(
        "After a few moments the bot should respond with a message similar to what you see below. If this is not the case and you get an error instead, please reach out to a moderator for help."
      )
      .addFields(
        {
          name: "\u200b",
          value: "\u200b",
        },
      )
      .setImage("https://i.imgur.com/DdsbyYC.png");

    embeds.push(EMBED_1, EMBED_2, EMBED_3);

    CHANNEL.send({ embeds: embeds });
    } else {
    await interaction.reply({
      content:
        "Oops! It looks like you dont have the right permissions to use this command.",
    });
    }
  },
};
