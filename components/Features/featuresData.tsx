import { Feature } from "@/types/feature";
import {
  Brain,
  Gauge,
  BarChart3,
  Settings2,
  ShieldCheck,
  Puzzle
} from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: Brain,
    title: "Advanced AI Modeling",
    description:
      "Leverage deep neural networks and reinforcement learning algorithms for accurate performance predictions and continuous system improvement.",
  },
  {
    id: 2,
    icon: Gauge,
    title: "Real-Time Simulation",
    description:
      "Get instant feedback on design changes with our GPU-accelerated cloud computing framework, enabling thousands of parallel simulations.",
  },
  {
    id: 3,
    icon: Puzzle,
    title: "Seamless Integration",
    description:
      "Works smoothly with industry-standard tools like Autodesk Revit and Rhino/Grasshopper through custom-developed plugins and APIs.",
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Data-Driven Insights",
    description:
      "Access comprehensive analytics on energy efficiency, environmental impact, and building performance to inform design decisions.",
  },
  {
    id: 5,
    icon: Settings2,
    title: "Automated Optimization",
    description:
      "Utilize machine learning algorithms to automatically refine designs for optimal energy efficiency and sustainability metrics.",
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Environmental Compliance",
    description:
      "Ensure designs meet or exceed sustainability standards and building codes through automated compliance checking.",
  },
];

export default featuresData;
