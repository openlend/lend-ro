'use client';

import { useState } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  loanAmount: number;
  monthlyPayment: number;
}

export default function LeadModal({ isOpen, onClose, loanAmount, monthlyPayment }: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'apartament',
    honeypot: '', // Bot trap - hidden from users
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^(\+4|0)(7[0-9]{8}|[23][0-9]{8})$/;
    return phoneRegex.test(cleaned);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Te rugăm să completezi toate câmpurile obligatorii.');
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrorMessage('Număr de telefon invalid. Format corect: 07XXXXXXXX sau +407XXXXXXXX');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          propertyType: formData.propertyType,
          loanAmount,
          monthlyPayment,
          timestamp: new Date().toISOString(),
          honeypot: formData.honeypot, // Bot trap
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setFormData({ 
            name: '', 
            email: '', 
            phone: '', 
            propertyType: 'apartament',
            honeypot: '',
          });
          setErrorMessage('');
        }, 4000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'A apărut o eroare. Te rugăm încearcă din nou.');
        
        // Auto-clear error after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setErrorMessage('');
        }, 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Eroare de conexiune. Verifică conexiunea la internet și încearcă din nou.');
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative animate-slideUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Închide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitStatus === 'success' ? (
          <div className="text-center py-8 animate-fadeIn">
            <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg className="w-10 h-10 text-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-3">Trimis cu succes! 🎉</h3>
            <p className="text-lg text-gray-600 mb-2">
              Cererea ta a fost înregistrată!
            </p>
            <p className="text-gray-500">
              Vei primi <strong>5 oferte competitive</strong> de la brokeri certificați în maxim <strong>24 de ore</strong>.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-black text-gray-900 mb-2">Solicită oferte gratuite</h2>
            <p className="text-gray-600 mb-6">Completează datele și primești 5 oferte personalizate de la brokeri certificați</p>

            <div className="bg-mint/10 rounded-2xl p-4 mb-6 border-2 border-mint/20">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-700">Credit solicitat:</span>
                <span className="font-black text-lg text-mint">{loanAmount.toLocaleString('ro-RO')} RON</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm font-semibold text-gray-700">Rată estimată:</span>
                <span className="font-black text-lg text-mint">{Math.round(monthlyPayment).toLocaleString('ro-RO')} RON/lună</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  Nume complet <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none transition-colors"
                  placeholder="Ion Popescu"
                  minLength={3}
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none transition-colors"
                  placeholder="ion.popescu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                  Telefon <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none transition-colors"
                  placeholder="07XXXXXXXX sau +407XXXXXXXX"
                  pattern="[0-9\+\-\s\(\)]+"
                />
                <p className="text-xs text-gray-500 mt-1">Format: 07XXXXXXXX sau +407XXXXXXXX</p>
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-sm font-bold text-gray-700 mb-2">
                  Tip proprietate
                </label>
                <select
                  id="propertyType"
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none transition-colors"
                >
                  <option value="apartament">Apartament</option>
                  <option value="casa">Casă</option>
                  <option value="teren">Teren</option>
                  <option value="spatiu-comercial">Spațiu comercial</option>
                </select>
              </div>

              {/* Honeypot field - hidden from humans, only bots fill it */}
              <input
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sage text-white py-4 rounded-xl font-black text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Se trimite...
                  </span>
                ) : (
                  'Trimite cererea →'
                )}
              </button>

              {errorMessage && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 animate-shake">
                  <p className="text-red-700 text-sm font-semibold text-center">
                    ⚠️ {errorMessage}
                  </p>
                </div>
              )}

              <div className="bg-mint/5 rounded-xl p-4 border border-mint/20">
                <p className="text-xs text-gray-600 text-center leading-relaxed">
                  <strong>100% Gratuit.</strong> Ne plătesc băncile, nu tu. Prin trimiterea cererii, accepți{' '}
                  <a href="/termeni-conditii" className="text-sage underline font-semibold hover:text-sage/80">
                    Termenii și Condițiile
                  </a>{' '}
                  și{' '}
                  <a href="/politica-confidentialitate" className="text-sage underline font-semibold hover:text-sage/80">
                    Politica de Confidențialitate
                  </a>.
                </p>
              </div>
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .animate-shake {
          animation: shake 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
