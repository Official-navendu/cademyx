'use client';

import React from 'react';
import { EnquiryModal, EnquiryModalProps } from '@/components/common/EnquiryModal';

export type HeroEnquiryModalProps = EnquiryModalProps;

export const HeroEnquiryModal: React.FC<HeroEnquiryModalProps> = (props) => {
  return <EnquiryModal {...props} />;
};
