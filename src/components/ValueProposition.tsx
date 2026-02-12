import { motion } from 'framer-motion';
import { 
  Gauge, 
  Rocket, 
  Eye,
  CheckCircle2,
  Target
} from 'lucide-react';

const valueProps = [
  {
    icon: Gauge,
    title: 'Operational Efficiency',
    tagline: 'Do more with less friction',
    benefits: [
      'Deployment Strategists no longer have to write dull updates',
      'Surfaces information automatically—no searching or asking required',
      'Encourages better documentation (keeps channels clear and up-to-date)',
      'Avoids generic questions and meetings about project status',
    ],
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
  },
  {
    icon: Rocket,
    title: 'Accelerating Engagements',
    tagline: 'Learn from every team, instantly',
    benefits: [
      'Other teams know who is solving or solved similar use cases',
      'Find the right project, get summaries, connect to the right people',
      'See what other teams are working on now that could help',
      'Real-time customer stories generated from weekly updates',
    ],
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    lightBg: 'bg-purple-50',
  },
  {
    icon: Eye,
    title: 'Leadership Insights',
    tagline: 'See the patterns, not just the noise',
    benefits: [
      'Product Council knows what features are priorities ("3 teams are looking for...")',
      'Leadership has rich details about patterns across customers',
      'Surfaces escalations and patterns (e.g., "voice agent issues affecting multiple teams")',
      'Takes foundation of Slack channel and makes input/output more rich',
    ],
    color: 'teal',
    gradient: 'from-teal-500 to-teal-600',
    lightBg: 'bg-teal-50',
  },
];

export default function ValueProposition() {
  return (
    <section id="value-proposition" className="mb-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Hackathon Criteria
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Addressing the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
              Core Challenges
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            FDE Pulse directly addresses all three hackathon priorities 
            with measurable impact.
          </p>
        </motion.div>

        {/* Value propositions */}
        <div className="grid lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className={`p-6 bg-gradient-to-r ${prop.gradient} text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <prop.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{prop.title}</h3>
                    <p className="text-white/80 text-sm">{prop.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Benefits list */}
              <div className="p-6">
                <ul className="space-y-4">
                  {prop.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + benefitIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        prop.color === 'blue' ? 'text-blue-500' :
                        prop.color === 'purple' ? 'text-purple-500' :
                        'text-teal-500'
                      }`} />
                      <span className="text-slate-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Decorative corner */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 ${prop.lightBg} rounded-tl-[100px] opacity-50`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
