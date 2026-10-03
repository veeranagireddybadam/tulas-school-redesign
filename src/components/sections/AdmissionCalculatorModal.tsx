import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/tisData';

interface AdmissionCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToInquiry: (selectedGrade: string) => void;
}

export const AdmissionCalculatorModal: React.FC<AdmissionCalculatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToInquiry
}) => {
  const [grade, setGrade] = useState('Class IX');
  const [boardType, setBoardType] = useState<'residential' | 'day'>('residential');
  const [stream, setStream] = useState<'science' | 'commerce' | 'humanities'>('science');
  const [selectedSport, setSelectedSport] = useState('Archery & Precision Shooting');

  if (!isOpen) return null;

  const isSenior = grade === 'Class XI' || grade === 'Class XII';

  // Fee calculation estimation logic
  const calculateFee = () => {
    let baseTuition = 180000;
    if (isSenior) baseTuition = 240000;
    else if (['Class IX', 'Class X'].includes(grade)) baseTuition = 210000;

    let boardingFee = boardType === 'residential' ? 270000 : 90000;
    let sportsAcademyFee = 50000; // includes 16+ Olympic coaching
    let pastoralCare = boardType === 'residential' ? 40000 : 15000;

    const total = baseTuition + boardingFee + sportsAcademyFee + pastoralCare;
    return {
      tuition: baseTuition,
      boarding: boardingFee,
      sports: sportsAcademyFee,
      pastoral: pastoralCare,
      total: total
    };
  };

  const fees = calculateFee();

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border border-brand-gold/40 shadow-2xl z-10 my-8 overflow-hidden bg-white/95 dark:bg-brand-dark-card/95"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-brand-crimson text-white">
            <Calculator className="w-6 h-6 text-brand-gold-light" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 dark:text-white">
              Admission Fee & Eligibility Estimator
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Interactive fee calculator for Session {SCHOOL_INFO.admissionsSession}
            </p>
          </div>
        </div>

        {/* Step-by-Step Selection Form */}
        <div className="space-y-6 text-sm">
          {/* 1. Grade Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
              1. Select Student Grade / Standard
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {['Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII'].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGrade(g)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                    grade === g
                      ? 'bg-brand-crimson text-white border-brand-crimson shadow-md'
                      : 'bg-neutral-50 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:border-brand-gold'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Boarding Format */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
              2. Boarding Format
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setBoardType('residential')}
                className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                  boardType === 'residential'
                    ? 'border-brand-crimson bg-brand-crimson/5 dark:bg-brand-crimson/15'
                    : 'border-neutral-200 dark:border-neutral-800 hover:border-brand-gold'
                }`}
              >
                <div className={`w-4 h-4 rounded-full mt-0.5 border flex items-center justify-center shrink-0 ${boardType === 'residential' ? 'border-brand-crimson bg-brand-crimson text-white' : 'border-neutral-400'}`}>
                  {boardType === 'residential' && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <div>
                  <p className="font-bold text-xs text-neutral-900 dark:text-white">Full Residential Boarding (24/7)</p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">AC Dormitory, 5 Sattvic Meals, Laundry & Pastoral Care</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setBoardType('day')}
                className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                  boardType === 'day'
                    ? 'border-brand-crimson bg-brand-crimson/5 dark:bg-brand-crimson/15'
                    : 'border-neutral-200 dark:border-neutral-800 hover:border-brand-gold'
                }`}
              >
                <div className={`w-4 h-4 rounded-full mt-0.5 border flex items-center justify-center shrink-0 ${boardType === 'day' ? 'border-brand-crimson bg-brand-crimson text-white' : 'border-neutral-400'}`}>
                  {boardType === 'day' && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <div>
                  <p className="font-bold text-xs text-neutral-900 dark:text-white">Day Boarding (Extended Hours)</p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Academic Immersion, Lunch, Snacks & Evening Sports</p>
                </div>
              </button>
            </div>
          </div>

          {/* 3. Stream Selection (Only if Class XI or XII) */}
          {isSenior && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                3. Senior Secondary Academic Stream (Class XI – XII)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'science', label: 'Science (PCM / PCB)' },
                  { id: 'commerce', label: 'Commerce & Economics' },
                  { id: 'humanities', label: 'Humanities & Arts' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStream(s.id as any)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                      stream === s.id
                        ? 'bg-brand-teal text-white border-brand-teal shadow-md'
                        : 'bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Fee Calculation Breakdown Card */}
          <div className="p-5 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 border border-brand-gold/30 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-800 text-xs">
              <span className="text-neutral-500">Academic Tuition & Einstein Labs:</span>
              <span className="font-bold text-neutral-800 dark:text-neutral-200">₹{fees.tuition.toLocaleString('en-IN')} / yr</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-800 text-xs">
              <span className="text-neutral-500">Boarding, AC Hostels & Organic Meals:</span>
              <span className="font-bold text-neutral-800 dark:text-neutral-200">₹{fees.boarding.toLocaleString('en-IN')} / yr</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-800 text-xs">
              <span className="text-neutral-500">16+ Olympic Sports & Certified Mentorship:</span>
              <span className="font-bold text-neutral-800 dark:text-neutral-200">Included (₹{fees.sports.toLocaleString('en-IN')})</span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div>
                <p className="text-xs uppercase font-extrabold text-neutral-500 tracking-wider">Estimated Annual Total</p>
                <p className="text-[10px] text-neutral-400">Installment plans & sibling scholarships available</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-display font-black text-brand-crimson dark:text-brand-gold">
                  ₹{fees.total.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-neutral-500 block">/ academic session</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-neutral-500 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
            Transparent fee structure. Zero hidden annual charges.
          </p>

          <button
            onClick={() => {
              onClose();
              onProceedToInquiry(grade);
            }}
            data-cursor-text="Apply"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-crimson hover:bg-brand-crimson-light text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>Proceed with {grade} Application</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
