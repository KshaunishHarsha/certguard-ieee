
import { forwardRef } from 'react';
import QRCode from 'qrcode.react';
import type { CertificateRecord } from '@/lib/firestore-db';

interface GeneratedCertificateProps {
  certificate: Partial<CertificateRecord>;
  qrCodeValue: string;
}

export const NmimsTemplate = forwardRef<HTMLDivElement, GeneratedCertificateProps>(({ certificate, qrCodeValue }, ref) => {
  if (!certificate) return null;

  return (
    <div ref={ref} className="bg-white text-gray-800 p-8 w-[700px] font-sans relative overflow-hidden border-l-8 border-red-700 shadow-2xl">
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-gray-50 rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gray-50 rounded-full"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <header className="flex justify-between items-start mb-8">
            <div>
                <h1 className="text-3xl font-bold text-red-800">NMIMS</h1>
                <p className="text-sm text-gray-500 mt-1">Narsee Monjee Institute of Management Studies</p>
            </div>
            <div className="text-right">
                <p className="text-xs text-gray-400">Certificate ID</p>
                <p className="text-xs font-mono font-semibold text-gray-600 break-all">{certificate.id}</p>
            </div>
        </header>

        <main className="flex-grow text-center my-6">
            <p className="text-red-800 font-semibold tracking-widest text-sm">CERTIFICATE OF COMPLETION</p>
            <h1 className="text-5xl font-bold my-4 text-gray-800 break-words">{certificate.studentName}</h1>
            <p className="text-lg text-gray-600">has successfully completed the program</p>
            <h2 className="text-3xl font-semibold mt-2 text-gray-900 break-words">{certificate.course}</h2>
        </main>

        <footer className="mt-auto flex justify-between items-end">
            <div className="flex items-center gap-4">
                <QRCode value={qrCodeValue} size={90} level="H" />
                <div>
                    <p className="font-bold text-gray-700">Verification</p>
                    <p className="text-xs text-gray-500">Scan the QR code to verify the authenticity of this document.</p>
                </div>
            </div>
            <div className="text-sm text-right">
                <p><span className="font-bold">Grade:</span> {certificate.grade}</p>
                <p><span className="font-bold">Roll Number:</span> {certificate.rollNumber}</p>
                <p><span className="font-bold">Year of Completion:</span> {certificate.year}</p>
            </div>
        </footer>
      </div>
    </div>
  );
});

NmimsTemplate.displayName = 'NmimsTemplate';
