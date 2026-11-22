import React, { useState } from 'react';
import { 
  Users, 
  Video, 
  ShieldCheck, 
  Share2, 
  Heart, 
  CheckCircle2, 
  Lock, 
  AlertTriangle, 
  Eye, 
  PlusCircle, 
  Sparkles, 
  Globe, 
  X,
  Play
} from 'lucide-react';
import { CROWDFUNDING_CAMPAIGNS } from '../data/crowdfunding';

export default function PatientStories() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [isSubmitStoryOpen, setIsSubmitStoryOpen] = useState(false);
  const [submittedForModeration, setSubmittedForModeration] = useState(false);

  // Story submission form state
  const [storyForm, setStoryForm] = useState({
    title: '',
    patientName: '',
    relationship: 'Patient Himself/Herself',
    storyText: '',
    consentWebsite: true,
    consentInstagram: true,
    consentOtherSocial: false,
    doNotPromotePublicly: false,
    faceBlurPreference: false,
    aliasPreference: false,
    videoFile: 'patient_journey_video.mp4'
  });

  const handleStorySubmit = (e) => {
    e.preventDefault();
    setSubmittedForModeration(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title & Introduction */}
      <div className="pb-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-purple-100 text-purple-700">
              <Users className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold text-slate-900">
              Patient Stories & Consent-Based Social Media Fundraising
            </h1>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Authentic cancer recovery journeys shared with rigorous privacy safeguards. Admin moderation and explicit multi-channel consent are mandatory.
          </p>
        </div>

        <button
          onClick={() => { setIsSubmitStoryOpen(true); setSubmittedForModeration(false); }}
          className="flex items-center space-x-1.5 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow transition-all self-start md:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Submit Story for Moderated Promotion</span>
        </button>
      </div>

      {/* Explicit Consent Framework Banner */}
      <div className="mt-6 p-4 bg-slate-900 text-slate-200 rounded-2xl flex items-start space-x-3.5 shadow-md">
        <Lock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <p className="font-bold text-white uppercase tracking-wider text-[11px]">
            Zero Unconsented Exposure Protocol
          </p>
          <p className="text-slate-300 leading-relaxed">
            Unlike commercial platforms that scrape and repost patient struggles, CancerCare Grid operates a <strong>strict consent-confirmed workflow</strong>:
            <span className="text-purple-300 font-mono"> User uploads video → Admin moderation → Consent confirmation → Campaign approved → Multi-channel promotion</span>.
            Patients retain the right to revoke consent or blur identifiable imagery at any time.
          </p>
        </div>
      </div>

      {/* Stories Gallery */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {CROWDFUNDING_CAMPAIGNS.map(camp => (
          <div 
            key={camp.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
          >
            <div>
              {/* Video Thumbnail Simulation */}
              <div 
                onClick={() => setSelectedStory(camp)}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl h-44 flex items-center justify-center text-white cursor-pointer group overflow-hidden mb-4 shadow-inner"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-purple-600 backdrop-blur flex items-center justify-center transition-all group-hover:scale-110">
                  <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                </div>
                <span className="absolute bottom-2 right-2 text-[10px] font-mono font-bold bg-black/60 px-2 py-0.5 rounded text-white">
                  {camp.socialMediaPromotion.videoDuration || 'Audio Narrative'}
                </span>
                <span className="absolute top-2 left-2 inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-bold bg-teal-500/90 text-white">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Admin Approved</span>
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {camp.patientName}
              </h3>
              <p className="text-xs font-semibold text-purple-700 mt-0.5">
                {camp.diagnosedCondition}
              </p>

              <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                {camp.storySummary}
              </p>

              {/* Granular Consent Badges */}
              <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  User Granted Channels:
                </span>
                <div className="flex flex-wrap gap-1">
                  {camp.socialMediaPromotion.channelsAllowed.map((ch, idx) => (
                    <span key={idx} className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded bg-purple-50 text-purple-800 border border-purple-200">
                      {ch.includes('Instagram') ? <Share2 className="w-2.5 h-2.5 mr-1 text-pink-600" /> : <Globe className="w-2.5 h-2.5 mr-1 text-teal-600" />}
                      {ch}
                    </span>
                  ))}
                </div>
              </div>

              {/* Latest Clinical Update */}
              {camp.updates && camp.updates[0] && (
                <div className="mt-3 p-2.5 bg-slate-50 rounded-xl text-[11px] border border-slate-200/80">
                  <span className="font-bold text-slate-800 block text-[10px]">
                    Update: {camp.updates[0].title}
                  </span>
                  <p className="text-slate-500 mt-0.5 truncate">{camp.updates[0].note}</p>
                </div>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">
                Consent: {camp.socialMediaPromotion.consentTimestamp}
              </span>
              <button
                onClick={() => setSelectedStory(camp)}
                className="font-bold text-purple-700 hover:text-purple-900 transition-colors"
              >
                Watch Journey →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* STORY DETAIL & VIDEO PREVIEW MODAL */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl space-y-5 my-8 animate-in fade-in">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{selectedStory.patientName}'s Story</h3>
                <p className="text-xs text-purple-700 font-semibold">{selectedStory.diagnosedCondition}</p>
              </div>
              <button 
                onClick={() => setSelectedStory(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Video Player */}
            <div className="relative bg-slate-950 rounded-2xl h-64 flex flex-col items-center justify-center text-white overflow-hidden shadow-inner border border-slate-800">
              <div className="w-16 h-16 rounded-full bg-purple-600/90 flex items-center justify-center shadow-lg">
                <Play className="w-7 h-7 text-white fill-current ml-1" />
              </div>
              <p className="mt-3 text-xs text-slate-300 font-medium">
                Simulated Patient Video Narrative ({selectedStory.socialMediaPromotion.videoDuration || 'Audio Log'})
              </p>
              <div className="absolute bottom-3 left-4 text-[11px] text-teal-400 flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                <span>Verified Patient Consent Confirmed</span>
              </div>
            </div>

            <div className="text-xs text-slate-700 leading-relaxed space-y-2">
              <p>{selectedStory.fullStory}</p>
            </div>

            {/* Updates list */}
            <div className="p-4 bg-slate-50 rounded-xl space-y-2 border border-slate-200">
              <span className="text-xs font-bold text-slate-800 block">Progress Log from Hospital:</span>
              {selectedStory.updates.map((u, i) => (
                <div key={i} className="text-xs border-l-2 border-purple-500 pl-3 py-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-900">{u.title}</span>
                    <span className="text-[10px] text-slate-400 font-mono">({u.date})</span>
                  </div>
                  <p className="text-slate-600 mt-0.5">{u.note}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={() => setSelectedStory(null)}
                className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUBMISSION MODAL WITH EXPLICIT CONSENT CHOICES */}
      {isSubmitStoryOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl space-y-5 my-8 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900">Share Your Story for Community Promotion</h3>
                <p className="text-xs text-slate-500">You control which platforms share your story.</p>
              </div>
              <button 
                onClick={() => setIsSubmitStoryOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedForModeration ? (
              <div className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Story Received for Admin Privacy Moderation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you for submitting your story. Our moderation desk will confirm your medical verification, apply any face-blurring preferences, and post strictly to your selected channels.
                </p>
                <button
                  onClick={() => setIsSubmitStoryOpen(false)}
                  className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleStorySubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Patient Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Meera S."
                      value={storyForm.patientName}
                      onChange={(e) => setStoryForm({ ...storyForm, patientName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Submitting Relationship</label>
                    <select
                      value={storyForm.relationship}
                      onChange={(e) => setStoryForm({ ...storyForm, relationship: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 bg-white"
                    >
                      <option>Patient Himself/Herself</option>
                      <option>Immediate Family Caregiver</option>
                      <option>Legal Guardian</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Written Narrative & Message</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Share the journey, emotional milestones, and how donor support impacts your fight..."
                    value={storyForm.storyText}
                    onChange={(e) => setStoryForm({ ...storyForm, storyText: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Explicit Consent Selection (As specified in prompt) */}
                <div className="p-4 bg-purple-50/70 rounded-2xl border border-purple-200 space-y-2.5">
                  <span className="text-xs font-bold text-purple-950 block">
                    Choose Your Explicit Promotion Channels:
                  </span>
                  
                  <label className="flex items-center space-x-2.5 text-xs text-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={storyForm.consentWebsite}
                      onChange={(e) => setStoryForm({ ...storyForm, consentWebsite: e.target.checked })}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <span>☑ CancerCare Grid Website Only</span>
                  </label>

                  <label className="flex items-center space-x-2.5 text-xs text-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={storyForm.consentInstagram}
                      onChange={(e) => setStoryForm({ ...storyForm, consentInstagram: e.target.checked })}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <span>☑ Instagram Partner Reels & Stories</span>
                  </label>

                  <label className="flex items-center space-x-2.5 text-xs text-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={storyForm.consentOtherSocial}
                      onChange={(e) => setStoryForm({ ...storyForm, consentOtherSocial: e.target.checked })}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <span>☑ Other Social Platforms (LinkedIn / Twitter)</span>
                  </label>

                  <label className="flex items-center space-x-2.5 text-xs text-slate-800 cursor-pointer pt-1 border-t border-purple-200/60">
                    <input
                      type="checkbox"
                      checked={storyForm.doNotPromotePublicly}
                      onChange={(e) => {
                        const val = e.target.checked;
                        setStoryForm({
                          ...storyForm,
                          doNotPromotePublicly: val,
                          consentWebsite: !val,
                          consentInstagram: !val,
                          consentOtherSocial: !val
                        });
                      }}
                      className="w-4 h-4 text-slate-600 rounded"
                    />
                    <span className="font-semibold text-rose-700">☐ Do Not Promote Publicly (Private donor link only)</span>
                  </label>
                </div>

                {/* Privacy Safeguards */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
                  <span className="font-bold text-slate-800 block text-[11px]">Privacy Safeguards:</span>
                  <label className="flex items-center space-x-2 text-slate-700">
                    <input
                      type="checkbox"
                      checked={storyForm.faceBlurPreference}
                      onChange={(e) => setStoryForm({ ...storyForm, faceBlurPreference: e.target.checked })}
                      className="w-3.5 h-3.5 text-purple-600 rounded"
                    />
                    <span>Please blur facial features in any published video footage</span>
                  </label>
                  <label className="flex items-center space-x-2 text-slate-700">
                    <input
                      type="checkbox"
                      checked={storyForm.aliasPreference}
                      onChange={(e) => setStoryForm({ ...storyForm, aliasPreference: e.target.checked })}
                      className="w-3.5 h-3.5 text-purple-600 rounded"
                    />
                    <span>Use a pseudonym / first-name only for anonymity</span>
                  </label>
                </div>

                <div className="pt-2 flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitStoryOpen(false)}
                    className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow"
                  >
                    Submit for Admin Moderation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
