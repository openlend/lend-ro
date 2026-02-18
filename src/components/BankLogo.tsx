interface BankLogoProps {
  bankName: string;
  size?: 'sm' | 'md' | 'lg';
}

const bankLogos: Record<string, { image?: string; gradient: string; text: string }> = {
  'BT': { 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Banca_Transilvania_logo.svg/200px-Banca_Transilvania_logo.svg.png',
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
    text: 'BT'
  },
  'BCR': { 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/BCR_logo.svg/200px-BCR_logo.svg.png',
    gradient: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
    text: 'BCR'
  },
  'ING': { 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/ING_Group_N.V._Logo.svg/200px-ING_Group_N.V._Logo.svg.png',
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
    text: 'ING'
  },
  'RAIFFEISEN': { 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Raiffeisen_Bank_International_logo.svg/200px-Raiffeisen_Bank_International_logo.svg.png',
    gradient: 'bg-gradient-to-br from-yellow-300 to-yellow-400',
    text: 'RB'
  },
  'UNICREDIT': { 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/UniCredit_logo_%282013%29.svg/200px-UniCredit_logo_%282013%29.svg.png',
    gradient: 'bg-gradient-to-br from-red-500 to-red-600',
    text: 'UC'
  },
  'BRD': { 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/BRD_logo.svg/200px-BRD_logo.svg.png',
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
    gradient: 'bg-gradient-to-br from-blue-800 to-blue-900',
    text: 'CE'
  },
  'INTESA SAN PAOLO': { 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Intesa_Sanpaolo_logo.svg/200px-Intesa_Sanpaolo_logo.svg.png',
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

  // If bank has image, use it
  if (bank.image) {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center bg-white rounded-2xl p-2 shadow-md`}>
        <img 
          src={bank.image} 
          alt={bankName}
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback to gradient if image fails
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.className = `${sizeClasses[size]} ${bank.gradient} rounded-2xl flex items-center justify-center font-black text-white shadow-lg`;
            target.parentElement!.textContent = bank.text;
          }}
        />
      </div>
    );
  }

  // Fallback to gradient + initials
  return (
    <div
      className={`${sizeClasses[size]} ${bank.gradient} rounded-2xl flex items-center justify-center font-black text-white shadow-lg hover:shadow-xl transition-all text-sm`}
    >
      {bank.text}
    </div>
  );
}
