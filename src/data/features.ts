export interface Feature {
  id: string;
  image: string;
  title: string;
  desc: string;
}

export const featureList: Feature[] = [
  { 
    id: 'billing-invoices',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800', 
    title: 'Sales & Service Invoices', 
    desc: 'Generate professional GST-ready invoices for goods and services. Customize templates to match your brand and automate your billing workflow effortlessly.' 
  },
  { 
    id: 'pos-billing',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800', 
    title: 'POS Billing', 
    desc: 'Accelerate retail checkouts with a high-performance touch-optimized POS interface. Features quick product search and instant receipt generation for a smooth customer experience.' 
  },
  { 
    id: 'voice-search',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800', 
    title: 'Voice based search', 
    desc: 'Navigate your inventory and find products instantly using advanced voice recognition. Reduce manual typing and speed up your billing process with hands-free search capabilities.' 
  },
  { 
    id: 'gst-calculation',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', 
    title: 'GST Calculation', 
    desc: 'Simplify tax compliance with automated CGST, SGST, and IGST calculations. Our engine accurately applies taxes based on location and HSN codes for 100% accuracy.' 
  },
  { 
    id: 'smart-inventory',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800', 
    title: 'Smart Inventory', 
    desc: 'Manage diverse product types with custom units of measurement and integrated HSN/SAC support. Track stock levels accurately across your entire catalog.' 
  },
  { 
    id: 'bulk-updates',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', 
    title: 'Bulk Updates', 
    desc: 'Save time by performing mass updates on prices, stock levels, and product categories. Efficiently manage large inventories with simple, filtered bulk editing tools.' 
  },
  { 
    id: 'rack-management',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800', 
    title: 'Rack Management', 
    desc: 'Organize your warehouse or store with a precise rack and shelf tracking system. Locate items instantly and optimize pick-and-pack efficiency with visual storage mapping.' 
  },
  { 
    id: 'vendor-party-management',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800', 
    title: 'Vendor & Party Management', 
    desc: 'Maintain comprehensive records of your suppliers and customers. Track outstanding balances, purchase history, and contact details in a centralized database.' 
  },
  { 
    id: 'dashboard-analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 
    title: 'Dashboard Analytics', 
    desc: 'Gain actionable insights into your business performance with real-time data visualization. Monitor sales trends, top-selling products, and profit margins through intuitive charts.' 
  },
  { 
    id: 'cloud-sync',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800', 
    title: 'Cloud Sync', 
    desc: 'Keep your business data synchronized across all devices and locations. Access your records from mobile, web, or desktop with seamless, real-time cloud updates.' 
  },
  { 
    id: 'multi-user-access',
    image: '/images/features/multi-user.png', 
    title: 'Multi-user Access', 
    desc: 'Collaborate with your team by granting specific permissions to different staff members. Securely manage access roles for billers, managers, and accountants.' 
  },
  { 
    id: 'online-backup',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', 
    title: 'Online Backup', 
    desc: 'Protect your critical business information with automated, secure cloud backups. Never worry about data loss with reliable, encrypted off-site storage of your entire database.' 
  },
  { 
    id: 'low-stock-alerts',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800', 
    title: 'Low Stock Alerts', 
    desc: 'Never run out of popular items with automated inventory notifications. Set custom thresholds for each product and receive timely alerts to restock before it\'s too late.' 
  },
  { 
    id: 'barcode-support',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=800', 
    title: 'Barcode Support', 
    desc: 'Enable rapid inventory counting and ultra-fast checkout with plug-and-play barcode integration. Compatible with most standard handheld and fixed-mount scanners.' 
  },
  { 
    id: 'subscription-mode',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800', 
    title: 'Subscription Mode', 
    desc: 'Manage recurring revenue businesses with flexible subscription billing models. Automate monthly, quarterly, or yearly invoicing for service-based clients.' 
  },
  { 
    id: 'template-selection',
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=800', 
    title: 'Template Selection', 
    desc: 'Choose from a library of professionally designed invoice templates. Select the layout that best represents your business identity and customize it to your needs.' 
  },
  { 
    id: 'comprehensive-reports',
    image: '/images/features/reports.png', 
    title: 'Comprehensive Reports', 
    desc: 'Generate all types of reports covering sales, purchases, inventory, and taxes. Filter data by date range, category, or user to get the exact information you need.' 
  },
  { 
    id: 'multiple-export-formats',
    image: '/images/features/exports.png', 
    title: 'Multiple Export Formats', 
    desc: 'Seamlessly export your data to PDF, Excel, and Tally formats. Native support for thermal printing ensures professional receipt generation for retail businesses.' 
  },
];
