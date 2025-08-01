export type ProductSpec = {
  category: string
  items: {
    label: string
    value: string | string[]
  }[]
}

export const productSpecs: Record<string, ProductSpec[]> = {
  'tr-315': [
    {
      category: 'Camera',
      items: [
        {
          label: 'Image Sensor',
          value: '1/2.8" 4K Sony Exmor CMOS'
        },
        {
          label: 'Output Resolutions',
          value: [
            '4K/30, 4K/25.94, 4K/30, 4K/30',
            '4K/29.97, 4K/25, 1080p/60',
            '1080p/59.94, 1080p/50',
            '1080p/30, 1080p/29.97',
            '1080p/25, 1080p/60, 1080p/59.94',
            '1080p/50, 720p/60, 720p/59.94',
            '720p/50'
          ]
        },
        { label: 'S/N Ratio', value: '≥ 50 dB' },
        { label: 'TV Lines', value: '1600 (Center)' },
        {
          label: 'Exposure Control',
          value: 'Auto, Manual, Priority AE (Shutter, IRIS), BLC, WDR'
        },
        { label: 'Optical Zoom', value: '12X' },
        {
          label: 'Viewing Angles',
          value: [
            'DFOV: 80.6°(Wide) to 7.7°(Tele)',
            'HFOV: 72.3°(Wide) to 6.7°(Tele)',
            'VFOV: 44.1°(Wide) to 3.8°(Tele)'
          ]
        },
        {
          label: 'Aperture (Iris)',
          value: 'F = 1.6 (Wide) to 2.8 (Tele)'
        },
        {
          label: 'Pan / Tilt Angles',
          value: ['Pan: ±170°', 'Tilt: +90°/-30°']
        },
        {
          label: 'Preset Speed',
          value: ['Pan: 200°/sec', 'Tilt: 200°/sec']
        },
        {
          label: 'Camera Control - Interfaces',
          value: ['RS-232 (DIN5)', 'RS-422 (RJ45)', 'IP', 'USB']
        },
        {
          label: 'Image Processing',
          value: ['Noise Reduction (2D / 3D)', 'Flip', 'Mirror', 'WDR', 'BLC']
        }
      ]
    },
    {
      category: 'Effective Picture Elements',
      items: [
        { label: 'Megapixels', value: '8 Megapixels' },
        { label: 'Lux', value: '0.05 lux (F1.6, 30fps)' }
      ]
    },
    {
      category: 'Minimum Illumination',
      items: [
        { label: 'Gain', value: 'Auto, Manual' },
        { label: 'Shutter Speed', value: '1/1 to 1/32,000 sec' },
        {
          label: 'White Balance',
          value: 'Auto, Manual, ATW, One Push, Indoor, Outdoor'
        },
        { label: 'Digital Zoom', value: '12X' },
        {
          label: 'Focal Length',
          value: 'f = 3.0 mm (Wide) to 36.8 mm (Tele)'
        },
        {
          label: 'Minimum Working Distance',
          value: ['0.3 m (Wide)', '1.0 m (Tele)']
        },
        {
          label: 'Pan / Tilt Speed (Manual)',
          value: ['Pan: 0.1° to 100°/sec', 'Tilt: 0.1° to 100°/sec']
        },
        {
          label: 'Preset Positions',
          value: ['10 (IR)', '255 (RS-232, RS-422, IP)']
        },
        {
          label: 'Camera Control - Protocols',
          value: [
            'VISCA (RS-232 / RS-422 / IP)',
            'PELCO D & PELCO P (RS-232 / RS-422)',
            'CGI (IP)',
            'USB',
            'ONVIF'
          ]
        },
        {
          label: 'Power Frequencies',
          value: '50 Hz, 60 Hz'
        }
      ]
    },
    {
      category: 'AI Auto Tracking Functions',
      items: [
        {
          label: 'Tracking Modes',
          value: ['Presenter Mode', 'Zone Mode', 'Hybrid Mode']
        }
      ]
    },
    {
      category: 'Privacy Protection Mechanisms',
      items: [{ label: 'Protection Mode', value: 'Sleep Mode' }]
    },
    {
      category: 'AI Control Functions',
      items: [{ label: 'Gesture Control', value: 'Yes' }]
    },
    {
      category: 'Audio',
      items: [
        { label: 'Channels', value: '2ch Stereo' },
        {
          label: 'Codecs',
          value: ['AAC-LC (48K)', 'PCM (8K)']
        },
        {
          label: 'Sample Rates',
          value: '48 / 44.1 / 32 / 24 / 16 / 8 KHz'
        }
      ]
    },
    {
      category: 'Interface',
      items: [
        {
          label: 'Video Outputs',
          value: '3G-SDI, HDMI, IP, USB'
        },
        {
          label: 'Audio Outputs',
          value: '3G-SDI, HDMI, IP, USB'
        },
        {
          label: 'Audio Inputs',
          value: 'MIC in, Line in'
        }
      ]
    },
    {
      category: 'General',
      items: [
        {
          label: 'Power Requirement',
          value: 'AC 100 - 240V to DC 12V/5A'
        },
        { label: 'Power Consumption', value: '19W' },
        { label: 'PoE', value: 'PoE+' },
        {
          label: 'Dimensions (W x H x D)',
          value: '189.0 x 192.0 x 145.0 mm'
        },
        { label: 'Net Weight', value: '2.0 (±0.1) kg' },
        { label: 'Application', value: 'Indoor' },
        { label: 'Tally Lamp', value: 'Yes' },
        { label: 'Security', value: 'Kensington Slot' },
        { label: 'Remote Control', value: 'Infrared' },
        {
          label: 'Operating Conditions',
          value: ['Temperature: 0°C to +40°C', 'Humidity: 20% to 80%']
        },
        {
          label: 'Storage Conditions',
          value: ['Temperature: -20°C to +60°C', 'Humidity: 20% to 95%']
        }
      ]
    },
    {
      category: 'IP Streaming',
      items: [
        { label: 'Resolution', value: '2160p 60fps' },
        {
          label: 'Network Audio Compress Formats',
          value: 'AAC-LC (48K), PCM (8K)'
        },
        {
          label: 'Network Video Compress Formats',
          value: 'H.264, H.265, MJPEG'
        },
        {
          label: 'Bit Rate Control Modes',
          value: 'VBR, CBR (selectable)'
        },
        { label: 'Maximum Frame Rate', value: '2160p 60fps' },
        {
          label: 'Network Interface',
          value: '10 / 100 / 1000 Base-T'
        },
        {
          label: 'Range of Bit-Rate Setting',
          value: '512 Kbps to 32 Mbps'
        },
        {
          label: 'Multi-Stream Capability',
          value: [
            '6',
            '4K 60fps: RTSP, HDMI, USB, &',
            'IP (IP H.265 / Dante AVB)',
            '1080p 60fps: 3G-SDI'
          ]
        },
        {
          label: 'Network Protocols',
          value: [
            'IPv4, TCP, UDP, ARP, ICMP, IGMP,',
            'HTTP, HTTPS, DHCP, RTP, RTCP,',
            'RTCP, RTSP, RTMP, SRT, HLS,',
            'NDI, LLDP, VISCA over IP'
          ]
        },
        {
          label: 'AV over IP Protocols',
          value: 'NDI HX3 & Dante AVH'
        }
      ]
    },
    {
      category: 'USB',
      items: [
        { label: 'Connector', value: 'USB 3.1' },
        { label: 'Audio Format', value: 'PCM' },
        { label: 'USB Video Class (UVC)', value: 'UVC 1.1' },
        { label: 'Video Formats', value: 'MJPEG, YUY2' },
        { label: 'Maximum Video Resolution', value: '2160p' },
        { label: 'USB Audio Class (UAC)', value: 'UAC 1.0' }
      ]
    },
    {
      category: 'Web UI',
      items: [
        { label: 'Live Video Preview', value: 'Yes' },
        {
          label: 'Camera PTZ Control',
          value: 'Pan, Tilt, Zoom, Focus, Preset Control'
        },
        {
          label: 'Camera / Image Adjustment',
          value: 'Exposure, White Balance, Picture'
        },
        {
          label: 'Network Configuration',
          value: 'DHCP, IP Address, Gateway, Subnet Mask, DNS'
        }
      ]
    },
    {
      category: 'Software Tools',
      items: [
        {
          label: 'IP Search and Configuration Tool',
          value: 'Support Windows 7 or later'
        },
        {
          label: 'Enterprise Management (PTZ Management)',
          value: 'Support Windows 10 or later'
        },
        {
          label: 'PTZ Control Panel',
          value: ['Supports iOS & iPadOS 11 or later']
        },
        {
          label: 'PTZ Link',
          value: ['Support Windows 7 or later,', 'macOS 10.14 or later']
        },
        {
          label: 'OBS Plugin for PTZ Cameras',
          value: [
            'Supports Windows 8 or later,',
            'macOS High Sierra v10.13 or later'
          ]
        },
        {
          label: 'CaptureShare',
          value: ['Supports Windows 7 or later,', 'macOS 10.14 or later']
        },
        {
          label: 'Room Management (PTZApp 2)',
          value: ['Supports Windows 7 or later,', 'macOS 11.6 or later']
        },
        {
          label: 'Cloud Management',
          value: ['Supports Windows 7 or later,', 'macOS 10 or later']
        }
      ]
    },
    {
      category: 'Warranty',
      items: [
        { label: 'Camera', value: '5 Years' },
        { label: 'Accessories', value: '1 Year' }
      ]
    },
    {
      category: 'Package Contents',
      items: [
        {
          label: 'Included Items',
          value: [
            'Camera, Remote Control, RS-232',
            'In/Out Cable, Din 8 To D-Sub 9',
            'Cable, Power Adapter, Power Cord,',
            'Cable Ties (×3), M2 ×4 mm',
            'Screws (×3), M3 × 8 mm Screws',
            '(×3), 1/4"-20L 5 mm Screws (×2),',
            'Cable Fixing Plate, Ceiling Mount',
            'Brackets (× 2), Drilling Paper, Quick',
            'Start Guide'
          ]
        }
      ]
    },
    {
      category: 'Optional Accessories',
      items: [
        {
          label: 'Available Options',
          value: ['AVer CL01 PTZ Camera Controller,', 'L-Type Wall Mount']
        }
      ]
    }
  ],
  'hub-30': [
    {
      category: 'Host',
      items: [
        { label: 'Input 1', value: 'USB Type-C x 1 (PD Charging, 100W Max)' },
        { label: 'Input 2', value: 'USB Type-C x 1' },
        { label: 'Input 3', value: 'USB Type-B x 1, HDMI x 1' },
        { label: 'Input 4', value: 'USB Type-B x 1, HDMI x 1' },
        { label: 'USB-C Charging', value: 'Yes' }
      ]
    },
    {
      category: 'USB Devices',
      items: [
        { label: 'Connections', value: 'USB Type-A x 4' },
        { label: 'USB Pass-Through', value: 'Yes' }
      ]
    },
    {
      category: 'HDMI Display Outputs',
      items: [
        { label: 'Output', value: '2' },
        { label: 'HDMI Display Output Modes', value: '2' },
        { label: 'Audio HDMI', value: 'Yes' }
      ]
    },
    {
      category: 'Video',
      items: [
        { label: 'Resolution', value: 'Up to 4K Ultra HD' },
        { label: 'Signal Type', value: 'DP Alt Mode, HDMI 2.0' },
        { label: 'HDMI CEC', value: 'Yes' },
        { label: 'Color Space', value: 'RGB, YCbCr' }
      ]
    },
    {
      category: 'Audio',
      items: [
        {
          label: 'Transmit Mode',
          value: 'Audio Pass-Through from Input to Output'
        },
        { label: 'Format', value: 'HDMI 2.0' }
      ]
    },
    {
      category: 'Control Interfaces',
      items: [
        { label: 'Ethernet', value: '1' },
        { label: 'RS-232', value: '1' },
        {
          label: 'Touch Control Panel',
          value: 'Yes, can be paired with AVer CP10 G2 via BYOD Controller App'
        }
      ]
    },
    {
      category: 'General',
      items: [
        { label: 'Power Requirement', value: 'AC 100~240V to DC 24V/7.5A' },
        { label: 'Power Consumption', value: '150W' },
        { label: 'Powering', value: 'External 180W Power Supply' },
        { label: 'Dimensions (W x H x D)', value: '270.0 x 42.4 x 175.0 mm' },
        { label: 'Net Weight', value: '1.34 (±0.1) kg' },
        { label: 'Security', value: 'Kensington Slot' },
        {
          label: 'Operating Conditions',
          value: 'Temperature: 0°C to +45°C; Humidity: 20% to 80%'
        },
        {
          label: 'Storage Conditions',
          value: 'Temperature: -20°C to +60°C; Humidity: 20% to 95%'
        },
        {
          label: 'Installation Methods',
          value:
            'Rack Mounted, Under the Table, Inside the Podium, Behind the Display'
        }
      ]
    },
    {
      category: 'LED Indicators',
      items: [
        {
          label: 'Power/Status LED',
          value: [
            'Orange: Standby',
            'Green: Operating',
            'Green (Flashing): Firmware Upgrading'
          ]
        },
        { label: 'Input 1/2/3/4', value: 'Green: Connected' },
        { label: 'USB Type-C Charging/Status LED', value: 'Green: Charging' },
        { label: 'Output 1/2', value: 'Green: Connected' }
      ]
    },
    {
      category: 'Interfaces',
      items: [
        { label: 'USB Type-A', value: '4' },
        { label: 'USB Type-C', value: '2' },
        { label: 'USB Type-B', value: '2' },
        { label: 'HDMI Out', value: '2' },
        { label: 'HDMI In', value: '2' },
        { label: 'RS-232', value: '1' },
        { label: 'RJ-45', value: '1' },
        { label: 'Power Input', value: '1' },
        { label: 'Button', value: '2 (Power, Reset)' },
        { label: 'Warranty', value: '3 Years' }
      ]
    },
    {
      category: 'Package Contents',
      items: [
        {
          label: 'Package Contents',
          value:
            'HUB30, Power Adapter, Power Cord, Cable Fixing Plate (x2), Cable Tie (x17), M3 x 5.0 mm Truss Head Screw (x8), M3 x 10 mm Screw (x4), Rack Mount Bracket (x2), USB 3.0 Type-A to Type-B Cable, USB 3.1 Type-C to Type-C Cable, Terminal Block 3-Pole, Quick Start Guide'
        }
      ]
    },
    {
      category: 'Optional Accessories',
      items: [
        {
          label: 'Optional Accessories',
          value: 'AVer CP10 G2 Collaboration Touch Panel'
        }
      ]
    }
  ],
  'mt-300n': [
    {
      category: 'General',
      items: [
        { label: 'Power', value: 'DC 12V' },
        { label: 'Weight', value: '1.5 kg' },
        { label: 'Dimensions', value: '180 x 160 x 120 mm' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '1080p / 4K' },
        { label: 'Zoom', value: '12X Optical' },
        { label: 'Focus', value: 'Auto / Manual' }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        { label: 'Outputs', value: ['HDMI', 'USB', 'IP'] },
        { label: 'Control', value: ['RS-232', 'IP'] },
        { label: 'Streaming', value: 'RTSP, RTMP' }
      ]
    },
    {
      category: 'Features',
      items: [
        { label: 'AI Tracking', value: 'Yes' },
        { label: 'Preset Positions', value: 'Up to 255' },
        { label: 'Control Protocols', value: ['VISCA', 'PELCO'] }
      ]
    },
    {
      category: 'Environment',
      items: [
        { label: 'Operating Temp', value: '0\u00b0C to 40\u00b0C' },
        { label: 'Humidity', value: '20% to 80%' }
      ]
    }
  ],
  'sa-a5': [
    {
      category: 'General',
      items: [
        { label: 'Power', value: 'DC 12V' },
        { label: 'Weight', value: '1.5 kg' },
        { label: 'Dimensions', value: '180 x 160 x 120 mm' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '1080p / 4K' },
        { label: 'Zoom', value: '12X Optical' },
        { label: 'Focus', value: 'Auto / Manual' }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        { label: 'Outputs', value: ['HDMI', 'USB', 'IP'] },
        { label: 'Control', value: ['RS-232', 'IP'] },
        { label: 'Streaming', value: 'RTSP, RTMP' }
      ]
    },
    {
      category: 'Features',
      items: [
        { label: 'AI Tracking', value: 'Yes' },
        { label: 'Preset Positions', value: 'Up to 255' },
        { label: 'Control Protocols', value: ['VISCA', 'PELCO'] }
      ]
    },
    {
      category: 'Environment',
      items: [
        { label: 'Operating Temp', value: '0\u00b0C to 40\u00b0C' },
        { label: 'Humidity', value: '20% to 80%' }
      ]
    }
  ],
  'cam-570': [
    {
      category: 'General',
      items: [
        { label: 'Power', value: 'DC 12V' },
        { label: 'Weight', value: '1.5 kg' },
        { label: 'Dimensions', value: '180 x 160 x 120 mm' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '1080p / 4K' },
        { label: 'Zoom', value: '12X Optical' },
        { label: 'Focus', value: 'Auto / Manual' }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        { label: 'Outputs', value: ['HDMI', 'USB', 'IP'] },
        { label: 'Control', value: ['RS-232', 'IP'] },
        { label: 'Streaming', value: 'RTSP, RTMP' }
      ]
    },
    {
      category: 'Features',
      items: [
        { label: 'AI Tracking', value: 'Yes' },
        { label: 'Preset Positions', value: 'Up to 255' },
        { label: 'Control Protocols', value: ['VISCA', 'PELCO'] }
      ]
    },
    {
      category: 'Environment',
      items: [
        { label: 'Operating Temp', value: '0\u00b0C to 40\u00b0C' },
        { label: 'Humidity', value: '20% to 80%' }
      ]
    }
  ],
  'tr-615': [
    {
      category: 'Camera',
      items: [
        { label: 'Image Sensor', value: '1" 4K Sony Exmor R CMOS' },
        { label: 'Total Picture Elements', value: '20.92 Megapixels' },
        { label: 'Effective Picture Elements', value: '17.25 Megapixels' },
        {
          label: 'Output Resolutions',
          value: [
            '4K60p',
            '4K59.94',
            '4K30p',
            '4K29.97',
            '1080p60',
            '1080p59.94',
            '1080p30',
            '1080p29.97',
            '1080i60',
            '1080i59.94',
            '720p60'
          ]
        },
        {
          label: 'Minimum Illumination',
          value: '1.4 lux (IR off, F2.8, 30fps)'
        },
        { label: 'S/N Ratio', value: '≥ 50 dB' },
        { label: 'Gain', value: 'Auto, Manual' },
        { label: 'TV Line', value: '1600 (Center)' },
        { label: 'Shutter Speed', value: '1/4 to 1/10,000 sec' },
        {
          label: 'Exposure Control',
          value: ['Auto', 'Manual', 'Priority AE (Shutter, IRIS)', 'BLC', 'WDR']
        },
        {
          label: 'White Balance',
          value: ['Auto', 'Manual', 'ATW', 'One Push', 'Indoor', 'Outdoor']
        },
        { label: 'Optical Zoom', value: '19X' },
        { label: 'Digital Zoom', value: '12X' },
        { label: 'Total Zoom', value: '228X' },
        {
          label: 'Viewing Angles',
          value: [
            'DFOV: 77.8° (WIDE) to 4.5° (Tele)',
            'HFOV: 69.5° (WIDE) to 3.5° (Tele)',
            'VFOV: 41.5° (WIDE) to 2.3° (Tele)'
          ]
        },
        { label: 'Focal Length', value: 'f = 9.7mm (WIDE) to 185.3mm (Tele)' },
        { label: 'Aperture (Iris)', value: 'F = 2.8 (WIDE) to 6.5 (Tele)' },
        {
          label: 'Minimum Working Distance',
          value: ['1.5m (WIDE)', '5.0m (Tele)']
        },
        { label: 'Pan / Tilt Angles', value: 'Pan: ±170°, Tilt: +90°/-30°' },
        {
          label: 'Pan / Tilt Speed (Manual)',
          value: 'Pan: 0.05° to 100°/sec, Tilt: 0.05° to 100°/sec'
        },
        { label: 'Preset Speed', value: 'Pan: 200°/sec, Tilt: 200°/sec' },
        { label: 'Preset Positions', value: '10 (IR), 256 (RS-232/RS-422/IP)' },
        {
          label: 'Camera Control Interface',
          value: ['RS-232 (DIN8)', 'RS-422 (RJ-45)', 'IR', 'USB']
        },
        {
          label: 'Camera Control Protocols',
          value: [
            'VISCA (RS-232/RS-422/IP)',
            'PELCO-D & PELCO-P (RS-232/RS-422)',
            'CGI (IP)',
            'USB',
            'ONVIF'
          ]
        },
        {
          label: 'Image Processing',
          value: ['Noise Reduction (2D/3D)', 'Flip', 'Mirror', 'BLC']
        },
        { label: 'Power Frequencies', value: ['50 Hz', '60 Hz'] }
      ]
    },
    {
      category: 'AI Technology',
      items: [
        {
          label: 'Auto Tracking Modes',
          value: ['Presenter Mode', 'Zone Mode', 'Hybrid Mode']
        },
        { label: 'AI Feature', value: 'Multi-Presenter Detection' }
      ]
    },
    {
      category: 'Privacy Protection Mechanisms',
      items: [{ label: 'Protection Mode', value: 'Sleep Mode' }]
    },
    {
      category: 'Audio',
      items: [
        { label: 'Channel', value: '2ch Stereo' },
        { label: 'Codec', value: 'AAC-LC (48 k)' },
        { label: 'Sample Rates', value: '48 KHz' }
      ]
    },
    {
      category: 'Interface',
      items: [
        { label: 'Video Outputs', value: ['12G-SDI x2', 'HDMI', 'IP', 'USB'] },
        { label: 'Audio Outputs', value: ['12G-SDI x2', 'HDMI', 'IP', 'USB'] },
        { label: 'Audio Inputs', value: ['Mic In', 'Line In', 'XLR'] },
        { label: 'Genlock Input', value: 'BNC' }
      ]
    },
    {
      category: 'General',
      items: [
        { label: 'Power Requirement', value: 'AC 100–240V to DC 12V/5A' },
        { label: 'Power Consumption', value: '32.4W' },
        { label: 'PoE', value: 'PoE++' },
        { label: 'Dimensions (W x H x D)', value: '202.5 x 200.5 x 231.5 mm' },
        { label: 'Net Weight', value: '4.3 kg (±0.1 kg)' },
        { label: 'Application', value: 'Indoor' },
        { label: 'Tally Lamp', value: 'Yes' },
        { label: 'Security', value: 'Kensington Slot' },
        { label: 'Remote Control', value: 'Infrared' },
        {
          label: 'Operating Conditions',
          value: 'Temperature: 0°C to 40°C; Humidity: 20% to 80%'
        },
        {
          label: 'Storage Conditions',
          value: 'Temperature: -20°C to 60°C; Humidity: 20% to 95%'
        },
        {
          label: 'Sustainability',
          value: ['Plastic Material: ABS', 'Sustainability Method: PCR-PP']
        }
      ]
    },
    {
      category: 'IP Streaming',
      items: [
        { label: 'Resolution', value: '4K60p' },
        {
          label: 'Network Video Compress Formats',
          value: ['H.264', 'H.265', 'MJPEG']
        },
        { label: 'Network Audio Compress Formats', value: 'AAC-LC (48 k)' },
        { label: 'Maximum Frame Rate', value: '4K60p' },
        { label: 'Bit-Rate Control Modes', value: ['VBR', 'CBR (selectable)'] },
        { label: 'Range of Bit-Rate Setting', value: '512 Kbps to 64 Mbps' },
        {
          label: 'Multi-Stream Capability',
          value: [
            '4K60p Standard Mode',
            'Zoom Mode',
            'NDI Mode-S (RTSP, HDMI, USB, 12G-SDI, & NDI)',
            'Teams Mode: 1 (USB)'
          ]
        },
        { label: 'Network Interface', value: '10/100/1000 Base-T' },
        {
          label: 'Network Protocols',
          value: [
            'IPv4',
            'TCP',
            'UDP',
            'ARP',
            'ICMP',
            'IGMP',
            'HTTP',
            'HTTPS',
            'DHCP',
            'RTSP',
            'RTMP',
            'SFTP',
            'NTP',
            'NDI',
            'LLDP',
            'VISCA over IP',
            'ONVIF'
          ]
        },
        { label: 'NDI® Embedded Bridge', value: 'Yes (Pre-installed)' },
        {
          label: 'Camera Tracking Data Output',
          value: 'Supports Free-D Type D0/D1'
        },
        { label: 'Dante AV-H', value: 'Yes (available in 2H2023)' }
      ]
    },
    {
      category: 'USB',
      items: [
        { label: 'Connector', value: 'USB 3.2 Gen 1' },
        { label: 'Audio Format', value: 'PCM' },
        { label: 'USB Video Class (UVC)', value: 'UVC 1.1' },
        { label: 'Video Format', value: ['MJPEG', 'YUY2'] },
        { label: 'Maximum Video Resolution', value: '4K' },
        { label: 'USB Audio Class (UAC)', value: 'UAC 1.0' }
      ]
    },
    {
      category: 'Web UI',
      items: [
        { label: 'Live Video Preview', value: 'Yes' },
        {
          label: 'Camera PTZ Control',
          value: 'Pan, Tilt, Zoom, Focus, Preset Control'
        },
        {
          label: 'Camera/Image Adjustment',
          value: ['Exposure', 'White Balance', 'Picture']
        },
        {
          label: 'Network Configuration',
          value: ['DHCP', 'IP Address', 'Gateway', 'Subnet Mask', 'DNS']
        },
        { label: 'Supported Web Browsers', value: ['Chrome', 'Edge', 'Safari'] }
      ]
    },
    {
      category: 'Software Tools',
      items: [
        {
          label: 'Device Utility',
          value: 'Supports Windows® 7 or later, macOS® 10.14 or later'
        },
        {
          label: 'Room Management',
          value: 'Supports Windows® 7 or later, macOS® 11.6 or later'
        },
        {
          label: 'PTZ Control Panel',
          value: 'Supports iOS & iPadOS® 11 or later'
        },
        {
          label: 'OBS Plugin for PTZ Cameras',
          value:
            'Supports Windows® 8 or later, macOS® High Sierra 10.13 or later'
        },
        {
          label: 'Enterprise Management',
          value: 'Supports Windows® 10 or later'
        },
        {
          label: 'Cloud Management',
          value: 'Supports Windows® 7 or later, macOS® 10.14 or later'
        },
        { label: 'PTZ Link', value: 'Supports Windows® 10 or later' },
        { label: 'CaptureShare', value: 'Supports Windows® 10 or later' }
      ]
    },
    {
      category: 'Warranty',
      items: [
        { label: 'Camera', value: '5 Years' },
        { label: 'Accessories', value: '1 Year' },
        {
          label: 'Package Contents',
          value: [
            'Camera',
            'Remote Control',
            'RS-232 Mount Cable',
            'DIN to D-Sub9 Cable',
            'Power Adapter',
            'Power Cord',
            'Cable Tie (x1)',
            'M2.6 x 4 mm Screws (x3)',
            'M3 x 6 mm Screws (x3)',
            '1/4"-20 x 5.5 mm Screws (x2)',
            'Ceiling Mount Bracket (x2)',
            'Drilling Paper',
            'Quick Start Guide'
          ]
        },
        {
          label: 'Optional Accessories',
          value: ['AVer CL01 PTZ Camera Controller', 'L-Type Wall Mount']
        }
      ]
    }
  ],
  'mt-100': [
    {
      category: 'General',
      items: [
        { label: 'Power', value: 'DC 12V' },
        { label: 'Weight', value: '1.5 kg' },
        { label: 'Dimensions', value: '180 x 160 x 120 mm' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '1080p / 4K' },
        { label: 'Zoom', value: '12X Optical' },
        { label: 'Focus', value: 'Auto / Manual' }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        { label: 'Outputs', value: ['HDMI', 'USB', 'IP'] },
        { label: 'Control', value: ['RS-232', 'IP'] },
        { label: 'Streaming', value: 'RTSP, RTMP' }
      ]
    },
    {
      category: 'Features',
      items: [
        { label: 'AI Tracking', value: 'Yes' },
        { label: 'Preset Positions', value: 'Up to 255' },
        { label: 'Control Protocols', value: ['VISCA', 'PELCO'] }
      ]
    },
    {
      category: 'Environment',
      items: [
        { label: 'Operating Temp', value: '0\u00b0C to 40\u00b0C' },
        { label: 'Humidity', value: '20% to 80%' }
      ]
    }
  ],
  'u70-i': [
    {
      category: 'General',
      items: [
        { label: 'Power', value: 'DC 12V' },
        { label: 'Weight', value: '1.5 kg' },
        { label: 'Dimensions', value: '180 x 160 x 120 mm' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '1080p / 4K' },
        { label: 'Zoom', value: '12X Optical' },
        { label: 'Focus', value: 'Auto / Manual' }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        { label: 'Outputs', value: ['HDMI', 'USB', 'IP'] },
        { label: 'Control', value: ['RS-232', 'IP'] },
        { label: 'Streaming', value: 'RTSP, RTMP' }
      ]
    },
    {
      category: 'Features',
      items: [
        { label: 'AI Tracking', value: 'Yes' },
        { label: 'Preset Positions', value: 'Up to 255' },
        { label: 'Control Protocols', value: ['VISCA', 'PELCO'] }
      ]
    },
    {
      category: 'Environment',
      items: [
        { label: 'Operating Temp', value: '0\u00b0C to 40\u00b0C' },
        { label: 'Humidity', value: '20% to 80%' }
      ]
    }
  ],
  'm70-w': [
    {
      category: 'General',
      items: [
        { label: 'Power', value: 'DC 12V' },
        { label: 'Weight', value: '1.5 kg' },
        { label: 'Dimensions', value: '180 x 160 x 120 mm' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '1080p / 4K' },
        { label: 'Zoom', value: '12X Optical' },
        { label: 'Focus', value: 'Auto / Manual' }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        { label: 'Outputs', value: ['HDMI', 'USB', 'IP'] },
        { label: 'Control', value: ['RS-232', 'IP'] },
        { label: 'Streaming', value: 'RTSP, RTMP' }
      ]
    },
    {
      category: 'Features',
      items: [
        { label: 'AI Tracking', value: 'Yes' },
        { label: 'Preset Positions', value: 'Up to 255' },
        { label: 'Control Protocols', value: ['VISCA', 'PELCO'] }
      ]
    },
    {
      category: 'Environment',
      items: [
        { label: 'Operating Temp', value: '0\u00b0C to 40\u00b0C' },
        { label: 'Humidity', value: '20% to 80%' }
      ]
    }
  ],
  'tr-211': [
    {
      category: 'General',
      items: [
        { label: 'Power', value: 'DC 12V' },
        { label: 'Weight', value: '1.5 kg' },
        { label: 'Dimensions', value: '180 x 160 x 120 mm' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '1080p / 4K' },
        { label: 'Zoom', value: '12X Optical' },
        { label: 'Focus', value: 'Auto / Manual' }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        { label: 'Outputs', value: ['HDMI', 'USB', 'IP'] },
        { label: 'Control', value: ['RS-232', 'IP'] },
        { label: 'Streaming', value: 'RTSP, RTMP' }
      ]
    },
    {
      category: 'Features',
      items: [
        { label: 'AI Tracking', value: 'Yes' },
        { label: 'Preset Positions', value: 'Up to 255' },
        { label: 'Control Protocols', value: ['VISCA', 'PELCO'] }
      ]
    },
    {
      category: 'Environment',
      items: [
        { label: 'Operating Temp', value: '0\u00b0C to 40\u00b0C' },
        { label: 'Humidity', value: '20% to 80%' }
      ]
    }
  ],
  'vb-370a': [
    {
      category: 'General',
      items: [
        { label: 'Power', value: 'DC 12V' },
        { label: 'Weight', value: '1.5 kg' },
        { label: 'Dimensions', value: '180 x 160 x 120 mm' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '1080p / 4K' },
        { label: 'Zoom', value: '12X Optical' },
        { label: 'Focus', value: 'Auto / Manual' }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        { label: 'Outputs', value: ['HDMI', 'USB', 'IP'] },
        { label: 'Control', value: ['RS-232', 'IP'] },
        { label: 'Streaming', value: 'RTSP, RTMP' }
      ]
    },
    {
      category: 'Features',
      items: [
        { label: 'AI Tracking', value: 'Yes' },
        { label: 'Preset Positions', value: 'Up to 255' },
        { label: 'Control Protocols', value: ['VISCA', 'PELCO'] }
      ]
    },
    {
      category: 'Environment',
      items: [
        { label: 'Operating Temp', value: '0\u00b0C to 40\u00b0C' },
        { label: 'Humidity', value: '20% to 80%' }
      ]
    }
  ],
  'ptz-211': [
    {
      category: 'General',
      items: [
        { label: 'Power', value: 'DC 12V' },
        { label: 'Weight', value: '1.5 kg' },
        { label: 'Dimensions', value: '180 x 160 x 120 mm' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '1080p / 4K' },
        { label: 'Zoom', value: '12X Optical' },
        { label: 'Focus', value: 'Auto / Manual' }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        { label: 'Outputs', value: ['HDMI', 'USB', 'IP'] },
        { label: 'Control', value: ['RS-232', 'IP'] },
        { label: 'Streaming', value: 'RTSP, RTMP' }
      ]
    },
    {
      category: 'Features',
      items: [
        { label: 'AI Tracking', value: 'Yes' },
        { label: 'Preset Positions', value: 'Up to 255' },
        { label: 'Control Protocols', value: ['VISCA', 'PELCO'] }
      ]
    },
    {
      category: 'Environment',
      items: [
        { label: 'Operating Temp', value: '0\u00b0C to 40\u00b0C' },
        { label: 'Humidity', value: '20% to 80%' }
      ]
    }
  ],
  'vb342-pro': [
    {
      category: 'General',
      items: [
        { label: 'Power', value: 'DC 12V' },
        { label: 'Weight', value: '1.5 kg' },
        { label: 'Dimensions', value: '180 x 160 x 120 mm' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '1080p / 4K' },
        { label: 'Zoom', value: '12X Optical' },
        { label: 'Focus', value: 'Auto / Manual' }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        { label: 'Outputs', value: ['HDMI', 'USB', 'IP'] },
        { label: 'Control', value: ['RS-232', 'IP'] },
        { label: 'Streaming', value: 'RTSP, RTMP' }
      ]
    },
    {
      category: 'Features',
      items: [
        { label: 'AI Tracking', value: 'Yes' },
        { label: 'Preset Positions', value: 'Up to 255' },
        { label: 'Control Protocols', value: ['VISCA', 'PELCO'] }
      ]
    },
    {
      category: 'Environment',
      items: [
        { label: 'Operating Temp', value: '0\u00b0C to 40\u00b0C' },
        { label: 'Humidity', value: '20% to 80%' }
      ]
    }
  ],
  'fone-700': [
    {
      category: 'General',
      items: [
        { label: 'Power', value: 'DC 12V' },
        { label: 'Weight', value: '1.5 kg' },
        { label: 'Dimensions', value: '180 x 160 x 120 mm' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '1080p / 4K' },
        { label: 'Zoom', value: '12X Optical' },
        { label: 'Focus', value: 'Auto / Manual' }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        { label: 'Outputs', value: ['HDMI', 'USB', 'IP'] },
        { label: 'Control', value: ['RS-232', 'IP'] },
        { label: 'Streaming', value: 'RTSP, RTMP' }
      ]
    },
    {
      category: 'Features',
      items: [
        { label: 'AI Tracking', value: 'Yes' },
        { label: 'Preset Positions', value: 'Up to 255' },
        { label: 'Control Protocols', value: ['VISCA', 'PELCO'] }
      ]
    },
    {
      category: 'Environment',
      items: [
        { label: 'Operating Temp', value: '0\u00b0C to 40\u00b0C' },
        { label: 'Humidity', value: '20% to 80%' }
      ]
    }
  ],
  'vb-350': [
    {
      category: 'General',
      items: [
        { label: 'Power', value: 'DC 12V' },
        { label: 'Weight', value: '1.5 kg' },
        { label: 'Dimensions', value: '180 x 160 x 120 mm' }
      ]
    },
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '1080p / 4K' },
        { label: 'Zoom', value: '12X Optical' },
        { label: 'Focus', value: 'Auto / Manual' }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        { label: 'Outputs', value: ['HDMI', 'USB', 'IP'] },
        { label: 'Control', value: ['RS-232', 'IP'] },
        { label: 'Streaming', value: 'RTSP, RTMP' }
      ]
    },
    {
      category: 'Features',
      items: [
        { label: 'AI Tracking', value: 'Yes' },
        { label: 'Preset Positions', value: 'Up to 255' },
        { label: 'Control Protocols', value: ['VISCA', 'PELCO'] }
      ]
    },
    {
      category: 'Environment',
      items: [
        { label: 'Operating Temp', value: '0\u00b0C to 40\u00b0C' },
        { label: 'Humidity', value: '20% to 80%' }
      ]
    }
  ]
}
