import React from 'react';
import { Search, BarChart3, MessageSquare, Target, PenTool, BrainCircuit } from 'lucide-react';

const ServiceSection = ({ title, description, services }) => (
  <div className="container mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold text-center mb-6">{title}</h1>
    <p className="text-xl text-gray-600 text-center mb-12">{description}</p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export function AdvertisingServices() {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Search Engine Marketing",
      description: "Strategic PPC campaigns on Google and Bing to drive qualified traffic"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Social Media Advertising",
      description: "Targeted ads on Facebook, Instagram, and LinkedIn"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Display Advertising",
      description: "Visual ads across the Google Display Network"
    }
  ];

  return (
    <ServiceSection
      title="Advertising Services"
      description="Drive results with data-driven digital advertising campaigns"
      services={services}
    />
  );
}

export function ContentServices() {
  const services = [
    {
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      title: "Content Creation",
      description: "Engaging blog posts, articles, and website copy"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: "Social Media Content",
      description: "Creative posts and stories for social platforms"
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "SEO Content",
      description: "Optimized content for search engine visibility"
    }
  ];

  return (
    <ServiceSection
      title="Content Services"
      description="Compelling content that connects with your audience"
      services={services}
    />
  );
}

export function StrategyServices() {
  const services = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-blue-600" />,
      title: "Digital Strategy",
      description: "Comprehensive digital marketing roadmaps"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Market Analysis",
      description: "In-depth competitor and market research"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Performance Optimization",
      description: "Data-driven campaign optimization"
    }
  ];

  return (
    <ServiceSection
      title="Strategy Services"
      description="Strategic planning for digital success"
      services={services}
    />
  );
}