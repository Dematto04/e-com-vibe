import { describe, it, expect } from 'vitest';
import { validateCheckoutForm, type CheckoutFormData } from './validation';

describe('validateCheckoutForm', () => {
  it('should return no errors for valid data', () => {
    const validData: CheckoutFormData = {
      fullName: 'John Doe',
      email: 'john@example.com',
      address: '123 Main St',
      city: 'New York',
      zipCode: '10001',
      cardNumber: '1234567890123456',
      expiryDate: '12/25',
      cvv: '123'
    };
    const errors = validateCheckoutForm(validData);
    expect(Object.keys(errors)).toHaveLength(0);
  });

  it('should require all fields', () => {
    const emptyData: CheckoutFormData = {
      fullName: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    };
    const errors = validateCheckoutForm(emptyData);
    expect(errors.fullName).toBe('Full Name is required');
    expect(errors.email).toBe('Email is required');
    expect(errors.address).toBe('Address is required');
    expect(errors.city).toBe('City is required');
    expect(errors.zipCode).toBe('ZIP Code is required');
    expect(errors.cardNumber).toBe('Card Number is required');
    expect(errors.expiryDate).toBe('Expiry Date is required');
    expect(errors.cvv).toBe('CVV is required');
  });

  it('should validate email format', () => {
    const invalidEmail: CheckoutFormData = {
      fullName: 'John',
      email: 'not-an-email',
      address: '123',
      city: 'NY',
      zipCode: '12345',
      cardNumber: '123',
      expiryDate: '12/23',
      cvv: '123'
    };
    const errors = validateCheckoutForm(invalidEmail);
    expect(errors.email).toBe('Invalid email address');
  });

  it('should validate stricter formats', () => {
    const invalidData: CheckoutFormData = {
      fullName: 'John',
      email: 'john@example.com',
      address: '123',
      city: 'NY',
      zipCode: 'abc', // Invalid Zip
      cardNumber: '123', // Invalid Card
      expiryDate: '1225', // Invalid Date (missing /)
      cvv: 'a' // Invalid CVV
    };
    const errors = validateCheckoutForm(invalidData);
    
    expect(errors.expiryDate).toBe('Format must be MM/YY');
    expect(errors.zipCode).toBe('Invalid ZIP Code');
    expect(errors.cardNumber).toBe('Invalid Card Number');
    expect(errors.cvv).toBe('Invalid CVV');
  });
});
