
'use server';

/**
 * @fileOverview A server-side flow to calculate a certificate hash for client-side previews.
 * This is necessary because some crypto algorithms are not available in the browser.
 *
 * - getPreviewHash - A function that calculates and returns a hash.
 */

import { z } from 'zod';
import { calculateCertificateHash } from '@/lib/pki';

const PreviewHashInputSchema = z.object({
  id: z.string(),
  studentName: z.string(),
  course: z.string(),
  issuingInstitution: z.string(),
  grade: z.string(),
  rollNumber: z.string(),
  year: z.number(),
});
type PreviewHashInput = z.infer<typeof PreviewHashInputSchema>;

/**
 * Calculates a certificate hash on the server.
 * @param input The certificate details.
 * @returns The calculated hash.
 */
export async function getPreviewHash(input: PreviewHashInput): Promise<{ hash: string }> {
  const hash = calculateCertificateHash(input);
  return { hash };
}
