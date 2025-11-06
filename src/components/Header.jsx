import { Moon, Sun } from 'lucide-react'

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="fixed inset-x-0 top-0 bg-white/95 dark:bg-gray-900/80 backdrop-blur z-30 border-b">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            V
          </div>
          <span className="font-semibold">Victor Oliveira Alves</span>
        </div>

        <nav className="flex items-center gap-4">
          <a href="#hero" className="hover:text-blue-600 focus-ring">Sobre</a>
          <a href="#projects" className="hover:text-blue-600 focus-ring">Projetos</a>
          <a href="#contact" className="hover:text-blue-600 focus-ring">Contato</a>
          <a
            href="https://github.com/victoralves13"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            GitHub
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Alternar tema"
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </nav>
      </div>
    </header>
  )
}
