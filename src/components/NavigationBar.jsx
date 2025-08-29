import useFormContext from "../hooks/useFormContext";

function NavigationBar() {
  const { data, setData } = useFormContext();

  const stepLabels = {
    0: "Pancake",
    1: "Toppings",
    2: "Extras",
    3: "Delivery",
    4: "Finish",
  };

  const {
    step: step,
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
    <div className="rounded-box border-base-200 mx-2 my-8 flex items-center gap-2 border-2 p-2 shadow-sm">
      <span className="text-xl font-extralight uppercase lg:hidden">
        {"Total: " + totalPrice + "€"}
      </span>
      <div className="ml-auto flex gap-2">
        {step > 0 ? (
          <button
            className="btn btn-lg font-light uppercase"
            onClick={() =>
              setData((prevData) => ({
                ...prevData,
                ["step"]: step - 1,
              }))
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1.25em"
              viewBox="0 -960 960 960"
              fill="currentColor"
            >
              <path d="M640-107.69 267.69-480 640-852.31l42.54 42.54L352.77-480l329.77 329.77L640-107.69Z" />
            </svg>
            <span className="hidden sm:inline">{stepLabels[step - 1]}</span>
          </button>
        ) : null}
        {step < Object.keys(stepLabels).length - 1 ? (
          <button
            className="btn btn-lg font-light uppercase"
            onClick={() =>
              setData((prevData) => ({
                ...prevData,
                ["step"]: step + 1,
              }))
            }
          >
            <span className="hidden sm:inline">{stepLabels[step + 1]}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1.25em"
              viewBox="0 -960 960 960"
              fill="currentColor"
            >
              <path d="m320.23-107.69-42.54-42.54L607.46-480 277.69-809.77l42.54-42.54L692.54-480 320.23-107.69Z" />
            </svg>
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default NavigationBar;
