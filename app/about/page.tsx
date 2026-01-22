import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Opulence Tools",
  description: "Opulence Tools was created by a jeweler, for jewelers. High-performance equipment for serious makers.",
}

export default function AboutPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 text-center">
          About Us
        </h1>

        <div className="mt-12 space-y-6 text-neutral-600 text-lg leading-relaxed">
          <p className="text-xl font-medium text-neutral-900">
            Opulence Tools was created by a jeweler, for jewelers.
          </p>
          <p>
            After years of working hands-on in the studio — carving wax, melting metal, casting, polishing — we know what makes a tool worth investing in.
          </p>
          <p>
            This shop is dedicated to curating high-performance equipment for serious makers: from wax injectors and kilns to vacuum casting systems and polishers. Every item here is chosen with care, based on real studio experience — not just catalog listings.
          </p>
          <p>
            Whether you&#39;re just getting started or scaling up, we&#39;ve got the tools to help you do the job right.
          </p>
        </div>
      </div>
    </section>
  )
}
