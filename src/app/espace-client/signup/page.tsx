"use client";
import React from "react";

import Link from "next/link";

import { SectionWrapper } from "@/components/wrappers";
import useSignupController from "./signup.controller";

export default function Signup() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit, password } =
    useSignupController();

  return (
    <>
      <SectionWrapper className="flex min-h-[60vh] items-center justify-center py-16">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-6 text-center">
            <h1 className="text-primary text-[28px] font-bold sm:text-[36px] lg:text-[40px] dark:text-white">
              Créer un compte
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
              Inscrivez-vous pour accéder à votre espace chantier
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
            noValidate
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-slate-300">
                Nom complet
              </label>
              <input
                type="text"
                {...register("name", { required: "Le nom est requis" })}
                className={`focus:border-primary focus:ring-primary rounded-md border px-4 py-2.5 text-sm transition-colors outline-none focus:ring-1 dark:bg-slate-700 dark:text-white ${
                  errors.name ? "border-red-400" : "border-gray-300 dark:border-slate-600"
                }`}
                placeholder="Votre nom complet"
              />
              {errors.name && (
                <span className="text-xs text-red-500">{errors.name.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-slate-300">
                Email
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
                className={`focus:border-primary focus:ring-primary rounded-md border px-4 py-2.5 text-sm transition-colors outline-none focus:ring-1 dark:bg-slate-700 dark:text-white ${
                  errors.email
                    ? "border-red-400"
                    : "border-gray-300 dark:border-slate-600"
                }`}
                placeholder="votre@email.com"
              />
              {errors.email && (
                <span className="text-xs text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-slate-300">
                Mot de passe
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Le mot de passe est requis",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 caractères",
                  },
                })}
                className={`focus:border-primary focus:ring-primary rounded-md border px-4 py-2.5 text-sm transition-colors outline-none focus:ring-1 dark:bg-slate-700 dark:text-white ${
                  errors.password
                    ? "border-red-400"
                    : "border-gray-300 dark:border-slate-600"
                }`}
                placeholder="••••••••"
              />
              {errors.password && (
                <span className="text-xs text-red-500">{errors.password.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-slate-300">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Veuillez confirmer le mot de passe",
                  validate: (value: string) =>
                    value === password || "Les mots de passe ne correspondent pas",
                })}
                className={`focus:border-primary focus:ring-primary rounded-md border px-4 py-2.5 text-sm transition-colors outline-none focus:ring-1 dark:bg-slate-700 dark:text-white ${
                  errors.confirmPassword
                    ? "border-red-400"
                    : "border-gray-300 dark:border-slate-600"
                }`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <span className="text-xs text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary-dark mt-2 rounded-md px-4 py-3 text-sm font-semibold text-white transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Création..." : "Créer mon compte"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-slate-400">
            Déjà un compte ?{" "}
            <Link
              href="/espace-client/login"
              className="text-primary font-medium hover:underline"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
