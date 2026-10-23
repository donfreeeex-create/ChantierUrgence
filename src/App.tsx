import { useState, useEffect, type MouseEvent } from 'react';
import { Phone, MapPin, Truck, CheckCircle, AlertTriangle, Wrench, HelpCircle, ChevronRight } from 'lucide-react';
import bgImage from './assets/images/construction_machinery_bg_1785781418743.jpg';
import { CITIES, MACHINES, getRouteMeta, normalizePathname } from './seoData';

interface AppProps {
  initialPath?: string;
}

export default function App({ initialPath }: AppProps) {
  const phoneNumber = '+212718187543';
  const [showBg, setShowBg] = useState(true);
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (initialPath) return normalizePathname(initialPath);
    if (typeof window !== 'undefined') return normalizePathname(window.location.pathname);
    return '/';
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBg(false);
    }, 10 * 60 * 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const routeMeta = getRouteMeta(currentPath);
  const activeMachine = routeMeta.machine;
  const activeCity = routeMeta.city;

  // Synchronize <head> Meta Title, Meta Description, Canonical, OpenGraph, and JSON-LD Schema dynamically on route change
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = routeMeta.title;

    const setMetaTag = (selector: string, attr: 'content' | 'href', value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMetaTag('meta[name="title"]', 'content', routeMeta.title);
    setMetaTag('meta[name="description"]', 'content', routeMeta.description);
    setMetaTag('link[rel="canonical"]', 'href', routeMeta.canonicalUrl);
    setMetaTag('meta[property="og:url"]', 'content', routeMeta.canonicalUrl);
    setMetaTag('meta[property="og:title"]', 'content', routeMeta.title);
    setMetaTag('meta[property="og:description"]', 'content', routeMeta.description);
    setMetaTag('meta[name="twitter:title"]', 'content', routeMeta.title);
    setMetaTag('meta[name="twitter:description"]', 'content', routeMeta.description);

    const schemaScript = document.getElementById('json-ld-schema') || document.querySelector('script[type="application/ld+json"]');
    if (schemaScript) {
      schemaScript.textContent = JSON.stringify(routeMeta.jsonLd, null, 2);
    }
  }, [routeMeta]);

  const navigate = (to: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    const target = normalizePathname(to);
    if (target !== currentPath) {
      window.history.pushState({}, '', target);
      setCurrentPath(target);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-yellow-300">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b-4 border-yellow-500 px-3 sm:px-6 py-2.5 sm:py-3 flex justify-between items-center transition-all">
        <div className="flex items-center gap-6">
          <a
            href="/"
            onClick={navigate('/')}
            className="flex items-center gap-1.5 sm:gap-2 text-gray-900 font-extrabold text-base sm:text-lg tracking-tight shrink-0"
          >
            <AlertTriangle className="text-yellow-500 shrink-0" size={22} strokeWidth={2.5} />
            <span>ChantierUrgence</span>
          </a>
          <nav aria-label="Services principaux" className="hidden lg:flex items-center gap-5 text-sm font-bold text-gray-700">
            {MACHINES.map((m) => {
              const isSelected = activeMachine?.slug === m.slug;
              return (
                <a
                  key={m.slug}
                  href={`/${m.slug}`}
                  onClick={navigate(`/${m.slug}`)}
                  className={`transition-colors ${
                    isSelected ? 'text-yellow-600 underline decoration-2 underline-offset-4' : 'hover:text-yellow-600'
                  }`}
                >
                  {m.shortName}
                </a>
              );
            })}
          </nav>
        </div>
        <a
          href={`tel:${phoneNumber}`}
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm md:text-base flex items-center gap-1.5 sm:gap-2 shadow-sm active:scale-95 transition-all whitespace-nowrap shrink-0"
        >
          <Phone size={15} fill="currentColor" className="shrink-0" />
          <span className="tabular-nums tracking-tight font-black">+212 718-187543</span>
        </a>
      </header>

      {/* Breadcrumb & Quick Sub-route Bar when viewing a dedicated Machine or City page */}
      {activeMachine && (
        <div className="bg-gray-900 text-gray-300 text-xs sm:text-sm py-2.5 px-4 border-b border-gray-800">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <nav aria-label="Fil d'Ariane" className="flex items-center flex-wrap gap-1.5 font-medium">
              <a href="/" onClick={navigate('/')} className="text-gray-400 hover:text-yellow-400 transition-colors">
                Accueil
              </a>
              <ChevronRight size={14} className="text-gray-600" />
              <a
                href={`/${activeMachine.slug}`}
                onClick={navigate(`/${activeMachine.slug}`)}
                className={activeCity ? 'text-gray-300 hover:text-yellow-400 transition-colors' : 'text-yellow-400 font-bold'}
              >
                {activeMachine.name}
              </a>
              {activeCity && (
                <>
                  <ChevronRight size={14} className="text-gray-600" />
                  <span className="text-yellow-400 font-bold">{activeCity.name}</span>
                </>
              )}
            </nav>
            <span className="text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-0.5 rounded font-bold" dir="rtl">
              {activeMachine.arabicTag}
            </span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <section className="relative px-4 py-12 md:py-24 flex flex-col items-center text-center w-full overflow-hidden">
          {showBg && (
            <>
              <img
                src={bgImage}
                alt={
                  activeMachine && activeCity
                    ? `${activeMachine.name} à ${activeCity.name} — Location d'engins de chantier BTP en urgence`
                    : activeMachine
                    ? `${activeMachine.name} — Had Soualem, Berrechid, Settat, El Jadida et Jorf Lasfar`
                    : "Location d'engins de chantier BTP : Tractopelle JCB, Poclain, Manitou et Foreuse de puits à Had Soualem, Berrechid, Settat et El Jadida"
                }
                className="absolute inset-0 z-0 w-full h-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-0 z-0 bg-white/85 backdrop-blur-[2px]"></div>
            </>
          )}

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold mb-6">
              {routeMeta.badgeText}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight uppercase tracking-tight">
              {activeMachine ? (
                routeMeta.h1Main
              ) : (
                <>
                  Machine en panne dans <br className="hidden md:block" /> votre chantier ?
                </>
              )}
              <span className="block mt-6 text-lg text-gray-800 font-bold normal-case tracking-normal max-w-xl mx-auto">
                {routeMeta.h1Sub}
              </span>
            </h1>

            <a
              href={`tel:${phoneNumber}`}
              className="mt-10 w-full sm:w-auto min-w-[300px] animate-pulse bg-yellow-500 hover:bg-yellow-400 text-black font-black py-5 px-8 rounded-xl flex items-center justify-center gap-3 text-xl shadow-[0_8px_30px_rgb(234,179,8,0.4)] active:translate-y-1 transition-all"
            >
              <Phone size={28} fill="currentColor" />
              {activeMachine
                ? `${activeMachine.ctaLabel.toUpperCase()}${activeCity ? ` À ${activeCity.name.toUpperCase()}` : ''}`
                : 'DEMANDER UNE MACHINE MAINTENANT'}
            </a>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-green-800 font-bold bg-green-100/90 backdrop-blur-sm px-4 py-2 rounded-full border border-green-300">
              <CheckCircle size={18} className="text-green-700" />
              Dispatching immédiat {activeCity ? `à ${activeCity.name}` : ''} - Zéro frais d'avance
            </div>

            {/* Quick Machinery Switcher Pills on Mobile & Desktop */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {MACHINES.map((m) => {
                const targetUrl = activeCity ? `/${m.slug}/${activeCity.slug}` : `/${m.slug}`;
                const isCurrent = activeMachine?.slug === m.slug;
                return (
                  <a
                    key={m.slug}
                    href={targetUrl}
                    onClick={navigate(targetUrl)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold border transition-all ${
                      isCurrent
                        ? 'bg-gray-900 text-yellow-400 border-gray-900 shadow-sm'
                        : 'bg-white/90 text-gray-800 border-gray-300 hover:border-yellow-500 hover:bg-yellow-50'
                    }`}
                  >
                    {m.name} {activeCity ? `(${activeCity.name})` : ''}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dedicated Machine + City Deep SEO Section */}
        {activeMachine && (
          <section className="bg-amber-50/70 border-t border-amber-200 py-14 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-amber-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider">
                    {activeCity ? `Service Local — ${activeCity.name}` : 'Service Spécialisé BTP'}
                  </span>
                  <span className="text-sm font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded" dir="rtl">
                    {activeMachine.arabicTag}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  {activeCity
                    ? `${activeMachine.name} à ${activeCity.name} — Intervention Rapide en 10 Min`
                    : `${activeMachine.h2Title} au Maroc`}
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                  {activeMachine.detailedParagraph}
                </p>

                {activeCity ? (
                  <p className="text-gray-700 leading-relaxed mb-6">
                    À <strong>{activeCity.name}</strong> ({activeCity.region}), nos équipes couvrent{' '}
                    {activeCity.industrialNote}, ainsi que les axes menant vers{' '}
                    <strong>{activeCity.nearbyAreas.join(', ')}</strong>. Que votre chantier soit à l'arrêt suite à une
                    panne imprévue ou que vous démarriez une nouvelle tranche de travaux, un simple appel au{' '}
                    <a href={`tel:${phoneNumber}`} className="font-bold text-gray-900 underline">
                      +212 718-187543
                    </a>{' '}
                    suffit pour déclencher le départ de l'engin.
                  </p>
                ) : (
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Notre réseau couvre l'ensemble du corridor stratégique{' '}
                    <strong>
                      Had Soualem, Berrechid, Settat, El Jadida, Jorf Lasfar, Bir Jdid, Azemmour, Chtouka et Sidi Rahal
                    </strong>
                    . Sélectionnez votre ville ci-dessous pour accéder aux disponibilités locales immédiates.
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <h3 className="font-extrabold text-gray-900 mb-3 flex items-center gap-2">
                      <Wrench size={18} className="text-yellow-600" />
                      Caractéristiques &amp; Équipements
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {activeMachine.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <h3 className="font-extrabold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-600" />
                      Travaux &amp; Interventions{activeCity ? ` à ${activeCity.name}` : ''}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {activeMachine.useCases.map((uc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Geographic City Selector Links for this Machine */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-base font-extrabold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin size={18} className="text-yellow-600" />
                    Choisissez votre zone d'intervention pour {activeMachine.name} :
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {CITIES.map((c) => {
                      const cityUrl = `/${activeMachine.slug}/${c.slug}`;
                      const isCityActive = activeCity?.slug === c.slug;
                      return (
                        <a
                          key={c.slug}
                          href={cityUrl}
                          onClick={navigate(cityUrl)}
                          className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold border transition-all ${
                            isCityActive
                              ? 'bg-yellow-500 text-black border-yellow-600 shadow-sm'
                              : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-yellow-100 hover:border-yellow-400'
                          }`}
                        >
                          {activeMachine.shortName} à {c.name}
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* FAQ specific to the machine & city */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-base font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                    <HelpCircle size={18} className="text-yellow-600" />
                    Questions fréquentes — {activeMachine.name} {activeCity ? `à ${activeCity.name}` : ''}
                  </h3>
                  <div className="space-y-4">
                    {activeMachine.faq.map((item, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                          {item.question} {activeCity ? `(${activeCity.name})` : ''}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.answer} {activeCity ? `Intervention garantie sur ${activeCity.name} et environs.` : ''}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-white py-16 px-4 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-center mb-10 text-gray-900 uppercase">3 Étapes Simples</h2>
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Phone size={32} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">1. Appelez notre dispatching</h3>
                <p className="text-gray-600 text-sm">Contact direct, pas de formulaires interminables.</p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <MapPin size={32} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">2. Localisation rapide</h3>
                <p className="text-gray-600 text-sm">
                  Nous trouvons la machine la plus proche de {activeCity ? activeCity.name : 'vous'}.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Truck size={32} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">3. Arrivée sur chantier</h3>
                <p className="text-gray-600 text-sm">Reprise immédiate de vos travaux sans délai.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Coverage Section */}
        <section id="zones" className="bg-gray-900 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start max-w-lg">
              <span className="text-yellow-500 font-bold text-sm tracking-widest uppercase mb-2">Zones couvertes</span>
              <p className="text-lg font-medium text-gray-200 leading-relaxed">
                Had Soualem • Bir Jdid • Azemmour • Settat • Berrechid • Chtouka • El Jadida • et autres
              </p>
            </div>
            <div className="w-full md:w-px h-px md:h-16 bg-gray-700"></div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-yellow-500 font-bold text-sm tracking-widest uppercase mb-2">Temps de réponse moyen</span>
              <p className="text-3xl font-black text-white">10 minutes</p>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto w-full divide-y divide-gray-200">
          {/* Section : Tractopelle & JCB */}
          <section id="tractopelle" className="py-12 px-4">
            <h2 className="text-2xl font-bold mb-3">
              <a
                href="/location-tractopelle"
                onClick={navigate('/location-tractopelle')}
                className="hover:text-yellow-600 transition-colors"
              >
                Location Tractopelle &amp; JCB — Terrassement et Dépannage
              </a>
            </h2>
            <p className="leading-relaxed text-gray-600 mb-4">
              Location de tractopelles JCB (3CX, 4CX) et Caterpillar avec chauffeur expérimenté pour vos travaux de terrassement, ouverture de fondations (حفير الساس), fouilles en tranchées, assainissement, nivellement de terrain et chargement de camions. Équipés de godets de terrassement, godets rétro et brise-roche hydraulique (BRH), nos tractopelles interviennent en urgence sur vos chantiers à Had Soualem, Berrechid, Settat, Bir Jdid, Azemmour, El Jadida et Jorf Lasfar.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {CITIES.map((c) => (
                <a
                  key={c.slug}
                  href={`/location-tractopelle/${c.slug}`}
                  onClick={navigate(`/location-tractopelle/${c.slug}`)}
                  className="text-xs bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-black font-semibold px-2.5 py-1 rounded border border-gray-200 transition-colors"
                >
                  Tractopelle {c.name}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-colors shadow-sm"
              >
                <Phone size={20} fill="currentColor" />
                Demander un Tractopelle JCB
              </a>
              <a
                href="/location-tractopelle"
                onClick={navigate('/location-tractopelle')}
                className="inline-flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-yellow-600 py-2 px-3"
              >
                Voir les détails Tractopelle <ChevronRight size={16} />
              </a>
            </div>
          </section>

          {/* Section : Manitou / Chariot Télescopique */}
          <section id="manitou" className="py-12 px-4">
            <h2 className="text-2xl font-bold mb-3">
              <a
                href="/location-manitou"
                onClick={navigate('/location-manitou')}
                className="hover:text-yellow-600 transition-colors"
              >
                Location Manitou &amp; Clark — Chariot Télescopique et Élévateur
              </a>
            </h2>
            <p className="leading-relaxed text-gray-600 mb-4">
              Chariots télescopiques Manitou disponibles de 12m à 21m (MT 1440, MT 1840, rotatifs ou fixes) et chariots élévateurs Clark industriels, avec ou sans chauffeur. Idéal pour le levage de charpentes métalliques, la manutention de palettes, le coffrage en hauteur et la logistique industrielle en location journalière ou longue durée à Had Soualem, Berrechid, Settat, El Jadida et Jorf Lasfar.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {CITIES.map((c) => (
                <a
                  key={c.slug}
                  href={`/location-manitou/${c.slug}`}
                  onClick={navigate(`/location-manitou/${c.slug}`)}
                  className="text-xs bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-black font-semibold px-2.5 py-1 rounded border border-gray-200 transition-colors"
                >
                  Manitou {c.name}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-colors shadow-sm"
              >
                <Phone size={20} fill="currentColor" />
                Réserver un Manitou
              </a>
              <a
                href="/location-manitou"
                onClick={navigate('/location-manitou')}
                className="inline-flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-yellow-600 py-2 px-3"
              >
                Voir les détails Manitou <ChevronRight size={16} />
              </a>
            </div>
          </section>

          {/* Section : Poclain / Caterpillar / Pelles */}
          <section id="poclain" className="py-12 px-4">
            <h2 className="text-2xl font-bold mb-3">
              <a
                href="/location-poclain"
                onClick={navigate('/location-poclain')}
                className="hover:text-yellow-600 transition-colors"
              >
                Location Poclain, Caterpillar et Pelles Hydrauliques
              </a>
            </h2>
            <p className="leading-relaxed text-gray-600 mb-4">
              Location de pelles mécaniques hydrauliques sur chenilles ou sur pneus (Poclain, Caterpillar, JCB, de 14 à 30 tonnes) équipées de godet de terrassement, godet de curage ou marteau brise-roche (BRH). Solution idéale pour le gros œuvre, l'excavation profonde, la démolition, le déroctage et l'extraction (كراء بوكلان) avec intervention rapide en cas de panne d'engin à Had Soualem, Berrechid, Settat, Bir Jdid, El Jadida et Jorf Lasfar.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {CITIES.map((c) => (
                <a
                  key={c.slug}
                  href={`/location-poclain/${c.slug}`}
                  onClick={navigate(`/location-poclain/${c.slug}`)}
                  className="text-xs bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-black font-semibold px-2.5 py-1 rounded border border-gray-200 transition-colors"
                >
                  Poclain {c.name}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-colors shadow-sm"
              >
                <Phone size={20} fill="currentColor" />
                Demander une Pelle
              </a>
              <a
                href="/location-poclain"
                onClick={navigate('/location-poclain')}
                className="inline-flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-yellow-600 py-2 px-3"
              >
                Voir les détails Poclain <ChevronRight size={16} />
              </a>
            </div>
          </section>

          {/* Section : Foreuse — les 3 sous-services distincts */}
          <section id="forage" className="py-12 px-4">
            <h2 className="text-2xl font-bold mb-3">
              <a
                href="/location-foreuse-de-puits"
                onClick={navigate('/location-foreuse-de-puits')}
                className="hover:text-yellow-600 transition-colors"
              >
                Location Foreuse de Puits — Forage d'Eau, Horizontal, Poteaux
              </a>
            </h2>
            <p className="leading-relaxed text-gray-600 mb-4">
              Location de foreuse de puits d'eau (حفير البير) par forage rotatif et marteau fond de trou pour particuliers, exploitations agricoles et industriels, ainsi que foreuse horizontale dirigée pour le passage de câbles et canalisations sous chaussée, et foreuse à tarière pour trous de poteaux (clôtures, vergers, lignes électriques). Devis rapide et intervention sur Had Soualem, Bir Jdid, Chtouka, Azemmour, El Jadida, Berrechid et Settat.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {CITIES.map((c) => (
                <a
                  key={c.slug}
                  href={`/location-foreuse-de-puits/${c.slug}`}
                  onClick={navigate(`/location-foreuse-de-puits/${c.slug}`)}
                  className="text-xs bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-black font-semibold px-2.5 py-1 rounded border border-gray-200 transition-colors"
                >
                  Foreuse {c.name}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-colors shadow-sm"
              >
                <Phone size={20} fill="currentColor" />
                Commander une Foreuse
              </a>
              <a
                href="/location-foreuse-de-puits"
                onClick={navigate('/location-foreuse-de-puits')}
                className="inline-flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-yellow-600 py-2 px-3"
              >
                Voir les détails Foreuse <ChevronRight size={16} />
              </a>
            </div>
          </section>

          {/* Section : Qui sommes-nous ? - ChantierUrgence */}
          <section id="apropos" className="py-12 px-4 text-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Qui sommes-nous ? - ChantierUrgence</h2>
            <p className="leading-relaxed mb-6">
              ChantierUrgence est la plateforme de référence au Maroc pour la mise en relation rapide entre les chantiers en panne et les propriétaires d'engins BTP disponibles. Actifs sur l'axe stratégique de Had Soualem, Jorf Lasfar, Bir Jdid, Azemmour, El Jadida, Chtouka, Settat, Berrechid et Sidi Rahal, nous vous connectons avec la machine .
            </p>

            <h3 className="text-xl font-bold mb-3 text-gray-900">Nos Services &amp; Engins disponibles :</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <strong>
                  <a href="/location-tractopelle" onClick={navigate('/location-tractopelle')} className="hover:underline">
                    Location Tractopelle &amp; JCB
                  </a>{' '}
                  :
                </strong>{' '}
                Pour le dépannage rapide, le terrassement et vos travaux de base (حفير الساس).
              </li>
              <li>
                <strong>
                  <a href="/location-poclain" onClick={navigate('/location-poclain')} className="hover:underline">
                    Location Poclain &amp; Caterpillar
                  </a>{' '}
                  :
                </strong>{' '}
                Pelle mécanique sur chenille pour les travaux lourds, l'extraction et le gros œuvre (كراء بوكلان).
              </li>
              <li>
                <strong>
                  <a href="/location-manitou" onClick={navigate('/location-manitou')} className="hover:underline">
                    Location Manitou &amp; Clark
                  </a>{' '}
                  :
                </strong>{' '}
                Chariot télescopique (de 12m à 21m, avec ou sans chauffeur) et chariot élévateur pour le levage et la manutention industrielle.
              </li>
              <li>
                <strong>
                  <a
                    href="/location-foreuse-de-puits"
                    onClick={navigate('/location-foreuse-de-puits')}
                    className="hover:underline"
                  >
                    Location de Foreuse (Forage d'eau)
                  </a>{' '}
                  :
                </strong>{' '}
                Sondage de puits (حفير البير) pour les particuliers et agriculteurs, foreuse horizontale pour le passage de câbles et canalisations, et foreuse à trou pour poteaux.
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-3 text-gray-900">Pourquoi nous choisir ?</h3>
            <p className="leading-relaxed">
              Pas de frais d'avance, pas de formulaire interminable. Dans le secteur du BTP, le temps c'est de l'argent. Un simple appel téléphonique suffit pour trouver l'engin qu'il vous faut et déclencher une intervention immédiate, où que vous soyez sur votre chantier.
            </p>
          </section>
        </div>
      </main>

      {/* SEO Content Footer Section with Complete Local Matrix */}
      <section className="bg-gray-900 text-gray-400 py-10 px-4 border-t border-gray-800 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-3">Nos Équipements disponibles</h3>
            <ul className="space-y-1.5">
              <li>
                •{' '}
                <a
                  href="/location-tractopelle"
                  onClick={navigate('/location-tractopelle')}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Location Tractopelle &amp; JCB (Dépannage rapide)
                </a>
              </li>
              <li>
                •{' '}
                <a
                  href="/location-poclain"
                  onClick={navigate('/location-poclain')}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Location Poclain &amp; Caterpillar
                </a>
              </li>
              <li>
                •{' '}
                <a
                  href="/location-manitou"
                  onClick={navigate('/location-manitou')}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Location Manitou (Télescopique)
                </a>
              </li>
              <li>
                •{' '}
                <a
                  href="/location-manitou"
                  onClick={navigate('/location-manitou')}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Location Clark &amp; Chariot élévateur
                </a>
              </li>
              <li>
                •{' '}
                <a
                  href="/location-foreuse-de-puits"
                  onClick={navigate('/location-foreuse-de-puits')}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Location Foreuse de Puits (Forage d'eau)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">Zones d'Intervention Rapide</h3>
            <p className="leading-relaxed mb-3">
              Service de dispatching actif à <strong>Had Soualem</strong>, <strong>Bir Jdid</strong>, <strong>Azemmour</strong>, <strong>Chtouka</strong>, <strong>El Jadida</strong>, <strong>Settat</strong> et <strong>Berrechid</strong>.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {CITIES.map((c) => {
                const targetSlug = activeMachine ? activeMachine.slug : 'location-tractopelle';
                return (
                  <a
                    key={c.slug}
                    href={`/${targetSlug}/${c.slug}`}
                    onClick={navigate(`/${targetSlug}/${c.slug}`)}
                    className="text-xs text-gray-300 hover:text-yellow-400 bg-gray-800 px-2 py-0.5 rounded transition-colors"
                  >
                    {c.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">Besoin d'un Engin en Urgence ?</h3>
            <p className="leading-relaxed">
              En cas de panne sur votre chantier ou besoin de forage de puits, notre réseau de propriétaires d'engins vous garantit une mise en relation en moins de 10 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-8 sm:py-10 px-4 text-sm pb-24 border-t border-gray-800">
        <div className="max-w-md mx-auto space-y-3">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-white font-medium text-sm sm:text-base bg-gray-900/80 px-4 py-2.5 rounded-xl border border-gray-800">
            <span className="flex items-center gap-1.5 text-gray-300">
              <Phone size={16} className="text-yellow-500" fill="currentColor" />
              <span>Contact :</span>
            </span>
            <a
              href={`tel:${phoneNumber}`}
              className="text-yellow-400 hover:text-yellow-300 font-extrabold text-base sm:text-lg tracking-wider whitespace-nowrap tabular-nums"
            >
              +212 718-187543
            </a>
          </div>
          <p className="text-gray-400 text-xs">
            Disponible 24/7 pour toute demande de location et intervention d'urgence.
          </p>
          <p className="text-gray-600 text-xs pt-1">
            © 2026 ChantierUrgence. Service de mise en relation d'urgence.
          </p>
        </div>
      </footer>

      {/* Floating Call Button for immediate access anywhere */}
      <a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-6 right-6 z-50 bg-yellow-500 text-black p-4 rounded-full shadow-[0_4px_20px_rgba(234,179,8,0.5)] hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all flex items-center justify-center animate-bounce"
        aria-label="Appeler maintenant"
      >
        <Phone size={28} fill="currentColor" />
      </a>
    </div>
  );
}
