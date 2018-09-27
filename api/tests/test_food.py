"""
    Module for making tests
"""
import unittest
import json

from app import APP


class TestViews(unittest.TestCase):
    """"
        Class for making tests
        params: unittest.testCase
    """

    def setUp(self):
        """
           Method for making the client object
        """

        self.order = APP

        self.client = self.order.test_client

    def test_get_all_orders(self):
        """
        method to test get all orders from the list.
        """
        result = self.client().get('/api/v1/orders')
        response = json.loads(result.data.decode("utf8"))
        self.assertEqual(result.status_code, 200)
        self.assertIn('orders', response)
        self.assertIsInstance(response, dict)

    def test_get_one_order(self):
        result = self.client().get('api/v1/orders/2')
        self.assertEqual(result.status_code, 200)
        result1 = self.client().get('/api/v1/questions/ak/')
        self.assertEqual(result1.status_code, 404)

    def test_post_order_without_email(self):
        """
        testing for create order
        """
        result = self.client().post('api/v1/orders', content_type="application/json", data=json.dumps(
            dict(user_name="sam", item_name="matoke", email="", quantity=34, status="complete", id=2)))
        self.assertEqual(result.status_code, 400)
        self.assertTrue(result.json["email"])

    def test_post_order(self):
        result = self.client().post('api/v1/orders', content_type="application/json", data=json.dumps(
            dict(user_name="sam", item_name="matoke", email="sam@gmail.com", quantity=38, status="complete", id=5)))
        self.assertEqual(result.status_code, 201)
        resp = json.loads(result.data.decode())
        self.assertTrue(resp["orders"])

    def test_order_creation_with_empty_request(self):
        """ test order creation with empty request """
        order1 = {}
        res = self.client().post('/api/v1/users/', headers={'Content-Type': 'application/json'},
                                 data=json.dumps(order1))

        self.assertEqual(res.status_code, 404)

    def test_update_order(self):
        """
        method to test an update on a specific order.
        """
        results = self.client().put('/api/v1/orders/2', content_type='application/json',
                                    data=json.dumps({"status": "decline"}))
        self.assertEqual(results.status_code, 200)
        



