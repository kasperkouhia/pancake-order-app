import { useContext } from "react";
import OrdersContext from "../context/OrdersContext";

function useOrdersContext() {
  return useContext(OrdersContext);
}

export default useOrdersContext;
