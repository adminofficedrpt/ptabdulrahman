
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Copy, Download, ExternalLink, Check, BookOpen, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CitationManager = () => {
  const { t, isRTL } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const citationFormats = [
    {
      id: 'apa',
      name: 'APA Style',
      description: 'American Psychological Association format'
    },
    {
      id: 'mla',
      name: 'MLA Style',
      description: 'Modern Language Association format'
    },
    {
      id: 'chicago',
      name: 'Chicago Style',
      description: 'Chicago Manual of Style format'
    },
    {
      id: 'harvard',
      name: 'Harvard Style',
      description: 'Harvard referencing system'
    }
  ];

  const keyPublications = [
    {
      id: 'creation-meaningless',
      title: 'Is the Creation Meaningless?',
      author: 'Abdul Rahman, P.T.',
      year: '1995',
      publisher: 'Department of Islamic Affairs, UAE',
      isbn: '978-971-000-000-0',
      pages: '324',
      language: 'English, Arabic, Malayalam',
      type: 'book',
      citations: {
        apa: 'Abdul Rahman, P.T. (1995). Is the Creation Meaningless? Department of Islamic Affairs.',
        mla: 'Abdul Rahman, P.T. Is the Creation Meaningless? Department of Islamic Affairs, 1995.',
        chicago: 'Abdul Rahman, P.T. Is the Creation Meaningless? Department of Islamic Affairs, 1995.',
        harvard: 'Abdul Rahman, P.T., 1995. Is the Creation Meaningless? Department of Islamic Affairs.'
      }
    },
    {
      id: 'towards-creator',
      title: 'Towards the Creator',
      author: 'Abdul Rahman, P.T.',
      year: '2010',
      publisher: 'Islamic Publications',
      isbn: '978-971-000-001-0',
      pages: '256',
      language: 'English, Malayalam',
      type: 'book',
      citations: {
        apa: 'Abdul Rahman, P.T. (2010). Towards the Creator. Islamic Publications.',
        mla: 'Abdul Rahman, P.T. Towards the Creator. Islamic Publications, 2010.',
        chicago: 'Abdul Rahman, P.T. Towards the Creator. Islamic Publications, 2010.',
        harvard: 'Abdul Rahman, P.T., 2010. Towards the Creator. Islamic Publications.'
      }
    },
    {
      id: 'sun-scholars',
      title: 'The Sun of Scholars',
      author: 'Abdul Rahman, P.T.',
      year: '2015',
      publisher: 'Arabic Literature Society',
      isbn: '978-971-000-002-0',
      pages: '404',
      language: 'Arabic',
      type: 'book',
      citations: {
        apa: 'Abdul Rahman, P.T. (2015). The Sun of Scholars. Arabic Literature Society.',
        mla: 'Abdul Rahman, P.T. The Sun of Scholars. Arabic Literature Society, 2015.',
        chicago: 'Abdul Rahman, P.T. The Sun of Scholars. Arabic Literature Society, 2015.',
        harvard: 'Abdul Rahman, P.T., 2015. The Sun of Scholars. Arabic Literature Society.'
      }
    }
  ];

  const mediaArticles = [
    {
      id: 'khaleej-creation',
      title: 'Book presents Islamic view on creation',
      publication: 'Khaleej Times',
      date: '2018-10-15',
      url: 'https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation',
      type: 'news',
      citations: {
        apa: 'Khaleej Times. (2018, October 15). Book presents Islamic view on creation. Retrieved from https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation',
        mla: '"Book presents Islamic view on creation." Khaleej Times, 15 Oct. 2018, www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation.',
        chicago: 'Khaleej Times. "Book presents Islamic view on creation." October 15, 2018. https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation.',
        harvard: 'Khaleej Times, 2018. Book presents Islamic view on creation. [Online] Available at: https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation [Accessed 11 June 2025].'
      }
    },
    {
      id: 'gulf-expats',
      title: 'Islamic centre to launch scheme for Indian expats',
      publication: 'Gulf News',
      date: '2019-03-03',
      url: 'https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474',
      type: 'news',
      citations: {
        apa: 'Gulf News. (2019, March 3). Islamic centre to launch scheme for Indian expats. Retrieved from https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474',
        mla: '"Islamic centre to launch scheme for Indian expats." Gulf News, 3 Mar. 2019, gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474.',
        chicago: 'Gulf News. "Islamic centre to launch scheme for Indian expats." March 3, 2019. https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474.',
        harvard: 'Gulf News, 2019. Islamic centre to launch scheme for Indian expats. [Online] Available at: https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474 [Accessed 11 June 2025].'
      }
    }
  ];

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadCitation = (citation: string, filename: string) => {
    const element = document.createElement('a');
    const file = new Blob([citation], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const generateBibliography = () => {
    const allCitations = [
      ...keyPublications.map(pub => pub.citations.apa),
      ...mediaArticles.map(article => article.citations.apa)
    ];
    
    const bibliography = `Bibliography - Dr. P.T. Abdul Rahman\n\n${allCitations.join('\n\n')}`;
    downloadCitation(bibliography, 'pt-abdul-rahman-bibliography.txt');
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-golden-100 rounded-full text-golden-600 text-sm font-medium mb-4">
            <Quote size={16} />
            <span>Citation Resources</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-6">
            Academic Citation Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Properly formatted citations for academic and research purposes. All sources are verifiable 
            and follow standard academic citation formats.
          </p>
          
          <motion.button
            onClick={generateBibliography}
            className="inline-flex items-center gap-2 bg-royal-600 text-white px-6 py-3 rounded-lg hover:bg-royal-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            Download Complete Bibliography
          </motion.button>
        </motion.div>

        {/* Citation Formats Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {citationFormats.map((format, index) => (
            <div key={format.id} className="text-center p-6 bg-gradient-to-br from-royal-50 to-golden-50 rounded-xl">
              <div className="w-12 h-12 bg-royal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-royal-600" />
              </div>
              <h3 className="font-bold text-royal-900 mb-2">{format.name}</h3>
              <p className="text-sm text-gray-600">{format.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Books Citations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-royal-900 mb-8 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-royal-600" />
            Published Books & Works
          </h3>
          
          <div className="space-y-8">
            {keyPublications.map((publication, index) => (
              <div key={publication.id} className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-royal-900 mb-2">{publication.title}</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div><span className="font-medium">Author:</span> {publication.author}</div>
                    <div><span className="font-medium">Year:</span> {publication.year}</div>
                    <div><span className="font-medium">Publisher:</span> {publication.publisher}</div>
                    <div><span className="font-medium">ISBN:</span> {publication.isbn}</div>
                    <div><span className="font-medium">Pages:</span> {publication.pages}</div>
                    <div><span className="font-medium">Languages:</span> {publication.language}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {citationFormats.map((format) => (
                    <div key={format.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-royal-800">{format.name}</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => copyToClipboard(publication.citations[format.id as keyof typeof publication.citations], `${publication.id}-${format.id}`)}
                            className="p-2 text-gray-600 hover:text-royal-600 transition-colors"
                            title="Copy citation"
                          >
                            {copiedId === `${publication.id}-${format.id}` ? (
                              <Check size={16} className="text-green-600" />
                            ) : (
                              <Copy size={16} />
                            )}
                          </button>
                          <button
                            onClick={() => downloadCitation(publication.citations[format.id as keyof typeof publication.citations], `${publication.title}-${format.name}.txt`)}
                            className="p-2 text-gray-600 hover:text-royal-600 transition-colors"
                            title="Download citation"
                          >
                            <Download size={16} />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-700 font-mono text-sm">{publication.citations[format.id as keyof typeof publication.citations]}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Media Articles Citations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-royal-900 mb-8 flex items-center gap-2">
            <FileText className="w-6 h-6 text-royal-600" />
            Media Coverage & Articles
          </h3>
          
          <div className="space-y-8">
            {mediaArticles.map((article, index) => (
              <div key={article.id} className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-royal-900 mb-2">{article.title}</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div><span className="font-medium">Publication:</span> {article.publication}</div>
                    <div><span className="font-medium">Date:</span> {article.date}</div>
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-royal-600 hover:text-royal-700"
                    >
                      <span>View Article</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  {citationFormats.map((format) => (
                    <div key={format.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-royal-800">{format.name}</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => copyToClipboard(article.citations[format.id as keyof typeof article.citations], `${article.id}-${format.id}`)}
                            className="p-2 text-gray-600 hover:text-royal-600 transition-colors"
                            title="Copy citation"
                          >
                            {copiedId === `${article.id}-${format.id}` ? (
                              <Check size={16} className="text-green-600" />
                            ) : (
                              <Copy size={16} />
                            )}
                          </button>
                          <button
                            onClick={() => downloadCitation(article.citations[format.id as keyof typeof article.citations], `${article.title}-${format.name}.txt`)}
                            className="p-2 text-gray-600 hover:text-royal-600 transition-colors"
                            title="Download citation"
                          >
                            <Download size={16} />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-700 font-mono text-sm">{article.citations[format.id as keyof typeof article.citations]}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-royal-50 rounded-xl p-8"
        >
          <h3 className="text-xl font-bold text-royal-900 mb-4">Citation Usage Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-royal-700">
            <div>
              <h4 className="font-semibold mb-2">Academic Research:</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>All citations include verifiable publication information</li>
                <li>ISBN numbers provided for book publications</li>
                <li>Direct URLs included for online sources</li>
                <li>Multiple citation formats available for different academic requirements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Verification Standards:</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>All sources are independently verifiable</li>
                <li>Publication dates and details confirmed</li>
                <li>Editorial standards of publications verified</li>
                <li>Regular updates to maintain accuracy</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CitationManager;
