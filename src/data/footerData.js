// import bg from "@/images/backgrounds/footer-bg.jpg";
import footerImage from "@/images/resources/footer-logo.jpg";
import { contact } from "./contactData";

const footerData = {
  ...contact,
  link: "Bharat Online",
  copyrightYear: new Date().getFullYear(),
  about:
    "SVMM is tirelessly working in identification, categorization, treatment, rehabilitation of tribals affected by genetically transmitted Sickle Cell Anemia.",
  bottomLogo: footerImage.src,
  // footerBg: bg.src,
  // social: [
  //   {
  //     id: 1,
  //     href: "#",
  //     icon: "fa-twitter"
  //   },
  //   {
  //     id: 2,
  //     href: "#",
  //     icon: "fa-facebook-square"
  //   },
  //   {
  //     id: 3,
  //     href: "#",
  //     icon: "fa-dribbble"
  //   },
  //   {
  //     id: 4,
  //     href: "#",
  //     icon: "fa-instagram"
  //   }
  // ],
  exploreList: [
    {
      id: 1,
      href: "#",
      title: "Health"
    },
    {
      id: 2,
      href: "#",
      title: "Education"
    },
    {
      id: 3,
      href: "#",
      title: "Social"
    },
    {
      id: 4,
      href: "#",
      title: "Self Reliance"
    },
    {
      id: 5,
      href: "#",
      title: "Culture"
    },
    {
      id: 6,
      href: "#",
      title: ""
    },
    {
      id: 7,
      href: "#",
      title: "Contact"
    },
    {
      id: 8,
      href: "#",
      title: "Help"
    },
    {
      id: 9,
      href: "#",
      title: "Faqs"
    }
  ]
};

export default footerData;
