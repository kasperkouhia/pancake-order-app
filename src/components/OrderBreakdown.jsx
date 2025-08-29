import useFormContext from "../hooks/useFormContext";

function PricedList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="flex justify-between">
          <span>{item.name}</span>
          <span>{item.price + "€"}</span>
        </li>
      ))}
    </ul>
  );
}

function OrderBreakdown() {
  const { data } = useFormContext();
  const {
    pancakeType: pancake,
    toppings: toppings,
    extras: extras,
    delivery: delivery,
  } = data;
  const totalPrice = [...pancake, ...toppings, ...extras, ...delivery].reduce(
    (total, selection) => total + selection.price,
    0,
  );

  return (
    <div className="relative hidden min-w-70 lg:block">
      <h2 className="mb-8 text-center text-2xl font-extralight uppercase">
        Current order
      </h2>
      <div>
        {pancake.length > 0 ? (
          <>
            <div className="divider uppercase">Pancake</div>
            <PricedList items={pancake} />
          </>
        ) : null}
        {toppings.length > 0 ? (
          <>
            <div className="divider uppercase">Toppings</div>
            <PricedList items={toppings} />
          </>
        ) : null}
        {extras.length > 0 ? (
          <>
            <div className="divider uppercase">Extras</div>
            <PricedList items={extras} />
          </>
        ) : null}
        {delivery.length > 0 && delivery.some((item) => item.price > 0) ? (
          <>
            <div className="divider"></div>
            <PricedList items={delivery} />
          </>
        ) : null}
        <span className="absolute right-0 bottom-0 text-2xl font-extralight uppercase">
          {"Total: " + totalPrice + "€"}
        </span>
      </div>
    </div>
  );
}

export default OrderBreakdown;
