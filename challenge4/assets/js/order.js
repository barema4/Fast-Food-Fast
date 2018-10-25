


document.getElementById('place_order').addEventListener('submit', post_order);

function post_order(e){

                e.preventDefault()


                order_name = document.getElementById('order_name').value;
                price = document.getElementById('price').value;

     
                console.log(order_name, price);

        
            fetch('http://127.0.0.1:5000/api/v2/orders', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type':'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Access-Control-Allow-Origin': '*'
                    
                },
                body: JSON.stringify({order_name: order_name, price: price})
            })
            .then((res) => res.json())
            .then((data) => {

                let message = data.message;
                localStorage.setItem("accessToken", data.access_token)
                console.log(message);
                if(message == 'you have successfully posted an order'){

                    alert(message);

                    window.location = '';
                }
                else {

                    alert(message);
                    }
                    });
                }


