import CardSelect from "../CardSelect";
import NavigationBar from "../NavigationBar";
import OrderBreakdown from "../OrderBreakdown";

function PancakeTypeSelect() {
  const selections = [
    {
      name: "Regular",
      alt: "Some pancakes",
      price: 5,
      img: "pancakes-regular.jpg",
    },
    {
      name: "Chocolate",
      alt: "Some chocolate pancakes",
      price: 6,
      img: "pancakes-chocolate.jpg",
    },
    {
      name: "Banana",
      alt: "Some banana pancakes",
      price: 6,
      img: "pancakes-banana.jpg",
    },
    {
      name: "Matcha",
      alt: "Some matcha pancakes",
      price: 7,
      img: "pancakes-matcha.jpg",
    },
  ];

  return (
    <>
      <div className="mx-2 flex gap-4">
        <CardSelect objectKey="pancakeType" selections={selections} single />
        <OrderBreakdown />
      </div>
      <NavigationBar />
    </>
  );
}

export default PancakeTypeSelect;
