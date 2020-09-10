## node-scoresaber - A NodeJS API wrapper for ScoreSaber.com

# Description

`node-scoresaber` is an asynchronous class-based API wrapper for [scoresaber.com](https://new.scoresaber.com/) written in Javascript using `axios`. It supports viewing player stats, ranked request lists and request details, searching, ~~and song leaderboards and details~~. 

# Installation

Simply run `npm install node-scoresaber` and require it in your program:
```js
const saber = require('node-scoresaber')
```

# Functions

## searchPlayers(name)
Search for players by name
### Example:
```js
const saber = require('node-scoresaber')

let results = saber.searchPlayers('spikehd')

// You can use this in combination with the Player class
let player = new saber.Player(results[0])
player.get()
```

# Classes

## Player

### Usage:
```js
let player = new saber.Player(id)
await player.get()

// Returns top player scores
let scores = player.getTopScores(page)

console.log(player)
console.log(scores)
```
### Methods:

#### get()
Retrieves all information about a player.

#### find(name)
Searches and retrieves the first player in the search results.

#### getTopScores(page)
Get players top scores.

#### getRecentScores(page)
Get players most recent scores.

### Additional stuff:
Score functions do not require `.get()` to be run first.

## Requests

### Usage:
```js
let rankedRequests = new saber.Requests()
await rankedRequests.getTop()
await rankedRequests.getAll()

console.log(rankedRequests.top)
console.log(rankedRequests.all)
```

### Methods
#### getTop()
Get top ranked requests

#### getAll()
Get all ranked requests

## Request

### Usage:
```js
// Using by itself:
let request = new saber.Request(id)
request.get()

console.log(request)
```
```js
// Using with Requests()
let requests = new saber.Requests()
requests.getTop()

// The "request" property of an item in a requests list is the request ID
let firstRequest = new saber.Request(requests.top[0].request)
```

### Methods:
#### get()
Retrieves all information about a ranked request

## Song

### Usage:
```js
// Not suppported by API yet
```

### Methods:
Currently not supported by the Scoresaber API.
