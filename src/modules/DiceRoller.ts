/**
 * Everything related to rolling dice.
 */
class Dice {

  /**
   * Rolls a number of dice with a given number of sides.
   *
   * @returns An array of numbers containing the roll results.
   */
  static roll({ numDice=1, numSides }: { numDice: number, numSides: number }) {
    // Array to store the roll results.
    const results: number[] = []

    // Roll the dice.
    for (let i = 0; i < numDice; i++) {
      results.push(Math.floor(Math.random() * numSides) + 1)
    }

    // Keep x amount of high or low rolls.
    // if (keep) {
    //   const [keepType, keepNum] = keep.split(/h|l/)
    //   const keepNumInt = Number(keepNum)
    //   if (keepType === "k") {
    //     if (keep.includes("h")) {
    //       results.sort((a, b) => b - a) // Sort in descending order.
    //       results.splice(keepNumInt) // Remove the excess rolls.
    //     } else if (keep.includes("l")) {
    //       results.sort((a, b) => a - b) // Sort in ascending order.
    //       results.splice(0, results.length - keepNumInt) // Remove the excess rolls.
    //     }
    //   }
    // }

    // Return the rolls.
    return results
  }

  /**
   * Rolls a number of dice with a given number of sides.
   *
   * TODO: Add support for keeping high/low rolls.
   *
   * @param str - The string to parse. Must be in the format 'xdy', where x and y are positive integers.
   *              Can also include 'khx' to keep x amount of high rolls or 'klx' to keep x amount of low rolls.
   * @example Roll.fromString("2d6") = [4, 6]
   * @returns An array of numbers representing the rolls.
   */
  static rollFromString(str: string): number[] {
    // Split the string into the number of dice and the number of sides.
    // const [diceString, keep] = str.split(/kh|kl/)
    // const [numDice, numSides] = diceString.split("d").map(Number)
    const [numDice, numSides] = str.split("d").map(Number)

    // Validate the input.
    this.validateInput(numDice, numSides)

    // Roll the dice.
    const rolls = Dice.roll({ numDice, numSides })

    return rolls
  }


  /**
   * Validates the input, see if the numbers are actual numbers and if they are positive.
   *
   * @param numDice - The number of dice to roll.
   * @param numSides - The number of sides on each die.
   */
  static validateInput(numDice: number, numSides: number): void {
    // Check that the input is valid.
    if (isNaN(numDice) || isNaN(numSides)) {
      throw new Error("Invalid input format. Must be in the format 'xdy', where x and y are positive integers.")
    }

    // Check if the input is positive.
    if (numDice <= 0 || numSides <= 0) {
      throw new Error("Number of dice and number of sides must be positive integers.")
    }
  }
}