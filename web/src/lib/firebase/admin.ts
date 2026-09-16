import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

// Initialize Firebase Admin SDK
if (!getApps().length) {
  try {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID || 'mock-project-id',
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL || 'mock@mock.com',
        // Handle newline characters in private key
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
          : 'mock-private-key',
      }),
    });
  } catch (error) {
    console.error('Firebase Admin initialization error', error);
  }
}

export const adminDb = getFirestore();
export const adminAuth = getAuth();
