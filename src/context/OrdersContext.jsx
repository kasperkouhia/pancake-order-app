import { createContext, useState, useEffect } from "react";

const OrdersContext = createContext({});

export function OrdersProvider({ children }) {
  const storageKey = "orders";

  const storedData = localStorage.getItem(storageKey);

  const [data, setData] = useState(storedData ? JSON.parse(storedData) : {});

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }, [data]);

  return <OrdersContext value={{ data, setData }}>{children}</OrdersContext>;
}

export default OrdersContext;
