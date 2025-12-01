'use client';

import MainNavbar, {
  NavLink,
} from '@/features/main-part/components/main-navbar';

const links: NavLink[] = [
  { label: 'Service', href: '#service' },
  { label: 'Team', href: '#team' },
];

const MainNavbarContainer = () => {
  return <MainNavbar brand="LOOMLOGIC" links={links} />;
};

export default MainNavbarContainer;
