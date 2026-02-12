import { motion } from 'framer-motion';
import { Settings, Bot, MessageSquare, FileText, Layers, CheckCircle2 } from 'lucide-react';

const howItWorks = [
  {
    step: 1,
    title: 'Conversational Check-ins',
    description: 'AI agent reaches out weekly via Slack, asking natural questions about project progress, blockers, and wins.',
    icon: MessageSquare,
  },
  {
    step: 2,
    title: 'Adaptive Questioning',
    description: 'Questions adapt based on responses. Blockers trigger deeper investigation, wins get celebrated.',
    icon: Bot,
  },
  {
    step: 3,
    title: 'Knowledge Matching',
    description: 'System searches knowledge base for similar projects, solutions, and teams working on related issues.',
    icon: Layers,
  },
  {
    step: 4,
    title: 'Automatic Summaries',
    description: 'Each check-in generates a Slack Canvas summary—searchable, shareable, permanent.',
    icon: FileText,
  },
];

export default function SolutionDetails() {
  return (
    <section id="solution-specs" className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">How It Works</h2>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">How FDE Pulse Works</h3>
          <div className="space-y-6">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-xl bg-white border-2 border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-6 h-6 text-blue-600" />
                    <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Architecture</h3>
          <div className="p-8 rounded-2xl bg-slate-50 border-2 border-slate-200">
            <div className="space-y-4 font-mono text-sm text-slate-900">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Slack API → Data collection from channels</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Agentforce AI → Conversational check-ins</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Knowledge Base → Similarity matching & ranking</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Slack Canvas → Automatic summary generation</span>
              </div>
              <div className="pt-4 border-t border-slate-300 flex items-center gap-3">
                <span className="text-blue-600">→</span>
                <span className="font-bold">FDE Pulse: Orchestrates these into a cohesive solution</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
