
export const preloadImages = (imagePaths: string[]) => {
  imagePaths.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

export const heroImages = [
  '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
  '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png',
  '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
  '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png'
];
