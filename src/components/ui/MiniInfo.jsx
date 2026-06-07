function MiniInfo({ title, detail }) {
  return (
    <div className="rounded-2xl border border-[#e5dfd4] bg-white px-4 py-3 text-left">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f766e]">{title}</p>
      <p className="mt-1 text-sm font-bold text-[#172026]">{detail}</p>
    </div>
  )
}

export default MiniInfo
