/**
 * Project experience library extracted from the firm's own capability
 * documents (2012-2022 development summary, project summary, service brochure).
 * Every entry is traceable to a source document via the `source` field.
 */

export interface ProjectCase {
  title: string
  meta: string
  location: string
  client: string
  role: string
  img: string
  imgAlt: string
  points: string[]
  source: string
}

export interface ProjectGroup {
  id: string
  label: string
  blurb: string
  cases: ProjectCase[]
}

export const projectGroups: ProjectGroup[] = [
  {
    id: 'utility',
    label: 'Utility-Scale Solar',
    blurb:
      'Engineer of Record on fixed-tilt ground-mounted utility arrays, from racking and pile design through sealed permit submissions.',
    cases: [
      {
        title: 'Apple Valley Solar Farm — Navajo Road',
        meta: '1.5 MW · fixed tilt',
        location: '16115 Navajo Rd, Apple Valley, CA',
        client: 'Belectric Inc.',
        role: 'Engineer of Record',
        img: '/img/cases/apple-valley-navajo.jpg',
        imgAlt: 'Aerial view of the Navajo Road utility solar array',
        points: [
          'Developed and signed off a fixed-tilt ground-mounted utility system',
          'Cold-formed steel racking with glulam timber beams and steel W posts installed as direct-driven piles',
          'Member sizes, span limits and footing depths taken from an automated in-house design database',
        ],
        source: '10-year development summary, p.1',
      },
      {
        title: 'Apple Valley Solar Farm — Powhatan Road',
        meta: '1.5 MW · fixed tilt',
        location: '23755 Powhatan Rd, Apple Valley, CA',
        client: 'Belectric Inc.',
        role: 'Engineer of Record',
        img: '/img/cases/apple-valley-powhatan.jpg',
        imgAlt: 'Aerial view of the Powhatan Road utility solar array',
        points: [
          'Second utility block delivered under the same development programme',
          'Direct-driven pile foundations sized against site wind, snow and seismic demand',
          'Racking geometry validated across the full tilt and clearance range',
        ],
        source: '10-year development summary, p.1',
      },
      {
        title: 'Southern California Utility Farm Programme',
        meta: '2 farms · ~1.5 MW each',
        location: 'Southern California',
        client: 'Belectric Inc.',
        role: 'Engineer of Record',
        img: '/img/cases/utility-ground-mount.jpg',
        imgAlt: 'Ground-mounted racking rows behind a perimeter fence',
        points: [
          'Full structural certification for cold-formed steel ground-mount racking',
          'Foundation and pile capacity coordinated with site geotechnical conditions',
          'Design cases run through an automated FEA pipeline rather than one-off models',
        ],
        source: 'Engineering service brochure, p.1',
      },
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial Rooftop, Carport & Ground Mount',
    blurb:
      'Sealed structural packages for commercial roofs, parking canopies and agricultural ground mounts — including existing-building capacity reviews under IEBC.',
    cases: [
      {
        title: 'Milpitas BART Station Parking Garage Solar Canopy',
        meta: '280 kW · $3.4M construction',
        location: 'Milpitas, CA',
        client: 'Staten Solar Corp.',
        role: 'Engineer of Record',
        img: '/img/cases/milpitas-canopy.jpg',
        imgAlt: 'Completed solar canopy over the Milpitas BART parking garage',
        points: [
          'EOR for the entire structural design of a $3.4M public facility design-build',
          'Unconventional wind load established for a canopy exposed 15 ft above the roof, beyond ASCE 7 defaults',
          'Customized module clamps designed to affix panels directly to the purlins',
          'All steel canopy members, connections and each individual shop drawing designed and approved',
          'Fast-track design changes issued for field RFIs such as column spacing deviation and base-plate offsets',
        ],
        source: '10-year development summary, p.2 · project summary, p.1',
      },
      {
        title: 'PayPal Headquarters Rooftop Ballast System',
        meta: '1.1 MW · ballasted',
        location: 'San Jose, CA',
        client: 'Staten Solar Corp.',
        role: 'Structural Engineer of Record',
        img: '/img/cases/paypal-campus.jpg',
        imgAlt: 'Aerial of the PayPal campus with rooftop ballasted arrays',
        points: [
          'Reviewed five retained buildings for reserve capacity against newly added solar array loads under the International Existing Building Code (IEBC)',
          'Performed building inspection to accurately define roof-level mechanical and pipeline facility loads',
          'Mapped array reactions and ballast layout onto deck, joist and beam load paths',
          'Set up a RISA model per building for deck/joist local capacity and building-global lateral restraint',
          'Guided solar array layout revisions driven by building capacity limits',
        ],
        source: '10-year development summary, p.2 · project summary, p.5',
      },
      {
        title: 'City of Minneapolis Public Service Building',
        meta: '91.2 kW · tilted on dunnage',
        location: 'Minneapolis, MN',
        client: 'IronRidge Inc.',
        role: 'Structural certification',
        img: '/img/cases/minneapolis-rooftop.jpg',
        imgAlt: 'Rooftop tilted racking with the downtown skyline behind',
        points: [
          'Certified an IronRidge XR rail tilted system installed over a steel dunnage system',
          'Defined racking allowable spans and attachment reactions to the supporting steel members',
          'Specified deflection limits on supporting steel beams as performance criteria for the building structure',
        ],
        source: '10-year development summary, p.2',
      },
      {
        title: 'Scotts Valley Commercial Roof System',
        meta: '45.6 kW',
        location: 'Scotts Valley, CA',
        client: 'Staten Solar Corp.',
        role: 'Engineer of Record',
        img: '/img/cases/scotts-valley-rooftop.jpg',
        imgAlt: 'Commercial low-slope roof with arrays and rooftop units',
        points: [
          'Full structural package using the IronRidge Tilted System',
          'Attachment layout coordinated around existing rooftop equipment and curbs',
        ],
        source: 'Engineering service brochure, p.1',
      },
      {
        title: 'Solar Canopy Over Rooftop Equipment',
        meta: 'custom canopy',
        location: 'Nationwide',
        client: 'Commercial building owners',
        role: 'Structural design',
        img: '/img/cases/mechanical-unit-canopy.jpg',
        imgAlt: 'Rendered solar canopy bridging over rooftop mechanical units',
        points: [
          'Canopy structure spanning and screening rooftop equipment units while carrying an array',
          'Post and beam layout resolved around existing equipment access and service clearances',
        ],
        source: '10-year development summary, p.4',
      },
      {
        title: 'California Commercial Carport Programme',
        meta: '6 carports · 30–50 kW each',
        location: 'California',
        client: 'Staten Solar Corp.',
        role: 'Engineer of Record',
        img: '/img/cases/commercial-carport.jpg',
        imgAlt: 'Parking lot solar carport with single-side posts',
        points: [
          'Certified conventional HSS steel and cold-formed steel carport frames',
          'Greater clearance (9 ft minimum) with posts offset to one end of the canopy',
          '30 in. to 36 in. diameter drilled concrete pier foundations',
        ],
        source: '10-year development summary, p.2',
      },
      {
        title: 'Agricultural Ground-Mount Programme',
        meta: '8 projects · 250–500 kW each',
        location: 'Southern California',
        client: 'Staten Solar Corp.',
        role: 'Engineer of Record',
        img: '/img/cases/agricultural-ground-mount.jpg',
        imgAlt: 'Ground-mounted array over farmland at sunset',
        points: [
          'Developed over levees and open farmland, certifying an economical cold-formed steel racking system',
          'Direct-driven posts or concrete pier footings depending on soil and levee constraints',
          'Standard racking customized with lateral tension cables or vertical knee braces for larger modules and intensive seismic demand',
        ],
        source: '10-year development summary, p.2',
      },
    ],
  },
  {
    id: 'residential',
    label: 'Residential Solar & System Certification',
    blurb:
      'Product-level certification letters plus 270+ site-specific residential sign-offs, including installations well outside code-prescribed limits.',
    cases: [
      {
        title: 'IronRidge Racking System Certification Letters',
        meta: 'XR-10 / XR-100 / XR-1000 · AIRE A1 / A2',
        location: 'Nationwide',
        client: 'IronRidge Inc.',
        role: 'Engineer of Record',
        img: '/img/cases/irongridge-span-table.jpg',
        imgAlt: 'Pre-certified span table from a racking system certification letter',
        points: [
          'EOR of certification letters for flush and tilted systems built on the XR rail family',
          'Open-channel AIRE A1 and A2 rail systems covered under the same programme',
          'Pre-certified span tables and attachment reactions published across a range of wind, snow and earthquake loads',
        ],
        source: '10-year development summary, p.3',
      },
      {
        title: 'Roof Attachment Certification Letters',
        meta: 'Flashvue · Flashfoot 2 · KO Tile · All Tile Hook',
        location: 'Nationwide',
        client: 'IronRidge Inc.',
        role: 'Engineer of Record',
        img: '/img/cases/roof-attachment-detail.jpg',
        imgAlt: 'Sealed roof attachment detail drawing',
        points: [
          'EOR of multiple roof attachment certification letters',
          'Attachment details and flashing products qualified for asphalt, tile and metal roof coverings',
        ],
        source: '10-year development summary, p.3',
      },
      {
        title: '270+ Site-Specific Residential Sign-Offs',
        meta: '270+ sites',
        location: 'Nationwide',
        client: 'EPC & installer partners',
        role: 'Engineer of Record',
        img: '/img/cases/steep-barn-array.jpg',
        imgAlt: 'Arrays on a steep red barn roof',
        points: [
          'Site-specific structural sign-off across standard and non-standard residential conditions',
          'Curved and complex roof combinations, plus steep gambrel, mansard and sawtooth slopes',
          'Engineering solutions developed for conditions beyond code specification limits after code and paper review',
        ],
        source: '10-year development summary, p.3–4',
      },
      {
        title: 'High-Wind Waterfront Cases',
        meta: 'up to 195 mph',
        location: 'Cayman Islands · Guam',
        client: 'EPC & installer partners',
        role: 'Engineer of Record',
        img: '/img/cases/waterfront-high-wind.jpg',
        imgAlt: 'Aerial of a waterfront installation in a high-wind coastal zone',
        points: [
          'Waterfront residential sites carrying design wind speeds up to 195 mph',
          'Exposure and topography handled explicitly rather than defaulted to a code category',
        ],
        source: '10-year development summary, p.3',
      },
      {
        title: 'Extreme Snow-Load Roof Programme',
        meta: 'up to 420 psf ground snow',
        location: 'High-snow regions',
        client: 'EPC & installer partners',
        role: 'Engineer of Record',
        img: '/img/cases/extreme-snow-roof.jpg',
        imgAlt: 'Steep conical roofs under heavy snow cover',
        points: [
          'Ground snow loads up to 420 psf carried through to attachment and rail design',
          'Steep conical and shed geometries used to manage shedding and unbalanced drift',
        ],
        source: '10-year development summary, p.3',
      },
      {
        title: 'Complex & Curved Roof Array Programme',
        meta: 'non-standard geometry',
        location: 'Nationwide',
        client: 'Residential developers',
        role: 'Structural design',
        img: '/img/cases/curved-roof-array.jpg',
        imgAlt: 'Arrays adapted to a curved metal barn roof',
        points: [
          'Racking adapted to barrel-vaulted and compound roof forms',
          'Attachment layout resolved against purlin position rather than idealized framing',
        ],
        source: '10-year development summary, p.3',
      },
      {
        title: 'Custom Pergolas & Rooftop-Unit Canopies',
        meta: 'fully customized racking',
        location: 'Nationwide',
        client: 'Residential & commercial',
        role: 'Structural design',
        img: '/img/cases/solar-pergola.jpg',
        imgAlt: 'Rendered residential solar pergola and racking schematic',
        points: [
          'Fully customized residential solar pergola configurations',
          'Carports designed with non-standard racking geometry',
          'Creative canopy treatments placed over rooftop equipment units',
        ],
        source: '10-year development summary, p.4',
      },
    ],
  },
  {
    id: 'industrial',
    label: 'Industrial, Facility Upgrade & Steel Connections',
    blurb:
      'Add-ons, repairs and reinforcement for industrial and institutional facilities, including heavy connection design to AISC Construction Manual Part 13.',
    cases: [
      {
        title: 'Astranis Space Technologies — Composite Deck Load Rating',
        meta: '2 shipping container units',
        location: 'California',
        client: 'Astranis Space Technologies',
        role: 'Structural assessment',
        img: '/img/cases/astranis-deck-drawing.jpg',
        imgAlt: 'Container and base-plate layout over the mezzanine deck',
        points: [
          'Assessed structural capacity of an industry-use composite deck supporting two shipping container loads',
          'Defined container positioning, base plates and load transfer paths to the supporting steel',
          'Recommended reinforcement measures for the mezzanine deck and stair approach',
        ],
        source: 'Project summary, p.1',
      },
      {
        title: 'NBC Sports Center — Heavy-Duty Brace Connections',
        meta: 'AISC CM Part 13',
        location: 'Connecticut',
        client: 'McLaren Engineering Group',
        role: 'Connection design & calculation',
        img: '/img/cases/nbc-sports-center.jpg',
        imgAlt: 'NBC Sports Group facility exterior',
        points: [
          'Heavy-duty steel brace connection detailing and calculation preparation',
          'All applicable failure modes checked for members and connection components',
          'Deliverables prepared to AISC Construction Manual Part 13',
        ],
        source: 'Project summary, p.2',
      },
      {
        title: 'Bronx Mental Health Facility — Truss-to-Column Connection',
        meta: 'shop drawing approval',
        location: 'Bronx, NY',
        client: 'McLaren Engineering Group',
        role: 'Connection design & calculation',
        img: '/img/cases/bronx-truss-connection.jpg',
        imgAlt: 'Hand-calculated connection detail sketch',
        points: [
          'Roof truss top chord to column support connection detailing and calculation',
          'Prepared per AISC Construction Manual to support contractor shop drawing approval',
        ],
        source: 'Project summary, p.3',
      },
      {
        title: "Macy's Herald Square Renovation — Custom Steel Connections",
        meta: 'existing building renovation',
        location: 'New York City',
        client: 'McLaren Engineering Group',
        role: 'Connection calculation',
        img: '/img/cases/macys-herald-square.jpg',
        imgAlt: "Macy's Herald Square flagship building",
        points: [
          'Customized steel connections developed for an existing building renovation',
          'Connection capacity calculated for each detail to support EOR approval',
        ],
        source: 'Project summary, p.3',
      },
      {
        title: 'ConEdison Dunwoodie Substation — Transmission Tower Foundation Repair',
        meta: 'foundation replacement',
        location: 'New York',
        client: 'McLaren Engineering Group',
        role: 'Repair design',
        img: '/img/cases/dunwoodie-tower-foundation.jpg',
        imgAlt: 'Transmission tower legs on new concrete pad bases',
        points: [
          'Replaced corroded anchor bolts and deteriorated concrete footing',
          'New concrete pad supports designed and detailed for the existing tower geometry',
        ],
        source: 'Project summary, p.2',
      },
      {
        title: 'Complex Steel Connection Detailing Programme',
        meta: 'multiple facilities',
        location: 'New York & Connecticut',
        client: 'McLaren Engineering Group',
        role: 'Detailing & calculation',
        img: '/img/cases/steel-connection-details.jpg',
        imgAlt: 'Set of steel connection detail calculations',
        points: [
          'HSS-to-W-beam, W-beam-to-HSS-post and W-beam-to-pipe-column connection design',
          'Calculations prepared to AISC Construction Manual with all governing failure modes',
          'Output packaged for EOR review and shop drawing circulation',
        ],
        source: 'Project summary, p.2–3',
      },
    ],
  },
  {
    id: 'inspection',
    label: 'Existing-Building Assessment & Field Inspection',
    blurb:
      'Field investigation, as-built survey, pile program inspection and special-structure sign-off for authorities having jurisdiction.',
    cases: [
      {
        title: 'West Point Academy — Power Plant Design-Inspection',
        meta: 'new chiller equipment',
        location: 'New York',
        client: 'McLaren Engineering Group',
        role: 'Field inspection & as-built',
        img: '/img/cases/west-point-power-plant.jpg',
        imgAlt: 'Academy power plant building and equipment room',
        points: [
          'Conducted field inspection and survey of the power plant facility',
          'Produced existing structural as-built drawings',
          'Determined available load carrying capacity for new chiller devices and the rooftop unit',
          'Included replacement design of the rooftop steel dunnage system',
        ],
        source: 'Project summary, p.2',
      },
      {
        title: 'Brooklyn Pier 12 — Public Event Roof Load Inspection',
        meta: 'NYFD sign-off',
        location: 'Brooklyn, NY',
        client: 'McLaren Engineering Group',
        role: 'Inspection & report',
        img: '/img/cases/brooklyn-pier-12.jpg',
        imgAlt: 'Brooklyn Pier 12 metal-roofed pavilion beside a docked cruise ship',
        points: [
          'Inspected and assessed existing metal roof capacity to host loads from a public gathering event',
          'Combined load information and observed steel structural condition into a report for NYFD approval',
        ],
        source: 'Project summary, p.2',
      },
      {
        title: 'Port Imperial — 800+ Concrete-Filled Steel Pile Inspection',
        meta: '800+ piles',
        location: 'Weehawken, NJ',
        client: 'McLaren Engineering Group',
        role: 'Field inspection & qualification',
        img: '/img/cases/port-imperial-piles.jpg',
        imgAlt: 'Pile driving rig at the Port Imperial waterfront',
        points: [
          'Day-to-day field inspection of steel pile installation to confirm specification compliance',
          'Recorded real-time pile embedment and blow counts',
          'Issued acceptance or rejection of each installed pile based on capacity derived from field records',
        ],
        source: 'Project summary, p.4',
      },
      {
        title: 'Lees Sandwich Warehouse — Structural Inspection & Assessment',
        meta: '130 ft × 200 ft glulam roof',
        location: 'San Jose, CA',
        client: 'Staten Solar Corp.',
        role: 'Field investigation',
        img: '/img/cases/lees-warehouse-roof.jpg',
        imgAlt: 'Warehouse interior showing the glulam roof framing',
        points: [
          'Field investigation of a lightweight roof system composed of glulam timber girders',
          'Determined available roof capacity to support the proposed new solar array weight',
        ],
        source: 'Project summary, p.4',
      },
      {
        title: 'Thousand Oaks Public Library — Rooftop Solar System Review',
        meta: '4 facilities',
        location: 'Thousand Oaks, CA',
        client: 'Staten Solar Corp.',
        role: 'Field investigation & capacity review',
        img: '/img/cases/thousand-oaks-rooftop-plan.jpg',
        imgAlt: 'Rooftop plan showing array zones across the library complex',
        points: [
          'Performed field investigation and structural capacity review across Grant R. Hall, the Adult Center, the Teen Center and the Newbury public library',
          'Determined existing roof capacities against additional new solar array weights',
        ],
        source: 'Project summary, p.5',
      },
      {
        title: '"Race for the Cure" Finish Line Structure',
        meta: 'NYFD sign-off',
        location: 'New York',
        client: 'Christie Engineering PC',
        role: 'Inspection & sign-off',
        img: '/img/cases/race-for-the-cure-arch.jpg',
        imgAlt: 'Event finish line arch structure',
        points: [
          'Determined the wind load required counterweights and equivalent sand buckets',
          'Analysis performed with a RISA model and signed off for NYFD',
        ],
        source: 'Project summary, p.5',
      },
      {
        title: '"Salesforce" Exhibit Structure Inspection',
        meta: '20 ft × 60 ft tent · SFFD',
        location: 'San Francisco',
        client: 'McLaren Engineering Group',
        role: 'Inspection & sign-off',
        img: '/img/cases/salesforce-exhibit-model.jpg',
        imgAlt: 'Analytical model of the exhibition tent structure',
        points: [
          'Verified capacity and stability of a 20 ft × 60 ft pre-assembled exhibition tent using a RISA model',
          'Determined the required counterweight at each perimeter post for SFFD sign-off',
        ],
        source: 'Project summary, p.5',
      },
    ],
  },
  {
    id: 'development',
    label: 'Contemporary Residential Development',
    blurb:
      'Gravity and lateral systems for high-end contemporary residences — wood frame, steel moment frames, timber shear walls and concrete floor systems.',
    cases: [
      {
        title: 'Two-Story Contemporary Residence',
        meta: 'wood + steel + timber',
        location: 'Southern California',
        client: 'Structures Inc.',
        role: 'Structural design',
        img: '/img/cases/residential-contemporary.jpg',
        imgAlt: 'Rendered two-story contemporary residence',
        points: [
          'Structural gravity load framing and shear wall design for a high-end residence',
          'Work included wood frame, steel moment frame and timber shear wall design',
        ],
        source: 'Project summary, p.3',
      },
      {
        title: 'Model-Style Residence — Additional Story',
        meta: 'concrete flat slab',
        location: 'Southern California',
        client: 'Structures Inc.',
        role: 'Structural analysis',
        img: '/img/cases/residential-flat-slab-residence.jpg',
        imgAlt: 'Contemporary board-formed concrete residence',
        points: [
          'Structural analysis of the concrete floor system supporting a newly added story',
          'Concrete flat slab analysis coordinated with the existing framing condition',
        ],
        source: 'Project summary, p.4',
      },
      {
        title: 'Wood-Steel Combination Complex',
        meta: 'TJI + timber shear wall',
        location: 'Southern California',
        client: 'Structures Inc.',
        role: 'Structural design',
        img: '/img/cases/residential-wood-steel-complex.jpg',
        imgAlt: 'Point-cloud survey of a multi-wing residential complex',
        points: [
          'Structural design for a contemporary wood-steel combination complex development',
          'Work included TJI joists, timber shear walls and moment frame design',
        ],
        source: 'Project summary, p.4',
      },
    ],
  },
]

export const projectCaseCount = projectGroups.reduce(
  (sum, group) => sum + group.cases.length,
  0,
)
