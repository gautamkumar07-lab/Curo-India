export interface Project {
  id: string;
  name: string;
  category: 'residential' | 'commercial' | 'retail' | 'entertainment';
  status: 'Ready to Move' | 'Under Construction' | 'Upcoming';
  location: string;
  city: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  projectLogo?: string;
  reraId?: string;
  area: string;
  unitsOrFloors: string;
  handoverDate: string;
  priceStarting?: string;
  highlights: string[];
  amenities: {
    title: string;
    description: string;
    icon: string;
  }[];
  specifications: {
    category: string;
    details: string;
  }[];
  masterplanDetails?: string;
}

export interface Floorplan {
  id: string;
  projectId: string;
  projectName: string;
  unitType: string;
  carpetArea: string;
  superArea: string;
  balconyArea: string;
  bedrooms: number;
  bathrooms: number;
  facing: string;
  floor: string;
  estimatedPrice: string;
  description: string;
  specs: string[];
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const CURO_STATS = [
  { label: 'Years of Excellence', value: '38+', unit: 'Decades of Trust' },
  { label: 'Area Developed', value: '4.5M+', unit: 'Sq. Ft. Delivered' },
  { label: 'Under Development', value: '8.5M+', unit: 'Sq. Ft. Pipeline' },
  { label: 'Delighted Families', value: '5,000+', unit: 'Home & Shop Owners' },
];

export const CURO_PROJECTS: Project[] = [
  {
    id: 'curo-one',
    name: 'Curo One',
    category: 'residential',
    status: 'Under Construction',
    location: 'Mullapur Garibdas, New Chandigarh',
    city: 'New Chandigarh',
    tagline: 'Ultra-Luxury High-Rise Residences & Integrated Urban Living',
    description:
      'Curo One is a premier 10-acre landmark township located in Mullapur Garibdas, New Chandigarh. Featuring 8 architecturally iconic towers rising into the skyline, the development presents 576 meticulously designed residences ranging from smart 1 BHK studios to expansive 5 BHK palatial penthouses. With an exclusive G+2 35,000 sq.ft. designer clubhouse, Olympic-grade pool, and 70% open landscaped greenery, Curo One redefines royal North Indian living.',
    image: '/images/main-slider/slider1.jpg',
    gallery: [
      '/images/main-slider/slider1.jpg',
      '/images/homepage/ongoingitem-1.jpg',
      '/images/residence/ongoing/subthumb.jpg',
      '/images/commercial/ongoing/subthumb2.jpg',
    ],
    projectLogo: '/images/logo.png',
    reraId: 'PBRERA-SAS80-PR0063',
    area: '10 Acres Masterplan',
    unitsOrFloors: '8 Towers · 576 Residences',
    handoverDate: 'Phased Possession / 2026',
    priceStarting: '₹ 85 Lakhs onwards',
    highlights: [
      'Prime location just 5 minutes from Chandigarh Sector 38 and PGIMER Hospital',
      'Grand G+2 35,000 sq.ft. private clubhouse with luxury leisure facilities',
      'Unobstructed panoramic vistas of the majestic Shivalik mountain ranges',
      'Multi-tier 24x7 biometric security with boom barriers and IP surveillance',
      'RERA approved project ensuring statutory compliance and timely handover',
      'Dual covered car parking with EV rapid-charging infrastructure',
    ],
    amenities: [
      {
        title: 'G+2 Designer Clubhouse',
        description: '35,000 sq ft private club with infinity swimming pool, heated splash pool, and wellness spa.',
        icon: 'Award',
      },
      {
        title: 'Olympic Sports Deck',
        description: 'Floodlit lawn tennis court, half-basketball court, and indoor badminton arena.',
        icon: 'Activity',
      },
      {
        title: 'Double-Height Lobbies',
        description: 'Air-conditioned Italian marble entrance foyer with concierge and valet desk.',
        icon: 'Building',
      },
      {
        title: 'Jogging & Reflexology Trail',
        description: '1.2 km dedicated vehicle-free rubberized jogging track winding through scented gardens.',
        icon: 'Compass',
      },
      {
        title: '100% Green Power Backup',
        description: 'Continuous dual-source synchronized generators powering lifts, ACs, and common areas.',
        icon: 'Zap',
      },
      {
        title: 'Eco-Smart Conservation',
        description: 'Advanced rainwater percolation pits, STP recycled irrigation, and solar pathway illuminations.',
        icon: 'ShieldCheck',
      },
    ],
    specifications: [
      { category: 'Structure', details: 'Earthquake-resistant RCC framed structure compliant with Seismic Zone IV standards' },
      { category: 'Living & Dining', details: 'Imported high-luster vitrified Italian-style tiles, POP punning with Royal Acrylic Emulsion' },
      { category: 'Master Suites', details: 'Laminated wooden plank flooring, walk-in dressing space, sound-insulated UPVC fenestrations' },
      { category: 'Kitchen', details: 'Modular European cabinetry with polished Caesarstone quartz counters, chimney, and piped gas' },
      { category: 'Bathrooms', details: 'Anti-skid designer vitrified slabs with premium Kohler / Grohe CP fittings and glass shower enclosures' },
      { category: 'Balconies', details: 'Expansive 7-ft deep private terraces with clear toughened glass railings and weather-resistant decking' },
    ],
    masterplanDetails: 'Spanning 10 prime acres in New Chandigarh, the masterplan incorporates a central vehicular-free pedestrian boulevard flanked by residential towers T1 through T8, with the clubhouse and water body positioned at the core.',
  },
  {
    id: 'curo-high-street',
    name: 'Curo High Street',
    category: 'retail',
    status: 'Ready to Move',
    location: 'Urban Estate Phase 2, 66 Feet Road, Jalandhar',
    city: 'Jalandhar',
    tagline: 'European-Style Open-Air Retail, Gourmet Promenade & PVR Multiplex',
    description:
      'Spanning over 5 sprawling acres in Jalandhar’s prime Urban Estate Phase 2, Curo High Street is Punjab’s premier open-air European destination. Engineered with Spanish architectural arches, cobblestone avenues, 20-foot ground floor retail elevations, and an ambient Mist Paradise climate system, it accommodates over 120 global brands, flagship restaurants, standalone architectural brand domes, and a 5-screen PVR multiplex.',
    image: '/images/commercial/high-street/left-bg.jpg',
    gallery: [
      '/images/commercial/high-street/left-bg.jpg',
      '/images/commercial/high-street/slide7.png',
      '/images/commercial/high-street/slide6.png',
      '/images/homepage/ongoingitem-2.jpg',
      '/images/commercial/ongoing/subthumb1.jpg',
    ],
    projectLogo: '/images/commercial/high-street/logo.png',
    reraId: 'PBRERA-JAL-COM-0012',
    area: '5+ Acres · 350,000 Sq. Ft.',
    unitsOrFloors: 'G+2 European High Street Format',
    handoverDate: 'Fully Operational & Thriving',
    priceStarting: 'Commercial Leasing & Retail Ownership',
    highlights: [
      'Over 50% open green space with European fountains, outdoor cafes, and central plazas',
      '5-Screen PVR Cinemas multiplex with 4K laser projection and Atmos sound',
      'Iconic standalone dome architecture hosting international anchor brands like McDonald’s and KFC',
      'Elevated Air Walk glass bridges connecting upper retail levels and open-air bazaars',
      'Mist Paradise evaporative micro-climate cooling for pleasant year-round pedestrian shopping',
      'Multi-level parking accommodating over 1,200 vehicles with automated parking guidance',
    ],
    amenities: [
      {
        title: '5-Screen PVR Multiplex',
        description: 'Jalandhar’s favored cinematic haven featuring Gold Class luxury recliners and Dolby Atmos.',
        icon: 'Tv',
      },
      {
        title: 'Open-Air Spanish Plaza',
        description: 'Vibrant pedestrian walkways with cobblestone textures, ambient lighting, and musical fountains.',
        icon: 'Layers',
      },
      {
        title: 'VR & Bowling Arcade',
        description: 'Extensive entertainment hub with 8 bowling lanes, arcade simulators, and dedicated kids soft-play.',
        icon: 'Gamepad2',
      },
      {
        title: 'Air Walk Bridges',
        description: 'Futuristic glass-enclosed skywalks linking retail wings for seamless customer flow.',
        icon: 'MoveHorizontal',
      },
      {
        title: 'Gourmet Food Street',
        description: 'Curated mix of outdoor patio cafes, artisanal bakeries, microbreweries, and multi-cuisine restaurants.',
        icon: 'Utensils',
      },
      {
        title: 'High-Speed Escalators',
        description: 'All-weather escalators and capsule elevators ensuring high footfall to upper-level retail stores.',
        icon: 'ArrowUpRight',
      },
    ],
    specifications: [
      { category: 'Architecture', details: 'Spanish Neoclassical high-street facade with stucco finishes and ornamental balustrades' },
      { category: 'Retail Frontage', details: 'Full-height 20-ft frameless toughened glass store displays providing maximum brand visibility' },
      { category: 'Air Conditioning', details: 'Central energy-efficient VRV/VRF air conditioning for all covered retail and dining zones' },
      { category: 'Signage & Branding', details: 'Standardized uniform LED backlit tenant fascia zones engineered to international retail standards' },
      { category: 'Power Infrastructure', details: '3-tier automatic DG backup ensuring uninterrupted power supply 24 hours a day' },
    ],
  },
  {
    id: 'curo-square',
    name: 'Curo Square',
    category: 'commercial',
    status: 'Ready to Move',
    location: 'Gurdev Nagar, Ferozepur Road, Ludhiana',
    city: 'Ludhiana',
    tagline: 'Ludhiana’s Premier Commercial Mall & Retail Destination',
    description:
      'Situated in the heart of Ludhiana on prestigious Ferozepur Road, Curo Square is a landmark multi-level commercial hub. Blending shopping, fine dining, family entertainment, and corporate offices, Curo Square has served as a central retail pillar in the region for over a decade.',
    image: '/images/commercial/curosquare/left-bg.jpg',
    gallery: [
      '/images/commercial/curosquare/left-bg.jpg',
      '/images/commercial/compleated/subthumb.jpg',
    ],
    projectLogo: '/images/commercial/curosquare/logo.png',
    area: '180,000 Sq. Ft.',
    unitsOrFloors: '4 Levels of Retail & Offices',
    handoverDate: 'Fully Operational',
    highlights: [
      'Strategic frontage on Ludhiana’s most bustling arterial commercial corridor (Ferozepur Road)',
      'High-traffic hypermarket anchor generating consistent daily footfall',
      'Equipped with escalators, multi-passenger elevators, and dedicated loading bays',
      'Modern corporate office suites on the upper floors with panoramic city views',
    ],
    amenities: [
      { title: 'Prime Retail Arcades', description: 'Curated apparel, footwear, electronics, and lifestyle brand stores.', icon: 'ShoppingBag' },
      { title: 'Dedicated Food Court', description: 'Multi-counter quick-service and casual dining options.', icon: 'Utensils' },
      { title: 'Multi-Level Parking', description: 'Ample basement and surface parking with 24x7 security personnel.', icon: 'Car' },
    ],
    specifications: [
      { category: 'Structure', details: 'Reinforced concrete construction engineered for heavy commercial loads' },
      { category: 'HVAC', details: 'Centralized chiller system with individual retail metering' },
      { category: 'Fire Protection', details: 'Comprehensive wet riser sprinklers, smoke detectors, and fire escape staircases' },
    ],
  },
  {
    id: 'soho-suites',
    name: 'Soho Suites',
    category: 'commercial',
    status: 'Ready to Move',
    location: 'Gurdev Nagar, Ludhiana',
    city: 'Ludhiana',
    tagline: 'Modern Boutique Office Spaces & Serviced Commercial Suites',
    description:
      'Soho Suites offers forward-thinking businesses and professionals designer commercial workspace units. Located in Gurdev Nagar, Ludhiana, each suite is outfitted with plug-and-play high-speed infrastructure, flexible layouts, and elegant common facilities.',
    image: '/images/commercial/curosquare/left-bg.jpg',
    gallery: [
      '/images/commercial/curosquare/left-bg.jpg',
      '/images/commercial/compleated/subthumb.jpg',
    ],
    area: '65,000 Sq. Ft.',
    unitsOrFloors: '5 Floors of Commercial Suites',
    handoverDate: 'Fully Operational',
    highlights: [
      'Prestigious Gurdev Nagar address ideal for corporate headquarters, law firms, and tech consultancies',
      'Double-height entrance lobby with reception and visitor screening',
      'Fiber-optic gigabit internet backbone and automated access control',
    ],
    amenities: [
      { title: 'Executive Boardroom', description: 'Audio-visual equipped meeting rooms for executive briefings.', icon: 'Users' },
      { title: 'Cafeteria & Lounge', description: 'In-house cafe serving gourmet coffee and fresh meals.', icon: 'Coffee' },
      { title: 'Round-the-clock Access', description: 'Secure 24x7 entry with biometric cards and CCTV surveillance.', icon: 'Lock' },
    ],
    specifications: [
      { category: 'Floor Finishes', details: 'Polished vitrified tiles and acoustic sound-dampening ceiling tiles' },
      { category: 'Electrical', details: 'Dual source electrical busway with 100% full load generator backup' },
    ],
  },
  {
    id: 'curo-homes-barnala',
    name: 'Curo Homes Barnala',
    category: 'residential',
    status: 'Ready to Move',
    location: 'Barnala-Bathinda Highway, Barnala',
    city: 'Barnala',
    tagline: 'Masterplanned Integrated Gated Township & Plotted Community',
    description:
      'Curo Homes in Barnala is an expansive masterplanned integrated residential township. Offering serene plotted developments, spacious villas, and contemporary conveniences, the township represents a benchmark for modern community living in Malwa Punjab.',
    image: '/images/residence/curohomes/left-bg.jpg',
    gallery: [
      '/images/residence/curohomes/left-bg.jpg',
      '/images/residence/compleated/subthumb.jpg',
    ],
    projectLogo: '/images/residence/curohomes/logo.png',
    area: '40+ Acres Gated Township',
    unitsOrFloors: 'Over 600 Plotted Plots & Villas',
    handoverDate: 'Completed & Delivered',
    priceStarting: '₹ 32 Lakhs onwards',
    highlights: [
      'Approved masterplanned layout with wide 60-ft and 40-ft bitumen paved avenues',
      'Lush green central theme parks, children’s play zones, and senior citizen pavilions',
      'Underground stormwater drainage and concealed electrical transmission networks',
      'Secured gated boundary wall with 24x7 manned security stations',
    ],
    amenities: [
      { title: 'Community Clubhouse', description: 'Social gathering hall, gym, and recreational games room.', icon: 'Home' },
      { title: 'Landscaped Parks', description: 'Over 5 acres of landscaped lawns, walking avenues, and tree plantations.', icon: 'Trees' },
      { title: 'Convenience Shopping', description: 'Dedicated on-site retail market for daily grocery and medicine needs.', icon: 'ShoppingBag' },
    ],
    specifications: [
      { category: 'Infrastructure', details: 'Bituminous wide roads, concrete curbstones, LED street lamps' },
      { category: 'Water Supply', details: 'High-capacity overhead reservoir providing 24/7 pressurized potable water' },
    ],
  },
  {
    id: 'curo-dynamic-homes',
    name: 'Curo Dynamic Homes (Phase 1 & 2)',
    category: 'residential',
    status: 'Ready to Move',
    location: 'Dhanaula Khurd, Barnala',
    city: 'Barnala',
    tagline: 'RERA-Approved Plotted Living with Immediate Possession',
    description:
      'Curo Dynamic Homes Phase 1 and Phase 2 provide freehold residential plots in the growing corridor of Dhanaula Khurd, Barnala. Fully RERA approved with completed infrastructure, ready-to-build plots, and clear titles, it is the smart choice for families building bespoke homes.',
    image: '/images/residence/curohomes/left-bg.jpg',
    gallery: [
      '/images/residence/curohomes/left-bg.jpg',
      '/images/residence/compleated/subthumb.jpg',
    ],
    reraId: 'PBRERA-BRN-PL-0041',
    area: '18 Acres Plotted Community',
    unitsOrFloors: 'Phase 1 & Phase 2 Plotted Enclave',
    handoverDate: 'Immediate Registry & Possession',
    priceStarting: '₹ 25 Lakhs onwards',
    highlights: [
      '100% RERA compliant and approved by Punjab Town and Country Planning',
      'Instant registry and mutation ready for immediate construction',
      'Complete street lighting network, water connections, and sewage lines in place',
    ],
    amenities: [
      { title: 'Clear Demarcated Plots', description: 'Numbered boundary pillars with accurate land titling.', icon: 'CheckCircle' },
      { title: 'Green Parks & Belts', description: 'Dedicated neighborhood recreation green spaces.', icon: 'Trees' },
    ],
    specifications: [
      { category: 'Roads', details: 'All-weather heavy load macadam roads with proper camber and drainage' },
      { category: 'Sanitation', details: 'Underground sewerage network connected to municipal disposal point' },
    ],
  },
  {
    id: 'curo-queensridge',
    name: 'Curo Queensridge',
    category: 'residential',
    status: 'Upcoming',
    location: 'Prime Delhi Urban Corridor',
    city: 'New Delhi',
    tagline: 'Ultra-Luxury High-End Residences in the Capital City',
    description:
      'Curo Queensridge represents Curo Group’s foray into ultra-luxury group housing in the National Capital. Designed in collaboration with international master architects, Queensridge offers sky mansions with private lift vestibules, double-height panoramic balconies, and elite private club amenities.',
    image: '/images/residence/curoqueenridge/left-bg.jpg',
    gallery: [
      '/images/residence/curoqueenridge/left-bg.jpg',
      '/images/residence/upcoming/subthumb.jpg',
    ],
    projectLogo: '/images/residence/curoqueenridge/logo.png',
    area: 'Boutique Luxury Development',
    unitsOrFloors: 'Limited Edition Sky Villas',
    handoverDate: 'Upcoming Announcement',
    highlights: [
      'Exclusive low-density masterplan featuring only two residences per floor',
      'Private biometric high-speed elevator access opening straight into the residence foyer',
      'Unmatched architectural specification curated for discerning patrons',
    ],
    amenities: [
      { title: 'Private Sky Club', description: 'Rooftop infinity pool, cigar lounge, and private screening room.', icon: 'Star' },
      { title: 'White Glove Concierge', description: '24-hour valet, personal concierge, and estate security.', icon: 'UserCheck' },
    ],
    specifications: [
      { category: 'Automation', details: 'Full home automation controlling HVAC, motorized curtains, and lighting presets' },
      { category: 'Acoustics', details: 'Triple-glazed low-E acoustic glass eliminating urban noise' },
    ],
  },
  {
    id: 'curo-tech',
    name: 'Curo Tech',
    category: 'commercial',
    status: 'Upcoming',
    location: 'Sector 48, Sohna Road, Gurgaon',
    city: 'Gurgaon',
    tagline: 'Next-Generation Grade-A IT Park & Sustainable Business Campus',
    description:
      'Curo Tech is a premier commercial IT campus planned in Gurgaon’s thriving enterprise belt. Incorporating LEED Gold sustainable engineering, column-free floor plates, high-efficiency solar harvesting, and high-speed fiber connectivity, Curo Tech caters to multinational corporations and tech conglomerates.',
    image: '/images/commercial/curotech/left-bg.jpg',
    gallery: [
      '/images/commercial/curotech/left-bg.jpg',
      '/images/commercial/upcoming/subthumb.jpg',
    ],
    projectLogo: '/images/commercial/curotech/logo.png',
    area: '250,000 Sq. Ft.',
    unitsOrFloors: 'G+12 Corporate Glass Tower',
    handoverDate: 'Under Development',
    highlights: [
      'Strategic location with swift access to Golf Course Extension Road and NH-48',
      'Designed to achieve LEED Gold certification for low operational carbon footprint',
      'Flexible floorplates of up to 25,000 sq.ft. allowing customized corporate fitouts',
    ],
    amenities: [
      { title: 'Auditorium & Training Center', description: '250-seat tiered acoustic auditorium for conferences and townhalls.', icon: 'Mic' },
      { title: 'Wellness Gym & Creche', description: 'Corporate wellness center with yoga deck and day-care facilities.', icon: 'Heart' },
    ],
    specifications: [
      { category: 'Elevators', details: '8 destination-controlled smart high-speed passenger elevators' },
      { category: 'Security', details: 'Turnstile access control, under-vehicle surveillance, and 24x7 security operations' },
    ],
  },
  {
    id: 'curo-cinemas',
    name: 'Curo Cinemas',
    category: 'entertainment',
    status: 'Ready to Move',
    location: 'Jalandhar & Ludhiana Multiplex Circuits',
    city: 'Multiple Locations',
    tagline: 'Cinematic Elegance with 4K Laser Projection & Immersive Sound',
    description:
      'Curo Cinemas represents the group’s entertainment vertical, delivering moviegoing experiences across Punjab. With cutting-edge 4K RGB laser projection, Dolby Atmos 3D multidimensional sound, motorized plush leather recliners, and in-seat gourmet dining, Curo Cinemas sets the gold standard for entertainment.',
    image: '/images/commercial/high-street/left-bg.jpg',
    gallery: [
      '/images/commercial/high-street/left-bg.jpg',
      '/images/main-slider/slider2.jpg',
    ],
    area: 'Multiplex Format',
    unitsOrFloors: 'Multiple Screens & Auditoriums',
    handoverDate: 'Operational',
    highlights: [
      'Next-generation Christie 4K Laser Projectors offering hyper-crisp contrast and color fidelity',
      'Dolby Atmos 64-channel 3D spatial acoustic surround sound systems',
      'VIP lounge with live kitchen preparing artisanal stone-baked pizzas and snacks',
    ],
    amenities: [
      { title: 'Plush VIP Recliners', description: 'Full 160-degree motorized ergonomic recliners with personal charging ports.', icon: 'Armchair' },
      { title: 'Gourmet Kitchen', description: 'Dedicated culinary staff preparing fresh snacks and beverages.', icon: 'Utensils' },
    ],
    specifications: [
      { category: 'Screens', details: 'Silver screens optimized for high-brightness 3D and 2D projection' },
      { category: 'Acoustics', details: 'Calibrated acoustic wall paneling with floating floor isolation' },
    ],
  },
];

export const CURO_FLOORPLANS: Floorplan[] = [
  {
    id: 'curo-one-1bhk',
    projectId: 'curo-one',
    projectName: 'Curo One, New Chandigarh',
    unitType: '1 BHK Executive Studio',
    carpetArea: '390 Sq. Ft.',
    superArea: '545 Sq. Ft.',
    balconyArea: '75 Sq. Ft.',
    bedrooms: 1,
    bathrooms: 1,
    facing: 'North-East Garden Facing',
    floor: 'Tower 1 & 2 (Floors 2 to 14)',
    estimatedPrice: '₹ 45 Lakhs',
    description: 'An efficient, smart luxury suite designed for young professionals, corporate travelers, and investors seeking high rental yield.',
    specs: [
      'Spacious master bedroom with ensuite designer bathroom',
      'Open-plan European kitchenette with breakfast ledge',
      'Dedicated private sit-out balcony overlooking manicured gardens',
      'Pre-wired smart automation for lighting and air-conditioning',
    ],
  },
  {
    id: 'curo-one-3bhk',
    projectId: 'curo-one',
    projectName: 'Curo One, New Chandigarh',
    unitType: '3 BHK Royal Residence',
    carpetArea: '1,280 Sq. Ft.',
    superArea: '1,825 Sq. Ft.',
    balconyArea: '220 Sq. Ft.',
    bedrooms: 3,
    bathrooms: 3,
    facing: 'East / Shivalik Hills Facing',
    floor: 'Towers 3, 4, 5 & 6 (All Floors)',
    estimatedPrice: '₹ 1.25 Crore',
    description: 'A grand family residence boasting three light-filled bedrooms, expansive living-dining hall, modular kitchen with utility balcony, and panoramic balconies.',
    specs: [
      'Grand 22-ft living & dining room opening to a deep viewing terrace',
      'Master bedroom featuring wooden finish flooring and walk-in dressing niche',
      '3 full-size luxury bathrooms with separate wet and dry shower partitions',
      'Dedicated utility and service balcony adjacent to the kitchen',
    ],
  },
  {
    id: 'curo-one-4bhk',
    projectId: 'curo-one',
    projectName: 'Curo One, New Chandigarh',
    unitType: '4 BHK Imperial Residence',
    carpetArea: '1,750 Sq. Ft.',
    superArea: '2,480 Sq. Ft.',
    balconyArea: '310 Sq. Ft.',
    bedrooms: 4,
    bathrooms: 4,
    facing: 'North-East Corner View',
    floor: 'Towers 7 & 8 (Floors 4 to 18)',
    estimatedPrice: '₹ 1.78 Crore',
    description: 'Designed for affluent joint families, featuring four master suites, dedicated domestic help quarter with separate entry, and wraparound balconies.',
    specs: [
      'Corner layout guaranteeing maximum natural sunlight and dual cross-ventilation',
      'Servant / domestic help suite with independent entrance door and attached bath',
      'Italian vitrified flooring across living, dining, and family lounge zones',
      'Two covered designated basement parking spaces included',
    ],
  },
  {
    id: 'curo-one-5bhk',
    projectId: 'curo-one',
    projectName: 'Curo One, New Chandigarh',
    unitType: '5 BHK Sky Mansion / Penthouse',
    carpetArea: '2,680 Sq. Ft.',
    superArea: '3,850 Sq. Ft.',
    balconyArea: '520 Sq. Ft.',
    bedrooms: 5,
    bathrooms: 5,
    facing: 'Panoramic 270° Mountain & City View',
    floor: 'Top Floors (18th & 19th Duplex Levels)',
    estimatedPrice: '₹ 2.95 Crore',
    description: 'The pinnacle of luxury in New Chandigarh. A palatial sky villa with double-height ceiling in the formal living room and private rooftop garden terrace.',
    specs: [
      'Double-height ceiling living atrium with floor-to-ceiling glass fenestrations',
      'Private rooftop sky terrace with jacuzzi provision and barbecue gazebo',
      '5 magnificent ensuite bedrooms with imported marble finishes',
      '3 private parking bays plus dedicated EV fast-charging socket',
    ],
  },
  {
    id: 'curo-highstreet-retail',
    projectId: 'curo-high-street',
    projectName: 'Curo High Street, Jalandhar',
    unitType: 'Ground Floor High-Street Flagship Store',
    carpetArea: '950 Sq. Ft.',
    superArea: '1,450 Sq. Ft.',
    balconyArea: '120 Sq. Ft. Promenade Frontage',
    bedrooms: 0,
    bathrooms: 1,
    facing: 'Main Central Fountain Plaza',
    floor: 'Ground Floor Retail Promenade',
    estimatedPrice: 'Lease / Commercial Sale On Request',
    description: 'A prime ground-level commercial retail store boasting 20-foot ceiling clearance, clear front facade, and high pedestrian footfall.',
    specs: [
      '20-foot floor-to-floor height ideal for mezzanine level expansion',
      'Full-height 100% frameless glass display facing the European pedestrian boulevard',
      'Dedicated heavy electrical load sanction with 100% generator backup',
      'Direct access to freight elevators and rear loading service docks',
    ],
  },
];

export const CURO_CAREERS: CareerOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Civil Project Engineer',
    department: 'Civil Engineering & Construction',
    location: 'Curo One Site Office, New Chandigarh',
    experience: '6–10 Years in High-Rise RCC Construction',
    type: 'Full-Time',
    description:
      'Lead on-site civil execution, structural quality audits, contractor coordination, and progress tracking for the ongoing high-rise towers at Curo One, New Chandigarh.',
    responsibilities: [
      'Supervise structural RCC pouring, shuttering quality, and reinforcement inspections.',
      'Liaise with structural consultants and architects to resolve on-ground discrepancies.',
      'Enforce zero-compromise safety protocols and ensure strict timeline adherence.',
      'Verify contractor billings, bar bending schedules, and material testing reports.',
    ],
    qualifications: [
      'B.Tech / B.E. in Civil Engineering from a recognized institution.',
      'Demonstrated experience with high-rise residential projects exceeding 15 floors.',
      'Proficiency in MS Project, AutoCAD, and construction management ERP systems.',
    ],
  },
  {
    id: 'job-2',
    title: 'Senior Manager — Commercial Leasing',
    department: 'Commercial Leasing & Retail Relations',
    location: 'Curo High Street, Jalandhar / Delhi HQ',
    experience: '7–12 Years in Retail Real Estate / Malls',
    type: 'Full-Time',
    description:
      'Drive high-street brand leasing, negotiate tenant lease contracts, optimize retail zoning, and manage partnerships with top national and international brands.',
    responsibilities: [
      'Identify and onboard premier anchor tenants, F&B operators, and fashion retailers.',
      'Negotiate commercially viable lease terms, fitout guidelines, and revenue shares.',
      'Maintain strong relationships with regional retail heads and IPC leasing consultants.',
      'Coordinate with mall operations to ensure timely store fitouts and openings.',
    ],
    qualifications: [
      'MBA or equivalent postgraduate degree in Marketing / Real Estate Management.',
      'Established network across top Indian retail, apparel, and F&B brand heads.',
      'Strong financial acumen and mastery of lease agreements and commercial math.',
    ],
  },
  {
    id: 'job-3',
    title: 'Lead Architect & BIM Specialist',
    department: 'Architecture & Design Planning',
    location: 'Corporate HQ, Green Park Extension, New Delhi',
    experience: '5–8 Years in Architectural Design',
    type: 'Full-Time',
    description:
      'Oversee design development, 3D architectural modeling, BIM coordination, and detail drafting for upcoming luxury group housing and commercial parks.',
    responsibilities: [
      'Develop high-detail architectural models using Revit BIM and AutoCAD.',
      'Coordinate MEP, structural, and landscape drawings to eliminate site clashes.',
      'Prepare luxury finish schedules, facade details, and municipal sanction drawings.',
    ],
    qualifications: [
      'B.Arch / M.Arch from a recognized architecture school.',
      'High proficiency in Revit Architecture, Lumion, SketchUp, and AutoCAD.',
      'Strong eye for modern European and contemporary Indian luxury aesthetics.',
    ],
  },
  {
    id: 'job-4',
    title: 'Luxury Sales & Relationship Manager',
    department: 'Residential Sales & Investor CRM',
    location: 'New Chandigarh / Delhi NCR',
    experience: '4–7 Years in Luxury Real Estate Sales',
    type: 'Full-Time',
    description:
      'Engage with High Net Worth Individuals (HNIs), NRIs, and institutional investors to present Curo One residences and close high-value luxury real estate transactions.',
    responsibilities: [
      'Host VIP site walkthroughs at Curo One and provide comprehensive project briefings.',
      'Manage end-to-end sales pipelines from initial lead contact to agreement signing.',
      'Participate in real estate expos, NRI investment summits, and HNI networking forums.',
    ],
    qualifications: [
      'Bachelor’s or Master’s degree with polished communication skills in English & Hindi.',
      'Proven track record of high-ticket real estate sales in Chandigarh tri-city or Delhi NCR.',
      'Strong customer relationship management skills and professional etiquette.',
    ],
  },
];

export const CURO_MILESTONES: Milestone[] = [
  {
    year: '1987',
    title: 'Genesis & Visionary Foundation',
    description: 'Founded by Mr. Pawan Garg with a vision to build enduring enterprises anchored in integrity and customer delight.',
  },
  {
    year: '1998',
    title: 'Entry into Real Estate & Infrastructure',
    description: 'Diversified from automobile dealerships into large-scale urban infrastructure, acquiring strategic land banks across North India.',
  },
  {
    year: '2008',
    title: 'Commercial Milestone — Curo Square Ludhiana',
    description: 'Delivered Curo Square in Ludhiana, inaugurating modern organized retail and commercial spaces in Punjab.',
  },
  {
    year: '2014',
    title: 'Township Pioneer — Curo Homes Barnala',
    description: 'Masterplanned and delivered 40+ acres of integrated residential township living, providing modern planned amenities to Malwa Punjab.',
  },
  {
    year: '2017',
    title: 'Curo High Street Jalandhar Grand Opening',
    description: 'Unveiled Punjab’s first European-style open-air pedestrian high-street and 5-screen PVR multiplex on 66 Feet Road.',
  },
  {
    year: '2021',
    title: 'Launch of Curo One New Chandigarh Flagship',
    description: 'Commenced the iconic 10-acre 8-tower luxury residential development adjacent to Chandigarh, setting new regional standards.',
  },
  {
    year: '2026',
    title: 'Architectural Innovation & Sustainable Growth',
    description: 'Expanding into Grade-A green commercial tech parks (Curo Tech Gurgaon) and ultra-luxury Delhi residences (Curo Queensridge).',
  },
];

export const CURO_LEADERSHIP = {
  chairman: {
    name: 'Mr. Pawan Garg',
    title: 'Chairman & Managing Director',
    message:
      'When we established Curo Group in 1987, our commitment was straightforward: every square foot we craft must stand as a testament to uncompromising quality, enduring trust, and generational pride for our patrons. Over thirty-eight years, this founding philosophy has guided our evolution from automobile entrepreneurship to shaping landmark European high streets, masterplanned townships, and world-class residences. At Curo India, we do not merely build structures; we design ecosystems where families thrive and businesses prosper.',
  },
  coreValues: [
    {
      title: 'Architectural Integrity',
      description: 'We construct with structural rigor, adhering strictly to global engineering standards and Seismic Zone safety codes.',
    },
    {
      title: 'Customer Primacy',
      description: 'From initial enquiry to post-handover facility maintenance, every patron experiences transparent, respectful care.',
    },
    {
      title: 'RERA & Legal Transparency',
      description: '100% statutory adherence with clear land titles, verified approvals, and honest delivery schedules.',
    },
    {
      title: 'Sustainable Innovation',
      description: 'Pioneering rainwater harvesting, solar microgrids, green open spaces, and eco-conscious construction materials.',
    },
  ],
};

export const CURO_OFFICES = [
  {
    title: 'Corporate Headquarters',
    city: 'New Delhi',
    address: 'K-28, Green Park Extension, New Delhi - 110016, India',
    phones: ['+91-11-26171915', '+91-11-26171916', '+91-11-26171917'],
    email: 'info@curoindia.com',
    hours: 'Monday – Saturday: 9:30 AM to 6:30 PM',
  },
  {
    title: 'Curo One Site Office',
    city: 'New Chandigarh',
    address: 'Mullapur Garibdas, Near PGIMER, New Chandigarh, SAS Nagar, Punjab - 140901',
    phones: ['+91-172-5002000', '+91-98888-00000'],
    email: 'sales@curoindia.com',
    hours: 'Open All 7 Days: 9:00 AM to 7:00 PM',
  },
  {
    title: 'Curo High Street Site Office',
    city: 'Jalandhar',
    address: '66 Feet Road, Urban Estate Phase 2, Jalandhar, Punjab - 144022',
    phones: ['+91-181-4600000', '+91-98777-11111'],
    email: 'leasing@curoindia.com',
    hours: 'Open All 7 Days: 10:00 AM to 9:00 PM',
  },
  {
    title: 'Curo Square Regional Office',
    city: 'Ludhiana',
    address: 'Gurdev Nagar, Ferozepur Road, Ludhiana, Punjab - 141001',
    phones: ['+91-161-4500000'],
    email: 'ludhiana@curoindia.com',
    hours: 'Monday – Saturday: 10:00 AM to 7:00 PM',
  },
];
