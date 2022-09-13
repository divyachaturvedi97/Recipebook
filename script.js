'use strict';

let recipes = [
    {
    id:0,
    image: 'images/food_image1.png',
    name:'Butter Paneer',
    ingredients:`&#8226; 4 tbsp butter
    &#8226; 2 cups chopped onion<br>
    &#8226; 2 tbsp finely chopped garlic<br>
    &#8226; 1 tbsp finely grated fresh ginger<br>
    &#8226; 2 tbsp garam masala<br>
    &#8226; 2 tsp paprika <br>
    &#8226; 1/4 tsp cinnamon<br>
    &#8226; 2 tsp coarse salt<br>
    &#8226; 2 cups diced tomatoes<br>
    &#8226; 3/4 cup heavy whipping cream<br>
    &#8226; 400 grams paneer cut in cubes<br>
    &#8226; Chopped cilantro and sliced optional, for garnish<br>`,
    method:`&#8226; Heat butter over medium heat in a large saucepan or dutch oven.<br>
    &#8226;Add onions and slowly cook until golden, about 20 minutes,<br>
           reducing heat if they are getting crispy or browning quickly.<br>
    &#8226;This is an important flavour-building step, don't rush it!<br>
    &#8226;Add garlic and ginger and cook until fragrant, about 1 minute.<br>
    &#8226;Stir in garam masala, paprika, cinnamon and salt; cook 1 minute more.<br>
    &#8226;Add tomatoes and almonds; cook 2 minutes, then add cream and carefully puree<br>
    &#8226;Return sauce to saucepan and bring to a simmer.<br>
    &#8226;Gently stir in paneer and cook until heated through, about 2 minutes.<br>
    &#8226;Top with cilantro and additional almonds, if desired<br>
           using an immersion blender (or standing blender, but do it in <br>
           batches or the steam will blow the top off).`
    },
    { 
      id:1,
      image:'images/food_image2.jpg',
      name:'Chicken Nugggets',
      ingredients:`&#8226; 1/2 cup all-purpose flour<br>
      &#8226; 1 teaspoon granulated garlic<br>
      &#8226; Kosher salt and ground black pepper<br>
      &#8226; 2 boneless skinless chicken breasts, cut into 1 1/2-inch pieces<br>
      &#8226; 1 cup prepared breadcrumbs<br>
      &#8226; 1 large egg<br>
      &#8226; 1 cup vegetable oil<br>`,
     method:`&#8226; Place the flour in a resealable plastic bag and season with the garlic,<br>
      1 teaspoon salt and 1/4 teaspoon pepper. <br>
      &#8226; Place the chicken pieces in the bag with the flour and toss to coat (work in batches).<br>
      &#8226; Transfer the breadcrumbs to a rimmed<br>
      plate, season with salt and pepper and set aside.<br>
      &#8226; Whisk the egg and 1 tablespoon water in a medium bowl.<br>
      Remove a piece of chicken from the flour, dip in the egg mixture,<br>
      then the breadcrumbs, gently pressing the crumbs into the chicken,<br>
      and set on a clean plate. Repeat with the remaining pieces of chicken. <br>
      &#8226; Heat the vegetable oil in a large frying pan over medium-high heat.<br>
      Add the chicken pieces to the pan (work in batches if needed) and<br>
      brown on each side, about 8 minutes total. Use a spatula to transfer<br>
      the chicken nuggets to a paper-towel-lined plate. Salt while hot and serve.<br>`
    
    },
    {
     id:2,
     image:'images/food_image3.jpg',
     name:'Lasagna',
     ingredients:`&#8226; 1 clove garlic<br>
     &#8226; 1/2 pound ground beef<br>
     &#8226; 1 teaspoon Italian seasoning<br>
     &#8226; 1 cup spaghetti sauce<br>
     &#8226; 6 purchased precooked or oven-ready lasagna noodles <br>
     &#8226; 1 container (12 ounces) reduced-fat cottage cheese <br>
     &#8226; 1 cup shredded mozzarella cheese (4 ounces)<br>
     &#8226; 2 tablespoons grated Parmesan cheese <br>`,
     method:`&#8226; Heat the oven to 400°. Peel and finely chop the garlic. Cook the beef and garlic<br>
    in the skillet over medium heat about 5 minutes, stirring occasionally, until the beef <br>
    is brown; drain.<br>
    &#8226; Stir the Italian seasoning and spaghetti sauce into the beef. Spread 1/4 cup of the beef<br>
    mixture in the ungreased square pan.<br>
    &#8226; Top with 2 noodles, placing them so they do not overlap or touch the sides of the pan<br>
    because they will expand as they bake. Spread about 1/2 cup of the remaining beef mixture<br>
    over the noodles.<br>
    &#8226; Spread about 1/2 cup of the cottage cheese over the beef mixture. Sprinkle with about<br>
    1/3 cup of the mozzarella cheese.<br>
    &#8226; Repeat layering twice more, beginning with 2 more noodles and <br>
    following directions in steps 3 and 4 Sprinkle with the parmesan cheese.<br>
    &#8226; Cover with aluminum foil and bake 30 minutes. Carefully remove the foil,<br>
    and continue baking about 10 minutes longer or until lasagna is bubbly around the edges <br>
    and looks very hot. Let stand 10 minutes, so the lasagna will become easier to cut and serve.<br>`
    },
    {
    id:3,
    image:'images/food_image4.jpeg',
    name:'Chicken Biryani',
    ingredients:`&#8226; 2 tbsp sunflower oil<br>
    &#8226; 1 large onion, chopped<br>
    &#8226; 4 chicken breasts<br>
    &#8226; 1 lemon, juice only<br>
    &#8226; 2 tsp garam masala<br>
    &#8226; 1 tsp chilli powder<br>
    &#8226; 2g (1 tsp) salt<br>
    &#8226; 300g (10oz) basmati rice<br>
    &#8226; 1 garlic clove, crushed<br>
    &#8226; 2.5cm piece fresh ginger, grated<br>
    &#8226; 850ml (1 1/2pints) hot chicken stock<br>
    &#8226; 3 tbsp chopped fresh coriander<br>`,
    method:`&#8226; Heat the oil in a large saucepan over a low heat. Add the onion,<br> 
    cover and cook for 10 minutes until softened.<br>
    &#8226; Cut the chicken into bite-size pieces, tip into a bowl, and add the lemon juice,<br>
    garam masala, chilli powder and salt. Stir well to coat.<br>
    &#8226; Rinse the rice several times in cold water, until the water runs clear. Add the garlic and<br>
    ginger to the onion and cook for 2 minutes, then add the chicken pieces and cook for a<br>
    further 2 minutes, stirring constantly.<br>
    &#8226; Add the rice and hot stock to the pan, stir well then bring to the boil. Cover with a<br>
    tight-fitting lid, reduce the heat slightly and cook for 5 minutes. Turn off the heat and <br>
    leave the pan for 10 minutes to allow the rice to finish cooking in the steam.<br>
    Do not remove the lid. Stir through the coriander and serve immediately.<br>`
    },
    {
    id:4,
    image:'images/food_image5.jpg',
    name:'Cookie',
    ingredients:`&#8226;2 cups flour<br>
    &#8226; 1⁄2 teaspoon baking soda<br>
    &#8226; 1⁄2 teaspoon salt<br>
    &#8226; 3⁄4 cup butter, melted<br>
    &#8226; 1 cup brown sugar,<br>
    &#8226; 1⁄2 cup sugar<br>
    &#8226; 1 tablespoon vanilla<br>
    &#8226; 1 egg yolk<br>
    &#8226; 1 cup chocolate chips<br>`,
    method:`&#8226; Preheat oven to 350.<br>
    &#8226; Sift flour, salt and baking soda together, set aside.<br>
    &#8226; Mix the melted butter and sugars together until thoroughly mixed. Add<br>
    egg yolk and vanilla and mix until creamy.<br>
    &#8226; Stir in dry ingredients and mix just until blended.<br>
    &#8226; Stir in chocolate chips.<br>
    &#8226; Drop dough by 1/4 cupfuls onto nonstick baking sheet, about 3 inches apart.<br>
    Bake 13-16 minutes. Let cool on cookie sheet for at least 5 minutes before removing <br>
    to rack to finish cooling.<br>`
    },
   ];

const leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');
const section = document.querySelector(".section");
const recipe = document.querySelector('.recipe-section');
let recipeBook =  document.querySelector('.recipe-book');
let recipeHeading = document.querySelector('.recipe-heading');
let newImage = document.querySelector('.food-images');
let addBtn = document.querySelector('.add');
let lookBtn = document.querySelector('.look');
let cartRecipes = document.querySelector('.cart-recipes');
const overlay = document.querySelector('.overlay');
const backBtn = document.querySelector('.back-btn');
const resText = document.querySelector('.response-text');
const resTexts = document.querySelector('.responses-text');




rightBtn.addEventListener('click', function(){
    console.log(rightBtn);
   
       let value  = recipe.dataset.id;
       if(value < 4){
      rightBtnAction(value);
    }else{
        rightBtnAction(-1);
    }
});

leftBtn.addEventListener('click', function(){
    let newValue = recipe.dataset.id;
    if(newValue > 0){
       leftBtnAction(newValue); 
    }else{
        leftBtnAction(5); 
    }
})

function rightBtnAction(value){
    console.log(value);
    value++;

    console.log(value);
    recipe.dataset.id = value;
    newImage.innerHTML =`<img src="${recipes[value].image}">`
    recipeHeading.innerHTML =`<h2>${recipes[value].name}</h2>`

    recipeBook.innerHTML =`<div class="ingredient-table">
    <h2>INGREDIENTS</h2>
<p>${recipes[value].ingredients}</p>
</div>
<div class="method-table">
   <h2>METHOD</h2>
   <p>${recipes[value].method}</p>
   </div>`;
};

function leftBtnAction(newValue){
    console.log(newValue);
    newValue--;

    console.log(newValue);
    recipe.dataset.id = newValue;
    newImage.innerHTML =`<img src="${recipes[newValue].image}">`
    recipeHeading.innerHTML =`<h2>${recipes[newValue].name}</h2>`

    recipeBook.innerHTML =`<div class="ingredient-table">
    <h2>INGREDIENTS</h2>
<p>${recipes[newValue].ingredients}</p>
</div>
<div class="method-table">
   <h2>METHOD</h2>
   <p>${recipes[newValue].method}</p>
   </div>`;
}


addBtn.addEventListener('click',function(){
     resText.innerHTML = `<p>Item added to the cart</p>`;
     setTimeout(()=>{
      resText.innerHTML='';
     },1000);
    let value = recipe.dataset.id;
    let newElement = document.createElement('div');
    newElement.classList.add('.recipe-item');
    newElement.innerHTML =`<div class="items">
    <div class="recipe-name">
    <p>&#8226; ${recipes[value].name} </p>
    </div>
    <button class="btn-trash">
    <i class='bx bxs-trash'></i>
    </button>
    </div>`
    cartRecipes.append(newElement);
    let trashBtn = document.querySelectorAll('.btn-trash');
    trashBtn.forEach(each => {
    each.addEventListener('click',function(){
        let elements = each.parentElement.parentElement;
        console.log(elements);
        elements.remove();
        resTexts.innerHTML = `<p>Item deleted from the cart</p>`;
     setTimeout(()=>{
      resTexts.innerHTML='';
     },1000);
    });
});
});

lookBtn.addEventListener('click',function(){
overlay.style.display ='block';
});

backBtn.addEventListener('click',function(){
    overlay.style.display = 'none';
})
