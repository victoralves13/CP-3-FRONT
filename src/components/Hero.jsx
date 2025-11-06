export default function Hero(){
  return (
    <section id="hero" className="text-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold">Victor Oliveira Alves</h1>
      <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto opacity-80 leading-relaxed">
        Estudante de Engenharia de Software na FIAP. Conhecimento em Python, desenvolvimento web e sistemas para saúde. Buscando oportunidades na área de tecnologia.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="https://github.com/victoralves13" target="_blank" rel="noreferrer" className="btn-primary focus-ring">Ver GitHub</a>
        <a href="http://linkedin.com/in/victoroliveiraalves" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg hover:scale-105 transition">LinkedIn</a>
      </div>
    </section>
  )
}
