'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Sparkles } from 'lucide-react';
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
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D99519] mb-2 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#F4B72F]" />
          <span>Direct Access</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061B35]">
          Advisory Communication Channels
        </h2>
        <p className="mt-2 text-base text-[#5A6A85] leading-relaxed">
          Reach out directly to schedule a diagnostic consultation or inquire about curriculum tracks.
        </p>
      </motion.div>

      {/* Channel Cards */}
      <div className="space-y-4">
        {contactPageData.contactChannels.map((channel) => {
          const Icon =
            channel.iconName === 'Mail'
              ? Mail
              : channel.iconName === 'Phone'
              ? Phone
              : MapPin;

          return (
            <motion.div
              key={channel.id}
              variants={fadeUp}
              className="group relative p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#F4B72F]/60 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              {/* Gold hairline indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F4B72F] to-[#F4B72F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#061B35] to-[#12244B] text-[#F4B72F] flex items-center justify-center shrink-0 border border-[#061B35] shadow-sm group-hover:scale-108 transition-transform">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold text-[#D99519] uppercase tracking-wider">
                    {channel.title}
                  </h3>

                  {channel.href ? (
                    <div>
                      <a
                        href={channel.href}
                        className="text-base sm:text-lg font-bold text-[#061B35] hover:text-[#075AC8] transition-colors mt-0.5 inline-block"
                      >
                        {channel.value}
                      </a>
                      {channel.secondaryValue && (
                        <div>
                          <a
                            href={`mailto:${channel.secondaryValue}`}
                            className="text-sm font-semibold text-[#075AC8] hover:text-[#061B35] transition-colors inline-block mt-0.5"
                          >
                            {channel.secondaryValue}
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-base sm:text-lg font-bold text-[#061B35] mt-0.5">
                      {channel.value}
                      {channel.secondaryValue && (
                        <span className="block text-sm font-normal text-[#5A6A85]">
                          {channel.secondaryValue}
                        </span>
                      )}
                    </p>
                  )}

                  <p className="mt-1 text-sm text-[#5A6A85]">{channel.description}</p>

                  <div className="mt-3 pt-2.5 border-t border-[#F1F5F9] flex items-center gap-1.5 text-xs font-bold text-[#D99519]">
                    <Clock className="h-3.5 w-3.5 text-[#F4B72F]" />
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
        className="p-6 rounded-2xl bg-gradient-to-br from-[#061B35] via-[#061B35] to-[#112347] text-white border border-[#F4B72F]/35 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F4B72F] via-[#F4B72F] to-[#F4B72F]" />
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-[#F4B72F]/15 text-[#F4B72F] flex items-center justify-center shrink-0 border border-[#F4B72F]/30">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-[#F4B72F] text-sm sm:text-base mb-1.5">Our Inquiry Standard</h3>
            <p className="text-xs sm:text-sm text-[#BACCE4] leading-relaxed">
              Every inquiry is reviewed directly by senior educational mentors. We do not use aggressive sales practices or share your confidential academic details with third parties.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
