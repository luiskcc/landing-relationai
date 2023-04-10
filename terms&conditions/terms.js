function setData()
        {    
        const txt = `
      Agreement to Terms
By using Relation AI, you agree to comply with these terms and conditions. If you do not agree with these terms, you should not use the tool.

Use of Relation AI
Relation AI is a software designed to assist sales teams in their daily work. You may use the tool for this purpose only. You may not use the tool for any illegal or unauthorized purposes.</np>

Data Privacy and Security
Relation AI collects, processes, and stores user data in a secure manner. By using the tool, you agree to allow Relation AI to collect and process your data for the sole purpose of providing sales assistance and improving the tool's functionality. Relation AI complies with the European Union's General Data Protection Regulation (GDPR) and any other applicable data privacy and security laws.</np>

Intellectual Property Rights
Relation AI and its content, including but not limited to text, graphics, logos, images, and software, are the intellectual property of Relation AI or its licensors. You may not use, reproduce, or distribute any of the content without the prior written consent of Relation AI.</np>

Limitation of Liability
Relation AI is not liable for any damages, including but not limited to direct, indirect, incidental, special, or consequential damages, arising out of or in connection with the use of the tool. Relation AI is also not liable for any damages resulting from the use of third-party software or services that may be integrated with Relation AI.</np>

Indemnification
You agree to indemnify and hold Relation AI and its affiliates, employees, and agents harmless from any claims, damages, or expenses arising out of or in connection with your use of the tool.</np>

Modification of Terms and Conditions
Relation AI may modify these terms and conditions at any time. By continuing to use the tool after any modifications, you agree to comply with the updated terms and conditions.</np>

Termination
Relation AI may terminate your use of the tool at any time if you violate these terms and conditions.</np>

Governing Law and Jurisdiction
These terms and conditions are governed by and construed in accordance with the laws of the European Union. Any disputes arising out of or in connection with these terms and conditions shall be resolved in the courts of the European Union.</np>

User Conduct
You agree to use Relation AI in a responsible and ethical manner. You may not use the tool to harass, defame, or discriminate against any individual or group. You may not use the tool to send spam or engage in any other illegal or unauthorized activities.</np>

User Content
Relation AI allows users to create and share content. You are solely responsible for any content that you create or share using the tool. You may not create or share any content that is illegal, offensive, or violates the rights of others.</np>

Termination of User Content
Relation AI may remove or terminate any user content that violates these terms and conditions or any applicable laws.</np>

Third-Party Services and Content
Relation AI may integrate with third-party services or content. You agree to comply with any additional terms and conditions that may apply to these services or content.</np>

Disclaimer of Warranties
Relation AI makes no warranties or representations about the accuracy, reliability, or completeness of the tool or any content created or shared using the tool.</np>

Assignment
Relation AI may assign these terms and conditions to any third party without your consent.</np>

Entire Agreement
These terms and conditions constitute the entire agreement between you and Relation AI regarding the use of the tool.</np>`;
       

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


