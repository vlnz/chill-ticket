const { EmbedBuilder, SlashCommandBuilder, permissionsBitField, ButtonStyle, ActionRowBuilder, ButtonBuilder, ChannelType } = require('discord.js');

const ticketSchema = require('../../schemas/ticketSchema');

module.exports={
    data: new SlashCommandBuilder()
    .setName('ticke')
    .setDescription('Sets up the ticket system')
    .addChannelOption(option => option.setName('channel').setDescription('The channel to send the ticket panel to.').setRequired(true).addChannelTypes(ChannelType.GuildText))
    .addChannelOption(option => option.setName('category').setDescription('The category to create tickets in.').setRequired(true).addChannelTypes(ChannelType.GuildCategory))
    .addRoleOption(option => option.setName('role').setDescription('The role to ping when a ticket is created.').setRequired(true))
    .addRoleOption(option => option.setName('ticket-logs').setDescription('The channel for the transcripts to be sent to.').setRequired(true))
    .addStringOption(option => option.setName('description').setDescription('The description for the ticket system.').setRequired(true).setMinLength(1).setMaxLength(1000))
    .addStringOption(option => option.setName('color').setDescription('The color for the ticket panel embed.')
    .addChoices(
        { name: 'Red', value: 'Red' },
        { name: 'Blue', value: 'Blue' },
        { name: 'Green', value: 'Green' },
        { name: 'Yellow', value: 'Yellow' },
        { name: 'Purple', value: 'Purple' },
        { name: 'Pink', value: 'Pink'},
        { name: 'Orange', value: 'Orange'},
        { name: 'Grey', value: 'Grey'},
        { name: 'Black', value: 'Black'},
        { name: 'White', value: 'White'},
    ).setRequired(true)),

    async execute(interaction, client){
        const { options, guild } = interaction;
        const GuildID = interaction.guild.id;
        const channel = options.getChannel('channel');
        const category = options.getChannel('category');
        const role = options.getRole('role');
        const description = options.getString('description');
        const color = options.getString('color');
        const ticketLogs = options.getRole('ticket-logs');
    }
}