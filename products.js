//selecting side Navbar ,MenuIcon

var sidenav =document.getElementById("sidenav")
var menuicon =document.getElementById("menuicon")
var closenav =document.getElementById("closenav")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})

//Product Search Functionality

var productContainer =document.getElementById("product-container")
var Search =document.getElementById("search")
var productlist =productContainer.querySelectorAll("div")

Search.addEventListener("keyup",function(){

    var entervalue =event.target.value.toUppercase()

    for(count =0; count<productlist.length;count=count+1)
{
    var productname =productlist[count].querySelector("h1").textContent

    if(productname.toUpperCase().indexOf(enterdvalue)<0)
    {
        productlist[count].style.display="none"
    }
    else{
        productlist[count].style.display="block"
    }
}
})