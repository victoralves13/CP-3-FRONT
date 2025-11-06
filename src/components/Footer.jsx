export default function Footer(){
  return (
    <footer className="text-center p-6 mt-10 border-t dark:border-gray-700">
      <p>© {new Date().getFullYear()} — Victor Oliveira Alves</p>
      <div className="mt-3 flex justify-center gap-4">
        <a href="https://github.com/victoralves13" target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
        <a href="http://linkedin.com/in/victoroliveiraalves" target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
      </div>
    </footer>
  )
}
