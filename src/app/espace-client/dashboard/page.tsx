import Link from "next/link";
import { Camera, CreditCard, MessageSquare, HardHat } from "lucide-react";

import { Navbar, Footer } from "@/components/layouts";
import { SectionWrapper } from "@/components/wrappers";

/**
 * Client Dashboard (Espace Chantier)
 *
 * Main authenticated page showing project overview and navigation
 * to Photos, Paiement, and Remarques sections.
 * TODO: Protect with authentication middleware.
 */
export default function Dashboard() {
  const sections = [
    {
      title: "Photos",
      description: "Suivez l'avancement de votre chantier en images",
      icon: Camera,
      href: "/espace-client/dashboard/photos",
    },
    {
      title: "Paiement",
      description: "Consultez l'état de vos paiements",
      icon: CreditCard,
      href: "/espace-client/dashboard/paiement",
    },
    {
      title: "Remarques",
      description: "Communiquez avec notre équipe",
      icon: MessageSquare,
      href: "/espace-client/dashboard/remarques",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <SectionWrapper className="py-16">
          <div className="flex flex-col gap-8">
            {/* Project Overview */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl dark:bg-slate-700">
                  <HardHat className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-primary text-2xl font-bold dark:text-white">
                    Mon Chantier
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    Bienvenue dans votre espace projet
                  </p>
                </div>
              </div>

              {/* Project metadata placeholder */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-slate-700/50">
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    Projet
                  </span>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Villa Résidentielle
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-slate-700/50">
                  <span className="text-xs text-gray-500 dark:text-slate-400">Début</span>
                  <p className="font-medium text-gray-900 dark:text-white">15 Jan 2026</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-slate-700/50">
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    Fin prévue
                  </span>
                  <p className="font-medium text-gray-900 dark:text-white">30 Déc 2026</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-slate-700/50">
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    Statut
                  </span>
                  <p className="font-medium text-green-600">En cours</p>
                </div>
              </div>
            </div>

            {/* Dashboard sections */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {sections.map(({ title, description, icon: Icon, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="group hover:border-primary/50 flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors dark:bg-slate-700 dark:group-hover:bg-slate-600">
                    <Icon className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-slate-400">
                      {description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
