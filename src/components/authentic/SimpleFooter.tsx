
import React from 'react';
import { ExternalLink, Mail, MapPin } from 'lucide-react';

const SimpleFooter = () => {
  const quickLinks = [
    { label: 'Darul Quran Abdulla Academy', url: 'https://darul-quran.com' },
    { label: 'Precedential Legal Consultancy', url: 'https://precedentiallaw.com' },
    { label: 'Dubai Indian Islamic Centre', url: null }
  ];

  const achievements = [
    'UAE Golden Visa Recipient',
    'Loka Kerala Sabha Member',
    'Emirati Entrepreneurs Association Member',
    'Published Author (6+ Books)'
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Dr. P.T. Abdul Rahman</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Visionary educator, humanitarian leader, and legal expert dedicated to serving 
              communities across UAE and India through education, welfare, and professional excellence.
            </p>
            <div className="flex items-center mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">Dubai, UAE & Kerala, India</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">Available through institutional contacts</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Founded Institutions</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.url ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  ) : (
                    <span className="text-slate-400">{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-slate-400 text-sm flex items-start">
                  <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Dr. P.T. Abdul Rahman. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Dedicated to education, humanitarian service, and community development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
