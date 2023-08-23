import { MdLocationPin } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { BiSolidPhoneCall } from "react-icons/bi";
const data = [
  {
    id: 0,
    heading: "Address",
    description:
      "3/1, Acharya Para Ln, Naora, Shibpur, Howrah, West Bengal 711101",
    icon: (
      <MdLocationPin
        size={80}
        className="bg-dark rounded-full p-3 bg-opacity-70 text-main-m"
      />
    ),
  },
  {
    id: 1,
    heading: "Email Us",
    description: "memories.designer1@gmail.com",
    icon: (
      <GrMail
        size={80}
        className="bg-dark rounded-full p-3 bg-opacity-70 text-main-m"
      />
    ),
  },
  {
    id: 2,
    heading: "Call Now",
    description: "+919830961795",
    icon: (
      <BiSolidPhoneCall
        size={80}
        className="bg-dark rounded-full p-3 bg-opacity-70 text-main-m"
      />
    ),
  },
];
export default data;
