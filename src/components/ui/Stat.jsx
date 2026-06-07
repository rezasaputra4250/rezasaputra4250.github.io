function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-[#d8e3f0] bg-white p-4 shadow-sm shadow-[#0f2747]/5">
      <p className="text-2xl font-black text-[#2563eb]">{value}</p>
      <p className="mt-1 text-sm font-medium text-[#5f6f85]">{label}</p>
    </div>
  )
}

export default Stat
