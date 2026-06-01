import { SectionWrapper } from "@/components/wrappers";

export default function Realisations() {
  return (
    <>
      <SectionWrapper className="py-16">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h1 className="text-primary text-[40px] font-bold dark:text-white">
              Nos Réalisations
            </h1>
            <p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-slate-400">
              Découvrez nos projets réalisés à travers le Cameroun.
            </p>
          </div>

          {/* Placeholder for video montage */}
          <div className="flex w-full max-w-4xl items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 py-24 dark:border-slate-600 dark:bg-slate-800/50">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-4xl">🎬</span>
              <p className="text-lg font-medium text-gray-600 dark:text-slate-400">
                Vidéo montage à venir
              </p>
              <p className="max-w-md text-sm text-gray-600 dark:text-slate-400">
                Une vidéo présentant nos différents projets réalisés sera ajoutée ici
                prochainement.
              </p>
            </div>
          </div>

          {/* Placeholder for photo gallery */}
          <div className="w-full">
            <h2 className="text-primary mb-6 text-[40px] font-semibold dark:text-white">
              Galerie Photos
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="flex aspect-4/3 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800"
                >
                  <span className="text-sm text-gray-600 dark:text-slate-400">
                    Photo du projet {index + 1}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-gray-600 dark:text-slate-400">
              Les photos de nos réalisations seront ajoutées prochainement.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
