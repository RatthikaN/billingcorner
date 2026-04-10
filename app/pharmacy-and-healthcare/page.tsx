import React from 'react';
import IndustrySolutionLayout from '@/components/IndustrySolutionLayout';

export default function PharmacySolution() {
  return (
    <IndustrySolutionLayout
      title="Pharmacy & Healthcare"
      subtitle="Smart, Secure & Accurate Billing for Medical Stores"
      description={
        <>
          <p className="mb-4">
            Billing Corner provides a highly reliable and precise billing system for pharmacies and healthcare businesses. We understand that medical billing requires strict accuracy, compliance, and speed—our platform is built to meet all these demands.
          </p>
          <p>
            With intelligent product recognition and smart billing tools, pharmacists can quickly process prescriptions and generate invoices without delays or mistakes.
          </p>
        </>
      }
      heroImage="/images/solutions/pharmacy_hero.png"
      whatWeOfferBgImage="/images/solutions/pharmacy_what_we_offer_bg.png"
      whatWeOfferTitle="Advanced Features for Pharmacies"
      features={[
        {
          title: "Batch & Expiry Management",
          description: "Track medicines by batch number and expiry date to ensure safety and compliance."
        },
        {
          title: "Fast Medicine Billing",
          description: "Quickly search or scan medicines using barcode or photo-based identification."
        },
        {
          title: "Prescription-Based Billing Support",
          description: "Easily manage and bill based on doctor prescriptions."
        },
        {
          title: "GST-Compliant Invoicing",
          description: "Automatically generate tax-compliant bills and detailed reports."
        },
        {
          title: "Stock Alerts & Notifications",
          description: "Get alerts for low stock and expiring medicines to avoid losses."
        },
        {
          title: "Secure Data Handling",
          description: "Protect sensitive customer and medical data with strong security measures."
        }
      ]}
      whyChooseUs={[
        "Reduces human errors in billing",
        "Saves time during busy hours",
        "Ensures regulatory compliance",
        "Improves overall store efficiency",
        "Reliable batch and expiry tracking"
      ]}
      closingTitle="Efficiency Meets Compliance"
      closingDescription="Billing Corner ensures that your pharmacy operations are smooth, compliant, and efficient. From managing daily sales to tracking critical inventory, everything is streamlined in one platform. Result: Faster service, accurate billing, and better patient satisfaction."
    />
  );
}
