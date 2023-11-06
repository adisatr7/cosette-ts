import { Client } from "discord.js"
import { Responses } from "./modules/ResponseVariety"
import { env } from "./config"


try {
  // Create a new client instance
  const client = new Client({
    intents: [
      "Guilds",
      "GuildMessages",
      "DirectMessages"
    ]
  })

  // Login to Discord using Cosette's bot client token
  client.login(env.DISCORD_TOKEN)

  // Once the client is ready, have Cosette say something in the console
  client.on("ready", () => {
    console.log(Responses.startup)
  })
}

// If an error occurs, log it to the console
catch (error) {
  console.error(Responses.errors, error)
}