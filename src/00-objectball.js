function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

// This function calls a second function.
// function homeTeamName() {
//   let object = gameObject()
//   return object['home']['teamName']
// }

// We can do the same thing without saving the result in a variable.
function homeTeamName() {
    return gameObject()['home']['teamName']
}

// Given a player's name, return the number of points scored by that player
function numPointsScored(playerInput) {
    let game = gameObject()
    for (let gameKey in game) { // iterate through game keys (home, away)
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) { // iterate through team keys (teamName, colors, players)
            let playerObj = teamObj.players
            for (let playerKey in playerObj) { // iterate through players
                if (playerKey === playerInput) { // check to see if player matches function argument
                    return playerObj[playerKey].points // return the player's points
                }
            }
        }
    }
}

// Given a player's name, return the player's shoe size
function shoeSize(playerInput) {
    let game = gameObject()
    for (let gameKey in game) { // iterate through game keys (home, away)
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) { // iterate through team keys (teamName, colors, players)
            let playerObj = teamObj.players // iterate through players
            for (let playerKey in playerObj) {
                if (playerKey === playerInput) { // check to see if player matches function argument
                    return playerObj[playerKey].shoe // return the player's points
                }
            }
        }
    }
}

// Given a team name, return an array of the team's colors
function teamColors(teamInput) {
    let game = gameObject()
    for (let gameKey in game) { // iterate through game keys (home, away)
        let teamObj = game[gameKey] 
        if (teamObj.teamName === teamInput) { // check to see if the team name matches the function argument
            return teamObj.colors // return the array of the team's colors
        }
    }
 }

// Return an array of the team names
function teamNames() {
    let game = gameObject()
    let teamNamesArray = [] // create an empty array for the team names
    for (let gameKey in game) { // iterate through game keys (home, away)
        let teamObj = game[gameKey]
        teamNamesArray.push(teamObj.teamName) // add team name to the new array
    }
    return teamNamesArray // return the array of team names
}

// Given a team name, return an array of the jersey numbers for that team
function playerNumbers(teamInput) {
    let game = gameObject()
    for (let gameKey in game) { // iterate through game keys (home, away)
        let teamObj = game[gameKey]
        let teamJerseyNumbersArray = [] // create an empty array for the jersey numbers
        if (teamObj.teamName === teamInput) { // check to see if the team name matches the function argument
            let playerObj = teamObj.players
            for (let playerKey in playerObj) { // iterate through the players in the matching team
                teamJerseyNumbersArray.push(playerObj[playerKey].number) // add each player's number to the new array
            }
        }
        return teamJerseyNumbersArray // return the new array
    } 
}

// Given a players' name, return an object of that player's stats
function playerStats(playerInput) {
    let game = gameObject()
    for (let gameKey in game) { // iterate through game keys (home, away)
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) { // iterate through team keys (teamName, colors, players)
            let playerObj = teamObj.players
            let playerStats = {} // create an empty object for player stats
            for (let playerKey in playerObj) { // iterate through player names
                if (playerKey === playerInput) { // check to see if player matches function argument
                    playerStats.points = playerObj[playerKey].points // create 'points' key inside new object and set value to the player's points stat
                    playerStats.rebounds = playerObj[playerKey].rebounds // and so forth
                    playerStats.assists = playerObj[playerKey].assists // amd so on
                    playerStats.steals = playerObj[playerKey].steals
                    playerStats.blocks = playerObj[playerKey].blocks
                    playerStats.slamDunks = playerObj[playerKey].slamDunks
                }
            }
            return playerStats // return object with player's stats
        }
    }
}

// Return the number of rebounds for the player that has the largest shoe size
function bigShoeRebounds() {
    let game = gameObject()
    for (let gameKey in game) { // iterate through game keys (home, away)
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) { // iterate through team keys (teamName, colors, players)
            let playerObj = teamObj.players
            let largestShoe = 0
            let numberReboundsLargestShoe = 0
            for (let playerKey in playerObj) { // iterate through player names
                if (playerObj[playerKey].shoe > largestShoe) {
                    largestShoe = playerObj[playerKey].shoe
                    numberReboundsLargestShoe = playerObj[playerKey].rebounds
                }
            }
            return numberReboundsLargestShoe
        }
    }
}

function mostPointsScored() {

}

function winngingTeam() {

}

function playerWithLongestName() {

}

// console.log(gameObject())
console.log('Number of points scored:', numPointsScored("Ben Gordon"))
console.log('Shoe size:', shoeSize("Mason Plumlee"))
console.log('Team colors:', teamColors("Brooklyn Nets"))
console.log('Team names:', teamNames())
console.log('Player numbers:', playerNumbers("Brooklyn Nets"))
console.log('Player stats:', playerStats("Brook Lopez"))
console.log('Number of rebounds for the player with the largest shoe size:', bigShoeRebounds())


// // MEAGAN'S SOLUTION
// function allPlayers() {
// return Object.assign({}, gameObject().home.players, gameObject().away.players)
// }
// function numPointsScored(playerName) {
// return allPlayers()[playerName].points
// }
// function shoeSize(playerName) {
// return allPlayers()[playerName].shoe
// }