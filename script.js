function showPage() {
   document.getElementById("loader").style.display = "none";
   document.getElementById("main-content").style.display = "block";
}


const generateBtn = document.getElementById('generate-btn');
const emailTo = document.getElementById('email-to');
const emailSubject = document.getElementById('email-subject');
const emailBody = document.getElementById('email-body');

generateBtn.addEventListener('click', generateEmail);


