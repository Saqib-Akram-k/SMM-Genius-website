import React from 'react';
import { Facebook, Instagram, Globe, MessageSquare, Megaphone, Search, Mail } from 'lucide-react';

export const individualServices = [
  {
    name: "Facebook & Instagram Ads",
    icon: <div className="flex space-x-2"><Facebook className="w-8 h-8 text-blue-600" /><Instagram className="w-8 h-8 text-blue-600" /></div>,
    basic: 300,
    standard: 500,
    premium: 800,
    features: ["Ad Campaign Setup", "Audience Targeting", "Performance Tracking", "Monthly Reports"]
  },
  {
    name: "Google Ads Management",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    basic: 350,
    standard: 600,
    premium: 900,
    features: ["Keyword Research", "Ad Copy Creation", "Conversion Tracking", "ROI Optimization"]
  },
  {
    name: "Social Media Management",
    icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
    basic: 250,
    standard: 450,
    premium: 700,
    features: ["Content Creation", "Community Management", "Analytics Reports", "Strategy Development"]
  },
  {
    name: "Event Promotion",
    icon: <Megaphone className="w-8 h-8 text-blue-600" />,
    basic: 400,
    standard: 700,
    premium: 1000,
    features: ["Event Strategy", "Ad Campaigns", "Social Media Promotion", "Performance Analysis"]
  },
  {
    name: "Local SEO Optimization",
    icon: <Search className="w-8 h-8 text-blue-600" />,
    basic: 300,
    standard: 500,
    premium: 750,
    features: ["Local Keyword Research", "GMB Optimization", "Citation Building", "Local Content Strategy"]
  },
  {
    name: "Email Marketing",
    icon: <Mail className="w-8 h-8 text-blue-600" />,
    basic: 250,
    standard: 450,
    premium: 700,
    features: ["Email Template Design", "List Management", "Campaign Analytics", "A/B Testing"]
  }
];

export const bundlePlans = [
  {
    name: "Starter Growth Plan",
    price: 700,
    services: [
      "Social Media Management",
      "Meta Ads Management",
      "Basic Analytics",
      "Monthly Strategy Call"
    ]
  },
  {
    name: "Business Accelerator",
    price: 1200,
    services: [
      "Facebook & Instagram Ads",
      "Google Ads Management",
      "Email Marketing",
      "Bi-weekly Strategy Calls",
      "Advanced Analytics Dashboard"
    ]
  },
  {
    name: "Complete Digital Domination",
    price: 2000,
    services: [
      "Facebook & Instagram Ads",
      "Google Ads Management",
      "Social Media Management",
      "Meta Ads Management",
      "Email Marketing",
      "Event Promotion",
      "Weekly Strategy Calls",
      "Priority Support"
    ]
  }
];