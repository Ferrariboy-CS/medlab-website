import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '../components/ui/Hero';
import { Section, SectionTitle, AnimatedContainer, AnimatedItem } from '../components/ui/Section';
import { Card, CardContent, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FormField, FormSuccess } from '../components/ui/FormField';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  CubeIcon,
  WrenchScrewdriverIcon,
  DocumentIcon
} from '../components/ui/Icons';
import { setPageMeta } from '../utils/seo';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  products: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  products: '',
};

export const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'enquiry' | 'quote'>('enquiry');
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setPageMeta({
      title: 'Contact MedLab Services | Get a Quote',
      description:
        'Contact MedLab Services for product enquiries, quotes, and support. Our team responds within 24-48 hours.',
    });
  }, []);

  useEffect(() => {
    const productsParam = searchParams.get('products');
    if (productsParam) {
      setActiveTab('quote');
      setFormData((prev) => (prev.products ? prev : { ...prev, products: productsParam }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormState]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (activeTab === 'quote' && !formData.products.trim()) {
      newErrors.products = 'Please specify the products you need';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData(initialFormState);
    }, 3000);
  };

  return (
    <>
      <Hero
        title="Contact Us"
        description="Get in touch with our team for product enquiries, quotations, or technical support."
        size="sm"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        centered
      />

      <Section padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <motion.a 
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="
                  w-14 h-14 rounded-xl flex-shrink-0
                  bg-red-50 dark:bg-red-900/30
                  border border-red-100 dark:border-red-800/60
                  flex items-center justify-center
                  shadow-sm
                  group-hover:bg-red-100 dark:group-hover:bg-red-900/40
                  transition-colors
                ">
                  <MapPinIcon className="w-6 h-6 text-red-600 dark:text-red-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Visit Us</h3>
                  <p className="text-gray-600 dark:text-slate-300 mt-1">
                    43 Marconi Street<br />
                    Southern Industrial, Windhoek, Namibia
                  </p>
                  <p className="text-gray-500 dark:text-slate-400 text-sm mt-1">
                    Postal: P.O. Box 40253, Windhoek
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a 
                href="tel:+264611234567"
                className="flex gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="
                  w-14 h-14 rounded-xl flex-shrink-0
                  bg-red-50 dark:bg-red-900/30
                  border border-red-100 dark:border-red-800/60
                  flex items-center justify-center
                  shadow-sm
                  group-hover:bg-red-100 dark:group-hover:bg-red-900/40
                  transition-colors
                ">
                  <PhoneIcon className="w-6 h-6 text-red-600 dark:text-red-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Call Us</h3>
                  <p className="text-gray-600 dark:text-slate-300 mt-1">
                    +264 61 237076
                  </p>
                  <p className="text-gray-600 dark:text-slate-300">Fax: +264 61 223949</p>
                  <p className="text-gray-500 dark:text-slate-400 text-sm">Mon-Fri: 8am - 5pm</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a 
                href="mailto:info@medlabservices.com.na"
                className="flex gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="
                  w-14 h-14 rounded-xl flex-shrink-0
                  bg-red-50 dark:bg-red-900/30
                  border border-red-100 dark:border-red-800/60
                  flex items-center justify-center
                  shadow-sm
                  group-hover:bg-red-100 dark:group-hover:bg-red-900/40
                  transition-colors
                ">
                  <EnvelopeIcon className="w-6 h-6 text-red-600 dark:text-red-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email Us</h3>
                  <p className="text-gray-600 dark:text-slate-300 mt-1">
                    medlab@iafrica.com.na
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-md border border-red-100/70 dark:border-red-900/40 bg-white dark:bg-slate-900">
                <iframe
                  title="Medlab Services location"
                  src="https://www.google.com/maps?q=43+Marconi+Street+Windhoek+Namibia&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Forms */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2" 
            id="quote"
          >
            <Card variant="elevated">
              <CardContent className="p-0">
                {/* Tabs */}
                <div className="flex border-b border-gray-200 dark:border-slate-700">
                  <button
                    onClick={() => setActiveTab('enquiry')}
                    className={`
                      flex-1 py-4 px-6 text-center font-semibold
                      transition-all duration-200
                      ${activeTab === 'enquiry'
                        ? 'text-red-600 dark:text-red-300 border-b-2 border-red-500 bg-red-50/50 dark:bg-red-950/30'
                        : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800'
                      }
                    `}
                  >
                    General Enquiry
                  </button>
                  <button
                    onClick={() => setActiveTab('quote')}
                    className={`
                      flex-1 py-4 px-6 text-center font-semibold
                      transition-all duration-200
                      ${activeTab === 'quote'
                        ? 'text-red-600 dark:text-red-300 border-b-2 border-red-500 bg-red-50/50 dark:bg-red-950/30'
                        : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800'
                      }
                    `}
                  >
                    Request a Quote
                  </button>
                </div>

                {/* Form Content */}
                <div className="p-6 md:p-8">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <FormSuccess
                        title={activeTab === 'quote' ? 'Quote Request Submitted!' : 'Message Sent!'}
                        message="Thank you for contacting us. We'll get back to you within 24-48 hours."
                      />
                    ) : (
                      <motion.form
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        onSubmit={handleSubmit}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                          <FormField
                            label="Your Name"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                          />
                          <FormField
                            label="Email Address"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                          />
                          <FormField
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            placeholder="+264 XX XXX XXXX"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            error={errors.phone}
                          />
                          <FormField
                            label="Company/Institution"
                            name="company"
                            placeholder="Organization name (optional)"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>

                        {activeTab === 'quote' && (
                          <FormField
                            label="Products Requested"
                            name="products"
                            type="textarea"
                            placeholder="Please list the products you need a quote for, including quantities if known..."
                            required
                            value={formData.products}
                            onChange={handleChange}
                            error={errors.products}
                          />
                        )}

                        <FormField
                          label={activeTab === 'quote' ? 'Additional Information' : 'Your Message'}
                          name="message"
                          type="textarea"
                          placeholder={
                            activeTab === 'quote'
                              ? 'Any additional details, specifications, or questions...'
                              : 'How can we help you?'
                          }
                          required={activeTab !== 'quote'}
                          value={formData.message}
                          onChange={handleChange}
                          error={errors.message}
                        />

                        <FormField
                          label="Attach Files (optional)"
                          name="files"
                          type="file"
                        />

                        <div className="mt-8">
                          <Button type="submit" size="lg">
                            {activeTab === 'quote' ? 'Submit Quote Request' : 'Send Message'}
                          </Button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Quick Links */}
      <Section background="gray" padding="lg">
        <SectionTitle center>Looking for Something Specific?</SectionTitle>
        
        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <AnimatedItem>
            <Card hover className="h-full">
              <CardContent className="text-center py-10">
                <div className="
                  w-16 h-16 mx-auto mb-5 rounded-2xl
                  bg-gradient-to-br from-red-50 to-rose-100
                  dark:from-red-900/40 dark:to-rose-900/30
                  flex items-center justify-center border border-red-100/70 dark:border-red-800/50
                ">
                  <CubeIcon className="w-8 h-8 text-red-600 dark:text-red-300" />
                </div>
                <CardTitle>Browse Products</CardTitle>
                <p className="text-gray-600 dark:text-slate-300 mt-2 mb-6">
                  Explore our full range of medical and laboratory equipment.
                </p>
                <Button as="link" to="/products" variant="outline" size="sm">
                  View Products
                </Button>
              </CardContent>
            </Card>
          </AnimatedItem>
          
          <AnimatedItem>
            <Card hover className="h-full">
              <CardContent className="text-center py-10">
                <div className="
                  w-16 h-16 mx-auto mb-5 rounded-2xl
                  bg-gradient-to-br from-red-50 to-rose-100
                  dark:from-red-900/40 dark:to-rose-900/30
                  flex items-center justify-center border border-red-100/70 dark:border-red-800/50
                ">
                  <WrenchScrewdriverIcon className="w-8 h-8 text-red-600 dark:text-red-300" />
                </div>
                <CardTitle>Technical Support</CardTitle>
                <p className="text-gray-600 dark:text-slate-300 mt-2 mb-6">
                  Need help with equipment? Submit a service request.
                </p>
                <Button as="link" to="/contact" variant="outline" size="sm">
                  Get Support
                </Button>
              </CardContent>
            </Card>
          </AnimatedItem>
          
          <AnimatedItem>
            <Card hover className="h-full">
              <CardContent className="text-center py-10">
                <div className="
                  w-16 h-16 mx-auto mb-5 rounded-2xl
                  bg-gradient-to-br from-red-50 to-rose-100
                  dark:from-red-900/40 dark:to-rose-900/30
                  flex items-center justify-center border border-red-100/70 dark:border-red-800/50
                ">
                  <DocumentIcon className="w-8 h-8 text-red-600 dark:text-red-300" />
                </div>
                <CardTitle>Downloads</CardTitle>
                <p className="text-gray-600 dark:text-slate-300 mt-2 mb-6">
                  Access our catalogues and product brochures.
                </p>
                <Button as="link" to="/#resources" variant="outline" size="sm">
                  View Downloads
                </Button>
              </CardContent>
            </Card>
          </AnimatedItem>
        </AnimatedContainer>
      </Section>
    </>
  );
};
