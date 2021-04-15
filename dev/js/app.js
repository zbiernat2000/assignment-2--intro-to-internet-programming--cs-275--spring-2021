let cups = parseInt(prompt("How many cups of rices are you cooking?"))
if (Number.isNaN(cups))
    cups = 1;
let recipe = document.getElementById('recipe');
let whiteButton = document.getElementById('white');
let sproutedButton = document.getElementById('sprouted');
let whiteText = "Combine " + cups + " cup of rice with "+ cups*2 + " cups of water and 1 Tbsp olive oil.\r\n" +
"Bring to a boil, then reduce heat to the lowest setting.\r\n" +
"Cook for about 18 minutes.";
let sproutedText = "For slightly al dente rice :\r\n" +
    "Combine "+ cups + " cups of rice with "+ cups*1.6 + " cups of water or broth and 1 Tbsp olive oil. Bring to a boil and stir once to mix.\r\n" +
    "Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes.\r\n" +
    "Remove from heat and let stand for 5 minutes. Fluff with a fork and serve.\r\n\r\n" +
    "For softer rice:\r\n" +
    "Increase liquid by 1/2 cup and cook time by 5 minutes.\r\n";

2


whiteButton.onclick = () => {
    recipe.textContent = whiteText;
}

sproutedButton.onclick = () => {
    recipe.textContent = sproutedText;
}

