import { Award, Users, Globe } from 'lucide-react';

export default function AboutUs() {
  return (
    <div id='about'>
      <div className="flex-1 bg-[#f5f2ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Quikscribe
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Making speech-to-text conversion accessible to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Quikscribe, we believe in making professional transcription services accessible to everyone. Our AI-powered platform transforms the way people convert speech to text, saving hours of manual work and delivering accurate results in seconds.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Award className="h-8 w-8 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
                <p className="text-gray-600">
                  98%+ accuracy in transcriptions with our advanced AI models
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Users className="h-8 w-8 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Community</h3>
                <p className="text-gray-600">
                  Trusted by users from over 100 countries worldwide
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Globe className="h-8 w-8 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multilingual</h3>
                <p className="text-gray-600">
                  Supporting 30+ languages with native-level accuracy
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Continuously improving our technology to deliver better results
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  Making professional transcription available to everyone
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy</h3>
                <p className="text-gray-600">
                  Ensuring your data is secure and protected at all times
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}