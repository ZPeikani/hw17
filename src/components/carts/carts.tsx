import { products } from "../../data/data";
import { Cart } from "../cart/cart";

export default function Carts() {
  return (
    <div>
      <p className="text-2xl font-bold p-4">Product List</p>
      <div className="flex justify-center items-center p-7">
        <div className="grid grid-cols-4 gap-4">
          {products.map((items) => {
            return (
              <div key={items.id}>
                <Cart car={items} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
