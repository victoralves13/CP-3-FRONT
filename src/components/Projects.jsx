import { useState } from 'react'
const list = [
  {id:1, name:'GS WebDev', link:'https://github.com/victoralves13/GS-webdev'},
  {id:2, name:'Sprint 4 WebDev', link:'https://github.com/victoralves13/SPRINT-4-webdev'},
  {id:3, name:'CP1 Airbnb', link:'https://github.com/victoralves13/cp1-airbnb'},
  {id:4, name:'First Class', link:'https://github.com/victoralves13/first-class'}
]
export default function Projects(){
  const [q,setQ]=useState('')
  const filtered = list.filter(p=>p.name.toLowerCase().includes(q.toLowerCase()))
  return(
    <section id="projects" className="p-10 mt-6">
      <h2 className="text-2xl font-bold mb-4">Projetos</h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input aria-label="Pesquisar projetos" value={q} onChange={e=>setQ(e.target.value)} className="border p-2 rounded w-full md:w-1/2" placeholder="Buscar projetos..." />
        <p className="text-sm opacity-70">Mostrando {filtered.length} de {list.length}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {filtered.map(p=>(
          <a key={p.id} href={p.link} target="_blank" rel="noreferrer" className="card hover:scale-105 hover:shadow-lg transition">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm mt-2 opacity-80">Veja o repositório e README com instruções.</p>
          </a>
        ))}
      </div>
    </section>
  )
}
