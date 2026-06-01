import { ServiceCard, PackCard } from "@/components/services";
import { SectionWrapper } from "@/components/wrappers";
import constants from "@/utils/constants";

export default function Services() {
  return (
    <>
      {/* Services Section */}
      <SectionWrapper className="py-16">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h1 className="text-primary text-3xl font-bold sm:text-4xl dark:text-white">
              Nos Services
            </h1>
            <p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-slate-400">
              Une gamme complète de services pour tous vos projets de construction et de
              travaux publics.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {constants.services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Construction Packs Section */}
      <SectionWrapper className="border-t border-gray-200 py-16 dark:border-slate-700">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="text-primary text-2xl font-bold sm:text-3xl dark:text-white">
              Nos Packs Construction
            </h2>
            <p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-slate-400">
              Choisissez le pack adapté à votre budget et vos besoins.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {constants.packs.map((pack) => (
              <PackCard key={pack.name} {...pack} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
