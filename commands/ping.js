module.exports = {
    name:"ping",
    description: "This pings the bot",
    execute(client,message, args){
        message.channel.send("Pong!");
    }
}