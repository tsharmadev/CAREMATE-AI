import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle, 
  ExternalLink, 
  Bookmark, 
  RefreshCw, 
  CheckCircle2, 
  HelpCircle,
  ClipboardList,
  Coins,
  MapPin
} from 'lucide-react';
import { queryAssistant } from '../data/knowledgeBase';

export default function AiAssistant({ setActiveTab }) {
  const [messages, setMessages] = useState([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      title: 'Welcome to the Cancer Information & Navigation Assistant',
      content: `Hello. I am your verified **Cancer Information & Navigation Assistant**, aligned with National Cancer Grid (NCG) and Tata Memorial consensus guidelines.

I can help answer questions such as:
• Explaining medical terminology (Biopsies, IHC markers, Staging vs Grading)
• Guidance on documents to carry for upcoming consultations
• Navigating financial grants, Ayushman Bharat PM-JAY, and state funds
• Understanding chemotherapy side effect protocols and safety warning signs

*Important Clinical Notice: I am a navigation guide, not an AI doctor. I provide evidence-backed educational navigation from verified consensus databases and do not prescribe medical treatments.*`,
      sources: [
        { name: 'National Cancer Grid (NCG) India Guidelines', url: 'https://tmc.gov.in/ncg' },
        { name: 'ICMR Consensus Protocols', url: 'https://icmr.nic.in' }
      ]
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputPrompt;
    if (!query.trim()) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      content: query
    };

    setMessages(prev => [...prev, userMsg]);
    setInputPrompt('');
    setIsTyping(true);

    // Simulate RAG Knowledge Base Retrieval
    setTimeout(() => {
      const response = queryAssistant(query);
      const assistantMsg = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        title: response.title,
        content: response.content,
        sources: response.sources,
        topic: response.matchedTopic
      };

      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  const samplePrompts = [
    'What is a biopsy and why is it mandatory?',
    'What documents should I carry for my appointment?',
    'How can I find financial assistance & PM-JAY?',
    'What is the difference between Cancer Stage and Grade?',
    'How should chemotherapy side effects be managed at home?',
    'How does the District CancerCare Accessibility Score work?'
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title & Introduction */}
      <div className="pb-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-teal-100 text-teal-700">
              <Bot className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold text-slate-900">
              AI Cancer Information & Navigation Assistant
            </h1>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            RAG-powered conversational navigator grounded in verified clinical guidelines (NCG, ICMR, TMH). Non-diagnostic guidance with transparent source citations.
          </p>
        </div>

        <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-teal-50 text-teal-800 border border-teal-200 rounded-xl text-xs font-bold">
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>Evidence-Backed Knowledge Base</span>
        </div>
      </div>

      {/* Safety & Non-Diagnostic Clinical Notice */}
      <div className="mt-6 p-3.5 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-start space-x-3 text-xs text-amber-900">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong>Non-Diagnostic Information Guide:</strong> This AI navigator answers questions on terminology, documentation, and government schemes from verified medical literature. It does not replace individualized oncology diagnosis, staging, or treatment recommendations from a certified oncologist.
        </div>
      </div>

      {/* Quick Prompt Chips */}
      <div className="mt-6">
        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
          Frequently Consulted Topics (Click to ask):
        </span>
        <div className="flex flex-wrap gap-2">
          {samplePrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-xs bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-xl font-medium shadow-2xs transition-all hover:border-teal-400"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Stream Container */}
      <div className="mt-6 bg-white border border-slate-200 rounded-2xl shadow-card flex flex-col h-[600px] overflow-hidden">
        
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {messages.map(msg => (
            <div 
              key={msg.id}
              className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-slate-900 text-white font-medium rounded-tr-none'
                  : 'bg-slate-50 border border-slate-200/80 text-slate-800 rounded-tl-none shadow-xs space-y-3'
              }`}>
                {msg.title && (
                  <h4 className="text-sm font-bold text-teal-950 border-b border-slate-200/60 pb-2">
                    {msg.title}
                  </h4>
                )}

                <div className="whitespace-pre-line text-slate-700">
                  {msg.content}
                </div>

                {/* Sources & Citations Box */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="pt-3 border-t border-slate-200/60 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 block flex items-center">
                      <ShieldCheck className="w-3 h-3 mr-1 text-teal-600" />
                      Verified Consensus Sources & References:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.sources.map((src, i) => (
                        <a
                          key={i}
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-white border border-teal-200 text-[10px] font-semibold text-teal-800 hover:bg-teal-50 transition-colors"
                        >
                          <span>{src.name}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                  <span className="text-xs font-bold">You</span>
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-teal-600 flex items-center justify-center text-white shrink-0">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl rounded-tl-none text-xs text-slate-500 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce delay-150" />
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce delay-300" />
                <span className="ml-1 text-[11px] font-mono">Retrieving verified clinical guidelines...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Ask about cancer terms, visit documents, PM-JAY schemes, side effects..."
              className="flex-1 px-4 py-2.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputPrompt.trim() || isTyping}
              className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow flex items-center space-x-1.5 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Ask</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
