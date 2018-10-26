
document.getElementById('register').addEventListener('submit', signup); 

function signup(e){


     e.preventDefault()
     email = document.getElementById('email').value;
     password = document.getElementById('password').value;
     username = document.getElementById('user_name').value;
    
    console.log(email, password, username);

		
    fetch('https://api-fast-food-app.herokuapp.com/api/v2/auth/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json',
			'Access-Control-Allow-Origin': '*'
			
        },
        body: JSON.stringify({user_name: username, email: email, password: password})
    })
    .then((res) => res.json())
    .then((data) => {
		
			window.location.href = 'index.html';
		
		
		});
}
