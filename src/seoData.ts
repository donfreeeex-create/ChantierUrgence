export interface CityConfig {
  slug: string;
  name: string;
  titleLoc: string;
  locative: string;
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
  titlePrefix: string;
  shortName: string;
  arabicTag: string;
  heroTitle: string;
  h2Title: string;
  ctaLabel: string;
  serviceType: string;
  brands: string;
  specs: string[];
  useCases: string[];
  semanticKeywords: string[];
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
    titleLoc: 'Casablanca-Settat',
    locative: 'en Région Casablanca-Settat',
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
    titleLoc: 'à Had Soualem',
    locative: 'à Had Soualem',
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
    titleLoc: 'à Berrechid',
    locative: 'à Berrechid',
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
    titleLoc: 'Prov. Berrechid',
    locative: 'dans la Province de Berrechid',
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
    titleLoc: 'à Settat',
    locative: 'à Settat',
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
    titleLoc: 'Province Settat',
    locative: 'dans la Province de Settat',
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
    titleLoc: 'à El Jadida',
    locative: 'à El Jadida',
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
    titleLoc: 'Région El Jadida',
    locative: 'dans la Région d’El Jadida',
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
    titleLoc: 'à Jorf Lasfar',
    locative: 'à Jorf Lasfar',
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
    titleLoc: 'à Bir Jdid',
    locative: 'à Bir Jdid',
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
    titleLoc: 'à Azemmour',
    locative: 'à Azemmour',
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
    titleLoc: 'à Chtouka',
    locative: 'à Chtouka',
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
    titleLoc: 'à Sidi Rahal',
    locative: 'à Sidi Rahal',
    schemaType: 'City',
    region: 'Province de Berrechid (Casablanca-Settat)',
    lat: 33.4719,
    lng: -7.9531,
    radiusMeters: 28000,
    industrialNote:
      'Sidi Rahal Chatai, Dar Bouazza, les résidences balnéaires, les projets touristiques et les terrains en construction sur le littoral atlantique',
    nearbyAreas: ['Had Soualem', 'Bir Jdid', 'Dar Bouazza', 'Berrechid']
  }
];

export const MACHINES: MachineConfig[] = [
  {
    slug: 'location-tractopelle',
    id: 'tractopelle',
    name: 'Location Tractopelle & JCB',
    titlePrefix: 'Location Tractopelle JCB',
    shortName: 'Tractopelle & JCB',
    arabicTag: 'حفير الساس',
    heroTitle: 'Location Tractopelle & JCB Maroc (Location Trax)',
    h2Title: 'Location Tractopelle, JCB & Location Trax Maroc — Location Trax avec Chauffeur',
    ctaLabel: 'Demander un Tractopelle JCB',
    serviceType: 'Location Tractopelle & JCB',
    brands: 'JCB 3CX, JCB 4CX, Caterpillar 428 / 432, CASE (location trax / location trax maroc)',
    specs: [
      'Service complet de jcb locations, location jcb et jcb location (3CX / 4CX) ainsi que location telescopique jcb',
      'Formules flexibles : location de tractopelle avec chauffeur, location tractopelle particulier et tractopelle location particulier',
      'Bras rétro extensible avec godets de 30 à 80 cm et Marteau Brise-Roche Hydraulique (BRH)',
      'Tarification claire : location tractopelle prix étudié et louer un tractopelle prix compétitif à la journée ou au mois'
    ],
    useCases: [
      'Ouverture de fondations et fouilles en rigoles (حفير الساس) avec tractopelle à louer immédiatement',
      'Possibilité de louer tractopelle, louer un tractopelle ou louer une tractopelle pour tranchées et assainissement',
      'Nivellement de terrain, décapage, remblayage et location trax (location trax maroc) pour chargement de camions',
      'Dépannage urgent 24/7 pour tout besoin de location tractopelle maroc, location jcb maroc et location trax maroc'
    ],
    semanticKeywords: [
      'jcb locations',
      'location jcb maroc',
      'location tractopelle maroc',
      'location jcb',
      'jcb location',
      'location telescopique jcb',
      'location tractopelle',
      'louer tractopelle',
      'location tractopelle particulier',
      'louer un tractopelle',
      'location de tractopelle avec chauffeur',
      'louer une tractopelle',
      'tractopelle location particulier',
      'tractopelle à louer',
      'location tractopelle prix',
      'louer un tractopelle prix',
      'location trax',
      'location trax maroc'
    ],
    description:
      'Spécialiste en location tractopelle maroc, location jcb maroc et location trax maroc : tractopelle à louer (3CX, 4CX), location trax et location de tractopelle avec chauffeur pour terrassement et fondations (حفير الساس).',
    detailedParagraph:
      'Vous cherchez une location tractopelle, une location jcb ou une location trax maroc fiable ? Notre plateforme de jcb locations (jcb location 3CX/4CX, location telescopique jcb et location trax) vous permet de louer tractopelle rapidement. Que ce soit pour une location tractopelle particulier (tractopelle location particulier) ou pour un grand chantier BTP souhaitant louer un tractopelle ou louer une tractopelle en urgence, nous proposons chaque tractopelle à louer en formule location de tractopelle avec chauffeur. Contactez-nous pour connaître notre location tractopelle prix et louer un tractopelle prix avantageux pour votre location trax et location trax maroc en région Casablanca-Settat.',
    faq: [
      {
        question: 'Quel est le tarif pour une location tractopelle prix, louer un tractopelle prix ou une location trax maroc ?',
        answer:
          'Le tarif pour louer un tractopelle prix (location tractopelle prix ou location trax) dépend de la durée (journée ou mois) et des accessoires (godet ou BRH). Notre service de location tractopelle maroc, location jcb maroc et location trax maroc garantit une location de tractopelle avec chauffeur sans frais d’avance.'
      },
      {
        question: 'Proposez-vous la location tractopelle particulier, la location trax et la location trax maroc en urgence ?',
        answer:
          'Oui, nous assurons aussi bien la location tractopelle particulier (tractopelle location particulier) que les prestations BTP pour louer tractopelle, louer une tractopelle, location jcb (jcb location / jcb locations), location telescopique jcb, location trax et location trax maroc avec un tractopelle à louer disponible immédiatement.'
      }
    ]
  },
  {
    slug: 'location-poclain',
    id: 'poclain',
    name: 'Location Poclain & Pelle Hydraulique',
    titlePrefix: 'Location Poclain',
    shortName: 'Poclain & Pelle',
    arabicTag: 'كراء بوكلان',
    heroTitle: 'Location Poclain Maroc — Poclain Caterpillar',
    h2Title: 'Location Poclain Maroc — Caterpillar Poclain et Pelles Hydrauliques',
    ctaLabel: 'Demander une Pelle Poclain',
    serviceType: 'Location Poclain & Pelle Hydraulique',
    brands: 'Poclain Caterpillar, Caterpillar Poclain (320, 323, 330), JCB, Komatsu, Hyundai',
    specs: [
      'Service rapide de location poclain et location poclain maroc sur chenilles ou sur pneus (14T à 30T+)',
      'Flotte haute performance poclain caterpillar et caterpillar poclain pour terrains rocheux et grands chantiers',
      'Équipements complets : godet grand volume, godet de curage et marteau brise-roche hydraulique (BRH lourd)',
      'Opérateurs qualifiés pour gros œuvre, déroctage, excavation profonde et démolition'
    ],
    useCases: [
      'Terrassement de grande masse et excavation de sous-sols ou parkings en location poclain (كراء بوكلان)',
      'Déroctage intensif au BRH avec engin caterpillar poclain / poclain caterpillar sur sols durs',
      'Démolition industrielle, ouverture de tranchées VRD et travaux d’assainissement profond',
      'Mise à disposition immédiate avec porte-char pour toute demande de location poclain maroc'
    ],
    semanticKeywords: [
      'location poclain',
      'caterpillar poclain',
      'poclain caterpillar',
      'location poclain maroc'
    ],
    description:
      'Référence en location poclain et location poclain maroc : pelles hydrauliques sur chenilles ou pneus (poclain caterpillar et caterpillar poclain de 14 à 30 tonnes) avec godet ou BRH (كراء بوكلان).',
    detailedParagraph:
      'Pour vos chantiers de gros œuvre, d’excavation profonde et d’extraction lourde (كراء بوكلان), notre service de location poclain et location poclain maroc mobilise rapidement la pelle mécanique la plus proche. Nous disposons d’une large gamme de machines poclain caterpillar et caterpillar poclain (sur chenilles ou sur pneus, équipées de godets ou marteau brise-roche BRH) prêtes à intervenir avec chauffeur expérimenté et transfert rapide par porte-char.',
    faq: [
      {
        question: 'Proposez-vous la location poclain maroc avec des modèles poclain caterpillar ?',
        answer:
          'Oui, notre service de location poclain et location poclain maroc met à votre disposition des pelles sur chenilles et sur pneus de type caterpillar poclain et poclain caterpillar (14T à 30T+) équipées de godets d’excavation ou de marteau BRH.'
      },
      {
        question: 'Comment réserver une location poclain en urgence sur mon chantier ?',
        answer:
          'Appelez directement le +212 718-187543 : notre dispatching identifie le poclain caterpillar (caterpillar poclain) disponible le plus proche pour assurer votre location poclain avec un transfert porte-char immédiat.'
      }
    ]
  },
  {
    slug: 'location-manitou',
    id: 'manitou',
    name: 'Location Manitou & Chariot Élévateur Clark',
    titlePrefix: 'Location Manitou',
    shortName: 'Manitou & Clark',
    arabicTag: 'مانيتو وكلارك',
    heroTitle: 'Location Manitou Maroc & Location Clark',
    h2Title: 'Location Manitou Télescopique (17m, 18m, 21m), Manuscopique & Location Clark',
    ctaLabel: 'Réserver un Manitou / Clark',
    serviceType: 'Location Manitou & Chariot Élévateur',
    brands: 'Manitou (chariot telescopique 17 m, manitou telescopique 18m, manitou rotatif 21m), Clark',
    specs: [
      'Large choix : manitou télescopique 17m (chariot telescopique 17 m), manitou telescopique 18m (manitou télescopique 18m) et manitou rotatif 21m',
      'Service complet de location manitou, manitou location, location manuscopique et location chariot manuscopique',
      'Formules souples : location manitou avec chauffeur ou sans chauffeur, et location clark (chariots élévateurs 2,5T à 7T)',
      'Devis immédiat pour votre prix location manitou en location manitou maroc à la journée, semaine ou mois'
    ],
    useCases: [
      'Levage de charpentes et bardage via location manitou telescopique, location de manitou telescopique ou location manitou rotatif',
      'Manutention de palettes sur chantier grâce à un manitou a louer (louer un manitou / louer manitou / location d un manitou)',
      'Intervention express pour toute recherche de location manitou autour de moi, location de telescopique manitou ou location telescopique manitou',
      'Logistique d’usine et chargement de camions avec manitou télescopique location et location clark'
    ],
    semanticKeywords: [
      'location manitou',
      'manitou location',
      'prix location manitou',
      'location manuscopique',
      'location manitou maroc',
      'location manitou avec chauffeur',
      'location manitou rotatif',
      'manitou télescopique location',
      'manitou a louer',
      'location manitou autour de moi',
      'location manitou telescopique',
      'location de telescopique manitou',
      'location d un manitou',
      'louer un manitou',
      'louer manitou',
      'chariot telescopique 17 m',
      'location chariot manuscopique',
      'location de manitou telescopique',
      'location telescopique manitou',
      'manitou rotatif 21m',
      'manitou telescopique 18m',
      'manitou télescopique 17m',
      'manitou télescopique 18m',
      'location clark'
    ],
    description:
      'Expert en location manitou maroc, manitou location et location clark : manitou télescopique 17m, manitou telescopique 18m, manitou rotatif 21m et location manuscopique avec chauffeur.',
    detailedParagraph:
      'Besoin d’une location manitou (manitou location) ou d’une location clark immédiate ? Notre réseau de location manitou maroc répond rapidement à toute demande de location manitou autour de moi. Que vous souhaitiez louer un manitou (louer manitou / location d un manitou) ou trouver un manitou a louer en formule location manitou avec chauffeur, nous proposons la location manitou telescopique (location de manitou telescopique, location de telescopique manitou, location telescopique manitou, manitou télescopique location) ainsi que la location manuscopique et location chariot manuscopique. Choisissez la hauteur idéale : chariot telescopique 17 m (manitou télescopique 17m), manitou telescopique 18m (manitou télescopique 18m) ou location manitou rotatif avec manitou rotatif 21m, au meilleur prix location manitou.',
    faq: [
      {
        question: 'Quelles hauteurs proposez-vous en location manitou telescopique et location manitou rotatif ?',
        answer:
          'Notre service de location manitou maroc (manitou location et manitou télescopique location) dispose de modèles chariot telescopique 17 m (manitou télescopique 17m), manitou telescopique 18m (manitou télescopique 18m) et manitou rotatif 21m, ainsi que la location manuscopique, location chariot manuscopique et location clark.'
      },
      {
        question: 'Comment obtenir le meilleur prix location manitou pour louer un manitou autour de moi ?',
        answer:
          'Pour toute recherche de location manitou autour de moi, appelez le +212 718-187543. Nous vous communiquons immédiatement le prix location manitou pour louer manitou (location d un manitou / manitou a louer / location de telescopique manitou / location telescopique manitou / location de manitou telescopique) en formule location manitou avec chauffeur.'
      }
    ]
  },
  {
    slug: 'location-foreuse-de-puits',
    id: 'forage',
    name: 'Location Foreuse de Puits (Forage d’eau)',
    titlePrefix: 'Location Foreuse Puits',
    shortName: 'Foreuse de Puits',
    arabicTag: 'حفر الابار • حفارة ابار',
    heroTitle: 'Location Foreuse de Puits, Sondeuse & Forage (حفر الابار)',
    h2Title: 'Location Foreuse de Puits, Foreuse Horizontale, Hydraulique & Sondeuse (حفارة ابار)',
    ctaLabel: 'Commander une Foreuse',
    serviceType: 'Location Foreuse de Puits',
    brands: 'Foreuse puits d eau, foreuse hydraulique, foreuse horizontale, sondeuse et tarière (حفر الابار / حفارة ابار)',
    specs: [
      'Service complet de location foreuse, foreuse de puits location, location de foreuse de puits et location Sondeuse (حفر الابار / حفارة ابار)',
      'Ateliers spécialisés en location de foreuse pour puit, location foreuse de puit et foreuse puits d eau (rotatif et marteau fond de trou)',
      'Équipements haute précision pour location foreuse hydraulique (foreuse hydraulique location) et location foreuse horizontale (foreuse horizontale location)',
      'Machines dédiées à la location foreuse terre et foreuse à trou pour poteau location (clôtures, vergers, lignes électriques)'
    ],
    useCases: [
      'Forage profond et sondage d’eau (حفر الابار / حفير البير) avec حفارة ابار, foreuse puits d eau et location Sondeuse',
      'Travaux de location de foreuse de puits (location foreuse de puit / location de foreuse pour puit / foreuse de puits location) pour agriculteurs et villas',
      'Passage de conduites et câbles sous route sans tranchée grâce à la location foreuse horizontale (foreuse horizontale location)',
      'Forage de pieux et clôtures via location foreuse hydraulique (foreuse hydraulique location), location foreuse terre et foreuse à trou pour poteau location'
    ],
    semanticKeywords: [
      'location foreuse',
      'foreuse de puits location',
      'foreuse horizontale location',
      'foreuse hydraulique location',
      'foreuse à trou pour poteau location',
      'location de foreuse de puits',
      'location de foreuse pour puit',
      'location foreuse de puit',
      'location foreuse horizontale',
      'location foreuse hydraulique',
      'location foreuse terre',
      'foreuse puits d eau',
      'location Sondeuse',
      'حفر الابار',
      'حفارة ابار'
    ],
    description:
      'Spécialiste en location foreuse, location de foreuse de puits (foreuse puits d eau, حفر الابار, حفارة ابار), location Sondeuse, location foreuse horizontale et foreuse à trou pour poteau location.',
    detailedParagraph:
      'Notre plateforme assure la location foreuse et la location de foreuse de puits (foreuse de puits location, location de foreuse pour puit, location foreuse de puit) avec mobilisation rapide d’une foreuse puits d eau ou d’une location Sondeuse pour tous vos projets de حفر الابار (avec حفارة ابار performante). Nous couvrons également la location foreuse hydraulique (foreuse hydraulique location), la location foreuse horizontale (foreuse horizontale location) pour le passage de canalisations sous chaussée, ainsi que la location foreuse terre et la foreuse à trou pour poteau location pour vos clôtures, poteaux électriques et plantations agricoles.',
    faq: [
      {
        question: 'Quels équipements proposez-vous en location de foreuse de puits et location Sondeuse (حفر الابار) ?',
        answer:
          'Nous proposons la location foreuse complète : foreuse de puits location (location foreuse de puit / location de foreuse pour puit / foreuse puits d eau) et location Sondeuse équipée d’une حفارة ابار moderne pour réussir vos travaux de حفر الابار sur tous terrains.'
      },
      {
        question: 'Faites-vous aussi la location foreuse horizontale et la foreuse à trou pour poteau location ?',
        answer:
          'Oui, en plus du forage d’eau, nous assurons la location foreuse horizontale (foreuse horizontale location), la location foreuse hydraulique (foreuse hydraulique location), la location foreuse terre et la foreuse à trou pour poteau location.'
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
const BUSINESS_ID = 'https://www.chantierurgence.com/business';
const PHONE = '+212718187543';

function buildFullRegionalAreaServed() {
  return [
    {
      '@type': 'AdministrativeArea',
      name: 'Région Casablanca-Settat',
      containedInPlace: {
        '@type': 'Country',
        name: 'Maroc'
      }
    },
    {
      '@type': 'City',
      name: 'Casablanca',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Région Casablanca-Settat'
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Province de Berrechid',
      containedInPlace: {
        '@type': 'Country',
        name: 'Maroc'
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Province de Settat',
      containedInPlace: {
        '@type': 'Country',
        name: 'Maroc'
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Province d’El Jadida',
      containedInPlace: {
        '@type': 'Country',
        name: 'Maroc'
      }
    },
    {
      '@type': 'GeoCircle',
      name: 'Zone d’intervention Région Casablanca-Settat, Berrechid, Settat & El Jadida',
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

  // Case 1: Specific Machine + Specific City/Province/Region (/location-*/*)
  if (matchedMachine && matchedCity) {
    const canonicalUrl = `${BASE_URL}/${matchedMachine.slug}/${matchedCity.slug}`;
    // Strictly 50–60 chars max:
    const title = `${matchedMachine.titlePrefix} ${matchedCity.titleLoc} | ChantierUrgence`;
    // Strictly 130–155 chars with CTA & phone number near the beginning:
    const rawDesc = `Appelez le +212 718-187543 : ${matchedMachine.titlePrefix} ${matchedCity.locative}. Dispo 24/7 avec chauffeur, intervention rapide et zéro avance.`;
    const description =
      rawDesc.length < 130
        ? `Appelez le +212 718-187543 : ${matchedMachine.titlePrefix} ${matchedCity.locative}. Engin BTP disponible 24/7 avec chauffeur, dépannage rapide et zéro avance.`
        : rawDesc;

    const h1Main = `${matchedMachine.name} ${matchedCity.locative}`;
    const h1Sub = `Disponibilité immédiate 24/7 pour vos chantiers ${matchedCity.locative} et ${matchedCity.nearbyAreas.slice(0, 3).join(', ')} (${matchedMachine.brands}) — Mise en relation rapide et directe.`;

    const cityAreaServed = [
      {
        '@type': matchedCity.schemaType,
        name: matchedCity.name,
        ...(matchedCity.schemaType === 'AdministrativeArea'
          ? { containedInPlace: { '@type': 'Country', name: 'Maroc' } }
          : {})
      },
      {
        '@type': 'AdministrativeArea',
        name: matchedCity.region,
        containedInPlace: {
          '@type': 'Country',
          name: 'Maroc'
        }
      },
      {
        '@type': 'GeoCircle',
        name: `Rayon d'intervention ${matchedMachine.shortName} (${matchedCity.name})`,
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
          '@id': BUSINESS_ID,
          name: 'ChantierUrgence',
          url: `${BASE_URL}/`,
          image: `${BASE_URL}/favicon.png`,
          logo: `${BASE_URL}/favicon.png`,
          telephone: PHONE,
          priceRange: '$$',
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
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59'
          },
          areaServed: cityAreaServed
        },
        {
          '@type': 'Service',
          '@id': `${canonicalUrl}#service`,
          name: `${matchedMachine.name} ${matchedCity.locative}`,
          url: canonicalUrl,
          serviceType: matchedMachine.serviceType,
          description: `${matchedMachine.description} Intervention rapide ${matchedCity.locative} (${matchedCity.region}).`,
          provider: {
            '@id': BUSINESS_ID
          },
          areaServed: cityAreaServed,
          offers: {
            '@type': 'Offer',
            url: canonicalUrl,
            priceCurrency: 'MAD',
            availability: 'https://schema.org/InStock',
            areaServed: {
              '@type': matchedCity.schemaType,
              name: matchedCity.name
            }
          }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: matchedMachine.name, item: `${BASE_URL}/${matchedMachine.slug}` },
            { '@type': 'ListItem', position: 3, name: `${matchedMachine.shortName} ${matchedCity.locative}`, item: canonicalUrl }
          ]
        },
        {
          '@type': 'FAQPage',
          mainEntity: matchedMachine.faq.map((q) => ({
            '@type': 'Question',
            name: `${q.question} (${matchedCity.name})`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${q.answer} Service disponible 24/7 ${matchedCity.locative} et dans toute la région Casablanca-Settat.`
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

  // Case 2: Specific Machine Hub Page (/location-*)
  if (matchedMachine && !matchedCity) {
    const canonicalUrl = `${BASE_URL}/${matchedMachine.slug}`;
    // Strictly 50–58 chars:
    const title = `${matchedMachine.titlePrefix} au Maroc 24/7 | ChantierUrgence`;
    // Strictly 132–140 chars with phone number near the beginning:
    const description = `Appelez le +212 718-187543 : ${matchedMachine.titlePrefix} à Had Soualem, Berrechid, Settat et El Jadida. Dispo 24/7 avec chauffeur, zéro avance.`;
    const h1Main = matchedMachine.heroTitle;
    const h1Sub = `${matchedMachine.name} (${matchedMachine.brands}) disponible immédiatement sur Had Soualem, Province de Berrechid, Province de Settat, Région d’El Jadida et Jorf Lasfar.`;

    const fullAreaServed = buildFullRegionalAreaServed();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['HomeAndConstructionBusiness', 'EmergencyService'],
          '@id': BUSINESS_ID,
          name: 'ChantierUrgence',
          url: `${BASE_URL}/`,
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
          serviceType: [matchedMachine.serviceType, `${matchedMachine.name} Casablanca-Settat`]
        },
        {
          '@type': 'Service',
          '@id': `${canonicalUrl}#service`,
          name: matchedMachine.name,
          url: canonicalUrl,
          serviceType: matchedMachine.serviceType,
          description: matchedMachine.description,
          provider: {
            '@id': BUSINESS_ID
          },
          areaServed: fullAreaServed,
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
                name: `${matchedMachine.name} ${c.locative}`,
                url: `${BASE_URL}/${matchedMachine.slug}/${c.slug}`,
                areaServed: { '@type': c.schemaType, name: c.name },
                description: `${matchedMachine.description} Intervention immédiate ${c.locative}.`
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
  // Strictly 57 chars:
  const title = 'Location Tractopelle, Poclain & Manitou | ChantierUrgence';
  // Strictly 143 chars with phone number near the beginning:
  const description =
    'Appelez le +212 718-187543 : Location Tractopelle JCB, Poclain, Manitou et Foreuse de puits 24/7 à Berrechid, Settat, Had Soualem et El Jadida.';
  const h1Main = 'Machine en panne dans votre chantier ?';
  const h1Sub =
    "Location d'urgence : Tractopelle & JCB, Poclain, Manitou, Clark, Foreuse de puits ou Caterpillar.";

  const fullAreaServed = buildFullRegionalAreaServed();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['HomeAndConstructionBusiness', 'EmergencyService'],
        '@id': BUSINESS_ID,
        name: 'ChantierUrgence',
        url: canonicalUrl,
        image: `${BASE_URL}/favicon.png`,
        logo: `${BASE_URL}/favicon.png`,
        telephone: PHONE,
        priceRange: '$$',
        description:
          "Plateforme de location d'urgence et dispatching d'engins BTP dans la région Casablanca-Settat (Province de Berrechid, Province de Settat, Région d'El Jadida, Had Soualem, Jorf Lasfar) : Location Tractopelle & JCB, Location Poclain & Caterpillar, Location Manitou & Clark, et Location Foreuse de puits.",
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
            name: 'Couverture BTP Région Casablanca-Settat (Berrechid, Settat, El Jadida, Had Soualem)',
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
          'Location Trax',
          'Location Trax Maroc',
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
              '@id': `${BASE_URL}/${m.slug}#service`,
              name: m.name,
              url: `${BASE_URL}/${m.slug}`,
              provider: {
                '@id': BUSINESS_ID
              },
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
              text: "Notre service de dispatching d'urgence couvre toute la région Casablanca-Settat : la Province de Berrechid (Berrechid, Had Soualem, Sidi Rahal, Deroua, El Gara), la Province de Settat (Settat, Ben Ahmed, El Borouj) et la Région d'El Jadida (El Jadida, Jorf Lasfar, Azemmour, Bir Jdid, Chtouka, Moulay Abdellah)."
            }
          },
          {
            '@type': 'Question',
            name: 'Quels engins de chantier sont disponibles à la location en urgence ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Nous proposons la location immédiate de Tractopelle JCB (location jcb maroc, location trax, location trax maroc), Poclain et pelles hydrauliques (location poclain maroc, poclain caterpillar), chariots télescopiques Manitou (chariot telescopique 17 m, manitou telescopique 18m, manitou rotatif 21m, location clark) et foreuses de puits d'eau (location de foreuse de puits, location Sondeuse, حفر الابار)."
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
