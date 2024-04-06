const formGreeting = document.getElementById("formGreeting");


formGreeting.onsubmit = function(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const maxLengthName = 15;
    let name = formData.get("name");
    if (name.length > maxLengthName) {
        name = name.slice(0, maxLengthName) + "...";
    }

    const outputText = document.createElement("p");
    outputText.textContent = `Hello, ${name}`;

    const output = document.getElementById("output");
    output.appendChild(outputText);
}
