import Image from "next/image";
import myImage from "@/../public/images/forest-track.jpg";


function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Image src={myImage} alt="the most beautiful image you have ever seen" placeholder="blur" />
      <p>text text text text text text text text text text text text</p>
    </>
  );
}

export default Home