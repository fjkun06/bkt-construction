"use client";
import React from "react";

import { Send } from "lucide-react";

import useContactFormController from "./ContactForm.controller";

/**
 * ContactForm
 *
 * Contact form component with validation using react-hook-form.
 * Fields: name, email, phone (optional), subject, message.
 */
function ContactForm(): React.ReactElement {
  const { register, handleSubmit, errors, isSubmitting, isSubmitSuccessful, onSubmit } =
    useContactFormController();

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl bg-green-50 p-8 text-center dark:bg-green-900/20">
        <span className="text-lg font-semibold text-green-700 dark:text-green-400">
          Message envoyé avec succès !
        </span>
        <p className="text-sm text-green-600 dark:text-green-300">
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Nom complet <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          {...register("name", { required: "Le nom est requis" })}
          className={`focus:border-primary focus:ring-primary rounded-md border px-4 py-2.5 text-sm transition-colors outline-none focus:ring-1 dark:bg-slate-800 dark:text-white ${
            errors.name ? "border-red-400" : "border-slate-300 dark:border-slate-600"
          }`}
          placeholder="Votre nom"
        />
        {errors.name && (
          <span className="text-xs text-red-500">{errors.name.message}</span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          {...register("email", {
            required: "L'email est requis",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Format d'email invalide",
            },
          })}
          className={`focus:border-primary focus:ring-primary rounded-md border px-4 py-2.5 text-sm transition-colors outline-none focus:ring-1 dark:bg-slate-800 dark:text-white ${
            errors.email ? "border-red-400" : "border-slate-300 dark:border-slate-600"
          }`}
          placeholder="votre@email.com"
        />
        {errors.email && (
          <span className="text-xs text-red-500">{errors.email.message}</span>
        )}
      </div>

      {/* Phone (optional) */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Téléphone
        </label>
        <input
          type="tel"
          {...register("phone")}
          className="focus:border-primary focus:ring-primary rounded-md border border-slate-300 px-4 py-2.5 text-sm transition-colors outline-none focus:ring-1 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
          placeholder="+237 6XX XXX XXX"
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Sujet <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          {...register("subject", { required: "Le sujet est requis" })}
          className={`focus:border-primary focus:ring-primary rounded-md border px-4 py-2.5 text-sm transition-colors outline-none focus:ring-1 dark:bg-slate-800 dark:text-white ${
            errors.subject ? "border-red-400" : "border-slate-300 dark:border-slate-600"
          }`}
          placeholder="Objet de votre message"
        />
        {errors.subject && (
          <span className="text-xs text-red-500">{errors.subject.message}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={5}
          {...register("message", { required: "Le message est requis" })}
          className={`focus:border-primary focus:ring-primary resize-none rounded-md border px-4 py-2.5 text-sm transition-colors outline-none focus:ring-1 dark:bg-slate-800 dark:text-white ${
            errors.message ? "border-red-400" : "border-slate-300 dark:border-slate-600"
          }`}
          placeholder="Décrivez votre projet ou posez votre question..."
        />
        {errors.message && (
          <span className="text-xs text-red-500">{errors.message.message}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary hover:bg-primary-dark mt-2 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-colors disabled:opacity-50"
      >
        {isSubmitting ? (
          "Envoi en cours..."
        ) : (
          <>
            <Send size={16} />
            Envoyer le message
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
