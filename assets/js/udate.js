function accept(order_id){
	let update = document.getElementById('accept').value;
	
    fetch('http://127.0.0.1:5000/api/v2/order/<int:order_id>, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json',
			
			'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
			'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({user_action: update})
    })
    .then((res) => res.json())
    .then((data) => alert(updated))
		
}
