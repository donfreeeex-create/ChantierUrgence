import { useState, useEffect } from 'react';
import { Phone, MapPin, Truck, CheckCircle, AlertTriangle } from 'lucide-react';
import bgImage from './assets/images/construction_machinery_bg_1785781418743.jpg';

export default function App() {
  const phoneNumber = "+212718187543"; // Updated direct contact number
  const [showBg, setShowBg] = useState(true);

  useEffect(() => {
    // Remove the background image after 10 minutes
    const timer = setTimeout(() => {
      setShowBg(false);
    }, 10 * 60 * 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-yellow-300">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-yellow-500 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-900 font-extrabold text-lg tracking-tight">
          <AlertTriangle className="text-yellow-500" size={24} strokeWidth={2.5} />
          <span>ChantierUrgence</span>
        </div>
        <a 
          href={`tel:${phoneNumber}`} 
          className="bg-yellow-500 text-black px-4 py-2 rounded-md font-bold flex items-center gap-2 animate-pulse shadow-sm active:scale-95 transition-transform"
        >
          <Phone size={18} fill="currentColor" />
          <span className="hidden sm:inline">Appeler</span>
        </a>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <section className="relative px-4 py-12 md:py-24 flex flex-col items-center text-center w-full">
          {showBg && (
            <>
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
              />
              <div className="absolute inset-0 z-0 bg-white/85 backdrop-blur-[2px]"></div>
            </>
          )}
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold mb-6">
              URGENCE DÉPANNAGE 24/7
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight uppercase tracking-tight">
              Machine en panne dans <br className="hidden md:block"/> votre chantier ?
            </h1>
            <p className="mt-6 text-lg text-gray-800 font-bold max-w-xl">
              Trouvez un Tractopelle, Poclain, Manitou, Clark, Foreuse ou Caterpillar.
            </p>
            
            <a 
              href={`tel:${phoneNumber}`} 
              className="mt-10 w-full sm:w-auto min-w-[300px] animate-pulse bg-yellow-500 hover:bg-yellow-400 text-black font-black py-5 px-8 rounded-xl flex items-center justify-center gap-3 text-xl shadow-[0_8px_30px_rgb(234,179,8,0.4)] active:translate-y-1 transition-all"
            >
              <Phone size={28} fill="currentColor" />
              DEMANDER UNE MACHINE MAINTENANT
            </a>
            
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-green-800 font-bold bg-green-100/90 backdrop-blur-sm px-4 py-2 rounded-full border border-green-300">
              <CheckCircle size={18} className="text-green-700" />
              Dispatching immédiat - Zéro frais d'avance
            </div>
          </div>
        </section>

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
                <p className="text-gray-600 text-sm">Nous trouvons la machine la plus proche de vous.</p>
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
        <section className="bg-gray-900 text-white py-16 px-4">
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
              <p className="text-3xl font-black text-white">
                10 minutes
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto w-full divide-y divide-gray-200">
          {/* Section : Manitou / Chariot Télescopique */}
          <section id="manitou" className="py-12 px-4">
            <h2 className="text-2xl font-bold mb-3">Location Manitou — Chariot Télescopique</h2>
            <p className="leading-relaxed text-gray-600 mb-6">
              Chariots télescopiques Manitou disponibles de 12m à 21m, rotatifs ou classiques,
              avec ou sans chauffeur. Location à la journée pour particuliers et professionnels,
              à Had Soualem, El Jadida et environs.
            </p>
            <a 
              href={`tel:${phoneNumber}`} 
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-colors shadow-sm"
            >
              <Phone size={20} fill="currentColor" />
              Réserver un Manitou
            </a>
          </section>

          {/* Section : Poclain / Caterpillar / Pelles */}
          <section id="poclain" className="py-12 px-4">
            <h2 className="text-2xl font-bold mb-3">Location Poclain, Caterpillar et Pelles Hydrauliques</h2>
            <p className="leading-relaxed text-gray-600 mb-6">
              Pelles sur chenille ou sur pneu, toutes marques (Poclain, Caterpillar, JCB).
              Intervention rapide en cas de panne d'engin sur votre chantier.
            </p>
            <a 
              href={`tel:${phoneNumber}`} 
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-colors shadow-sm"
            >
              <Phone size={20} fill="currentColor" />
              Demander une Pelle
            </a>
          </section>

          {/* Section : Foreuse — les 3 sous-services distincts */}
          <section id="forage" className="py-12 px-4">
            <h2 className="text-2xl font-bold mb-3">Location Foreuse — Puits, Horizontal, Poteaux</h2>
            <p className="leading-relaxed text-gray-600 mb-6">
              Foreuse de puits d'eau pour particuliers et agriculteurs, foreuse horizontale
              pour passage de câbles et canalisations, et foreuse à trou pour poteaux
              (clôtures, lignes électriques). Devis rapide selon votre besoin.
            </p>
            <a 
              href={`tel:${phoneNumber}`} 
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-colors shadow-sm"
            >
              <Phone size={20} fill="currentColor" />
              Commander une Foreuse
            </a>
          </section>
        </div>
      </main>

      {/* SEO Content Footer Section */}
      <section className="bg-gray-900 text-gray-400 py-10 px-4 border-t border-gray-800 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-3">Nos Équipements disponibles</h3>
            <ul className="space-y-1">
              <li>• Location Tractopelle & JCB (Dépannage rapide)</li>
              <li>• Location Poclain & Caterpillar</li>
              <li>• Location Manitou (Télescopique)</li>
              <li>• Location Clark & Chariot élévateur</li>
              <li>• Location Foreuse de Puits (Forage d'eau)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">Zones d'Intervention Rapide</h3>
            <p className="leading-relaxed">
              Service de dispatching actif à <strong>Had Soualem</strong>, <strong>Bir Jdid</strong>, <strong>Azemmour</strong>, <strong>Chtouka</strong>, <strong>El Jadida</strong>, <strong>Settat</strong> et <strong>Berrechid</strong>.
            </p>
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
      <footer className="bg-black text-gray-500 text-center py-8 px-4 text-sm pb-24">
        <p>© 2026 ChantierUrgence. Service de mise en relation d'urgence.</p>
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
