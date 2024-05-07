type ButtonProps = {
  price: number;
};
export default function Button({ price }: ButtonProps) {
  return (
    <button className="bg-blue-500 text-white font-bold py-2 px-4 w-full text-center hover:bg-blue-700 rounded-md cursor-pointer">
      {price === 100 ? "Buy Now" : "Out Of Stock"}
    </button>
  );
}
