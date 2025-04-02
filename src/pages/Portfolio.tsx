import React from 'react';

const portfolioItems = [
  {
    title: "E-commerce Growth Campaign",
    client: "Fashion Retailer",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    results: "250% increase in online sales",
    description: "Comprehensive digital marketing campaign including social media ads and email marketing."
  },
  {
    title: "Local Business Expansion",
    client: "Restaurant Chain",
    image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?auto=format&fit=crop&w=800&q=80",
    results: "400% increase in local searches",
    description: "Local SEO and Google Ads campaign targeting specific neighborhoods."
  },
  {
    title: "Brand Awareness Campaign",
    client: "Tech Startup",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    results: "1M+ social media impressions",
    description: "Multi-platform social media campaign focusing on brand storytelling."
  },
  {
    title: "Lead Generation Program",
    client: "B2B Software Company",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    results: "180% increase in qualified leads",
    description: "Integrated campaign combining LinkedIn Ads and content marketing."
  }
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Our Success Stories</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">Client: {item.client}</p>
              <p className="text-green-600 font-semibold mb-4">{item.results}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}