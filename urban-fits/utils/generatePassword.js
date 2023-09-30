export const generateRandomInt = (from, to) => {
    let randint = Math.floor(Math.random() * (to - from + 1)) + from;
    //  Math.floor(Math.random() * (to + 1));
    // if (randint < from) {
    //     randint = from
    // }
    return randint
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