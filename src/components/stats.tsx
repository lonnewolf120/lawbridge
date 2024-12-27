export default function Stats() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Our Experience</h2>
        <p className="text-center text-muted-foreground mb-12">
          We've helped and served our users for their legal cases successfully for a long time now and you can trust us
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold">96%</p>
            <p className="text-sm text-muted-foreground">Cases Solved</p>
          </div>
          <div>
            <p className="text-4xl font-bold">54+</p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold">200</p>
            <p className="text-sm text-muted-foreground">Lawyers</p>
          </div>
          <div>
            <p className="text-4xl font-bold">1500</p>
            <p className="text-sm text-muted-foreground">Working Hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}

