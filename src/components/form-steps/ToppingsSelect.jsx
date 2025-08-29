import CardSelect from "../CardSelect";
import NavigationBar from "../NavigationBar";
import OrderBreakdown from "../OrderBreakdown";

function ToppingsSelect() {
  const selections = [
    {
      name: "Strawberries",
      alt: "An assortment of strawberries",
      price: 1,
      img: "toppings-strawberries.jpg",
    },
    {
      name: "Blueberries",
      alt: "An assortment of blueberries",
      price: 1,
      img: "toppings-blueberries.jpg",
    },
    {
      name: "Kiwi",
      alt: "An assortment of kiwifruits",
      price: 1,
      img: "toppings-kiwi.jpg",
    },
  ];

  return (
    <>
      <div className="mx-2 flex gap-4">
        <CardSelect objectKey="toppings" selections={selections} />
        <OrderBreakdown />
      </div>
      <NavigationBar />
    </>
  );
}

export default ToppingsSelect;
