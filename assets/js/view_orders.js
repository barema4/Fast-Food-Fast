

// var btn_all=document.getElementById("all");
document.addEventListener("DOMContentLoaded", all_orders)
function all_orders(){

    
    fetch('https://api-fast-food-app.herokuapp.com/api/v2/orders', {

            method: 'GET',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json',
            
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Origin': '*'
             }})
                .then((res) => res.json())
                .then(function(data){

                    let out_put = "";

                    console.log(data.order_list.length);

                    
                     for(i = 0; i < data.order_list.length; i++){

                          out_put += "<tr>"+

                         "<td>"+data.order_list[i].order_date+"</td>"+
                         "<td>"+data.order_list[i].order_id+"</td>"+
                          "<td>"+data.order_list[i].order_name+"</td>"+
                          "<td>"+data.order_list[i].order_status+"</td>"+
                          "<td>"+data.order_list[i].price+"</td>"+
                          "<td>"+data.order_list[i].user_id+"</td>"+
                          "<td>"+data.order_list[i].user_name+"</td>"+
                          "<td>"+"<button onclick='update_status("+data.order_list[i].order_id+")'>Update Status</button>"+"</td>"+
                          "</tr>";
                    
                      }

                     document.getElementById('orders_table').innerHTML = out_put;

                    
                     });

}

function update_status(order_id){

  orderStatus = document.getElementById("status").value;


  let orderID = order_id;

    fetch('https://api-fast-food-app.herokuapp.com/api/v2/order', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type':'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Access-Control-Allow-Origin': '*'
                    
                },
                body: JSON.stringify({order_id: orderID, order_status:orderStatus})
            })
            .then((res) => res.json())
            .then((data) => {
               
                let message = data.message;

                console.log(data);

                if(message == "success"){

                    alert("Order Successfully Updated !");
                }


               
                    });





}
