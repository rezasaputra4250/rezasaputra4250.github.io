function MiniInfo({ title, detail }) {
  return (
    <div className="rounded-2xl border border-[#d8e3f0] bg-white px-4 py-3 text-left shadow-sm shadow-[#0f2747]/5">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2563eb]">{title}</p>
      <p className="mt-1 text-sm font-bold text-[#102033]">{detail}</p>
    </div>
  )
}

export default MiniInfo
