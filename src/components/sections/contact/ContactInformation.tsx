'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { contactPageData } from '@/data/contact';
import { staggerContainer, fadeUp, defaultViewport } from '@/lib/motion';

export const ContactInformation: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="space-y-6"
    >
      {/* Information Header */}
      <motion.div variants={fadeUp}>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#182A9A] mb-2 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#182A9A]" />
          <span>Direct Access</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101F70]">
          Advisory Communication Channels
        </h2>
        <p className="mt-2 text-base text-[#26345C] leading-relaxed">
          Reach out directly to schedule a diagnostic consultation or inquire about curriculum tracks.
        </p>
      </motion.div>

      {/* Channel Cards */}
      <div className="space-y-4">
        {contactPageData.contactChannels.map((channel) => {
          const Icon = channel.iconName === 'Mail' ? Mail : MapPin;

          return (
            <motion.div
              key={channel.id}
              variants={fadeUp}
              className="group relative p-5 rounded-2xl bg-white border border-[#DCE3FF] hover:border-[#182A9A] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              {/* Blue hairline indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#182A9A] to-[#182A9A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#101F70] to-[#182A9A] text-white flex items-center justify-center shrink-0 border border-[#182A9A] shadow-sm group-hover:scale-108 transition-transform">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold text-[#182A9A] uppercase tracking-wider">
                    {channel.title}
                  </h3>

                  {channel.href ? (
                    <div>
                      <a
                        href={channel.href}
                        className="text-base sm:text-lg font-bold text-[#101F70] hover:text-[#182A9A] transition-colors mt-0.5 inline-block"
                      >
                        {channel.value}
                      </a>
                      {channel.secondaryValue && (
                        <div>
                          <a
                            href={`mailto:${channel.secondaryValue}`}
                            className="text-sm font-semibold text-[#182A9A] hover:text-[#101F70] transition-colors inline-block mt-0.5"
                          >
                            {channel.secondaryValue}
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-base sm:text-lg font-bold text-[#101F70] mt-0.5">
                      {channel.value}
                      {channel.secondaryValue && (
                        <span className="block text-sm font-normal text-[#6573A8]">
                          {channel.secondaryValue}
                        </span>
                      )}
                    </p>
                  )}

                  <p className="mt-1 text-sm text-[#26345C]">{channel.description}</p>

                  <div className="mt-3 pt-2.5 border-t border-[#DCE3FF]/40 flex items-center gap-1.5 text-xs font-bold text-[#182A9A]">
                    <Clock className="h-3.5 w-3.5 text-[#182A9A]" />
                    <span>{channel.note}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Advisory Service Notice */}
      <motion.div
        variants={fadeUp}
        className="p-6 rounded-2xl bg-gradient-to-br from-[#101F70] via-[#101F70] to-[#0D1959] text-white border border-[#DCE3FF]/20 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#182A9A] via-[#DCE3FF] to-[#182A9A]" />
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-[#182A9A]/30 text-[#DCE3FF] flex items-center justify-center shrink-0 border border-[#DCE3FF]/30">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-[#DCE3FF] text-sm sm:text-base mb-1.5">Our Inquiry Standard</h3>
            <p className="text-xs sm:text-sm text-[#DCE3FF]/90 leading-relaxed">
              Every inquiry is reviewed directly by senior educational mentors. We do not use aggressive sales practices or share your confidential academic details with third parties.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
