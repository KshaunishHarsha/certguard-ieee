
'use client';

import { forwardRef } from 'react';
import type { CertificateRecord } from '@/lib/firestore-db';
import { DefaultTemplate } from './templates/DefaultTemplate';
import { NmimsTemplate } from './templates/NmimsTemplate';
import { MumbaiUniversityTemplate } from './templates/MumbaiUniversityTemplate';

interface CertificateRendererProps {
  certificate: Partial<CertificateRecord>;
  qrCodeValue: string;
}

export const CertificateRenderer = forwardRef<HTMLDivElement, CertificateRendererProps>(({ certificate, qrCodeValue }, ref) => {
  if (!certificate) return null;

  const institution = certificate.issuingInstitution || '';

  // Select the template based on the institution name
  switch (institution.toLowerCase()) {
    case 'nmims':
      return <NmimsTemplate ref={ref} certificate={certificate} qrCodeValue={qrCodeValue} />;
    case 'mumbai university':
      return <MumbaiUniversityTemplate ref={ref} certificate={certificate} qrCodeValue={qrCodeValue} />;
    default:
      return <DefaultTemplate ref={ref} certificate={certificate} qrCodeValue={qrCodeValue} />;
  }
});

CertificateRenderer.displayName = 'CertificateRenderer';

    