'use client';

import { useState, useEffect } from 'react';
import { getTrackingData, type TrackingData } from '@/lib/tracking';
import { TextField, MenuItem, ThemeProvider, createTheme } from '@mui/material';

// Custom MUI theme with lend.ro colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#00D186', // Green
    },
    secondary: {
      main: '#0B1B3E', // Navy
    },
  },
  typography: {
    fontFamily: 'Rubik, sans-serif',
  },
});

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  loanAmount: number;
  monthlyPayment: number;
}

// Country codes with flags
const countries = [
  { code: '+40', country: 'RO', flag: '🇷🇴', name: 'România' },
  { code: '+43', country: 'AT', flag: '🇦🇹', name: 'Austria' },
  { code: '+32', country: 'BE', flag: '🇧🇪', name: 'Belgia' },
  { code: '+359', country: 'BG', flag: '🇧🇬', name: 'Bulgaria' },
  { code: '+357', country: 'CY', flag: '🇨🇾', name: 'Cipru' },
  { code: '+420', country: 'CZ', flag: '🇨🇿', name: 'Cehia' },
  { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germania' },
  { code: '+45', country: 'DK', flag: '🇩🇰', name: 'Danemarca' },
  { code: '+372', country: 'EE', flag: '🇪🇪', name: 'Estonia' },
  { code: '+34', country: 'ES', flag: '🇪🇸', name: 'Spania' },
  { code: '+358', country: 'FI', flag: '🇫🇮', name: 'Finlanda' },
  { code: '+33', country: 'FR', flag: '🇫🇷', name: 'Franța' },
  { code: '+30', country: 'GR', flag: '🇬🇷', name: 'Grecia' },
  { code: '+353', country: 'IE', flag: '🇮🇪', name: 'Irlanda' },
  { code: '+39', country: 'IT', flag: '🇮🇹', name: 'Italia' },
  { code: '+371', country: 'LV', flag: '🇱🇻', name: 'Letonia' },
  { code: '+370', country: 'LT', flag: '🇱🇹', name: 'Lituania' },
  { code: '+352', country: 'LU', flag: '🇱🇺', name: 'Luxemburg' },
  { code: '+36', country: 'HU', flag: '🇭🇺', name: 'Ungaria' },
  { code: '+31', country: 'NL', flag: '🇳🇱', name: 'Olanda' },
  { code: '+48', country: 'PL', flag: '🇵🇱', name: 'Polonia' },
  { code: '+351', country: 'PT', flag: '🇵🇹', name: 'Portugalia' },
  { code: '+46', country: 'SE', flag: '🇸🇪', name: 'Suedia' },
  { code: '+386', country: 'SI', flag: '🇸🇮', name: 'Slovenia' },
  { code: '+421', country: 'SK', flag: '🇸🇰', name: 'Slovacia' },
  { code: '+44', country: 'GB', flag: '🇬🇧', name: 'Marea Britanie' },
  { code: '+1', country: 'US', flag: '🇺🇸', name: 'SUA' },
];

export default function LeadModal({ isOpen, onClose, loanAmount, monthlyPayment }: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+40', // Default Romania
    propertyType: 'apartament',
    gdprConsent: false,
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);

  // Collect tracking data when modal opens
  useEffect(() => {
    if (isOpen && !trackingData) {
      setTrackingData(getTrackingData());
    }
  }, [isOpen, trackingData]);

  if (!isOpen) return null;

  const validatePhone = (phone: string, countryCode: string): boolean => {
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    
    // Romania specific validation
    if (countryCode === '+40') {
      // Accept: 7XXXXXXXX or 07XXXXXXXX
      if (cleaned.startsWith('0')) {
        return /^0[7][0-9]{8}$/.test(cleaned);
      }
      return /^[7][0-9]{8}$/.test(cleaned);
    }
    
    // For other countries: accept any number 6-15 digits
    return /^[0-9]{6,15}$/.test(cleaned);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Te rugăm să completezi toate câmpurile obligatorii.');
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(formData.phone, formData.countryCode)) {
      const errorMsg = formData.countryCode === '+40' 
        ? 'Număr de telefon invalid. Format corect: 712345678 sau 0712345678'
        : 'Număr de telefon invalid.';
      setErrorMessage(errorMsg);
      setIsSubmitting(false);
      return;
    }

    // Clean phone number and combine with country code
    const cleanedPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    const fullPhone = formData.countryCode === '+40' && cleanedPhone.startsWith('0')
      ? formData.countryCode + cleanedPhone.substring(1) // Remove leading 0 for Romania
      : formData.countryCode + cleanedPhone;

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: fullPhone,
          propertyType: formData.propertyType,
          loanAmount,
          monthlyPayment,
          timestamp: new Date().toISOString(),
          honeypot: formData.honeypot,
          tracking: trackingData,
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
            countryCode: '+40',
            propertyType: 'apartament',
            gdprConsent: false,
            honeypot: '',
          });
          setErrorMessage('');
        }, 4000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'A apărut o eroare. Te rugăm încearcă din nou.');
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
    <>
      {/* Rubik Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <ThemeProvider theme={theme}>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-0 md:p-4 animate-fadeIn" style={{ fontFamily: 'Rubik, sans-serif' }}>
        <div className="bg-white rounded-none md:rounded-2xl w-full md:max-w-md h-full md:h-auto p-6 md:p-8 shadow-none md:shadow-2xl relative animate-slideUp overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all"
            aria-label="Închide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {submitStatus === 'success' ? (
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-20 h-20 bg-[#00D186] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#00D186]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1B3E] mb-3">Trimis cu succes! 🎉</h3>
              <p className="text-base md:text-lg text-gray-600 mb-2">
                Cererea ta a fost înregistrată!
              </p>
              <p className="text-sm text-gray-500">
                Vei primi <strong className="text-[#0B1B3E]">5 oferte competitive</strong> de la brokeri certificați în maxim <strong className="text-[#0B1B3E]">24 de ore</strong>.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1B3E] mb-3 mt-2 md:mt-0">Solicită oferte gratuite</h2>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-6">Completează datele și primești 5 oferte personalizate de la brokeri certificați</p>

              <div className="bg-[#00D186] bg-opacity-10 rounded-lg p-4 mb-6 border-2 border-[#00D186] border-opacity-20">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700">Credit solicitat:</span>
                  <span className="font-bold text-base md:text-lg text-[#00D186]">{loanAmount.toLocaleString('en-US')} RON</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-semibold text-gray-700">Rată estimată:</span>
                  <span className="font-bold text-base md:text-lg text-[#00D186]">{Math.round(monthlyPayment).toLocaleString('en-US')} RON/lună</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-5">
                <TextField
                  label="Nume complet"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ion Popescu"
                  inputProps={{ minLength: 3, maxLength: 100 }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#00D186',
                      },
                    },
                  }}
                />

                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ion.popescu@email.com"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#00D186',
                      },
                    },
                  }}
                />

                {/* Phone field with country code dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                  <div className="flex gap-2">
                    <TextField
                      select
                      variant="outlined"
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      SelectProps={{
                        renderValue: (value: unknown) => {
                          const selected = countries.find(c => c.code === value);
                          return selected ? (
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{selected.flag}</span>
                              <span className="font-medium">{selected.code}</span>
                            </div>
                          ) : String(value);
                        }
                      }}
                      sx={{
                        width: '140px',
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: '#00D186',
                          },
                        },
                      }}
                    >
                      {countries.map((country) => (
                        <MenuItem key={country.code} value={country.code}>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{country.flag}</span>
                            <span className="font-medium">{country.code}</span>
                          </div>
                        </MenuItem>
                      ))}
                    </TextField>
                    
                    <TextField
                      variant="outlined"
                      fullWidth
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={formData.countryCode === '+40' ? '712345678' : '...'}
                      inputProps={{ pattern: '[0-9\\+\\-\\s\\(\\)]+' }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: '#00D186',
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                <TextField
                  select
                  label="Tip proprietate"
                  variant="outlined"
                  fullWidth
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#00D186',
                      },
                    },
                  }}
                >
                  <MenuItem value="apartament">Apartament</MenuItem>
                  <MenuItem value="casa">Casă</MenuItem>
                  <MenuItem value="teren">Teren</MenuItem>
                  <MenuItem value="spatiu-comercial">Spațiu comercial</MenuItem>
                </TextField>

                {/* Honeypot field */}
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

                {/* GDPR Consent */}
                <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="gdprConsent" 
                      required 
                      checked={formData.gdprConsent}
                      onChange={(e) => setFormData({...formData, gdprConsent: e.target.checked})}
                      className="mt-1 w-4 h-4 rounded border-2 border-gray-300 text-[#00D186] focus:ring-[#00D186] flex-shrink-0"
                    />
                    <label htmlFor="gdprConsent" className="text-xs md:text-sm text-gray-700 leading-relaxed cursor-pointer">
                      Sunt de acord ca datele mele personale să fie prelucrate de <strong>PUBLISHING OFFICE S.R.L.</strong> (CUI: RO37770955) conform{' '}
                      <a 
                        href="/politica-confidentialitate" 
                        target="_blank"
                        className="text-[#00D186] underline font-semibold hover:text-[#00b874]"
                      >
                        Politicii de Confidențialitate
                      </a>
                      , să fie transmise către brokeri certificați pentru obținerea de oferte competitive și să fie procesate în SUA (Vercel Inc.) pe bază de Standard Contractual Clauses aprobate de UE.{' '}
                      <span className="text-red-500 font-bold">*</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0B1B3E] text-white py-3.5 rounded-lg font-semibold text-base hover:bg-[#162f5e] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
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
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 animate-shake">
                    <p className="text-red-700 text-sm font-semibold text-center">
                      ⚠️ {errorMessage}
                    </p>
                  </div>
                )}

                <div className="bg-[#00D186] bg-opacity-5 rounded-lg p-3 border border-[#00D186] border-opacity-20">
                  <p className="text-xs text-gray-600 text-center leading-relaxed">
                    <strong>🔒 100% Gratuit și Confidențial.</strong> Ne plătesc băncile, nu tu. 
                    Datele tale sunt protejate conform GDPR. 
                    Consultă{' '}
                    <a href="/termeni-conditii" target="_blank" className="text-[#00D186] underline font-semibold hover:text-[#00b874]">
                      Termenii și Condițiile
                    </a>{' '}
                    pentru mai multe detalii.
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
      </ThemeProvider>
    </>
  );
}
