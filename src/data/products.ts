// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTS CMS DATA — add / edit products here
// Each product becomes its own page at /products/[slug]
// ─────────────────────────────────────────────────────────────────────────────

export type ProductSpec = { label: string; value: string }
export type ApplicationStep = { step: number; title: string; description: string }
export type FAQItem = { question: string; answer: string }

export interface Product {
  slug: string
  name: string
  code: string
  tagline: string
  category: string
  badge?: string          // e.g. "Interior" | "Exterior" | "New"
  image: string           // path under /public/images/
  heroImage: string
  description: string
  longDescription: string
  features: string[]
  specs: ProductSpec[]
  applications: string[]
  applicationSteps: ApplicationStep[]
  coverage: string
  packSize: string
  colours?: string[]
  faqs: FAQItem[]
  relatedProducts: string[] // slugs
  tdsFile?: string          // PDF path under /public/
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const products: Product[] = [
  // ── 1. C1T — Interior Tile Adhesive ────────────────────────────────────────
  {
    slug: 'c1t-interior-tile-adhesive',
    name: 'Paver Chemco C1T',
    code: 'C1T',
    tagline: 'Polymer-Enhanced Tile Adhesive for Interior Applications',
    category: 'Tile Adhesive',
    badge: 'Interior',
    image: '/images/products/c1t-bag.jpg',
    heroImage: '/images/products/c1t-bag.jpg',
    description:
      'C1T is a ready-to-use polymer-modified cementitious tile adhesive for fixing ceramic tiles of standard size on walls and floors, as well as porous natural stone on floors in interior areas.',
    longDescription:
      'Paver Chemco C1T is your ultimate solution for interior tile adhesion. This polymer-modified cementitious adhesive is engineered for securing ceramic tiles of standard size on both walls and floors, as well as porous natural stone on floors in interior spaces. Simply add water and mix to get a smooth, workable paste with an extended pot life — allowing you to fix larger areas without rushing. Trusted by contractors, masons, and homeowners across Kerala and Tamil Nadu.',
    features: [
      'Ready-to-mix — add water only',
      'Smooth paste consistency for effortless application',
      'Extended pot life — mix larger batches',
      'Strong bond with excellent adhesion strength',
      'Cost-effective choice for interior tiling',
      'Suitable for ceramic tiles and porous natural stone',
    ],
    specs: [
      { label: 'Chemical Base', value: 'Polymer-modified cementitious mortar' },
      { label: 'Appearance', value: 'Grey powder' },
      { label: 'Pack Size', value: '30 kg bag' },
      { label: 'Coverage', value: '4–4.5 kg/sqm at 3mm bed thickness' },
      { label: 'Mixing Ratio', value: 'Water : Powder = 25:75 to 28:72' },
      { label: 'Pot Life', value: '2–3 hours at 27°C' },
      { label: 'Open Time', value: '20–30 minutes' },
      { label: 'Adjustability Time', value: '10 minutes' },
      { label: 'Foot Traffic', value: '24 hours' },
      { label: 'Full Cure', value: '72 hours' },
      { label: 'Tensile Adhesion Strength', value: '≥0.5 N/mm²' },
      { label: 'Shelf Life', value: '12 months in original sealed packaging' },
      { label: 'Application Temp', value: '+5°C to +40°C' },
    ],
    applications: [
      'Ceramic tiles on interior walls',
      'Ceramic tiles on interior floors',
      'Porous natural stone on floors',
      'Cementitious screeds and plasters',
      'Concrete and masonry blocks',
    ],
    applicationSteps: [
      { step: 1, title: 'Prepare the Substrate', description: 'Ensure the surface is clean, dry, and free from dust, grease, and loose particles. Pre-wet highly absorbent surfaces to saturated surface dry (SSD) condition.' },
      { step: 2, title: 'Mix the Adhesive', description: 'Pour 250–280 ml of clean water per 1 kg of powder. Mix thoroughly with a slow-speed drill (max. 300 rpm) for 3–5 minutes until a smooth, lump-free paste is obtained. Rest for 3 minutes and re-mix.' },
      { step: 3, title: 'Apply to Substrate', description: 'Spread the adhesive onto the prepared substrate using a notched trowel (6×6 mm or 8×8 mm depending on tile size). Apply in one direction to create uniform ridges.' },
      { step: 4, title: 'Set the Tiles', description: 'Press tiles firmly into the adhesive bed with a slight twisting motion. Use tile spacers to maintain uniform joint width. Check alignment and level regularly.' },
      { step: 5, title: 'Cure & Grout', description: 'Allow adhesive to cure for minimum 24 hours before grouting. Do not disturb tiles during curing. Grout joints with Paver Chemco Tile Grout once adhesive has set.' },
    ],
    coverage: '4–4.5 kg/sqm at 3 mm bed thickness. Coverage may vary depending on surface irregularities.',
    packSize: '30 kg bag',
    faqs: [
      { question: 'What is C1T tile adhesive used for?', answer: 'Paver Chemco C1T is a polymer-modified cementitious tile adhesive designed for fixing ceramic tiles of standard size on interior walls and floors, as well as porous natural stone on interior floors. It is ideal for use on cementitious screeds, plasters, and masonry substrates inside buildings.' },
      { question: 'How much C1T adhesive do I need per square metre?', answer: 'At a 3 mm bed thickness, expect a coverage rate of 4–4.5 kg per sqm. For a 100 sqm floor, you would need approximately 4–5 bags of 30 kg. Coverage may vary based on surface irregularities and tile back profile.' },
      { question: 'Can I use C1T for floor tiles in a bathroom?', answer: 'Yes, C1T is suitable for fixing ceramic floor and wall tiles in bathrooms. However, for bathroom floors that require waterproofing under the tile bed, we recommend applying Paver Chemco WP Membrane before tiling.' },
      { question: 'How long does C1T tile adhesive take to dry?', answer: 'C1T allows light foot traffic after 24 hours and reaches full cure in 72 hours at standard conditions (27°C, 50% RH). Cooler or more humid conditions may extend the curing time.' },
      { question: 'What is the difference between C1T and C1TE?', answer: 'C1T is formulated for interior applications on standard ceramic tiles. C1TE is an enhanced version designed for exterior applications, with higher polymer content that provides better flexibility, slip resistance, and weather resistance for vitrified tiles, tile-on-tile renovation, and outdoor surfaces.' },
    ],
    relatedProducts: ['c1te-exterior-tile-adhesive', 'tile-grout', 'wp-membrane'],
    tdsFile: '/tds/TDS_C1T.pdf',
    seo: {
      title: 'C1T Interior Tile Adhesive | Best Tile Adhesive Kerala & Tamil Nadu',
      description: 'Buy Paver Chemco C1T polymer-modified tile adhesive for interior floors and walls. Coverage 4–4.5 kg/sqm. Available in Kerala and Tamil Nadu. 30 kg bag.',
      keywords: [
        'C1T tile adhesive Kerala',
        'interior tile adhesive Kerala',
        'tile adhesive for bathroom Kerala',
        'C1T tile adhesive Tamil Nadu',
        'best tile adhesive interior',
        'ceramic tile adhesive Kerala',
        'tile adhesive 30kg price Kerala',
        'tile adhesive Kochi',
        'tile adhesive Calicut',
        'tile adhesive Chennai',
      ],
    },
  },

  // ── 2. C1TE — Exterior Tile Adhesive ────────────────────────────────────────
  {
    slug: 'c1te-exterior-tile-adhesive',
    name: 'Paver Chemco C1TE',
    code: 'C1TE',
    tagline: 'Polymer-Enhanced Tile Adhesive for Exterior Applications',
    category: 'Tile Adhesive',
    badge: 'Exterior',
    image: '/images/products/c1te-bag.jpg',
    heroImage: '/images/products/c1te-bag.jpg',
    description:
      'C1TE is a polymer-modified cementitious tile adhesive for exterior applications including vitrified tiles, tile-on-tile renovation, and outdoor floor and wall projects.',
    longDescription:
      'Paver Chemco C1TE is your superior choice for exterior floor and wall projects. This enhanced polymer-modified cementitious tile adhesive is tailored for a wide range of exterior applications — fixing vitrified tiles on floors, ceramic tiles on walls and floors (regular size), overlaying old tiles, and various other flooring materials. With excellent slip resistance, extended working time, and unmatched bond strength, C1TE is the professional solution for Kerala\'s monsoon climate and Tamil Nadu\'s diverse conditions.',
    features: [
      'Versatile — ideal for tile-on-tile installations',
      'Strong adhesion for dependable results even in wet conditions',
      'Extended working time with slip-resistant properties',
      'Excellent workability for quick hassle-free application',
      'Single-component — add water only',
      'Superior choice for exterior floor and wall projects',
    ],
    specs: [
      { label: 'Chemical Base', value: 'Enhanced polymer-modified cementitious mortar' },
      { label: 'Appearance', value: 'Grey powder' },
      { label: 'Pack Size', value: '30 kg bag' },
      { label: 'Coverage', value: '4–4.5 kg/sqm at 3mm bed thickness' },
      { label: 'Mixing Ratio', value: 'Water : Powder = 25:75 to 28:72' },
      { label: 'Pot Life', value: '2–3 hours at 27°C' },
      { label: 'Open Time', value: '25–35 minutes' },
      { label: 'Adjustability Time', value: '10–15 minutes' },
      { label: 'Foot Traffic', value: '24 hours' },
      { label: 'Full Cure', value: '72 hours' },
      { label: 'Tensile Adhesion Strength', value: '≥0.5 N/mm² (≥0.5 N/mm² after water immersion)' },
      { label: 'Shelf Life', value: '12 months in original sealed packaging' },
      { label: 'Application Temp', value: '+5°C to +40°C' },
    ],
    applications: [
      'Vitrified tiles on exterior floors',
      'Ceramic tiles on exterior walls and floors',
      'Tile-on-tile renovation (old tile overlaying)',
      'Balconies, terraces, and outdoor areas',
      'Cementitious screeds, concrete masonry, and blocks',
    ],
    applicationSteps: [
      { step: 1, title: 'Prepare the Substrate', description: 'Substrate must be clean, sound, and free from grease, dust, oil, and loose particles. For tile-on-tile applications, ensure existing tiles are firmly bonded — remove any loose or hollow tiles. Clean with water and allow to dry.' },
      { step: 2, title: 'Mix the Adhesive', description: 'Add 250–280 ml of clean water per 1 kg of C1TE powder. Mix with a slow-speed drill mixer for 3–5 minutes until smooth and lump-free. Rest for 3 minutes and remix before use. Do not add extra water.' },
      { step: 3, title: 'Apply Using Notched Trowel', description: 'Apply adhesive to the substrate using an appropriate notched trowel (8×8 mm for vitrified tiles, 6×6 mm for regular ceramic). Apply in one direction to create uniform, parallel ridges. Back-butter large format tiles.' },
      { step: 4, title: 'Fix the Tiles', description: 'Press tiles firmly with a slight twisting motion to ensure full contact. Use tile spacers for uniform joints. For exterior floors, ensure adequate expansion joints every 3–4 m.' },
      { step: 5, title: 'Grouting', description: 'Allow full cure for 24–48 hours before grouting exterior areas. For exposed exterior joints, use Paver Chemco Epoxy Grout for maximum weather and stain resistance.' },
    ],
    coverage: '4–4.5 kg/sqm at 3 mm bed thickness. Coverage may vary based on tile size and surface conditions.',
    packSize: '30 kg bag',
    faqs: [
      { question: 'Can C1TE be used for tile-on-tile installation?', answer: 'Yes, Paver Chemco C1TE is specifically designed and tested for tile-on-tile applications. The enhanced polymer content ensures excellent adhesion to glazed, vitrified, and ceramic tile surfaces. Ensure existing tiles are clean, sound, and firmly bonded before application.' },
      { question: 'Is C1TE suitable for Kerala\'s monsoon conditions?', answer: 'Absolutely. C1TE is formulated with higher polymer content specifically to handle the wet and humid conditions typical of Kerala monsoons. The adhesive maintains excellent bond strength even with regular exposure to rain and moisture once fully cured.' },
      { question: 'What is the difference between C1TE and regular cement for laying tiles?', answer: 'C1TE offers a much thinner application (3 mm vs 20–30 mm for cement-sand mortar), better tensile adhesion strength, extended working time, and reduced material wastage. It is especially superior in wet exterior areas where conventional cement can fail due to moisture and thermal movement.' },
      { question: 'Can I use C1TE for vitrified tiles on outdoor floors in Tamil Nadu?', answer: 'Yes, C1TE is the recommended product for vitrified tile installation on outdoor floors in Tamil Nadu. The high polymer content provides excellent grip and thermal movement accommodation, critical for the high temperature variations experienced in Tamil Nadu.' },
      { question: 'How long do I need to wait before exposing C1TE to rain?', answer: 'C1TE requires a minimum of 24 hours before light rain exposure and 72 hours for full cure and resistance to sustained wetting. Protect freshly tiled surfaces during the curing period wherever possible.' },
    ],
    relatedProducts: ['c1t-interior-tile-adhesive', 'epoxy-grout', 'wp-membrane'],
    tdsFile: '/tds/TDS_C1TE.pdf',
    seo: {
      title: 'C1TE Exterior Tile Adhesive | Vitrified Tile Adhesive Kerala & Tamil Nadu',
      description: 'Paver Chemco C1TE — superior exterior tile adhesive for vitrified tiles, tile-on-tile installation. Best tile adhesive for Kerala monsoon and Tamil Nadu climate. 30 kg bag.',
      keywords: [
        'exterior tile adhesive Kerala',
        'vitrified tile adhesive Kerala',
        'tile on tile adhesive India',
        'C1TE tile adhesive',
        'exterior tile adhesive Tamil Nadu',
        'tile adhesive for terrace Kerala',
        'tile adhesive monsoon Kerala',
        'vitrified tile adhesive Chennai',
        'outdoor tile adhesive Kerala',
        'tile adhesive Trivandrum',
      ],
    },
  },

  // ── 3. Block Jointing Mortar ─────────────────────────────────────────────────
  {
    slug: 'block-jointing-mortar',
    name: 'Paver Chemco Block Jointing Mortar',
    code: 'BJM',
    tagline: 'Polymer-Modified Mortar for AAC Block, Fly Ash Bricks & Concrete Blocks',
    category: 'Block Mortar',
    badge: 'AAC Blocks',
    image: '/images/products/block-mortar-bag.jpg',
    heroImage: '/images/products/block-mortar-bag.jpg',
    description:
      'Ready-to-use grey cement based non-shrinking, self-curing mortar for fixing AAC blocks, Concrete blocks, and fly ash bricks — using just 3 mm joints instead of conventional 12–15 mm mortar beds.',
    longDescription:
      'Paver Chemco Block Jointing Mortar is a grey cement-based, polymer-modified, non-shrinking, self-curing mortar specifically engineered for fixing AAC (Autoclaved Aerated Concrete) blocks, fly ash bricks, and concrete blocks. Unlike conventional cement-sand mortar that requires 12–15 mm thick joints, this product requires only 3 mm — significantly reducing material consumption, wall weight, and construction time. Its excellent flowability, high tensile adhesion strength, and superior water retention make it the preferred choice for modern lightweight block construction across Kerala and Tamil Nadu.',
    features: [
      'Ready to use — only water to be added',
      'Thinner 3 mm joints vs 12–15 mm conventional mortar',
      'Very high tensile adhesion strength',
      'Better bond than conventional cement-based mortar',
      'Faster to apply due to excellent flowability',
      'Non-shrinking — prevents crack formation',
      'Excellent water retention properties',
      'Economical — less material required per sqm',
    ],
    specs: [
      { label: 'Chemical Base', value: 'Cementitious mortar modified with polymers' },
      { label: 'Appearance', value: 'Grey powder' },
      { label: 'Pack Size', value: '40 kg bag' },
      { label: 'Coverage', value: '4–5 kg per sqm at 3 mm average thickness' },
      { label: 'Mixing Ratio', value: 'Water : Powder = 20:80 to 25:75' },
      { label: 'Bulk Density', value: '1.4–1.5 g/cc' },
      { label: 'Compressive Strength', value: '>10 MPa at 28 days' },
      { label: 'Tensile Adhesion Strength', value: '≥0.8 N/mm²' },
      { label: 'Laying Thickness', value: '3 mm' },
      { label: 'Pot Life', value: '90 minutes' },
      { label: 'Shelf Life', value: '9 months from date of production' },
      { label: 'Storage', value: 'Dry and cool conditions, sealed packaging' },
      { label: 'Application Temp', value: '+5°C to +40°C' },
    ],
    applications: [
      'AAC (Autoclaved Aerated Concrete) block walls',
      'Fly ash brick walls',
      'Concrete block walls',
      'Lightweight block partition walls',
      'Load-bearing block walls',
    ],
    applicationSteps: [
      { step: 1, title: 'Surface Preparation', description: 'The substrate must be structurally sound, free from dirt, oil, grease, and loose particles. Pre-wetting of substrate is essential — dampen with water but ensure surface is in saturated surface dry (SSD) condition before application.' },
      { step: 2, title: 'Mixing', description: 'Pour 200–250 ml of clean potable water per 1 kg of powder into a clean container. Mix thoroughly using a paddle mixer or slow-speed drill for 3–5 minutes. Allow the mix to stand for 2–3 minutes for bubbles to disperse, then remix before use.' },
      { step: 3, title: 'Apply to Block Surface', description: 'Apply a thin 2–3 mm layer of mortar on the clean and levelled surface of the block using a notched trowel or spatula.' },
      { step: 4, title: 'Position the Block', description: 'Press the subsequent block firmly into position, gently pressing with the handle of a trowel to ensure full contact and correct alignment.' },
      { step: 5, title: 'Curing', description: 'Do not disturb the assembly for 24 hours. The mortar is self-curing, but mist curing in hot, dry weather helps achieve optimum strength.' },
    ],
    coverage: '4–5 kg per sqm at 3 mm average joint thickness. Approx. 8–10 bags per 100 sqm of wall area.',
    packSize: '40 kg bag',
    faqs: [
      { question: 'What is block jointing mortar used for?', answer: 'Paver Chemco Block Jointing Mortar is specifically designed for laying AAC blocks, fly ash bricks, and concrete blocks. It replaces conventional cement-sand mortar, requiring only a 3 mm joint instead of the traditional 12–15 mm, resulting in stronger walls with less material.' },
      { question: 'How much block mortar do I need for AAC block walls?', answer: 'At a 3 mm joint thickness, consumption is approximately 4–5 kg per square metre of wall area. For a 100 sqm wall, you would need approximately 400–500 kg, or 10–12 bags of 40 kg.' },
      { question: 'Why use block jointing mortar instead of regular cement sand mortar?', answer: 'Block jointing mortar provides thinner joints (3 mm vs 12–15 mm), stronger adhesion (≥0.8 N/mm² tensile strength), faster construction speed, reduced wall weight, and lower material cost per sqm. It also prevents the cracking commonly seen at block joints with conventional mortar.' },
      { question: 'Is block jointing mortar available in Kerala and Tamil Nadu?', answer: 'Yes, Paver Chemco Block Jointing Mortar is distributed across Kerala and Tamil Nadu through our dealer network. Contact us at business@furner.in or +91 9994491827 to find your nearest dealer.' },
      { question: 'Can I use this mortar for fly ash bricks?', answer: 'Yes. Paver Chemco Block Jointing Mortar is formulated for AAC blocks, fly ash bricks, and concrete blocks. The polymer modification ensures excellent adhesion to all these block types.' },
    ],
    relatedProducts: ['c1t-interior-tile-adhesive', 'c1te-exterior-tile-adhesive'],
    tdsFile: '/tds/TDS_BlockMortar.pdf',
    seo: {
      title: 'AAC Block Jointing Mortar Kerala & Tamil Nadu | Paver Chemco',
      description: 'Paver Chemco Block Jointing Mortar — polymer-modified mortar for AAC blocks, fly ash bricks, concrete blocks. 3 mm joint, >10 MPa compressive strength. Available Kerala & Tamil Nadu.',
      keywords: [
        'AAC block jointing mortar Kerala',
        'block mortar Kerala',
        'fly ash brick mortar Kerala',
        'AAC block adhesive Tamil Nadu',
        'block jointing mortar Chennai',
        'concrete block mortar Kerala',
        'AAC block mortar price Kerala',
        'block mortar Kochi',
        'lightweight block mortar Kerala',
        'block mortar Coimbatore',
      ],
    },
  },

  // ── 4. Tile Grout ─────────────────────────────────────────────────────────────
  {
    slug: 'tile-grout',
    name: 'Paver Chemco Tile Grout',
    code: 'TG-01',
    tagline: 'Polymer-Modified Cementitious Tile Joint Filler',
    category: 'Grout',
    badge: 'Interior & Exterior',
    image: '/images/products/tile-grout-bag.jpg',
    heroImage: '/images/products/tile-grout-hero.jpg',
    description:
      'Single-component polymer-modified cementitious grout for filling tile joints from 1–6 mm in interior and exterior walls and floors.',
    longDescription:
      'Paver Chemco Tile Grout is a premium ready-to-mix, polymer-modified cementitious joint filler for ceramic, vitrified, natural stone, and mosaic tiles. It delivers smooth consistency, excellent colour fastness, and high resistance to water, staining, and efflorescence. Available in 8 standard colours to match any interior or exterior design scheme.',
    features: [
      'Single-component — only water required',
      'Smooth paste consistency for effortless application',
      'Excellent colour fastness — resists fading',
      'High resistance to water and staining',
      'Suitable for joints from 1 to 6 mm',
      'Available in 8 standard colours',
      'Interior and exterior use',
    ],
    specs: [
      { label: 'Chemical Base', value: 'Polymer-modified Portland cement' },
      { label: 'Pack Size', value: '5 kg and 10 kg bags' },
      { label: 'Coverage', value: 'Refer coverage table (tile size dependent)' },
      { label: 'Joint Width', value: '1–6 mm' },
      { label: 'Pot Life', value: '60 minutes at 27°C' },
      { label: 'Foot Traffic', value: '24 hours' },
      { label: 'Full Cure', value: '72 hours' },
      { label: 'Compressive Strength (28d)', value: '>20 N/mm²' },
      { label: 'Flexural Strength (28d)', value: '>7 N/mm²' },
      { label: 'Water Absorption', value: '<5% after 240 min' },
      { label: 'Shelf Life', value: '12 months' },
    ],
    colours: ['White', 'Ivory', 'Grey', 'Beige', 'Charcoal', 'Brown', 'Black', 'Red Oxide'],
    applications: [
      'Ceramic and porcelain tile joints',
      'Vitrified tile joints',
      'Natural stone tile joints',
      'Mosaic tile joints',
      'Interior and exterior walls and floors',
    ],
    applicationSteps: [
      { step: 1, title: 'Prepare Joints', description: 'Ensure tile adhesive is fully cured (min. 24 hours). Remove all spacers, debris, and dust from joints. Joints must be clean and dry.' },
      { step: 2, title: 'Mix Grout', description: 'Add 200–220 ml water per 1 kg of grout powder. Mix with drill or by hand for 3–5 minutes to smooth lump-free paste. Rest 5 minutes, remix.' },
      { step: 3, title: 'Apply', description: 'Spread diagonally across tile surface with a rubber grout float, pressing firmly into joints. Work in 2–3 sqm sections.' },
      { step: 4, title: 'Clean', description: 'After 20–30 minutes, clean tile surface with a damp sponge using circular motion. Rinse sponge frequently. Avoid excess water on joints.' },
      { step: 5, title: 'Final Polish', description: 'After 24 hours, polish tile surface with a dry cloth to remove any haze.' },
    ],
    coverage: 'Depends on tile size and joint width. For 300×300 mm tiles with 3 mm joint: approx. 0.32 kg/m².',
    packSize: '5 kg and 10 kg bags',
    faqs: [
      { question: 'How do I choose the right grout colour?', answer: 'For a seamless, contemporary look, choose a grout colour close to the tile colour. For a contrasting look, choose a complementary colour. White and grey are the most popular choices for Kerala and Tamil Nadu homes. Request a grout colour chart from your Paver Chemco dealer.' },
      { question: 'Can Paver Chemco Tile Grout be used outdoors?', answer: 'Yes. Paver Chemco Tile Grout is suitable for both interior and exterior applications. For areas with higher chemical or water exposure such as swimming pools or commercial kitchens, we recommend Paver Chemco Epoxy Grout instead.' },
      { question: 'How long after tiling can I apply grout?', answer: 'Wait a minimum of 24 hours after tiling before applying grout to allow the tile adhesive to set fully. In humid conditions (such as during Kerala monsoon), allow 48 hours.' },
    ],
    relatedProducts: ['c1t-interior-tile-adhesive', 'c1te-exterior-tile-adhesive', 'epoxy-grout'],
    tdsFile: '/tds/TDS_PaverChemco_TileGrout.pdf',
    seo: {
      title: 'Tile Grout Kerala & Tamil Nadu | Paver Chemco Cementitious Grout',
      description: 'Buy Paver Chemco Tile Grout — polymer-modified, 8 colours, interior & exterior use. Best tile grout for Kerala and Tamil Nadu homes. Available in 5 kg and 10 kg bags.',
      keywords: [
        'tile grout Kerala',
        'grout for tiles Kerala',
        'tile joint filler Kerala',
        'tile grout Tamil Nadu',
        'ceramic tile grout Kerala',
        'grout colour Kerala',
        'tile grout price Kerala',
        'best tile grout India',
        'tile grout Chennai',
        'cement grout for tiles',
      ],
    },
  },

  // ── 5. Epoxy Grout ────────────────────────────────────────────────────────────
  {
    slug: 'epoxy-grout',
    name: 'Paver Chemco Epoxy Grout',
    code: 'EG-01',
    tagline: 'Three-Component Epoxy Resin Tile Joint Grout',
    category: 'Grout',
    badge: 'Chemical Resistant',
    image: '/images/products/epoxy-grout-kit.jpg',
    heroImage: '/images/products/epoxy-grout-hero.jpg',
    description:
      'Three-component (Part A+B+C) high-performance epoxy grout with outstanding chemical resistance, zero water absorption, and permanent colour fastness for demanding commercial and residential applications.',
    longDescription:
      'Paver Chemco Epoxy Grout is a high-performance three-component system comprising Part A (Epoxy Resin), Part B (Hardener), and Part C (Filler Powder). Once combined, it forms an impervious, chemically resistant, permanently colour-fast tile joint that far surpasses conventional cement grouts. No sealing required. Ideal for commercial kitchens, swimming pools, hospitals, laboratories, and anywhere hygiene and chemical resistance are paramount.',
    features: [
      'Outstanding chemical resistance to acids, alkalis, oils',
      'Zero water absorption — fully impervious joints',
      'Permanent colour fastness — no sealing required',
      'Non-shrink formulation for void-free joints',
      'High compressive strength >45 N/mm²',
      'Suitable for joint widths 2–12 mm',
      'Easy cleaning with water and detergent',
    ],
    specs: [
      { label: 'Chemical Base', value: 'Three-component epoxy resin system' },
      { label: 'Pack Size', value: '1 kg, 3 kg, 5 kg pre-batched kits' },
      { label: 'Joint Width', value: '2–12 mm' },
      { label: 'Pot Life (27°C)', value: '45–60 minutes' },
      { label: 'Light Foot Traffic', value: '12 hours' },
      { label: 'Full Traffic', value: '24 hours' },
      { label: 'Full Chemical Resistance', value: '7 days' },
      { label: 'Compressive Strength (7d)', value: '>45 N/mm²' },
      { label: 'Flexural Strength (7d)', value: '>30 N/mm²' },
      { label: 'Water Absorption (240 min)', value: '<0.1 g' },
      { label: 'Shrinkage', value: '<1.5 mm/m' },
      { label: 'Shelf Life', value: '24 months sealed' },
    ],
    colours: ['White', 'Grey', 'Beige', 'Ivory', 'Charcoal', 'Black', 'Brown'],
    applications: [
      'Commercial kitchens and food processing areas',
      'Swimming pools and water features',
      'Hospital floors and walls',
      'Laboratories and pharmaceutical areas',
      'Industrial floors with chemical exposure',
      'Wet rooms and bathroom floors',
    ],
    applicationSteps: [
      { step: 1, title: 'Prepare Joints', description: 'Ensure tile adhesive is fully cured (min. 24 hours). Clean joints thoroughly — must be dry and free from dust, grease, and moisture. Do not apply over wet or damp joints.' },
      { step: 2, title: 'Mix Components', description: 'Empty entire Part A (Resin) and Part B (Hardener) into a clean pail. Mix at max. 100 rpm for 2 minutes. Add Part C (Filler) gradually while mixing for 3–4 minutes until uniform and homogeneous. Do not add water.' },
      { step: 3, title: 'Apply Grout', description: 'Pour mixed grout onto tile surface immediately. Use a hard rubber squeegee diagonally across joints, pressing firmly to ensure full, void-free filling.' },
      { step: 4, title: 'Initial Clean', description: 'After 20–30 minutes, scrub tile surface with clean water and non-abrasive sponge. Wipe with a clean thick cloth. Do not flood joints with water.' },
      { step: 5, title: 'Final Clean', description: 'Perform final clean within 24 hours using neutral pH detergent and warm water. Protect area from chemical contact for 7 days for full cure.' },
    ],
    coverage: 'Depends on tile size and joint width. For 600×600 mm with 3 mm joint: approx. 0.18 kg/m².',
    packSize: '1 kg, 3 kg, 5 kg kits',
    faqs: [
      { question: 'What is epoxy grout and why is it better than cement grout?', answer: 'Epoxy grout is a two or three-component system that cures to form an impervious, chemically resistant, colour-fast joint. Unlike cement grout, it does not absorb water or stains, does not require sealing, and maintains its colour permanently. It is the preferred choice for swimming pools, commercial kitchens, hospitals, and any area with chemical exposure.' },
      { question: 'Is epoxy grout difficult to apply?', answer: 'Epoxy grout is more demanding to apply than cement grout due to its limited pot life and the need to clean excess material promptly. However, with the right technique — working in small sections, cleaning within 20–30 minutes — it is very manageable. We recommend a trial area for first-time users.' },
      { question: 'Can I use epoxy grout in a swimming pool in Kerala?', answer: 'Yes, Paver Chemco Epoxy Grout is ideal for swimming pools. It provides complete water impermeability and resistance to pool chemicals including chlorine. Pools should not be filled for at least 21 days after grouting to allow full cure.' },
    ],
    relatedProducts: ['tile-grout', 'c1te-exterior-tile-adhesive', 'wp-membrane'],
    tdsFile: '/tds/TDS_PaverChemco_EpoxyGrout.pdf',
    seo: {
      title: 'Epoxy Grout Kerala & Tamil Nadu | Chemical Resistant Tile Grout',
      description: 'Paver Chemco Epoxy Grout — 3-component, zero water absorption, chemical resistant. Ideal for swimming pools, kitchens, hospitals in Kerala & Tamil Nadu.',
      keywords: [
        'epoxy grout Kerala',
        'epoxy grout swimming pool Kerala',
        'chemical resistant grout Kerala',
        'epoxy tile grout Tamil Nadu',
        'epoxy grout kitchen Kerala',
        'epoxy grout price India',
        'best epoxy grout Kerala',
        'waterproof grout Kerala',
        'epoxy grout Chennai',
      ],
    },
  },

  // ── 6. Waterproofing Membrane ─────────────────────────────────────────────────
  {
    slug: 'wp-membrane',
    name: 'Paver Chemco WP Membrane',
    code: 'WP-01',
    tagline: 'Single-Component Flexible Cementitious Waterproofing Membrane',
    category: 'Waterproofing',
    badge: 'Crack-Bridging',
    image: '/images/products/wp-membrane-bag.jpg',
    heroImage: '/images/products/wp-membrane-hero.jpg',
    description:
      'Single-component acrylic polymer-modified flexible cementitious waterproofing coating for terraces, bathrooms, basements, and swimming pools.',
    longDescription:
      'Paver Chemco WP Membrane is a single-component, ready-to-mix, acrylic polymer-modified flexible cementitious waterproofing coating. Applied in two or more coats, it forms a seamless, crack-bridging, durable membrane that bonds strongly to concrete, plaster, and masonry substrates. Engineered for Kerala\'s monsoon conditions and Tamil Nadu\'s heat — this is the professional waterproofing solution for terraces, bathrooms, water tanks, basements, and swimming pools.',
    features: [
      'Single-component — only water required',
      'Flexible and crack-bridging (>0.5 mm)',
      'Seamless membrane — no joints or overlaps',
      'Excellent adhesion to concrete, plaster, blocks',
      'Can be applied on damp substrates',
      'UV and weather resistant for exposed roofs',
      'Safe for potable water tanks after full cure',
      'Low VOC — safe for enclosed spaces',
    ],
    specs: [
      { label: 'Chemical Base', value: 'Acrylic polymer-modified cementitious powder' },
      { label: 'Appearance', value: 'Grey powder / Grey slurry (mixed)' },
      { label: 'Pack Size', value: '20 kg bag' },
      { label: 'Coverage per Coat', value: '1.0–1.2 kg/m²' },
      { label: 'Coats Required', value: '2–3 coats (application dependent)' },
      { label: 'DFT per Coat', value: '0.5–0.6 mm' },
      { label: 'Water Demand', value: '300–350 ml per kg' },
      { label: 'Pot Life', value: '60 minutes at 27°C' },
      { label: 'Overcoat Time', value: '4–6 hours at 27°C' },
      { label: 'Full Cure / Ponding Test', value: '7 days' },
      { label: 'Crack-Bridging', value: '>0.5 mm at 23°C' },
      { label: 'Tensile Bond Strength', value: '>0.5 N/mm²' },
      { label: 'Elongation at Break', value: '>30%' },
      { label: 'Water Tightness', value: 'No penetration at 0.5 bar' },
      { label: 'Shelf Life', value: '12 months sealed' },
    ],
    applications: [
      'Terrace and roof waterproofing',
      'Bathroom and toilet floors & walls',
      'Swimming pools and water features',
      'Basements and retaining walls',
      'Overhead water tanks',
      'Balconies and planters',
      'Under-tile waterproofing in wet rooms',
    ],
    applicationSteps: [
      { step: 1, title: 'Prepare Substrate', description: 'Surface must be clean, sound, and free from oil, grease, dust, and loose particles. Fill all cracks wider than 0.5 mm with polymer-modified repair mortar. Pre-wet to SSD condition. Embed 100 mm polyester fabric at all internal corners.' },
      { step: 2, title: 'Mix', description: 'Add 300–350 ml of clean water per 1 kg of powder. Mix with slow-speed drill for 3–5 minutes. Rest 3 minutes and remix. Mix only the quantity usable within 60 minutes.' },
      { step: 3, title: 'First Coat', description: 'Apply evenly with a stiff brush, broom, or roller at 1.0–1.2 kg/m². Work material into surface irregularities. Embed 100 mm fabric at corners while wet.' },
      { step: 4, title: 'Second Coat', description: 'After 4–6 hours (touch dry), apply second coat perpendicular to the first at the same rate. For pools and tanks, apply a third coat.' },
      { step: 5, title: 'Ponding Test', description: 'After 7 days full cure, seal all outlets, fill to 50 mm depth, and pond for 48 hours. Check underside for seepage before tiling or finishing.' },
    ],
    coverage: '1.0–1.2 kg/m² per coat. Terrace: 2.0–3.6 kg/m² total. Bathroom: 2.0–2.4 kg/m² total. Pool: 3.0–3.6 kg/m² total.',
    packSize: '20 kg bag',
    faqs: [
      { question: 'How do I waterproof my terrace in Kerala before monsoon?', answer: 'Clean the terrace thoroughly, repair all cracks, and apply Paver Chemco WP Membrane in 2–3 coats (1.0–1.2 kg/m² per coat) with 4–6 hours between coats. Allow 7 days for full cure and conduct a ponding test before the monsoon season. For best results, apply at least 2 weeks before expected heavy rains.' },
      { question: 'Is WP Membrane safe for overhead drinking water tanks?', answer: 'Yes, Paver Chemco WP Membrane is non-toxic and safe for potable water tanks after 7 days of full cure. No special sealer is required after curing.' },
      { question: 'Can waterproofing be done in bathrooms before tiling?', answer: 'Yes, this is the recommended approach. Apply WP Membrane in 2 coats on the bathroom floor and at least 300 mm up the walls. Allow full cure (24 hours minimum, 7 days ideally) before tiling with Paver Chemco C1T tile adhesive.' },
      { question: 'How many bags of WP Membrane do I need for a 100 sqm terrace?', answer: 'For 2 coats on a 100 sqm terrace at 1.0–1.2 kg/m² per coat, you need approximately 200–240 kg total — that is 10–12 bags of 20 kg each. For 3 coats (recommended for flat roofs), plan for 15–18 bags.' },
      { question: 'What causes terrace leakage and how does WP Membrane help?', answer: 'Terrace leakage is caused by hairline cracks in concrete, poor waterproofing, or failed old coatings. Paver Chemco WP Membrane bridges cracks up to 0.5 mm and forms a seamless, flexible membrane that moves with the structure without cracking.' },
    ],
    relatedProducts: ['c1t-interior-tile-adhesive', 'c1te-exterior-tile-adhesive', 'tile-grout'],
    tdsFile: '/tds/TDS_PaverChemco_WaterproofingMembrane.pdf',
    seo: {
      title: 'Waterproofing Chemical Kerala & Tamil Nadu | Paver Chemco WP Membrane',
      description: 'Paver Chemco WP Membrane — flexible cementitious waterproofing for terrace, bathroom, pool & basement. Best waterproofing chemical in Kerala & Tamil Nadu. 20 kg bag.',
      keywords: [
        'waterproofing chemical Kerala',
        'terrace waterproofing Kerala',
        'bathroom waterproofing Kerala',
        'waterproofing membrane Kerala',
        'waterproofing chemical Tamil Nadu',
        'terrace waterproofing Chennai',
        'waterproofing solution Kerala monsoon',
        'swimming pool waterproofing Kerala',
        'basement waterproofing Kerala',
        'waterproofing chemical Kochi',
        'waterproofing membrane Coimbatore',
      ],
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export const productCategories = [...new Set(products.map((p) => p.category))]
