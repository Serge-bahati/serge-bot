module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: " ",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `\n┏━━━━━━┓\n𝑷𝑹𝑬𝑭𝑰𝑿 ↠¥ \n┗━━━━━━┛`,
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/JHgwRHD/image.jpg")
 });
 }
 }
}
