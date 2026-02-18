interface BankLogoProps {
  bankName: string;
  size?: 'sm' | 'md' | 'lg';
}

const bankStyles: Record<string, { gradient: string; icon: string }> = {
  'BT': { 
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
    icon: 'BT'
  },
  'BCR': { 
    gradient: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
    icon: 'BCR'
  },
  'ING': { 
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
    icon: 'ING'
  },
  'RAIFFEISEN': { 
    gradient: 'bg-gradient-to-br from-yellow-300 to-yellow-400',
    icon: 'RB'
  },
  'UNICREDIT': { 
    gradient: 'bg-gradient-to-br from-red-500 to-red-600',
    icon: 'UC'
  },
  'BRD': { 
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-700',
    icon: 'BRD'
  },
  'GARANTI': { 
    gradient: 'bg-gradient-to-br from-green-500 to-green-600',
    icon: 'GB'
  },
  'EXIM BANCA ROMANEASCA': { 
    gradient: 'bg-gradient-to-br from-blue-700 to-blue-800',
    icon: 'EX'
  },
  'PATRIA BANK': { 
    gradient: 'bg-gradient-to-br from-red-600 to-red-700',
    icon: 'PB'
  },
  'LIBRA BANK': { 
    gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
    icon: 'LB'
  },
  'CREDIT EUROPE BANK': { 
    gradient: 'bg-gradient-to-br from-blue-800 to-blue-900',
    icon: 'CE'
  },
  'INTESA SAN PAOLO': { 
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-800',
    icon: 'IS'
  },
};

export default function BankLogo({ bankName, size = 'md' }: BankLogoProps) {
  const style = bankStyles[bankName] || { 
    gradient: 'bg-gradient-to-br from-sage to-mint',
    icon: bankName.substring(0, 2)
  };
  
  const sizeClasses = {
    sm: 'w-12 h-12 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-20 h-20 text-base',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${style.gradient} rounded-2xl flex items-center justify-center font-black text-white shadow-lg hover:shadow-xl transition-all`}
    >
      {style.icon}
    </div>
  );
}
