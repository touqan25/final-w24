// Define a media query to check if the user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Select all recipe containers
const recipesets = document.querySelectorAll('.recipe_container');

// Function to change positions of recipe cards
const changePositions = (e, recipeset) => {
    const clickedRecipe = e.currentTarget;
    if (clickedRecipe.classList.contains('active')) return;
    const activeRecipe = recipeset.querySelector('.recipes.active');

    clickedRecipe.classList.remove('right');
    clickedRecipe.classList.add('active');
    activeRecipe.classList.remove('active');
    activeRecipe.classList.add('right');
};

// Apply initial positioning and set the first recipe as active
recipesets.forEach((recipeset) => {
    const recipes = recipeset.querySelectorAll('.recipes');
    recipes.forEach((recipe, index) => {
        if (index % 2 !== 0) {
            recipe.classList.add('right');
        }
        if (index === 0) {
            recipe.classList.add('active');
        }
    });
});

// Event listeners for click and keypress events
recipesets.forEach((recipeset) => {
    const recipes = recipeset.querySelectorAll('.recipes');
    recipes.forEach((recipe) => {
        ['click', 'keypress'].forEach((ev) => {
            recipe.addEventListener(ev, function (ev) {
                if (!prefersReducedMotion.matches) {
                    changePositions(ev, recipeset);
                }
            });
        });
    });
});
