export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'catalogue' | 'brochure' | 'guide' | 'datasheet';
  category?: string;
  fileUrl: string;
  fileSize?: string;
}

export interface CompanyStat {
  value: string;
  label: string;
  description: string;
}

export interface Partner {
  name: string;
  logo?: string;
  category: 'medical' | 'laboratory' | 'educational' | 'first-aid';
}

export const resources: Resource[] = [
  {
    id: 'medical-catalogue-2024',
    title: 'Medical Equipment Catalogue 2024',
    description: 'Complete range of medical diagnostic and therapeutic equipment.',
    type: 'catalogue',
    category: 'medical',
    fileUrl: '/downloads/medical-catalogue-2024.pdf',
    fileSize: '12.5 MB',
  },
  {
    id: 'laboratory-catalogue-2024',
    title: 'Laboratory Equipment Catalogue',
    description: 'Analyzers, instruments, and consumables for clinical labs.',
    type: 'catalogue',
    category: 'laboratory',
    fileUrl: '/downloads/laboratory-catalogue-2024.pdf',
    fileSize: '8.2 MB',
  },
  {
    id: 'educational-catalogue',
    title: 'Educational Equipment Guide',
    description: 'Training models and science education equipment.',
    type: 'catalogue',
    category: 'educational',
    fileUrl: '/downloads/educational-catalogue.pdf',
    fileSize: '5.8 MB',
  },
  {
    id: 'first-aid-guide',
    title: 'First Aid & Safety Solutions',
    description: 'Complete guide to workplace safety and first aid.',
    type: 'guide',
    category: 'first-aid',
    fileUrl: '/downloads/first-aid-guide.pdf',
    fileSize: '3.2 MB',
  },
  {
    id: 'service-brochure',
    title: 'Service & Support Brochure',
    description: 'Our technical support and maintenance services.',
    type: 'brochure',
    fileUrl: '/downloads/service-brochure.pdf',
    fileSize: '2.1 MB',
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    description: 'Learn about Medlab Services and our capabilities.',
    type: 'brochure',
    fileUrl: '/downloads/company-profile.pdf',
    fileSize: '4.5 MB',
  },
];

export const companyStats: CompanyStat[] = [
  {
    value: '1986',
    label: 'Established',
    description: 'Serving Namibia',
  },
  {
    value: '35+',
    label: 'Years Experience',
    description: 'Industry expertise',
  },
  {
    value: '500+',
    label: 'Products',
    description: 'In our catalogue',
  },
  {
    value: '100+',
    label: 'Clients',
    description: 'Nationwide',
  },
];

export const partners: Partner[] = [
  { name: 'Mindray', category: 'medical' },
  { name: 'Edan', category: 'medical' },
  { name: 'Biobase', category: 'laboratory' },
  { name: 'Drawell', category: 'laboratory' },
  { name: '3B Scientific', category: 'educational' },
  { name: 'Laerdal', category: 'educational' },
  { name: 'Hartmann', category: 'first-aid' },
  { name: 'First Aider', category: 'first-aid' },
];

// Service types for the service page
export const serviceTypes = [
  {
    id: 'technical',
    title: 'Technical Support',
    description: 'Expert technical assistance for all equipment we supply.',
    iconType: 'wrench' as const,
    details: [
      'Phone and email support',
      'Remote diagnostics',
      'On-site troubleshooting',
      'Spare parts supply',
      'Equipment calibration',
    ],
  },
  {
    id: 'installation',
    title: 'Installation & Training',
    description: 'Professional installation and comprehensive user training.',
    iconType: 'cog' as const,
    details: [
      'Site assessment and planning',
      'Professional installation',
      'User training programs',
      'Operator certification',
      'Documentation and manuals',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Repairs',
    description: 'Preventive maintenance and repair services to minimize downtime.',
    iconType: 'tool' as const,
    details: [
      'Scheduled maintenance contracts',
      'Preventive maintenance',
      'Emergency repairs',
      'Parts replacement',
      'Performance optimization',
    ],
  },
];

// FAQ data
export const faqs = [
  {
    question: 'What areas do you cover for service?',
    answer: 'We provide nationwide service coverage across Namibia, with our main service center in Windhoek. For remote locations, we offer scheduled service visits and can arrange emergency call-outs.',
  },
  {
    question: 'How quickly can you respond to service requests?',
    answer: 'For critical equipment, we aim to respond within 24-48 hours. Standard service requests are typically addressed within 3-5 business days. We also offer priority service contracts for faster response times.',
  },
  {
    question: 'Do you provide training for equipment operation?',
    answer: 'Yes, comprehensive training is included with most equipment purchases. We offer on-site training, online resources, and can arrange refresher courses as needed.',
  },
  {
    question: 'What warranty coverage do you provide?',
    answer: 'Warranty terms vary by product and manufacturer. Most equipment comes with a standard 12-24 month warranty. Extended warranty options are available for many products.',
  },
  {
    question: 'Can you service equipment not purchased from Medlab?',
    answer: 'In many cases, yes. If we are authorized dealers for the brand or have trained technicians, we can provide service for equipment regardless of where it was purchased.',
  },
];

// Company values
export const companyValues = [
  {
    title: 'Quality',
    description: 'We only supply products from reputable manufacturers that meet international standards.',
    iconType: 'star' as const,
  },
  {
    title: 'Reliability',
    description: 'Consistent service and support you can depend on, year after year.',
    iconType: 'shield' as const,
  },
  {
    title: 'Expertise',
    description: 'Our team brings decades of industry knowledge to every interaction.',
    iconType: 'academic' as const,
  },
  {
    title: 'Service',
    description: 'We go beyond just selling products – we provide complete solutions.',
    iconType: 'heart' as const,
  },
];

// Department data
export const departments = [
  {
    name: 'Medical Equipment',
    description: 'Diagnostic and therapeutic equipment for healthcare facilities.',
    iconType: 'medical' as const,
  },
  {
    name: 'Laboratory Equipment',
    description: 'Analyzers, instruments, and consumables for clinical and research labs.',
    iconType: 'laboratory' as const,
  },
  {
    name: 'Educational Equipment',
    description: 'Training models and science education for institutions.',
    iconType: 'education' as const,
  },
  {
    name: 'First Aid & Safety',
    description: 'First aid supplies and safety equipment for all sectors.',
    iconType: 'first-aid' as const,
  },
  {
    name: 'Technical Services',
    description: 'Installation, maintenance, and repair services.',
    iconType: 'wrench' as const,
  },
  {
    name: 'Accounts & Admin',
    description: 'Customer service, orders, and account management.',
    iconType: 'clipboard' as const,
  },
];

// Timeline data
export const companyTimeline = [
  { year: '1986', event: 'Medlab Services founded in Windhoek, Namibia' },
  { year: '1990s', event: 'Expanded into laboratory equipment and consumables' },
  { year: '2000s', event: 'Became authorized distributor for major international brands' },
  { year: '2010s', event: 'Added educational equipment and training services' },
  { year: 'Today', event: 'Serving healthcare, laboratories, education, and industry nationwide' },
];
