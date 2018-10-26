


document.getElementById('place_order').addEventListener('submit', post_order);

function post_order(e){

                e.preventDefault()


                order_name = document.getElementById('order_name').value;
                price = document.getElementById('price').value;

        
            fetch('https://api-fast-food-app.herokuapp.com/api/v2/orders', {
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

                console.log(message);

                if(message == "success"){

                    alert("Order Successfully Added !");
                }


               
                    });
                }


