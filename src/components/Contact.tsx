import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';
import SectionWrapper from './SectionWrapper';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <SectionWrapper id="contact" effect="zoom-in">
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
              <p className="text-gray-400">{t('subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">{t('info.title')}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2">{t('info.address.title')}</h4>
                    <p className="text-gray-400">{t('info.address.content')}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">{t('info.email.title')}</h4>
                    <a href="mailto:contact@leoexpress.com" className="text-blue-500 hover:text-blue-400">
                      contact@leoexpress.com
                    </a>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">{t('info.phone.title')}</h4>
                    <a href="tel:01212085508" className="text-blue-500 hover:text-blue-400 text-2xl">
                      {t('info.phone.content')}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
