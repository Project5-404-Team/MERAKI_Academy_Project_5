import React, { useState } from 'react'
import axios from "axios";
const ImageApp = () => {

 const [image, setImage ] = useState("");
const [ url, setUrl ] = useState("");
const uploadImage = ()=>{
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset", "Project_5")

axios.post("https://api.cloudinary.com/v1_1/dfpuepvtg/image/upload",formData)
.then((response)=>{
    console.log(response)
setUrl(response.dara.url)
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