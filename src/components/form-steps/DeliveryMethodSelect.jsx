import useFormContext from "../../hooks/useFormContext";

import NavigationBar from "../NavigationBar";
import OrderBreakdown from "../OrderBreakdown";

function DeliveryMethodSelect() {
  const selections = [
    {
      name: "Eat in",
      price: 0,
      description: "Eat your meal at the restaurant",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8em"
          height="8em"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path d="M306-106v-360q-45-5-76.5-38.5T198-588v-266h28v266h80v-266h28v266h80v-266h28v266q0 50-31.5 83.5T334-466v360h-28Zm360 0v-320h-92v-254q0-62 31.5-111.5T694-852v746h-28Z" />
        </svg>
      ),
    },
    {
      name: "Pick up",
      price: 0,
      description: "Pick up your meal from the restaurant",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8em"
          height="8em"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path d="M92-442v-22h76q0-135 87-227t214-96v-41h22v41q127 4 214.5 96T792-464h76v22H92Zm97-22h582q0-129-85-215.5T479.5-766Q359-766 274-679.5T189-464Zm442 22H305v248h236q21 0 41.21-6.91 20.2-6.9 36.55-20.71L787-365q-13-14-29.5-21.5T724-396q-16.35 0-31.67 4.5-15.33 4.5-29.44 15.61L604-329H434v-22h162l54-43q7-7 9-15.5t-2-17.5q-4-8-11-11.5t-15-3.5Zm-348-1h-97q-14 0-23 9.5t-9 22.5v225q0 14 9 23t23 9h65q14 0 23-9t9-23v-257Zm-32 312h-65q-22.77 0-38.39-15.61Q132-162.23 132-185v-225q0-22.77 15.61-38.39Q163.23-464 186-464h444q49 0 92 22.5t80 58.5l19 18-188 161q-18.84 15-43.37 24-24.54 9-48.63 9H304q-5 18-19.36 29T251-131Zm229-333Z" />
        </svg>
      ),
    },
    {
      name: "Delivery",
      price: 5,
      description: "Have your meal delivered to you (for an additional 5€)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8em"
          height="8em"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path d="M290.12-252q-39.12 0-66.62-27.42Q196-306.83 196-346h-80v-94q0-56 39-95t95-39h134v200h178l154-190v-100q0-14-9-23t-23-9h-88v-28h88q24.75 0 42.38 17.62Q744-688.75 744-664v108L578-346H384q0 39-27.38 66.5t-66.5 27.5ZM356-374Zm-66 94q27 0 46.5-19.5T356-346H224q0 27 19.5 46.5T290-280Zm-54-376v-28h148v28H236Zm514.12 404q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Zm-.12-28q27 0 46.5-19.5T816-346q0-27-19.5-46.5T750-412q-27 0-46.5 19.5T684-346q0 27 19.5 46.5T750-280Zm-606-94h212v-172H249.81Q206-546 175-514.86q-31 31.13-31 74.86v66Z" />
        </svg>
      ),
    },
  ];

  const objectKey = "delivery";

  const { data, setData } = useFormContext();
  const selected = data[objectKey];

  return (
    <>
      <div className="mx-2 flex gap-4">
        <form className="flex min-h-124 grow flex-wrap items-center justify-center gap-2">
          {selections.map((selection, index) => (
            <div key={index}>
              <label>
                <input
                  className="peer sr-only"
                  type="radio"
                  name="selection"
                  data-name={selection.name}
                  data-price={selection.price}
                  checked={
                    selected.length > 0
                      ? selected.some(
                          (alreadySelected) =>
                            alreadySelected.name === selection.name,
                        )
                      : false
                  }
                  onChange={(event) => {
                    const form = event.target.form;

                    const currentlySelected = [
                      ...form.querySelectorAll("input:checked"),
                    ].map((input) => ({
                      name: input.dataset.name,
                      price: parseInt(input.dataset.price),
                    }));

                    setData((prevData) => ({
                      ...prevData,
                      [objectKey]: currentlySelected,
                    }));
                  }}
                />
                <div className="card card-border peer-checked:border-accent peer-checked:bg-accent peer-checked:text-accent-content flex size-70 flex-col items-center justify-center gap-2 p-2 shadow-sm hover:cursor-pointer">
                  {selection.icon}
                  <span className="text-xl font-extralight uppercase">
                    {selection.name}
                  </span>
                  <span className="min-h-[2lh] text-center">
                    {selection.description}
                  </span>
                </div>
              </label>
            </div>
          ))}
        </form>
        <OrderBreakdown />
      </div>
      <NavigationBar />
    </>
  );
}

export default DeliveryMethodSelect;
