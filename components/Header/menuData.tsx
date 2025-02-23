interface MenuItem {
  title: string;
  path: string;
  submenu?: MenuItem[];
}

const menuData: MenuItem[] = [
  {
    title: "Features",
    path: "#features",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "FAQ",
    path: "#faq",
  },
  {
    title: "Testimonials",
    path: "#testimonial",
  },
  {
    title: "Pricing",
    path: "#pricing",
  },
  
];

export default menuData;
