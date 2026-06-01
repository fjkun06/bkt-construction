import React from "react";

import { Check, X } from "lucide-react";

import { PackCardProps } from "@/interfaces/services.interface";

/**
 * PackCard
 *
 * Displays a construction pack with included/excluded features.
 *
 * @param name - Pack name
 * @param description - Short description
 * @param target - Target audience
 * @param included - Array of included items
 * @param excluded - Array of excluded items
 */
function PackCard({
  name,
  description,
  target,
  included,
  excluded,
}: PackCardProps): React.ReactElement {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      {/* Header */}
      <div className="border-b border-slate-200 p-6 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{name}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{description}</p>
        <p className="text-primary mt-2 text-xs font-medium">{target}</p>
      </div>

      {/* Included */}
      <div className="flex-1 p-6">
        <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
          Inclus
        </span>
        <ul className="mt-3 flex flex-col gap-2">
          {included.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 shrink-0 text-green-500" />
              <span className="text-slate-700 dark:text-slate-300">{item}</span>
            </li>
          ))}
        </ul>

        {/* Excluded */}
        {excluded.length > 0 && (
          <div className="mt-4">
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Non inclus
            </span>
            <ul className="mt-3 flex flex-col gap-2">
              {excluded.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <X className="h-4 w-4 shrink-0 text-red-400" />
                  <span className="text-slate-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PackCard;
