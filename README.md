![https://github.com/SpikeHD/node-scoresaber](https://img.shields.io/github/package-json/v/SpikeHD/node-scoresaber) ![https://github.com/SpikeHD/node-scoresaber](https://img.shields.io/david/SpikeHD/node-scoresaber) ![https://www.npmjs.com/package/node-scoresaber](https://img.shields.io/npm/dw/node-scoresaber)

## node-scoresaber - A NodeJS API wrapper for ScoreSaber.com

# Description

`node-scoresaber` is an asynchronous class-based API wrapper for [scoresaber.com](https://new.scoresaber.com/) written in Javascript using `axios`. It supports viewing player stats, ranked request lists and request details, player searching, ~~and song leaderboards and details~~. 

# Installation

Simply run `npm install node-scoresaber` and require it in your program:
```js
const saber = require('node-scoresaber')
```

# Usage

Everything is based off of functions. Internally, these functions actually return instances of classes, which used to be how you would interact with this module until v2.0.0, but now it should be much cleaner and easier to use.

# Contributing
Issues, PRs, etc., are all welcome!
