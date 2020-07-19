const database = [
  {
    name: "Mashed Potatoes",
    picture: "https://assets.bonappetit.com/photos/5bc10058c5a9942d085870e1/1:1/w_1600%2Cc_limit/make-ahead-mashed-potatoes.jpg",
    link: "",
    ingredients: ["potato","butter"]
  },
  {
    name: "Apple Strudel",
    picture:"https://www.elephantasticvegan.com/wp-content/uploads/2014/09/P1182395.jpg",
    ingredients: ["apple","cinnamon","dough"]
  },
  {
    name: "Avacado Toast",
    picture: "https://itdoesnttastelikechicken.com/wp-content/uploads/2017/01/avocado-toast-2.jpg",
    link: "https://www.veggieinspired.com/favorite-avocado-toast",
    ingredients: ["avacado","hemp heart","bread","radish"]
  },
  {
    name: "Black Bean Salsa Burger",
    picture: "https://itdoesnttastelikechicken.com/wp-content/uploads/2017/01/Black-Bean-Salsa-Burgers-Redo-9.jpg",
    link: "https://www.veggieinspired.com/black-bean-salsa-burgers/",
    ingredients: ["bean","oat","flour","bread","salsa"]
  },
  {
    name: "Crispy turnip and bean balls",
    picture: "https://4.bp.blogspot.com/-04BwGfrkp0c/VPSDNNI3q6I/AAAAAAAAPAY/QNZ8oFJwih4/s1600/Crispy%2Bturnip%2Band%2Bbean%2Bballs.jpg",
    link: "http://www.vegansandra.com/2015/03/crispy-turnip-and-bean-balls.html",
    ingredients: ["turnip","bean","flour","onion"]
  },
  {
    name: "Curried Noodle Patties",
    picture: "https://images.101cookbooks.com/currynoodlepatty.jpg?w=680&auto=format",
    link: "https://www.101cookbooks.com/archives/001552.html",
    ingredients: ["curry","noodle","egg","tofu","oil"]
  },
  {
    name: "Teriyaki Tofu",
    picture: "https://www.thelazybroccoli.com/wp-content/uploads/2016/10/teriyaki-tofu-v4-lc.jpg",
    link: "https://www.thelazybroccoli.com/easiest-vegan-teriyaki-tofu/",
    ingredients: ["tofu","soy sauce","brown rice syrup","oil"]
  },
  
  {
    name: "Vegan avocado banana chocolate pudding",
    picture: "https://itdoesnttastelikechicken.com/wp-content/uploads/2017/01/pudding-tray1.jpg",
    link: "http://www1.apolloandluna.com/?tm=1&subid4=1595113168.0011764862&kw=Recipes&KW1=Recipe%20and%20Meal%20Planning%20Systems&KW2=Recipes%20and%20Ingredients%20Meal%20Kits&KW3=Easy%20to%20Follow%20Online%20Cooking%20Classes&searchbox=0&domainname=0&backfill=0",
    ingredients: ["avocado","banana","chocolate"]
  },
  {
    name: "Vegan chocolate fudge cookies",
    picture: "https://itdoesnttastelikechicken.com/wp-content/uploads/2017/01/grain-free-chocolate-fudge-cookies.jpg",
    link: "https://theprettybee.com/grain-free-vegan-chocolate-fudge-cookies/",
    ingredients: ["dough","chocolate","banana","peanut butter"]
  },
  {
    name: "Apple Nachos",
    picture: "https://itdoesnttastelikechicken.com/wp-content/uploads/2017/01/Apple-nachos-chocolate-peanut-butter-3.jpg",
    link: "",
    ingredients: ["apple","peanut butter","chocolate"]
  },
  {
    name: "Grilled Sweet Curry Corn",
    picture: "https://itdoesnttastelikechicken.com/wp-content/uploads/2017/01/Sweet-Curry-Corn-680-2.jpg",
    ingredients: ["corn","curry"]
  },
  {
    name: "Crispy Kumara Cakes",
    picture: "https://itdoesnttastelikechicken.com/wp-content/uploads/2017/01/crispy-kumara-cakes3.jpg",
    link: "https://quitegoodfood.co.nz/crispy-kumara-cakes/",
    ingredients: ["potato","flour","oil"]
  },
  {
    name: "Cucumber salad",
    picture: "https://itdoesnttastelikechicken.com/wp-content/uploads/2017/01/cucumber-salad-v1-lc.jpg",
    link: "https://www.thelazybroccoli.com/cucumber-salad-sesame-soy-dressing/",
    ingredients: ["cucumber","soy sauce","sesame seeds"]
  },
  {
    name: "",
    picture: "",
    ingredients: []
  },
  {
    name: "",
    picture: "",
    ingredients: []
  }
]

var sortedArray = [];

function sortRecipes(){
  var ingredient = event.target.id;
  var isSelected = event.target.checked;
  if (isSelected){
    for(var index in database){
      for(var v in database[index].ingredients){
        if (database[index].ingredients[v]==ingredient&&!sortedArray.includes(database[index])){
          sortedArray.push(database[index])
          break;
        }
      }
    }
  }else{
    for(var i =0; i<sortedArray.length;i++){
      if(sortedArray[i].ingredients.includes(ingredient)){
        sortedArray.splice(i,1);
        i--;
      }
    }
    console.log(sortedArray)
  }
  var htmlsection = document.querySelector("#recipes ul")
  htmlsection.innerHTML = "";
  for (var i in sortedArray){
    htmlsection.innerHTML += "<li class='single-recipe'><h2>" + sortedArray[i].name+"</h2><img class='foodpicture'src='"+sortedArray[i].picture+"'/><a target='_blank' href='"+sortedArray[i].link+"'>Link to recipe</a></li>";
  }
  if (htmlsection.innerHTML=="") htmlsection.innerHTML = "<div>Couldn't find any recipes. Check some ingredients to find them</div>"
}