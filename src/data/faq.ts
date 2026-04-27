// ─────────────────────────────────────────────────────────────────────────────
// FAQ CMS DATA — add / edit FAQ items here
// These are used on /faq page and injected as FAQPage JSON-LD schema
// ─────────────────────────────────────────────────────────────────────────────

export interface FAQCategory {
  category: string
  questions: { question: string; answer: string }[]
}

export const faqData: FAQCategory[] = [
  {
    category: 'Tile Adhesive',
    questions: [
      {
        question: 'What is tile adhesive and why should I use it instead of cement?',
        answer: 'Tile adhesive is a polymer-modified cementitious mortar that bonds tiles to surfaces with a thin 3–4 mm bed. It offers superior tensile strength, faster curing, and better performance in wet and exterior conditions compared to conventional cement-sand mortar (which requires 12–20 mm thick beds). Paver Chemco tile adhesive is the recommended choice for all tile installations in Kerala and Tamil Nadu.',
      },
      {
        question: 'What is the coverage of Paver Chemco C1T tile adhesive?',
        answer: 'Paver Chemco C1T covers 4–4.5 kg per sqm at 3 mm bed thickness. For a 100 sqm area, you need approximately 4–4.5 bags of 30 kg each. Coverage may vary based on surface irregularities and tile back profile.',
      },
      {
        question: 'Can I use tile adhesive for bathroom walls in Kerala?',
        answer: 'Yes. Paver Chemco C1T is ideal for fixing ceramic tiles on interior bathroom walls. For bathroom floors that require waterproofing, apply Paver Chemco WP Membrane before tiling. C1T provides excellent adhesion in humid bathroom conditions.',
      },
      {
        question: 'Which tile adhesive is best for vitrified tiles in Tamil Nadu?',
        answer: 'Paver Chemco C1TE is the recommended tile adhesive for vitrified tiles in Tamil Nadu. Its higher polymer content provides excellent grip for the smooth, low-porosity back surface of vitrified tiles and accommodates thermal movement common in Tamil Nadu\'s hotter climate.',
      },
      {
        question: 'How long does tile adhesive take to dry in Kerala\'s humid climate?',
        answer: 'Paver Chemco tile adhesive allows light foot traffic after 24 hours and reaches full cure in 72 hours. In Kerala\'s high-humidity conditions, particularly during monsoon, allow 48 hours before foot traffic and 96 hours for full cure.',
      },
      {
        question: 'What is the price of Paver Chemco tile adhesive in Kerala?',
        answer: 'Contact your nearest Paver Chemco dealer or call +91 9994491827 / email business@furner.in for current pricing in Kerala. Paver Chemco offers competitive pricing for both C1T (interior) and C1TE (exterior) tile adhesives.',
      },
    ],
  },
  {
    category: 'Block Jointing Mortar',
    questions: [
      {
        question: 'What is the best mortar for AAC blocks in Kerala?',
        answer: 'Paver Chemco Block Jointing Mortar is the best choice for AAC block construction in Kerala. It requires only a 3 mm joint thickness (vs 12–15 mm for conventional mortar), provides ≥0.8 N/mm² tensile adhesion strength, and is self-curing — making it ideal for Kerala\'s varied climate conditions.',
      },
      {
        question: 'How much block jointing mortar do I need for an AAC block wall?',
        answer: 'Paver Chemco Block Jointing Mortar covers approximately 4–5 kg per sqm of wall area at 3 mm joint thickness. For 100 sqm of wall, you need approximately 400–500 kg (10–12 bags of 40 kg each).',
      },
      {
        question: 'Can I use block jointing mortar for fly ash bricks in Tamil Nadu?',
        answer: 'Yes. Paver Chemco Block Jointing Mortar is formulated for AAC blocks, fly ash bricks, and concrete blocks. It is suitable for all lightweight masonry construction in Tamil Nadu, providing thin 3 mm joints and superior bond strength.',
      },
      {
        question: 'Why are there cracks in my AAC block walls?',
        answer: 'Cracks in AAC block walls are often caused by using thick cement-sand mortar (12–15 mm), which absorbs water unevenly, causing differential shrinkage. Paver Chemco Block Jointing Mortar uses only 3 mm joints and has low water content, significantly reducing the risk of cracking.',
      },
    ],
  },
  {
    category: 'Waterproofing',
    questions: [
      {
        question: 'How do I stop my terrace from leaking during Kerala monsoon?',
        answer: 'Apply Paver Chemco WP Membrane in 2–3 coats (1.0–1.2 kg/m² per coat) on a clean, repaired terrace surface. Allow 4–6 hours between coats and 7 days for full cure. Conduct a 48-hour ponding test before the monsoon. This creates a seamless, crack-bridging membrane that stops water penetration.',
      },
      {
        question: 'Is waterproofing membrane safe for overhead water tanks?',
        answer: 'Yes, Paver Chemco WP Membrane is non-toxic and safe for potable water contact after 7 days of full cure. It is certified for use in overhead and underground water tanks.',
      },
      {
        question: 'Can waterproofing be applied in bathrooms under tiles?',
        answer: 'Yes. Apply Paver Chemco WP Membrane (2 coats) on the bathroom floor and at least 300 mm up the walls before tiling. Allow minimum 24 hours drying time before applying Paver Chemco C1T tile adhesive and tiles. This is the recommended system for all wet area tiling.',
      },
      {
        question: 'How many coats of waterproofing are needed for a swimming pool?',
        answer: 'For swimming pools, apply a minimum of 3 coats of Paver Chemco WP Membrane (1.0–1.2 kg/m² per coat) with 4–6 hours between coats. Embed polyester fabric at all corners and joints. Allow 7 days full cure before filling the pool. Total consumption: approximately 3.0–3.6 kg/m².',
      },
      {
        question: 'What is the waterproofing solution for basement walls in Tamil Nadu?',
        answer: 'For basements in Tamil Nadu, apply Paver Chemco WP Membrane from the outside (positive side) before backfilling. Where only internal access is possible, apply from inside (negative side waterproofing). Use 2–3 coats at 1.0–1.2 kg/m² per coat for effective basement waterproofing.',
      },
    ],
  },
  {
    category: 'Grout',
    questions: [
      {
        question: 'When should I use epoxy grout instead of cement grout?',
        answer: 'Use Paver Chemco Epoxy Grout for: swimming pools, commercial kitchens, hospitals, food processing areas, laboratories, and any application requiring chemical resistance or permanent stain resistance. Use Paver Chemco Tile Grout (cement-based) for standard residential and commercial tile joints.',
      },
      {
        question: 'How long should I wait before grouting after tiling?',
        answer: 'Allow a minimum of 24 hours after tiling with Paver Chemco tile adhesive before grouting. In high-humidity conditions like during Kerala monsoon, wait 48 hours. Ensure the adhesive is fully set before applying grout.',
      },
      {
        question: 'Can I use white cement for tile joints instead of grout?',
        answer: 'White cement is not recommended for tile joints. It lacks the polymer modification, consistent colour, and water resistance of proper tile grout. Paver Chemco Tile Grout provides consistent colour, better water resistance, and easier application — at a comparable cost.',
      },
    ],
  },
  {
    category: 'Dealer & Distribution',
    questions: [
      {
        question: 'Where can I buy Paver Chemco products in Kerala?',
        answer: 'Paver Chemco products are available through our authorised dealer network across Kerala — covering Thiruvananthapuram, Kochi, Kozhikode, Thrissur, Palakkad, Kannur, Malappuram, and all major towns. Contact us at business@furner.in or +91 9994491827 to find your nearest dealer.',
      },
      {
        question: 'Where can I buy Paver Chemco products in Tamil Nadu?',
        answer: 'Paver Chemco products are distributed across Tamil Nadu including Chennai, Coimbatore, Madurai, Trichy, Salem, Vellore, Tirunelveli, and surrounding areas. Call +91 9994491827 or email business@furner.in to locate your nearest authorised dealer.',
      },
      {
        question: 'Does Paver Chemco offer bulk or contractor pricing?',
        answer: 'Yes, Paver Chemco offers competitive pricing for bulk orders and project supplies for contractors, builders, and developers. Contact our sales team at business@furner.in or call +91 9994491827 to discuss project requirements.',
      },
    ],
  },
]

export function getAllFAQs(): { question: string; answer: string }[] {
  return faqData.flatMap((cat) => cat.questions)
}
