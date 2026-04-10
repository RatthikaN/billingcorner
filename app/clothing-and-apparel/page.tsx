import React from 'react';
import IndustrySolutionLayout from '@/components/IndustrySolutionLayout';

export default function ApparelSolution() {
  return (
    <IndustrySolutionLayout
      title="Clothing & Apparel"
      subtitle="Complete Billing & Inventory Solution for Fashion Retail"
      description={
        <>
          <p className="mb-4">
            Billing Corner is a modern, intelligent billing platform tailored for clothing and apparel businesses of all sizes—from small boutiques to large retail chains. Our system is built to handle the fast-paced nature of fashion retail, where speed, accuracy, and customer experience matter the most.
          </p>
          <p>
            With innovative features like photo-based billing, shopkeepers can simply capture an image of a product to instantly identify and add it to the bill. This reduces dependency on manual entry and speeds up checkout, even during peak hours.
          </p>
        </>
      }
      heroImage="/images/solutions/apparel_hero.png"
      whatWeOfferBgImage="/apparel_what_we_offer_bg.png"
      whatWeOfferTitle="Advanced Features for Apparel Stores"
      features={[
        {
          title: "Variant Management Made Easy",
          description: "Efficiently manage products with multiple sizes, colors, and styles without confusion."
        },
        {
          title: "Barcode & Image Recognition Billing",
          description: "Use barcode scanning or product images to generate bills in seconds."
        },
        {
          title: "Real-Time Inventory Tracking",
          description: "Automatically update stock levels as sales happen, avoiding overstocking or stockouts."
        },
        {
          title: "Discount & Offer Management",
          description: "Easily apply seasonal discounts, combo offers, and promotional pricing."
        },
        {
          title: "Customer Purchase History",
          description: "Maintain records to understand buying behavior and improve sales strategies."
        },
        {
          title: "Multi-Device Accessibility",
          description: "Access your billing system from desktop, tablet, or mobile anytime, anywhere."
        }
      ]}
      whyChooseUs={[
        "Reduced billing time and manual errors",
        "Visual product recognition for faster checkout",
        "Comprehensive variant management (Size/Color/Style)",
        "Powerful backend for non-technical staff",
        "Enhanced shopping experience for customers"
      ]}
      closingTitle="Faster Checkout, Happier Customers"
      closingDescription="Billing Corner is designed to reduce billing time, minimize errors, and enhance the shopping experience. With a clean interface and powerful backend, even non-technical staff can operate it efficiently. Result: Faster checkout, happier customers, and increased sales."
    />
  );
}
