import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  const handleItemClick = (imageUrl, alt) => {
    openModal(imageUrl, alt);
  };

  return (
    <ul className={styles.imageGallery}>
      {images.map(image => (
        <li key={image.id} className={styles.imageGalleryItem}>
          <ImageGalleryItem
            imageUrl={image.webformatURL}
            alt={image.alt}
            onClick={() => handleItemClick(image.largeImageURL, image.alt)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

// import React from 'react';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// const ImageGallery = ({ images, openModal }) => {
//   return (
//     <ul className="gallery">
//       {images.map(image => (
//         <ImageGalleryItem
//           key={image.id}
//           imageUrl={image.webformatURL}
//           alt={image.alt}
//           onClick={() => openModal(image.largeImageURL, image.alt)}
//         />
//       ))}
//     </ul>
//   );
// };

// export default ImageGallery;
