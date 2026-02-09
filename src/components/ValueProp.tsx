import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2,
  Quote,
  User,
  Users,
  TrendingUp
} from 'lucide-react';

const personas = [
  {
    id: 'deployment-strategist',
    name: 'Deployment Strategist',
    icon: User,
    avatar: '👤',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    quote: {
      text: "Where can I find what other teams have tried?",
      type: "pain-point"
    },
    valueProps: {
      title: 'Operational Efficiency',
      tagline: 'Do more with less friction',
      benefits: [
        'No longer have to write dull updates',
        'Surfaces information automatically—no searching or asking required',
        'Encourages better documentation (keeps channels clear and up-to-date)',
        'Avoids generic questions and meetings about project status',
      ],
    },
    testimonial: {
      text: "FDE Pulse found 3 similar projects instantly—saved me days of searching.",
      type: "benefit"
    }
  },
  {
    id: 'product-council',
    name: 'Product Council',
    icon: Users,
    avatar: '👥',
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    lightBg: 'bg-purple-50',
    borderColor: 'border-purple-200',
    quote: {
      text: "What do I need to surface to product?",
      type: "pain-point"
    },
    valueProps: {
      title: 'Accelerating Engagements',
      tagline: 'Learn from every team, instantly',
      benefits: [
        'Other teams know who is solving or solved similar use cases',
        'Find the right project, get summaries, connect to the right people',
        'See what other teams are working on now that could help',
        'Real-time customer stories generated from weekly updates',
      ],
    },
    testimonial: {
      text: "Finally, a way to learn from what other teams have already solved.",
      type: "benefit"
    }
  },
  {
    id: 'leadership',
    name: 'Leadership',
    icon: TrendingUp,
    avatar: '👔',
    color: 'teal',
    gradient: 'from-teal-500 to-teal-600',
    lightBg: 'bg-teal-50',
    borderColor: 'border-teal-200',
    quote: {
      text: "Valuable insights are trapped in isolated conversations. Teams reinvent the wheel while we lack visibility into common challenges.",
      type: "pain-point"
    },
    valueProps: {
      title: 'Leadership Insights',
      tagline: 'See the patterns, not just the noise',
      benefits: [
        'Know what features are priorities ("3 teams are looking for...")',
        'Have rich details about patterns across customers',
        'Surfaces escalations and patterns (e.g., "voice agent issues affecting multiple teams")',
        'Takes foundation of Slack channel and makes input/output more rich',
      ],
    },
    testimonial: {
      text: "Now we can see the patterns across all engagements, not just individual updates.",
      type: "benefit"
    }
  },
];

export default function ValueProp() {
  const [activePersona, setActivePersona] = useState<'deployment-strategist' | 'product-council' | 'leadership'>('deployment-strategist');

  const activePersonaData = personas.find(p => p.id === activePersona) || personas[0];

  return (
    <section id="value-prop" className="mb-24 scroll-mt-20 py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Value Proposition
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Addressing the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Core Challenges
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            FDE Pulse directly addresses all three hackathon priorities with measurable impact.
          </p>
        </motion.div>

        {/* Persona Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-200 justify-center">
          {personas.map((persona) => {
            const isActive = activePersona === persona.id;
            const borderColor = isActive 
              ? (persona.color === 'blue' ? 'border-blue-600' : persona.color === 'purple' ? 'border-purple-600' : 'border-teal-600')
              : 'border-transparent';
            const textColor = isActive
              ? (persona.color === 'blue' ? 'text-blue-600' : persona.color === 'purple' ? 'text-purple-600' : 'text-teal-600')
              : 'text-slate-600 hover:text-slate-900';
            
            return (
              <button
                key={persona.id}
                onClick={() => setActivePersona(persona.id as 'deployment-strategist' | 'product-council' | 'leadership')}
                className={`px-6 py-3 font-medium transition-colors border-b-2 ${borderColor} ${textColor}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{persona.avatar}</span>
                  <span>{persona.name}</span>
                </div>
                <p className="text-xs font-normal mt-1">{persona.valueProps.tagline}</p>
              </button>
            );
          })}
        </div>

        {/* Active Persona Card - Horizontal Layout */}
        <motion.div
          key={activePersona}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="relative bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side: Avatar & Quote */}
            <div className={`p-8 lg:p-12 bg-gradient-to-br ${activePersonaData.gradient} text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
              <div className="relative flex flex-col h-full">
                {/* Avatar */}
                <div className="mb-8">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 border-4 border-white/30">
                    <span className="text-5xl">{activePersonaData.avatar}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{activePersonaData.name}</h3>
                  <p className="text-white/90 text-lg">{activePersonaData.valueProps.tagline}</p>
                </div>

                {/* Pain Point Quote */}
                <div className="mt-auto">
                  <div className={`p-6 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 relative`}>
                    <Quote className="w-8 h-8 absolute top-4 right-4 opacity-30" />
                    <div className="relative pr-8">
                      <p className="text-xl md:text-2xl font-semibold leading-relaxed mb-3">
                        "{activePersonaData.quote.text}"
                      </p>
                      <p className="text-white/80 text-sm font-medium">
                        — {activePersonaData.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Value Props & Testimonial */}
            <div className="p-8 lg:p-12 flex flex-col space-y-6">
              {/* Value Props */}
              <div>
                <h4 className={`text-2xl font-bold mb-4 ${
                  activePersonaData.color === 'blue' ? 'text-blue-600' :
                  activePersonaData.color === 'purple' ? 'text-purple-600' :
                  'text-teal-600'
                }`}>
                  {activePersonaData.valueProps.title}
                </h4>
                <ul className="space-y-3">
                  {activePersonaData.valueProps.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        activePersonaData.color === 'blue' ? 'text-blue-500' :
                        activePersonaData.color === 'purple' ? 'text-purple-500' :
                        'text-teal-500'
                      }`} />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="mt-auto">
                <div className="p-6 rounded-xl border-2 border-green-200 bg-green-50 relative">
                  <Quote className="w-8 h-8 absolute top-4 right-4 text-green-600 opacity-20" />
                  <div className="relative pr-8">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">With FDE Pulse</span>
                    </div>
                    <p className="text-lg font-bold text-slate-900 leading-relaxed mb-2">
                      "{activePersonaData.testimonial.text}"
                    </p>
                    <p className="text-sm text-slate-600 font-medium">
                      — {activePersonaData.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className={`absolute bottom-0 right-0 w-32 h-32 ${activePersonaData.lightBg} rounded-tl-[100px] opacity-30`} />
        </motion.div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 animated-gradient opacity-90" />
          <div className="relative p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              One Solution. Three Personas. Exponential Impact.
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              FDE Pulse isn't just a tool — it's a force multiplier for how FDE teams 
              collaborate, learn, and deliver value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
