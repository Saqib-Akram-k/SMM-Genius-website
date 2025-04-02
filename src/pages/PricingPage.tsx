import React, { useState } from 'react';
import { Package, CheckCircle2 } from 'lucide-react';
import { individualServices, bundlePlans } from '../data/pricing';

export function PricingPage() {
  const [showBundlePlans, setShowBundlePlans] = useState(true);

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Flexible Pricing Plans</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            className={`px-6 py-2 rounded-full ${showBundlePlans ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setShowBundlePlans(true)}
          >
            Bundle Plans
          </button>
          <button 
            className={`px-6 py-2 rounded-full ${!showBundlePlans ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setShowBundlePlans(false)}
          >
            Individual Services
          </button>
        </div>
      </div>

      {showBundlePlans ? (
        <div className="grid lg:grid-cols-3 gap-8">
          {bundlePlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden ${index === 1 ? 'transform scale-105 border-2 border-blue-500' : ''}`}>
              <div className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Package className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg transition duration-300 ${
                  index === 1 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {individualServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{service.name}</h3>
                <div className="space-y-4">
                  <PricingTier
                    name="Basic"
                    price={service.basic}
                    features={service.features}
                  />
                  <PricingTier
                    name="Standard"
                    price={service.standard}
                    features={service.features}
                    highlighted
                  />
                  <PricingTier
                    name="Premium"
                    price={service.premium}
                    features={service.features}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PricingTier({ name, price, features, highlighted = false }) {
  return (
    <div className={`p-6 rounded-lg ${highlighted ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'}`}>
      <div className="text-center mb-4">
        <h4 className="font-semibold mb-2">{name}</h4>
        <div className="text-2xl font-bold">${price}<span className="text-sm text-gray-600">/mo</span></div>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full mt-4 py-2 rounded-lg transition duration-300 ${
        highlighted 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}>
        Choose Plan
      </button>
    </div>
  );
}