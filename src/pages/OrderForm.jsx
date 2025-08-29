import useFormContext from "../hooks/useFormContext";

import Page from "../components/Page";

import PancakeTypeSelect from "../components/form-steps/PancakeTypeSelect";
import ToppingsSelect from "../components/form-steps/ToppingsSelect";
import ExtrasSelect from "../components/form-steps/ExtrasSelect";
import DeliveryMethodSelect from "../components/form-steps/DeliveryMethodSelect";
import NameEntry from "../components/form-steps/NameEntry";
import OrderConfirmed from "../components/form-steps/OrderConfirmed";

function OrderForm() {
  const { data } = useFormContext();
  const { step } = data;

  const formSteps = {
    0: { title: "Choose a pancake type", select: <PancakeTypeSelect /> },
    1: { title: "Choose your toppings", select: <ToppingsSelect /> },
    2: { title: "Choose extras", select: <ExtrasSelect /> },
    3: {
      title: "Choose delivery method",
      select: <DeliveryMethodSelect />,
    },
    4: { title: "Enter name", select: <NameEntry /> },
    5: { title: "Order confirmed", select: <OrderConfirmed /> },
  };

  const { title: currentTitle, select: currentSelect } = formSteps[step];

  return <Page title={currentTitle}>{currentSelect}</Page>;
}

export default OrderForm;
