'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  onAuthStateChanged,
  signInAnonymously,
  signInWithPopup,
  linkWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  type User as FirebaseUser,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface UseAuthReturn {
  user: FirebaseUser | null;
  displayName: string | null;
  isGuest: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        signInAnonymously(auth).catch((err) => {
          setError(err instanceof Error ? err.message : 'Guest sign-in failed');
          setLoading(false);
        });
        return;
      }
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const current = auth.currentUser;
      if (current?.isAnonymous) {
        try {
          await linkWithPopup(current, provider);
          return;
        } catch (linkErr) {
          const code = (linkErr as { code?: string }).code;
          if (code !== 'auth/credential-already-in-use' && code !== 'auth/email-already-in-use') throw linkErr;
        }
      }
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Prijava nije uspela');
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    setError(null);
    try { await firebaseSignOut(auth); }
    catch (err) { setError(err instanceof Error ? err.message : 'Odjava nije uspela'); }
  }, []);

  return { user, displayName: user?.displayName ?? null, isGuest: !user || user.isAnonymous, signInWithGoogle, signOut, loading, error };
}
