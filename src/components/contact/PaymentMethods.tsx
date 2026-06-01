import React from "react";

import { Smartphone, Landmark, Banknote } from "lucide-react";

import constants from "@/utils/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Landmark,
  Banknote,
};

/**
 * PaymentMethods
 *
 * Displays the accepted payment methods as a list.
 */
function PaymentMethods(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        Moyens de paiement acceptés
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {constants.paymentMethods.map(({ name, icon }) => {
          const Icon = iconMap[icon] ?? Banknote;
          return (
            <div
              key={name}
              className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700"
            >
              <Icon className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PaymentMethods;
