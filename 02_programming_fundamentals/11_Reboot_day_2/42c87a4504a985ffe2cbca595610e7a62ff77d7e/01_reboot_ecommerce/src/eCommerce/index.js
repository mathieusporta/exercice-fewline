const printElement = (action, index) => console.log(`${index + 1} ${action}`);
/////////////////////////////////////////////
function eCommerce(reader) {
    READER = reader;
  printMenu(["BuyAProduct", "ShowCart", "Checkout", "Quit"]);
  
    reader.question("🤖 Choose an action\n> ", (action) => {
      menu(action);
    });
  }
////////////////////////////////////////////
function printMenu(actionsList) {
    console.clear();
    console.log("**************************************************\n MENU \n**************************************************");
  actionsList.forEach(printElement);
}
function menu(action) {
    switch (action) {
      case "1":
        console.clear();
        BuyAProduct(READER);
        break;
      case "2":
        console.clear();
        ShowCart();
        break;
      case "3":
        console.clear();
        Checkout();
        break;
      case "4":
        console.clear ()
        Quit();
        READER.close();
        break;
      default:
        console.log("⚠️Cmd unknown⚠️");
        eCommerce(READER)
    }
}
/////////////////////////////////////////////
const printArticleElements = (articles, index) =>
      console.log(`${index + 1} ${articles.designation} : ${articles.price}€ (quantity: ${articles.quantity})`);
function BuyAProduct(){
    console.clear();
    console.log("**************************************************\n SHOP \n**************************************************");
    articles.forEach(printArticleElements);   
}

const articles = [
{
    designation : "beer",
    price : 4,
    quantity : 300,
},
{
    designation : "chips",
    price : 2,
    quantity : 25,
},
{
    designation : "cheese",
    price : 3,
    quantity : 50,
},
{
    designation : "olive",
    price : 1,
    quantity : 200,
},
{
    designation : "waterBottle",
    price : 0.5,
    quantity : 1000,
},
];
////////////////////////////////////////////////////////////
function ShowCart(){
    console.clear();
    console.log("**************************************************\n CART \n**************************************************");
};  
///////////////////////////////////////////////////////////
function Checkout(){
    console.clear();
    console.log("**************************************************\n CHECKOUT \n**************************************************");
};
////////////////////////////////////////////////////////////
module.exports = eCommerce