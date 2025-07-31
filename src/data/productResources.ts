export type ProductResource = {
  id: string
  name: string
  type: 'pdf' | 'doc' | 'image'
  thumbnail: string
  downloadUrl: string
}
export const productResources: Record<string, ProductResource[]> = {
  'tr-315': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/tr315-datasheet.png',
      downloadUrl: '/downloads/tr315-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/tr315-install.png',
      downloadUrl: '/downloads/tr315-install.pdf'
    }
  ],
  'hub-30': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/hub30-datasheet.png',
      downloadUrl: '/downloads/hub30-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/hub30-install.png',
      downloadUrl: '/downloads/hub30-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/hub30-image.png',
      downloadUrl: '/downloads/hub30-image.png'
    }
  ],
  'mt-300n': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/mt300n-datasheet.png',
      downloadUrl: '/downloads/mt300n-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/mt300n-install.png',
      downloadUrl: '/downloads/mt300n-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/mt300n-image.png',
      downloadUrl: '/downloads/mt300n-image.png'
    }
  ],
  'sa-a5': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/sa-a5-datasheet.png',
      downloadUrl: '/downloads/sa-a5-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/sa-a5-install.png',
      downloadUrl: '/downloads/sa-a5-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/sa-a5-image.png',
      downloadUrl: '/downloads/sa-a5-image.png'
    }
  ],
  'cam-570': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/cam570-datasheet.png',
      downloadUrl: '/downloads/cam570-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/cam570-install.png',
      downloadUrl: '/downloads/cam570-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/cam570-image.png',
      downloadUrl: '/downloads/cam570-image.png'
    }
  ],
  'tr-615': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/tr-615-datasheet.png',
      downloadUrl: '/downloads/tr-615-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/tr-615-install.png',
      downloadUrl: '/downloads/tr-615-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/tr-615-image.png',
      downloadUrl: '/downloads/tr-615-image.png'
    }
  ],
  'mt-100': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/mt100-datasheet.png',
      downloadUrl: '/downloads/mt100-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/mt100-install.png',
      downloadUrl: '/downloads/mt100-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/mt100-image.png',
      downloadUrl: '/downloads/mt100-image.png'
    }
  ],
  'u70-i': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/u70i-datasheet.png',
      downloadUrl: '/downloads/u70i-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/u70i-install.png',
      downloadUrl: '/downloads/u70i-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/u70i-image.png',
      downloadUrl: '/downloads/u70i-image.png'
    }
  ],
  'm70-w': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/m70w-datasheet.png',
      downloadUrl: '/downloads/m70w-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/m70w-install.png',
      downloadUrl: '/downloads/m70w-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/m70w-image.png',
      downloadUrl: '/downloads/m70w-image.png'
    }
  ],
  'tr-211': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/tr-211-datasheet.png',
      downloadUrl: '/downloads/tr-211-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/tr-211-install.png',
      downloadUrl: '/downloads/tr-211-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/tr-211-image.png',
      downloadUrl: '/downloads/tr-211-image.png'
    }
  ],
  'vb-370a': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/vb370a-datasheet.png',
      downloadUrl: '/downloads/vb370a-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/vb370a-install.png',
      downloadUrl: '/downloads/vb370a-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/vb370a-image.png',
      downloadUrl: '/downloads/vb370a-image.png'
    }
  ],
  'ptz-211': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/ptz-211-datasheet.png',
      downloadUrl: '/downloads/ptz-211-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/ptz-211-install.png',
      downloadUrl: '/downloads/ptz-211-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/ptz-211-image.png',
      downloadUrl: '/downloads/ptz-211-image.png'
    }
  ],
  'vb342-pro': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/vb342-pro-datasheet.png',
      downloadUrl: '/downloads/vb342-pro-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/vb342-pro-install.png',
      downloadUrl: '/downloads/vb342-pro-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/vb342-pro-image.png',
      downloadUrl: '/downloads/vb342-pro-image.png'
    }
  ],
  'fone-700': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/fone-700-datasheet.png',
      downloadUrl: '/downloads/fone-700-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/fone-700-install.png',
      downloadUrl: '/downloads/fone-700-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/fone-700-image.png',
      downloadUrl: '/downloads/fone-700-image.png'
    }
  ],
  'vb-350': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/vb350-datasheet.png',
      downloadUrl: '/downloads/vb350-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/vb350-install.png',
      downloadUrl: '/downloads/vb350-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/vb350-image.png',
      downloadUrl: '/downloads/vb350-image.png'
    }
  ]
}
