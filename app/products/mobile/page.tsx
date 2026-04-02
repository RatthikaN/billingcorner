import React from 'react';
import IndustrySolutionLayout from '@/components/IndustrySolutionLayout';

export default function MobileApp() {
  return (
    <IndustrySolutionLayout
      title="Mobile App (iOS/Android)"
      subtitle="Multi-Platform Mobility for Your Business"
      description={
        <>
          <p className="mb-4">
            Take your business wherever you go. Our mobile application for iOS and Android brings the full power of Billing Corner to your pocket, allowing you to manage sales, track inventory, and generate invoices on the move.
          </p>
          <p>
            Whether you're at a trade show, visiting a client, or managing your store from home, our mobile app keeps you connected to your business in real-time.
          </p>
        </>
      }
      heroImage="/images/solutions/mobile_hero.png"
      whatWeOfferTitle="Key Mobile Features"
      features={[
        {
          title: "Camera-Based Barcode Scanning",
          description: "Use your smartphone's camera as a powerful barcode scanner to add products to bills instantly."
        },
        {
          title: "WhatsApp & Email Integration",
          description: "Generate PDF invoices and share them directly with customers via WhatsApp, Email, or SMS in one tap."
        },
        {
          title: "Real-Time Stock Alerts",
          description: "Receive push notifications for low stock, new orders, and daily sales summaries directly on your phone."
        },
        {
          title: "Mobile POS Billing",
          description: "A simplified, touch-optimized billing interface designed for fast transactions on smaller screens."
        },
        {
          title: "Bluetooth Printer Support",
          description: "Connect to portable Bluetooth thermal printers for on-the-spot receipt printing."
        },
        {
          title: "Offline Sync Capabilities",
          description: "Record sales even without an internet connection. The app syncs data automatically once connectivity is restored."
        }
      ]}
      whyChooseUs={[
        "True mobility for modern merchants",
        "Available on iOS and Android",
        "Optimized for low-bandwidth usage",
        "Biometric security (FaceID/Fingerprint)",
        "Zero-configuration setup"
      ]}
      closingTitle="Your Business, Everywhere"
      closingDescription="Empower your staff with the ability to bill from anywhere in the store. Reduce counter queues and improve customer satisfaction with our state-of-the-art mobile billing solution."
    />
  );
}
