
const typingText = "Relation AI is a simple sales marketing tool that helps you interact with customers just like this... |";
const typingContainer = document.querySelector(".typing-container");
const typingElement = document.querySelector("#typing-text");

function typeText() {
    typingElement.textContent = "";
    let i = 0;
    const typingInterval = setInterval(function() {
        typingElement.textContent += typingText.charAt(i);
        i++;
        if (i > typingText.length) {
            clearInterval(typingInterval);
            setTimeout(bindText, 1000);
        }
    }, 100);
}

function bindText() {
    typingElement.textContent = typingText.replace("|", "");
    typingElement.style.borderRight = "none";
}

typeText();