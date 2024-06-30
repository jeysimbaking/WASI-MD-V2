//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://woodmandatilus:Woodman@cluster0.mcojpae.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/85e1c803a0fac34667952.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "19543974512";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 2;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/85e1c803a0fac34667952.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1A5NnZlNDdhNXYzcFVrelorNDBYazE0T28yRUZWRjRMQ3ZOQlZYcXhuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVSNVpDVXBZcUJGdXNKWUdFZ0Y2Zk5IYnMxQ0Vrb1o2VmV0cEtEYk15bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTGlyMlRHT3V4N3JiekIzUEF4ZVM4UVczWGI3MXY5Q1E2SGRHM3FxSVdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkbUNlTnlGdGJ6Q0xEWThlUElNSjNoVzErWkwwSXJ0OTh1dkZTWUlwMkVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJNG1qeEkrZmVnQXpaR0pBcmFGcDJLUDBKQUx0WmRYVEVwa25sTkczbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9lcFVmQkliL0hVemtpNG9sM1pUd3pDVGZwVitnZ2VrdjIzUy9TZFMvaDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05KbURuSWJ2b3Z2K0NXMzRQcm1HQVhtMHZYaFhWc3d3bitGMEYxZXVXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWRyclRIbnZUUktkTnpNYUpRUnhPWXpjcjJXMkh4N3p2eU9vMTdob2VBRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVVd2haQlJBM2tmbnh6dVZCSEpmaGszVkNPNW00OEhDclJpRFQ5MzdFdXM4YVRBRzNaVWR0NDlXVTYyVUVDcFdaSFkwUnJlSjhUZ3NBWGduS1E1cGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJTWWdqWi9PSnBhZUhhT0RiWklsT2hWeVZBWmQ1WE1ONHQ4aFRnQlBTQnhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE5NTQzOTc0NTEyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBRkJEMjMxNEEzNzEwNDJBMTQ0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3MzA0MjR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik13Q1VnVnl5UUxHLXlaaURwN0Z3VVEiLCJwaG9uZUlkIjoiNzhjNzdmYWUtNDFmYi00NGEyLWFjYWEtYThmZjE4ZDBiMDk4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVrTmlTam5uK2JrNGV5K1lDNXNOQUdROHJWST0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVEyQ28xUnNtckt2b2ljVGZ2cE9SQUZzQ0ZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUENTaHFvS0VQS0JoTFFHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM3NjRVdMSHlObFZjaGl1ck5Oa2QvdlBCVDB2M0N3cG5YdlJvVHdPTGVDVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQXdZODQwSjFtWjMySmtlY21hczRwdnNBcGVJUlN3eHg5TnhyZEtwOVpBQ0ZOaVVqNHFiUmVwa2lxM2YvSWJiYzFXSEh0WmFLaDNYU0pyeC9GL1BZaWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkN5TUxoL2c5NHdSaWdSZnl1Vk40cFF0RjZIeE00d1JGRWxJV0FFWjVzMVowTmlrWEI4OENtRVBoNTh2Q2RKck5kVGJBdTFXYnhwaEsySWlneWc2U2p3PT0ifSwibWUiOnsiaWQiOiIxOTU0Mzk3NDUxMjo2NkBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijk1Mzk1MjUwNTA0MzQ6NjZAbGlkIiwibmFtZSI6IvCdmrXwnZqz8J2auPCdmqrwnZq18J2QkvCdkJIg8J2QkvCdmqvwnZqz8J2atPCdmrDwnZqrIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE5NTQzOTc0NTEyOjY2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ3SEJGaXg4alpWWElZcnF6VFpIZjd6d1U5TDl3c0taMTcwYUU4RGkzZ2wifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzMwNDIxLCJsYXN0UHJvcEhhc2giOiI0TmRlM2UiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1MYSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "𓄂⍣𝐆𝚯𝐃🌹𝄟✮͢≛ 𝚯𝚩𝚰𝚻𝚯⃝ 𝄟✮⃝👑🪽",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
