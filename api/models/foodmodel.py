from flask import request


class OrderList:
    def __init__(self):
        self.orders = []

    def get_all_orders(self):
        return self.orders

    def add_order(self, user_name, item_name, email, quantity, status, order_id):
        xl = [order for order in self.orders]

        id = len(xl) + 1

        order = {
            'User_name': user_name, 'item_name': item_name,
            'email': email, 'item_quantity': quantity, 'status': status,
            'id': id
        }
        self.orders.append(order)
        return self.orders

    def get_one_order(self, order_id):

        for order in self.orders:
            if order_id == order['id']:
                return order
        return ({'order': 'order_item doesnot exist'})

    def update_order(self, order_id):
        if order_id:
            for order in self.orders:
                if order_id == order['id']:
                    item_json = request.get_json()
                    status = item_json['status']
                    order['status'] = status

                    return order
        else:
            return "order item not found"

