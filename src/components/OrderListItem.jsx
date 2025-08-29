import useOrdersContext from "../hooks/useOrdersContext";

function OrderListItem({
  id,
  name,
  pancakeType,
  toppings,
  extras,
  delivery,
  total,
  status,
}) {
  const { setData } = useOrdersContext();

  const objectKey = "status";

  const statusStyle =
    status === "Waiting"
      ? "bg-amber-100 text-amber-800"
      : status === "Ready"
        ? "bg-sky-100 text-sky-800"
        : status === "Delivered"
          ? "bg-green-100 text-green-800"
          : "";

  const liStyle =
    status === "Waiting"
      ? "border-amber-200"
      : status === "Ready"
        ? "border-sky-200"
        : status === "Delivered"
          ? "border-green-200"
          : "border-base-200";

  const buttonStyle =
    status === "Waiting"
      ? "border-amber-600"
      : status === "Ready"
        ? "border-sky-600"
        : status === "Delivered"
          ? "border-green-600"
          : "border-base-600";

  return (
    <li
      className={`${statusStyle} ${liStyle} rounded-box flex flex-col gap-4 border-2 border-solid p-4 shadow-sm`}
    >
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap gap-2 text-2xl font-extralight">
          <span>#{id}</span>
          <span>{name ? name : "Anonymous"}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-extralight uppercase">
            {pancakeType.map((pancake) => pancake.name)}
          </span>
          {toppings.length > 0 ? (
            <span>
              Toppings: {toppings.map((topping) => topping.name).join(", ")}
            </span>
          ) : null}
          {extras.length > 0 ? (
            <span>Extras: {extras.map((extra) => extra.name).join(", ")}</span>
          ) : null}
          <span>{delivery.map((item) => item.name)}</span>
        </div>
        <div className="flex gap-4">
          <span>Total: {total}€</span>
          <span>Status: {status}</span>
        </div>
      </div>
      <div className="flex justify-center sm:justify-start">
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            className={`${statusStyle} ${buttonStyle} btn btn-sm font-light uppercase`}
            onClick={() =>
              setData((prevData) => ({
                ...prevData,
                [id]: {
                  ...prevData[id],
                  [objectKey]: "Waiting",
                },
              }))
            }
          >
            Set to "waiting"
          </button>
          <button
            className={`${statusStyle} ${buttonStyle} btn btn-sm font-light uppercase`}
            onClick={() =>
              setData((prevData) => ({
                ...prevData,
                [id]: {
                  ...prevData[id],
                  [objectKey]: "Ready",
                },
              }))
            }
          >
            Set to "ready"
          </button>
          <button
            className={`${statusStyle} ${buttonStyle} btn btn-sm font-light uppercase`}
            onClick={() =>
              setData((prevData) => ({
                ...prevData,
                [id]: {
                  ...prevData[id],
                  [objectKey]: "Delivered",
                },
              }))
            }
          >
            Set to "delivered"
          </button>
        </div>
      </div>
    </li>
  );
}

export default OrderListItem;
