// Project data for Rutuja Gosavi's Architecture Portfolio
// Each project belongs to one of 4 skill categories and is tagged with the firm/context

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "architecture", label: "Architecture & Space Planning" },
  { id: "interior", label: "Interior Design" },
  { id: "working-drawings", label: "Working Drawings" },
  { id: "revit", label: "Revit & Digital Modeling" },
];

const CATEGORY_ORDER = {
  "architecture": ["teak-county-resort", "marathwada-trade-center", "sports-complex", "group-housing"],
  "interior": ["sales-office-punawale", "aquarius-resort", "sunnys-world"],
  "working-drawings": ["rajhans-silvana", "rajhans-maxton", "manorath-greens"],
  "revit": ["zen-dale-revit-project"]
};

const PROJECTS = [
  // ─── 01. Architecture & Space Planning ────────────────────────────────

  {
    slug: "teak-county-resort",
    title: "Teak County Resort",
    category: "architecture",
    typology: "Hospitality / Resort",
    location: "Khed Shivapur, Pune",
    firm: "Wyoma Architects",
    role: "Concept design, site planning, 3D visualization",
    year: "2026",
    summary:
      'Proposed tropical retreat with 30 exclusive cottages (Standard & Suite), emphasizing a "Natural Harmony" theme. Features glass banquet, restaurant, swimming pool, indoor sports, library, private dining, and sales office. Two complete site plan options explored.',
    images: [
      "assets/images/projects/teak-county-resort/cover.jpg",
      "assets/images/projects/teak-county-resort/site-plan-1.jpg",
      "assets/images/projects/teak-county-resort/overview.jpg",
      "assets/images/projects/teak-county-resort/site-plan-1-bubble.jpg",
      "assets/images/projects/teak-county-resort/cottage-3d-option1.jpg",
      "assets/images/projects/teak-county-resort/standard-cottage-plan.jpg",
      "assets/images/projects/teak-county-resort/suite-cottage-plan.jpg",
      "assets/images/projects/teak-county-resort/sales-office-plan.jpg",
      "assets/images/projects/teak-county-resort/sales-office-3d-1.jpg",
      "assets/images/projects/teak-county-resort/sales-office-3d-2.jpg",
    ],
    tags: ["Hospitality", "Concept Design", "Site Planning", "3D Visualization"],
  },

  {
    slug: "marathwada-trade-center",
    title: "Marathwada Business Trade Center",
    category: "architecture",
    typology: "Thesis Project",
    location: "Academic",
    firm: "Academic (Thesis)",
    role: "Architectural design, site planning, visualization",
    year: "2024",
    summary:
      "A comprehensive thesis project for a Business Trade Center featuring a convention center, hotel, incubation center, cafeteria, and extensive site planning. Designed to integrate various business and hospitality functions within a unified campus.",
    images: [
      "assets/images/projects/marathwada-trade-center/cover.jpg",
      "assets/images/projects/marathwada-trade-center/theory.jpg",
      "assets/images/projects/marathwada-trade-center/site-plan.jpg",
      "assets/images/projects/marathwada-trade-center/convention-center.jpg",
      "assets/images/projects/marathwada-trade-center/hotel.jpg",
      "assets/images/projects/marathwada-trade-center/incubation-center.jpg",
      "assets/images/projects/marathwada-trade-center/cafeteria.jpg"
    ],
    tags: ["Academic", "Thesis", "Commercial", "Architecture"]
  },

  {
    slug: "sports-complex",
    title: "Sports Complex",
    category: "architecture",
    typology: "Sports / Recreational",
    location: "Academic Project",
    firm: "JNEC MGM University (4th Semester)",
    role: "Concept design, site planning, facility layout",
    year: "2024",
    summary:
      "In my 4th semester, I designed a sports complex encompassing basketball, badminton, lawn tennis, table tennis, a gym, and a multipurpose hall alongside a cafeteria. The layout emphasizes pedestrian circulation while ensuring optimal privacy and functional access between activity zones.",
    images: [
      "assets/images/projects/sports-complex/split-view.jpg",
      "assets/images/projects/sports-complex/cover.jpg",
      "assets/images/projects/sports-complex/concept.jpg",
      "assets/images/projects/sports-complex/site-plan.jpg",
      "assets/images/projects/sports-complex/indoor-sports-club.jpg",
      "assets/images/projects/sports-complex/admin-cafeteria-details.jpg",
    ],
    tags: ["Academic", "Sports Facility", "Concept Layout", "Site Planning"],
  },

  {
    slug: "group-housing",
    title: "Group Housing Project",
    category: "architecture",
    typology: "Residential / Group Housing",
    location: "Aurangabad",
    firm: "JNEC MGM University (8th Semester)",
    role: "Design, site planning, visualization",
    year: "2024",
    summary:
      'Group housing scheme featuring bungalows, rowhouses, and 2BHK/3BHK apartments. Guided by the concept of "visual delight" - expansive open areas, luxurious living spaces, and captivating facades define the community layout.',
    images: [
      "assets/images/projects/group-housing/title-card.png",
      "assets/images/projects/group-housing/concept.jpg",
      "assets/images/projects/group-housing/site-plan.jpg",
      "assets/images/projects/group-housing/bungalow.jpg",
      "assets/images/projects/group-housing/rowhouse.jpg",
      "assets/images/projects/group-housing/apartments-plans.jpg",
      "assets/images/projects/group-housing/apartment-details.jpg",
    ],
    tags: ["Academic", "Residential", "Site Planning", "AutoCAD"],
  },

  {
    slug: "manorath-greens",
    title: "Manorath Greens - Gate Design",
    category: "working-drawings",
    typology: "Township / Gate Design",
    location: "Pali, Rajasthan",
    client: "Manorath Greens",
    firm: "ARH Architects, Mumbai",
    role: "Main entrance gate design, shop detailing",
    year: "2024",
    summary:
      "Township with 66 villas, 29 LIG/EWS houses, shops, and club on 8.2 acres. Designed the main entrance gate with integrated shop drawings, molding details, and elevation drawings.",
    images: [
      "assets/images/projects/manorath-greens/gate-design.jpg",
      "assets/images/projects/manorath-greens/gate-shop-detail.jpg",
    ],
    tags: ["Working Drawings", "Township", "AutoCAD", "Gate Design"],
  },

  // ─── 02. Interior Design ──────────────────────────────────────────────

  {
    slug: "sales-office-punawale",
    title: "Sales Office - Punawale",
    category: "interior",
    typology: "Commercial / Interior",
    location: "Punawale, Pune",
    client: "Celestial",
    firm: "Wyoma Architects",
    role: "Interior design, detailed drawings, 3D visualization",
    year: "2026",
    summary:
      "Complete sales office interior package - reception & waiting, discussion booths, conference room, director's cabin, and pantry. Delivered layout plans, room elevations, ceiling/electrical layouts, and 3D visualization.",
    images: [
      "assets/images/projects/sales-office-punawale/cover.jpg",
      "assets/images/projects/sales-office-punawale/layout-plan.jpg",
      "assets/images/projects/sales-office-punawale/elevation-front.jpg",
      "assets/images/projects/sales-office-punawale/elevation-side.jpg",
      "assets/images/projects/sales-office-punawale/sections.jpg",
      "assets/images/projects/sales-office-punawale/3d-views.jpg",
      "assets/images/projects/sales-office-punawale/directors-cabin.jpg",
      "assets/images/projects/sales-office-punawale/reception-elevations.jpg",
    ],
    tags: ["Interior Design", "Commercial", "AutoCAD", "3D Visualization"],
  },

  {
    slug: "aquarius-resort",
    title: "Aquarius Resort - Club & Rooms",
    category: "interior",
    typology: "Hospitality / Resort",
    location: "Khadakwasla, Pune",
    firm: "Wyoma Architects",
    role: "Interior design, working drawings, 3D rendering",
    year: "2026",
    summary:
      "Resort pool & club house with outdoor seating, bar counter, DJ console, and dance area. Also designed hotel room interiors (Room 101 & 211) - furniture layouts, sectional elevations, wardrobe/TV detailing, and 3D views.",
    images: [
      "assets/images/projects/aquarius-resort/cover.jpg",
      "assets/images/projects/aquarius-resort/club-layout.jpg",
      "assets/images/projects/aquarius-resort/entrance-wall.jpg",
      "assets/images/projects/aquarius-resort/club-front-elevation.jpg",
      "assets/images/projects/aquarius-resort/bar-counter-detail.jpg",
      "assets/images/projects/aquarius-resort/room-101-plan.jpg",
      "assets/images/projects/aquarius-resort/room-211-3d.jpg",
    ],
    tags: ["Interior Design", "Hospitality", "Working Drawings", "3D Visualization"],
  },

  {
    slug: "sunnys-world",
    title: "Sunny's World Resort",
    category: "interior",
    typology: "Hospitality / Resort / Landscape",
    location: "Sus-Goan, Goa",
    firm: "Wyoma Architects",
    role: "Landscape planning, room interior design",
    year: "2026",
    summary:
      "Resort landscape with 16 cottage rooms, restaurant, sculptures, fire pits, water bodies, and outdoor seating. Designed combined Swiss Rooms (115, 116) with indoor/outdoor balconies, wardrobe detailing, and sectional elevations.",
    images: [
      "assets/images/projects/sunnys-world/cover.jpg",
      "assets/images/projects/sunnys-world/landscape-plan.jpg",
      "assets/images/projects/sunnys-world/landscape-3d.jpg",
      "assets/images/projects/sunnys-world/swiss-room-plan.jpg",
      "assets/images/projects/sunnys-world/swiss-room-sections.jpg",
    ],
    tags: ["Interior Design", "Landscape", "Hospitality", "AutoCAD"],
  },

  // ─── 03. Working Drawings ─────────────────────────────────────────────

  {
    slug: "rajhans-silvana",
    title: "Rajhans Silvana",
    category: "working-drawings",
    typology: "Residential / Group Housing",
    location: "Surat, Gujarat",
    client: "Rajhans Group",
    firm: "ARH Architects, Mumbai",
    role: "Working drawings - floor plans, elevations, staircase & ramp packages",
    year: "2024",
    summary:
      "Large-scale residential development: 6 towers, G+10 floors, 108 units of 5BHK on 13,242 sq.m. Drafted master plan, typical floor plans, terrace plans, elevations with window schedules, staircase detailing, and basement ramp plans.",
    images: [
      "assets/images/projects/rajhans-silvana/master-plan.jpg",
      "assets/images/projects/rajhans-silvana/typical-floor-plan.jpg",
      "assets/images/projects/rajhans-silvana/elevation-side-d.jpg",
      "assets/images/projects/rajhans-silvana/elevation-side-a.jpg",
      "assets/images/projects/rajhans-silvana/staircase-package.jpg",
    ],
    tags: ["Working Drawings", "Residential", "AutoCAD", "High-Rise"],
  },

  {
    slug: "rajhans-maxton",
    title: "Rajhans Maxton",
    category: "working-drawings",
    typology: "Residential / High-Rise",
    location: "Surat, Gujarat",
    client: "Rajhans Group",
    firm: "ARH Architects, Mumbai",
    role: "Working drawings - floor plans, sections, elevation details",
    year: "2024",
    summary:
      "Residential towers: 10 towers, 13 floors, 510 units of 3BHK on 15,420 sq.m. Drafted landscape detail sections, 13th floor plan, elevation detail drawings with elevation graph, and tower sections.",
    images: [
      "assets/images/projects/rajhans-maxton/landscape-sections.jpg",
      "assets/images/projects/rajhans-maxton/13th-floor-plan.jpg",
      "assets/images/projects/rajhans-maxton/elevation-details.jpg",
      "assets/images/projects/rajhans-maxton/tower-c-sections.jpg",
    ],
    tags: ["Working Drawings", "Residential", "AutoCAD", "High-Rise"],
  },

  // ─── 04. Revit & Digital Modeling ─────────────────────────────────────

  {
    slug: "zen-dale-revit-project",
    title: "Zen-Dale Revit Project",
    category: "revit",
    typology: "Landscape Architecture / BIM",
    location: "Urse, Pune",
    client: "Mr. Parag Patil",
    firm: "Eco Envisage Pvt. Ltd.",
    role: "Landscape planning, Revit BIM modeling, detailing",
    year: "2025",
    summary:
      "A comprehensive multi-zone landscape resort project showcasing both traditional working drawings and complete Revit BIM documentation. Features sectional cuts through kids' play areas, a multipurpose hall, pergola structures, and detailed tree plantation layouts—all fully coordinated in 3D.",
    images: [
      "assets/images/projects/zen-dale-revit-project/ground-floor-plan.jpg",
      "assets/images/projects/zen-dale-revit-project/building-section.jpg",
      "assets/images/projects/zen-dale-revit-project/site-section-a.jpg",
      "assets/images/projects/zen-dale-revit-project/site-section-b.jpg",
      "assets/images/projects/zen-dale-revit-project/site-section-zone02.jpg",
      "assets/images/projects/zen-dale-revit-project/pergola-c.jpg",
      "assets/images/projects/zen-dale-revit-project/tree-plantation.jpg",
      "assets/images/projects/zen-dale-revit-project/pergola-revit.jpg",
      "assets/images/projects/zen-dale-revit-project/site-section-revit.jpg",
      "assets/images/projects/zen-dale-revit-project/3d-view-1.jpg",
      "assets/images/projects/zen-dale-revit-project/3d-view-2.jpg",
      "assets/images/projects/zen-dale-revit-project/hall-section-revit.jpg",
      "assets/images/projects/zen-dale-revit-project/hall-plan-revit.jpg",
    ],
    tags: ["Landscape", "Revit", "BIM", "Working Drawings", "Planting Design"],
  },
];
