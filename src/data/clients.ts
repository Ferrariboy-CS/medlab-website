import ministryAgriculture from '../assets/Client Logos/Ministry of agriculture.png';
import ministryHealth from '../assets/Client Logos/Ministry of health.png';
import nipLogo from '../assets/Client Logos/namibia-institute-of-pathology-limited-logo-png_seeklogo-303752.png';
import nblLogo from '../assets/Client Logos/NBL-logo.png';
import pathCareLogo from '../assets/Client Logos/PathCare-Logo-only_TRANSPARENT-BG-2.png';

export type Client = {
  name: string;
  logo: string;
};

export const clients: Client[] = [
  {
    name: 'Ministry of Agriculture',
    logo: ministryAgriculture,
  },
  {
    name: 'Ministry of Health',
    logo: ministryHealth,
  },
  {
    name: 'Namibia Institute of Pathology',
    logo: nipLogo,
  },
  {
    name: 'Namibia Breweries Limited',
    logo: nblLogo,
  },
  {
    name: 'PathCare',
    logo: pathCareLogo,
  },
];
