document.getElementById('search').addEventListener('keyup' , search)
function search(e){

  document.getElementById('single').style.display = "block";

  let item = e.target.value;
  console.log(item);


    fetch(`http://127.0.0.1:5000/api/v2/orders/${item}`, {
            method: 'GET',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json',
            
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Origin': '*'
             }})
                .then((res) => res.json())
                .then(function(data){
                  console.log(data);

                    let single = "";

                    console.log(data.order_list.length);

                    
                     for(i = 0; i < data.order_list.length; i++){

                          single += "<tr>"+

                         "<td>"+data.order_list[i].order_date+"</td>"+
                         "<td>"+data.order_list[i].order_id+"</td>"+
                          "<td>"+data.order_list[i].order_name+"</td>"+
                          "<td>"+data.order_list[i].order_status+"</td>"+
                          "<td>"+data.order_list[i].price+"</td>"+
                          "<td>"+data.order_list[i].user_id+"</td>"+
                          "<td>"+data.order_list[i].user_name+"</td>"+
                          "</tr>";
                    
                      }

                     document.getElementById('orders_single').innerHTML = single;

                    
                     });

}