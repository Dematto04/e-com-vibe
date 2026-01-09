import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { validateCheckoutForm, type CheckoutFormData, type ValidationErrors } from '../utils/validation';

// Component strictly for input fields to reduce repetition - Moved outside component to fix focus issues
const FormInput = ({ 
  label, 
  name, 
  value,
  error,
  placeholder, 
  type = 'text', 
  width = 'full',
  onChange,
  onFocus,
  onBlur,
  isFocused
}: { 
  label: string, 
  name: keyof CheckoutFormData, 
  value: string,
  error?: string,
  placeholder: string, 
  type?: string,
  width?: 'full' | 'half',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onFocus: (name: string) => void,
  onBlur: () => void,
  isFocused: boolean
}) => (
  <div className={`${width === 'half' ? 'col-span-1' : 'col-span-2'}`}>
    <label className="block font-mono text-sm uppercase font-bold mb-2 tracking-wider flex justify-between items-end">
      <span>{label}</span>
      {error && <span className="text-red-600 bg-red-100 px-1 text-xs">{error}</span>}
    </label>
    <div className="relative">
      <input 
        type={type} 
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => onFocus(name)}
        onBlur={onBlur}
        className={`
          w-full bg-white border-4 p-4 font-bold text-lg outline-none transition-all duration-200
          ${error ? 'border-red-600' : 'border-black'}
          ${isFocused ? 'shadow-[8px_8px_0px_0px_var(--color-brutal-primary)] -translate-y-1 -translate-x-1' : 'shadow-none'}
          placeholder:text-gray-300
        `}
        placeholder={placeholder}
      />
      {/* Decorative corner marker */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-r-[12px] border-t-black border-r-transparent pointer-events-none opacity-0 transition-opacity" style={{ opacity: isFocused ? 1 : 0 }} />
    </div>
  </div>
);

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, cartTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let newValue = value;

    // Auto-format Expiry Date
    if (name === 'expiryDate') {
      const digits = value.replace(/\D/g, '');
      const limitedDigits = digits.slice(0, 4);
      if (limitedDigits.length >= 2) {
        newValue = `${limitedDigits.slice(0, 2)}/${limitedDigits.slice(2)}`;
      } else {
        newValue = limitedDigits;
      }
    }

    setFormData(prev => ({ ...prev, [name]: newValue }));
    
    if (errors[name as keyof CheckoutFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFocus = (name: string) => setFocusedField(name);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateCheckoutForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to top error
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    clearCart();
    navigate('/checkout/success');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--color-brutal-bg)] flex items-center justify-center p-4">
        <div className="text-center bg-white border-4 border-black p-12 shadow-[12px_12px_0px_0px_var(--color-brutal-secondary)]">
          <h1 className="text-6xl font-black mb-6 uppercase italic">Cart Empty</h1>
          <p className="font-mono mb-8 text-xl">Fill it up before you check out.</p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-black text-white px-12 py-4 text-xl font-bold uppercase tracking-widest hover:bg-[var(--color-brutal-primary)] hover:text-black transition-all border-2 border-transparent hover:border-black shadow-[4px_4px_0px_0px_white] hover:shadow-[8px_8px_0px_0px_black]"
          >
            Go Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-brutal-bg)] text-black pt-28 pb-32 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* LEFT COLUMN: Checkout Logic (Span 7) */}
        <div className="lg:col-span-7">
          <header className="mb-16 border-b-8 border-black pb-8">
            <h1 className="text-7xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
              Check<br/>Out
            </h1>
          </header>

          <form onSubmit={handleSubmit} className="space-y-20">
            
            {/* 01. IDENTITY */}
            <section className="relative">
              <div className="absolute -left-4 -top-10 md:-left-12 md:-top-6 text-9xl font-black text-gray-200 select-none z-0 pointer-events-none opacity-50">01</div>
              <h2 className="relative text-3xl font-black uppercase bg-black text-white inline-block px-4 py-1 mb-8 transform -rotate-1 z-10">Identity</h2>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 relative z-10">
                <FormInput 
                  label="Full Name" 
                  name="fullName" 
                  placeholder="JOHN DOE"
                  value={formData.fullName}
                  error={errors.fullName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isFocused={focusedField === 'fullName'}
                />
                <FormInput 
                  label="Email Address" 
                  name="email" 
                  placeholder="JOHN@EXAMPLE.COM" 
                  value={formData.email}
                  error={errors.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isFocused={focusedField === 'email'}
                />
              </div>
            </section>

            {/* 02. SHIPPING */}
            <section className="relative">
              <div className="absolute -left-4 -top-10 md:-left-12 md:-top-6 text-9xl font-black text-gray-200 select-none z-0 pointer-events-none opacity-50">02</div>
              <h2 className="relative text-3xl font-black uppercase bg-[var(--color-brutal-secondary)] text-white inline-block px-4 py-1 mb-8 transform rotate-1 z-10">Coordinates</h2>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 relative z-10">
                <FormInput 
                  label="Street Address" 
                  name="address" 
                  placeholder="123 BRUTALIST WAY"
                  value={formData.address}
                  error={errors.address}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isFocused={focusedField === 'address'}
                />
                <FormInput 
                  label="City" 
                  name="city" 
                  placeholder="NEW YORK" 
                  width="half"
                  value={formData.city}
                  error={errors.city}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isFocused={focusedField === 'city'} 
                />
                <FormInput 
                  label="Zip Code" 
                  name="zipCode" 
                  placeholder="10001" 
                  width="half" 
                  value={formData.zipCode}
                  error={errors.zipCode}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isFocused={focusedField === 'zipCode'}
                />
              </div>
            </section>

            {/* 03. PAYMENT */}
            <section className="relative">
              <div className="absolute -left-4 -top-10 md:-left-12 md:-top-6 text-9xl font-black text-gray-200 select-none z-0 pointer-events-none opacity-50">03</div>
              <h2 className="relative text-3xl font-black uppercase bg-[var(--color-brutal-primary)] text-black inline-block px-4 py-1 mb-8 transform -rotate-1 z-10">The Damage</h2>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 relative z-10">
                <FormInput 
                  label="Card Number" 
                  name="cardNumber" 
                  placeholder="0000 0000 0000 0000" 
                  value={formData.cardNumber}
                  error={errors.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isFocused={focusedField === 'cardNumber'}
                />
                <FormInput 
                  label="Expiry (MM/YY)" 
                  name="expiryDate" 
                  placeholder="MM/YY" 
                  width="half" 
                  value={formData.expiryDate}
                  error={errors.expiryDate}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isFocused={focusedField === 'expiryDate'}
                />
                <FormInput 
                  label="CVV" 
                  name="cvv" 
                  placeholder="123" 
                  width="half" 
                  value={formData.cvv}
                  error={errors.cvv}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  isFocused={focusedField === 'cvv'}
                />
              </div>
            </section>

            <div className="pt-12">
              <button 
                type="submit"
                className="group relative w-full bg-black text-white py-6 text-2xl font-black uppercase tracking-widest overflow-hidden hover:bg-[var(--color-brutal-primary)] hover:text-black transition-colors duration-300 perspective-1000"
              >
                <div className="relative z-10 flex items-center justify-center gap-4">
                  <span>Confirm Order</span>
                  <span className="group-hover:translate-x-4 transition-transform duration-300">→</span>
                </div>
                {/* Button Shadow/Bg Effect */}
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-exclusion"></div>
              </button>
            </div>

          </form>
        </div>

        {/* RIGHT COLUMN: Receipt Summary (Span 5) */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <div className="sticky top-32">
             <div className="bg-white border-2 border-gray-200 shadow-xl overflow-hidden transform rotate-1 transition-transform hover:rotate-0 duration-500">
                {/* Receipt Header */}
                <div className="bg-gray-100 p-6 border-b-2 border-gray-300 text-center border-dashed">
                  <h3 className="font-mono font-bold text-2xl tracking-widest text-gray-800">RECEIPT_01</h3>
                  <p className="font-mono text-xs text-gray-500 mt-2">{new Date().toLocaleDateString()} // {new Date().toLocaleTimeString()}</p>
                </div>

                {/* Receipt Items */}
                <div className="p-8 space-y-6 bg-white [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4 items-start font-mono text-sm">
                      <div className="bg-gray-100 p-1 border border-black w-12 h-12 flex-shrink-0">
                         <img src={item.thumbnail} alt="" className="w-full h-full object-cover grayscale opacity-80" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline border-b border-dotted border-gray-400 pb-1">
                          <span className="truncate font-bold uppercase pr-2">{item.title}</span>
                          <span className="whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div className="text-gray-500 text-xs mt-1">QTY: {item.quantity} × ${item.price.toFixed(2)}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Receipt Footer */}
                <div className="bg-gray-900 text-white p-6 pt-8 pb-12 relative overflow-hidden">
                   {/* Jagged top edge simulation with CSS */}
                   <div className="absolute top-0 left-0 right-0 h-4 bg-[length:16px_16px] bg-[linear-gradient(135deg,transparent_75%,#111827_75%),linear-gradient(45deg,#111827_25%,transparent_25%)] bg-repeat-x"></div>
                   
                   <div className="flex justify-between items-end font-mono text-xl md:text-2xl">
                     <span className="uppercase tracking-widest text-gray-400">Total</span>
                     <span className="font-bold text-[var(--color-brutal-primary)]">${cartTotal.toFixed(2)}</span>
                   </div>
                   <div className="mt-6 text-center">
                     <div className="w-full h-12 bg-white flex items-center justify-center p-1">
                       {/* Barcode simulation */}
                       <div className="w-full h-full bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_4px,black_4px,black_8px,transparent_8px,transparent_9px)]"></div>
                     </div>
                     <p className="font-mono text-[10px] text-gray-500 mt-2 tracking-[0.2em]">*THANK YOU FOR SHOPPING*</p>
                   </div>
                </div>
             </div>
             
             {/* Sticker decoration */}
             <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--color-brutal-primary)] rounded-full flex items-center justify-center animate-pulse hidden md:flex text-black font-black border-4 border-black shadow-[4px_4px_0px_0px_black] rotate-12 z-20">
               <span className="text-xs text-center leading-none">SECURE<br/>CHECK<br/>OUT</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
