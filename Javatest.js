//Roster of player
const roster = [{
    name: "Doug",
    position: "Quarterback",
    madeTeam: true
},
{
    name: "Antonio",
    position: "Tight End",
    madeTeam: true
},
{
    name: "Nick",
    position: "Kicker",
    madeTeam: false
},
{
    name: "Ereck",
    position: "Offensive Live",
    madeTeam: false
},
{
    name: "AJ",
    position: "Line Backer",
    madeTeam: true
}];
// YOUR CODE HERE
function madeCut(player){return player.madeTeam;}
let playersOnTeam=roster.filter(madeCut);
console.log(playersOnTeam);
let numberOfPlayers=playersOnTeam.length;
let numberOfCutPlayers=roster.length-numberOfPlayers;

console.log(`${numberOfPlayers} players made the team`)
