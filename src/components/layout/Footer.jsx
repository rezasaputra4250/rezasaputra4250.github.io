function Footer() {
  return (
    <footer className="border-t border-[#e5dfd4] py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm font-medium text-[#68727f] sm:flex-row sm:items-center sm:justify-between">
        <p>(c) {new Date().getFullYear()} Reza Saputra. All rights reserved.</p>
        <p>Dibuat dengan ReactJS dan TailwindCSS.</p>
      </div>
    </footer>
  )
}

export default Footer
