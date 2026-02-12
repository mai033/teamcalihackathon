import { useState } from 'react';
import { 
  Star, 
  Target, 
  AlertTriangle, 
  BarChart3, 
  Zap, 
  TrendingUp, 
  PlayCircle, 
  Settings, 
  Map,
  Menu,
  X,
  Sparkles,
  Lightbulb,
  FileText,
  Wrench,
  Bot
} from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

interface SidebarNavigationProps {
  sections: Section[];
  activeSection: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'north-star': Star,
  'value-prop': Sparkles,
  'value-proposition': Target,
  'solution': Lightbulb,
  'business-challenge': AlertTriangle,
  'kpis': BarChart3,
  'complexity': Zap,
  'implementation-approach': Wrench,
  'business-value': TrendingUp,
  'prototype': PlayCircle,
  'solution-specs': FileText,
  'solution-details': Settings,
  'roadmap': Map,
};

export default function SidebarNavigation({ sections, activeSection }: SidebarNavigationProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-slate-900 text-white rounded-lg"
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-slate-50/50 z-30
          transform transition-transform duration-300 overflow-y-auto
          shadow-sm
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 sticky top-0 bg-slate-50/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">FDE Pulse</h2>
              <p className="text-xs text-slate-500">Hackathon 2026</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            {sections.map((section) => {
              const isActive = activeSection === section.id || (!activeSection && section.id === 'north-star');
              const IconComponent = iconMap[section.id] || Star;
              
              return (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg text-sm font-medium
                      transition-all duration-200 flex items-center gap-3
                      ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }
                    `}
                  >
                    <span className={isActive ? 'text-blue-600' : 'text-slate-400'}>
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <span>{section.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 mt-auto">
          <p className="text-xs text-slate-500 text-center">Team Cali</p>
        </div>
      </aside>
    </>
  );
}
