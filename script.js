const typingText = "Hi, I'm Relation AI, your new Sales Development Representative. My main role is to help generate and qualify leads for your sales team. With my assistance, you can streamline your sales process and increase revenue.";
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
    typingElement.style.borderRight = "none";
    }

typeText();


