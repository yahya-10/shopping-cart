//like button colors

function changeColor(x){
    myId = "like" + x;
    document.getElementById(myId).innerHTML = '<button id="'+myId+'" onclick="changeColor("'+x+'")"><i class="fa fa-heart" style="color:red;"></i></button>';
}

//quantity counter

var allButtonsOnPage = Array.from(document.querySelectorAll('.plus-btn'));
for (let btn of allButtonsOnPage){
    btn.addEventListener('click', function() {
        btn.nextElementSibling.value ++
    }); 
}

var allButtonsOnPage1 = Array.from(document.querySelectorAll('.minus-btn'));
for (let btn of allButtonsOnPage1){
      btn.addEventListener('click', function() {
          if(btn.previousElementSibling.value > 0){
           btn.previousElementSibling.value --}
        }); 
    }

//add and remove items 

 function addItem(x){
     brandId = "brand" + x;
     quantityId = "number" + x;
     priceId = "price" + x;
    var ul = document.getElementById("items");
    brand = document.getElementById(brandId).innerHTML;
    quantity = document.getElementById(quantityId).value;
    price = document.getElementById(priceId).innerHTML;
    var li = document.createElement("li");
    li.setAttribute('id' ,candidate.value);
    li.appendChild(document.createTextNode(brand+ " " + quantity + " "+ " $" +price ));
    ul.appendChild(li);
    ul.addEventListener('dblclick' , function(){
        ul.removeChild(li)
     })

   sum()
}


//total
    
function sum(){
    let qte= Array.from(document.getElementsByClassName('qte'))
    let price= Array.from(document.getElementsByClassName('prix'))
    let somme=0
    for(let i=0; i<price.length; i++){
        somme += price[i].innerHTML*qte[i].value
    }
    return document.getElementById('total').innerHTML= " $" + somme ;
}




