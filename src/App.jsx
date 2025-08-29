import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { FormProvider } from "./context/FormContext";
import { OrdersProvider } from "./context/OrdersContext";

import OrderForm from "./pages/OrderForm";
import ManageOrders from "./pages/ManageOrders";

function App() {
  return (
    <BrowserRouter basename="/pancake-order-app/">
      <Routes>
        <Route exact path="/" element={<Navigate to="/order" replace />} />
        <Route
          exact
          path="/order"
          element={
            <FormProvider>
              <OrderForm />
            </FormProvider>
          }
        />
        <Route
          path="/manage-orders"
          element={
            <OrdersProvider>
              <ManageOrders />
            </OrdersProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
