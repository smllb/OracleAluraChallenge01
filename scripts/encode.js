let encodeCharacter = (character) => {
    return letterDictionary[character] || character
}

let encodeInput = (input) => {
    let inputArr = input.split("");
    return inputArr.map((character) => {
        return encodeCharacter(character)}).join("")

}
