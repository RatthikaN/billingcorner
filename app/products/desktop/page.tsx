import React from 'react';
import IndustrySolutionLayout from '@/components/IndustrySolutionLayout';

export default function DesktopBilling() {
  return (
    <IndustrySolutionLayout
      title="Desktop Billing (Windows)"
      subtitle="Powerful Offline-First Billing for Windows"
      description={
        <>
          <p className="mb-4">
            Our Desktop Billing software for Windows is designed for businesses that need high performance, offline reliability, and deep integration with hardware like thermal printers and barcode scanners.
          </p>
          <p>
            Experience the speed of a native application with the power of cloud sync. Work seamlessly even without an internet connection and sync your data automatically when you're back online.
          </p>
        </>
      }
      heroImage="/images/solutions/desktop_hero.png"
      features={[
        {
          title: "Offline-First Performance",
          description: "Continue billing without interruptions even during internet outages. Your data is stored locally and syncs automatically."
        },
        {
          title: "Thermal Printer Support",
          description: "Native support for all major thermal printers. Custom receipt templates with your branding and GST details."
        },
        {
          title: "Barcode Scanner Integration",
          description: "Blazing fast billing with plug-and-play support for laser and 2D barcode scanners."
        },
        {
          title: "Local Data Backup",
          description: "Keep your business data safe with automated local backups and secure cloud replication."
        },
        {
          title: "Keyboard Shortcuts",
          description: "Designed for power users. Perform all billing actions and searches using intuitive keyboard shortcuts."
        },
        {
          title: "Multi-Window Tasking",
          description: "Open multiple invoices or reports simultaneously for a truly productive workflow."
        }
      ]}
      whyChooseUs={[
        "Superior speed and reliability",
        "Works 100% offline",
        "One-time setup with easy updates",
        "Deep hardware integration",
        "Enterprise-grade security"
      ]}
      closingTitle="The Performance Your Business Deserves"
      closingDescription="Stop waiting for slow web pages. Our Windows desktop app provides the instantaneous response time required for high-traffic retail environments. Download the future of desktop billing today."
    />
  );
}
