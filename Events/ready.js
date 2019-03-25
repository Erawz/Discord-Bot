module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name: "Erawz's Bot"
        }
    })
};