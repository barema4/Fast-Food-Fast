from views import GetOrders
class GetUrls:
    @staticmethod
    def fetch_urls(app):
        order_list_view = GetOrders.as_view('order_list')
        app.add_url_rule('/api/v1/orders', view_func=order_list_view, defaults={'order_id': None}, methods=['GET',])
        app.add_url_rule('/api/v1/orders', view_func=order_list_view, methods=['POST',])
        app.add_url_rule('/api/v1/orders/<int:order_id>', view_func=order_list_view, methods=['GET',])
        app.add_url_rule('/api/v1/orders/<int:order_id>',view_func=order_list_view,methods=['PUT',])
