import * as dotenv from "dotenv"


// Load environment variables from .env file
dotenv.config()

// Get the environment variables
const { DISCORD_TOKEN, DISCORD_CLIENT_ID } = process.env

// Export the environment variables
export const env = {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID
}