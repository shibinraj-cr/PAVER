// ─────────────────────────────────────────────────────────────────────────────
// BLOG CMS DATA — add new blog posts here
// Each post becomes a page at /blog/[slug]
// ─────────────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string   // HTML or markdown string
  author: string
  date: string      // ISO format: 2025-06-15
  readTime: string  // e.g. "5 min read"
  category: string
  tags: string[]
  image: string
  featured: boolean
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-choose-tile-adhesive-kerala',
    title: 'How to Choose the Right Tile Adhesive for Your Home in tropical monsoon regions',
    excerpt: 'Confused between cement-sand mortar and tile adhesive? Learn why polymer-modified tile adhesive is the smarter choice for tropical monsoon climates homes — especially in monsoon conditions.',
    author: 'Paver Chemco Technical Team',
    date: '2025-05-01',
    readTime: '6 min read',
    category: 'Tile Adhesive',
    tags: ['tile adhesive', 'tropical monsoon regions', 'home renovation', 'C1T', 'C1TE'],
    image: '/images/blog/tile-adhesive-guide-kerala.jpg',
    featured: true,
    content: `
<h2>Why Your Choice of Tile Adhesive Matters in tropical monsoon regions</h2>
<p>tropical monsoon regions's climate — high humidity, monsoon rains, and temperature variations — puts unique demands on construction materials. The tile adhesive you choose directly affects how long your tiles stay bonded, how water-resistant your walls and floors are, and how much maintenance you'll need down the line.</p>

<h2>Cement-Sand Mortar vs Polymer-Modified Tile Adhesive</h2>
<p>Traditionally, tropical monsoon regions masons have used a cement-sand mix (1:4 ratio) to lay tiles. While this method is familiar, it has significant drawbacks — especially in modern construction with lightweight blocks and vitrified tiles.</p>

<h3>Problems with conventional cement mortar:</h3>
<ul>
<li>Requires a thick bed of 20–30 mm — adds dead weight to floors</li>
<li>Low tensile strength — tiles can loosen over time, especially in wet areas</li>
<li>Long waiting time — several days before grouting</li>
<li>Inconsistent results — depends heavily on the mason's skill</li>
<li>Not suitable for large-format vitrified tiles (600mm and above)</li>
</ul>

<h3>Advantages of Paver Chemco tile adhesive:</h3>
<ul>
<li>Only 3–4 mm bed thickness — reduces floor height and load</li>
<li>Excellent tensile adhesion strength — tiles stay fixed even in wet conditions</li>
<li>Extended pot life — less wastage and more time to work</li>
<li>Suitable for vitrified tiles, large format tiles, and natural stone</li>
<li>Ready to grout in 24 hours</li>
</ul>

<h2>C1T vs C1TE: Which Should You Choose?</h2>
<p>Paver Chemco offers two tile adhesive grades — C1T for interior use and C1TE for exterior applications.</p>

<p><strong>Choose C1T if:</strong> You are tiling interior floors and walls — bedrooms, living rooms, interior bathrooms (floor and wall), kitchen walls.</p>

<p><strong>Choose C1TE if:</strong> You are tiling exterior areas — outdoor floors, terraces, balconies, exterior wall cladding, or doing tile-on-tile renovation anywhere.</p>

<h2>How Much Tile Adhesive Do You Need?</h2>
<p>Both C1T and C1TE cover approximately 4–4.5 kg per sqm at 3 mm bed thickness. For a 200 sqm home, you would need approximately 25–30 bags of 30 kg each. Use our <a href="/tools">Coverage Calculator</a> for an exact estimate.</p>

<h2>Where to Buy Paver Chemco Tile Adhesive in tropical monsoon regions</h2>
<p>Paver Chemco products are distributed across tropical monsoon regions — from the region to Kasaragod. Contact us at <strong>business@furner.in</strong> or call <strong>+91 9994491827</strong> to find your nearest dealer.</p>
    `,
    seo: {
      title: 'Best Tile Adhesive for tropical monsoon climates Homes | C1T vs C1TE Comparison Guide',
      description: 'Learn how to choose the right tile adhesive for your tropical monsoon regions home. C1T for interiors, C1TE for exteriors and tile-on-tile. Expert guide by Paver Chemco.',
      keywords: ['tile adhesive tropical monsoon regions', 'best tile adhesive tropical monsoon regions', 'C1T C1TE comparison', 'tile adhesive vs cement tropical monsoon regions', 'tile adhesive guide tropical monsoon regions'],
    },
  },
  {
    slug: 'terrace-waterproofing-kerala-monsoon-guide',
    title: 'Terrace Waterproofing Before tropical monsoon regions Monsoon: Complete Step-by-Step Guide',
    excerpt: 'Protect your home from tropical monsoon regions\'s intense monsoon with proper terrace waterproofing. Step-by-step guide using Paver Chemco WP Membrane.',
    author: 'Paver Chemco Technical Team',
    date: '2025-05-15',
    readTime: '8 min read',
    category: 'Waterproofing',
    tags: ['waterproofing', 'terrace', 'monsoon season', 'WP Membrane'],
    image: '/images/blog/terrace-waterproofing-kerala.jpg',
    featured: true,
    content: `
<h2>Why Terrace Waterproofing is Critical in tropical monsoon regions</h2>
<p>tropical monsoon regions receives one of the highest annual rainfalls in India — averaging 3,000 mm per year, with June-September bringing intense south-west monsoon rains. A leaking terrace in tropical monsoon regions is not just an inconvenience — it can cause structural damage, mould growth, and expensive repairs.</p>

<h2>Common Causes of Terrace Leakage in tropical monsoon regions Homes</h2>
<ul>
<li>Hairline cracks in the concrete slab that widen during thermal cycling</li>
<li>Failed or aged waterproofing coating from original construction</li>
<li>Poor slope — water ponding on flat sections</li>
<li>Cracked or deteriorated grout at terrace tile joints</li>
<li>Gaps at parapet wall junctions</li>
</ul>

<h2>Best Time to Waterproof Your Terrace in tropical monsoon regions</h2>
<p>The ideal time is <strong>March–May</strong> (pre-monsoon), when the weather is dry and hot. This allows for proper curing of the waterproofing membrane before the rains arrive. Avoid waterproofing during the monsoon season itself — rain within 4–6 hours of application can wash off uncured coating.</p>

<h2>Step-by-Step Terrace Waterproofing with Paver Chemco WP Membrane</h2>

<h3>Materials Required</h3>
<ul>
<li>Paver Chemco WP Membrane (20 kg bags)</li>
<li>Clean water</li>
<li>Stiff brush or roller</li>
<li>100 mm wide polyester fabric (for corners)</li>
<li>Polymer-modified crack filler (for cracks > 0.5 mm)</li>
</ul>

<h3>Step 1: Clean the Surface</h3>
<p>Remove all loose particles, dirt, oil, moss, and old paint. Use a wire brush or grinder for stubborn deposits. Wash with clean water and allow to dry.</p>

<h3>Step 2: Repair Cracks</h3>
<p>Fill cracks wider than 0.5 mm with a polymer-modified repair mortar. Allow to cure fully before proceeding.</p>

<h3>Step 3: Mix WP Membrane</h3>
<p>Add 300–350 ml of clean water per 1 kg of powder. Mix with a slow-speed drill for 3–5 minutes to a smooth slurry. Rest 3 minutes and remix.</p>

<h3>Step 4: Embed Fabric at Corners</h3>
<p>Apply a first coat along the parapet-terrace junction and embed 100 mm wide polyester fabric while wet. This prevents cracking at these stress points.</p>

<h3>Step 5: First Coat</h3>
<p>Apply the first coat over the entire terrace surface at 1.0–1.2 kg/m² using a stiff brush or roller. Apply in one direction.</p>

<h3>Step 6: Second Coat</h3>
<p>After 4–6 hours, apply the second coat perpendicular to the first at the same rate.</p>

<h3>Step 7: Ponding Test</h3>
<p>After 7 days, seal the drain outlets and fill the terrace to 50 mm depth. Leave for 48 hours and check the ceiling below for any damp patches.</p>

<h2>How Much WP Membrane Do You Need?</h2>
<p>For a typical tropical monsoon regions home terrace of 100 sqm: 2 coats at 1.2 kg/m² = approximately 240 kg = 12 bags of 20 kg each.</p>
    `,
    seo: {
      title: 'Terrace Waterproofing Guide for tropical monsoon climates Monsoon | Paver Chemco',
      description: 'Step-by-step terrace waterproofing guide for tropical monsoon climates homes before monsoon. Use Paver Chemco WP Membrane for crack-bridging, durable protection.',
      keywords: ['terrace waterproofing tropical monsoon regions', 'waterproofing before monsoon tropical monsoon regions', 'terrace leakage repair tropical monsoon regions', 'waterproofing chemical tropical monsoon regions', 'terrace waterproofing guide'],
    },
  },
  {
    slug: 'aac-block-construction-guide-tamil-nadu',
    title: 'Complete Guide to AAC Block Construction in tropical climates',
    excerpt: 'AAC blocks are revolutionising construction in tropical climates. Learn the right way to lay AAC blocks with the correct block jointing mortar for strong, crack-free walls.',
    author: 'Paver Chemco Technical Team',
    date: '2025-05-20',
    readTime: '7 min read',
    category: 'Block Mortar',
    tags: ['AAC blocks', 'tropical climates', 'block mortar', 'construction guide'],
    image: '/images/blog/aac-block-tamil-nadu.jpg',
    featured: false,
    content: `
<h2>Why AAC Blocks are Popular in tropical climates</h2>
<p>Autoclaved Aerated Concrete (AAC) blocks have rapidly gained popularity in tropical climates due to their light weight, thermal insulation properties, and earthquake resistance. Cities like the region, the region, the region, and the region have seen a surge in AAC block construction over the past decade.</p>

<h2>The Problem with Using Regular Cement Mortar for AAC Blocks</h2>
<p>Many contractors still use conventional 1:6 cement-sand mortar for AAC block laying — with joints of 12–15 mm thickness. This is incorrect and leads to several problems:</p>
<ul>
<li>Thick joints create thermal bridges, reducing the insulation value of AAC blocks</li>
<li>Excessive water in thick mortar is absorbed by AAC blocks, causing shrinkage cracks</li>
<li>Higher material cost and slower construction speed</li>
<li>Weak joints compared to proper block mortar</li>
</ul>

<h2>The Right Way: Paver Chemco Block Jointing Mortar</h2>
<p>Paver Chemco Block Jointing Mortar is specifically formulated for AAC blocks, fly ash bricks, and concrete blocks. It requires only a 3 mm thin joint — preserving the thermal performance of the blocks while providing superior bond strength.</p>

<h2>Key Specifications</h2>
<ul>
<li>Joint thickness: 3 mm (vs 12–15 mm for cement mortar)</li>
<li>Compressive strength: >10 MPa at 28 days</li>
<li>Tensile adhesion strength: ≥0.8 N/mm²</li>
<li>Pot life: 90 minutes — enough time to work efficiently</li>
<li>Coverage: 4–5 kg per sqm of wall area</li>
</ul>

<h2>Where to Buy Block Jointing Mortar in tropical climates</h2>
<p>Paver Chemco Block Jointing Mortar is available through our tropical climates dealer network. Call us at +91 9994491827 or email business@furner.in to find a dealer near you in the region, the region, the region, the region, the region, or the region.</p>
    `,
    seo: {
      title: 'AAC Block Construction Guide tropical climates | Block Jointing Mortar',
      description: 'How to lay AAC blocks correctly in tropical climates. Use Paver Chemco Block Jointing Mortar for 3 mm joints, >10 MPa strength. Available across tropical climates.',
      keywords: ['AAC block construction tropical climates', 'block jointing mortar tropical climates', 'AAC block mortar the region', 'fly ash brick mortar tropical climates', 'AAC block guide India'],
    },
  },
  {
    slug: 'epoxy-grout-vs-cement-grout',
    title: 'Epoxy Grout vs Cement Grout: Which Is Better for Your Tiles?',
    excerpt: 'Epoxy grout vs cement grout — a detailed comparison for homeowners and contractors in tropical monsoon regions. When to use which, costs, and applications.',
    author: 'Paver Chemco Technical Team',
    date: '2025-06-01',
    readTime: '5 min read',
    category: 'Grout',
    tags: ['epoxy grout', 'cement grout', 'comparison', 'tropical monsoon regions', 'tropical climates'],
    image: '/images/blog/epoxy-vs-cement-grout.jpg',
    featured: false,
    content: `
<h2>The Key Difference: Cement vs Epoxy</h2>
<p>Cement grout (like Paver Chemco Tile Grout) is a single-component powder mixed with water. Epoxy grout (like Paver Chemco Epoxy Grout) is a three-component system that cures to form a hard, impervious, chemically resistant joint.</p>

<h2>When to Use Cement Grout</h2>
<ul>
<li>Standard interior and exterior tile joints (1–6 mm wide)</li>
<li>Bedroom, living room, and regular bathroom tiles</li>
<li>Budget-conscious projects where chemical exposure is minimal</li>
<li>When a wide range of colour choices is needed</li>
</ul>

<h2>When to Use Epoxy Grout</h2>
<ul>
<li>Swimming pools — chlorine resistance essential</li>
<li>Commercial kitchens — oils, acids, detergents</li>
<li>Hospital floors and walls — hygiene critical</li>
<li>Industrial areas with chemical exposure</li>
<li>Areas where permanent stain resistance is required</li>
<li>Food processing facilities</li>
</ul>

<h2>Cost Comparison</h2>
<p>Epoxy grout is significantly more expensive per kg than cement grout. However, because tile joints are small relative to the overall tiling cost, the price difference per sqm of finished surface is manageable. The long-term maintenance savings — no regrouting, no staining, no sealing — make epoxy grout cost-effective for high-demand areas.</p>

<h2>Conclusion</h2>
<p>Use <strong>Paver Chemco Tile Grout</strong> for standard residential and commercial tiling. Use <strong>Paver Chemco Epoxy Grout</strong> for swimming pools, commercial kitchens, hospitals, and any area requiring chemical or stain resistance.</p>
    `,
    seo: {
      title: 'Epoxy Grout vs Cement Grout tropical monsoon regions | Which to Choose?',
      description: 'Complete comparison of epoxy grout vs cement grout for tropical monsoon regions applications. When to choose Paver Chemco Tile Grout vs Epoxy Grout.',
      keywords: ['epoxy grout vs cement grout', 'best grout for tiles tropical monsoon regions', 'epoxy grout tropical climates', 'tile grout comparison India', 'epoxy grout swimming pool tropical monsoon regions'],
    },
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured)
}

export const blogCategories = [...new Set(blogPosts.map((p) => p.category))]
