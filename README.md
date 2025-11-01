# CertGuard: AI-Powered Secure Certificate Issuance & Verification Platform

CertGuard is a comprehensive, enterprise-grade platform designed to definitively combat academic and professional certificate fraud. It modernizes and secures the entire lifecycle of a credential—from issuance to verification—by integrating multiple layers of cutting-edge security technology, including AI, cryptographic hashing, and immutable blockchain principles.

[Watch a demo on YouTube](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## ✨ Core Features

### 🔐 Secure & Intelligent Issuance Workflow
- **AI-Powered OCR**: Use Google's Gemini to scan physical legacy certificates, automatically extract details, and pre-fill the digital issuance form, minimizing manual entry and errors.
- **Issue New Secure Certificates**: Create new, digitally native certificates with a robust, multi-layered security protocol applied instantly at the point of issuance.

### 🛡️ Multi-Layered Security Protocol
- **PKI-based Hashing**: Core certificate data is signed with a SHA-256 hash, creating a unique, tamper-proof digital fingerprint for every credential.
- **Immutable Hash Chain**: Inspired by blockchain, certificate hashes are linked in a chronological chain in Firestore. Any attempt to alter a past record breaks the chain, making tampering immediately evident during an integrity check.
- **Dual Embedded Signatures**: The unique cryptographic signature is embedded in two redundant ways:
  1. A secure, scannable **QR code** on the face of the document.
  2. An **invisible digital watermark** (using steganography) hidden within the document file's pixels.

### 🔍 Real-Time, Multi-Factor Verification
- **Flexible Verification Methods**: Verifiers can either scan a QR code with their device's camera or upload a digital file (PDF, PNG, JPG).
- **Comprehensive Validation Pipeline**: The system performs a multi-factor check in seconds, providing unparalleled trust in the result.

### 👤 Role-Based Access Control (RBAC)
- **Segregated Workflows**: The application provides secure, distinct portals for Institutions, Verifiers, and Administrators, each with a unique set of permissions and tools tailored to their function.

### 📈 Admin Monitoring & Security Dashboard
- **Centralized Oversight**: A dedicated dashboard for administrators to monitor verification trends, view forgery alerts, and manage system-level security controls.
- **Proactive Security**: Admins can manage a real-time blacklist of institutions and verify the integrity of the entire certificate hash chain on-demand.

## 🚀 The Verification Pipeline

CertGuard's verification process is a step-by-step pipeline designed to be both fast and exhaustive:

1.  **Input**: A verifier scans a QR code or uploads a document.
2.  **Signature Extraction**: The system extracts the digital signature from both the QR code and the invisible watermark.
3.  **Registry Cross-Check**: It fetches the authoritative hash for the certificate's ID from the central Firestore registry.
4.  **Cryptographic Comparison**: It compares both extracted signatures against the authoritative hash. A mismatch at this stage signifies a forgery.
5.  **Chain Integrity Audit**: The system algorithmically confirms that the record's `previousHash` link is valid, ensuring the historical chain has not been broken.
6.  **Content Validation**: It checks the issuing institution and course name against pre-approved allow-lists.
7.  **Blacklist Check**: Finally, it queries the real-time blacklist to ensure the issuing institution has not been flagged as compromised or fraudulent.
8.  **Verdict**: A final, trustworthy result (`Valid`, `Partially Valid`, or `Invalid`) is presented to the verifier with a detailed breakdown of each check.

##  roles  User Roles & Functionality

-   **Institution (`mit@edu`)**:
    -   Issues new, secure digital certificates.
    -   Onboards legacy physical certificates using an AI-powered OCR workflow.
    -   Manages the details of credentials before they are committed to the secure registry.

-   **Verifier (`verifier@google.com`)**:
    -   Accesses the verification tool to validate certificates.
    -   Can use their device's camera for real-time QR code scanning.
    -   Can upload PDF or image files to perform a full multi-factor verification.

-   **Admin (`admin@certguard.com`)**:
    -   Views a dashboard with analytics on verification activity (e.g., total vs. invalid).
    -   Receives and reviews real-time forgery alerts.
    -   Performs on-demand integrity checks of the entire certificate hash chain.
    -   Manages system security by adding compromised entities to a real-time blacklist.

## 🛠️ Technology Stack & Libraries

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN/UI](https://ui.shadcn.com/) & [Lucide React](https://lucide.dev/guide/packages/lucide-react) for icons.
-   **Database / Backend**: [Firebase](https://firebase.google.com/) (Firestore for the immutable registry).
-   **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit) (Google's GenAI toolkit).
-   **AI Models**: [Google Gemini](https://deepmind.google/technologies/gemini/) for multimodal OCR and data extraction.
-   **Form Management**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation.
-   **Certificate Generation**:
    -   `html-to-image`: To capture the React component as a high-resolution PNG.
    -   `jspdf`: To convert the generated PNG into a downloadable PDF.
    -   `qrcode.react`: To generate the scannable QR code.
-   **Watermarking (Steganography)**:
    -   `Jimp` & `png-js`: For low-level pixel manipulation to embed and extract the invisible watermark.
-   **PDF & QR Code Processing**:
    -   `pdfjs-dist`: To render and process uploaded PDF files on the client.
    -   `jsqr`: To detect and decode QR codes from the camera stream or uploaded files.
-   **Charting**: [Recharts](https://recharts.org/) for data visualization on the admin dashboard.

## 🏁 Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- A Firebase project with Firestore enabled.

### Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/certguard.git
   cd certguard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - The project is pre-configured to connect to a Firebase backend. The configuration is located in `src/lib/firebase-config.ts`. No changes are needed to run the application as-is.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:9002](http://localhost:9002) to view the application.

### Demo User Credentials
You can use the following credentials to log in and test the different roles:
- **Role:** `Admin`
  - **Email:** `admin@certguard.com`
  - **Password:** `password123`
- **Role:** `Institution`
  - **Email:** `mit@edu`
  - **Password:** `password123`
- **Role:** `Verifier`
  - **Email:** `verifier@google.com`
  - **Password:** `password123`

---

This project showcases a powerful, real-world application of modern web technologies, AI, and cryptographic principles to solve a significant problem.