import useFormContext from "../../hooks/useFormContext";

function OrderConfirmed() {
  const { setData } = useFormContext();

  return (
    <div className="mx-2 min-h-124">
      <p className="mb-8">Your order has been confirmed!</p>
      <button
        className="btn flex items-center font-light uppercase"
        type="button"
        onClick={() =>
          setData((prevData) => ({
            ...prevData,
            ["step"]: 0,
          }))
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path d="M456.08-267.92 243.77-480.23l212.31-212.31 22 21.23L287-480.23l191.08 190.31-22 22Zm239.15 0L482.92-480.23l212.31-212.31 21.23 21.23-190.31 191.08 190.31 190.31-21.23 22Z" />
        </svg>
        <span>Return to beginning</span>
      </button>
    </div>
  );
}

export default OrderConfirmed;
