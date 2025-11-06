export default function Contact(){
  return (
    <section id="contact" className="p-10">
      <h2 className="text-2xl font-bold mb-4">Contato</h2>
      <form className="max-w-md grid gap-3" onSubmit={e=>{e.preventDefault(); alert('Mensagem enviada (simulada)')}}>
        <label className="sr-only" htmlFor="name">Nome</label>
        <input id="name" className="border p-2 rounded" type="text" placeholder="Seu nome" required />

        <label className="sr-only" htmlFor="email">Email</label>
        <input id="email" className="border p-2 rounded" type="email" placeholder="Seu email" required />

        <label className="sr-only" htmlFor="message">Mensagem</label>
        <textarea id="message" className="border p-2 rounded" rows="4" placeholder="Sua mensagem" required />

        <button className="btn-primary mt-2" type="submit">Enviar</button>
      </form>
    </section>
  )
}
