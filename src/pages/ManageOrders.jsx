import Page from "../components/Page";

import OrderList from "../components/OrderList";

function ManageOrders() {
  return (
    <Page title="Manage orders">
      <div className="mx-2 min-h-124">
        <OrderList />
      </div>
    </Page>
  );
}

export default ManageOrders;
