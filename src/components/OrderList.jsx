import useOrdersContext from "../hooks/useOrdersContext";

import OrderListItem from "./OrderListItem";

function OrderList() {
  const { data } = useOrdersContext();

  const list = [];
  for (const [id, obj] of Object.entries(data)) {
    list.push(
      <OrderListItem
        key={id}
        id={id}
        name={obj.customerName}
        pancakeType={obj.pancakeType}
        toppings={obj.toppings}
        extras={obj.extras}
        delivery={obj.delivery}
        total={obj.totalPrice}
        status={obj.status}
      />,
    );
  }

  return <ul className="mb-8 flex flex-col gap-4">{list}</ul>;
}

export default OrderList;
