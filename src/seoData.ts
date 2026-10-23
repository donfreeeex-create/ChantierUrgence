export interface CityConfig {
  slug: string;
  name: string;
  schemaType: 'City' | 'Place';
  region: string;
  lat: number;
  lng: number;
  industrialNote: string;
  nearbyAreas: string[];
}

export interface MachineConfig {
  slug: string;
  id: string;
  name: string;
  shortName: string;
  arabicTag: string;
  heroTitle: string;
  h2Title: string;
  ctaLabel: string;
  serviceType: string;
  brands: string;
  specs: string[];
  useCases: string[];
  description: string;
  detailedParagraph: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

export const CITIES: CityConfig[] = [
  {
    slug: 'had-soualem',
    name: 'Had Soualem',
    schemaType: 'City',
    region: 'Casablanca-Settat',
    lat: 33.4111,
    lng: -7.8425,
    industrialNote: 'la Zone Industrielle de Had Soualem, Sahel et les chantiers résidentiels ou logistiques environnants',
    nearbyAreas: ['Bir Jdid', 'Berrechid', 'Sidi Rahal']
  },
  {
    slug: 'berrechid',
    name: 'Berrechid',
    schemaType: 'City',
    region: 'Casablanca-Settat',
    lat: 33.2655,
    lng: -7.5875,
    industrialNote: 'la Zone Industrielle de Berrechid, l’axe autoroutier A3 et les plateformes logistiques et usines de la province',
    nearbyAreas: ['Had Soualem', 'Settat', 'Sidi Rahal']
  },
  {
    slug: 'settat',
    name: 'Settat',
    schemaType: 'City',
    region: 'Casablanca-Settat',
    lat: 33.0010,
    lng: -7.6166,
    industrialNote: 'la Zone Industrielle de Settat, les chantiers BTP urbains et les exploitations agricoles de la Chaouia',
    nearbyAreas: ['Berrechid', 'Had Soualem', 'El Jadida']
  },
  {
    slug: 'el-jadida',
    name: 'El Jadida',
    schemaType: 'City',
    region: 'Casablanca-Settat',
    lat: 33.2316,
    lng: -8.5007,
    industrialNote: 'la ville d’El Jadida, la zone industrielle, les projets immobiliers côtiers et l’arrière-pays des Doukkala',
    nearbyAreas: ['Jorf Lasfar', 'Azemmour', 'Bir Jdid']
  },
  {
    slug: 'jorf-lasfar',
    name: 'Jorf Lasfar',
    schemaType: 'Place',
    region: 'Casablanca-Settat',
    lat: 33.1156,
    lng: -8.6164,
    industrialNote: 'le complexe industriel et portuaire de Jorf Lasfar, le parc industriel OCP et les chantiers d’infrastructure lourde',
    nearbyAreas: ['El Jadida', 'Azemmour', 'Bir Jdid']
  },
  {
    slug: 'bir-jdid',
    name: 'Bir Jdid',
    schemaType: 'City',
    region: 'Casablanca-Settat',
    lat: 33.3736,
    lng: -8.0008,
    industrialNote: 'Bir Jdid, les projets de villas, les fermes agricoles et les chantiers sur la route côtière et l’autoroute A1',
    nearbyAreas: ['Had Soualem', 'Chtouka', 'Sidi Rahal']
  },
  {
    slug: 'azemmour',
    name: 'Azemmour',
    schemaType: 'City',
    region: 'Casablanca-Settat',
    lat: 33.2878,
    lng: -8.3422,
    industrialNote: 'Azemmour, Haouzia, la vallée de l’Oum Er-Rbia et les chantiers touristiques, agricoles et résidentiels',
    nearbyAreas: ['El Jadida', 'Chtouka', 'Bir Jdid']
  },
  {
    slug: 'chtouka',
    name: 'Chtouka',
    schemaType: 'Place',
    region: 'Casablanca-Settat',
    lat: 33.3210,
    lng: -8.1720,
    industrialNote: 'la commune de Chtouka, les domaines agricoles, les lotissements ruraux et l’axe côtier entre Bir Jdid et Azemmour',
    nearbyAreas: ['Bir Jdid', 'Azemmour', 'Had Soualem']
  },
  {
    slug: 'sidi-rahal',
    name: 'Sidi Rahal',
    schemaType: 'City',
    region: 'Casablanca-Settat',
    lat: 33.4719,
    lng: -7.9531,
    industrialNote: 'Sidi Rahal Chatai, les résidences balnéaires, les projets touristiques et les terrains en construction sur le littoral',
    nearbyAreas: ['Had Soualem', 'Bir Jdid', 'Berrechid']
  }
];

export const MACHINES: MachineConfig[] = [
  {
    slug: 'location-tractopelle',
    id: 'tractopelle',
    name: 'Location Tractopelle & JCB',
    shortName: 'Tractopelle & JCB',
    arabicTag: 'حفير الساس',
    heroTitle: 'Location Tractopelle & JCB en Urgence',
    h2Title: 'Location Tractopelle & JCB — Terrassement et Dépannage',
    ctaLabel: 'Demander un Tractopelle JCB',
    serviceType: 'Location Tractopelle & JCB',
    brands: 'JCB 3CX, JCB 4CX, Caterpillar 428 / 432, CASE',
    specs: [
      'Godet chargeur 4-en-1 grand volume pour nivellement et chargement',
      'Bras rétro extensible avec godets de 30 cm, 40 cm, 60 cm et 80 cm',
      'Marteau Brise-Roche Hydraulique (BRH) disponible pour sols rocheux et béton',
      'Location avec chauffeur qualifié et carburant inclus ou selon formule'
    ],
    useCases: [
      'Ouverture de fondations et fouilles en rigoles (حفير الساس)',
      'Tranchées d’assainissement, passage de conduites d’eau et câbles électriques',
      'Décapage de terre végétale, nivellement de terrain et remblayage',
      'Dépannage immédiat en cas de panne de machine sur votre chantier et chargement de camions'
    ],
    description: 'Location de tractopelles JCB (3CX, 4CX) et Caterpillar avec chauffeur expérimenté pour vos travaux de terrassement, ouverture de fondations (حفير الساس), fouilles en tranchées, assainissement, nivellement de terrain et chargement de camions.',
    detailedParagraph: 'Que vous soyez un entrepreneur BTP, un industriel ou un particulier en pleine construction, notre service de location de Tractopelle et JCB vous connecte en moins de 10 minutes avec l’engin disponible le plus proche. Nos machines polyvalentes assurent aussi bien l’excavation de fondations (حفير الساس) que la démolition légère au BRH et l’évacuation des déblais.',
    faq: [
      {
        question: 'Quel est le délai d’intervention pour louer un Tractopelle JCB ?',
        answer: 'Grâce à notre réseau de propriétaires d’engins répartis sur toute la région, nous identifions et mobilisons le Tractopelle JCB (3CX ou 4CX) le plus proche de votre chantier en moins de 10 minutes après votre appel.'
      },
      {
        question: 'Le Tractopelle est-il loué avec chauffeur et accessoires (godets, BRH) ?',
        answer: 'Oui, tous nos tractopelles sont fournis avec des opérateurs expérimentés ainsi que les équipements adaptés à votre sol : godets de différentes largeurs pour tranchées et fondations (حفير الساس) ou marteau brise-roche (BRH).'
      }
    ]
  },
  {
    slug: 'location-poclain',
    id: 'poclain',
    name: 'Location Poclain & Pelle Hydraulique',
    shortName: 'Poclain & Pelle',
    arabicTag: 'كراء بوكلان',
    heroTitle: 'Location Poclain & Caterpillar en Urgence',
    h2Title: 'Location Poclain, Caterpillar et Pelles Hydrauliques',
    ctaLabel: 'Demander une Pelle Poclain',
    serviceType: 'Location Poclain & Pelle Hydraulique',
    brands: 'Poclain, Caterpillar (320, 323, 330), JCB, Komatsu, Hyundai',
    specs: [
      'Pelles hydrauliques sur chenilles (14T, 20T, 24T, 30T+) pour terrains difficiles',
      'Pelles sur pneus mobiles pour interventions rapides sur voirie et zones urbaines',
      'Équipements haute performance : godet grand volume, godet de curage et BRH lourd',
      'Opérateurs spécialisés en gros œuvre, déroctage et terrassement profond'
    ],
    useCases: [
      'Terrassement de grande masse et excavation de sous-sols ou parkings (كراء بوكلان)',
      'Déroctage au marteau brise-roche hydraulique (BRH) sur terrain rocheux',
      'Démolition de bâtiments industriels ou structures en béton armé',
      'Travaux d’assainissement profond, bassins de rétention et extraction en carrière'
    ],
    description: 'Location de pelles mécaniques hydrauliques sur chenilles ou sur pneus (Poclain, Caterpillar, JCB, de 14 à 30 tonnes) équipées de godet de terrassement, godet de curage ou marteau brise-roche (BRH).',
    detailedParagraph: 'Pour les chantiers de gros œuvre, les terrassements profonds et l’extraction lourde (كراء بوكلان), une pelle hydraulique fiable est indispensable. Nous mettons à votre disposition des pelles Poclain et Caterpillar sur chenilles ou sur pneus prêtes à travailler immédiatement, avec porte-char disponible pour un transfert rapide sur votre site.',
    faq: [
      {
        question: 'Proposez-vous des pelles Poclain sur chenilles et sur pneus avec BRH ?',
        answer: 'Oui, nous disposons de pelles hydrauliques sur chenilles et sur pneus de 14 à plus de 30 tonnes (Caterpillar, Poclain, JCB) équipées soit de godets d’excavation, soit de marteaux brise-roche (BRH) pour le déroctage.'
      },
      {
        question: 'Comment se passe le transport (porte-char) de la pelle Poclain jusqu’au chantier ?',
        answer: 'Lors de votre appel au +212 718-187543, notre dispatching sélectionne la pelle mécanique la plus proche de votre chantier afin de réduire au minimum le temps et le coût de transfert par porte-char.'
      }
    ]
  },
  {
    slug: 'location-manitou',
    id: 'manitou',
    name: 'Location Manitou & Chariot Élévateur Clark',
    shortName: 'Manitou & Clark',
    arabicTag: 'مانيتو وكلارك',
    heroTitle: 'Location Manitou & Clark en Urgence',
    h2Title: 'Location Manitou & Clark — Chariot Télescopique et Élévateur',
    ctaLabel: 'Réserver un Manitou / Clark',
    serviceType: 'Location Manitou & Chariot Élévateur',
    brands: 'Manitou (MT 1235, MT 1440, MT 1840, MRT 2150), JCB Loadall, Clark, Toyota',
    specs: [
      'Hauteurs de levage de 12m, 14m, 17m, 18m et jusqu’à 21m (fixes ou rotatifs)',
      'Capacité de charge de 3,5 tonnes à 5 tonnes avec stabilisateurs hydrauliques',
      'Accessoires disponibles : fourches à palettes, godet vrac, potence et nacelle panier',
      'Chariots élévateurs Clark (diesel, gaz ou électriques) de 2,5T à 7T pour usines et dépôts'
    ],
    useCases: [
      'Montage de charpentes métalliques, bardage et structures industrielles',
      'Approvisionnement d’étages en matériaux (briques, palettes de ciment, ferraillage)',
      'Chargement et déchargement de camions semi-remorques et conteneurs',
      'Manutention lourde en usine, plateforme logistique et chantier BTP'
    ],
    description: 'Chariots télescopiques Manitou disponibles de 12m à 21m (MT 1440, MT 1840, rotatifs ou fixes) et chariots élévateurs Clark industriels, avec ou sans chauffeur.',
    detailedParagraph: 'Optimisez le levage et la manutention sur vos chantiers et sites industriels grâce à notre flotte de chariots télescopiques Manitou (12m à 21m) et chariots élévateurs Clark. Disponibles à la journée, à la semaine ou au mois, avec ou sans chauffeur, nos engins garantissent sécurité et productivité maximale.',
    faq: [
      {
        question: 'Quelles hauteurs de Manitou sont disponibles à la location ?',
        answer: 'Nous proposons des chariots télescopiques Manitou de 12m, 14m, 18m et 21m (modèles fixes MT et rotatifs MRT), ainsi que des chariots élévateurs industriels Clark de différentes capacités.'
      },
      {
        question: 'Peut-on louer un Manitou ou un Clark à la journée ou au mois ?',
        answer: 'Oui, nous proposons des formules souples adaptées aux urgences ponctuelles (location à la journée avec chauffeur) comme aux chantiers longue durée (location à la semaine ou au mois).'
      }
    ]
  },
  {
    slug: 'location-foreuse-de-puits',
    id: 'forage',
    name: 'Location Foreuse de Puits (Forage d’eau)',
    shortName: 'Foreuse de Puits',
    arabicTag: 'حفير البير',
    heroTitle: 'Location Foreuse de Puits & Forage en Urgence',
    h2Title: 'Location Foreuse de Puits — Forage d’Eau, Horizontal, Poteaux',
    ctaLabel: 'Commander une Foreuse',
    serviceType: 'Location Foreuse de Puits',
    brands: 'Foreuses rotatives hydrauliques, ateliers de forage MFT (Marteau Fond de Trou), foreuses horizontales et tarières',
    specs: [
      'Ateliers de forage d’eau (حفير البير) par méthode rotative (boue) et marteau fond de trou (air comprimé)',
      'Capacité de forage toutes profondeurs (terrains argileux, calcaires ou rocheux basaltiques)',
      'Foreuse horizontale dirigée pour traversées sous routes et voies ferrées sans tranchée',
      'Foreuse à tarière mécanique/hydraulique sur tracteur ou pelle pour trous de poteaux et plantations'
    ],
    useCases: [
      'Forage de puits d’eau potable ou d’irrigation agricole (حفير البير) pour fermes et villas',
      'Tubage acier ou PVC alimentaire, développement de puits et soufflage compresseur',
      'Forage horizontal pour passage de conduites d’eau, gaines télécom et câbles HTA/BT',
      'Forage de trous pour poteaux électriques, clôtures périmétriques, pieux et vergers arboricoles'
    ],
    description: 'Location de foreuse de puits d’eau (حفير البير) par forage rotatif et marteau fond de trou pour particuliers, exploitations agricoles et industriels, ainsi que foreuse horizontale et tarière pour poteaux.',
    detailedParagraph: 'Que vous ayez besoin d’un forage de puits d’eau (حفير البير) pour alimenter une ferme agricole ou une résidence, d’un forage horizontal sous chaussée ou d’une tarière pour planter des centaines de poteaux, nous mobilisons l’atelier de forage adapté à la géologie exacte de votre terrain.',
    faq: [
      {
        question: 'Quels types de forage proposez-vous (puits d’eau, horizontal, poteaux) ?',
        answer: 'Nous couvrons 3 besoins distincts : 1) Le forage de puits d’eau (حفير البير) à grande profondeur avec tubage, 2) Le forage horizontal pour passer des câbles/canalisations sous une route sans casser le goudron, et 3) La tarière pour les trous de poteaux et arbres.'
      },
      {
        question: 'Intervenez-vous sur les terrains agricoles et zones rurales ?',
        answer: 'Oui, nos camions et ateliers de forage sur chenilles accèdent à tous types de terrains agricoles, fermes, villas et chantiers BTP sur Had Soualem, Bir Jdid, Chtouka, Azemmour, El Jadida, Berrechid et Settat.'
      }
    ]
  }
];

export interface RouteMeta {
  path: string;
  canonicalUrl: string;
  title: string;
  description: string;
  h1Main: string;
  h1Sub: string;
  badgeText: string;
  machine?: MachineConfig;
  city?: CityConfig;
  jsonLd: Record<string, unknown>;
}

const BASE_URL = 'https://www.chantierurgence.com';
const PHONE = '+212718187543';

export function normalizePathname(rawPath: string): string {
  if (!rawPath) return '/';
  const clean = rawPath.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean === '' ? '/' : clean.toLowerCase();
}

export function getRouteMeta(rawPath: string): RouteMeta {
  const path = normalizePathname(rawPath);
  const segments = path.split('/').filter(Boolean);

  const matchedMachine = segments[0]
    ? MACHINES.find((m) => m.slug === segments[0])
    : undefined;
  const matchedCity = segments[1]
    ? CITIES.find((c) => c.slug === segments[1])
    : undefined;

  // Case 1: Specific Machine + Specific City (e.g. /location-tractopelle/berrechid)
  if (matchedMachine && matchedCity) {
    const canonicalUrl = `${BASE_URL}/${matchedMachine.slug}/${matchedCity.slug}`;
    const title = `${matchedMachine.name} à ${matchedCity.name} | Dépannage 24/7 ChantierUrgence`;
    const description = `${matchedMachine.name} à ${matchedCity.name} (${matchedMachine.arabicTag}). Intervention urgente en 10 min sur votre chantier avec ou sans chauffeur. Appelez le +212 718-187543.`;
    const h1Main = `${matchedMachine.name} à ${matchedCity.name}`;
    const h1Sub = `Disponibilité immédiate 24/7 pour vos chantiers à ${matchedCity.name} (${matchedMachine.brands}) — Mise en relation en 10 minutes.`;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['HomeAndConstructionBusiness', 'EmergencyService'],
          '@id': `${canonicalUrl}#business`,
          name: `ChantierUrgence — ${matchedMachine.name} à ${matchedCity.name}`,
          url: canonicalUrl,
          image: `${BASE_URL}/favicon.png`,
          logo: `${BASE_URL}/favicon.png`,
          telephone: PHONE,
          priceRange: '$$',
          description,
          address: {
            '@type': 'PostalAddress',
            addressLocality: matchedCity.name,
            addressRegion: matchedCity.region,
            addressCountry: 'MA'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: matchedCity.lat,
            longitude: matchedCity.lng
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59'
          },
          areaServed: [
            { '@type': matchedCity.schemaType, name: matchedCity.name },
            ...matchedCity.nearbyAreas.map((area) => ({ '@type': 'City', name: area }))
          ],
          serviceType: [matchedMachine.serviceType, `${matchedMachine.name} ${matchedCity.name}`],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${matchedMachine.name} à ${matchedCity.name}`,
            itemListElement: [
              {
                '@type': 'Offer',
                areaServed: { '@type': matchedCity.schemaType, name: matchedCity.name },
                itemOffered: {
                  '@type': 'Service',
                  name: `${matchedMachine.name} à ${matchedCity.name}`,
                  serviceType: matchedMachine.serviceType,
                  provider: {
                    '@type': 'HomeAndConstructionBusiness',
                    name: 'ChantierUrgence',
                    telephone: PHONE
                  },
                  areaServed: { '@type': matchedCity.schemaType, name: matchedCity.name },
                  description: `${matchedMachine.description} Intervention rapide à ${matchedCity.name} et environs.`
                }
              }
            ]
          }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: matchedMachine.name, item: `${BASE_URL}/${matchedMachine.slug}` },
            { '@type': 'ListItem', position: 3, name: `${matchedMachine.shortName} à ${matchedCity.name}`, item: canonicalUrl }
          ]
        },
        {
          '@type': 'FAQPage',
          mainEntity: matchedMachine.faq.map((q) => ({
            '@type': 'Question',
            name: `${q.question} (${matchedCity.name})`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${q.answer} Service disponible 24/7 à ${matchedCity.name}.`
            }
          }))
        }
      ]
    };

    return {
      path: `/${matchedMachine.slug}/${matchedCity.slug}`,
      canonicalUrl,
      title,
      description,
      h1Main,
      h1Sub,
      badgeText: `URGENCE ${matchedCity.name.toUpperCase()} 24/7`,
      machine: matchedMachine,
      city: matchedCity,
      jsonLd
    };
  }

  // Case 2: Specific Machine across all cities (e.g. /location-tractopelle)
  if (matchedMachine && !matchedCity) {
    const canonicalUrl = `${BASE_URL}/${matchedMachine.slug}`;
    const title = `${matchedMachine.name} | Had Soualem, Berrechid, Settat, El Jadida`;
    const description = `${matchedMachine.name} (${matchedMachine.arabicTag}) disponible en 10 min à Had Soualem, Berrechid, Settat, El Jadida, Jorf Lasfar et Bir Jdid. Appelez le +212 718-187543.`;
    const h1Main = matchedMachine.heroTitle;
    const h1Sub = `${matchedMachine.name} (${matchedMachine.brands}) disponible immédiatement à Had Soualem, Berrechid, Settat, El Jadida, Jorf Lasfar et environs.`;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['HomeAndConstructionBusiness', 'EmergencyService'],
          '@id': `${canonicalUrl}#business`,
          name: `ChantierUrgence — ${matchedMachine.name}`,
          url: canonicalUrl,
          image: `${BASE_URL}/favicon.png`,
          logo: `${BASE_URL}/favicon.png`,
          telephone: PHONE,
          priceRange: '$$',
          description,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Had Soualem',
            addressRegion: 'Casablanca-Settat',
            postalCode: '26402',
            addressCountry: 'MA'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 33.4111,
            longitude: -7.8425
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59'
          },
          areaServed: CITIES.map((c) => ({ '@type': c.schemaType, name: c.name })),
          serviceType: [matchedMachine.serviceType],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: matchedMachine.name,
            itemListElement: CITIES.map((c) => ({
              '@type': 'Offer',
              areaServed: { '@type': c.schemaType, name: c.name },
              itemOffered: {
                '@type': 'Service',
                name: `${matchedMachine.name} à ${c.name}`,
                areaServed: { '@type': c.schemaType, name: c.name },
                description: `${matchedMachine.description} Intervention immédiate à ${c.name}.`
              }
            }))
          }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: matchedMachine.name, item: canonicalUrl }
          ]
        },
        {
          '@type': 'FAQPage',
          mainEntity: matchedMachine.faq.map((q) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer
            }
          }))
        }
      ]
    };

    return {
      path: `/${matchedMachine.slug}`,
      canonicalUrl,
      title,
      description,
      h1Main,
      h1Sub,
      badgeText: 'URGENCE DÉPANNAGE 24/7',
      machine: matchedMachine,
      jsonLd
    };
  }

  // Case 3: Default Home Page (/)
  const canonicalUrl = `${BASE_URL}/`;
  const title = 'Location Tractopelle, JCB, Poclain, Manitou & Foreuse | ChantierUrgence';
  const description = "Location d'urgence 24/7 : Tractopelle JCB, Poclain, Caterpillar, Manitou & Foreuse de puits à Had Soualem, Berrechid, Settat, El Jadida et Jorf Lasfar. Tél : +212 718-187543.";
  const h1Main = 'Machine en panne dans votre chantier ?';
  const h1Sub = "Location d'urgence : Tractopelle & JCB, Poclain, Manitou, Clark, Foreuse de puits ou Caterpillar.";

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['HomeAndConstructionBusiness', 'EmergencyService'],
        '@id': `${BASE_URL}/#business`,
        name: 'ChantierUrgence',
        url: canonicalUrl,
        image: `${BASE_URL}/favicon.png`,
        logo: `${BASE_URL}/favicon.png`,
        telephone: PHONE,
        priceRange: '$$',
        description: "Plateforme de location d'urgence et dispatching d'engins BTP au Maroc : Location Tractopelle & JCB, Location Poclain & Caterpillar, Location Manitou & Clark, et Location Foreuse de puits.",
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Had Soualem',
          addressRegion: 'Casablanca-Settat',
          postalCode: '26402',
          addressCountry: 'MA'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.4111,
          longitude: -7.8425
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59'
        },
        areaServed: CITIES.map((c) => ({ '@type': c.schemaType, name: c.name })),
        serviceType: [
          'Location Tractopelle',
          'Location JCB',
          'Location Poclain',
          'Location Manitou',
          'Location Clark',
          'Location Caterpillar',
          'Location Foreuse de Puits'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Catalogue Location Engins de Chantier BTP',
          itemListElement: MACHINES.map((m) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: m.name,
              url: `${BASE_URL}/${m.slug}`,
              description: m.description
            }
          }))
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${BASE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Dans quelles villes intervenez-vous pour la location de Tractopelle, Poclain et Manitou ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Notre service de dispatching d'urgence couvre Had Soualem, Berrechid, Settat, Bir Jdid, Azemmour, El Jadida, Jorf Lasfar, Chtouka et Sidi Rahal avec une mise en relation en moins de 10 minutes."
            }
          },
          {
            '@type': 'Question',
            name: 'Quels engins de chantier sont disponibles à la location ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Nous proposons la location de Tractopelle JCB (3CX/4CX), Poclain et pelles hydrauliques Caterpillar sur chenilles ou pneus (avec godet ou BRH), chariots télescopiques Manitou (12m à 21m), chariots élévateurs Clark et foreuses de puits d'eau."
            }
          }
        ]
      }
    ]
  };

  return {
    path: '/',
    canonicalUrl,
    title,
    description,
    h1Main,
    h1Sub,
    badgeText: 'URGENCE DÉPANNAGE 24/7',
    jsonLd
  };
}

export function getAllRoutes(): string[] {
  const routes: string[] = ['/'];
  for (const machine of MACHINES) {
    routes.push(`/${machine.slug}`);
    for (const city of CITIES) {
      routes.push(`/${machine.slug}/${city.slug}`);
    }
  }
  return routes;
}
