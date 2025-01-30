export default function Column({ columnName }) {
  return (
    <section className="bg-white border border-[#dfe1e7] p-8 rounded-xl flex flex-col items-center w-1/8">
      <div className="text-black font-bold text-xl">{columnName}</div>
      <div className="bg-black w-9/10 h-1 my-3"></div>
    </section>
  );
}
