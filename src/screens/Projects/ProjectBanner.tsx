interface ProjectBannerProps {
  children: React.ReactNode;
}

export const ProjectBanner = ({ children }: ProjectBannerProps) => {
  return <p className="text-white max-w-xl mx-auto fade-in">{children}</p>;
};
