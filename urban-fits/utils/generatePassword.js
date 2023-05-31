const random  = (from, to)=>{
    let randint = Math.floor(Math.random()*(to+1));
    if(randint < from){
        randint = from
    }
    return randint
}
const generatePassword = (email)=> {
    const length = random(8, 11);
    const key = `ABCDEFGHIJKLMNOPQRSTUVWXYZ${email}abcdefghijklmnopqrstuvwxyz0123456789`;
    let password = "";

    // Generate a random password of the specified length
    for (let i = 0; i < length; i++) {
        const randomIndex = random(0, key.length)
        password += key.charAt(randomIndex)
    }
    return password
}
export default generatePassword