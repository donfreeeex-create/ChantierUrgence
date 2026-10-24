export interface CityConfig {
  slug: string;
  name: string;
  schemaType: 'City' | 'Place' | 'AdministrativeArea';
  region: string;
  lat: number;
  lng: number;
  radiusMeters: number;
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
    slug: 'casablanca-settat',
    name: 'Région Casablanca-Settat',
    schemaType: 'AdministrativeArea',
    region: 'Casablanca-Settat',
    lat: 33.3600,
    lng: -7.8000,
    radiusMeters: 120000,
    industrialNote:
      'l’ensemble de la région Casablanca-Settat : Province de Berrechid, Province de Settat, Région d’El Jadida, Had Soualem, Jorf Lasfar et Bir Jdid',
    nearbyAreas: ['Had Soualem', 'Berrechid', 'Settat', 'El Jadida', 'Jorf Lasfar', 'Bir Jdid', 'Azemmour']
  },
  {
    slug: 'had-soualem',
    name: 'Had Soualem',
    schemaType: 'City',
    region: 'Province de Berrechid (Casablanca-Settat)',
    lat: 33.4111,
    lng: -7.8425,
    radiusMeters: 30000,
    industrialNote:
      'la Zone Industrielle de Had Soualem, la commune du Sahel Oulad Hriz et les chantiers résidentiels, logistiques et industriels environnants',
    nearbyAreas: ['Bir Jdid', 'Berrechid', 'Sidi Rahal']
  },
  {
    slug: 'berrechid',
    name: 'Berrechid',
    schemaType: 'City',
    region: 'Province de Berrechid (Casablanca-Settat)',
    lat: 33.2655,
    lng: -7.5875,
    radiusMeters: 40000,
    industrialNote:
      'la ville et la Province de Berrechid (Zone Industrielle de Berrechid, Eco-Parc, Deroua, El Gara, Oulad Abbou, Sidi El Mekki et l’axe autoroutier A3)',
    nearbyAreas: ['Had Soualem', 'Deroua', 'Settat', 'Sidi Rahal', 'El Gara']
  },
  {
    slug: 'province-berrechid',
    name: 'Province de Berrechid',
    schemaType: 'AdministrativeArea',
    region: 'Casablanca-Settat',
    lat: 33.3100,
    lng: -7.6800,
    radiusMeters: 50000,
    industrialNote:
      'toutes les communes de la Province de Berrechid : Berrechid, Had Soualem, Sidi Rahal Chatai, Deroua, El Gara, Sahel Oulad Hriz, Oulad Abbou et Laghnimyine',
    nearbyAreas: ['Berrechid', 'Had Soualem', 'Sidi Rahal', 'Deroua', 'El Gara']
  },
  {
    slug: 'settat',
    name: 'Settat',
    schemaType: 'City',
    region: 'Province de Settat (Casablanca-Settat)',
    lat: 33.0010,
    lng: -7.6166,
    radiusMeters: 45000,
    industrialNote:
      'la ville et la Province de Settat (Zone Industrielle de Settat, Ben Ahmed, El Borouj, Oulad Said, Guisser, Ras El Ain et les exploitations agricoles de la Chaouia)',
    nearbyAreas: ['Berrechid', 'Ben Ahmed', 'El Borouj', 'Oulad Said', 'Had Soualem']
  },
  {
    slug: 'province-settat',
    name: 'Province de Settat',
    schemaType: 'AdministrativeArea',
    region: 'Casablanca-Settat',
    lat: 32.9500,
    lng: -7.5500,
    radiusMeters: 65000,
    industrialNote:
      'l’ensemble de la Province de Settat : Settat, Ben Ahmed, El Borouj, Loulad, Oulad M’rah, Oulad Said, Guisser, Sid L’Mokhtar et les communes rurales de la Chaouia',
    nearbyAreas: ['Settat', 'Ben Ahmed', 'El Borouj', 'Berrechid', 'Had Soualem']
  },
  {
    slug: 'el-jadida',
    name: 'El Jadida',
    schemaType: 'City',
    region: 'Province d’El Jadida (Casablanca-Settat)',
    lat: 33.2316,
    lng: -8.5007,
    radiusMeters: 45000,
    industrialNote:
      'la ville et la région d’El Jadida (Zone Industrielle d’El Jadida, Haouzia, Moulay Abdellah, Sidi Bouzid, Oulad Frej et l’arrière-pays agricole des Doukkala)',
    nearbyAreas: ['Jorf Lasfar', 'Azemmour', 'Moulay Abdellah', 'Bir Jdid', 'Sidi Bouzid']
  },
  {
    slug: 'region-el-jadida',
    name: 'Région d’El Jadida',
    schemaType: 'AdministrativeArea',
    region: 'Casablanca-Settat',
    lat: 33.1800,
    lng: -8.4200,
    radiusMeters: 65000,
    industrialNote:
      'toute la Province et région d’El Jadida (Doukkala) : El Jadida, Jorf Lasfar, Azemmour, Bir Jdid, Chtouka, Moulay Abdellah, Haouzia, Sidi Bouzid, Oulad Frej et Sidi Smail',
    nearbyAreas: ['El Jadida', 'Jorf Lasfar', 'Azemmour', 'Bir Jdid', 'Chtouka', 'Moulay Abdellah']
  },
  {
    slug: 'jorf-lasfar',
    name: 'Jorf Lasfar',
    schemaType: 'Place',
    region: 'Province d’El Jadida (Casablanca-Settat)',
    lat: 33.1156,
    lng: -8.6164,
    radiusMeters: 30000,
    industrialNote:
      'le complexe industriel et portuaire de Jorf Lasfar, la plateforme OCP, le parc industriel, Moulay Abdellah et les chantiers d’infrastructure lourde',
    nearbyAreas: ['El Jadida', 'Moulay Abdellah', 'Azemmour', 'Bir Jdid']
  },
  {
    slug: 'bir-jdid',
    name: 'Bir Jdid',
    schemaType: 'City',
    region: 'Province d’El Jadida (Casablanca-Settat)',
    lat: 33.3736,
    lng: -8.0008,
    radiusMeters: 28000,
    industrialNote:
      'Bir Jdid, Laghdira, les projets de villas, les domaines agricoles et les chantiers situés sur la route côtière et l’autoroute A1 Casablanca – El Jadida',
    nearbyAreas: ['Had Soualem', 'Chtouka', 'Sidi Rahal', 'Azemmour']
  },
  {
    slug: 'azemmour',
    name: 'Azemmour',
    schemaType: 'City',
    region: 'Province d’El Jadida (Casablanca-Settat)',
    lat: 33.2878,
    lng: -8.3422,
    radiusMeters: 30000,
    industrialNote:
      'Azemmour, Haouzia, la vallée de l’Oum Er-Rbia, Sidi Ali Ben Hamdouch et les chantiers touristiques, agricoles et résidentiels de la côte',
    nearbyAreas: ['El Jadida', 'Chtouka', 'Bir Jdid', 'Jorf Lasfar']
  },
  {
    slug: 'chtouka',
    name: 'Chtouka',
    schemaType: 'Place',
    region: 'Province d’El Jadida (Casablanca-Settat)',
    lat: 33.3210,
    lng: -8.1720,
    radiusMeters: 25000,
    industrialNote:
      'la commune de Chtouka, les exploitations agricoles, les lotissements ruraux et l’axe côtier entre Bir Jdid et Azemmour',
    nearbyAreas: ['Bir Jdid', 'Azemmour', 'Had Soualem', 'El Jadida']
  },
  {
    slug: 'sidi-rahal',
    name: 'Sidi Rahal',
    schemaType: 'City',
    region: 'Province de Berrechid (Casablanca-Settat)',
    lat: 33.4719,
    lng: -7.9531,
    radiusMeters: 28000,
    industrialNote:
      'Sidi Rahal Chatai, Dar Bouazza, les résidences balnéaires, les projets touristiques et les terrains en construction sur le littoral atlantique',
    nearbyAreas: ['Had Soualem', 'Bir Jdid', 'Dar Bouazza', 'Berrechid', 'Casablanca']
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
    description:
      'Location de tractopelles JCB (3CX, 4CX) et Caterpillar avec chauffeur expérimenté pour vos travaux de terrassement, ouverture de fondations (حفير الساس), fouilles en tranchées, assainissement, nivellement de terrain et chargement de camions.',
    detailedParagraph:
      'Que vous soyez un entrepreneur BTP, un industriel ou un particulier en pleine construction dans la région Casablanca-Settat (Casablanca, Province de Berrechid, Province de Settat ou Région d’El Jadida), notre service de location de Tractopelle et JCB vous connecte en moins de 10 minutes avec l’engin disponible le plus proche. Nos machines polyvalentes assurent aussi bien l’excavation de fondations (حفير الساس) que la démolition légère au BRH et l’évacuation des déblais.',
    faq: [
      {
        question: 'Quel est le délai d’intervention pour louer un Tractopelle JCB ?',
        answer:
          'Grâce à notre réseau de propriétaires d’engins répartis sur toute la région Casablanca-Settat (Casablanca, Berrechid, Settat, Had Soualem, El Jadida), nous identifions et mobilisons le Tractopelle JCB (3CX ou 4CX) le plus proche de votre chantier en moins de 10 minutes après votre appel.'
      },
      {
        question: 'Le Tractopelle est-il loué avec chauffeur et accessoires (godets, BRH) ?',
        answer:
          'Oui, tous nos tractopelles sont fournis avec des opérateurs expérimentés ainsi que les équipements adaptés à votre sol : godets de différentes largeurs pour tranchées et fondations (حفير الساس) ou marteau brise-roche (BRH).'
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
    description:
      'Location de pelles mécaniques hydrauliques sur chenilles ou sur pneus (Poclain, Caterpillar, JCB, de 14 à 30 tonnes) équipées de godet de terrassement, godet de curage ou marteau brise-roche (BRH).',
    detailedParagraph:
      'Pour les chantiers de gros œuvre, les terrassements profonds et l’extraction lourde (كراء بوكلان) à Casablanca, dans la Province de Berrechid, la Province de Settat et la région d’El Jadida / Jorf Lasfar, une pelle hydraulique fiable est indispensable. Nous mettons à votre disposition des pelles Poclain et Caterpillar sur chenilles ou sur pneus prêtes à travailler immédiatement, avec porte-char disponible pour un transfert rapide sur votre site.',
    faq: [
      {
        question: 'Proposez-vous des pelles Poclain sur chenilles et sur pneus avec BRH ?',
        answer:
          'Oui, nous disposons de pelles hydrauliques sur chenilles et sur pneus de 14 à plus de 30 tonnes (Caterpillar, Poclain, JCB) équipées soit de godets d’excavation, soit de marteaux brise-roche (BRH) pour le déroctage.'
      },
      {
        question: 'Comment se passe le transport (porte-char) de la pelle Poclain jusqu’au chantier ?',
        answer:
          'Lors de votre appel au +212 718-187543, notre dispatching sélectionne la pelle mécanique la plus proche de votre commune (Casablanca, Berrechid, Settat, Had Soualem ou El Jadida) afin de réduire au minimum le temps et le coût de transfert par porte-char.'
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
    description:
      'Chariots télescopiques Manitou disponibles de 12m à 21m (MT 1440, MT 1840, rotatifs ou fixes) et chariots élévateurs Clark industriels, avec ou sans chauffeur.',
    detailedParagraph:
      'Optimisez le levage et la manutention sur vos chantiers et sites industriels dans toute la région Casablanca-Settat (Casablanca, Berrechid, Had Soualem, Settat, El Jadida et Jorf Lasfar) grâce à notre flotte de chariots télescopiques Manitou (12m à 21m) et chariots élévateurs Clark. Disponibles à la journée, à la semaine ou au mois, avec ou sans chauffeur.',
    faq: [
      {
        question: 'Quelles hauteurs de Manitou sont disponibles à la location ?',
        answer:
          'Nous proposons des chariots télescopiques Manitou de 12m, 14m, 18m et 21m (modèles fixes MT et rotatifs MRT), ainsi que des chariots élévateurs industriels Clark de différentes capacités.'
      },
      {
        question: 'Peut-on louer un Manitou ou un Clark à la journée ou au mois ?',
        answer:
          'Oui, nous proposons des formules souples adaptées aux urgences ponctuelles (location à la journée avec chauffeur) comme aux chantiers industriels longue durée (location à la semaine ou au mois).'
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
    description:
      'Location de foreuse de puits d’eau (حفير البير) par forage rotatif et marteau fond de trou pour particuliers, exploitations agricoles et industriels, ainsi que foreuse horizontale et tarière pour poteaux.',
    detailedParagraph:
      'Que vous ayez besoin d’un forage de puits d’eau (حفير البير) pour alimenter une exploitation agricole dans la Chaouia (Province de Settat, Province de Berrechid) ou les Doukkala (Région d’El Jadida, Azemmour, Bir Jdid, Chtouka), d’un forage horizontal sous chaussée à Casablanca ou d’une tarière pour planter des poteaux, nous mobilisons l’atelier de forage adapté à la géologie exacte de votre terrain.',
    faq: [
      {
        question: 'Quels types de forage proposez-vous (puits d’eau, horizontal, poteaux) ?',
        answer:
          'Nous couvrons 3 besoins distincts : 1) Le forage de puits d’eau (حفير البير) à grande profondeur avec tubage, 2) Le forage horizontal pour passer des câbles/canalisations sous une route sans casser le goudron, et 3) La tarière pour les trous de poteaux et arbres.'
      },
      {
        question: 'Intervenez-vous sur les terrains agricoles et zones rurales de Casablanca-Settat ?',
        answer:
          'Oui, nos camions et ateliers de forage sur chenilles accèdent à tous types de terrains agricoles, fermes, villas et chantiers BTP sur toute la région Casablanca-Settat : Settat, Berrechid, El Jadida, Had Soualem, Bir Jdid, Chtouka, Azemmour et périphérie de Casablanca.'
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
  geoPosition: string;
  geoPlacename: string;
  machine?: MachineConfig;
  city?: CityConfig;
  jsonLd: Record<string, unknown>;
}

const BASE_URL = 'https://www.chantierurgence.com';
const PHONE = '+212718187543';

function buildFullRegionalAreaServed() {
  return [
    {
      '@type': 'AdministrativeArea',
      name: 'Région Casablanca-Settat',
      addressCountry: 'MA'
    },
    {
      '@type': 'City',
      name: 'Casablanca'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Province de Berrechid'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Province de Settat'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Province d’El Jadida'
    },
    {
      '@type': 'GeoCircle',
      name: 'Zone d’intervention Grand Casablanca, Berrechid, Settat & El Jadida',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 33.3600,
        longitude: -7.8000
      },
      geoRadius: '120000'
    },
    ...CITIES.filter((c) => c.schemaType !== 'AdministrativeArea').map((c) => ({
      '@type': c.schemaType,
      name: c.name
    }))
  ];
}

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

  // Case 1: Specific Machine + Specific City/Province/Region
  if (matchedMachine && matchedCity) {
    const canonicalUrl = `${BASE_URL}/${matchedMachine.slug}/${matchedCity.slug}`;
    const title = `${matchedMachine.name} à ${matchedCity.name} | Urgence 24/7 ChantierUrgence`;
    const description = `${matchedMachine.name} à ${matchedCity.name} (${matchedMachine.arabicTag}) — Région Casablanca-Settat. Intervention rapide en 10 min avec ou sans chauffeur (${matchedCity.nearbyAreas.slice(0, 3).join(', ')}). Tél : +212 718-187543.`;
    const h1Main = `${matchedMachine.name} à ${matchedCity.name}`;
    const h1Sub = `Disponibilité immédiate 24/7 pour vos chantiers à ${matchedCity.name} et ${matchedCity.nearbyAreas.slice(0, 3).join(', ')} (${matchedMachine.brands}) — Mise en relation en 10 minutes.`;

    const cityAreaServed = [
      {
        '@type': matchedCity.schemaType,
        name: matchedCity.name
      },
      {
        '@type': 'AdministrativeArea',
        name: matchedCity.region
      },
      {
        '@type': 'GeoCircle',
        name: `Rayon d'intervention ${matchedMachine.shortName} autour de ${matchedCity.name}`,
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: matchedCity.lat,
          longitude: matchedCity.lng
        },
        geoRadius: String(matchedCity.radiusMeters)
      },
      ...matchedCity.nearbyAreas.map((area) => ({ '@type': 'Place', name: area }))
    ];

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
            addressRegion: 'Casablanca-Settat',
            addressCountry: 'MA'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: matchedCity.lat,
            longitude: matchedCity.lng
          },
          serviceArea: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: matchedCity.lat,
              longitude: matchedCity.lng
            },
            geoRadius: String(matchedCity.radiusMeters)
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59'
          },
          areaServed: cityAreaServed,
          serviceType: [
            matchedMachine.serviceType,
            `${matchedMachine.name} ${matchedCity.name}`,
            `${matchedMachine.shortName} Casablanca-Settat`
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${matchedMachine.name} à ${matchedCity.name}`,
            itemListElement: [
              {
                '@type': 'Offer',
                areaServed: cityAreaServed,
                itemOffered: {
                  '@type': 'Service',
                  name: `${matchedMachine.name} à ${matchedCity.name}`,
                  serviceType: matchedMachine.serviceType,
                  provider: {
                    '@type': 'HomeAndConstructionBusiness',
                    name: 'ChantierUrgence',
                    telephone: PHONE
                  },
                  areaServed: cityAreaServed,
                  description: `${matchedMachine.description} Intervention rapide à ${matchedCity.name} (${matchedCity.region}) et communes avoisinantes.`
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
              text: `${q.answer} Service disponible 24/7 à ${matchedCity.name} et dans toute la région Casablanca-Settat.`
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
      geoPosition: `${matchedCity.lat};${matchedCity.lng}`,
      geoPlacename: `${matchedCity.name}, Casablanca-Settat, Maroc`,
      machine: matchedMachine,
      city: matchedCity,
      jsonLd
    };
  }

  // Case 2: Specific Machine across all of Casablanca-Settat
  if (matchedMachine && !matchedCity) {
    const canonicalUrl = `${BASE_URL}/${matchedMachine.slug}`;
    const title = `${matchedMachine.name} | Casablanca, Berrechid, Settat, El Jadida & Had Soualem`;
    const description = `${matchedMachine.name} (${matchedMachine.arabicTag}) disponible en 10 min dans la région Casablanca-Settat : Casablanca, Province de Berrechid, Province de Settat, El Jadida et Had Soualem. Tél : +212 718-187543.`;
    const h1Main = matchedMachine.heroTitle;
    const h1Sub = `${matchedMachine.name} (${matchedMachine.brands}) disponible immédiatement sur Casablanca, Had Soualem, Province de Berrechid, Province de Settat, Région d’El Jadida et Jorf Lasfar.`;

    const fullAreaServed = buildFullRegionalAreaServed();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['HomeAndConstructionBusiness', 'EmergencyService'],
          '@id': `${canonicalUrl}#business`,
          name: `ChantierUrgence — ${matchedMachine.name} (Casablanca-Settat)`,
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
          serviceArea: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 33.3600,
              longitude: -7.8000
            },
            geoRadius: '120000'
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59'
          },
          areaServed: fullAreaServed,
          serviceType: [matchedMachine.serviceType, `${matchedMachine.name} Casablanca-Settat`],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${matchedMachine.name} — Région Casablanca-Settat`,
            itemListElement: CITIES.map((c) => ({
              '@type': 'Offer',
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: c.lat,
                  longitude: c.lng
                },
                geoRadius: String(c.radiusMeters)
              },
              itemOffered: {
                '@type': 'Service',
                name: `${matchedMachine.name} à ${c.name}`,
                url: `${BASE_URL}/${matchedMachine.slug}/${c.slug}`,
                areaServed: { '@type': c.schemaType, name: c.name },
                description: `${matchedMachine.description} Intervention immédiate à ${c.name} (${c.region}).`
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
      geoPosition: '33.4111;-7.8425',
      geoPlacename: 'Casablanca-Settat, Maroc',
      machine: matchedMachine,
      jsonLd
    };
  }

  // Case 3: Default Home Page (/)
  const canonicalUrl = `${BASE_URL}/`;
  const title = 'Location Tractopelle, JCB, Poclain, Manitou & Foreuse | Casablanca-Settat, El Jadida, Berrechid';
  const description =
    "Location d'urgence 24/7 d'engins BTP (Tractopelle JCB, Poclain, Manitou, Clark, Foreuse de puits) dans la région Casablanca-Settat : Casablanca, Had Soualem, Province de Berrechid, Province de Settat et Région d'El Jadida. Tél : +212 718-187543.";
  const h1Main = 'Machine en panne dans votre chantier ?';
  const h1Sub =
    "Location d'urgence : Tractopelle & JCB, Poclain, Manitou, Clark, Foreuse de puits ou Caterpillar.";

  const fullAreaServed = buildFullRegionalAreaServed();

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
        description:
          "Plateforme de location d'urgence et dispatching d'engins BTP dans la région Casablanca-Settat (Casablanca, Province de Berrechid, Province de Settat, Région d'El Jadida, Had Soualem, Jorf Lasfar) : Location Tractopelle & JCB, Location Poclain & Caterpillar, Location Manitou & Clark, et Location Foreuse de puits.",
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
        serviceArea: [
          {
            '@type': 'GeoCircle',
            name: 'Couverture BTP Région Casablanca-Settat (Casablanca, Berrechid, Settat, El Jadida)',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 33.3600,
              longitude: -7.8000
            },
            geoRadius: '120000'
          },
          ...CITIES.map((c) => ({
            '@type': 'GeoCircle',
            name: `Zone d'intervention ${c.name}`,
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: c.lat,
              longitude: c.lng
            },
            geoRadius: String(c.radiusMeters)
          }))
        ],
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59'
        },
        areaServed: fullAreaServed,
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
          name: 'Catalogue Location Engins de Chantier BTP — Région Casablanca-Settat',
          itemListElement: MACHINES.map((m) => ({
            '@type': 'Offer',
            areaServed: fullAreaServed,
            itemOffered: {
              '@type': 'Service',
              name: m.name,
              url: `${BASE_URL}/${m.slug}`,
              areaServed: fullAreaServed,
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
            name: 'Quelles régions et provinces couvrez-vous pour la location de Tractopelle, Poclain, Manitou et Foreuse ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Notre service de dispatching d'urgence couvre toute la région Casablanca-Settat : Casablanca, la Province de Berrechid (Berrechid, Had Soualem, Sidi Rahal, Deroua, El Gara), la Province de Settat (Settat, Ben Ahmed, El Borouj) et la Région d'El Jadida (El Jadida, Jorf Lasfar, Azemmour, Bir Jdid, Chtouka, Moulay Abdellah)."
            }
          },
          {
            '@type': 'Question',
            name: 'Quels engins de chantier sont disponibles à la location en urgence ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Nous proposons la location immédiate (en moins de 10 minutes) de Tractopelle JCB (3CX/4CX), Poclain et pelles hydrauliques Caterpillar sur chenilles ou pneus (avec godet ou BRH), chariots télescopiques Manitou (12m à 21m), chariots élévateurs Clark et foreuses de puits d'eau."
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
    geoPosition: '33.4111;-7.8425',
    geoPlacename: 'Casablanca-Settat, Maroc',
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
