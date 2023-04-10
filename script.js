function setData()
        {    
        const txt = `
        Hi,  <np>
        <np>        

        I'm Relation AI your new Sales Development Representative. <np>
        My main role is to help generate and qualify leads for your sales team. <np>
        With my assistance, you can streamline your sales process and increase revenue.<np>
        #codeCandy Studio`;
        const outputDiv = document.getElementById('typed-content');
        return [txt, outputDiv]
    };
const res =  setData();
const txt = res[0];
const outputDiv = res[1];
const splittedTxt = txt.split('<np>');
splittedTxt.forEach((item, index) => {
  const p = document.createElement('p');
  outputDiv.appendChild(p);
  });
const allParas = outputDiv.querySelectorAll('p');
let i = 0;
let currentPara = 0;
const timerId = setInterval(() => {
allParas[currentPara].innerHTML += splittedTxt[currentPara].charAt(i);
i++;
if (i === splittedTxt[currentPara].length) {
currentPara++;
i=0;
if (currentPara === splittedTxt.length) {
clearInterval(timerId);
}
}
},65);




