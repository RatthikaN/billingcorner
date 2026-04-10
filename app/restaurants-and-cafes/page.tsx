import React from 'react';
import IndustrySolutionLayout from '@/components/IndustrySolutionLayout';

export default function RestaurantSolution() {
  return (
    <IndustrySolutionLayout
      title="Restaurants & Cafes"
      subtitle="The best billing software for restaurants and cafes to simplify daily operations and improve customer experience."
      description={
        <>
          <p className="mb-4">
            At Billing Corner, we provide the best billing software for restaurants and cafes to simplify daily operations and improve customer experience. Whether you run a fine dining restaurant, café, bakery, or quick service restaurant (QSR), our restaurant POS billing software is designed to handle your business efficiently.
          </p>
          <p>
            Our solution helps you manage billing, orders, inventory, and reports — all in one place.
          </p>
        </>
      }
      heroImage="/images/solutions/restaurant_hero.png"
      whatWeOfferBgImage="/images/solutions/restaurants_what_we_offer_bg.png"
      whatWeOfferTitle="Why Choose Billing Corner for Your Restaurant or Café?"
      features={[
        {
          title: "Fast & Accurate Billing",
          description: "Generate bills instantly with our fast restaurant billing software, reducing wait times and improving customer satisfaction."
        },
        {
          title: "Table & Order Management",
          description: "Manage dine-in, takeaway, and online orders seamlessly using our restaurant POS system."
        },
        {
          title: "Menu Customization",
          description: "Easily update menu items, pricing, and combos with our flexible cafe billing software."
        },
        {
          title: "Inventory Tracking",
          description: "Track stock and ingredients in real-time with our restaurant inventory management software."
        },
        {
          title: "GST & Tax Compliance",
          description: "Automatically generate GST invoices using our GST billing software for restaurants."
        },
        {
          title: "Sales Reports & Insights",
          description: "Access powerful analytics and reports with our restaurant management software to grow your business."
        }
      ]}
      whyChooseUs={[
        "Perfect for Fine Dining & QSR",
        "Includes Bakery & Food Truck support",
        "Seamless Kitchen Order Tickets (KOT)",
        "Cloud-based access from any device",
        "Multi-outlet management support"
      ]}
      closingTitle="Grow Your Food Business with Confidence"
      closingDescription="Billing Corner offers an all-in-one restaurant billing software solution to streamline operations, increase efficiency, and boost profits. Focus on serving great food while we handle your billing and management needs."
    />
  );
}
