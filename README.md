![https://github.com/SpikeHD/node-scoresaber](https://img.shields.io/github/package-json/v/SpikeHD/node-scoresaber) ![https://github.com/SpikeHD/node-scoresaber](https://img.shields.io/david/SpikeHD/node-scoresaber) ![https://www.npmjs.com/package/node-scoresaber](https://img.shields.io/npm/dw/node-scoresaber)

## node-scoresaber - A NodeJS API wrapper for ScoreSaber.com

# Description

`node-scoresaber` is an asynchronous function-based API wrapper for [scoresaber.com](https://new.scoresaber.com/) written in Javascript using `axios`. It supports viewing player stats, ranked request lists and request details, player searching, ~~and song leaderboards and details~~. 

# Installation

Simply run `npm install node-scoresaber` and require it in your program:
```js
const saber = require('node-scoresaber')
```

# Usage

Everything is based off of functions. Internally, these functions actually return instances of classes, which used to be how you would interact with this module until v2.0.0, but now it should be much cleaner and easier to use.

\* *All functions are asynchronous unless otherwise mentioned*

Jump to:
* [Functions](#functions)
  * [Players](#players)
      * `searchPlayers(name)`
      * `getPlayer(id)`
  * [Requests](#requests)
      * `getRequest(id)`
      * `getTopRequests()`
      * `getAllRequests()`
* [Examples](#examples)
* [Contributing](#contributing)

# Functions

## Players

`getPlayer(id)`

| Parameter | Type |
| --------- | ---- |
| id | String or Number. Usually Steam ID or Oculus ID |

### Returns

Return value: `Object`

| Property | Description |
| -------- | ----------- |
| name | Username of the player |
| avatar_url | URL that points to player avatar |
| rank | Current global rank |
| countryRank | Current rank in their respective country |
| country | Short-form version of player's respective country |
| pp | Total PP |
| role | Player role (eg."Supporter")
| badges | Array of badges the player has, and their image links |
| isBanned | Boolean - whether player is banned |
| isInactive | Boolean - whether player is inactive |
| totalScore | Total score earned |
| totalRankedScore | Total score for ranked songs only |
| averageRankedAccuracy | Average ranked accuracy |
| playCount | Total amount of plays |
| rankedPlayCount | Total amount of ranked plays |

---

`searchPlayers(name)`

| Parameter | Type |
| --------- | ---- |
| name | String |

### Returns

Return value: `Array` of `Objects`

Each object contains:

| Property | Description |
| -------- | ----------- |
| playerId | ID of player |
| playerName | Name of player |
| rank | Current global rank |
| pp | Current total PP |
| avatar | URL that points to player avatar |
| country | Short-form version of player's respective country |
| history | Array of ranking history |
| difference | Rank difference from the last 2 weeks |
| get | Async function, shorthand for `getPlayer()` (does not require ID param) |

## Requests

`getRequest(id)`

| Parameter | Type |
| --------- | ---- |
| id | String or Number |

### Returns

Return value: `Object`

| Property | Description |
| -------- | ----------- |
| default_url | Root scoresaber URL |
| request | Request ID |
| songID | Song ID |
| requestType | Number, not sure what it means |
| description | Request description |
| approved | Boolean - whether request has been approved |
| id | Some other ID |
| difficulty | Number. Correlation: `Easy -> 1`, `Normal -> 3`, `Hard -> 5`, `Expert -> 7`, `Expert+ -> 9`, etc. |
| rankUpvotes | Rank upvotes |
| rankDownvotes | Rank downvotes |
| qatUpvotes | QAT Upvotes |
| qatDownvotes | QAT Downvotes |
| rankComments | Array of rank comments |
| qatComments | Array of QAT comments |
| Difficulties | Array of objects containing the requests other difficulties |

---

`getAllRequests()` and `getTopRequests()`

- No Parameters -
 
### Returns
 
Return value: `Array` of `Objects`
 
Each object contains:
 
| Parameter | Description |
| --------- | ----------- |
| request | ID of the request |
| songId | Song ID |
| weight | Request weight |
| name | Song name |
| levelAuthorName | Name of the author |
| id | Some other ID |
| created_at | Timestamp of request creation |
| rankVotes | Object with keys: `upvotes`, `downvotes`, `myVote` |
| qatVotes | Object with keys: `upvotes`, `downvotes`, `myVote` |
| difficulties | Number of difficulties |
| get | Async function, shorthand for `getRequest()` (does not require ID param) |

# Examples

## Searching for and getting details of a player
```js
const myPlayer = await saber.searchPlayers('spikehd')

if (myPlayer[0]) {
  console.log(await myPlayer[0].get())
}
```

## Getting a player by ID
```js
const myPlayer = await saber.getPlayer('76561198106696130')
console.log(myPlayer)
```

## Getting a top request
```js
const topRequests = await saber.getTopRequests()

if (topRequests[0]) {
  console.log(await topRequests[0].get())
}
```

## Getting a request by ID
```js
const request = await saber.getRequest('1234')
console.log(request)
```

# Contributing
Issues, PRs, etc., are all welcome!
