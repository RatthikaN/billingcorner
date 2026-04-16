import Link from 'next/link';
import { LayoutGrid, Twitter, Linkedin, Github, Globe, Share2, Bell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Our Information</h4>
          <ul className="space-y-4">
            {/* <li><Link href="/terms-and-conditions" className="text-slate-500 hover:text-primary text-sm transition-colors">Terms & Conditions</Link></li> */}
            <li><Link href="/blog" className="text-slate-500 hover:text-primary text-sm transition-colors">Blog</Link></li>
            <li><Link href="/terms-and-conditions" className="text-slate-500 hover:text-primary text-sm transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="text-slate-500 hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
            <li><Link href="/refund-policy" className="text-slate-500 hover:text-primary text-sm transition-colors">Refund / Cancellation Policy</Link></li>
            <li><Link href="/gdpr-policy" className="text-slate-500 hover:text-primary text-sm transition-colors">GDPR Policy</Link></li>
            <li><Link href="/cookie-policy" className="text-slate-500 hover:text-primary text-sm transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Industry Solutions</h4>
          <ul className="space-y-4">
            <li><Link href="/retail-and-supermarkets" className="text-slate-500 hover:text-primary text-sm transition-colors">Retail & Supermarkets</Link></li>
            <li><Link href="/electronics-and-mobile-shops" className="text-slate-500 hover:text-primary text-sm transition-colors">Electronics & Mobile Shops</Link></li>
            <li><Link href="/clothing-and-apparel" className="text-slate-500 hover:text-primary text-sm transition-colors">Clothing & Apparel</Link></li>
            <li><Link href="/pharmacy-and-healthcare" className="text-slate-500 hover:text-primary text-sm transition-colors">Pharmacy & Healthcare</Link></li>
            <li><Link href="/restaurants-and-cafes" className="text-slate-500 hover:text-primary text-sm transition-colors">Restaurants & Cafes</Link></li>
            <li><Link href="/fresh-produce-stores" className="text-slate-500 hover:text-primary text-sm transition-colors">Fresh Produce Stores</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Our Platform & Opportunities</h4>
          <ul className="space-y-4">
            <li><Link href="/desktop-billing" className="text-slate-500 hover:text-primary text-sm transition-colors">Desktop Billing Software</Link></li>
            <li><Link href="/mobile-app" className="text-slate-500 hover:text-primary text-sm transition-colors">Mobile App </Link></li>
            {/* <li><Link href="/cloud-dashboard" className="text-slate-500 hover:text-primary text-sm transition-colors">Cloud Dashboard</Link></li> */}
            <li><Link href="/become-a-dealer" className="text-slate-500 hover:text-primary text-sm transition-colors">Become a Dealer</Link></li>
            <li><Link href="/contact" className="text-slate-500 hover:text-primary text-sm transition-colors">Contact Us</Link></li>

            {/* <li><Link href="/products/ecommerce" className="text-slate-500 hover:text-primary text-sm transition-colors">E-commerce Integration</Link></li> */}
            {/* <li><Link href="/advanced-inventory-management" className="text-slate-500 hover:text-primary text-sm transition-colors">Advanced Inventory Management</Link></li> */}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Contact Information</h4>
          <ul className="space-y-4">
            <li className="text-slate-500 text-sm">
              <span className="block font-medium text-slate-700 mb-1">Address</span>
              1st Floor, Illathu Pillaimar Building, Gandhi Statue, RJPM Avarampatti, Rajapalayam, Tamil Nadu 626117
            </li>
            <li className="text-slate-500 text-sm">
              <span className="block font-medium text-slate-700 mb-1">Phone</span>
              <a href="tel:+918300256356" className="hover:text-primary transition-colors">+91 8300 256 356</a>
            </li>
            <li className="text-slate-500 text-sm">
              <span className="block font-medium text-slate-700 mb-1">Email</span>
              <a href="mailto:contact@billingcorner.com" className="hover:text-primary transition-colors">contact@billingcorner.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs text-center md:text-left">
          © {new Date().getFullYear()} Billing Corner. All rights reserved. Powered by <a href="https://www.codingrim.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">CODINGRIM</a>.
        </p>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/billingcorner/" className="text-slate-400 hover:text-slate-600 text-xs transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/112598320/admin/dashboard/" className="text-slate-400 hover:text-slate-600 text-xs transition-colors" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="https://www.facebook.com/profile.php?id=61573243436271" className="text-slate-400 hover:text-slate-600 text-xs transition-colors" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.youtube.com/@Billingcorner" className="text-slate-400 hover:text-slate-600 text-xs transition-colors" target="_blank" rel="noopener noreferrer">Youtube</a>
        </div>
      </div>
    </footer>
  );
}
