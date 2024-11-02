import { Upload, Wand2, FileText } from 'lucide-react';

const steps = [
  {
    title: 'Upload Your File',
    description: 'Upload any audio or video file in supported formats (MP3, MP4, WAV, etc.)',
    icon: Upload,
  },
  {
    title: 'AI Processing',
    description: 'Our AI processes your file, identifying speakers and converting speech to text',
    icon: Wand2,
  },
  {
    title: 'Get Your Transcript',
    description: 'Download your accurate transcript in your preferred format',
    icon: FileText,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white py-24" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get your transcript in three simple steps
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute top-12 left-1/2 hidden w-full border-t-2 border-gray-200 md:block" />
                )}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">
                    <step.icon className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-center text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}