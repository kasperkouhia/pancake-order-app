import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export function FormProvider({ children }) {
  const storageKey = "currentOrder";

  const storedData = localStorage.getItem(storageKey);

  const [data, setData] = useState(
    storedData
      ? JSON.parse(storedData)
      : {
          step: 0,
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
        },
  );

  useEffect(() => {
    if (data.step < 5) localStorage.setItem(storageKey, JSON.stringify(data));
  }, [data]);

  return <FormContext value={{ data, setData }}>{children}</FormContext>;
}

export default FormContext;
