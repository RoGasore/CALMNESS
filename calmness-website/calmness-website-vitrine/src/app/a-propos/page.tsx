import { getPageAPropos } from '@/lib/strapi';

export const metadata = {
  title: 'À Propos - Calmness Trading',
  description: 'Découvrez l\'histoire, la mission et les valeurs de Calmness Trading. Notre expertise au service de vos investissements.',
};

export default async function AProposPage() {
  const pageData = await getPageAPropos();

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary-800 mb-4">
            À Propos de Nous
          </h1>
          <p className="text-lg text-secondary-600">
            Contenu en cours de chargement...
          </p>
        </div>
      </div>
    );
  }

  const { titre, histoire, mission, valeurs } = pageData.attributes;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            {titre}
          </h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Histoire */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
                  Notre Histoire
                </h2>
              </div>
              <div 
                className="prose prose-lg max-w-none text-secondary-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: histoire }}
              />
            </div>

            {/* Mission */}
            <div className="bg-primary-50 rounded-2xl p-8 shadow-lg border border-primary-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
                  Notre Mission
                </h2>
              </div>
              <div 
                className="prose prose-lg max-w-none text-secondary-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: mission }}
              />
            </div>

            {/* Valeurs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
                  Nos Valeurs
                </h2>
              </div>
              <div 
                className="prose prose-lg max-w-none text-secondary-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: valeurs }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à commencer votre parcours avec nous ?
          </h2>
          <p className="text-xl text-secondary-300 mb-8">
            Découvrez comment notre expertise peut transformer vos investissements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-secondary-900 bg-white hover:bg-secondary-100 transition-colors duration-200"
            >
              Contactez-nous
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-secondary-900 transition-colors duration-200"
            >
              Voir nos services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}