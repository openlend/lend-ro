'use client';

interface BankCardProps {
  name: string;
  logo?: string;
  bestRate: string;
  rateType: string;
  productCount: number;
  features: string[];
}

export default function BankCard({
  name,
  logo,
  bestRate,
  rateType,
  productCount,
  features
}: BankCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 border border-gray-200">
      {/* Bank Logo/Name */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        {logo && (
          <img src={logo} alt={`${name} logo`} className="h-12 w-auto" />
        )}
      </div>

      {/* Best Rate */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-1">De la:</p>
        <p className="text-4xl font-bold text-green-600">{bestRate}%</p>
        <p className="text-xs text-gray-500">{rateType}</p>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Product Count */}
      <p className="text-xs text-gray-500 mb-4">
        {productCount} produse disponibile
      </p>

      {/* CTA Button */}
      <button
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        onClick={() => alert('Lead form - coming soon!')}
      >
        Solicită ofertă →
      </button>
    </div>
  );
}
