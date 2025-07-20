import React from 'react'
import { Award, Search, Settings, Headphones } from 'lucide-react'

const AboutSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900 ">ABOUT US</h1>
          <h2 className="text-xl font-medium text-red-700 mb-6">
            PT. DUA PERMATA MULIA
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Company Overview */}
          <div>
            {/* <p className="text-xl text-gray-700 max-w-4xl  leading-relaxed">
              <span className="font-semibold text-red-700">
                Empowering Smarter Collaboration
              </span>{' '}
              through advanced AI-driven cameras, smart classroom, voice
              tracking, and video conferencing solutions for enterprise
              communications.
            </p> */}
            <div className="mb-8 mt-4 text-justify">
              <p className="text-gray-700 leading-relaxed mb-4">
                Dua Permata Mulia is a trusted distributor and supplier of
                high-quality telecommunications equipment based in Indonesia,
                specializing in audio and video conferencing solutions. We
                provide a wide range of reliable products from leading brands to
                support communication needs in{' '}
                <strong>
                  professional AV, smart classroom tools, streaming, video
                  conferencing, and tracking applications
                </strong>
                . Our focus is on delivering accessible, effective solutions
                tailored to our clients&apos; needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our advanced voice tracking solution and AI-driven camera
                systems provide cost-effective communication infrastructure
                designed for multi-location coordination and enterprise-grade
                video conferencing requirements.
              </p>
            </div>

            <div className="border-l-4 border-red-700 pl-6">
              <h4 className="text-md lg:text-lg font-semibold text-gray-900 mb-3">
                Authorized Partnership
              </h4>
              <p className="text-gray-700 leading-relaxed">
                As an{' '}
                <span className="font-semibold">Authorized Distributor</span> of
                Soundwin and Aver Video Conference systems, we provide direct
                access to industry-leading telecommunications technology
                solutions.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-8">
              Comprehensive Services
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F8F9FC] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="text-md lg:text-lg font-semibold text-gray-900 mb-2">
                    Quality Products with Warranty
                  </h4>
                  <p className="text-xs lg:text-md text-gray-600">
                    Premium telecommunications equipment backed by comprehensive
                    warranty coverage and quality assurance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F8F9FC] rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="text-md lg:text-lg font-semibold text-gray-900 mb-2">
                    Survey, Consultation & Design
                  </h4>
                  <p className="text-xs lg:text-md text-gray-600">
                    Expert site assessment, product consultation, and custom
                    system design tailored to organizational needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F8F9FC] rounded-full flex items-center justify-center">
                  <Settings className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="text-md lg:text-lg font-semibold text-gray-900 mb-2">
                    Professional Implementation
                  </h4>
                  <p className="text-xs lg:text-md text-gray-600">
                    Complete installation and system integration services
                    delivered by certified technical specialists.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F8F9FC] rounded-full flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="text-md lg:text-lg font-semibold text-gray-900 mb-2">
                    After-Sales Support
                  </h4>
                  <p className="text-xs lg:text-md text-gray-600">
                    Ongoing technical support, maintenance services, and system
                    optimization to ensure peak performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        {/* <div className="border-t border-gray-200 pt-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-700 rounded-full mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-md lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To establish ourselves as the premier provider of reliable and
              effective telecommunications solutions, delivering cutting-edge
              AI-driven camera systems and voice tracking technologies that
              foster trusted partnerships and drive organizational success for
              our clients.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default AboutSection
