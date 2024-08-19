import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export const HomeIcon = (props) => (
  <Entypo name="home" size={24} color="white" {...props} />
);

export const InfoIcon = (props) => (
  <AntDesign name="infocirlce" size={24} color="black" {...props} />
);

export const BackIcon = (props) => (
  <AntDesign name="back" size={24} color="black" {...props} />
);

export const UserIcon = ({ sizeIcon, colorIcon }) => (
  <AntDesign name="user" size={sizeIcon} color={colorIcon} />
);

export const Phone = ({ sizeIcon, colorIcon }) => (
  <Feather name="smartphone" size={sizeIcon} color={colorIcon} />
);

export const InfoIcon2 = ({ sizeIcon, colorIcon }) => (
  <Feather name="info" size={sizeIcon} color={colorIcon} />
);
