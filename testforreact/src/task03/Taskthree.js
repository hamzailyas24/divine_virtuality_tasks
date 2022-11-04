// Build a multiple image uploader.
// The user can upload multiple images.
// The images should be stored in the object.
// Display all the images in a div.
// The images should be displayed in a grid.
// The images should be displayed with a DELETE BUTTON.

import React from "react";
import { Button } from "react-bootstrap";

function Taskthree() {
  const [images, setImages] = React.useState([]);
  const [imageURLs, setImageURLs] = React.useState([]);

  React.useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach((image) => {
        newImageURLs.push(URL.createObjectURL(image));
    })
    setImageURLs(newImageURLs);
  }, [images]);

  const handleImageChange = (e) => {
    setImages([...images, e.target.files[0]]);
    }

    const handleDelete = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    }


  return (
    <>
        <div className="text-center mt-4">
            <h1>TASK 3</h1>
            <input type="file" onChange={handleImageChange} multiple />
        </div>
        <div className="text-center mt-4">
            {/* {imageURLs.map((imageURL, index) => (
                <img key={index} style={{
                    width: "100px",
                    height: "100px",
                }} src={imageURL} alt="image" onClick={} />
            ))} */}
        </div>


    </>
  );
}

export default Taskthree;
