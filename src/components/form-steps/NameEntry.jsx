import useFormContext from "../../hooks/useFormContext";

import NavigationBar from "../NavigationBar";
import OrderBreakdown from "../OrderBreakdown";

function NameEntry() {
  const objectKey = "customerName";
  const storageKeys = { orders: "orders", currentOrder: "currentOrder" };

  const { data, setData } = useFormContext();
  const inputtedName = data[objectKey];

  return (
    <>
      <div className="mx-2 flex gap-4">
        <form
          className="flex min-h-124 grow flex-col flex-wrap items-center gap-4"
          onSubmit={(event) => {
            event.preventDefault();

            const {
              pancakeType: pancake,
              toppings: toppings,
              extras: extras,
              delivery: delivery,
            } = data;
            const totalPrice = [
              ...pancake,
              ...toppings,
              ...extras,
              ...delivery,
            ].reduce((total, selection) => total + selection.price, 0);

            const previousOrders = localStorage.getItem(storageKeys.orders);
            const orders = previousOrders ? JSON.parse(previousOrders) : {};
            const { step: step, ...currentOrder } = data;
            currentOrder.status = "Waiting";
            currentOrder.totalPrice = totalPrice;
            orders[Date.now()] = currentOrder;

            localStorage.setItem(storageKeys.orders, JSON.stringify(orders));

            setData({
              step: step + 1,
              id: null,
              status: null,
              customerName: "",
              pancakeType: [{ name: "Regular", price: 5 }],
              toppings: [],
              extras: [],
              delivery: [{ name: "Eat in", price: 0 }],
              totalPrice: null,
              address1: "",
              address2: "",
              postalCode: "",
              city: "",
            });

            localStorage.removeItem(storageKeys.currentOrder);
          }}
        >
          <h2 className="mb-4 text-2xl font-extralight uppercase">
            Almost done!
          </h2>
          <p>Just type in a name for us to identify your order by:</p>
          <label className="input input-lg">
            <span className="opacity-50">Name:</span>
            <input
              type="text"
              value={inputtedName}
              onChange={(event) => {
                setData((prevData) => ({
                  ...prevData,
                  [objectKey]: event.target.value,
                }));
              }}
            />
          </label>
          <button className="btn btn-lg font-light uppercase" type="submit">
            Confirm order
          </button>
        </form>
        <OrderBreakdown />
      </div>
      <NavigationBar />
    </>
  );
}

export default NameEntry;
