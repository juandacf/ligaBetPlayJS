var prompt = require('prompt-sync')();

class ligaBetplay {
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
                const playerNumber = prompt("Please insert the player number: ");
                const playerPosition = prompt("please insert the player position: ");

                this.teams.get(teamName)['players'].set(playerName, {
                    'playerNumber': playerNumber,
                    'playerPosition': playerPosition,
                    'playerStatistics': {
                        'scoredGoals': 0,
                        'yellowCards': 0,
                        'redCards': 0,
                    }
                })
            } else {
                console.log("Sorry. This team does not exist. Please try again.")
            }
        } else {
            console.log("There are no teams in the league. Please add a team and try this again.")
        }
    }
    addStaff(){
        if (this.teams.size > 0){
            const teamName = prompt("please insert the name of the team that you would like to add a staff member to: ");
            if(this.teams.has(teamName)){
                const staffName = prompt("Please insert the name of the staff member: ");
                const  staffRole = prompt("please insert the role of the staff member: ");
                this.teams.get(teamName)['staff'][staffName]= staffRole
            } else {
                console.log("Sorry. This team does not exist. Please try again.")
            }
        } else {
            console.log("There are no teams in the league. Please add a team and try this again.")
        }
    }
    addMatch(){
        if (this.teams.size > 0){
            const team1 = prompt("Please insert the name of the first team: ");
            const team2 = prompt("Please insert the name of the second team: ");
            if(this.teams.has(team1) && this.teams.has(team2)){
                console.log("Both teams exist!!")
            } else {
                console.log("Teams don't match with our records.")
            }
        } else {
            console.log("There have to be at least two teams for a match to happen.")
        }
    }    
}


const league = new ligaBetplay();

league.addTeam()





