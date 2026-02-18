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
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          loanAmount,
          monthlyPayment,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setFormData({ name: '', email: '', phone: '', propertyType: 'apartament' });
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-sage" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trimis cu succes!</h3>
            <p className="text-gray-600">Vei primi oferte de la 5 brokeri în maxim 24h.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Solicită oferte</h2>
            <p className="text-gray-600 mb-6">Completează datele și primești 5 oferte personalizate</p>

            <div className="bg-mint/10 rounded-2xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Credit solicitat:</span>
                <span className="font-bold text-mint">{loanAmount.toLocaleString('ro-RO')} RON</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-600">Rată estimată:</span>
                <span className="font-bold text-mint">{Math.round(monthlyPayment).toLocaleString('ro-RO')} RON/lună</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nume complet *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none"
                  placeholder="Ion Popescu"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none"
                  placeholder="ion.popescu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none"
                  placeholder="0712345678"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tip proprietate</label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none"
                >
                  <option value="apartament">Apartament</option>
                  <option value="casa">Casă</option>
                  <option value="teren">Teren</option>
                  <option value="spatiu-comercial">Spațiu comercial</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sage text-white py-4 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Se trimite...' : 'Trimite cererea →'}
              </button>

              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm text-center">A apărut o eroare. Te rugăm încearcă din nou.</p>
              )}

              <p className="text-xs text-gray-500 text-center">
                Prin trimiterea cererii, accepți{' '}
                <a href="/termeni-conditii" className="text-sage underline">Termenii și Condițiile</a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
