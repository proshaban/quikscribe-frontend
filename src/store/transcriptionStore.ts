import { create } from 'zustand';

interface TranscriptionState {
  file: File | null;
  transcription: string | null;
  status: 'idle' | 'processing' | 'completed' | 'error';
  progress: number;
  error: string | null;
  setFile: (file: File | null) => void;
  setTranscription: (text: string | null) => void;
  setStatus: (status: 'idle' | 'processing' | 'completed' | 'error') => void;
  setProgress: (progress: number) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useTranscriptionStore = create<TranscriptionState>((set) => ({
  file: null,
  transcription: null,
  status: 'idle',
  progress: 0,
  error: null,
  setFile: (file) => set({ file }),
  setTranscription: (transcription) => set({ transcription }),
  setStatus: (status) => set({ status }),
  setProgress: (progress) => set({ progress }),
  setError: (error) => set({ error }),
  reset: () => set({
    file: null,
    transcription: null,
    status: 'idle',
    progress: 0,
    error: null,
  }),
}));