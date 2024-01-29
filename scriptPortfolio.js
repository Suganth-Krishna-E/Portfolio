let v=document.getElementById("portfolioStructure");
console.log(v);

v.addEventListener("click",callChangeFunction);


function callChangeFunction(){
    console.log("The value is clicked");
    document.getElementById("portfolioStructure").innerHTML = "This element is clicked and changed through javascript";
}
