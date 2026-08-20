// Project data for Rutuja Gosavi's Architecture Portfolio
// Each project belongs to one of 4 skill categories and is tagged with the firm/context

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "architecture", label: "Architecture & Space Planning" },
  { id: "interior", label: "Interior Design" },
  { id: "working-drawings", label: "Working Drawings" },
  { id: "revit", label: "Revit & Digital Modeling" },
];

const PROJECTS = [
  // ─── 01. Architecture & Space Planning ────────────────────────────────

  {
    slug: "zen-dale-landscape",
    title: "Zen-Dale Landscape Resort",
    category: "architecture",
    typology: "Landscape Architecture",
    location: "Urse, Pune",
    client: "Mr. Parag Patil",
    firm: "Eco Envisage Pvt. Ltd.",
    role: "Landscape working drawings, site sections, planting design",
    year: "2025",
    summary:
      "Multi-zone landscape resort featuring long sectional cuts through kids' play areas, pool zones, water features, lawns, and pathways. Includes Pergola C (steel + RCC with ferrocrete decking) and a 10-species tree plantation layout with detailed planting schedule.",
    images: [
      "assets/images/projects/zen-dale-landscape/site-section-a.jpg",
      "assets/images/projects/zen-dale-landscape/site-section-b.jpg",
      "assets/images/projects/zen-dale-landscape/site-section-zone02.jpg",
      "assets/images/projects/zen-dale-landscape/pergola-c.jpg",
      "assets/images/projects/zen-dale-landscape/tree-plantation.jpg",
    ],
    tags: ["Landscape", "AutoCAD", "Working Drawings", "Planting Design"],
  },

  {
    slug: "teak-county-resort",
    title: "Teak County Resort",
    category: "architecture",
    typology: "Hospitality / Resort",
    location: "Khed Shivapur, Pune",
    firm: "Eco Envisage Pvt. Ltd.",
    role: "Concept design, site planning, 3D visualization",
    year: "2025",
    summary:
      'Proposed tropical retreat with 30 exclusive cottages (Standard & Suite), emphasizing a "Natural Harmony" theme. Features glass banquet, restaurant, swimming pool, indoor sports, library, private dining, and sales office. Two complete site plan options explored.',
    images: [
      "assets/images/projects/teak-county-resort/overview.jpg",
      "assets/images/projects/teak-county-resort/site-plan-1-bubble.jpg",
      "assets/images/projects/teak-county-resort/site-plan-1.jpg",
      "assets/images/projects/teak-county-resort/cottage-3d-option1.jpg",
      "assets/images/projects/teak-county-resort/standard-cottage-plan.jpg",
      "assets/images/projects/teak-county-resort/site-plan-2-bubble.jpg",
      "assets/images/projects/teak-county-resort/site-plan-2.jpg",
      "assets/images/projects/teak-county-resort/cottage-3d-option2.jpg",
      "assets/images/projects/teak-county-resort/suite-cottage-3d.jpg",
      "assets/images/projects/teak-county-resort/suite-cottage-plan.jpg",
      "assets/images/projects/teak-county-resort/sales-office-plan.jpg",
      "assets/images/projects/teak-county-resort/sales-office-3d-1.jpg",
      "assets/images/projects/teak-county-resort/sales-office-3d-2.jpg",
    ],
    tags: ["Hospitality", "Concept Design", "Site Planning", "3D Visualization"],
  },

  {
    slug: "performing-arts-center",
    title: "Performing Arts Center",
    category: "architecture",
    typology: "Cultural / Institutional",
    location: "Aurangabad",
    firm: "JNEC MGM University (7th Semester)",
    role: "Concept design, planning, visualization",
    year: "2024",
    summary:
      'A Performing Arts Center for dance, music, and drama - designed around the concept of "movement." Curved building forms and pathways reflect the intrinsic motion of each art form. Includes academic block, hostel, music block, auditorium, theatre, dining hall, and sports building.',
    images: [
      "assets/images/projects/performing-arts-center/concept.jpg",
      "assets/images/projects/performing-arts-center/site-plan.jpg",
      "assets/images/projects/performing-arts-center/academic-block-plan.jpg",
      "assets/images/projects/performing-arts-center/hostel-block.jpg",
      "assets/images/projects/performing-arts-center/music-block.jpg",
      "assets/images/projects/performing-arts-center/dining-sports.jpg",
    ],
    tags: ["Academic", "Concept Design", "Cultural", "SketchUp"],
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
      "assets/images/projects/group-housing/concept.jpg",
      "assets/images/projects/group-housing/site-plan.jpg",
      "assets/images/projects/group-housing/bungalow.jpg",
      "assets/images/projects/group-housing/rowhouse.jpg",
      "assets/images/projects/group-housing/apartments-plans.jpg",
      "assets/images/projects/group-housing/apartment-details.jpg",
    ],
    tags: ["Academic", "Residential", "Site Planning", "AutoCAD"],
  },

  // ─── 02. Interior Design ──────────────────────────────────────────────

  {
    slug: "ardhila-restaurant",
    title: "Ardhila Restaurant",
    category: "interior",
    typology: "Hospitality / Restaurant",
    location: "Pune",
    firm: "Wyoma Architects",
    role: "Concept design, interior design, 3D visualization",
    year: "2026",
    summary:
      "Tropical Forest-themed restaurant with double-height dining, curved ceiling elements, ambient profile lighting, cascading creepers, exposed brick walls, and tropical plantations. Features indoor/outdoor dining, bar counter, and cabana dining - extensive day and night 3D visualization package.",
    images: [
      "assets/images/projects/ardhila-restaurant/concept.jpg",
      "assets/images/projects/ardhila-restaurant/entrance-day.jpg",
      "assets/images/projects/ardhila-restaurant/entrance-night.jpg",
      "assets/images/projects/ardhila-restaurant/indoor-dining-1.jpg",
      "assets/images/projects/ardhila-restaurant/indoor-dining-2.jpg",
      "assets/images/projects/ardhila-restaurant/indoor-dining-3.jpg",
      "assets/images/projects/ardhila-restaurant/bar-counter.jpg",
      "assets/images/projects/ardhila-restaurant/outdoor-dining-day.jpg",
      "assets/images/projects/ardhila-restaurant/outdoor-dining-night.jpg",
      "assets/images/projects/ardhila-restaurant/cabana-day.jpg",
      "assets/images/projects/ardhila-restaurant/cabana-night.jpg",
    ],
    tags: ["Interior Design", "Hospitality", "3D Visualization", "Concept Design"],
  },

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
      "assets/images/projects/aquarius-resort/club-layout.jpg",
      "assets/images/projects/aquarius-resort/entrance-wall.jpg",
      "assets/images/projects/aquarius-resort/club-front-elevation.jpg",
      "assets/images/projects/aquarius-resort/bar-counter-detail.jpg",
      "assets/images/projects/aquarius-resort/room-101-plan.jpg",
      "assets/images/projects/aquarius-resort/room-211-3d.jpg",
      "assets/images/projects/aquarius-resort/room-3d-renders.jpg",
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
      "assets/images/projects/sunnys-world/landscape-plan.jpg",
      "assets/images/projects/sunnys-world/landscape-3d.jpg",
      "assets/images/projects/sunnys-world/swiss-room-plan.jpg",
      "assets/images/projects/sunnys-world/swiss-room-sections.jpg",
      "assets/images/projects/sunnys-world/swiss-room-3d.jpg",
    ],
    tags: ["Interior Design", "Landscape", "Hospitality", "AutoCAD"],
  },

  // ─── 03. Working Drawings ─────────────────────────────────────────────

  {
    slug: "zen-dale-multipurpose-hall",
    title: "Zen-Dale - Multipurpose Hall",
    category: "working-drawings",
    typology: "Community / Recreation",
    location: "Urse, Pune",
    client: "Mr. Parag Patil",
    firm: "Eco Envisage Pvt. Ltd.",
    role: "Working drawings, detailing, door/window schedules",
    year: "2025",
    summary:
      "Two-storey multipurpose hall - ground floor hall (9m x 17.8m) with pantry/service, first floor gym, green room, toilets and balcony. Rooftop 150,000 L water tank (OHWT). Full door/window schedule, ~250 sq.m built-up area.",
    images: [
      "assets/images/projects/zen-dale-multipurpose-hall/ground-floor-plan.jpg",
      "assets/images/projects/zen-dale-multipurpose-hall/building-section.jpg",
    ],
    tags: ["Working Drawings", "AutoCAD", "Architecture"],
  },

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

  // ─── 04. Revit & Digital Modeling ─────────────────────────────────────

  {
    slug: "zen-dale-bim",
    title: "Zen-Dale - Revit BIM Models",
    category: "revit",
    typology: "BIM / Digital Modeling",
    location: "Urse, Pune",
    firm: "Eco Envisage Pvt. Ltd.",
    role: "Revit BIM modeling of landscape & building elements",
    year: "2025",
    summary:
      "Complete Revit BIM documentation of the Zen-Dale project - pergola structure, site sections, multipurpose hall plan and section modeled in Revit with coordinated 3D views. Demonstrates BIM proficiency alongside traditional CAD drafting.",
    images: [
      "assets/images/projects/zen-dale-bim/pergola-revit.jpg",
      "assets/images/projects/zen-dale-bim/site-section-revit.jpg",
      "assets/images/projects/zen-dale-bim/3d-view-1.jpg",
      "assets/images/projects/zen-dale-bim/3d-view-2.jpg",
      "assets/images/projects/zen-dale-bim/hall-section-revit.jpg",
      "assets/images/projects/zen-dale-bim/hall-plan-revit.jpg",
    ],
    tags: ["Revit", "BIM", "3D Modeling", "Digital Documentation"],
  },
];
