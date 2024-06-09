export const getImageUrl = (image) => {
  if (props.user?.image) return `${import.meta.env.VITE_API_BASE_URL}${image}`;
  else return "/src/assets/placeholders/image.png";
};

export const getProfileImageUrl = (image) => {
  if (image) return `${import.meta.env.VITE_API_BASE_URL}${image}`;
  else return "/src/assets/placeholders/gray-user.png";
};
