export type ProductFeature = {
  id: string
  title: string
  description: string
  image: string
  layout: 'left' | 'right' | 'center'
}

export const productFeatures: Record<string, ProductFeature[]> = {
  'tr-315': [
    {
      id: 'f1',
      title: '12X Optical Zoom Magnifies Details',
      description: `Experience the exceptional power of the TR315 camera's astounding 12X optical zoom. This feature seamlessly operates even while the camera is panning and tilting, granting you the ability to accentuate content and quickly shift between shooting perspectives. Embrace the advantage of dynamic, crystal-clear video feeds through the TR315’s unparalleled PTZ performance.`,
      image: '/images/products/tr315/f1.png',
      layout: 'center'
    },
    {
      id: 'f2',
      title: 'HDMI/USB/IP. 4K 60 FPS.',
      description: `Leverage the TR315's 4K 60 fps streaming potential through HDMI, USB, and IP outputs. Free from intricate configurations and cable entanglements, you can effortlessly use multiple devices simultaneously to produce fluid video streams.`,
      image: '/images/products/tr315/f2.png',
      layout: 'right'
    },
    {
      id: 'f3',
      title: 'AI Auto Tracking Makes Streaming Smart & Effortless',
      description: `Powered by highly precise processing, AVer's cutting-edge AI Auto Tracking algorithms easily identify and capture human figures and moving objects. You’ll never lose track of your target again with the TR315's unmatched tracking precision.`,
      image: '/images/products/tr315/f3.png',
      layout: 'left'
    },
    {
      id: 'f4',
      title: 'Presenter Mode',
      description:
        'Get unparalleled tracking performance with Presenter Mode. This dynamic feature empowers presenters to venture beyond the stage to engage with their audience while the camera maintains seamless tracking.',
      image: '/images/products/tr315/f4.png',
      layout: 'center'
    },
    {
      id: 'f5',
      title: 'Zone Mode',
      description: `Zone Mode elevates your ability to capture content across multiple displays. Generate up to four dedicated Content Zones to consistently capture displayed information or items, prioritizing important presentation materials over the presenter's movements.`,
      image: '/images/products/tr315/f5.png',
      layout: 'center'
    },
    {
      id: 'f6',
      title: 'Hybrid Mode',
      description:
        'Free your performers by enabling unrestricted movement with Hybrid Mode. Use preset areas for zone tracking, letting the camera seamlessly switch to a full view of each pre-defined location as performers move through the areas. If they move beyond these zones, the camera seamlessly adapts, switching to presenter mode to effortlessly and precisely track their movements.',
      image: '/images/products/tr315/f6.png',
      layout: 'center'
    }
  ],
  'hub-30': [
    {
      id: 'f1',
      title: 'Features',
      description: ``,
      image: '/images/products/hub30/f1.png',
      layout: 'center'
    }
  ],
  'mt-300n': [
    {
      id: 'f1',
      title: 'Compact. Just Right.',
      description: `The MT300N's sleek and modern appearance is complemented by its compact design, making transportation and storage effortless. Additionally, its ingeniously engineered compact design allows for flexible installation options.`,
      image: '/images/products/mt300n/f2.png',
      layout: 'right'
    },
    {
      id: 'f2',
      title: 'Existing Devices. Integrated.',
      description: `The MT300N offers the flexibility to either bring your own device (BYOD) or integrate it with your existing devices, while leveraging its multimedia capabilities to take your presentation experience to the next level.`,
      image: '/images/products/mt300n/f3.png',
      layout: 'left'
    },
    {
      id: 'f3',
      title: 'Web UI. Remote Management.',
      description: `The simple web-based interface enables convenient remote access and management of cameras. Additionally, users can effortlessly create personalized profiles including display layouts to access their preferred settings promptly and efficiently.`,
      image: '/images/products/mt300n/f4.png',
      layout: 'center'
    },
    {
      id: 'f4',
      title: 'PTZ Link Premium. Embedded.',
      description: `It takes one step to convert AVer’s PTZ camera into a voice-tracking camera with PTZ Link Premium. Built-in PTZ Link Premium functionality, you can create more device groups and mic channels, and automatic video switch combining with human detection auto tracking, making it ideal for presentation needs in hybrid environments.`,
      image: '/images/products/mt300n/f5.png',
      layout: 'right'
    },

    {
      id: 'f5',
      title: 'Multi-Camera Switching + Voice Tracking. Automated.',
      description: `The MT300N intelligently connects AVer cameras with leading microphone systems, enabling dynamic camera switching that follows the conversation. It ensures smooth speaker transitions, delivering professional-grade performance for enhanced hybrid collaboration.`,
      image: '/images/products/mt300n/f6.png',
      layout: 'center'
    },
    {
      id: 'f6',
      title: 'Features',
      description: ``,
      image: '/images/products/mt300n/f1.png',
      layout: 'center'
    }
  ],
  'sa-a5': [
    {
      id: 'f1',
      title: 'Features',
      description: ``,
      image: '/images/products/saa5/f1.png',
      layout: 'center'
    },
    {
      id: 'f2',
      title: 'Cross-Device Collaboration',
      description: `The SA-A5 serves as a central hub, connecting laptops and audio systems to foster an interactive and collaborative classroom. By seamlessly integrating devices, the SA-A5 empowers students and teachers to engage with a wide range of tools, promoting customized learning experiences and adapting to individual learning styles and preferences.`,
      image: '/images/products/saa5/f2.png',
      layout: 'right'
    },
    {
      id: 'f3',
      title: 'Remote & Hybrid Learning Ready',
      description: `With its advanced features, the SA-A5 enhances remote and hybrid learning by ensuring clear communication, seamless integration with online platforms, consistent sound quality, and an inclusive learning environment. Bypassing the barriers between online and offline learning, the SA-A5 promotes a cohesive and interconnected educational experience, facilitating a smooth transition between different modes of learning.`,
      image: '/images/products/saa5/f3.png',
      layout: 'center'
    },
    {
      id: 'f4',
      title: 'Controls in One Hand',
      description: `The SA-A5 boasts a user-friendly interface with easily accessible function buttons, providing intuitive control over various teaching devices and audio systems. After a glance at the panels, teachers can effortlessly adjust device settings or manage inputs/outputs to deliver lessons without technical difficulties.`,
      image: '/images/products/saa5/f4.png',
      layout: 'left'
    },
    {
      id: 'f5',
      title: 'Picture-in-Picture Possibilities',
      description: `Featuring a picture-in-picture (PiP) function, the SA-A5 lets teachers integrate all kinds of content. Whether displaying live video feeds from remote cameras, presenting content from multiple Interactive Flat Panel Displays (IFPDs), or sharing resources from secondary monitors, the PiP feature offers flexibility and convenience.`,
      image: '/images/products/saa5/f5.png',
      layout: 'center'
    },
    {
      id: 'f6',
      title: 'Assistive Listening Device (ALD) Friendly',
      description: `The SA-A5’s ALD compatibility creates an environment that allows students with hearing impairments or those who may require additional auditory support to actively participate in classroom discussions and educational activities, enhancing their overall learning experience.`,
      image: '/images/products/saa5/f6.png',
      layout: 'right'
    }
  ],
  'cam-570': [
    {
      id: 'f1',
      title: 'Smart ViewShift Reduces Movement Sensitivity',
      description: `The CAM570 has just become even smarter with the latest firmware upgrade! The new Smart ViewShift function is designed to enhance your video conferencing experience by reducing movement sensitivity during audio tracking. With various transition effects, the camera smoothly shifts focus to the target person, providing remote participants with a more comfortable and stress-free call experience. Say goodbye to jarring movements and hello to seamless transitions.`,
      image: '/images/products/cam570/f1.gif',
      layout: 'left'
    },
    {
      id: 'f2',
      title: 'Picture-in-Picture Displays Preferred Conference View',
      description: `CAM570 includes a PTZ camera with 36X Total zoom and a second AI lens to provide a panoramic view. The dual-lens design offers a speaker view and wide-angle view simultaneously with various PIP layout options. Ideal for larger and more complex meeting spaces.`,
      image: '/images/products/cam570/f5.png',
      layout: 'center'
    },
    {
      id: 'f3',
      title: 'Built-in Audio Sensor Enables Audio Tracking',
      description: `Easily focus on active speaker with audio tracking mode and presentation mode. The camera will follow the speaker automatically or you can set up a preset point to focus on a specific area. The built-in sensor picks up human voices up to 10M without being disturbed by a local speakerphone.`,
      image: '/images/products/cam570/f7.png',
      layout: 'left'
    },
    {
      id: 'f4',
      title: 'Interact with CAM570 Using Touchless Gesture Control',
      description: `With the application of AI to recognize gestures and interpret commands, you can turn on/off the tracking function and zoom in/out without any direct physical touch. Minimize the touch points and improve workplace hygiene.`,
      image: '/images/products/cam570/f4.png',
      layout: 'center'
    },
    {
      id: 'f5',
      title: 'Smart Gallery Delivers a Clearer View of Faces',
      description: `Perfectly see everyone in the room. Thanks to AI technology, Smart Gallery crops meeting attendees and display them in equal individual feeds. Highlight participants’ facial and body expressions, leading to effective hybrid meetings.`,
      image: '/images/products/cam570/f3.png',
      layout: 'right'
    },
    {
      id: 'f6',
      title:
        'Accurate Attendee Capture with AVer Smart Composition – No Installation Required',
      description: `The CAM570 is one of the first PTZ camera and audio systems on the market to offer a Smart Composition feature — technology usually only found in enterprise-grade devices. Smart Composition uses AI algorithms to automatically frame each participant's face or body perfectly. It's a click-to-play feature with no software setup needed. Seamlessly transition between headshots and half-body views, effortlessly switching from individual to group images. With the CAM570, you’ll enjoy high-definition views of participants and easy meeting setups for optimal productivity.`,
      image: '/images/products/cam570/f6.png',
      layout: 'left'
    },
    {
      id: 'f7',
      title: 'Dynamic Detection Optimizes Meeting Experience',
      description: `The dual-lens design detects real-time motion precisely while offering a complete view of the room simultaneously. When the second AI lens detects a newcomer walking in, it triggers the first PTZ camera to re-frame the participants, ensuring all meeting attendees are instantly captured again for a seamless collaboration in real-time.`,
      image: '/images/products/cam570/f2.png',
      layout: 'right'
    }
  ],
  'tr-615': [
    {
      id: 'f1',
      title: 'Zoom In, Capture Every Detail in 4K Imaging Excellence',
      description: `19X optical + 12X digital zoom meets crystal-clear 4K 60fps images! Capture every crisp detail, even with extreme zoom. Perfect for live events, sports broadcasting, and studio production. Unparalleled image precision, pixel-free sharpness for dynamic, high-quality professional videos.`,
      image: '/images/products/tr615/f1.png',
      layout: 'center'
    },
    {
      id: 'f2',
      title: 'Premium 1-Inch Exmor RS® CMOS Sensor for Stunning Imaging',
      description: `Masterful imaging powered by a 1-inch Sony Exmor RS® CMOS sensor. Experience exceptional 4K image quality with minimal noise, even in low-light environments. By capturing more light and detail, experience cinema-like depth, true-to-life colors, and outstanding clarity. Tailored for professional broadcasting, live streaming, and high-end video creation where visual excellence is paramount.`,
      image: '/images/products/tr615/f2.png',
      layout: 'center'
    },
    {
      id: 'f3',
      title: 'AI-Powered Auto Tracking for Live Event Broadcasting',
      description: `Advanced AI algorithms accurately and naturally follow the presenter, even with complex movements. Stable tracking with smooth and professional footage achieved through continuous, hands-free frame adjustments. Ideal for bringing live events, interviews, and presentations to life.`,
      image: '/images/products/tr615/f3.png',
      layout: 'left'
    },
    {
      id: 'f4',
      title:
        'Precision-Engineered Motion System for Broadcast-Quality PTZ Control',
      description: `Silky-smooth PTZ movement at variable speeds with zero gear backlash are made possible with broadcast-grade direct-drive motors. Industry-leading 0.05° precise camera positioning accuracy and optical-grade movement stabilization ensure pinpoint panning and tilting. Enjoy a natural, fluid experience in automated tracking, even in high-paced live productions and demanding presenter tracking scenarios.`,
      image: '/images/products/tr615/f4.png',
      layout: 'right'
    },
    {
      id: 'f5',
      title: 'Seamless Production Ecosystem Integration',
      description: `Going beyond standard NDI® and Dante-compatible PTZ camera use, the TR615 offers SRT-enabled remote production and RTMP streaming. Genlock facilitates seamless multi-camera switching, automated presenter handoff between cameras, and tally light coordination across your production ecosystem. Build a cohesive, reliable infrastructure for broadcast studios, hybrid events, and live productions.`,
      image: '/images/products/tr615/f5.png',
      layout: 'center'
    },
    {
      id: 'f6',
      title: 'Simplified Deployment & Operation',
      description: `Deploy the TR615 in just 10 minutes! With Intelligent Human Detection, the TR615 self-adjusts to focusing on the presenter, eliminating the need for complex manual setups. The intuitive Web UI allows remote camera control, tracking parameter adjustments, and easy fine-tuning — perfect for professional broadcasters and AV technicians.`,
      image: '/images/products/tr615/f6.png',
      layout: 'center'
    },
    {
      id: 'f7',
      title: 'Simultaneous Multi-Platform Streaming for Hybrid Productions',
      description: `Effortlessly integrate the TR615 into professional broadcast and AV production workflows with simultaneous output across multiple high-bandwidth interfaces. Whether live-streaming on YouTube, broadcasting via SDI, or connecting to ultra-low-latency NDI® or Dante network video, it offers unparalleled versatility for hybrid events, virtual conferences, and multi-platform live streaming.`,
      image: '/images/products/tr615/f7.png',
      layout: 'center'
    }
  ],
  'mt-100': [
    {
      id: 'f1',
      title: 'Smart Device Control. Built for Hybrid Workflows.',
      description: `Experience superior hybrid meetings and teaching with the MT100’s four live video feeds and flexible AV switching. An excellent showcase of today’s hybrid classroom AV solutions and advanced conference room technology for education and business.`,
      image: '/images/products/mt100/f1.png',
      layout: 'center'
    },
    {
      id: 'f2',
      title: 'Education and Business Friendly. Future Ready.',
      description: `A cost-effective multimedia management system, the MT100 powers hybrid learning solutions and corporate AV integration. Built with scalable technology to keep your future-ready multimedia systems in play.`,
      image: '/images/products/mt100/f2.png',
      layout: 'right'
    },
    {
      id: 'f3',
      title: 'Custom Profiles. Instant Configuration Access.',
      description: `Easily manage cameras and create custom display layout profiles with the MT100’s web-based interface. Remote AV management precisely designed for efficient classroom AV systems and professional presentation technology.`,
      image: '/images/products/mt100/f3.png',
      layout: 'left'
    },
    {
      id: 'f4',
      title: 'Plug In. Stream Everything, Anywhere.',
      description: `The MT100 offers the flexibility to bring your own device (BYOD) or integrate your existing devices seamlessly. With AVer camera support and multiple connections, it’s built for today’s networked workflows — stream and record effortlessly, no extra clutter.`,
      image: '/images/products/mt100/f4.png',
      layout: 'right'
    },
    {
      id: 'f5',
      title: 'Streamlined Setup. Optimized Space.',
      description: `With its compact design and versatile connectivity, the MT100 streamlines AV deployment solutions for flexible installation. Less wiring means effortless multimedia integration and efficient presentation solutions for standard-sized classrooms and meeting rooms.`,
      image: '/images/products/mt100/f5.png',
      layout: 'left'
    }
  ],
  'u70-i': [
    {
      id: 'f1',
      title: 'True 4K Output Resolution',
      description: `The U70i’s high-quality 4K resolution and 13-megapixel sensor ensure that the video and images you capture are super clear, providing an immersive experience for students. Use the U70i to give your students enhanced hybrid distance learning that’s more engaging and accessible.`,
      image: '/images/products/u70i/f1.png',
      layout: 'right'
    },
    {
      id: 'f2',
      title: '16X Zoom and A3 Shooting Area',
      description: `A huge shooting area lets teachers capture more and makes it easier for students to see every detail. Also, the U70i’s auto-focus ensures that your content is always in focus, and with a 16X digital zoom, you can always zoom in to get a closer look.`,
      image: '/images/products/u70i/f2.png',
      layout: 'left'
    },
    {
      id: 'f3',
      title: 'AI Acoustics and Image Rotation',
      description: `AI Noise Reduction efficiently reduces unwanted sounds and background noise so you can lecture capture with better audio quality. Also, AI Image Rotation ensures that the people and materials in your images are always displayed at the correct angle.`,
      image: '/images/products/u70i/f3.png',
      layout: 'center'
    },
    {
      id: 'f4',
      title: 'User-Friendly Functions Buttons',
      description: `The function buttons located near the camera head provide convenient and efficient camera control. With all the necessary settings right at your fingertips, the U70i is extremely user-friendly, letting you focus on capturing the perfect shot without worrying about complicated settings or extra steps.`,
      image: '/images/products/u70i/f4.png',
      layout: 'left'
    },
    {
      id: 'f5',
      title: 'Convenient Storage and a Non-Slip Design',
      description: `The storage slot for the camera head provides a convenient way to store the U70i when you’re not using it, protecting the device from damage and ensuring it's always ready for your next shoot. Moreover, the U70i’s anti-slip rubber base provides a stable platform for the camera while you’re shooting from any angle.`,
      image: '/images/products/u70i/f5.png',
      layout: 'right'
    },
    {
      id: 'f6',
      title: 'Free AVerTouch Software Enhances Remote Teaching',
      description: `Simply connect your U70i with one touch to immediately start sharing content and annotating as you go. With its easy and intuitive functions — as well as cloud sync for automatic backups of your annotations, captures, and recordings — this software enriches the teaching experience with unprecedented interactivity. You can even capture images and videos via Google Classroom by connecting U70i to AVerTouch software.`,
      image: '/images/products/u70i/f6.png',
      layout: 'center'
    }
  ],
  'm70-w': [
    {
      id: 'f1',
      title: '230X Total Zoom',
      description: `Capture every shot with the M70W’s 10X optical zoom plus 23X digital zoom. The power of close-ups enhances the learning experience by letting teachers show every little detail.`,
      image: '/images/products/m70w/f1.png',
      layout: 'right'
    },
    {
      id: 'f2',
      title: 'Outstanding 4K Video Quality',
      description: `Embracing 4K Ultra HD output resolution with its 13-megapixel camera, the M70W’s impressive smooth and steady 60fps performance is a delight.`,
      image: '/images/products/m70w/f2.png',
      layout: 'center'
    },
    {
      id: 'f3',
      title: 'Durable, Adjustable & Portable',
      description: `The sturdy, adjustable mechanical arm and portable handle offer users flexibility to apply the M70W in different fields. Additionally, the position indicator on the camera head allows for precise visualizing of A3-sized documents.`,
      image: '/images/products/m70w/f3.png',
      layout: 'left'
    },
    {
      id: 'f4',
      title: 'Wired or Wireless',
      description: `Integrating the benefits of stand-alone and wireless visualizers, the M70W gives teachers options. Armed with HDMI and USB connectivity, idea sharing has never been this easy.`,
      image: '/images/products/m70w/f4.png',
      layout: 'right'
    },
    {
      id: 'f5',
      title: 'One-Touch Capturing & Recording',
      description: `Irresistible 4K video recording and capturing functions completely fulfill the needs of flipped teaching. Simply capture all your favorite moments and express your creativity during classes with the M70W.`,
      image: '/images/products/m70w/f5.png',
      layout: 'left'
    }
  ],
  'tr-211': [
    {
      id: 'f1',
      title: '12X Optical Zoom Magnifies Details',
      description: `Experience the exceptional power of the TR211 camera's astounding 12X optical zoom. This feature seamlessly operates even while the camera is panning and tilting, granting you the ability to accentuate content and quickly shift between shooting perspectives. Embrace the advantage of dynamic, crystal-clear video feeds through the TR211’s unparalleled PTZ performance.`,
      image: '/images/products/tr211/f1.png',
      layout: 'center'
    },
    {
      id: 'f2',
      title: 'HDMI/USB/IP. 60 FPS.',
      description: `Leverage the TR211's Full HD 1080p 60 fps streaming potential through HDMI, USB, and IP outputs. Free from intricate configurations and cable entanglements, you can effortlessly use multiple devices simultaneously to produce fluid video streams.`,
      image: '/images/products/tr211/f2.png',
      layout: 'left'
    },
    {
      id: 'f3',
      title: 'AI Auto Tracking Makes Streaming Smart & Effortless',
      description: `Powered by highly precise processing, AVer's cutting-edge AI Auto Tracking algorithms easily identify and capture human figures and moving objects. You’ll never lose track of your target again with the TR211's unmatched tracking precision.`,
      image: '/images/products/tr211/f3.png',
      layout: 'right'
    },
    {
      id: 'f4',
      title: 'Presenter Mode',
      description: `Get unparalleled tracking performance with Presenter Mode. This dynamic feature empowers presenters to venture beyond the stage to engage with their audience while the camera maintains seamless tracking.`,
      image: '/images/products/tr211/f4.png',
      layout: 'center'
    },
    {
      id: 'f5',
      title: 'Zone Mode',
      description: `Zone Mode elevates your ability to capture content across multiple displays. Generate up to four dedicated Content Zones to consistently capture displayed information or items, prioritizing important presentation materials over the presenter's movements.`,
      image: '/images/products/tr211/f5.png',
      layout: 'center'
    },
    {
      id: 'f6',
      title: 'Hybrid Mode',
      description: `Free your performers by enabling unrestricted movement with Hybrid Mode. Use preset areas for zone tracking, letting the camera seamlessly switch to a full view of each pre-defined location as performers move through the areas. If they move beyond these zones, the camera seamlessly adapts, switching to presenter mode to effortlessly and precisely track their movements.`,
      image: '/images/products/tr211/f6.png',
      layout: 'center'
    }
    /*************  ✨ Windsurf Command 🌟  *************/
  ],
  'vb-370a': [
    {
      id: 'f1',
      title: 'Synergy in Action, Android™-Driven, Zoom-Optimized.',
      description: `Android™-powered for a seamless Zoom Rooms experience. Designed for enterprise reliability & compliance. Single-touch meeting join. Certified by Zoom for crisp video & audio quality. Supports Zoom Rooms features like content sharing. Hassle-free from start to finish.`,
      image: '/images/products/vb370a/f1.png',
      layout: 'center'
    },
    {
      id: 'f2',
      title: 'AI Voice Tracking: Your Voice. Our Focus.',
      description: `Experience the power of AI with the VB370A's intelligent Voice Tracking technology. This technology automatically shifts the camera to focus on whoever is speaking, creating a distraction-free experience. By keeping the speaker in clear view, it makes virtual meetings feel more personal and supports a team-focused atmosphere.
* Available in next firmware upgrade.`,
      image: '/images/products/vb370a/f2.png',
      layout: 'center'
    },
    {
      id: 'f3',
      title: 'Versatile Meetings in Your Ways.',
      description: `The VB370A easily expands your audio capabilities by connecting additional speakerphone and microphone option, ensuring optimal sound quality in any environment. When combined with a touch panel, the VB370A transforms into a comprehensive conferencing solution without the hassle of complicated setups.`,
      image: '/images/products/vb370a/f3.png',
      layout: 'center'
    },
    {
      id: 'f4',
      title:
        'Stunning Video, Captivating Sound, Double Screens, Double your Impacts.',
      description: `Experience seamless communication with VB370A's 4K cameras and advanced audio technology, ensuring clear visuals and audio. Dual-screen support enhances collaboration by allowing simultaneous viewing of speakers and content, making it perfect for modern workspaces.`,
      image: '/images/products/vb370a/f4.png',
      layout: 'center'
    }
  ],
  'ptz-211': [
    {
      id: 'f1',
      title: '',
      description: ``,
      image: '/images/products/ptz211/f1.png',
      layout: 'center'
    }
  ],
  'vb342-pro': [
    {
      id: 'f1',
      title: 'All-in-One 4K PTZ Technology Offers Vivid Imagery',
      description: `The VB342 Pro is equipped with a comprehensive 4K PTZ camera; delivering vivid images in any meeting. 92° FOV optical lens with 15X zoom delivers true-to-life video quality. 6W*2 speakers provide outstanding sound for small and mid-size rooms`,
      image: '/images/products/vb342pro/f1.png',
      layout: 'center'
    },
    {
      id: 'f2',
      title: 'Auto Frame and Audio Tracking Enhance Meeting Efficiency',
      description: `Audio Tracking and Auto Frame smart AVer AI automatically focuses and detects all groups and speakers in the room, offering optimal performance for any virtual business meeting. Sound detection technology singles out human voices and enables intelligent AI functionality.`,
      image: '/images/products/vb342pro/f2.png',
      layout: 'center'
    },
    {
      id: 'f3',
      title: 'Deliver Detail-Oriented Presentations with Presentation Tracking',
      description: `Through a combination of audio tracking and audio preset tracking AI technology, when the presenter speaks, the VB342 Pro will locate and frame the area. Should the presenter move, the VB342 Pro will track and zoom to provide the best possible image, even outside of the preset location.`,
      image: '/images/products/vb342pro/f3.png',
      layout: 'left'
    },
    {
      id: 'f4',
      title: 'Smart Gallery Upgrades the Meeting Experience',
      description: `Offer the remote site clear views of every participant with Smart Gallery, which enables AI face and body detection technology to crop participants’ faces and make sure everyone is looking great. You can choose between headshot and half body mode to adapt to any situation without compromise.`,
      image: '/images/products/vb342pro/f4.png',
      layout: 'center'
    },
    {
      id: 'f5',
      title:
        'Uninterrupted Clarity created by Audio Fence and Beamforming Technology',
      description: `Silence any distraction outside of the viewing angle with AVer Audio Fence technology and turn any space into an uninterrupted meeting zone. Combine with Beamforming Technology to ensure resonant sound and clear participant voices. Virtual conference better with the VB342 Pro.`,
      image: '/images/products/vb342pro/f5.png',
      layout: 'right'
    }
  ],
  'fone-700': [
    {
      id: 'f1',
      title: 'Transform Any Space into a Pro Conference Room',
      description: `The FONE700 takes any room pro in seconds. It connects with just one cable, eliminating tangled wires and complex configurations. No tech expertise needed - simply plug in and go. No technical expertise is required - simply connect and experience a seamless conferencing upgrade.`,
      image: '/images/products/fone-700/f1.png',
      layout: 'center'
    },
    {
      id: 'f2',
      title: 'Focus on the Conversation, Not the Setup',
      description: `The FONE700 connects in seconds, letting you focus on the conversation, not the equipment. Intuitive controls and seamless device integration keep the meeting flowing, maximizing your efficiency and fostering effortless collaboration. Let you focus on what matters most important.`,
      image: '/images/products/fone-700/f2.png',
      layout: 'left'
    },
    {
      id: 'f3',
      title: 'Single Cable, Diverse Configuration',
      description: `The FONE700 requires just one RJ45 cable for both power and internet. It supports up to four speakerphones with a maximum range of 40 meters, enabling optimal adaptability for different-sized conference rooms.`,
      image: '/images/products/fone-700/f3.png',
      layout: 'right'
    },
    {
      id: 'f4',
      title: 'Seamless Integration with Numerous Devices',
      description: `The FONE700 connectivity hub enables seamless integration of our full suite of audio-visual products, including external speakers and cameras, as well as external devices such as monitors and Bluetooth equipment.`,
      image: '/images/products/fone-700/f4.png',
      layout: 'left'
    }
  ],
  'vb-350': [
    {
      id: 'f1',
      title: 'Hybrid 18X Zoom Captures Farther and Clearer',
      description: `Elevate your video meeting experience with the VB350 and its dual 4K lens technology. Boasting a 113° field of view and hybrid 18X zoom, the VB350 captures crystal-clear images of the foreground and background in meeting rooms up to 7 meters deep.`,
      image: '/images/products/vb350/f1.png',
      layout: 'right'
    },
    {
      id: 'f2',
      title:
        'Stable Lens Switching Enables Inclusive and Engaging Hybrid Teamwork',
      description: `Don’t let jarring lens transitions interrupt your meetings. The VB350’s stable lens switching captures attendees in sharp detail, even when they sit far from the camera. Enjoy seamless conversations thanks to ultra-smooth lens shifting`,
      image: '/images/products/vb350/f2.png',
      layout: 'left'
    },
    {
      id: 'f3',
      title: 'Smart ViewShift Reduces Movement Sensitivity',
      description: `The VB350 has just become even smarter with the latest firmware upgrade! The new Smart ViewShift function is designed to enhance your video conferencing experience by reducing movement sensitivity during audio tracking. With various transition effects, the camera smoothly shifts focus to the target person, providing remote participants with a more comfortable and stress-free call experience. Say goodbye to jarring movements and hello to seamless transitions.`,
      image: '/images/products/vb350/f3.gif',
      layout: 'right'
    },
    {
      id: 'f4',
      title: 'Audio Fence Eliminates Background Noise',
      description: `Say goodbye to unwanted noise with AVer’s audio fence technology. This feature blocks out background distractions and captures only the voices within the camera’s viewing area. Now you can have uninterrupted remote collaboration even in open workspaces.`,
      image: '/images/products/vb350/f4.png',
      layout: 'left'
    },
    {
      id: 'f5',
      title: '14-Microphone Array Delivers Lifelike Audio',
      description: `Enjoy clear and natural-sounding voices in your meetings. The VB350 is equipped with a 14-element microphone array pickup that precisely reproduces resonant sound from up to 10 meters away. Experience seamless conversations and lifelike audio that makes your remote meetings feel like in-person gatherings.`,
      image: '/images/products/vb350/f5.png',
      layout: 'center'
    }
  ]
}
