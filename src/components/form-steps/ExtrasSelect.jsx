import CardSelect from "../CardSelect";
import NavigationBar from "../NavigationBar";
import OrderBreakdown from "../OrderBreakdown";

function ExtrasSelect() {
  const selections = [
    {
      name: "Syrup",
      alt: "Syrup being drizzled down onto a stack of pancakes",
      price: 1,
      img: "extras-syrup.jpg",
    },
    {
      name: "Whipped cream",
      alt: "A bowl of whipped cream",
      price: 2,
      img: "extras-whipped-cream.jpg",
    },
  ];

  return (
    <>
      <div className="mx-2 flex gap-4">
        <CardSelect objectKey="extras" selections={selections} />
        <OrderBreakdown />
      </div>
      <NavigationBar />
    </>
  );
}

export default ExtrasSelect;
