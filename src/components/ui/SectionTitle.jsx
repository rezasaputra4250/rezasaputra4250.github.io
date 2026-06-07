function SectionTitle({ eyebrow, title }) {
  return (
    <div className="text-left">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">{eyebrow}</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-[#102033] sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
