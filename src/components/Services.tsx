import { useTranslations } from 'next-intl';
import { TruckIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import SectionWrapper from './SectionWrapper';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      icon: TruckIcon,
      title: t('localDelivery.title'),
      description: t('localDelivery.description'),
    },
    {
      icon: ClockIcon,
      title: t('sameDay.title'),
      description: t('sameDay.description'),
    },
    {
      icon: GlobeAltIcon,
      title: t('international.title'),
      description: t('international.description'),
    },
  ];

  return (
    <SectionWrapper id="services" effect="fade-up" hasItems>
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:-translate-y-2 transition duration-300"
              >
                <service.icon className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
