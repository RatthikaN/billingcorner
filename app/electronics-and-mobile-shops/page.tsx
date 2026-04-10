import React from 'react';
import IndustrySolutionLayout from '@/components/IndustrySolutionLayout';

export default function ElectronicsSolution() {
  return (
    <IndustrySolutionLayout
      title="Electronics & Mobile Shops"
      subtitle="Powering Smart Retail for Electronics & Mobile Stores"
      description={
        <>
          <p className="mb-4">
            In the fast-evolving world of electronics and mobile retail, staying updated and efficient is essential. We provide advanced solutions tailored specifically for electronics and mobile shops to simplify operations, improve sales, and deliver exceptional customer experiences.
          </p>
          <p>
            From smartphones and accessories to home appliances and gadgets, our systems help you manage everything with accuracy and ease.
          </p>
        </>
      }
      heroImage="/images/solutions/electronics_hero.png"
      whatWeOfferBgImage="/images/solutions/electronics_bg.png"
      features={[
        {
          title: "Smart Billing (POS) System",
          description: "Quick and seamless billing for mobiles, accessories, and electronics with barcode support and fast checkout."
        },
        {
          title: "Product & Inventory Management",
          description: "Easily manage a wide range of products like smartphones, chargers, earphones, and appliances with real-time stock tracking."
        },
        {
          title: "IMEI & Serial Number Tracking",
          description: "Track every device with IMEI/serial number management to ensure better control, warranty tracking, and security."
        },
        {
          title: "GST Billing & Invoicing",
          description: "Generate accurate GST invoices, manage taxes efficiently, and stay compliant with regulations."
        },
        {
          title: "Warranty & Service Management",
          description: "Keep track of product warranties and service history to provide better after-sales support."
        },
        {
          title: "Sales & Profit Reports",
          description: "Get detailed insights into daily sales, best-selling products, and overall business performance."
        }
      ]}
      whyChooseUs={[
        "Designed for electronics & mobile businesses",
        "Fast and reliable performance",
        "Easy product and stock handling",
        "Secure data management",
        "Scalable for growing stores"
      ]}
      closingTitle="Grow Your Electronics Business with Confidence"
      closingDescription="Our solutions are built to handle the complexity of electronics retail while keeping operations simple. We help you reduce manual work, improve accuracy, and enhance customer satisfaction. Whether you run a small mobile shop or a large electronics showroom, we provide the technology you need to stay ahead in today’s competitive market."
    />
  );
}
