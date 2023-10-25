export const generateRandomInt = (from, to) => {
    let randint = Math.floor(Math.random() * (to - from + 1)) + from;
    return randint
}
export const generateRandIntWithProbabilities = (numbers, probabilities) => {
    if (numbers.length !== probabilities.length) {
        throw new Error("Arrays 'numbers' and 'probabilities' must have the same length.");
    }

    // Calculate the total probability sum
    const totalProbability = probabilities.reduce((sum, probability) => sum + probability, 0);

    // Generate a random value between 0 and the total probability sum
    const randomValue = Math.random() * totalProbability;
    let cumulativeProbability = 0;

    for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (randomValue <= cumulativeProbability) {
            return numbers[i];
        }
    }
    // If no number is selected, return the last number
    return numbers[numbers.length - 1];
}

const generatePassword = (email) => {
    const length = generateRandomInt(8, 11);
    const key = `ABCDEFGHIJKLMNOPQRSTUVWXYZ${email}abcdefghijklmnopqrstuvwxyz0123456789`;
    let password = "";

    // Generate a random password of the specified length
    for (let i = 0; i < length; i++) {
        const randomIndex = generateRandomInt(0, key.length)
        password += key.charAt(randomIndex)
    }
    return password
}
export const generateRandString = (length) => {
    const key = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
    let password = "";

    // Generate a random password of the specified length
    for (let i = 0; i < length; i++) {
        const randomIndex = generateRandomInt(0, key.length)
        password += key.charAt(randomIndex)
    }
    return password
}
export default generatePassword