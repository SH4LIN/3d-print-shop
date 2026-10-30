export const siteConfig = {
  name: "3D Print Factory",
  tagline: "Precision Crafted. 3D Printed.",
  description:
    "Discover our collection of unique 3D printed products — from articulated figurines to custom home decor. Precision-crafted, layer by layer.",

  contact: {
    whatsapp: {
      number: "+919876543210",
      message:
        "Hi! I saw your products at the exhibition and I'm interested in learning more.",
    },
    email: "hello@3dprintfactory.com",
    instagram: "https://instagram.com/3dprintfactory",
  },

  socials: {
    instagram: "https://instagram.com/3dprintfactory",
    facebook: "https://facebook.com/3dprintfactory",
    youtube: "https://youtube.com/@3dprintfactory",
  },

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Catalogue", href: "/catalogue" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  categories: [
    "All",
    "Figurines",
    "Home & Decor",
    "Gadgets",
    "Custom Prints",
  ],

  process: [
    {
      step: 1,
      title: "Design",
      description:
        "Every product starts as a digital 3D model, carefully designed or selected for quality and detail.",
      icon: "Pencil",
    },
    {
      step: 2,
      title: "Print",
      description:
        "Using precision FDM technology, we build each piece layer by layer with premium filaments.",
      icon: "Printer",
    },
    {
      step: 3,
      title: "Deliver",
      description:
        "Quality-checked and carefully packaged, your unique 3D printed product is ready to enjoy.",
      icon: "Package",
    },
  ],
} as const;
