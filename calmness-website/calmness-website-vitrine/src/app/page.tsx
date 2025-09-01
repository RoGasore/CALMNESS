import Image from 'next/image';
import { getPageAccueil, getStrapiMediaUrl } from '@/lib/strapi';

export default async function HomePage() {
  const pageData = await getPageAccueil();

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary-800 mb-4">
            Bienvenue chez Calmness Trading
          </h1>
          <p className="text-lg text-secondary-600">
            Contenu en cours de chargement...
          </p>
        </div>
      </div>
    );
  }

  const { titre, slogan, description, image } = pageData.attributes;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu textuel */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                  {titre}
                </h1>
                <p className="text-xl md:text-2xl text-primary-600 font-medium">
                  {slogan}
                </p>
              </div>
              
              <div 
                className="text-lg text-secondary-700 leading-relaxed prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
                >
                  Nous contacter
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200"
                >
                  Nos services
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              {image?.data && (
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={getStrapiMediaUrl(image.data.attributes.url)}
                    alt={image.data.attributes.alternativeText || titre}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section de présentation rapide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8">
              Pourquoi choisir Calmness Trading ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Expertise</h3>
                <p className="text-secondary-600">Des années d'expérience sur les marchés financiers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Performance</h3>
                <p className="text-secondary-600">Stratégies éprouvées pour maximiser vos gains</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Sécurité</h3>
                <p className="text-secondary-600">Gestion des risques et protection de vos investissements</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}