const formGreeting = document.getElementById("formGreeting")

formGreeting.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");

    const outputText = document.createElement("p");
    outputText.textContent = `Hello, ${name}`;

    const output = document.getElementById("output");
    output.appendChild(outputText);
});
