import React, { useState } from 'react';
import { Scheme } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { X, ExternalLink, FileText, CheckCircle, AlertCircle, Video, Star } from 'lucide-react';

interface SchemeDetailModalProps {
  scheme: Scheme;
  onClose: () => void;
}

// ⭐ Simple reusable RatingStars component
const RatingStars: React.FC<{
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
}> = ({ value, onChange, readonly = false }) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onChange && onChange(star)}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(null)}
          className="focus:outline-none"
        >
          <Star
            className={`w-6 h-6 transition ${
              (hover || value) >= star
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export const SchemeDetailModal = ({ scheme, onClose }: SchemeDetailModalProps) => {
  const { t, language } = useLanguage();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const title = scheme.titleTranslations[language] || scheme.title;
  const description = scheme.descriptionTranslations[language] || scheme.description;
  const procedure = scheme.procedureTranslations[language] || scheme.applicationProcedure;

  // ✅ Extract YouTube video ID from full URL or return direct ID
  const extractYouTubeId = (urlOrId: string): string => {
    if (!urlOrId) return '';
    const regex =
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = urlOrId.match(regex);
    return match ? match[1] : urlOrId;
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a rating before submitting.');
      return;
    }
    console.log({
      schemeId: scheme.id,
      rating,
      review,
    });
    alert('Thank you for your feedback!');
    setRating(0);
    setReview('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" onClick={onClose} />

        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 py-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            {/* 🎥 Video Tutorial (Now supports full URLs) */}
            {(scheme.youtubeVideoUrl || scheme.youtubeVideoId) && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Video className="w-5 h-5 mr-2 text-red-600" />
                  {t('tutorial')}
                </h3>
                <div className="relative w-full pt-[56.25%] bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${extractYouTubeId(
                      scheme.youtubeVideoUrl || scheme.youtubeVideoId
                    )}`}
                    title="Scheme Tutorial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Eligibility */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                {t('eligibility')}
              </h3>
              <ul className="space-y-2">
                {scheme.eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Documents */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                {t('documents')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scheme.requiredDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900"
                  >
                    {doc}
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Guide */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                {t('stepByStep')}
              </h3>
              <div className="space-y-4">
                {procedure.map((step, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-4 border-l-2 border-blue-200 last:border-transparent last:pb-0"
                  >
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                      {step.tips && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mt-2">
                          <p className="text-xs text-yellow-800">
                            <strong>Tip:</strong> {step.tips}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply Now Button */}
            {scheme.officialUrl && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <a
                  href={scheme.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-blue-700 hover:text-blue-800 font-semibold transition"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>{t('applyNow')}</span>
                </a>
              </div>
            )}

            {/* ⭐ Rating & Review Section */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Rate this Scheme</h3>
              <form onSubmit={handleSubmitReview} className="space-y-3">
                <RatingStars value={rating} onChange={setRating} />
                <textarea
                  placeholder="Write your feedback..."
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  rows={3}
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
