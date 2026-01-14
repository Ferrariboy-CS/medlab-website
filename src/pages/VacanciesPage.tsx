import React from 'react';
import { Hero } from '../components/ui/Hero';
import { Section, SectionTitle } from '../components/ui/Section';
import { Card, CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const VacanciesPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Vacancies"
        description="We are always looking for talented people who want to improve healthcare in Namibia."
        size="sm"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Vacancies' }]}
        centered
      />

      <Section padding="lg">
        <SectionTitle center subtitle="No open roles right now">
          Join Our Talent Network
        </SectionTitle>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="space-y-4">
              <CardTitle>Send us your resume</CardTitle>
              <CardDescription>
                There are no active openings at the moment. Share your CV and we will reach out when a suitable position becomes available.
              </CardDescription>
              <div className="flex flex-wrap gap-3">
                <Button as="link" to="mailto:info@medlabservices.com.na" size="sm">
                  Email Your CV
                </Button>
                <Button as="link" to="/contact" variant="outline" size="sm">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
};
