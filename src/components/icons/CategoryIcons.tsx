import React from 'react';
import {
  HeartIcon,
  BeakerIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

interface IconProps {
  className?: string;
}

export const MedicalIcon: React.FC<IconProps> = ({ className = 'w-8 h-8' }) => (
  <HeartIcon className={className} />
);

export const LaboratoryIcon: React.FC<IconProps> = ({ className = 'w-8 h-8' }) => (
  <BeakerIcon className={className} />
);

export const EducationalIcon: React.FC<IconProps> = ({ className = 'w-8 h-8' }) => (
  <AcademicCapIcon className={className} />
);

export const FirstAidIcon: React.FC<IconProps> = ({ className = 'w-8 h-8' }) => (
  <ShieldCheckIcon className={className} />
);

export const getCategoryIcon = (iconType: string, className?: string) => {
  const iconProps = { className: className || 'w-8 h-8' };
  switch (iconType) {
    case 'medical':
      return <MedicalIcon {...iconProps} />;
    case 'laboratory':
      return <LaboratoryIcon {...iconProps} />;
    case 'educational':
      return <EducationalIcon {...iconProps} />;
    case 'first-aid':
      return <FirstAidIcon {...iconProps} />;
    default:
      return <BeakerIcon className={className || 'w-8 h-8'} />;
  }
};

