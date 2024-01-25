let letterDictionary = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};
let operationCount = 1;
var checkTextForUppercaseAndAccent = (text) => {
    let uppercaseAndAccentRegex = /[À-ÖØ-öø-ÿ A-Z]/g;
    return  uppercaseAndAccentRegex.test(text);
    
}
var updateText = (text) => {
    if (checkTextForUppercaseAndAccent(text)) {
        alert("Texto contém acentos ou letras maiúsculas.")
        return
    }

    let outputDiv = document.getElementById('outputs');
    let output = document.createElement('p');
    output.textContent = `Mensagem ${operationCount}. ${text}\n`;
    outputDiv.append(output)
    operationCount++

}

var getInputFromTextAreaAndResetText = () => {
    let element = document.getElementById('input')
    let elementContent = element.value
    element.value = '';
    console.log(elementContent)
    return elementContent;

}