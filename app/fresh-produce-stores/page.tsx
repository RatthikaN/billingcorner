import React from 'react';
import IndustrySolutionLayout from '@/components/IndustrySolutionLayout';

export default function FreshProduceSolution() {
  return (
    <IndustrySolutionLayout
      title="Fresh Produce Stores"
      subtitle="Powerful and easy-to-use billing software for fresh produce stores designed to simplify your daily operations."
      description={
        <>
          <p className="mb-4">
            At Billing Corner, we offer powerful and easy-to-use billing software for fresh produce stores designed to simplify your daily operations. Whether you run a vegetable shop, fruit store, or organic produce market, our POS billing software for grocery and produce stores helps you manage sales, stock, and customers effortlessly.
          </p>
          <p>
            From weighing items to generating quick bills, our system ensures accuracy and speed at every step.
          </p>
        </>
      }
      heroImage="/images/solutions/fresh_produce_hero.png"
      whatWeOfferBgImage="/images/solutions/fresh_produce_what_we_offer_bg.png"
      whatWeOfferTitle="Why Choose Billing Corner for Fresh Produce Stores?"
      features={[
        {
          title: "Fast Billing with Weight Integration",
          description: "Generate instant bills with our billing software for vegetable and fruit shops, supporting weighing scale integration for accurate pricing."
        },
        {
          title: "Simple POS System",
          description: "Our user-friendly POS system for grocery stores helps you handle high customer flow smoothly."
        },
        {
          title: "Inventory Management",
          description: "Track perishable stock in real-time using our inventory management software for fresh produce stores to reduce wastage."
        },
        {
          title: "GST & Tax Billing",
          description: "Stay compliant with automated tax calculations using our GST billing software for grocery stores."
        },
        {
          title: "Daily Sales Reports",
          description: "Monitor performance with detailed insights using our retail billing software for produce shops."
        },
        {
          title: "Multi-Device & Cloud Access",
          description: "Access your data anytime with our cloud-based billing software for grocery and vegetable stores."
        }
      ]}
      whyChooseUs={[
        "Perfect for Vegetable & Fruit Shops",
        "Supports Organic Produce Stores",
        "Ideal for Local Kirana Shops",
        "Great for Farmers Market Vendors",
        "Easy handling of perishable stock"
      ]}
      closingTitle="Manage Your Store with Ease"
      closingDescription="Billing Corner provides an all-in-one billing and inventory solution for fresh produce stores to help you reduce manual work, improve billing speed, and manage stock efficiently."
    />
  );
}
