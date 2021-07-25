const regexSplit = require('regex-split-nodejs');

/**
 * Console log wrapper. Adds colour to console logs.
 * @param  {...string} messages
 */
function consoleLog(...messages) {
	const pattern = /\\x1b\[\d{1,2}m/;
	messages = regexSplit(messages.join(' '), pattern, { includeMatch: true });
	const arg1 = [], arg2 = [];

	for (let index = 0, length = messages.length; index < length; index++) {
		const message = messages[index];
		if (pattern.test(message)) {
			arg1.push(`\x1b${message.substring(4)}`);
		} else {
			arg1.push('%s');
			arg2.push(message);
		}
	}

	console.log(arg1.join(''), ...arg2);
}

module.exports = consoleLog;
