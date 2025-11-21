import { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Scheme } from '../types';
import { mockSchemes } from '../data/mockSchemes';
import { SchemeCard } from '../components/SchemeCard';
import { SchemeDetailModal } from '../components/SchemeDetailModal';
import { Search, Filter, UserCheck } from 'lucide-react';

export const Dashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [showMatched, setShowMatched] = useState<boolean>(true);

  const categories = [
    'all',
    'education',
    'healthcare',
    'agriculture',
    'social_security',
    'entrepreneurship',
    'housing',
    'employment',
  ];

  // ✅ Profile-based filtration logic
  const filteredSchemes = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return mockSchemes.filter((scheme) => {
      const deadlineDate = new Date(scheme.deadline);
      deadlineDate.setHours(0, 0, 0, 0);

      const isActive = scheme.isActive && deadlineDate >= today;

      // Search match
      const matchesSearch =
        searchQuery === '' ||
        scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Category match
      const matchesCategory =
        categoryFilter === 'all' || scheme.category === categoryFilter;

      // ✅ Profile-based matching (user personalization)
      let matchesProfile = true;
      if (user && showMatched) {
        if (user.age) {
          matchesProfile =
            matchesProfile &&
            user.age >= (scheme.minAge || 0) &&
            user.age <= (scheme.maxAge || 200);
        }

        if (user.gender) {
          matchesProfile =
            matchesProfile &&
            scheme.genderEligibility.includes(user.gender);
        }

        if (user.category) {
          matchesProfile =
            matchesProfile &&
            scheme.categoryEligibility.includes(user.category);
        }

        if (user.income && scheme.incomeLimit) {
          matchesProfile =
            matchesProfile && user.income <= scheme.incomeLimit;
        }

        if (user.state && scheme.targetStates) {
          matchesProfile =
            matchesProfile &&
            (scheme.targetStates.includes('All India') ||
              scheme.targetStates.includes(user.state));
        }
      }

      return isActive && matchesSearch && matchesCategory && matchesProfile;
    });
  }, [searchQuery, categoryFilter, user, showMatched]);

  // ✅ Expiring schemes (within 30 days)
  const expiringSchemes = useMemo(() => {
    const today = new Date();
    return filteredSchemes.filter((scheme) => {
      const daysUntilDeadline = Math.ceil(
        (new Date(scheme.deadline).getTime() - today.getTime()) /
          (1000 * 60 * 60 * 24)
      );
      return daysUntilDeadline <= 30;
    });
  }, [filteredSchemes]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t('dashboard')}
          </h2>
          <p className="text-gray-600">
            {user?.fullName
              ? `Welcome back, ${user.fullName}!`
              : 'Discover government schemes tailored for you'}
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchSchemes')}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? t('allCategories') : t(cat)}
                  </option>
                ))}
              </select>
            </div>

            {/* Toggle Profile Filter */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => setShowMatched(!showMatched)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition ${
                  showMatched
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <UserCheck className="w-5 h-5" />
                {showMatched ? 'Show All Schemes' : 'Show Matched Schemes'}
              </button>
            </div>
          </div>
        </div>

        {/* Expiring Soon Section */}
        {expiringSchemes.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              {t('expiringSchemes')}
              <span className="ml-3 bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-full">
                {expiringSchemes.length}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expiringSchemes.map((scheme) => (
                <SchemeCard
                  key={scheme.id}
                  scheme={scheme}
                  onViewDetails={setSelectedScheme}
                />
              ))}
            </div>
          </div>
        )}

        {/* Main Scheme List */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {showMatched ? t('matchingSchemes') : t('allSchemes')}
            <span className="ml-3 bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
              {filteredSchemes.length}
            </span>
          </h3>
        </div>

        {filteredSchemes.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <p className="text-gray-500 text-lg">
              No schemes found matching your profile or search criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                onViewDetails={setSelectedScheme}
              />
            ))}
          </div>
        )}
      </div>

      {/* Scheme Details Modal */}
      {selectedScheme && (
        <SchemeDetailModal
          scheme={selectedScheme}
          onClose={() => setSelectedScheme(null)}
        />
      )}
    </div>
  );
};
export default Dashboard;
