import { Navbar, Footer } from "@/components/layouts";
import { ContactForm, ContactInfoCard, PaymentMethods } from "@/components/contact";
import { SectionWrapper } from "@/components/wrappers";
import constants from "@/utils/constants";

export default function Contact() {
  const contactCards = [
    { icon: "Phone", title: "Téléphone", value: constants.contact.phone },
    { icon: "Mail", title: "Email", value: constants.contact.email },
    { icon: "MapPin", title: "Adresse", value: constants.contact.address },
    { icon: "Clock", title: "Horaires", value: constants.contact.hours },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <SectionWrapper className="py-16">
          <div className="flex flex-col gap-12">
            {/* Page header */}
            <div className="text-center">
              <h1 className="text-primary text-3xl font-bold sm:text-4xl dark:text-white">
                Contactez-nous
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 dark:text-slate-400">
                Vous avez un projet ? Contactez-nous pour un devis gratuit.
              </p>
            </div>

            {/* Map placeholder */}
            <div className="flex h-64 w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800">
              <span className="text-sm text-gray-600 dark:text-slate-400">
                Carte interactive (Google Maps) — à intégrer
              </span>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactCards.map((card) => (
                <ContactInfoCard key={card.title} {...card} />
              ))}
            </div>

            {/* Form + Payment methods */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <h2 className="text-primary text-xl font-semibold dark:text-white">
                  Envoyez-nous un message
                </h2>
                <ContactForm />
              </div>
              <div className="flex flex-col gap-8">
                <PaymentMethods />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
