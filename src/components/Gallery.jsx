import { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { 
      src: '/graduation.jpg', 
      alt: 'Graduation',
      caption: 'We graduated together'
    },
    { 
      src: '/edinbourgher.jpg', 
      alt: 'Edinburgh',
      caption: 'Knowing each other only 2 months we ran away to Edinburgh for the weekend'
    },
    { 
      src: '/poland1.jpg', 
      alt: 'Poland horse ranch',
      caption: 'We travel to Poland regularly and enjoy spending time on the family horse ranch' 
    },
    { 
      src: '/poland2.jpg', 
      alt: 'Christmas in Poland',
      caption: 'Christmas in Poland where we\'re in our Christmas jumpers' 
    },
    { 
      src: '/edinborough.jpg', 
      alt: 'Edinburgh botanical garden',
      caption: 'The botanical garden in Edinburgh, a special place for us' 
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <>
      <section className="gallery">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => openLightbox(image)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                {image.caption && (
                  <div className="gallery-caption">
                    <p>{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            {selectedImage.caption && (
              <div className="lightbox-caption">
                <p>{selectedImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
