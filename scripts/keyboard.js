  const copyContentToKeyboard = async () => {
    let outputs = document.querySelectorAll('#outputs p');
  
    let lastElementText = outputs[outputs.length-1].textContent
    console.log(JSON.stringify(outputs,null,2))
    try {
      await navigator.clipboard.writeText(lastElementText);
      alert(`Texto ${lastElementText} copiado com sucesso.`)
      console.log('Last message copied to clipboard.');
    } catch (err) {
      console.error('Failed with error: ', err);
    }
  }