interface BankLogoProps {
  bankName: string;
  size?: 'sm' | 'md' | 'lg';
}

const bankLogos: Record<string, { image?: string; gradient: string; text: string }> = {
  'BT': { 
    image: '/bank-logos/bt.png',
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
    text: 'BT'
  },
  'BCR': { 
    image: '/bank-logos/bcr.png',
    gradient: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
    text: 'BCR'
  },
  'ING': { 
    image: '/bank-logos/ing.png',
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
    text: 'ING'
  },
  'RAIFFEISEN': { 
    image: '/bank-logos/raiffeisen.png',
    gradient: 'bg-gradient-to-br from-yellow-300 to-yellow-400',
    text: 'RB'
  },
  'UNICREDIT': { 
    image: '/bank-logos/unicredit.png',
    gradient: 'bg-gradient-to-br from-red-500 to-red-600',
    text: 'UC'
  },
  'BRD': { 
    image: '/bank-logos/brd.png',
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-700',
    text: 'BRD'
  },
  'GARANTI': { 
    image: '/bank-logos/garanti.png',
    gradient: 'bg-gradient-to-br from-green-500 to-green-600',
    text: 'GB'
  },
  'EXIM BANCA ROMANEASCA': { 
    image: '/bank-logos/exim.png',
    gradient: 'bg-gradient-to-br from-blue-700 to-blue-800',
    text: 'EX'
  },
  'PATRIA BANK': { 
    gradient: 'bg-gradient-to-br from-red-600 to-red-700',
    text: 'PB'
  },
  'LIBRA BANK': { 
    image: '/bank-logos/libra.png',
    gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
    text: 'LB'
  },
  'CREDIT EUROPE BANK': { 
    image: '/bank-logos/credit-europe.png',
    gradient: 'bg-gradient-to-br from-blue-800 to-blue-900',
    text: 'CE'
  },
  'INTESA SAN PAOLO': { 
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-800',
    text: 'IS'
  },
};

export default function BankLogo({ bankName, size = 'md' }: BankLogoProps) {
  const bank = bankLogos[bankName] || { 
    gradient: 'bg-gradient-to-br from-sage to-mint',
    text: bankName.substring(0, 2)
  };
  
  // Logo-uri wide (rectangular, nu pătrate)
  const sizeClasses = {
    sm: 'h-8 md:h-10 w-auto max-w-[60px] md:max-w-[80px]',
    md: 'h-10 md:h-12 w-auto max-w-[90px] md:max-w-[120px]',
    lg: 'h-12 md:h-14 w-auto max-w-[110px] md:max-w-[140px]',
  };

  // If bank has local image, use it
  if (bank.image) {
    return (
      <div className="flex items-center justify-center bg-white rounded-lg md:rounded-xl px-2 md:px-3 py-1.5 md:py-2 shadow-sm md:shadow-md border border-gray-100 min-h-[36px] md:min-h-[48px]">
        <img 
          src={bank.image} 
          alt={`${bankName} logo`}
          className={`${sizeClasses[size]} object-contain`}
          loading="lazy"
          onError={(e) => {
            // Fallback to gradient if local image fails
            const target = e.target as HTMLImageElement;
            const parent = target.parentElement;
            if (parent) {
              target.style.display = 'none';
              parent.className = `w-16 h-16 ${bank.gradient} rounded-2xl flex items-center justify-center font-black text-white shadow-lg text-sm`;
              parent.textContent = bank.text;
            }
          }}
        />
      </div>
    );
  }

  // Gradient + initials fallback (pătrat pentru consistency)
  return (
    <div
      className={`w-16 h-16 ${bank.gradient} rounded-2xl flex items-center justify-center font-black text-white shadow-lg hover:shadow-xl transition-all text-sm`}
    >
      {bank.text}
    </div>
  );
}
