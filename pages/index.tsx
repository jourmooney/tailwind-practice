import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid gap-10 bg-slate-400 py-20 px-10">
      <div className="rounded-3xl bg-white p-6 shadow-lg">
        <span className="text-3xl font-semibold">Select Item</span>
        <div className="my-2 flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$170</span>
        </div>
        <div className="my-2 flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$800</span>
        </div>
        <div className="pd-2 mt-2 flex justify-between border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$970</span>
        </div>
        <div className="mt-5 rounded-xl bg-blue-500 p-4 text-center text-white w-2/4 mx-auto">
          Checkout
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-lg"></div>
      <div className="rounded-2xl bg-white p-10 shadow-lg"></div>
      <div className="rounded-2xl bg-white p-10 shadow-lg"></div>
    </div>
  );
};

export default Home;
