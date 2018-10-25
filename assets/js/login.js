document.getElementById('login').addEventListener('submit', login_form); 

function login_form(e){


     e.preventDefault()
     email = document.getElementById('email').value;
     password = document.getElementById('password').value;
     
    console.log(email, password);

		
    fetch('http://127.0.0.1:5000/api/v2/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json',
			'Access-Control-Allow-Origin': '*'
			
        },
        body: JSON.stringify({email: email, password: password})
    })
    .then((res) => res.json())
    .then((data) => {
		let message = data.message;
		localStorage.setItem("accessToken", data.access_token)
		let userType = data.userType[4];

		if(userType == "true"){
			window.location.href ="admin_home.html";

		}else if(userType == "FALSE"){
			window.location.href ="Order_history.html";

		}
		
		});
}