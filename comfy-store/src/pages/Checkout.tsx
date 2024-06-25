import { LoaderFunction, redirect } from "react-router-dom";
import { ReduxStore } from "@/store";
import { useAppSelector } from "@/hooks";
import { toast } from "@/components/ui/use-toast";
import { CartTotals, SectionTitle, CheckoutForm } from "@/components";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<Response | null> => {
    const user = store.getState().userState.user;

    // console.log("loader"); // executes before component

    if (!user) {
      toast({ description: "Please login to continue" });
      return redirect("/login");
    }

    return null;
  };

function Checkout() {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);

  // console.log("checkout");

  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}

export default Checkout;
