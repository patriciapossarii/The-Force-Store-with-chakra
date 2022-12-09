import dark from "../assets/icons-side-force/iconDarkSide.png";
import light from "../assets/icons-side-force/iconLightSide.png";

export const getTypes = (type) => {
  switch (type) {
    case "Dark":
      return dark;
    case "Light":
      return light;
    default:
      return light;
  }
};

