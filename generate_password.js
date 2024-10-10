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






/*
module.exports = generatePassword;

is used to select a random character from the characters string and append it to the result string. Let’s break it down:

Explanation                                   
Math.random()

This function returns a random decimal number between 0 (inclusive) and 1 (exclusive).
Math.random() * charactersLength

Multiplies the random decimal by the length of the characters string (stored in charactersLength). This scales the number to be between 0 and just below the length of the string.
Math.floor(Math.random() * charactersLength)

Math.floor() rounds down to the nearest integer. This converts the random decimal into an integer index between 0 and charactersLength - 1. This ensures it’s a valid index for accessing a character in the string.
characters.charAt(Math.floor(Math.random() * charactersLength))

The charAt() method retrieves the character at the calculated random index from the characters string.
result += ...

Appends the randomly selected character to the result string.
Example
Assuming characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789":

If charactersLength = 62 and Math.random() returns 0.5:
Math.random() * charactersLength would be 31.
Math.floor(31) would still be 31.
characters.charAt(31) would return the character at index 31, which might be 'f'.
This character ('f') is then added to result.
*/