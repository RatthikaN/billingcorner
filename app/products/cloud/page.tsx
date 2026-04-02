import React from 'react';
import IndustrySolutionLayout from '@/components/IndustrySolutionLayout';

export default function CloudDashboard() {
  return (
    <IndustrySolutionLayout
      title="Cloud Dashboard"
      subtitle="Centrally Manage Your Entire Business"
      description={
        <>
          <p className="mb-4">
            The Billing Corner Cloud Dashboard provides a centralized hub for managing your multi-store or single-store operations from any web browser. Get a bird’s-eye view of your business performance with real-time analytics and remote management tools.
          </p>
          <p>
            Whether you're at home or on vacation, our secure cloud platform keeps you in control with instant access to sales data, inventory levels, and customer records.
          </p>
        </>
      }
      heroImage="/images/solutions/cloud_hero.png"
      whatWeOfferTitle="Powerful Analytics & Management"
      features={[
        {
          title: "Multi-Store Centralization",
          description: "Manage multiple outlets from a single login. Track store-wise performance, transfer stock, and consolidate reports."
        },
        {
          title: "Real-Time Sales Analytics",
          description: "Visual dashboards with charts and trends. Monitor your top-selling products, hourly sales peaks, and profit margins."
        },
        {
          title: "Centralized Inventory Control",
          description: "Update prices, add new products, and manage stock levels across all your branches from one place."
        },
        {
          title: "Remote User Management",
          description: "Control access levels for your staff. Assign roles like Admin, Cashier, or Manager without being physically present at the store."
        },
        {
          title: "GST Tax Computation",
          description: "Automated calculation of CGST, SGST, and IGST with detailed tax-wise reports for easy filing."
        },
        {
          title: "Cloud Backup & Security",
          description: "Your business-critical data is automatically backed up in real-time with enterprise-grade encryption and 99.9% uptime."
        }
      ]}
      whyChooseUs={[
        "Access from any browser/device",
        "Secure bank-grade encryption",
        "Real-time data synchronization",
        "Powerful multi-store reporting",
        "Zero-maintenance cloud hosting"
      ]}
      closingTitle="Data-Driven Decisions"
      closingDescription="Stop guessing and start growing. Our Cloud Dashboard gives you the insights needed to optimize your inventory, understand customer behavior, and scale your business with confidence."
    />
  );
}
