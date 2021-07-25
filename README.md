# Console Log for Node JS

A way to add fore ground and background colour to console logs.

## Disclaimer

The benefit is not worth the cost. It's better to hard code the function call. This may have been the result of over thinking.

## Example

``` JavaScript
const consoleLog = require('./index');

consoleLog('\\x1b[33mEnglish-language pangram:\\x1b[0m The quick brown \\x1b[32mfox\\x1b[0m jumps over the lazy \\x1b[32mdog\\x1b[0m');
```

## Reference

### consoleLog(...messages)

``` JavaScript
/**
 * Console log wrapper. Adds colour to console logs.
 * @param  {...string} messages
 */
```

### Colours

[Stockoverflow](https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color)

``` JavaScript
Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
```