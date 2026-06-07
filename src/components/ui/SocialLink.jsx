function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 font-bold transition hover:border-[#93c5fd] hover:text-[#93c5fd]"
    >
      {icon}
      {label}
    </a>
  )
}

export default SocialLink
