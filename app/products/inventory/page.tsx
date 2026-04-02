import React from 'react';
import IndustrySolutionLayout from '@/components/IndustrySolutionLayout';

export default function AdvancedInventory() {
  return (
    <IndustrySolutionLayout
      title="Advanced Inventory Management"
      subtitle="Smart Stock Control for Modern Warehousing"
      description={
        <>
          <p className="mb-4">
            Managing stock across multiple locations, racks, and units can be complex. Billing Corner simplifies this with advanced inventory features that provide total control over your products.
          </p>
          <p>
            From HSN/SAC support for GST compliance to rack-wise tracking and batch management, our system ensures you always know exactly what's in stock, where it is, and when to reorder.
          </p>
        </>
      }
      heroImage="/images/solutions/inventory_hero.png"
      whatWeOfferTitle="Inventory Management Redefined"
      features={[
        {
          title: "Rack-Wise Stock Tracking",
          description: "Locate items instantly with rack-level tracking. Ideal for warehouses and large retail stores."
        },
        {
          title: "Multi-Unit Support",
          description: "Manage products in different units—boxes, kilograms, pieces—and handle conversions automatically."
        },
        {
          title: "HSN/SAC & Tax Support",
          description: "Pre-configured HSN codes and GST rates. Automated tax calculations based on product category."
        },
        {
          title: "Automated Reordering",
          description: "Set low-stock thresholds and receive alerts. Generate purchase orders automatically to maintain optimal stock levels."
        },
        {
          title: "Batch & Expiry Management",
          description: "Perfect for pharmaceuticals and perishables. Track batches, manufacturing dates, and expiry with ease."
        },
        {
          title: "Stock Movement History",
          description: "Maintain a detailed audit trail of every stock addition, sale, and transfer. Eliminate stock shrinkage and errors."
        }
      ]}
      whyChooseUs={[
        "Total inventory transparency",
        "Minimize overstocking and wastage",
        "Speed up stock-taking and audits",
        "Streamlined HSN-level GST reporting",
        "Advanced warehouse rack management"
      ]}
      closingTitle="Optimize Your Supply Chain"
      closingDescription="Efficiency starts with accurate inventory. Avoid the costs of tied-up capital and missing stock. Implement Billing Corner's advanced inventory management and take full control of your supply chain."
    />
  );
}
