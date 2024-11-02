import { Zap, Users, Clock, FileAudio, Shield, Download } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Transcribe a 60-minute audio in under 10 minutes.',
    icon: Zap,
  },
  {
    name: 'Speaker Diarization',
    description: 'Automatically identify and label different speakers in your recordings.',
    icon: Users,
  },
  {
    name: 'Real-time Processing',
    description: 'Watch your transcription appear in real-time as the audio processes.',
    icon: Clock,
  },
  {
    name: 'Multiple Formats',
    description: 'Support for MP4, MP3, WAV, and more audio/video formats.',
    icon: FileAudio,
  },
  {
    name: 'Secure & Private',
    description: 'Enterprise-grade security with end-to-end encryption.',
    icon: Shield,
  },
  {
    name: 'Easy Export',
    description: 'Download transcripts in TXT, DOCX, or SRT formats.',
    icon: Download,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Quikscribe?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features designed to make transcription effortless
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <feature.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-center text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}