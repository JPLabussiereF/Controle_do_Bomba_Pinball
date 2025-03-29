document.getElementById("leftButton").addEventListener("click", function() {
    sendCommand("left");
});

document.getElementById("rightButton").addEventListener("click", function() {
    sendCommand("right");
});

function sendCommand(command) {
    fetch("http://localhost:3000/command", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ command })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Erro:", error));
}
