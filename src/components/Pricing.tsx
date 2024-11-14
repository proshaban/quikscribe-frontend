import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Free Trial',
    price: '0',
    description: 'Perfect for trying out our services',
    features: [
      '15 minutes of transcription',
      'Basic speaker detection',
      'Standard export formats',
      'Email support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
    link:'/signup'
  },
  {
    name: 'Pro',
    price: '14.99',
    year: '144',
    description: 'For professionals and content creators',
    features: [
      'Unlimited transcription',
      'Advanced speaker diarization',
      'Priority processing',
      'All export formats',
      'Priority support',
    ],
    cta: 'Get Started',
    highlighted: true,
    link:'/signup'
  },
  {
    name: 'Enterprise',
    price: 'Custom Plan',
    description: 'For teams and organizations',
    features: [
      'Custom transcription volume',
      'Dedicated account manager',
      'SSO integration',
      '24/7 phone support',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    link:'tel:+919082410984'
  },
];

export default function Pricing() {
  return (
    <div className="bg-gray-50 py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your transcription needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 ${tier.highlighted ? 'ring-2 ring-purple-600' : ''
                }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
              <p className="mt-4 text-gray-600">{tier.description}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price !== 'Custom Plan' && <span className="text-base font-medium text-gray-500">$</span>}
                  {tier.price}
                </span>
                {tier.price !== 'Custom Plan' && <span className="text-base font-medium text-gray-500">/month</span>}<br />{tier.year == '144' && <span className="text-base font-medium text-gray-500">or</span>}<br />
                <span className="text-2xl font-bold tracking-tight text-gray-900">{tier.year == '144' && <span className="text-base font-medium text-gray-500">$</span>}
                  {tier.year}</span>{tier.year == '144' && <span className="text-base font-medium text-gray-500">/year</span>} {tier.year == '144' && <span className="text-xl font-bold tracking-tight text-green-600">
                    {'(20% off)'}
                  </span>}
              </p>

              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to={tier.link}>
                <button
                  className={`mt-8 w-full rounded-lg px-4 py-2.5 text-sm font-semibold ${tier.highlighted
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
                    }`}
                >
                  {tier.cta}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}