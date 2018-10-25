

// var btn_all=document.getElementById("all");
document.addEventListener("DOMContentLoaded", all_orders)
function all_orders(){

    
    fetch('http://127.0.0.1:5000/api/v2/orders', {

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
                          "</tr>";
                    
                      }

                     document.getElementById('orders_table').innerHTML = out_put;

                    
                     });

}
