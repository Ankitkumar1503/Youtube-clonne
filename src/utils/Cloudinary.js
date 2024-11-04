import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (locaFilePath) => {
    try {
        if (!locaFilePath) return null 
        // upload this file on cloudinary
        const response = await cloudinary.uploader.upload(locaFilePath, {
            resource_type: 'auto'
        })
        // file has been uplaod successfull
        console.log("file has been uplaod on cloudinary", response.url);
        return response
        
    } catch (error) {
        fs.unlinkSync(locaFilePath) // remove the locally saved temporary file as the upload
    }
}


cloudinary.v2.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
    {public_id: "olympic_flag"},
    function (error, result) {console.log(result);}
    );