//ask user to choose ROCK, PAPER or SCISSORS
let userSelection = prompt("Choose ROCK, PAPER or SCISSORS!");

//computerSelection generates a number
let computerSelection = Math.random();
if (computerSelection <= 0.34)
{
    computerSelection = "PAPER";
}
else if (computerSelection <= 0.67)
{
    computerSelection = "SCISSORS";
}
else
{
    computerSelection = "ROCK";
}

//display both selections
console.log ("You chose:" + userSelection);
console.log ("Computer chose:" + computerSelection);

//if user and computer choose the same, we display it is a tie
if (userSelection == computerSelection)
{
    console.log("TIE!")
}


//if user chooses rock, and computer chooses paper, computer wins
else if (userSelection == "ROCK")
{
    if (computerSelection == "PAPER")
    {
        console.log("COMPUTER WINS!");
    }
// if computer selected scissors, user wins
    else
    {
        console.log("USER WINS!");
    }
}


//if user chooses paper, and computer chooses rock, user wins
else if (userSelection == "PAPER")
{
    if (computerSelection == "ROCK")
    {
        console.log("USER WINS!");
    }
// if computer selected scissors, computer wins
    else
    {
        console.log("COMPUTER WINS!");
    }
}


//if user chooses scissors, and computer chooses rock, computer wins
else
{
    if (userSelection == "SCISSORS")
    {
        if (computerSelection == "ROCK")
        {
            console.log("COMPUTER WINS!");
        }
    }
// if computer selected scissors, user wins
    else
    {
        console.log("USER WINS!");
    }
} 