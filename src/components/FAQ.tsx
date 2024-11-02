const faqs = [
  {
    question: 'What file formats do you support?',
    answer: 'We support most common audio and video formats including MP3, MP4, WAV, M4A, and more. Files can be up to 2GB in size.',
  },
  {
    question: 'How accurate is the transcription?',
    answer: 'Our AI-powered transcription typically achieves 98%+ accuracy for clear audio. Factors like audio quality, background noise, and accents can affect accuracy.',
  },
  {
    question: 'How does speaker diarization work?',
    answer: 'Our AI automatically detects different speakers in the audio and labels them accordingly. It can distinguish between multiple speakers even in complex conversations.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use enterprise-grade encryption for all files and transcripts. Files are automatically deleted after processing unless you choose to save them.',
  },
  {
    question: 'What happens after my free trial?',
    answer: "After your free trial, you can choose to upgrade to our Pro plan or continue with limited features. We will notify you before your trial ends.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about Quikscribe
          </p>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white p-8 rounded-2xl shadow-sm">
                <dt className="text-lg font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}