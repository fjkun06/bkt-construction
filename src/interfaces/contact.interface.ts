/**
 * Contact Interface Definitions
 * Type definitions for contact-related components and forms.
 */

/**
 * ContactFormValues
 * Shape of the contact form data.
 * @property name - Sender's full name
 * @property email - Sender's email address
 * @property phone - Optional phone number
 * @property subject - Message subject
 * @property message - Message body
 */
export type ContactFormValues = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

/**
 * ContactInfoCardProps
 * Props for displaying a contact information card.
 * @property icon - Lucide icon name
 * @property title - Card heading
 * @property value - Contact value (phone, email, etc.)
 */
export type ContactInfoCardProps = {
  icon: string;
  title: string;
  value: string;
};

/**
 * PaymentMethodProps
 * Props for displaying a payment method.
 * @property name - Payment method name
 * @property icon - Lucide icon name
 */
export type PaymentMethodProps = {
  name: string;
  icon: string;
};
