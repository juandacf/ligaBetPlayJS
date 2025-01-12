var prompt = require('prompt-sync')();

class BetplayLeague {
    constructor() {
        this.teams = new Map();
    }

    addTeam() {
        const teamName = prompt("Please insert the team name: ").toLowerCase()
        if (this.teams.has(teamName)) {
            console.log("This team already exists. Try again. ")
        } else {
            this.teams.set(teamName, {
                'staff': {},
                'players': {},
                'statistics': {
                    'totalGames': 0,
                    'victories': 0,
                    'defeats': 0,
                    'evens': 0,
                    'scoredGoals': 0,
                    'receivedGoals': 0,
                    'points': 0,
                    'playedAsHomeTeam': 0,
                    'playedAsAway': 0,
                }
            })
            console.log(`The team ${teamName} has been added to the league succesfully!`)
        }

    }
    addPlayer() {
        if (this.teams.size > 0) {
            const teamName = prompt("please insert the name of the team that you would like to add a player to: ");
            if (this.teams.has(teamName)) {
                const playerName = prompt("Please insert the name of the player: ");
                if (!this.teams.get(teamName)['players'][playerName]) {
                    const playerNumber = prompt("Please insert the player number: ");
                    const playerPosition = prompt("please insert the player position: ");

                    this.teams.get(teamName)['players'][playerName] = {
                        'playerNumber': playerNumber,
                        'playerPosition': playerPosition,
                        'playerStatistics': {
                            'scoredGoals': 0,
                            'yellowCards': 0,
                            'redCards': 0,
                        }
                    }
                } else {
                    console.log("This player already exists. Please try again with a different name.")
                }
            } else {
                console.log("Sorry. This team does not exist. Please try again.")
            }
        } else {
            console.log("There are no teams in the league. Please add a team and try this again.")
        }
    }
    addStaff() {
        if (this.teams.size > 0) {
            const teamName = prompt("please insert the name of the team that you would like to add a staff member to: ");
            if (this.teams.has(teamName)) {
                const staffName = prompt("Please insert the name of the staff member: ");
                const staffRole = prompt("please insert the role of the staff member: ");
                this.teams.get(teamName)['staff'][staffName] = staffRole
            } else {
                console.log("Sorry. This team does not exist. Please try again.")
            }
        } else {
            console.log("There are no teams in the league. Please add a team and try this again.")
        }
    }
    addMatch() {
        if (this.teams.size > 1) {
            const team1 = prompt("Please insert the name of the first team: ");
            const team2 = prompt("Please insert the name of the second team: ");
            if (this.teams.has(team1) && this.teams.has(team2)) {
                const firstTeam = this.teams.get(team1)['statistics'];
                const secondTeam = this.teams.get(team2)['statistics'];
                const scoreTeam1 = Number(prompt(`Please insert the goals scored by ${team1}`));
                const scoreTeam2 = Number(prompt(`Please insert the goals scored by ${team2}`));
                firstTeam['totalGames'] += 1;
                secondTeam['totalGames'] += 1;
                firstTeam['scoredGoals'] += scoreTeam1;
                secondTeam['scoredGoals'] += scoreTeam2;
                firstTeam['receivedGoals'] += scoreTeam2;
                secondTeam['receivedGoals'] += scoreTeam1;
                console.log('The match scores were updated succesfully!')
                if (scoreTeam1 > scoreTeam2) {
                    firstTeam['victories'] += 1;
                    secondTeam['defeats'] += 1;
                    firstTeam['points'] += 3;
                } else if (scoreTeam2 > scoreTeam1) {
                    secondTeam['victories'] += 1;
                    firstTeam['defeats'] += 1;
                    secondTeam['points'] += 3;
                } else {
                    firstTeam['evens'] += 1;
                    secondTeam['evens'] += 1;
                    firstTeam['points'] += 1;
                    secondTeam['points'] += 1;
                }
            } else {
                console.log("Teams don't match with our records.")
            }
        } else {
            console.log("There have to be at least two teams for a match to happen.")
        }
    }
    addPlayerStatistics() {
        if (this.teams.size > 0) {
            const teamName = prompt("Please insert player's team name: ");
            if (this.teams.has(teamName)) {
                const playerName = prompt("Please insert the player's name: ")
                const playerRoute = this.teams.get(teamName)['players'][playerName]['playerStatistics']
                if (playerRoute) {
                    const scoredGoals = Number(prompt("Please insert the player's scored goals: "));
                    const yellowCards = Number(prompt("please insert the player's yellow cards: "));
                    const redCards = Number(prompt("Please inser the player's red cards: "));
                    playerRoute['scoredGoals'] += scoredGoals;
                    playerRoute['yellowCards'] += yellowCards;
                    playerRoute['redCards'] += redCards;
                    console.log("The information has been added to our records succesfully!")
                } else {
                    console.log("The inserted player name does not match with our records")
                }
            } else {
                console.log("The inserted team does not match with our records.")
            }
        } else {
            console.log("There are no teams available at this moment. Please")
        }

    }

}


const league = new BetplayLeague();


league.addTeam();
league.addPlayer();
league.addPlayer();
console.log(league.teams.get("millos")['players']);






