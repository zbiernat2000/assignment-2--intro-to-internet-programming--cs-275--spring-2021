let recipe = document.getElementById('recipe');
let whiteButton = document.getElementById('white');
let sproutedButton = document.getElementById('sprouted');
let whiteText = "Combine 1 cup of rice with 2 cups of water and 1 Tbsp olive oil. Bring to a boil, then reduce heat to the lowest setting. Cook for about 18 minutes.";
let sproutedText = "For slightly al dente rice :\n"+
"Combine 1 1/4 cups of rice with 2 cups of water or broth and 1 Tbsp olive oil. Bring to a boil and stir once to mix.\n" +
"Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes.\n"+
"Remove from heat and let stand for 5 minutes. Fluff with a fork and serve.\n"+
"For softer rice:\n" +
"Increase liquid by 1/2 cup and cook time by 5 minutes.\n";


//Sets text content of recipe
function setText(string){
    recipe.textContent = string;
}

whiteButton.onclick = () =>{
    setText(whiteText);
}

sproutedButton.onclick = () =>{
    setText(sproutedText);
}
