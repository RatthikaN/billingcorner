import React from 'react';
import IndustrySolutionLayout from '@/components/IndustrySolutionLayout';

export default function RetailSolution() {
  return (
    <IndustrySolutionLayout
      title="Retail & Supermarkets"
      subtitle="Smart Retail Solutions for Modern Businesses"
      description={
        <>
          <p className="mb-4">
            In today’s fast-paced world, retail and supermarket businesses demand efficiency, accuracy, and seamless customer experiences. We provide innovative solutions designed to simplify operations, enhance productivity, and drive growth.
          </p>
          <p>
            From small retail stores to large supermarket chains, our systems are built to handle everything—from inventory management to billing—with precision and ease.
          </p>
        </>
      }
      heroImage="/images/solutions/retail_hero.png"
      whatWeOfferBgImage="/images/solutions/retail_what_we_offer_bg.png"
      features={[
        {
          title: "Point of Sale (POS) Systems",
          description: "Fast, reliable, and user-friendly billing systems that ensure smooth checkout experiences for your customers while reducing wait times."
        },
        {
          title: "Inventory Management",
          description: "Track stock levels in real-time, avoid shortages, and reduce wastage with intelligent inventory control."
        },
        {
          title: "Billing & Invoicing",
          description: "Automated billing solutions that generate accurate invoices, manage taxes, and streamline transactions."
        },
        {
          title: "Customer Management",
          description: "Build strong customer relationships with loyalty programs, purchase tracking, and personalized offers."
        },
        {
          title: "Multi-Store Management",
          description: "Manage multiple outlets from a single dashboard with centralized control and real-time insights."
        }
      ]}
      whyChooseUs={[
        "Easy-to-use interface",
        "Real-time data tracking",
        "Secure and reliable systems",
        "Scalable for growing businesses",
        "24/7 realtime sync"
      ]}
      closingTitle="Empowering Retail Growth"
      closingDescription="We help retailers stay ahead in a competitive market by combining technology with simplicity. Our solutions are designed to improve efficiency, reduce operational costs, and enhance customer satisfaction. Whether you run a local store or a supermarket chain, we provide the tools you need to succeed in the modern retail landscape."
    />
  );
}
