export const getImageUrl = (image) => {
  if (props.user?.image) return `${import.meta.env.VITE_API_BASE_URL}${image}`;
  else return "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
};

export const getProfileImageUrl = (image) => {
  if (image) return `${import.meta.env.VITE_API_BASE_URL}${image}`;
  else return "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
};
