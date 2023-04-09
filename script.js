

const outputDiv = document.getElementById('typed-content')

const txt = "Hi, I'm Relation AI, your new Sales Development Representative. My main role is to help generate and qualify leads for your sales team. With my assistance, you can streamline your sales process and increase revenue.";

function typeText(){

    let i = 0;


    setInterval(() => {

        outputDiv.innerHTML += txt.charAt(i);
        i++;
    }, 50)

}

typeText();


