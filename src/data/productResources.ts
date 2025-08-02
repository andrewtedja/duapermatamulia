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
      thumbnail: '/thumbs/tr315-datasheet.avif',
      downloadUrl: '/downloads/tr315-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/tr315-install.avif',
      downloadUrl: '/downloads/tr315-install.pdf'
    }
  ],
  'hub-30': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/hub30-datasheet.avif',
      downloadUrl: '/downloads/hub30-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/hub30-install.avif',
      downloadUrl: '/downloads/hub30-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/hub30-image.avif',
      downloadUrl: '/downloads/hub30-image.avif'
    }
  ],
  'mt-300n': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/mt300n-datasheet.avif',
      downloadUrl: '/downloads/mt300n-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/mt300n-install.avif',
      downloadUrl: '/downloads/mt300n-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/mt300n-image.avif',
      downloadUrl: '/downloads/mt300n-image.avif'
    }
  ],
  'sa-a5': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/sa-a5-datasheet.avif',
      downloadUrl: '/downloads/sa-a5-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/sa-a5-install.avif',
      downloadUrl: '/downloads/sa-a5-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/sa-a5-image.avif',
      downloadUrl: '/downloads/sa-a5-image.avif'
    }
  ],
  'cam-570': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/cam570-datasheet.avif',
      downloadUrl: '/downloads/cam570-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/cam570-install.avif',
      downloadUrl: '/downloads/cam570-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/cam570-image.avif',
      downloadUrl: '/downloads/cam570-image.avif'
    }
  ],
  'tr-615': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/tr-615-datasheet.avif',
      downloadUrl: '/downloads/tr-615-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/tr-615-install.avif',
      downloadUrl: '/downloads/tr-615-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/tr-615-image.avif',
      downloadUrl: '/downloads/tr-615-image.avif'
    }
  ],
  'mt-100': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/mt100-datasheet.avif',
      downloadUrl: '/downloads/mt100-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/mt100-install.avif',
      downloadUrl: '/downloads/mt100-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/mt100-image.avif',
      downloadUrl: '/downloads/mt100-image.avif'
    }
  ],
  'u70-i': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/u70i-datasheet.avif',
      downloadUrl: '/downloads/u70i-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/u70i-install.avif',
      downloadUrl: '/downloads/u70i-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/u70i-image.avif',
      downloadUrl: '/downloads/u70i-image.avif'
    }
  ],
  'm70-w': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/m70w-datasheet.avif',
      downloadUrl: '/downloads/m70w-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/m70w-install.avif',
      downloadUrl: '/downloads/m70w-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/m70w-image.avif',
      downloadUrl: '/downloads/m70w-image.avif'
    }
  ],
  'tr-211': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/tr-211-datasheet.avif',
      downloadUrl: '/downloads/tr-211-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/tr-211-install.avif',
      downloadUrl: '/downloads/tr-211-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/tr-211-image.avif',
      downloadUrl: '/downloads/tr-211-image.avif'
    }
  ],
  'vb-370a': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/vb370a-datasheet.avif',
      downloadUrl: '/downloads/vb370a-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/vb370a-install.avif',
      downloadUrl: '/downloads/vb370a-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/vb370a-image.avif',
      downloadUrl: '/downloads/vb370a-image.avif'
    }
  ],
  'ptz-211': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/ptz-211-datasheet.avif',
      downloadUrl: '/downloads/ptz-211-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/ptz-211-install.avif',
      downloadUrl: '/downloads/ptz-211-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/ptz-211-image.avif',
      downloadUrl: '/downloads/ptz-211-image.avif'
    }
  ],
  'vb342-pro': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/vb342-pro-datasheet.avif',
      downloadUrl: '/downloads/vb342-pro-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/vb342-pro-install.avif',
      downloadUrl: '/downloads/vb342-pro-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/vb342-pro-image.avif',
      downloadUrl: '/downloads/vb342-pro-image.avif'
    }
  ],
  'fone-700': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/fone-700-datasheet.avif',
      downloadUrl: '/downloads/fone-700-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/fone-700-install.avif',
      downloadUrl: '/downloads/fone-700-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/fone-700-image.avif',
      downloadUrl: '/downloads/fone-700-image.avif'
    }
  ],
  'vb-350': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/vb350-datasheet.avif',
      downloadUrl: '/downloads/vb350-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/vb350-install.avif',
      downloadUrl: '/downloads/vb350-install.pdf'
    },
    {
      id: 'r3',
      name: 'Product Image',
      type: 'image',
      thumbnail: '/thumbs/vb350-image.avif',
      downloadUrl: '/downloads/vb350-image.avif'
    }
  ]
}
