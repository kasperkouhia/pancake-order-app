import useFormContext from "../hooks/useFormContext";

function CardSelect({ objectKey, selections, single = false }) {
  const { data, setData } = useFormContext();
  const selected = data[objectKey];

  return (
    <form className="flex min-h-124 grow flex-wrap items-center justify-center gap-2 self-center">
      {selections.map((selection, index) => (
        <div key={index}>
          <label>
            <input
              className="peer sr-only"
              type={single ? "radio" : "checkbox"}
              name={single ? "selection" : undefined}
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
            <div className="card card-border peer-checked:border-accent peer-checked:bg-accent peer-checked:text-accent-content flex w-70 flex-col shadow-sm hover:cursor-pointer">
              <figure>
                <img loading="lazy" src={selection.img} alt={selection.alt} />
              </figure>
              <div className="card-body flex-row justify-between text-xl font-extralight uppercase">
                <span>{selection.name}</span>
                <span>{selection.price + "€"}</span>
              </div>
            </div>
          </label>
        </div>
      ))}
    </form>
  );
}

export default CardSelect;
