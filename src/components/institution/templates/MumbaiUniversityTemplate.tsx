
import { forwardRef } from 'react';
import QRCode from 'qrcode.react';
import type { CertificateRecord } from '@/lib/firestore-db';

interface GeneratedCertificateProps {
  certificate: Partial<CertificateRecord>;
  qrCodeValue: string;
}

export const MumbaiUniversityTemplate = forwardRef<HTMLDivElement, GeneratedCertificateProps>(({ certificate, qrCodeValue }, ref) => {
  if (!certificate) return null;

  return (
    <div ref={ref} className="bg-[#FDFBF2] text-[#4A2E1A] p-8 w-[700px] border-[10px] border-double border-[#B4885A] font-[serif] relative overflow-hidden">
      {/* Ornate corner elements */}
      <div className="absolute top-2 left-2 w-16 h-16 border-t-2 border-l-2 border-[#B4885A]"></div>
      <div className="absolute top-2 right-2 w-16 h-16 border-t-2 border-r-2 border-[#B4885A]"></div>
      <div className="absolute bottom-2 left-2 w-16 h-16 border-b-2 border-l-2 border-[#B4885A]"></div>
      <div className="absolute bottom-2 right-2 w-16 h-16 border-b-2 border-r-2 border-[#B4885A]"></div>
      
      <div className="text-center relative z-10">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-wider">University of Mumbai</h1>
            <p className="text-sm">विद्यया अमृतं अश्नुते</p>
          </div>
        </div>

        <div className="w-3/4 h-px bg-[#B4885A] mx-auto my-6" />

        <h2 className="text-4xl font-bold tracking-wide">Certificate of Graduation</h2>
        
        <p className="text-lg mt-8">This is to certify that</p>
        <p className="text-5xl font-['Playfair_Display'] my-4 tracking-tight">{certificate.studentName}</p>
        <p className="text-lg">has been conferred the degree of</p>
        <p className="text-3xl font-bold my-2">{certificate.course}</p>
        <p className="text-base mt-2">having fulfilled all the academic requirements of the University.</p>

        <div className="flex justify-between items-end mt-16 text-sm">
          <div className="text-left w-1/3">
            <p className="font-bold">ID: <span className="font-normal break-all">{certificate.id}</span></p>
            <p className="font-bold">Grade: <span className="font-normal">{certificate.grade}</span></p>
            <p className="font-bold">Year: <span className="font-normal">{certificate.year}</span></p>
          </div>
          
          <div className="flex flex-col items-center">
             <QRCode value={qrCodeValue} size={90} level="H" bgColor="#FDFBF2" fgColor="#4A2E1A" />
             <p className="text-xs mt-1">Scan to Verify</p>
          </div>

          <div className="w-1/3 text-center">
            <div className="w-3/4 h-px bg-[#4A2E1A] mx-auto mb-1" />
            <p>Vice-Chancellor</p>
          </div>
        </div>
      </div>
    </div>
  );
});

MumbaiUniversityTemplate.displayName = 'MumbaiUniversityTemplate';
