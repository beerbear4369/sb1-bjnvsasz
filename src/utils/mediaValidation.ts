export const MAX_TEXT_LENGTH = 1000;
export const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
export const MAX_VIDEO_SIZE = 20 * 1024 * 1024; // 20MB
export const MAX_VIDEO_DURATION = 120; // 2 minutes in seconds

export const validateTextMessage = (text: string): string | null => {
  if (text.length > MAX_TEXT_LENGTH) {
    return `Message too long. Maximum ${MAX_TEXT_LENGTH} characters allowed.`;
  }
  return null;
};

export const validateImage = async (file: File): Promise<string | null> => {
  if (file.size > MAX_IMAGE_SIZE) {
    return `Image too large. Maximum size is ${MAX_IMAGE_SIZE / 1024 / 1024}MB.`;
  }
  
  if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    return 'Invalid image format. Only JPG, PNG, and GIF are supported.';
  }
  
  return null;
};

export const validateVideo = async (file: File): Promise<string | null> => {
  if (file.size > MAX_VIDEO_SIZE) {
    return `Video too large. Maximum size is ${MAX_VIDEO_SIZE / 1024 / 1024}MB.`;
  }
  
  const video = document.createElement('video');
  video.src = URL.createObjectURL(file);
  
  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      URL.revokeObjectURL(video.src);
      if (video.duration > MAX_VIDEO_DURATION) {
        resolve(`Video too long. Maximum duration is ${MAX_VIDEO_DURATION / 60} minutes.`);
      }
      resolve(null);
    };
  });
};