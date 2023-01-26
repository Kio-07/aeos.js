const Client = require("./classes/aeosClient");
const CustomEvent = require("./classes/NewEvent.js");
const LoadCommands = require("./classes/LoadCommands.js");
const ClientShard = require("./classes/ClientShard.js");
const aeosError = require("./classes/aeosError.js");
const Util = require("./classes/Util.js");
const Voice = require("./classes/Voice.js");

module.exports = {
  /**
   * * The Discord Bot Client
   * @param {!Object} options The options to use Discord as a Bot
   * @example new Bot({
   * 				token:"Discord Bot Token",
   * 				prefix:"!",
   * 				intents : ['GUILDS','GUILD_MESSAGES']
   * 			})
   */
  ////Bot: Client,
  Bot: Client,
  aeosClient: Client,
  /**
   * *  Custom Events Class
   * @example new CustomEvent(client (eg: bot))
   **/
  CustomEvent,
  /**
     * * loadCommands
     * loads the commands of the provided file
     @example new LoadCommands(path,true/false)
     **/
  LoadCommands,
  ClientShard,
  Voice,
  // * aeosError Class
  aeosError,
  // * Util Class
  Util,
};

/*Copyright © 2021 @Akarui Development*/
