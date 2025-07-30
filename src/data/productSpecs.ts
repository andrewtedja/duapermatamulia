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
  ]
}
