import React from "react";

import Link from "next/link";
import {
  Compass,
  Building2,
  Route,
  Hammer,
  Paintbrush,
  RefreshCw,
  Trees,
  ClipboardCheck,
} from "lucide-react";

import { ServiceCardProps } from "@/interfaces/services.interface";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Building2,
  Route,
  Hammer,
  Paintbrush,
  RefreshCw,
  Trees,
  ClipboardCheck,
};

/**
 * ServiceCard
 *
 * Displays a single service category with icon, title, description,
 * and a CTA button linking to the contact page.
 *
 * @param title - Service category title
 * @param description - Brief description of the service
 * @param icon - Lucide icon name to display
 */
function ServiceCard({ title, description, icon }: ServiceCardProps): React.ReactElement {
  const Icon = iconMap[icon] ?? Compass;

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg dark:bg-slate-700">
        <Icon className="text-primary h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
        {description}
      </p>
      <Link
        href="/contact"
        className="text-primary dark:text-primary-100 mt-2 inline-flex w-max items-center text-sm font-semibold hover:underline"
      >
        En savoir plus →
      </Link>
    </div>
  );
}

export default ServiceCard;
