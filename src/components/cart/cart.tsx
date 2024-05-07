import Button from "../buttons/button";

type CardProp = {
  car: { id: number; img: string; name: string; price: number; dec: string };
};
export function Cart({ car }: CardProp) {
  return (
    <div className="flex justify-around flex-col p-4 shadow-xl h-[389px]">
      <img
        src={car.img}
        alt="car-image"
        className="rounded-md w-[293px] h-[165px]"
      />
      <p className="text-xl font-bold">{car.name}</p>
      <p className="text-lg">{`$ ${car.price} Millions`}</p>
      <p className="text-gray-500">{car.dec}</p>
      <Button price={car.price} />
    </div>
  );
}
