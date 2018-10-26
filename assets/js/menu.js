

document.getElementById('menur').addEventListener('click',view_menu);





            function view_menu(){

            document.getElementById('menu_out_put').style.display = "block"
            document.getElementById('output').style.display = "none"

            fetch('https://api-fast-food-app.herokuapp.com/api/v2/menu', {
            method: 'GET',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json',
            
            'Access-Control-Allow-Origin': '*'
             }})
                .then((res) => res.json())
                .then(function(data){
                    // console.log(data)

                     let menu_out_put = "";

                     console.log(data.menu_list.length)

                    
                      for(i = 0; i < data.menu_list.length; i++){

                          menu_out_put += "<tr>"+
                        "<td>"+data.menu_list[i].item_id+"</td>"+

                         "<td>"+data.menu_list[i].item+"</td>"+
                         "<td>"+data.menu_list[i].price+"</td>"+
                          
                          "</tr>";
                    
                       }

                     document.getElementById('item_table').innerHTML = menu_out_put;

                    
                     });
                     
                     
               
            }