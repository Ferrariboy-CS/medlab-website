export interface MainCategory {
  id: string;
  name: string;
  description: string;
  iconType: 'medical' | 'laboratory' | 'educational' | 'first-aid';
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  mainCategory: string;
  subcategories?: string[];
  featured?: boolean;
}

export const mainCategories: MainCategory[] = [
  {
    id: 'medical',
    name: 'Medical',
    description: 'Diagnostic and therapeutic equipment for healthcare facilities',
    iconType: 'medical',
  },
  {
    id: 'laboratory',
    name: 'Laboratory',
    description: 'Precision instruments and supplies for clinical and research labs',
    iconType: 'laboratory',
  },
  {
    id: 'educational',
    name: 'Educational',
    description: 'Training models and science education equipment',
    iconType: 'educational',
  },
  {
    id: 'first-aid',
    name: 'First Aid',
    description: 'Safety equipment and emergency medical supplies',
    iconType: 'first-aid',
  },
];

export const productCategories: ProductCategory[] = [
  // Medical Equipment
  {
    id: 'ecg-machines',
    name: 'ECG Machines',
    slug: 'ecg-machines',
    description: 'Electrocardiograph machines for cardiac monitoring and diagnosis.',
    mainCategory: 'medical',
    subcategories: ['12-Lead ECG', 'Portable ECG', 'ECG Accessories'],
    featured: true,
  },
  {
    id: 'patient-monitors',
    name: 'Patient Monitors',
    slug: 'patient-monitors',
    description: 'Multi-parameter monitors for continuous patient observation.',
    mainCategory: 'medical',
    subcategories: ['Bedside Monitors', 'Transport Monitors', 'Fetal Monitors'],
    featured: true,
  },
  {
    id: 'ultrasound',
    name: 'Ultrasound Systems',
    slug: 'ultrasound',
    description: 'Diagnostic imaging systems for various clinical applications.',
    mainCategory: 'medical',
    subcategories: ['Portable Ultrasound', 'Cart-based Systems', 'Probes & Accessories'],
    featured: true,
  },
  {
    id: 'defibrillators',
    name: 'Defibrillators',
    slug: 'defibrillators',
    description: 'Life-saving devices for cardiac emergencies.',
    mainCategory: 'medical',
    subcategories: ['AED', 'Manual Defibrillators', 'Accessories'],
  },
  {
    id: 'surgical-equipment',
    name: 'Surgical Equipment',
    slug: 'surgical-equipment',
    description: 'Operating room equipment and surgical instruments.',
    mainCategory: 'medical',
    subcategories: ['OR Tables', 'Surgical Lights', 'Electrosurgery'],
  },
  {
    id: 'sterilization',
    name: 'Sterilization',
    slug: 'sterilization',
    description: 'Autoclaves and sterilization equipment for infection control.',
    mainCategory: 'medical',
    subcategories: ['Autoclaves', 'Indicators', 'Accessories'],
  },

  // Laboratory Equipment
  {
    id: 'centrifuges',
    name: 'Centrifuges',
    slug: 'centrifuges',
    description: 'High-speed separation equipment for sample processing.',
    mainCategory: 'laboratory',
    subcategories: ['Microcentrifuges', 'Clinical Centrifuges', 'Refrigerated'],
    featured: true,
  },
  {
    id: 'microscopes',
    name: 'Microscopes',
    slug: 'microscopes',
    description: 'Optical instruments for magnified sample examination.',
    mainCategory: 'laboratory',
    subcategories: ['Compound Microscopes', 'Stereo Microscopes', 'Digital Microscopes'],
    featured: true,
  },
  {
    id: 'analyzers',
    name: 'Analyzers',
    slug: 'analyzers',
    description: 'Automated systems for clinical chemistry and hematology.',
    mainCategory: 'laboratory',
    subcategories: ['Hematology', 'Chemistry', 'Immunoassay'],
    featured: true,
  },
  {
    id: 'lab-glassware',
    name: 'Lab Glassware',
    slug: 'lab-glassware',
    description: 'Beakers, flasks, and other laboratory glassware.',
    mainCategory: 'laboratory',
    subcategories: ['Beakers', 'Flasks', 'Test Tubes', 'Pipettes'],
  },
  {
    id: 'lab-consumables',
    name: 'Lab Consumables',
    slug: 'lab-consumables',
    description: 'Disposable supplies for daily laboratory operations.',
    mainCategory: 'laboratory',
    subcategories: ['Sample Containers', 'Slides', 'Reagents'],
  },

  // Educational Equipment
  {
    id: 'anatomical-models',
    name: 'Anatomical Models',
    slug: 'anatomical-models',
    description: 'Detailed models for anatomy education and training.',
    mainCategory: 'educational',
    subcategories: ['Skeletal Models', 'Organ Models', 'Full Body Models'],
    featured: true,
  },
  {
    id: 'training-manikins',
    name: 'Training Manikins',
    slug: 'training-manikins',
    description: 'Simulation equipment for medical skills training.',
    mainCategory: 'educational',
    subcategories: ['CPR Manikins', 'IV Training Arms', 'Nursing Simulators'],
    featured: true,
  },
  {
    id: 'science-equipment',
    name: 'Science Equipment',
    slug: 'science-equipment',
    description: 'Equipment for school and university science labs.',
    mainCategory: 'educational',
    subcategories: ['Physics', 'Chemistry', 'Biology'],
  },

  // First Aid & Safety
  {
    id: 'first-aid-kits',
    name: 'First Aid Kits',
    slug: 'first-aid-kits',
    description: 'Comprehensive first aid solutions for all environments.',
    mainCategory: 'first-aid',
    subcategories: ['Office Kits', 'Industrial Kits', 'Vehicle Kits'],
    featured: true,
  },
  {
    id: 'emergency-supplies',
    name: 'Emergency Supplies',
    slug: 'emergency-supplies',
    description: 'Emergency medical supplies and trauma equipment.',
    mainCategory: 'first-aid',
    subcategories: ['Splints', 'Burn Care', 'Trauma Kits'],
  },
  {
    id: 'safety-equipment',
    name: 'Safety Equipment',
    slug: 'safety-equipment',
    description: 'Personal protective equipment and safety gear.',
    mainCategory: 'first-aid',
    subcategories: ['Gloves', 'Eye Protection', 'Respiratory'],
    featured: true,
  },
];

// Helper function to get icon component by type
export const getCategoryIcon = (iconType: MainCategory['iconType']) => {
  return iconType;
};
