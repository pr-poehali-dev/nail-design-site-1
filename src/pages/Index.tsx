import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface NailDesign {
  id: number;
  image: string;
  alt: string;
}

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<NailDesign | null>(null);

  const nailDesigns: NailDesign[] = [
    { id: 1, image: 'https://cdn.poehali.dev/files/f599268d-5521-47ef-ae0f-3c7e7b553358.jpeg', alt: 'Дизайн с надписями и декором' },
    { id: 2, image: 'https://cdn.poehali.dev/files/96c9ee4f-f123-4e6b-8a64-53f32ef8b5e6.jpeg', alt: 'Серебряный хромированный дизайн' },
    { id: 3, image: 'https://cdn.poehali.dev/files/3b3fbda8-2a6f-49b5-8235-47d3fb292756.jpeg', alt: 'Серебряные узоры со стразами' },
    { id: 4, image: 'https://cdn.poehali.dev/files/2a191605-6f98-44af-b1d7-88b5963dab8b.jpeg', alt: 'Лавандовый перламутр с декором' },
    { id: 5, image: 'https://cdn.poehali.dev/files/e31a5668-f32b-461f-b3b2-8918a13e7a1e.jpeg', alt: 'Нежный розовый с жемчугом' },
    { id: 6, image: 'https://cdn.poehali.dev/files/4c96451d-01d6-4ba5-8c86-39db64970b36.jpeg', alt: 'Перламутровый nude градиент' },
    { id: 7, image: 'https://cdn.poehali.dev/files/c643e846-ac8c-4ee9-a724-baac1f8ba28a.jpeg', alt: 'Белый френч с цветочным декором' },
    { id: 8, image: 'https://cdn.poehali.dev/files/8f99b6a5-2dcc-4fe7-921f-ed6e7d04a25e.jpeg', alt: 'Серебряные абстрактные узоры' },
    { id: 9, image: 'https://cdn.poehali.dev/files/623438da-a130-4ed7-8259-bce62278e618.png', alt: 'Хромированный дизайн с акцентами' },
    { id: 10, image: 'https://cdn.poehali.dev/files/bb12620e-87f8-4cc8-82be-c64a71dbda75.jpeg', alt: 'Белый френч с металлическими шипами' },
    { id: 11, image: 'https://cdn.poehali.dev/files/05dbb95c-63c1-442e-b126-24cf864bd33e.jpeg', alt: 'Розовый омбре с геометрией' },
    { id: 12, image: 'https://cdn.poehali.dev/files/943669b1-6a09-4caa-beaf-14c82b72ee2b.jpeg', alt: 'Нежный розовый с блёстками' },
    { id: 13, image: 'https://cdn.poehali.dev/files/62ee46cb-4406-4506-8566-7b01ab062606.jpeg', alt: 'Чёрный и розовый контраст' },
    { id: 14, image: 'https://cdn.poehali.dev/files/e1a0fc54-f09d-4cb4-8af7-8a0198e763dd.jpeg', alt: 'Голубой дизайн с объёмным декором' },
    { id: 15, image: 'https://cdn.poehali.dev/files/9aa86815-8bf9-4590-99c7-3bfc4c7f0e20.jpeg', alt: 'Молочный оттенок с объёмным декором' },
    { id: 16, image: 'https://cdn.poehali.dev/files/2ab4a48a-bee1-4663-8dcf-aa764bf92bc1.jpeg', alt: 'Nude с объёмными узорами и жемчугом' },
    { id: 17, image: 'https://cdn.poehali.dev/files/e2763a5b-d87f-403d-a2c4-525492295d76.jpeg', alt: 'Белый френч с серебряными надписями' },
    { id: 18, image: 'https://cdn.poehali.dev/files/3e0b7bea-ecb1-4dbf-85cf-b400d246daad.jpeg', alt: 'Молочный градиент со звёздами' },
    { id: 19, image: 'https://cdn.poehali.dev/files/8dfd4a79-6db8-41a6-987a-1e21e0f112d9.jpeg', alt: 'Белый френч с серебряными узорами' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-light tracking-wide">NAIL STUDIO</h1>
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Icon name="Instagram" size={20} />
            </a>
            <a 
              href="tel:+79999999999" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Телефон"
            >
              <Icon name="Phone" size={20} />
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-wide">Портфолио</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Минималистичные дизайны, созданные с вниманием к деталям
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {nailDesigns.map((design, index) => (
            <div
              key={design.id}
              className="group relative aspect-square overflow-hidden bg-muted cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(design)}
            >
              <img
                src={design.image}
                alt={design.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Icon 
                  name="Maximize2" 
                  size={32} 
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Nail Studio. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="tel:+79999999999" className="hover:text-foreground transition-colors">
                +7 999 999 99 99
              </a>
              <a href="mailto:info@nailstudio.ru" className="hover:text-foreground transition-colors">
                info@nailstudio.ru
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative animate-scale-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors"
              aria-label="Закрыть"
            >
              <Icon name="X" size={32} />
            </button>
            {selectedImage && (
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;