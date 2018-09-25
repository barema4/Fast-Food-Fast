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

    if(username=="" && password=="")
    {
      document.getElementById("message").innerHTML = "Please Enter All Fields !";

    }else if(password == ""){

      document.getElementById("message").innerHTML = "Please Enter The Password !";

    }else if(username ==""){

       document.getElementById("message").innerHTML = "Please Enter The Username !";

    }else{


      if(username==='user' && password ==="user"){
       window.location.href ="home.html";
    }

    else if(username==='admin' && password ==="admin"){
      var username = document.querySelector("#username").value;
      var password = document.querySelector("#password").value;
      window.location.href ="admin_home.html";
  
    }else{

      document.getElementById("message").innerHTML = "Username or Password Incorrect! ";


    }





    }


  }

