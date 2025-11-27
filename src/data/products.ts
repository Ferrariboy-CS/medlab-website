export interface Product {
  id: string;
  name: string;
  description: string;
  categorySlug: string;
  brand?: string;
  image: string;
  subcategory?: string;
  features?: string[];
}

export const products: Product[] = [
  // ECG Machines
  {
    id: 'ecg-001',
    name: 'CardioMax 12-Channel ECG',
    description: 'Professional 12-lead ECG with touchscreen display and automatic interpretation.',
    categorySlug: 'ecg-machines',
    brand: 'CardioMax',
    image: '/images/products/ecg-12ch.jpg',
    subcategory: '12-Lead ECG',
    features: ['12-lead simultaneous acquisition', 'Auto interpretation', 'WiFi connectivity'],
  },
  {
    id: 'ecg-002',
    name: 'PortaHeart Handheld ECG',
    description: 'Compact portable ECG monitor for on-the-go cardiac screening.',
    categorySlug: 'ecg-machines',
    brand: 'PortaHeart',
    image: '/images/products/ecg-portable.jpg',
    subcategory: 'Portable ECG',
    features: ['Lightweight design', 'Battery powered', 'Bluetooth enabled'],
  },
  {
    id: 'ecg-003',
    name: 'ECG Paper Rolls (10 pack)',
    description: 'High-quality thermal ECG recording paper, compatible with most ECG machines.',
    categorySlug: 'ecg-machines',
    image: '/images/products/ecg-paper.jpg',
    subcategory: 'ECG Accessories',
  },

  // Patient Monitors
  {
    id: 'pm-001',
    name: 'VitalWatch Pro Bedside Monitor',
    description: '15" multi-parameter patient monitor with ECG, SpO2, NIBP, and temperature.',
    categorySlug: 'patient-monitors',
    brand: 'VitalWatch',
    image: '/images/products/monitor-bedside.jpg',
    subcategory: 'Bedside Monitors',
    features: ['15" HD display', '6 parameters', 'Trending & alarms'],
  },
  {
    id: 'pm-002',
    name: 'VitalWatch Transport Monitor',
    description: 'Rugged portable monitor for patient transport with 8-hour battery.',
    categorySlug: 'patient-monitors',
    brand: 'VitalWatch',
    image: '/images/products/monitor-transport.jpg',
    subcategory: 'Transport Monitors',
    features: ['8-hour battery', 'Drop tested', 'Lightweight'],
  },
  {
    id: 'pm-003',
    name: 'FetalCare FM-500',
    description: 'Fetal and maternal monitor with twins capability.',
    categorySlug: 'patient-monitors',
    brand: 'FetalCare',
    image: '/images/products/fetal-monitor.jpg',
    subcategory: 'Fetal Monitors',
    features: ['Twins monitoring', 'Wireless probes', 'Central station ready'],
  },

  // Ultrasound
  {
    id: 'us-001',
    name: 'SonoVue Portable Ultrasound',
    description: 'Compact tablet-style ultrasound with multiple probe options.',
    categorySlug: 'ultrasound',
    brand: 'SonoVue',
    image: '/images/products/ultrasound-portable.jpg',
    subcategory: 'Portable Ultrasound',
    features: ['Tablet design', 'Multiple probes', 'DICOM compatible'],
  },
  {
    id: 'us-002',
    name: 'ImagePro 5000 Cart System',
    description: 'Full-featured diagnostic ultrasound with 21" monitor and advanced imaging.',
    categorySlug: 'ultrasound',
    brand: 'ImagePro',
    image: '/images/products/ultrasound-cart.jpg',
    subcategory: 'Cart-based Systems',
    features: ['21" HD monitor', 'Advanced imaging modes', 'Ergonomic design'],
  },

  // Defibrillators
  {
    id: 'df-001',
    name: 'LifeSave AED Plus',
    description: 'Automated external defibrillator with real-time CPR feedback.',
    categorySlug: 'defibrillators',
    brand: 'LifeSave',
    image: '/images/products/aed.jpg',
    subcategory: 'AED',
    features: ['Voice prompts', 'CPR feedback', '5-year battery'],
  },
  {
    id: 'df-002',
    name: 'ProShock Manual Defibrillator',
    description: 'Hospital-grade manual defibrillator with pacing capability.',
    categorySlug: 'defibrillators',
    brand: 'ProShock',
    image: '/images/products/defib-manual.jpg',
    subcategory: 'Manual Defibrillators',
    features: ['Manual & semi-auto modes', 'External pacing', '12-lead ECG'],
  },

  // Centrifuges
  {
    id: 'cf-001',
    name: 'SpinMaster 1500 Microcentrifuge',
    description: 'High-speed microcentrifuge for molecular biology applications.',
    categorySlug: 'centrifuges',
    brand: 'SpinMaster',
    image: '/images/products/centrifuge-micro.jpg',
    subcategory: 'Microcentrifuges',
    features: ['15,000 RPM', 'Quick-spin function', 'Low noise'],
  },
  {
    id: 'cf-002',
    name: 'LabSpin Clinical Centrifuge',
    description: 'Benchtop centrifuge for clinical sample processing.',
    categorySlug: 'centrifuges',
    brand: 'LabSpin',
    image: '/images/products/centrifuge-clinical.jpg',
    subcategory: 'Clinical Centrifuges',
    features: ['Swing-out rotor', 'Digital display', 'Timer function'],
  },

  // Microscopes
  {
    id: 'ms-001',
    name: 'OptiView Binocular Microscope',
    description: 'Professional compound microscope with LED illumination.',
    categorySlug: 'microscopes',
    brand: 'OptiView',
    image: '/images/products/microscope-compound.jpg',
    subcategory: 'Compound Microscopes',
    features: ['4x, 10x, 40x, 100x objectives', 'LED illumination', 'Mechanical stage'],
  },
  {
    id: 'ms-002',
    name: 'DigiScope USB Microscope',
    description: 'Digital USB microscope with 5MP camera for computer display.',
    categorySlug: 'microscopes',
    brand: 'DigiScope',
    image: '/images/products/microscope-digital.jpg',
    subcategory: 'Digital Microscopes',
    features: ['5MP camera', 'USB connection', 'Measurement software'],
  },

  // Analyzers
  {
    id: 'an-001',
    name: 'HemaCount 5-Part Analyzer',
    description: 'Fully automated 5-part hematology analyzer with 60 tests/hour.',
    categorySlug: 'analyzers',
    brand: 'HemaCount',
    image: '/images/products/analyzer-hematology.jpg',
    subcategory: 'Hematology',
    features: ['5-part differential', '60 tests/hour', 'Auto sampler'],
  },
  {
    id: 'an-002',
    name: 'ChemPro 200 Chemistry Analyzer',
    description: 'Random access clinical chemistry analyzer for routine testing.',
    categorySlug: 'analyzers',
    brand: 'ChemPro',
    image: '/images/products/analyzer-chemistry.jpg',
    subcategory: 'Chemistry',
    features: ['200 tests/hour', 'Random access', 'Open reagent system'],
  },

  // Lab Glassware
  {
    id: 'gl-001',
    name: 'Borosilicate Beaker Set',
    description: 'Set of 6 graduated borosilicate glass beakers (50ml-1000ml).',
    categorySlug: 'lab-glassware',
    image: '/images/products/beakers.jpg',
    subcategory: 'Beakers',
  },
  {
    id: 'gl-002',
    name: 'Erlenmeyer Flask Set',
    description: 'Set of 4 Erlenmeyer flasks with stoppers (100ml-500ml).',
    categorySlug: 'lab-glassware',
    image: '/images/products/flasks.jpg',
    subcategory: 'Flasks',
  },
  {
    id: 'gl-003',
    name: 'Test Tube Rack with Tubes',
    description: 'Polypropylene rack with 24 borosilicate test tubes.',
    categorySlug: 'lab-glassware',
    image: '/images/products/test-tubes.jpg',
    subcategory: 'Test Tubes',
  },

  // Anatomical Models
  {
    id: 'am-001',
    name: 'Life-Size Skeleton Model',
    description: 'Full-size human skeleton model on wheeled stand.',
    categorySlug: 'anatomical-models',
    image: '/images/products/skeleton.jpg',
    subcategory: 'Skeletal Models',
    features: ['Life-size', 'Movable joints', 'Wheeled stand'],
  },
  {
    id: 'am-002',
    name: 'Heart Model (2x Life Size)',
    description: 'Detailed 2x life-size heart model with removable parts.',
    categorySlug: 'anatomical-models',
    image: '/images/products/heart-model.jpg',
    subcategory: 'Organ Models',
    features: ['2x life size', '4 parts', 'Numbered features'],
  },

  // Training Manikins
  {
    id: 'tm-001',
    name: 'CPR Training Manikin Adult',
    description: 'Adult CPR training manikin with feedback lights.',
    categorySlug: 'training-manikins',
    image: '/images/products/cpr-manikin.jpg',
    subcategory: 'CPR Manikins',
    features: ['Clicker feedback', 'Replaceable lungs', 'Carrying case'],
  },
  {
    id: 'tm-002',
    name: 'IV Training Arm',
    description: 'Realistic IV training arm with replaceable veins.',
    categorySlug: 'training-manikins',
    image: '/images/products/iv-arm.jpg',
    subcategory: 'IV Training Arms',
    features: ['Realistic skin', 'Replaceable veins', 'Blood simulation'],
  },

  // First Aid Kits
  {
    id: 'fa-001',
    name: 'Workplace First Aid Kit (50 Person)',
    description: 'Comprehensive workplace first aid kit for up to 50 people.',
    categorySlug: 'first-aid-kits',
    image: '/images/products/first-aid-office.jpg',
    subcategory: 'Office Kits',
    features: ['Metal cabinet', 'Wall mountable', 'Refillable'],
  },
  {
    id: 'fa-002',
    name: 'Industrial First Aid Kit',
    description: 'Heavy-duty first aid kit for industrial environments.',
    categorySlug: 'first-aid-kits',
    image: '/images/products/first-aid-industrial.jpg',
    subcategory: 'Industrial Kits',
    features: ['Impact resistant', 'Eye wash included', 'Burns treatment'],
  },
  {
    id: 'fa-003',
    name: 'Vehicle First Aid Kit',
    description: 'Compact first aid kit designed for vehicles.',
    categorySlug: 'first-aid-kits',
    image: '/images/products/first-aid-vehicle.jpg',
    subcategory: 'Vehicle Kits',
    features: ['Compact design', 'Reflective triangle', 'Essential supplies'],
  },

  // Emergency Supplies
  {
    id: 'es-001',
    name: 'Emergency Splint Kit',
    description: 'Assorted SAM splints for emergency immobilization.',
    categorySlug: 'emergency-supplies',
    image: '/images/products/splints.jpg',
    subcategory: 'Splints',
  },
  {
    id: 'es-002',
    name: 'Burn Care Kit',
    description: 'Complete burn treatment kit with gel dressings.',
    categorySlug: 'emergency-supplies',
    image: '/images/products/burn-care.jpg',
    subcategory: 'Burn Care',
  },

  // Safety Equipment
  {
    id: 'se-001',
    name: 'Nitrile Gloves Box (100)',
    description: 'Powder-free nitrile examination gloves, box of 100.',
    categorySlug: 'safety-equipment',
    image: '/images/products/gloves.jpg',
    subcategory: 'Gloves',
  },
  {
    id: 'se-002',
    name: 'Safety Goggles (Anti-fog)',
    description: 'Chemical splash goggles with anti-fog coating.',
    categorySlug: 'safety-equipment',
    image: '/images/products/goggles.jpg',
    subcategory: 'Eye Protection',
  },
];
