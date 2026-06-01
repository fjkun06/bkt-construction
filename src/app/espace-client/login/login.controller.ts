"use client";
import { useForm } from "react-hook-form";

type LoginFormValues = {
  email: string;
  password: string;
};

/**
 * useLoginController
 *
 * Manages Login form state and submission logic using react-hook-form.
 *
 * @returns Object containing form registration, handlers, and state.
 */
const useLoginController = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    // TODO: Integrate with NextAuth
    console.log("Login:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
};

export default useLoginController;
export type { LoginFormValues };
