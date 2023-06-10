const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("support")
    .setDescription("Follow these steps for access to the #game-room")
    .addAttachmentOption((option) =>
      option.setName("image").setDescription("Image input").setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("username").setDescription("Username input").setRequired(true)
    ),

  async execute(interaction) {
    const ROLE = interaction.member.guild.roles.cache.get("1100527154535604295");
    const UNAME = interaction.options.getString("username") ?? "";

    if (UNAME != "") {
      await interaction.reply({
        content:
          "Thank you for your support, the Epic Code User role will be applied shortly.",
        ephemeral: true,
      });
      await interaction.member.roles.add(ROLE);
    } else {
      await interaction.reply({
        content:
          "Oops! That username was invalid, please try again in a moment.",
        ephemeral: true,
      });
    }
  },
};
