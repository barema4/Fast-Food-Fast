"""
   Module for defining views
"""

from flask import jsonify, request
from flask.views import MethodView
from api.models.foodmodel import OrderList
import re

orders = OrderList()


class GetOrders(MethodView):
    """
       class for defining views

    """
    def get(self, order_id):
        """
           method for all get requests and single request
        """
        if order_id is None:
            return jsonify({'orders': orders.get_all_orders()}), 200

        else:

            return jsonify({'orders': orders.get_one_order(order_id)}), 200

    def post(self):
        """
           method to post all requests
        """
        keys = ("user_name", "item_name", "email", "quantity", "status")

        if not set(keys).issubset(set(request.json)):
            return jsonify({'Blank space': 'Your request has Empty feilds'}), 400

        if request.json['user_name'] == "":
            return jsonify({'user_name': 'enter user_name'}), 400

        if (' ' in request.json['user_name']) == True:
            return jsonify({'message': 'user_name should not contain any spaces'}), 400

        if request.json['item_name'] == "":
            return jsonify({'item_name': 'enter item_name'}), 400

        if (' ' in request.json['item_name']) == True:
            return jsonify({'message': 'item_name should not contain any spaces'}), 400

        if not isinstance(request.json['quantity'], int):
            return jsonify({'message': 'enter quantity as an interger'}), 400

        pattern = r"^[A-Za-z0-9\.\+_-]+@[A-Za-z0-9\._-]+\.[a-zA-Z]*$"
        if not re.match(pattern, request.json['email']):
            return jsonify({'email': 'Enter way of your email'}), 400
        if request.json['status'] == "":
            return jsonify({'status': 'please enter status'}), 400

        if not isinstance(request.json['status'], str):
            return jsonify({'message': 'enter status as an string'}), 400

        user_name = request.json['user_name']
        item_name = request.json['item_name']
        email = request.json['email']
        item_quantity = request.json['quantity']
        order_status = request.json['status']

        id = 'id'
        orders.add_order(user_name, item_name, email, item_quantity, order_status, id)
        response_object = {
            'orders': orders.__dict__
        }
        return jsonify(response_object), 201

    def put(self, order_id):
        
            return orders.update_order(order_id)
     
        