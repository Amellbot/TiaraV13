const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = true 

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "Amell-Bot" //namabot kalian
global.ownername= "𝙋𝙀𝙈𝘽𝙀𝙍𝙄𝙏𝘼𝙃𝙐𝘼𝙉 𝙋𝙀𝙉𝙏𝙄𝙉𝙂 : Bisakah Anda Tidak 𝗦𝗣𝗔𝗠 Bot?? Jika hal Itu Terjadi Maka Nomor Kamu Akan Di [𝗕𝗔𝗡𝗡𝗘𝗗 𝗢𝗟𝗘𝗛 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣] Contac US : http://wa.me/+1(506)4043432" //nama kalian
global.myweb ="https://api.amel.xyn" //bebas asal jan hapus
global.youtube = "https://youtube.com/c/Amelia" //bebas asal jan hapus
global.github = "https://Amell.github.io/" //bebas
global.email = "zeeoneofc@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Erouoa/Amerika' //  timezone wib
global.premium = ['15064043432'] //premium user
global.owner = ["15064043432","15064043432"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "15064043432" // nomor wa kalian
global.ownernomerr = "+15064043432" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.packname = '© ᴀᴍᴇʟʟ ʙᴏᴛ ᴛɪᴅᴀᴋ ʙᴏʟᴇʜ ᴅɪ sᴘᴀᴍ' //sticker wm ubah
global.author = 'ʙᴜᴀᴛᴀɴ ᴀᴍᴇʟʟ ʙᴏᴛ' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'

global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🍓W A I T..~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ ᴡ ᴀ ɪ ᴛ..',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
