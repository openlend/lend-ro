interface BankLogoProps {
  bankName: string;
  size?: 'sm' | 'md' | 'lg';
}

const bankColors: Record<string, { bg: string; text: string }> = {
  'BT': { bg: '#FF5000', text: '#FFFFFF' },
  'BCR': { bg: '#FFB81C', text: '#000000' },
  'ING': { bg: '#FF6200', text: '#FFFFFF' },
  'RAIFFEISEN': { bg: '#FFED00', text: '#000000' },
  'UNICREDIT': { bg: '#EE2E24', text: '#FFFFFF' },
  'BRD': { bg: '#004494', text: '#FFFFFF' },
  'GARANTI': { bg: '#00A650', text: '#FFFFFF' },
  'EXIM BANCA ROMANEASCA': { bg: '#003D7A', text: '#FFFFFF' },
  'PATRIA BANK': { bg: '#E30613', text: '#FFFFFF' },
  'LIBRA BANK': { bg: '#0066CC', text: '#FFFFFF' },
  'CREDIT EUROPE BANK': { bg: '#1E3C6E', text: '#FFFFFF' },
  'INTESA SAN PAOLO': { bg: '#0047BB', text: '#FFFFFF' },
};

export default function BankLogo({ bankName, size = 'md' }: BankLogoProps) {
  const colors = bankColors[bankName] || { bg: '#2D5F5D', text: '#FFFFFF' };
  
  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-16 h-16 text-lg',
    lg: 'w-20 h-20 text-xl',
  };

  // Get initials (first 2-3 letters)
  const initials = bankName.length <= 3 ? bankName : bankName.substring(0, 2);

  return (
    <div
      className={`${sizeClasses[size]} rounded-2xl flex items-center justify-center font-black shadow-lg`}
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {initials}
    </div>
  );
}
