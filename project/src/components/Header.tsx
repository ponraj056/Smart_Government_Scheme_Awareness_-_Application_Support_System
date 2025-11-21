import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';
import { LogOut, Globe, User } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'dashboard' | 'profile') => void;
  currentPage: string;
}

export const Header = ({ onNavigate, currentPage }: HeaderProps) => {
  const { user, logout } = useAuth();
  const { t, language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'mr', name: 'मराठी' },
    { code: 'gu', name: 'ગુજરાતી' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              {t('appName')}
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onNavigate('dashboard')}
              className={`font-medium transition ${
                currentPage === 'dashboard'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('dashboard')}
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className={`font-medium transition ${
                currentPage === 'profile'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('myProfile')}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">
                  {languages.find(l => l.code === language)?.name}
                </span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition first:rounded-t-lg last:rounded-b-lg ${
                      language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900">{user?.fullName}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <button
                onClick={() => onNavigate('profile')}
                className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition"
              >
                <User className="w-5 h-5 text-blue-600" />
              </button>
            </div>

            <button
              onClick={logout}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition"
              title={t('logout')}
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};