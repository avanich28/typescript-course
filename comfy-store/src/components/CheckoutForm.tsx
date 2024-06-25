import { ActionFunction, Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { ReduxStore } from "@/store";
import { toast } from "./ui/use-toast";
import { customFetch, formatAsDollars, type Checkout } from "@/utils";
import { clearCart } from "@/features/cart/cartSlice";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;

    if (!name || !address) {
      toast({ description: "Please fill out all fields" });
      return null;
    }

    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "Please login to place an order" });
      return redirect("/login");
    }

    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const result = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      console.log(result);

      store.dispatch(clearCart());
      toast({ description: "order placed" });
      return redirect("/orders");
    } catch (error) {
      toast({ description: "order failed" });
      return null;
    }
  };

function CheckoutForm() {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl mb-4">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />

      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </Form>
  );
}

export default CheckoutForm;
