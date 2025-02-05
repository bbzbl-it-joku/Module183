'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-foreground/10 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-foreground/60">
            <p>© {currentYear} Joshua Kunz & Seth Schmutz.</p>
            <p> All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 