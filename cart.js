var container=document.querySelector("#cart");
        container.innerHTML="";  

var cart = JSON.parse(localStorage.getItem("cart"))
var total = 0;
function showcart(){
    container.innerHTML ="";
    total = 0;
    cart.map(function(elem,index){
        // tbody = "";
         
        let div = document.createElement("div");
        
        let image = document.createElement("img");
        image.src = elem.strMealThumb;
        let td1 = document.createElement("div");
        td1.innerText = elem.strMeal;
    
        let td2 = document.createElement("div");
        td2.innerHTML = elem.price;
        total = total + Number(elem.price);
        let td3 = document.createElement("div");
        td3.innerText = "Delete";
        td3.addEventListener("click",function(){
            cart.splice(index,1);
            
            localStorage.setItem("cart",JSON.stringify(cart))
            showcart();
            total=total-Number(elem.price);
            showTotal(total);
        })
        div.append(image,td1,td2,td3);
        container.append(div);
    })
}



showcart()
console.log(total);
function deleteProduct(index){
    console.log(index)
}

function showTotal(){
    total = 0;
    let sum = document.querySelector("#total");
    var cart = JSON.parse(localStorage.getItem("cart"));
    for(i=0;i<cart.length;i++){
        total = total + Number(cart[i].price);
    }
    
    sum.innerText = `Total : ${total}`
}
showTotal(total);

