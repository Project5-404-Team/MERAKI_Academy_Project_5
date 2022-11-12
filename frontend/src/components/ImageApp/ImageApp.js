import React, { useState } from 'react'
import axios from "axios";
const ImageApp = () => {

 const [image, setImage ] = useState("");
const [ url, setImageUrl ] = useState("");
const uploadImage = ()=>{
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset", "basel_project5")

axios.post("https://api.cloudinary.com/v1_1/did6jp3bj/image/upload",formData)
.then((response)=>{
    console.log(response)
setImageUrl(response.data.secure_url)
})

}


return (
<div>
<div>
<input type="file" onChange= {(e)=> setImage (e.target.files[0])}></input>
<button onClick={uploadImage}>Upload</button>
</div>
<div>
<h1>Uploaded image will be displayed here</h1>
<img src={url}/>
</div>
</div>
)


}
export default ImageApp;