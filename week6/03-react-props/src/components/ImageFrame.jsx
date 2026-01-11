// React component
// with parameters and props {}

function ImageFrame({ src, alt, caption }) {
  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default ImageFrame