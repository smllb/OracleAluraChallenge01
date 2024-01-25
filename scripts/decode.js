let decodeInput = (input) => {
    let decodedInput = input;
    Object.values(letterDictionary).forEach((value, index) => {
        let decodeRegex = new RegExp(value, 'g');
        decodedInput = decodedInput.replace(decodeRegex, Object.keys(letterDictionary)[index]);

    })
    return decodedInput;
}
