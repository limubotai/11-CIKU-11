module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "Limon",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100000436645880") {
    var aid = ["100000436645880"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝘋𝘰𝘯'𝘵 𝘵𝘢𝘨 𝘮𝘺 𝘢𝘥𝘮𝘪𝘯.𝘏𝘦 𝘪𝘴 𝘣𝘶𝘴𝘺 𝘯𝘰𝘸 ☠️"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
