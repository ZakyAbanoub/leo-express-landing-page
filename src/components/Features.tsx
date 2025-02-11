import { useTranslations } from 'next-intl';
import {
  ShieldCheckIcon,
  TruckIcon,
  MapIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import SectionWrapper from './SectionWrapper';

export default function Features() {
  const t = useTranslations('features');

  const features = [
    {
      icon: ShieldCheckIcon,
      title: t('secure.title'),
      description: t('secure.description'),
    },
    {
      icon: TruckIcon,
      title: t('fast.title'),
      description: t('fast.description'),
    },
    {
      icon: MapIcon,
      title: t('tracking.title'),
      description: t('tracking.description'),
    },
    {
      icon: PhoneIcon,
      title: t('support.title'),
      description: t('support.description'),
    },
  ];

  return (
    <SectionWrapper id="features" effect="fade-right" hasItems>
      <div className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-700/30 transition duration-300"
              >
                <div className="inline-flex p-3 rounded-full bg-blue-500/10 text-blue-500 mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
