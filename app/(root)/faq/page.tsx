import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Opulence Tools",
  description: "Frequently asked questions about Opulence Tools - shipping, returns, warranties, and more.",
}

const faqs = [
  {
    question: "Do you ship internationally?",
    answer:
      "At this time, we only ship within the United States. We plan to offer international shipping soon.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders typically ship within 2\u20135 business days. Delivery time depends on your location but usually arrives within 5\u201310 business days after shipping.",
  },
  {
    question: "Do you offer warranties on your equipment?",
    answer:
      "Many of the tools we offer include a manufacturer\u2019s warranty. Warranty details are listed on each product page, or feel free to contact us for more information.",
  },
  {
    question: "Can I return an item?",
    answer:
      "Yes, we accept returns within 30 days of delivery for unused, unopened items. Please visit our Returns Policy page for full details.",
  },
  {
    question: "Are your products new?",
    answer:
      "Yes, all of our products are brand new and sourced directly from trusted suppliers and manufacturers.",
  },
  {
    question: "How can I get in touch with your team?",
    answer:
      "You can reach us anytime through our Contact page, or email us directly at info@opulencetools.com.",
  },
]

export default function FAQPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 text-center">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-neutral-600 text-center text-lg">
          Find answers to common questions about our products, shipping, and policies.
        </p>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-neutral-900">
                {faq.question}
              </h2>
              <p className="mt-2 text-neutral-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
