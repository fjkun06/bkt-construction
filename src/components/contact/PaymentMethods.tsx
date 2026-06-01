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
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Moyens de paiement acceptés
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {constants.paymentMethods.map(({ name, icon }) => {
          const Icon = iconMap[icon] ?? Banknote;
          return (
            <div
              key={name}
              className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800"
            >
              <Icon className="text-primary h-5 w-5" />
              <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
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
