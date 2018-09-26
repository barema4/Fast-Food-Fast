# Fast-Food-Fast

[![Build Status](https://travis-ci.org/barema4/Fast-Food-Fast.svg?branch=develop)](https://travis-ci.org/barema4/Fast-Food-Fast)


[![Coverage Status](https://coveralls.io/repos/github/barema4/Fast-Food-Fast/badge.svg?branch=develop)](https://coveralls.io/github/barema4/Fast-Food-Fast?branch=develop)


[![Maintainability](https://api.codeclimate.com/v1/badges/b92d196622e222fefee7/maintainability)](https://codeclimate.com/github/barema4/Fast-Food-Fast/maintainability)



Order food quickly


Fast-Food-Fast is a food delivery service app for a restaurant.


LOGIN DETAILS FOR BOTH ADMIN AND USER FOR USER INTERFACE
    
    FOR ADMIN:
    user_name: admin
    Password:  admin

    FOR USER:
    User_name:  user
    Password:   user



   FAST-FOOD-FAST FEATURES FOR USER INTERFACE TEMPERATE

1.Users can create an account and log in

2.A user should be able to order for food

3.The admin should be able to add,edit or delete the fast-food items

4.The admin should be able to see a list of fast-food items

5.The Admin user should be able to do the following:
    See a list of orders
    Accept and decline orders
    Mark orders as completed

6.A user should be able to see a history of ordered food

FAST-FOOD-FAST app has got backend develop of api endpoints that consists of four features
 * get all orders
 * fetch a specfic order
 * Post and order
 * Update the status of the order
 
 Prerequisites for FAST-FOOD-FAST api endpoints

 * vscode
 * python
 * Virtual environment
 * flask frame work
 * pytest--cov
 * pylint
 * pytest
 * Postman
 * gunicorn
 * coveralls
 * coverage
 
 
 Installation of prerequisites

 * download and install vscode
 * download and install python(3.6.5)
 * download and virtual environment
 * use pip to install flask in the terminal
 * use pip to install pytest in the terminal
 * use pip to install pytest--cov inthe terminal
 * use pip to install pylint in the terminal
 * use pip to install coverage in the terminal
 * use pip to install coveralls
 
 Api endpoints and their Routes
 

 Verb            End Point                                             Use                                     

  GET         /api/v1/orders                                 Gets a list of all orders                
  GET        /api/v1/orders/<int:order_id>                   Fetch a specific order                   
  POST      /api/v1/orders                                   Posting an order                         
  PUT      /api/v1/orders/<int: order_id>                    update status of a specfic order         

Deployment

The system is deployed on github which is integrated with TravisCl for continuous integration 
then integrated with coverall.io to show the percentage of code that is tested the integrated 
with code climate for maintainability and finally hosted on heroku in order for the user(Developer) to use.

Versioning

 * I use git hub for versioning.

 Authors

*RUBAREMA SAM* -(https://github.com/barema4)

 Acknowledgments

* Thanks to Andela



 


