import { Scheme } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, ExternalLink, Video, Star } from 'lucide-react';

interface SchemeCardProps {
  scheme: Scheme;
  onViewDetails: (scheme: Scheme) => void;
}

export const SchemeCard = ({ scheme, onViewDetails }: SchemeCardProps) => {
  const { t, language } = useLanguage();

  const title = scheme.titleTranslations[language] || scheme.title;
  const description = scheme.descriptionTranslations[language] || scheme.description;

  const daysUntilDeadline = Math.ceil(
    (new Date(scheme.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  const isExpiringSoon = daysUntilDeadline <= 30;

  const categoryColors: Record<string, string> = {
    education: 'bg-blue-100 text-blue-700',
    healthcare: 'bg-green-100 text-green-700',
    agriculture: 'bg-amber-100 text-amber-700',
    social_security: 'bg-purple-100 text-purple-700',
    entrepreneurship: 'bg-orange-100 text-orange-700',
    housing: 'bg-teal-100 text-teal-700',
    employment: 'bg-pink-100 text-pink-700',
  };

  // Example fallback rating (you can later replace with dynamic API average)
  const averageRating = scheme.averageRating || 4.2; // mock default
  const totalReviews = scheme.totalReviews || 28; // optional for display

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              categoryColors[scheme.category] || 'bg-gray-100 text-gray-700'
            }`}
          >
            {t(scheme.category)}
          </span>
          {isExpiringSoon && (
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold animate-pulse">
              {t('expiringSchemes')}
            </span>
          )}
        </div>

        {/* Scheme title */}
        <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2">{title}</h3>

        {/* ⭐ Rating Display */}
        <div className="flex items-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= Math.round(averageRating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">
            {averageRating.toFixed(1)} / 5
            {totalReviews && <span className="text-gray-400 text-xs ml-1">({totalReviews})</span>}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* Deadline */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Calendar className="w-4 h-4" />
          <span>
            {t('deadline')}: {new Date(scheme.deadline).toLocaleDateString()}
          </span>
          {daysUntilDeadline > 0 && (
            <span className={`font-semibold ${isExpiringSoon ? 'text-red-600' : 'text-gray-700'}`}>
              ({daysUntilDeadline} days left)
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex items-center space-x-2 mb-4">
          {scheme.youtubeVideoId && (
            <span className="inline-flex items-center text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full">
              <Video className="w-3 h-3 mr-1" />
              {t('tutorial')}
            </span>
          )}
          {scheme.officialUrl && (
            <span className="inline-flex items-center text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              <ExternalLink className="w-3 h-3 mr-1" />
              Apply Online
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(scheme)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          {t('viewDetails')}
        </button>
      </div>
    </div>
  );
};
