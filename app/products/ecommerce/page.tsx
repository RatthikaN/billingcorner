import React from 'react';
import IndustrySolutionLayout from '@/components/IndustrySolutionLayout';

export default function EcommerceIntegration() {
  return (
    <IndustrySolutionLayout
      title="E-commerce Integration"
      subtitle="Sell Everywhere, Manage Anywhere"
      description={
        <>
          <p className="mb-4">
            Connect your physical store with the digital world. Our E-commerce integration allows you to sync your inventory, orders, and customer data with popular online storefronts like Shopify, WooCommerce, and Magento.
          </p>
          <p>
            Experience the convenience of a unified business where your online sales automatically update your in-store stock, ensuring you never oversell across multiple channels.
          </p>
        </>
      }
      heroImage="/images/solutions/ecommerce_hero.png"
      whatWeOfferTitle="Unified Commerce Features"
      features={[
        {
          title: "Automated Stock Sync",
          description: "Keep your in-store and online stock levels perfectly aligned. An online sale instantly updates your physical inventory."
        },
        {
          title: "Omnichannel Order Management",
          description: "Manage online and offline orders from a single interface. Fulfill e-commerce orders using your store's stock with ease."
        },
        {
          title: "Centralized Product Listing",
          description: "Add a product once and push it to all your connected online stores. Manage descriptions, prices, and images from Billing Corner."
        },
        {
          title: "Unified Customer Profiles",
          description: "Build a 360-degree view of your customers. Track their purchases whether they buy online or visit your physical store."
        },
        {
          title: "Integrated Shipping Solutions",
          description: "Print shipping labels and track deliveries for your e-commerce orders directly within the platform."
        },
        {
          title: "Cross-Channel Promotions",
          description: "Run marketing campaigns that work across all your sales channels. Offer online coupons for in-store purchases and vice versa."
        }
      ]}
      whyChooseUs={[
        "No more manual inventory updates",
        "Seamless multi-channel selling",
        "Higher accuracy and less overselling",
        "Support for top e-commerce platforms",
        "Real-time data at your fingertips"
      ]}
      closingTitle="Reach More Customers"
      closingDescription="The future of retail is omnichannel. Don't limit your business to just one channel. Scale comfortably with our integrated e-commerce solutions and watch your sales grow."
    />
  );
}
