import React, { useState } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'Warum genau unsere Felgen-Kerzen?',
      answer: 'Unsere Kerzen sind handgefertigt und mit extra Premium-Wachs hergestellt. Jede Kerze wird mit speziellen Metall-Finishes und hochwertigen Wachssorten (Bienenwachs, Soyawachs) gefertigt, die das authentische Aussehen echter Felgen nachbilden. Zusätzlich verleihen wir ihnen einen einzigartigen Duft nach Leder und Motoröl für das perfekte Auto-Enthusiasten-Erlebnis.'
    },
    {
      id: '2',
      question: 'Wie lange dauert die Lieferung?',
      answer: 'Da jede Kerze individuell handgefertigt wird, beträgt die Herstellungszeit 3-5 Werktage. Der Versand erfolgt dann innerhalb von 1-2 Werktagen. Insgesamt erhalten Sie Ihre Bestellung innerhalb von 5-7 Werktagen. Express-Versand ist gegen Aufpreis möglich.'
    },
    {
      id: '3',
      question: 'Wie lange brennen die Kerzen?',
      answer: 'Unsere Felgen-Kerzen haben eine Brenndauer von 25-30 Stunden bei kontinuierlichem Brennen. Die hochwertigen Wachssorten sorgen für eine gleichmäßige, rußfreie Flamme. Die Metall-Finishes sind hitzebeständig und behalten auch nach dem Abbrennen ihr edles Aussehen.'
    },
    {
      id: '4',
      question: 'Kann ich individuelle Designs bestellen?',
      answer: 'Ja, wir bieten auch maßgeschneiderte Felgen-Kerzen an! Sie können uns Ihr gewünschtes Felgen-Design, spezielle Farben oder sogar Ihr eigenes Logo zusenden. Die Herstellung dauert dann 7-10 Werktage. Kontaktieren Sie uns einfach über unser Kontaktformular für ein individuelles Angebot.'
    },
    {
      id: '5',
      question: 'Welche Zahlungsmethoden akzeptieren Sie?',
      answer: 'Wir akzeptieren alle gängigen Zahlungsmethoden: Kreditkarten (Visa, Mastercard, American Express), PayPal, Sofortüberweisung und SEPA-Lastschrift. Alle Zahlungen werden über sichere, verschlüsselte Verbindungen abgewickelt. Für größere Bestellungen bieten wir auch Rechnungskauf an.'
    },
    {
      id: '6',
      question: 'Gibt es eine Garantie auf die Produkte?',
      answer: 'Ja, wir bieten eine 2-Jahres-Garantie auf alle unsere Felgen-Kerzen. Sollte ein Produkt innerhalb dieser Zeit durch Materialfehler oder Herstellungsmängel beschädigt werden, ersetzen wir es kostenlos. Die Garantie umfasst auch die Metall-Finishes und die Brennqualität.'
    }
  ]

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-gray-600">
            Alles was Sie über unsere Felgen-Kerzen wissen müssen
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openItems.has(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(item.id) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Haben Sie weitere Fragen?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Kontaktieren Sie uns
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
