import React from "react";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

import { ContactInfoCardProps } from "@/interfaces/contact.interface";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone,
  Mail,
  MapPin,
  Clock,
};

/**
 * ContactInfoCard
 *
 * Displays a single contact information item with icon.
 *
 * @param icon - Lucide icon name
 * @param title - Card heading
 * @param value - Contact value (phone, email, etc.)
 */
function ContactInfoCard({
  icon,
  title,
  value,
}: ContactInfoCardProps): React.ReactElement {
  const Icon = iconMap[icon] ?? Phone;

  return (
    <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg dark:bg-slate-700">
        <Icon className="text-primary h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900 dark:text-white">{title}</span>
        <span className="text-sm text-gray-600 dark:text-slate-400">{value}</span>
      </div>
    </div>
  );
}

export default ContactInfoCard;
