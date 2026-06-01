import Link from "next/link";

import { SectionWrapper } from "@/components/wrappers";

export default function EspaceClient() {
  return (
    <>
      <SectionWrapper className="flex min-h-[60vh] items-center justify-center py-16">
        <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="text-center">
            <h1 className="text-primary text-2xl font-bold dark:text-white">
              Espace Client
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
              Accédez à votre espace chantier pour suivre votre projet.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3">
            <Link
              href="/espace-client/login"
              className="bg-primary hover:bg-primary-dark flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold text-white transition-colors"
            >
              Se connecter
            </Link>
            <Link
              href="/espace-client/signup"
              className="flex w-full items-center justify-center rounded-md border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Créer un compte
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
