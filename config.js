/*

😈 𝗕𝗨𝗚 𝗕𝗢𝗧 𝗠𝗗 😈






































































































































*/
const fs = require('fs')
const chalk = require('chalk')
const {sample} = require('lodash')

global.owner = ['94775512050','94715346004']
global.no_block = ['94775512050','94715346004']
global.inbox_block = false
global.sendalive = true
mess = {
	success: 'Done sir ✓',
	block: '⚠️ Inbox Block',
	owner:'Only Owner !'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
