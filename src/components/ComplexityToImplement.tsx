import { motion } from 'framer-motion';
import { Zap, CheckCircle2, Slack, FileText, Bot, TrendingUp } from 'lucide-react';

export default function ComplexityToImplement() {
  return (
    <section id="implementation-approach" className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Implementation Approach</h2>
        </div>

        {/* High Value, Low Effort Positioning */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* High Value */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">High Value</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Addresses core pain points identified by Deployment Strategists',
                  'Measurable ROI: 1,980+ hours/year potential savings',
                  'Directly supports all three hackathon pillars',
                  'Solves knowledge silo problem organization-wide',
                  'Enables faster project delivery and better outcomes',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Low Effort */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-slate-900">Low Effort</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Leverages existing Slack infrastructure (no new platform)',
                  'Uses Slack Canvas (already available to all teams)',
                  'Built on Agentforce conversational AI (existing capability)',
                  'No new infrastructure or integrations required',
                  'Minimal training needed—works within familiar tools',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Why It's Achievable */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Why It's Achievable</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Slack,
                title: 'Slack Integration',
                description: 'All data sources already in Slack channels. No new data collection needed.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: FileText,
                title: 'Slack Canvas',
                description: 'Native Canvas feature provides perfect output format. No custom UI required.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Bot,
                title: 'Agentforce AI',
                description: 'Conversational AI capabilities already exist. We\'re orchestrating, not building from scratch.',
                color: 'from-green-500 to-emerald-500',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Implementation Simplicity Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Implementation Simplicity</h3>
          <p className="text-lg text-slate-300 mb-6">
            FDE Pulse doesn't require building new infrastructure. Instead, it intelligently connects 
            existing capabilities:
          </p>
          <div className="space-y-4 font-mono text-sm">
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span>Slack API (existing)</span>
              <span className="text-slate-500">→</span>
              <span>Data collection from channels</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span>Agentforce AI (existing)</span>
              <span className="text-slate-500">→</span>
              <span>Conversational check-ins</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span>Slack Canvas (existing)</span>
              <span className="text-slate-500">→</span>
              <span>Knowledge summaries</span>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
              <span className="text-blue-400">→</span>
              <span className="font-bold">FDE Pulse: Orchestrates these into a cohesive solution</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
