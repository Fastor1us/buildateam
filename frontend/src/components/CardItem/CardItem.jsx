import React, { useRef, useEffect } from 'react';
import styles from './CardItem.module.css';

export default function CardItem({ item }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const image = new Image();
    image.src = item.image.src;
    image.onload = () => {
      const containerWidth = canvas.offsetWidth;
      const containerHeight = canvas.offsetHeight;
      const imageAspectRatio = image.width / image.height;
      const containerAspectRatio = containerWidth / containerHeight;

      let renderWidth, renderHeight;
      if (imageAspectRatio > containerAspectRatio) {
        renderWidth = containerWidth;
        renderHeight = containerWidth / imageAspectRatio;
      } else {
        renderWidth = containerHeight * imageAspectRatio;
        renderHeight = containerHeight;
      }

      const x = (containerWidth - renderWidth) / 2;
      const y = (containerHeight - renderHeight) / 2;

      context.drawImage(image, x, y, renderWidth, renderHeight);
    };
  }, [item.image.src]);

  return (
    <li key={item.id} className={styles.li}>
      <h2 className={styles.title}>{item.title}</h2>
      <div className={styles.imageContainer}>
        <canvas className={styles.canvas} ref={canvasRef} />
      </div>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: item.body_html }}
      ></p>
    </li>
  );
}
