"use client";
import { useForm } from "react-hook-form";

import { ContactFormValues } from "@/interfaces/contact.interface";

/**
 * useContactFormController
 *
 * Manages ContactForm state and submission logic using react-hook-form.
 *
 * @returns Object containing form registration, handlers, and state.
 */
const useContactFormController = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    // TODO: Replace with actual API call
    console.log("Form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isSubmitSuccessful,
    onSubmit,
  };
};

export default useContactFormController;
