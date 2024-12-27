export interface NavItemProps {
  text: string;
  isActive?: boolean;
}

export interface StatisticProps {
  value: string;
  label: string;
}

export interface LawyerCardProps {
  image: string;
  name: string;
  title: string;
}

export interface BlogPostProps {
  image: string;
  title: string;
  width?: string;
}

export interface SocialLinkProps {
  icon: string;
  href: string;
  ariaLabel: string;
}
