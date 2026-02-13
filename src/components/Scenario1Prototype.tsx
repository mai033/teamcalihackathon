import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlackPrototype from './SlackPrototype';
import { Bot, User, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'agent';
  content: React.ReactNode;
  timestamp?: string;
}

export default function Scenario1Prototype() {
  const [step, setStep] = useState(0);

  const conversationSteps: Message[][] = [
    // Step 0: Initial user message
    [
      {
        id: 1,
        type: 'user',
        content: "I'm starting a new project on voice, not sure where to start",
        timestamp: '2:34 PM',
      },
    ],
    // Step 1: Agent response with teams
    [
      {
        id: 1,
        type: 'user',
        content: "I'm starting a new project on voice, not sure where to start",
        timestamp: '2:34 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">These other teams already built voice recently!</p>
            <div className="space-y-2 mt-3">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer">
                <div className="font-semibold text-blue-900">Team 1</div>
                <div className="text-sm text-blue-700 mt-1">Voice agent for customer service - Completed Q4 2025</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer">
                <div className="font-semibold text-blue-900">Team 2</div>
                <div className="text-sm text-blue-700 mt-1">Voice integration with Data Cloud - In progress</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer">
                <div className="font-semibold text-blue-900">Team 3</div>
                <div className="text-sm text-blue-700 mt-1">Voice analytics dashboard - Completed Q3 2025</div>
              </div>
            </div>
          </div>
        ),
        timestamp: '2:34 PM',
      },
    ],
    // Step 2: User thanks
    [
      {
        id: 1,
        type: 'user',
        content: "I'm starting a new project on voice, not sure where to start",
        timestamp: '2:34 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">These other teams already built voice recently!</p>
            <div className="space-y-2 mt-3">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 1</div>
                <div className="text-sm text-blue-700 mt-1">Voice agent for customer service - Completed Q4 2025</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 2</div>
                <div className="text-sm text-blue-700 mt-1">Voice integration with Data Cloud - In progress</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 3</div>
                <div className="text-sm text-blue-700 mt-1">Voice analytics dashboard - Completed Q3 2025</div>
              </div>
            </div>
          </div>
        ),
        timestamp: '2:34 PM',
      },
      {
        id: 3,
        type: 'user',
        content: 'thanks, im still just getting started',
        timestamp: '2:35 PM',
      },
    ],
    // Step 3: User provides updates (clickable form)
    [
      {
        id: 1,
        type: 'user',
        content: "I'm starting a new project on voice, not sure where to start",
        timestamp: '2:34 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">These other teams already built voice recently!</p>
            <div className="space-y-2 mt-3">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 1</div>
                <div className="text-sm text-blue-700 mt-1">Voice agent for customer service - Completed Q4 2025</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 2</div>
                <div className="text-sm text-blue-700 mt-1">Voice integration with Data Cloud - In progress</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 3</div>
                <div className="text-sm text-blue-700 mt-1">Voice analytics dashboard - Completed Q3 2025</div>
              </div>
            </div>
          </div>
        ),
        timestamp: '2:34 PM',
      },
      {
        id: 3,
        type: 'user',
        content: 'thanks, im still just getting started',
        timestamp: '2:35 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p>Great! I can help you write your weekly update. What progress have you made this week?</p>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-600 mb-2">Click to provide your updates:</p>
              <button
                onClick={() => {
                  setTimeout(() => setStep(4), 300);
                }}
                className="w-full text-left p-3 bg-white rounded border border-blue-300 hover:bg-blue-50 transition-colors text-sm text-slate-700"
              >
                <ChevronRight className="w-4 h-4 inline mr-2 text-blue-600" />
                Provide updates
              </button>
            </div>
          </div>
        ),
        timestamp: '2:36 PM',
      },
    ],
    // Step 4: User updates shown
    [
      {
        id: 1,
        type: 'user',
        content: "I'm starting a new project on voice, not sure where to start",
        timestamp: '2:34 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">These other teams already built voice recently!</p>
            <div className="space-y-2 mt-3">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 1</div>
                <div className="text-sm text-blue-700 mt-1">Voice agent for customer service - Completed Q4 2025</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 2</div>
                <div className="text-sm text-blue-700 mt-1">Voice integration with Data Cloud - In progress</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 3</div>
                <div className="text-sm text-blue-700 mt-1">Voice analytics dashboard - Completed Q3 2025</div>
              </div>
            </div>
          </div>
        ),
        timestamp: '2:34 PM',
      },
      {
        id: 3,
        type: 'user',
        content: 'thanks, im still just getting started',
        timestamp: '2:35 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p>Great! I can help you write your weekly update. What progress have you made this week?</p>
          </div>
        ),
        timestamp: '2:36 PM',
      },
      {
        id: 5,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            Set up initial voice agent architecture{'\n'}
            Completed API integration testing{'\n'}
            Working on Data Cloud connector
          </div>
        ),
        timestamp: '2:37 PM',
      },
    ],
    // Step 5: Agent summarizes
    [
      {
        id: 1,
        type: 'user',
        content: "I'm starting a new project on voice, not sure where to start",
        timestamp: '2:34 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">These other teams already built voice recently!</p>
            <div className="space-y-2 mt-3">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 1</div>
                <div className="text-sm text-blue-700 mt-1">Voice agent for customer service - Completed Q4 2025</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 2</div>
                <div className="text-sm text-blue-700 mt-1">Voice integration with Data Cloud - In progress</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 3</div>
                <div className="text-sm text-blue-700 mt-1">Voice analytics dashboard - Completed Q3 2025</div>
              </div>
            </div>
          </div>
        ),
        timestamp: '2:34 PM',
      },
      {
        id: 3,
        type: 'user',
        content: 'thanks, im still just getting started',
        timestamp: '2:35 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p>Great! I can help you write your weekly update. What progress have you made this week?</p>
          </div>
        ),
        timestamp: '2:36 PM',
      },
      {
        id: 5,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            Set up initial voice agent architecture{'\n'}
            Completed API integration testing{'\n'}
            Working on Data Cloud connector
          </div>
        ),
        timestamp: '2:37 PM',
      },
      {
        id: 6,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">How's this for your weekly update?</p>
            <div className="mt-4 space-y-3">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Accomplishments:
                </div>
                <div className="text-sm text-green-800">
                  • Established voice agent architecture foundation{'\n'}
                  • Successfully completed API integration testing{'\n'}
                  • Initiated Data Cloud connector development
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="font-semibold text-amber-900 mb-2">Blockers:</div>
                <div className="text-sm text-amber-800">
                  • Data Cloud connector configuration pending
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">Does this look good?</p>
          </div>
        ),
        timestamp: '2:38 PM',
      },
    ],
    // Step 6: Final user confirmation
    [
      {
        id: 1,
        type: 'user',
        content: "I'm starting a new project on voice, not sure where to start",
        timestamp: '2:34 PM',
      },
      {
        id: 2,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">These other teams already built voice recently!</p>
            <div className="space-y-2 mt-3">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 1</div>
                <div className="text-sm text-blue-700 mt-1">Voice agent for customer service - Completed Q4 2025</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 2</div>
                <div className="text-sm text-blue-700 mt-1">Voice integration with Data Cloud - In progress</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Team 3</div>
                <div className="text-sm text-blue-700 mt-1">Voice analytics dashboard - Completed Q3 2025</div>
              </div>
            </div>
          </div>
        ),
        timestamp: '2:34 PM',
      },
      {
        id: 3,
        type: 'user',
        content: 'thanks, im still just getting started',
        timestamp: '2:35 PM',
      },
      {
        id: 4,
        type: 'agent',
        content: (
          <div>
            <p>Great! I can help you write your weekly update. What progress have you made this week?</p>
          </div>
        ),
        timestamp: '2:36 PM',
      },
      {
        id: 5,
        type: 'user',
        content: (
          <div className="whitespace-pre-line">
            Set up initial voice agent architecture{'\n'}
            Completed API integration testing{'\n'}
            Working on Data Cloud connector
          </div>
        ),
        timestamp: '2:37 PM',
      },
      {
        id: 6,
        type: 'agent',
        content: (
          <div>
            <p className="mb-3">How's this for your weekly update?</p>
            <div className="mt-4 space-y-3">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Accomplishments:
                </div>
                <div className="text-sm text-green-800 whitespace-pre-line">
                  • Established voice agent architecture foundation{'\n'}
                  • Successfully completed API integration testing{'\n'}
                  • Initiated Data Cloud connector development
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="font-semibold text-amber-900 mb-2">Blockers:</div>
                <div className="text-sm text-amber-800">
                  • Data Cloud connector configuration pending
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">Does this look good?</p>
          </div>
        ),
        timestamp: '2:38 PM',
      },
      {
        id: 7,
        type: 'user',
        content: 'Yup, post it',
        timestamp: '2:39 PM',
      },
      {
        id: 8,
        type: 'agent',
        content: (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Posted to #fde-weekly-customer-update</span>
          </div>
        ),
        timestamp: '2:39 PM',
      },
    ],
  ];

  const currentMessages = conversationSteps[step] || [];

  const handleNext = () => {
    if (step < conversationSteps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setShowUpdateForm(false);
    setUserUpdates('');
  };

  return (
    <div>
      <SlackPrototype>
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {currentMessages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'agent' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className={`max-w-[70%] ${message.type === 'user' ? 'order-1' : ''}`}>
                  <div
                    className={`rounded-2xl px-4 py-2.5 ${
                      message.type === 'user'
                        ? 'bg-[#007A5A] text-white rounded-tr-sm'
                        : 'bg-white text-slate-900 rounded-tl-sm border border-slate-200'
                    }`}
                  >
                    <div className="text-sm leading-relaxed">{message.content}</div>
                  </div>
                  {message.timestamp && (
                    <div className={`text-xs text-slate-500 mt-1 px-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                      {message.timestamp}
                    </div>
                  )}
                </div>
                {message.type === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Continue Button */}
          {step < conversationSteps.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-6"
            >
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-medium shadow-sm"
              >
                Continue Conversation
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* Reset Button */}
          {step === conversationSteps.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-6"
            >
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium shadow-sm"
              >
                Restart Scenario
              </button>
            </motion.div>
          )}
        </div>
      </SlackPrototype>
    </div>
  );
}
