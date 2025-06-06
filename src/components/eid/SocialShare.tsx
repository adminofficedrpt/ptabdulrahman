
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Copy, Check } from 'lucide-react';
import { Facebook, Instagram, Twitter, MessageSquare } from 'lucide-react';

interface SocialShareProps {
  language: 'en' | 'ar';
  shareText: string;
  url: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  language,
  shareText,
  url,
}) => {
  const [copied, setCopied] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`,
    instagram: '#', // Instagram doesn't support direct sharing
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const labels = {
    en: {
      share: 'Share this greeting',
      copyUrl: 'Copy URL',
      copied: 'Copied!',
    },
    ar: {
      share: 'شارك هذه التهنئة',
      copyUrl: 'نسخ الرابط',
      copied: 'تم النسخ!',
    },
  };

  const currentLabels = labels[language];

  return (
    <div className="text-center">
      <motion.button
        onClick={() => setShowShare(!showShare)}
        className="flex items-center gap-2 px-6 py-3 bg-yellow-300 text-blue-900 rounded-full font-semibold hover:bg-yellow-400 transition-colors mx-auto mb-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Share2 size={20} />
        {currentLabels.share}
      </motion.button>

      {showShare && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
        >
          {/* Social Media Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            <motion.a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white hover:bg-green-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageSquare size={20} />
            </motion.a>

            <motion.a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook size={20} />
            </motion.a>

            <motion.a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-black rounded-full text-white hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={20} />
            </motion.a>

            <motion.button
              onClick={() => window.open('https://www.instagram.com/', '_blank')}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={20} />
            </motion.button>
          </div>

          {/* Copy URL Button */}
          <motion.button
            onClick={handleCopyUrl}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? (
              <>
                <Check size={16} className="text-green-400" />
                {currentLabels.copied}
              </>
            ) : (
              <>
                <Copy size={16} />
                {currentLabels.copyUrl}
              </>
            )}
          </motion.button>

          {/* Short URL Display */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-300 mb-2">
              {language === 'ar' ? 'الرابط المختصر:' : 'Short URL:'}
            </p>
            <code className="bg-black/20 px-3 py-1 rounded text-yellow-300 text-sm">
              ptabdulrahman.com/eid
            </code>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SocialShare;
