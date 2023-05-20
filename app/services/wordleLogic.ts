import {WORDS} from "./words"
import {VALIDINPUT} from "./validInput"

export const makeGuess = (word:string, remainingInput?: Array<Array<string>>) => {
    const guess = word.toLowerCase()
    const todaysSolution = getTodaysWord()

    return word.length !== 5 ? ("Expected 5 character guess. Try again.") :
    !WORDS.includes(guess) ? ("Your guess is not Valid. Try again.") :
    guess == todaysSolution ? ("Congratulations, you guessed right! 🎉") :
    wordleReport(todaysSolution, guess, remainingInput)

}

const getTodaysWord = () => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = (today.getTime() - startOfYear.getTime()) + ((startOfYear.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    return WORDS[dayOfYear]
}

const wordleReport = (solution:string, guess:string, remainingInput?: Array<Array<string>>) => {
    const scores = wordleScore(solution, guess)
    const updateedInput = (inputField(scores, remainingInput))
    return {
        scores,
        updateedInput
    }
}

const wordleScore = (solution:string, guess:string) => {
    const matches = green(solution,guess)
    return yellow(solution, matches)
}

const green = (solution:string, guess:string) => {
    return guess.split("")
    .map((x, index) => {
        return x == solution[index] ? [x, "🟩"] : [x, "🟥"]
    })
}

const yellow = (solution:string, matches:Array<Array<string>>) =>{
    return matches.map((x) => {
        return x[1] == "🟩" ? x :
            solution.includes(x[0]) ? [x[0],"🟨"] :
            x 
    }) 
}

const inputField = (scores : Array<Array<string>>, remainingInput?: Array<Array<string>>) => {
    const validInput = remainingInput ? remainingInput : VALIDINPUT
    return validInput.map( (letter) =>  {
        const usedLetter = scores.find((guessedLetters) =>  guessedLetters[0] == letter[0] ? guessedLetters : null) 
        return usedLetter ? usedLetter : letter
    })
}
