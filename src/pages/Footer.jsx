import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <div id='contact' className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 px-4 md:px-8">
      <div className="w-full mx-auto px-4 md:px-8">
        
        <div className="bg-gradient-to-b from-slate-900 to-blue-950 rounded-xl border border-blue-900/30 shadow-2xl p-10">
          
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-blue-400 mb-3">Get In Touch</h2>
            <p className="text-slate-300 text-lg">We'd love to hear from you</p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            
            {/* Email */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-600 transition-all">
              <div className="text-center">
                <div className="inline-block bg-blue-600 p-4 rounded-full mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-blue-400 font-semibold mb-2 text-lg">Email</h3>
                <a href="mailto:info@vyomgarud.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                  info@vyomgarud.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-600 transition-all">
              <div className="text-center">
                <div className="inline-block bg-blue-600 p-4 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-blue-400 font-semibold mb-2 text-lg">Phone</h3>
                <a href="tel:+91" className="text-slate-300 hover:text-blue-400 transition-colors">
                  +91 XXX XXX XXXX
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-600 transition-all">
              <div className="text-center">
                <div className="inline-block bg-blue-600 p-4 rounded-full mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-blue-400 font-semibold mb-2 text-lg">Location</h3>
                <p className="text-slate-300 leading-relaxed">
                  ROLTA Incubation Centre<br/>
                  MANIT, Bhopal<br/>
                  Madhya Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center mb-8">
            <div className="inline-flex gap-4">
              <a 
                href="https://vyomgarud.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 p-4 rounded-lg transition-colors"
              >
                <Globe className="w-6 h-6 text-slate-300" />
              </a>
              <a 
                href="https://linkedin.com/company/vyomgarud" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 p-4 rounded-lg transition-colors"
              >
                <Linkedin className="w-6 h-6 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400 mb-2">
              © 2024 VyomGarud UAV Solutions. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Innovative solutions based on Unmanned Aerial Vehicles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}