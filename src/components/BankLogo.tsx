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
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
    text: 'ING'
  },
  'RAIFFEISEN': { 
    image: '/bank-logos/raiffeisen.png',
    gradient: 'bg-gradient-to-br from-yellow-300 to-yellow-400',
    text: 'RB'
  },
  'UNICREDIT': { 
    gradient: 'bg-gradient-to-br from-red-500 to-red-600',
    text: 'UC'
  },
  'BRD': { 
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-700',
    text: 'BRD'
  },
  'GARANTI': { 
    gradient: 'bg-gradient-to-br from-green-500 to-green-600',
    text: 'GB'
  },
  'EXIM BANCA ROMANEASCA': { 
    gradient: 'bg-gradient-to-br from-blue-700 to-blue-800',
    text: 'EX'
  },
  'PATRIA BANK': { 
    gradient: 'bg-gradient-to-br from-red-600 to-red-700',
    text: 'PB'
  },
  'LIBRA BANK': { 
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
  
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  // If bank has local image, use it
  if (bank.image) {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center bg-white rounded-2xl p-3 shadow-md border border-gray-100`}>
        <img 
          src={bank.image} 
          alt={`${bankName} logo`}
          className="w-full h-full object-contain"
          loading="lazy"
          onError={(e) => {
            // Fallback to gradient if local image fails
            const target = e.target as HTMLImageElement;
            const parent = target.parentElement;
            if (parent) {
              target.style.display = 'none';
              parent.className = `${sizeClasses[size]} ${bank.gradient} rounded-2xl flex items-center justify-center font-black text-white shadow-lg`;
              parent.textContent = bank.text;
            }
          }}
        />
      </div>
    );
  }

  // Gradient + initials fallback
  return (
    <div
      className={`${sizeClasses[size]} ${bank.gradient} rounded-2xl flex items-center justify-center font-black text-white shadow-lg hover:shadow-xl transition-all text-sm`}
    >
      {bank.text}
    </div>
  );
}
