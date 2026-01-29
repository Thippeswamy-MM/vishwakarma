import { Truck, Tag, Sparkles } from 'lucide-react';

export default function PromoStrip() {
  const promos = [
    { icon: <Tag className="h-4 w-4" />, title: 'Deal of the Month', desc: 'Up to 40% off' },
    { icon: <Truck className="h-4 w-4" />, title: 'Free Shipping', desc: 'on prepaid orders above ₹999' },
    { icon: <Sparkles className="h-4 w-4" />, title: '100% Verified', desc: 'Quality checked listings' },
  ];

  return (
    <div className="bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-3">
          {promos.map((p) => (
            <div key={p.title} className="flex items-center gap-2 text-sm text-neutral-800">
              <span className="text-primary-700">{p.icon}</span>
              <div className="leading-tight">
                <div className="font-semibold">{p.title}</div>
                <div className="text-neutral-500 text-xs">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


