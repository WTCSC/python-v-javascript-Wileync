// states our function and names in, includes the length our output will be
function generatePassword(length = 12) {

    // Creates a variable using let that is the result, so far equal to an empty list
    let result = '';


    //creates a list constant variable with every letter uppercase and lowercase as well as numbers 1-9
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'

    //creates a constant variable that is equal to the length of our A-Z a-z and 1-9 list
    const character_length = characters.length;

    //sets i = to 0, a variable
    let i = 0

    //creates a for loop that as i is less than our length(12) then it will add another character
    for (let i = 0; i < length; i++) {

    //takes our result list and adds a random character until it reaches 12 characters
    //character_length is the amount of characters in our long character list about (64)
    //Math.random will make a random number between 0 and 1
    // Those two get multipled to end up somewhere between 0 and 64
    //Math.floor will round our random number down to a whole number
    //charAT will take that random number and grab the corresponding digit in our character list
    result += characters.charAt(Math.floor(Math.random() * character_length));
    }

    //returns our random password
    return(result)                        
}                                      

module.exports = generatePassword;