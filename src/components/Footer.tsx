import Link from 'next/link';
import { LayoutGrid, Twitter, Linkedin, Github, Globe, Share2, Bell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Our Policies</h4>
          <ul className="space-y-4">
            <li><Link href="/policies/terms" className="text-slate-500 hover:text-primary text-sm transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/policies/privacy" className="text-slate-500 hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
            <li><Link href="/policies/refund" className="text-slate-500 hover:text-primary text-sm transition-colors">Refund / Cancellation Policy</Link></li>
            <li><Link href="/policies/gdpr" className="text-slate-500 hover:text-primary text-sm transition-colors">GDPR Policy</Link></li>
            <li><Link href="/policies/cookie" className="text-slate-500 hover:text-primary text-sm transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Industry Solutions</h4>
          <ul className="space-y-4">
            <li><Link href="/solutions/retail" className="text-slate-500 hover:text-primary text-sm transition-colors">Retail & Supermarkets</Link></li>
            <li><Link href="/solutions/electronics" className="text-slate-500 hover:text-primary text-sm transition-colors">Electronics & Mobile Shops</Link></li>
            <li><Link href="/solutions/apparel" className="text-slate-500 hover:text-primary text-sm transition-colors">Clothing & Apparel</Link></li>
            <li><Link href="/solutions/pharmacy" className="text-slate-500 hover:text-primary text-sm transition-colors">Pharmacy & Healthcare</Link></li>
            <li><Link href="/solutions/restaurants" className="text-slate-500 hover:text-primary text-sm transition-colors">Restaurants & Cafes</Link></li>
            <li><Link href="/solutions/fresh-produce" className="text-slate-500 hover:text-primary text-sm transition-colors">Fresh Produce Stores</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Platform Applications</h4>
          <ul className="space-y-4">
            <li><Link href="/products/desktop" className="text-slate-500 hover:text-primary text-sm transition-colors">Desktop Billing (Windows)</Link></li>
            <li><Link href="/products/mobile" className="text-slate-500 hover:text-primary text-sm transition-colors">Mobile App (iOS/Android)</Link></li>
            <li><Link href="/products/cloud" className="text-slate-500 hover:text-primary text-sm transition-colors">Cloud Dashboard</Link></li>
            <li><Link href="/products/ecommerce" className="text-slate-500 hover:text-primary text-sm transition-colors">E-commerce Integration</Link></li>
            <li><Link href="/products/inventory" className="text-slate-500 hover:text-primary text-sm transition-colors">Advanced Inventory Management</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Contact Information</h4>
          <ul className="space-y-4">
            <li className="text-slate-500 text-sm">
              <span className="block font-medium text-slate-700 mb-1">Address</span>
              123 Tech Square, Phase 1<br />New Delhi, India 110001
            </li>
            <li className="text-slate-500 text-sm">
              <span className="block font-medium text-slate-700 mb-1">Phone</span>
              <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
            </li>
            <li className="text-slate-500 text-sm">
              <span className="block font-medium text-slate-700 mb-1">Email</span>
              <a href="mailto:support@billingcorner.com" className="hover:text-primary transition-colors">support@billingcorner.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs text-center md:text-left">
          © {new Date().getFullYear()} Billing Corner India. All rights reserved. Microsoft and Windows are trademarks of the Microsoft group of companies.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors">Twitter</a>
          <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
