export interface CheckoutFormData {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export type ValidationErrors = Partial<Record<keyof CheckoutFormData, string>>;

export function validateCheckoutForm(data: CheckoutFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.fullName.trim()) errors.fullName = 'Full Name is required';
  
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (!data.address.trim()) errors.address = 'Address is required';
  if (!data.city.trim()) errors.city = 'City is required';
  
  if (!data.zipCode.trim()) {
    errors.zipCode = 'ZIP Code is required';
  } else if (!/^\d{5}$/.test(data.zipCode)) {
    errors.zipCode = 'Invalid ZIP Code';
  }

  if (!data.cardNumber.trim()) {
    errors.cardNumber = 'Card Number is required';
  } else if (!/^\d{16}$/.test(data.cardNumber.replace(/\s/g, ''))) {
    errors.cardNumber = 'Invalid Card Number';
  }

  if (!data.expiryDate.trim()) {
    errors.expiryDate = 'Expiry Date is required';
  } else if (!/^\d{2}\/\d{2}$/.test(data.expiryDate)) {
    errors.expiryDate = 'Format must be MM/YY';
  }

  if (!data.cvv.trim()) {
    errors.cvv = 'CVV is required';
  } else if (!/^\d{3,4}$/.test(data.cvv)) {
    errors.cvv = 'Invalid CVV';
  }

  return errors;
}
