'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Footer from '@/components/Footer';

function RetragereForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: searchParams.get('email') || '',
    leadId: searchParams.get('id') || '',
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    if (!formData.email.trim()) {
      setErrorMessage('Te rugăm să introduci adresa de email.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/gdpr/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email.trim(),
          leadId: formData.leadId.trim() || null,
          reason: formData.reason.trim() || 'Retragere consimțământ GDPR',
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'A apărut o eroare. Te rugăm încearcă din nou.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Eroare de conexiune. Verifică conexiunea și încearcă din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="py-12 md:py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  Cerere Înregistrată ✓
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Cererea ta de retragere a consimțământului a fost înregistrată cu succes.
                </p>
                <div className="bg-mint/10 rounded-xl p-6 text-left mb-6">
                  <h3 className="font-bold text-gray-900 mb-2">Ce urmează:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-mint font-bold">1.</span>
                      <span>Vei primi un email de confirmare în maxim 24 de ore</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint font-bold">2.</span>
                      <span>Datele tale vor fi șterse din sistemele noastre în maxim <strong>30 de zile</strong> (conform GDPR)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint font-bold">3.</span>
                      <span>Vei primi o confirmare finală după ștergerea completă</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">
                  Pentru întrebări, contactează-ne la{' '}
                  <a href="mailto:gdpr@lend.ro" className="text-mint underline font-semibold">
                    gdpr@lend.ro
                  </a>
                </p>
                <a 
                  href="/"
                  className="inline-block mt-6 bg-sage text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition"
                >
                  Înapoi la Homepage
                </a>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                    Retragere Consimțământ GDPR
                  </h1>
                  <p className="text-lg text-gray-600">
                    Conform GDPR, ai dreptul să retragi consimțământul și să ștergi datele tale personale din sistemele noastre.
                  </p>
                </div>

                <div className="bg-mint/10 rounded-2xl p-6 border-2 border-mint/20 mb-8">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">ℹ️</span>
                    Informații Importante
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-mint font-bold">•</span>
                      <span>Ștergerea este <strong>definitivă</strong> și nu poate fi anulată</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint font-bold">•</span>
                      <span>Procesarea cererii durează <strong>maxim 30 de zile</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint font-bold">•</span>
                      <span>Vei primi confirmări prin email la fiecare etapă</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-mint font-bold">•</span>
                      <span>Brokerii contactați vor fi notificați despre retragerea consimțământului</span>
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Adresa de Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none transition-colors"
                      placeholder="Email-ul folosit la înregistrarea cererii"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Introduceți email-ul pe care l-ați folosit când ați solicitat oferte pe lend.ro
                    </p>
                  </div>

                  <div>
                    <label htmlFor="leadId" className="block text-sm font-bold text-gray-700 mb-2">
                      Lead ID <span className="text-gray-400">(Opțional)</span>
                    </label>
                    <input
                      id="leadId"
                      type="text"
                      value={formData.leadId}
                      onChange={(e) => setFormData({ ...formData, leadId: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none transition-colors"
                      placeholder="ex: 1739911234567"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Dacă ai primit un Lead ID în email de confirmare, introdu-l aici pentru procesare mai rapidă
                    </p>
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-sm font-bold text-gray-700 mb-2">
                      Motiv <span className="text-gray-400">(Opțional)</span>
                    </label>
                    <textarea
                      id="reason"
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none transition-colors resize-none"
                      rows={3}
                      placeholder="Ne poți spune de ce dorești să ștergi datele? (opțional, ne ajută să îmbunătățim serviciile)"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white py-4 rounded-xl font-black text-lg hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Se procesează...
                      </span>
                    ) : (
                      '🗑️ Retrag consimțământul și șterg datele'
                    )}
                  </button>

                  {errorMessage && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                      <p className="text-red-700 text-sm font-semibold text-center">
                        ⚠️ {errorMessage}
                      </p>
                    </div>
                  )}
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3">Alternative la Ștergere Completă</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Dacă nu dorești să ștergi toate datele, poți solicita:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span>📋</span>
                      <span><strong>Export date (portabilitate):</strong> Primești toate datele în format JSON</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✏️</span>
                      <span><strong>Corectare date:</strong> Modificăm datele incorecte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>🔕</span>
                      <span><strong>Opțiune "Nu contacta":</strong> Datele rămân, dar nu mai primești comunicări</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    Pentru aceste opțiuni, scrie-ne la{' '}
                    <a href="mailto:gdpr@lend.ro" className="text-mint underline font-semibold">
                      gdpr@lend.ro
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

export default function RetragereConsimtamant() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-mint border-t-transparent mb-4"></div>
          <p className="text-gray-600">Se încarcă...</p>
        </div>
      </div>
    }>
      <RetragereForm />
    </Suspense>
  );
}
