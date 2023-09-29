import { useState } from "react";

const LikeImages = () => {
  const [imageUrls, setImageUrls] = useState([
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  ]);

  const [imageIndex, setImageIndex] = useState(0);

  const callImage = () => {
    if (imageIndex < imageUrls.length) {
      setImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Like Images</h1>
      <div>
        <button onClick={callImage}>Add Images</button>
        {imageUrls.slice(0, imageIndex).map((src) => (
          <Image key={src} src={src} />
        ))}
      </div>
    </div>
  );
};

const Image = ({ src }) => {
  const [size, setSize] = useState(18);

  function handleClick() {
    setSize((size) => (size < 32 ? size + 2 : size));
  }

  return (
    <>
      <img src={src} alt="app-photos" onClick={handleClick} width="50px"/>
      <span style={{ fontSize: size }} role="img" aria-label="thumbs-up">
        👍
      </span>
    </>
  );
};
export default LikeImages;
