function editFood(){
    alert("Edit this food_item");

}
function deleteFood(){
    alert("Deleted a food item");
  }
  function acceptOrder(){
    alert("complete Order");

}
function declineOrder(){
    alert("Order declined");
  }


function Authent(){
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    if(username==='user' && password ==="user"){
       window.location.href ="home.html";
    }

    else if(username==='admin' && password ==="admin"){
      var username = document.querySelector("#username").value;
      var password = document.querySelector("#password").value;
      window.location.href ="admin_home.html";
  
    }

    else{

         }
  }
  