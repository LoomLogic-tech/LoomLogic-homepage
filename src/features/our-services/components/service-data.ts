export interface ServiceItem {
  title: string;
  icon: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    title: "Software",
    icon: "/assets/software-icon.svg",
    features: [
      "Develop custom web and mobile applications.",
      "Build secure and scalable enterprise systems.",
      "Ensure reliability for long-term business growth.",
    ],
  },
  {
    title: "Solution",
    icon: "/assets/solution-icon.svg",
    features: [
      "Consult on digital transformation strategies.",
      "Optimize workflows to boost efficiency.",
      "Solve business problems with modern tech.",
      "Maximize performance and reduce costs.",
    ],
  },
  {
    title: "Design",
    icon: "/assets/design-icon.svg",
    features: [
      "Build strong branding and visual corporate identities (CI).",
      "Create impactful marketing materials.",
      "Edit dynamic videos to tell your brand’s story.",
      "Design compelling visual content across all platforms.",
    ],
  },
];
