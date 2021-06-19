import React from 'react';
import ReactDOM from 'react-dom';
import './UploadImg.css';

export function UploadImg(props) {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const {current} = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
          current.src = e.target.result;
      }
      reader.readAsDataURL(file);
      console.log("img Fileee " + current.src)
      console.log(props.username)
      // fetch(`/updateProfileImg?ImgSrc=` + current.src +`&user=` + props.username)
      //  .then(res => res.json())
      //  .then(json => this.setState({ data: json }));
      
    }
  };

  return(
    <div className='upload'>
      <input
        type = "file"
        accept='image/*'
        onChange={handleImageUpload}
        ref={imageUploader}
        multiple='false'
      />

      <div className='containerImg'
           onClick={() => imageUploader.current.click()} >
        <img className='imgClass img-rounded'
             src = {props.src}
             ref = {uploadedImage}
          />
      </div>
      <div className="changeImg">
          לשינוי תמונת פרופיל לחצי על התמונה  
      </div>
    </div>
  )
}
