  const copyContentToKeyboard = async () => {
    let outputs = document.querySelectorAll('#outputs p');
    let lastElementText = outputs[outputs.length-1].textContent
    try {
      await navigator.clipboard.writeText(lastElementText);
      alert(`Texto ${lastElementText} copiado com sucesso.`)
      console.log('Last message copied to clipboard.');
    } catch (err) {
      console.error('Failed with error: ', err);
    }

  }