/**********************************
 * Coding Challenge 2
 */

 /*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. 
Also include the average score in the output.
3. Then change the scores to show different winners.
Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 pooints. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

  */

var JohnsTeamAverage = (89 + 120 + 103) / 3;
var MikesTeamAverage = (116 + 94 + 123) / 3;
var MarysTeamAverage = (97 + 134 + 105) / 3;
console.log(JohnsTeamAverage, MikesTeamAverage, MarysTeamAverage);

if (JohnsTeamAverage > MikesTeamAverage) {
    console.log('John\'s team won with an average of ' + JohnsTeamAverage);
} else if (MikesTeamAverage > JohnsTeamAverage) {
    console.log('Mike\'s team won with an average of ' + MikesTeamAverage);
} else {
    console.log('There is a draw.');
}

// Extra task

switch (true) {
    case (JohnsTeamAverage > MikesTeamAverage && JohnsTeamAverage > MarysTeamAverage):
    console.log('John\'s team won with an average of ' + JohnsTeamAverage);
    break;
    case (MikesTeamAverage > JohnsTeamAverage && MikesTeamAverage > MarysTeamAverage):
    console.log('Mike\'s team won with an average of ' + MikesTeamAverage);
    break;
    case (MarysTeamAverage > JohnsTeamAverage && MarysTeamAverage > MikesTeamAverage):
    console.log('Marry\'s team won with an average of ' + MarysTeamAverage);
    break;
    default:
    console.log('There is a draw');
}




