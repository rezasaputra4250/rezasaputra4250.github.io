function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-[#e5dfd4] bg-white p-4">
      <p className="text-2xl font-black text-[#0f766e]">{value}</p>
      <p className="mt-1 text-sm font-medium text-[#68727f]">{label}</p>
    </div>
  )
}

export default Stat
