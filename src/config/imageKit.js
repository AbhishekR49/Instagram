const ImageKit = require('imagekit');

const storageInstance = new ImageKit({
    privateKey: process.env.IK_PRIVATE_KEY,
    publicKey: process.env.IK_PUBLIC_KEY,
    urlEndpoint: process.env.IK_URL
});

const sendFiles = async (file) => {
    try {
        const response = await storageInstance.upload({    
            file: file.buffer,
            fileName: file.originalname,
        });
        return response;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
}

module.exports = {  sendFiles };