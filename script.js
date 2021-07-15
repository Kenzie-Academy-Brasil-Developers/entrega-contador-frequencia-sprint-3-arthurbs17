const button = document.getElementById("countButton");


button.addEventListener("click", function() {  
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-záàâãéèêíïóôõöúçñ'\s]+/g, "")


    showResults(countDisplay(captureLetters(typedText)));
    showResultsWords(countDisplay(countWords(typedText)));
    console.log(typedText);
    console.log(captureLetters(typedText))

});

function showResults(n){

    let divNova = document.createElement("div");

    let newp = document.createElement("p");

    divNova.appendChild(newp);

    let kata = document.createTextNode(n);
    
    newp.appendChild (kata);

    let destination = document.getElementById("lettersDiv");

    destination.appendChild(divNova);
}

function showResultsWords(n){

    let divNova = document.createElement("div");

    let newp = document.createElement("p");

    divNova.appendChild(newp);

    let kata = document.createTextNode(n);
    
    newp.appendChild (kata);

    let destination = document.getElementById("wordsDivs");

    destination.appendChild(divNova);
}

function captureLetters (typedText){

    let alfabeto = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0,
        n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0, ç: 0, ' ': 0
    };

    for (let i = 0; i < typedText.length; i++){

        if (typedText[i] === 'á' || typedText[i] === 'ã' || typedText[i] === 'à' || typedText[i] === 'â'){
            alfabeto['a'] += 1
        } 
        
        if (typedText[i] === 'é' || typedText[i] === 'è' || typedText[i] === 'ê'){
            alfabeto['e'] += 1
        }
        if (typedText[i] === 'í'){
            alfabeto['i'] += 1
        }
        if (typedText[i] === 'ó' || typedText[i] === 'õ' || typedText[i] === 'ô'){
            alfabeto['o'] += 1
        }
        if (typedText[i] === 'ú'){
            alfabeto['u'] += 1
        }

        else if (typedText[i] !== 'à' && typedText[i] !== 'á' && typedText[i] !== 'ã' && typedText[i] !== 'â' && 
        typedText[i] !== 'é' && typedText[i] !== 'è' && typedText[i] !== 'ê' &&
        typedText[i] !== 'í' &&
        typedText[i] !== 'ó' && typedText[i] !== 'ò' && typedText[i] !== 'ô' &&
        typedText[i] !== 'ú'
        ) {
            alfabeto[typedText[i]] += 1;
        }
    }

    return alfabeto
}

function countDisplay (objLettersCount){

    let strCountArr = [];
   
    let alfabetoValue = Object.values(objLettersCount);
    let alfabetoKeys = Object.keys(objLettersCount);

    for (let i = 0; i < alfabetoValue.length; i++){
        if (alfabetoValue[i] > 0){
            strCountArr.push('"' + alfabetoKeys[i] + '"' + ': ' + alfabetoValue[i] + ' ');
        }
    }

    let strCountLetters = strCountArr.join(' - ')

    return strCountLetters
}

function isKeyExists(obj,key){
    return key in obj;
}

function countWords(typedText){

    let typedTextArr = typedText.split(/\s/);
    let objWords = {};

    for (let i = 0; i < typedTextArr.length; i++){

        if (isKeyExists(objWords, typedTextArr[i]) === false && typedTextArr[i] !== ""){
            objWords[typedTextArr[i]] = 0
        }
        if (isKeyExists(objWords, typedTextArr[i]) === true){
            objWords[typedTextArr[i]] += 1
        }

    }

    return objWords
}