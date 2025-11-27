export interface Sector {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  iconType: 'hospital' | 'laboratory' | 'education' | 'industry';
  offerings: string[];
  relatedCategories: string[];
}

export interface WhoWeServeItem {
  name: string;
  iconType: 'hospital' | 'laboratory' | 'education' | 'industry';
}

export const sectors: Sector[] = [
  {
    id: 'hospitals',
    name: 'Hospitals & Clinics',
    slug: 'hospitals-clinics',
    shortDescription: 'Complete medical equipment solutions for healthcare facilities.',
    description: 'From diagnostic equipment to surgical instruments, we provide comprehensive solutions for hospitals, clinics, and healthcare centers. Our range includes patient monitoring systems, imaging equipment, and specialized department solutions.',
    iconType: 'hospital',
    offerings: [
      'Patient monitoring equipment',
      'Diagnostic imaging systems',
      'Surgical instruments & equipment',
      'ICU & theatre solutions',
      'Medical consumables',
      'Equipment maintenance & support',
    ],
    relatedCategories: ['ecg-machines', 'patient-monitors', 'ultrasound', 'defibrillators'],
  },
  {
    id: 'laboratories',
    name: 'Laboratories',
    slug: 'laboratories',
    shortDescription: 'Precision instruments and consumables for clinical and research labs.',
    description: 'We support clinical laboratories, research facilities, and quality control labs with a comprehensive range of analyzers, consumables, and laboratory supplies. Our solutions help ensure accurate results and efficient workflows.',
    iconType: 'laboratory',
    offerings: [
      'Hematology & chemistry analyzers',
      'Microscopes & imaging systems',
      'Sample preparation equipment',
      'Quality control materials',
      'Laboratory consumables',
      'Technical training & support',
    ],
    relatedCategories: ['centrifuges', 'microscopes', 'analyzers', 'lab-glassware'],
  },
  {
    id: 'education',
    name: 'Education',
    slug: 'education',
    shortDescription: 'Training equipment and science education solutions.',
    description: 'We equip medical schools, nursing colleges, and universities with the training equipment needed to prepare the next generation of healthcare professionals. Our educational range includes anatomical models, simulation manikins, and science lab equipment.',
    iconType: 'education',
    offerings: [
      'Anatomical models & charts',
      'CPR & clinical simulation',
      'Science laboratory equipment',
      'Medical training manikins',
      'Educational materials',
      'Curriculum consultation',
    ],
    relatedCategories: ['anatomical-models', 'training-manikins', 'science-equipment'],
  },
  {
    id: 'industry',
    name: 'Mining & Industry',
    slug: 'mining-industry',
    shortDescription: 'Occupational health and safety solutions for industrial settings.',
    description: 'We serve the mining, manufacturing, and industrial sectors with occupational health equipment and workplace safety solutions. Our products help companies maintain safe work environments and comply with health and safety regulations.',
    iconType: 'industry',
    offerings: [
      'Occupational health equipment',
      'First aid kits & stations',
      'Safety & PPE supplies',
      'Emergency response equipment',
      'Drug & alcohol testing',
      'Onsite clinic setup',
    ],
    relatedCategories: ['first-aid-kits', 'safety-equipment', 'emergency-supplies'],
  },
];

export const whoWeServe: WhoWeServeItem[] = [
  { name: 'Hospitals', iconType: 'hospital' },
  { name: 'Laboratories', iconType: 'laboratory' },
  { name: 'Education', iconType: 'education' },
  { name: 'Mining & Industry', iconType: 'industry' },
];
