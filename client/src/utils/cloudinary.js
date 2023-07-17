
import { cloudinaryConfig } from 'cloudinary-react';

cloudinaryConfig({
  cloud_name: 'djl7btyt5',
  api_key: '562642234598146',
  api_secret: 't7tbyQpEnTkP7Adt4KpSdSNvKUo',
});

export const openUploadWidget = (callback) => {
  // Cloudinary upload widget configuration
  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'djl7btyt5',
      uploadPreset: 'ml_default', 
    },
    (error, result) => {
      callback(error, result);
    }
  );

  widget.open();
};
export default cloudinaryConfig