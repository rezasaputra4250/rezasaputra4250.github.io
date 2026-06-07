function InfoCard({ title, detail }) {
  return (
    <div className="rounded-2xl border border-[#d8e3f0] bg-white p-5 shadow-sm shadow-[#0f2747]/5">
      <h3 className="font-black text-[#102033]">{title}</h3>
      <p className="mt-2 leading-7 text-[#5f6f85]">{detail}</p>
    </div>
  )
}

export default InfoCard
