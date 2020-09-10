## node-scoresaber - A NodeJS API wrapper for ScoreSaber.com

# Installation

Simply run `npm install node-scoresaber` and require it in your program:
```js
const saber = require('node-scoresaber')
```

# Usage

There are multiple classes that allow you to grab almost all data currently supported by the Scoresaber API.

## Player

### Usage:
```js
let player = new saber.Player(id)
await player.get()

console.log(player)
```
### Notes:
Construct the player class using only an ID. You can then call `.get()` to retrieve all relevant information. The ID can be a number or string.

## Requests

### Usage:
```js
let rankedRequests = new saber.Requests()
await rankedRequests.getTop()
await rankedRequests.getAll()

console.log(rankedRequests.top)
console.log(rankedRequests.all)
```

### Notes:
Requires no data input into the constructor, and can retrieve both the top ranked listings, as well as all of them.

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

### Notes:
Can be used by itself, and is also designed to be easily used with the `Requests()` class. The ID can be a number or string

## Song

### Usage:
```js
// Not suppported by API yet
```

### Notes:
Currently not supported by the Scoresaber API.
