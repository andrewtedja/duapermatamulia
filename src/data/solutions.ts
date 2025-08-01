import { FileText, LucideIcon, PlayCircle } from 'lucide-react'

export type PartnerResource = {
  type: 'demo' | 'paper'
  text: string
  icon: LucideIcon
}

export type Partner = {
  id: string
  name: string
  logo: string
  description: string
  visitLink: string
  supportedModels: string[]
  resources: PartnerResource[]
  pdfPath: string
  pdfThumbnail: string
}

export const partners: Partner[] = [
  {
    id: 'shure',
    name: 'SHURE',
    logo: '/images/solutions/shure.png',
    description:
      'Endlessly flexible, for the most demanding spaces. From microphones to DSPs to loudspeakers, the Shure Microflex Ecosystem offers a complete portfolio of networked audio solutions that can be precisely tailored to your needs, for best in-class collaboration experiences in any room.',
    visitLink: 'https://www.shure.com/en-US',
    supportedModels: [
      'Shure® IntelliMix® P300 Audio Conferencing Processor',
      'Shure® MXA910 / MXA710/ MXA310 Microphone',
      'Shure® MXA920 Ceiling Array Microphone',
      'Shure® Microflex® Complete Wireless (MXCW) System'
    ],
    resources: [
      { type: 'demo', text: 'Demo Video >', icon: PlayCircle },
      {
        type: 'paper',
        text: 'Shure AV&r Multi-Camera Voice Tracking Solutions Paper',
        icon: FileText
      }
    ],
    pdfThumbnail: '/images/thumbnails/tn-shure.png',
    pdfPath: '/pdfs/pdf-shure.pdf'
  },
  {
    id: 'sennheiser',
    name: 'SENNHEISER',
    logo: '/images/solutions/sennheiser.png',
    description:
      'We live and breathe audio. We are driven by the passion to create audio solutions that make a difference. Experience seamless integration with your existing AV infrastructure through the powerful compatibility of Sennheiser and AVer products with major conferencing platforms. This versatile multi-camera switching and voice tracking solution enhances engagement and productivity across diverse environments—from immersive hybrid classrooms and corporate boardrooms to council meetings and live broadcast productions—delivering high-quality audio and video for impactful communication in education, enterprise, government, and media settings. ',
    visitLink: 'https://en-us.sennheiser.com/',
    supportedModels: [
      'Sennheiser TeamConnect Ceiling 2 Microphone',
      'Sennheiser TeamConnect Ceiling Medium Microphone'
    ],
    resources: [
      { type: 'demo', text: 'Product Demo >', icon: PlayCircle },
      { type: 'paper', text: 'Integration Guide', icon: FileText }
    ],
    pdfThumbnail: '/images/thumbnails/tn-sennheiser.png',
    pdfPath: '/pdfs/pdf-sennheiser.pdf'
  },
  {
    id: 'yamaha',
    name: 'YAMAHA',
    logo: '/images/solutions/yamaha.png',
    description:
      'Yamaha is a world leader in the manufacture and supply of professional audio products and solutions for a wide range of applications. These include installed and live sound reinforcement, immersive and acoustic enhancement, professional conferencing and systems for hospitality, corporate and education facilities. With a worldwide presence, Yamahas subsidiaries and its dealer networks provide comprehensive local services, backed by a global Yamaha support policy.',
    visitLink:
      'https://europe.yamaha.com/en/products/unified_communications/index.html',
    supportedModels: [
      'ADECIA Ceiling Solution',
      'ADECIA Tabletop Solution',
      'ADECIA Wireless Solution',
      'Remote Conference Processor RM-CR'
    ],
    resources: [
      { type: 'demo', text: 'Solution Overview >', icon: PlayCircle },
      { type: 'paper', text: 'Technical Specifications', icon: FileText }
    ],
    pdfThumbnail: '/images/thumbnails/tn-yamaha.png',
    pdfPath: '/pdfs/pdf-yamaha.pdf'
  },
  {
    id: 'audiotechnica',
    name: 'Audio-Technica',
    logo: '/images/solutions/audiotechnica.png',
    description:
      'Celebrating 60 years of audio excellence worldwide, Audio-Technica is a leading innovator in transducer technology, renowned for the design and manufacture of microphones, wireless microphones, headphones, mixers, and turntables for the audio industry.',
    visitLink: 'https://www.audio-technica.com/en-eu/',
    supportedModels: [
      'Audio-Technica ATND1061 Beamforming Ceiling Array Microphone',
      'Audio-Technica ATUC-50 and ATUC-IR Digital Discussion Systems'
    ],
    resources: [
      { type: 'demo', text: 'Product Overview >', icon: PlayCircle },
      { type: 'paper', text: 'Technical Documentation', icon: FileText }
    ],
    pdfThumbnail: '/images/thumbnails/tn-audiotechnica.png',
    pdfPath: '/pdfs/pdf-audiotechnica.pdf'
  },
  {
    id: 'biamp',
    name: 'Biamp',
    logo: '/images/solutions/biamp.png',
    description:
      'Biamp®, founded in 1976, is a recognized worldwide leader of innovative, networked media solutions that connect people through extraordinary audiovisual experiences. With award-winning products such as Tesira™ digital signal processors, Parlé™ Beamtracking™ microphones and conferencing bars, Apprimo™ touch interfaces, Impera™ control systems, Cambridge™ sound masking solutions, Vocia™ networked public address and voice communication systems, Desono™ business audio loudspeakers, Community™ performance loudspeakers, and Evoko™ room and desk booking systems, the company’s solutions are used in a wide range of applications, from conference rooms and hybrid work environments to performing arts venues, hospitality, and government facilities.',
    visitLink: 'https://www.biamp.com/',
    supportedModels: [
      'Biamp Parlé Conferencing Microphones',
      'Biamp TesiraFORTÉ Digital Signal Processor (DSP)'
    ],
    resources: [
      { type: 'demo', text: 'Solution Demo >', icon: PlayCircle },
      { type: 'paper', text: 'Integration Manual', icon: FileText }
    ],
    pdfThumbnail: '/images/thumbnails/tn-biamp.png',
    pdfPath: '/pdfs/pdf-biamp.pdf'
  },
  {
    id: 'bosch',
    name: 'BOSCH',
    logo: '/images/solutions/bosch.png',
    description:
      'The Bosch division Building Technologies is a leading global supplier of security, safety, and communications products and systems. In selected countries Bosch offers solutions and services for building security, energy efficiency and building automation. About 10,900 associates generated sales of 2.5 billion euros in 2022. Protecting lives, buildings and assets is the major aim. The product portfolio includes video security, intrusion detection, fire detection and voice evacuation systems as well as access control and management systems. Professional audio and conference systems for communication of voice, sound and music complete the range. Building Technologies develops and manufactures in its own plants in Europe, Americas and Asia.',
    visitLink:
      'https://www.boschsecurity.com/xc/en/solutions/conference-solutions/',
    supportedModels: [
      'DICENTIS Conference System',
      'DICENTIS Wireless Conference System'
    ],
    resources: [
      { type: 'demo', text: 'System Demo >', icon: PlayCircle },
      { type: 'paper', text: 'Configuration Guide', icon: FileText }
    ],
    pdfThumbnail: '/images/thumbnails/tn-bosch.png',
    pdfPath: '/pdfs/pdf-bosch.pdf'
  },
  {
    id: 'clearone',
    name: 'ClearOne',
    logo: '/images/solutions/clearone.png',
    description:
      'ClearOne is a global market leader enabling conferencing, collaboration, and network streaming solutions. We design, develop, and sell a range of products and services, including audio solutions, video solutions, and cloud-based collaboration tools, to businesses, educational institutions, and other organizations. ',
    visitLink: 'https://www.clearone.com/',
    supportedModels: [
      'ClearOne BMA 360 Beamforming Microphone Array System',
      'ClearOne BMA 360D Beamforming Microphone Array System',
      'ClearOne CONVERGE® Pro 2 Digital Signal Processor (DSP)'
    ],
    resources: [
      { type: 'demo', text: 'Technology Demo >', icon: PlayCircle },
      { type: 'paper', text: 'Product Datasheet', icon: FileText }
    ],
    pdfThumbnail: '/images/thumbnails/tn-clearone.png',
    pdfPath: '/pdfs/pdf-clearone.pdf'
  },
  {
    id: 'nureva',
    name: 'Nureva',
    logo: '/images/solutions/nureva.png',
    description:
      "Nureva Inc. is a technology-rich, multiple award-winning private company that imagines and builds audio conferencing solutions that remove barriers to communication.  With Nureva's Microphone Mist technology and AVer's expertise, we are setting new standards that were previously attainable only with traditional Pro AV solutions.",
    visitLink: 'https://www.nureva.com/',
    supportedModels: [
      'Nureva HDL300 Audio Conferencing System',
      'Nureva Dual HDL300 Audio Conferencing System',
      'Nureva HDL310 Audio Conferencing System',
      'Nureva HDL410 Audio Conferencing System'
    ],
    resources: [
      { type: 'demo', text: 'Product Demo >', icon: PlayCircle },
      { type: 'paper', text: 'Installation Guide', icon: FileText }
    ],
    pdfThumbnail: '/images/thumbnails/tn-nureva.png',
    pdfPath: '/pdfs/pdf-nureva.pdf'
  }
]
