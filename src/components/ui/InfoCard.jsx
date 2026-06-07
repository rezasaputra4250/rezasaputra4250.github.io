function InfoCard({ title, detail }) {
  return (
    <div className="rounded-2xl border border-[#e5dfd4] bg-white p-5">
      <h3 className="font-black text-[#172026]">{title}</h3>
      <p className="mt-2 leading-7 text-[#68727f]">{detail}</p>
    </div>
  )
}

export default InfoCard
