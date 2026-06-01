"use client";
import { useForm } from "react-hook-form";

type SignupFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

/**
 * useSignupController
 *
 * Manages Signup form state and submission logic using react-hook-form.
 *
 * @returns Object containing form registration, handlers, state, and password watch.
 */
const useSignupController = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>();

  const password = watch("password");

  const onSubmit = async (data: SignupFormValues) => {
    // TODO: Integrate with NextAuth
    console.log("Signup:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    password,
  };
};

export default useSignupController;
export type { SignupFormValues };
