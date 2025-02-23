import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    designation: "Lead Architect, Sustainable Design Studio",
    image: image1,
    content:
      "The real-time feedback on energy performance has transformed our design process. We've seen an 85% improvement in energy efficiency across our projects, and the integration with our existing BIM tools is seamless.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    designation: "Senior Engineer, Green Building Solutions",
    image: image2,
    content:
      "The platform's ability to analyze complex interactions between design elements and environmental factors has revolutionized how we approach sustainable building design. The accuracy of predictions is remarkable.",
  },
  {
    id: 3,
    name: "Emma Thompson",
    designation: "Director of Innovation, EcoArchitects",
    image: image1,
    content:
      "Having instant access to simulation results through the cloud infrastructure has dramatically accelerated our design iterations. The AI's ability to learn from each project continues to impress us.",
  },
  {
    id: 4,
    name: "David Park",
    designation: "Principal Engineer, Urban Development Group",
    image: image2,
    content:
      "The platform's deep learning capabilities have helped us optimize building performance across different climate zones. Its integration with standard tools like Revit and Grasshopper has made adoption effortless.",
  },
];
