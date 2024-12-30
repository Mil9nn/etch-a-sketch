let container = document.querySelector("#container");
let body = document.querySelector("body");

// Function to generate random RGB values
function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Creating a grid layout
function createGrid(numberOfSquares) {
    container.innerHTML = " "; // Clearing the previous Grid.

    // Create grid squares
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        let gridBox = document.createElement("div");
        gridBox.style.backgroundColor = "whitesmoke";
        gridBox.classList.add("gridBox");
        container.appendChild(gridBox);
    }

    // Hover effect on grid items (Event delegation)
    container.addEventListener("mouseover", function(event) {
        if (event.target.classList.contains("gridBox")) {
            event.target.style.backgroundColor = getRandomColor();
        }
    });

    // Touch effect for smart phones 
    container.addEventListener("touchmove", function(event) {
        if (event.target.classList.contains("gridBox")) {
            event.target.style.backgroundColor = getRandomColor();
        }
    });

    // Setting grid dimensions in CSS
    container.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;
}

let numberOfSquares = 16; // Initial number of squares

// Creating the initial Grid
createGrid(numberOfSquares);

// Create and insert button container
let buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");
body.insertBefore(buttonContainer, container);

// Create button to adjust grid size
let button = document.createElement("button");
button.textContent = "Adjust Grid Size";
button.classList.add("btn");
buttonContainer.appendChild(button);

// Button click event listener
button.addEventListener("click", function() {
    let userInput = prompt("Number of squares per side (maximum 100):");
    numberOfSquares = parseInt(userInput);

    if (numberOfSquares <= 100 && numberOfSquares.toString() === userInput.trim()) {
        createGrid(numberOfSquares);
    } else if (numberOfSquares > 100) {
        alert("Please enter a number less than or equal to 100.");
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
});

let paragraph = document.createElement("p");
paragraph.textContent = "The canvas is all yours—let's see what you can create! 😎💫";
paragraph.classList.add("title");
body.insertBefore(paragraph, buttonContainer);
