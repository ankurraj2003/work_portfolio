export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm font-mono">
          &copy; {new Date().getFullYear()} Ankur Raj. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
