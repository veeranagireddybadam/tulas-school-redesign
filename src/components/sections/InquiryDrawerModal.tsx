import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ShieldCheck, Download, Phone, Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO } from '../../data/tisData';

interface InquiryDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledGrade?: string;
}

const INDIAN_STATES = [
  "Uttarakhand", "Delhi", "Uttar Pradesh", "Haryana", "Punjab", "Bihar",
  "Rajasthan", "Maharashtra", "Gujarat", "Madhya Pradesh", "West Bengal",
  "Karnataka", "Tamil Nadu", "Telangana", "Andhra Pradesh", "Assam",
  "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Odisha",
  "Chhattisgarh", "Goa", "Kerala", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Sikkim", "Tripura", "Arunachal Pradesh", "Chandigarh",
  "Ladakh", "Puducherry", "Other International"
];

export const InquiryDrawerModal: React.FC<InquiryDrawerModalProps> = ({
  isOpen,
  onClose,
  prefilledGrade = 'Class IV'
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [selectedClass, setSelectedClass] = useState(prefilledGrade);
  const [selectedState, setSelectedState] = useState('Uttarakhand');
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = () => {
    if (!mobile || mobile.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    setOtpSent(true);
    setOtpInput('1234'); // Helpful preview default
  };

  const handleVerifyOtp = () => {
    if (otpInput.trim().length >= 4) {
      setOtpVerified(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobile) {
      alert("Please fill in your name and mobile number.");
      return;
    }

    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-brand-gold/40 shadow-2xl z-10 my-8 overflow-hidden bg-white dark:bg-brand-dark-card"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Submission Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-10 text-center space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white">
                Application Received!
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                Thank you, <span className="font-bold text-brand-crimson">{fullName}</span>. Our Senior Admissions Counselor has been notified and will call you on <span className="font-semibold">{countryCode} {mobile}</span> shortly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-sm mx-auto text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-neutral-500">Selected Grade:</span>
                <span className="font-bold">{selectedClass}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Academic Session:</span>
                <span className="font-bold">{SCHOOL_INFO.admissionsSession}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Campus:</span>
                <span className="font-bold">Dehradun, Uttarakhand</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-brand-crimson hover:bg-brand-crimson-light text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Brochure</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        ) : (
          /* Main Interactive Application Form */
          <div>
            <div className="space-y-1.5 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-crimson/10 text-brand-crimson dark:text-brand-crimson-light text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Direct Admissions Desk
              </div>
              <h3 className="text-2xl font-display font-extrabold text-neutral-900 dark:text-white">
                Enquire for Admission
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Session {SCHOOL_INFO.admissionsSession} • Tula's International School, Dehradun
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Parent / Guardian Full Name <span className="text-brand-crimson">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-brand-crimson text-neutral-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Email Address <span className="text-neutral-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. parent@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-brand-crimson text-neutral-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Row 2: Phone with OTP Simulation */}
              <div>
                <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                  Mobile Number <span className="text-brand-crimson">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-2.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 focus:outline-none text-neutral-900 dark:text-white font-bold"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US/CA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+65">+65 (SG)</option>
                    <option value="+977">+977 (NP)</option>
                    <option value="+880">+880 (BD)</option>
                  </select>

                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-brand-crimson text-neutral-900 dark:text-white"
                  />

                  {!otpVerified ? (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold whitespace-nowrap shadow-sm"
                    >
                      {otpSent ? 'Resend' : 'Send OTP'}
                    </button>
                  ) : (
                    <span className="px-3 py-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  )}
                </div>
              </div>

              {/* OTP Input Row (Appears when OTP is Sent) */}
              {otpSent && !otpVerified && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 flex items-center justify-between gap-3"
                >
                  <div className="flex-1">
                    <p className="text-[11px] text-amber-800 dark:text-amber-300 font-semibold mb-1">
                      Enter OTP sent to your phone (Demo Code: 1234):
                    </p>
                    <input
                      type="text"
                      maxLength={6}
                      value={otpInput}
                      onChange={(e) => setOtpInput(e.target.value)}
                      placeholder="1234"
                      className="w-32 px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-amber-300 dark:border-amber-700 font-bold tracking-widest text-center"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-sm"
                  >
                    Verify OTP
                  </button>
                </motion.div>
              )}

              {/* Row 3: Class & State Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Select Class for Admission <span className="text-brand-crimson">*</span>
                  </label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 focus:outline-none text-neutral-900 dark:text-white font-semibold"
                  >
                    <option value="Class IV">Class IV (Grade 4)</option>
                    <option value="Class V">Class V (Grade 5)</option>
                    <option value="Class VI">Class VI (Grade 6)</option>
                    <option value="Class VII">Class VII (Grade 7)</option>
                    <option value="Class VIII">Class VIII (Grade 8)</option>
                    <option value="Class IX">Class IX (Grade 9)</option>
                    <option value="Class X">Class X (Grade 10)</option>
                    <option value="Class XI">Class XI (Grade 11)</option>
                    <option value="Class XII">Class XII (Grade 12)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Select State / Location <span className="text-brand-crimson">*</span>
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 focus:outline-none text-neutral-900 dark:text-white font-semibold"
                  >
                    {INDIAN_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2 pt-2">
                <input
                  id="modal-consent"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded text-brand-crimson focus:ring-brand-crimson"
                />
                <label htmlFor="modal-consent" className="text-[11px] text-neutral-600 dark:text-neutral-400 cursor-pointer">
                  I agree to receive communications, prospectus details, and admission updates from Tula's International School, Dehradun.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                data-cursor-text="Submit"
                className="w-full py-3.5 rounded-xl bg-brand-crimson hover:bg-brand-crimson-light text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 mt-4"
              >
                <span>Submit Admission Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <div className="pt-2 text-center text-[10px] text-neutral-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                <span>Your information is strictly protected by TIS Privacy Policy</span>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
