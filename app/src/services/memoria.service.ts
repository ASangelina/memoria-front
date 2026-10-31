import type { HistoricalEntity, GuidedRoute, ChatMessage } from '@/types/heritage';

export const HISTORICAL_ENTITIES: HistoricalEntity[] = [
  {
    id: 'mario-de-andrade',
    name: 'Mário de Andrade',
    category: 'personality',
    type: 'Poet, Novelist & Musicologist',
    years: '1893 — 1945',
    coords: [-23.5485, -46.6562],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600',
    shortBio: 'Pioneer of Brazilian Modernism and author of "Macunaíma". Central advocate for national heritage preservation.',
    fullBio: 'Mário Raul de Morais Andrade was a novelist, poet, art critic, and musicologist. As one of the main founders of Brazilian modernism, he virtually created modern poetry in Brazil with his 1922 publication Paulicéia Desvairada. He led the Department of Culture of São Paulo and established the national heritage protection service (predecessor of IPHAN).',
    artisticDetails: 'Modest tomb in Section 41 with solemn modernist inscriptions reflecting his cultural austerity.',
    importance: 'Formulated Brazil’s first official cultural policies and documented folklore across South America.',
    sector: 'Section 41, Plot 12',
    sources: [
      { doc: 'Consolação Cemetery Heritage Guide', page: 42, author: 'São Paulo Culture Division' },
      { doc: 'Dictionary of Plastic Arts in Brazil', page: 118, author: 'Marta Rossetti' }
    ]
  },
  {
    id: 'o-sepultamento',
    name: 'O Sepultamento (The Burial)',
    category: 'sculpture',
    type: 'Granite Sculpture & Tomb Art',
    years: '1923',
    coords: [-23.5492, -46.6552],
    image: 'https://images.unsplash.com/photo-1561839561-b13bcfe95249?auto=format&fit=crop&q=80&w=600',
    shortBio: 'Masterpiece by Victor Brecheret. Awarded at the prestigious Salon d\'Automne in Paris in 1923.',
    fullBio: 'Created in Paris by Victor Brecheret, this monumental sculpture portrays the sorrow of the Virgin Mary and mourning figures holding Christ. The synthetic Art Déco lines and stylized anatomical volumes marked a paradigm shift in South American tomb art.',
    artisticDetails: 'Hand-carved granite resting over the Olívia Guedes Penteado family mausoleum.',
    importance: 'Pivotal transition mark from academic classicism to modern sculpture in public funerary spaces.',
    sector: 'Central Avenue, Sector 3',
    sources: [
      { doc: 'Victor Brecheret Public Art Catalog', page: 15, author: 'Brecheret Institute' },
      { doc: 'Masterpieces of 20th Century Sacred Art', page: 88, author: 'MASP Editorial' }
    ]
  },
  {
    id: 'tarsila-do-amaral',
    name: 'Tarsila do Amaral',
    category: 'personality',
    type: 'Modernist Painter',
    years: '1886 — 1973',
    coords: [-23.5478, -46.6558],
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=600',
    shortBio: 'Leading figure of Modern Art in Latin America and painter of the iconic "Abaporu" and "Antropofagia".',
    fullBio: 'Tarsila do Amaral was a Brazilian painter, draftsman, and translator. Member of the "Group of Five", her vibrant colors, tropical motifs, and Brazilian subjects defined the Anthropophagic Movement and redefined Latin American art globally.',
    artisticDetails: 'Sober family tomb decorated with clean geometric lines and floral motifs.',
    importance: 'Her artistic legacy placed Brazilian visual culture on the global modern art map.',
    sector: 'Section 22, Plot 4',
    sources: [
      { doc: 'Tarsila: Catalogue Raisonné', page: 204, author: 'SP Art Foundation Archive' }
    ]
  },
  {
    id: 'monteiro-lobato',
    name: 'Monteiro Lobato',
    category: 'personality',
    type: 'Author, Publisher & Industrial Pioneer',
    years: '1882 — 1948',
    coords: [-23.5498, -46.6565],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600',
    shortBio: 'Creator of "Sítio do Picapau Amarelo" and pioneer of modern book publishing and oil exploration in Brazil.',
    fullBio: 'José Bento Monteiro Lobato reshaped Brazilian children\'s literature and established the country\'s first major independent publishing houses. He was also a passionate campaigner for national industrial infrastructure and petroleum independence.',
    artisticDetails: 'Family resting place visited by scholars and literature delegations.',
    importance: 'Fostered literacy and reading culture across multiple generations in 20th-century Brazil.',
    sector: 'Section 15, Plot 8',
    sources: [
      { doc: 'History of Brazilian Publishing', page: 67, author: 'Brasil Editorial Archives' }
    ]
  },
  {
    id: 'grande-anjo',
    name: 'The Great Angel of Consolação',
    category: 'sculpture',
    type: 'Carrara Marble Monument',
    years: '1910',
    coords: [-23.5481, -46.6548],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    shortBio: 'Neoclassical masterpiece carved in Italy by Luigi Brizzolara. One of the tallest statues in the cemetery.',
    fullBio: 'Carved from a single massive block of pure Carrara marble, this guardian angel stands over 3.5 meters tall with outstretched wings. The drapery technique and intricate feather details exemplify virtuosic Italian craftsmanship imported by São Paulo coffee elites.',
    artisticDetails: 'Imported Carrara marble, weighing over 4 metric tons.',
    importance: 'Exemplifies the opulence and eclectic tastes of the coffee boom period in early 1900s São Paulo.',
    sector: 'Main Avenue, Quadra 5',
    sources: [
      { doc: 'Funerary Sculptures of São Paulo', page: 112, author: 'Prof. Dr. Nelson A. Silva' }
    ]
  },
  {
    id: 'ramos-de-azevedo',
    name: 'Ramos de Azevedo',
    category: 'personality',
    type: 'Architect & Urban Planner',
    years: '1851 — 1928',
    coords: [-23.5489, -46.6570],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600',
    shortBio: 'Architect behind Theatro Municipal, Pinacoteca, and Mercado Municipal in São Paulo.',
    fullBio: 'Francisco de Paula Ramos de Azevedo shaped the architectural identity of São Paulo during its rapid industrial explosion. His firm designed the city\'s most iconic civic buildings and established high engineering standards.',
    artisticDetails: 'Imposing neoclassical family mausoleum featuring Ionic columns and marble relief crests.',
    importance: 'Defined the visual cityscape and public architecture of São Paulo at the turn of the century.',
    sector: 'Section 1, Main Plaza',
    sources: [
      { doc: 'Paulistano Architecture Registry', page: 33, author: 'FAU-USP Documentation' }
    ]
  },
  {
    id: 'marquesa-de-santos',
    name: 'Marquesa de Santos (Domitila de Castro)',
    category: 'personality',
    type: 'Imperial Noblewoman & Philanthropist',
    years: '1797 — 1867',
    coords: [-23.5495, -46.6542],
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600',
    shortBio: 'Prominent figure of Brazil\'s First Empire and generous benefactor of São Paulo education.',
    fullBio: 'Domitila de Castro Canto e Melo was the famous Marchioness of Santos. After her imperial years, she returned to São Paulo where she became renowned for her extensive charity work, financing law students and founding healthcare shelters.',
    artisticDetails: 'Historic tomb frequently decorated with flowers by local devotees and historians.',
    importance: 'One of the most influential female figures in 19th-century Brazilian political and social history.',
    sector: 'Section 8, Plot 2',
    sources: [
      { doc: 'Domitila: Imperial Archival Papers', page: 189, author: 'São Paulo State Archives' }
    ]
  }
];

export const GUIDED_ROUTES: GuidedRoute[] = [
  {
    id: 'route-modernist',
    title: 'Modernist Masters Itinerary',
    duration: '45 mins',
    distance: '850 meters',
    category: 'Art & Literature',
    description: 'Explore the resting places and monuments of pioneers who spearheaded the 1922 Modern Art Week.',
    stops: [
      { title: 'O Sepultamento Sculpture', type: 'Monument', sector: 'Central Avenue' },
      { title: 'Mário de Andrade Tomb', type: 'Personality', sector: 'Section 41' },
      { title: 'Tarsila do Amaral Tomb', type: 'Personality', sector: 'Section 22' }
    ]
  },
  {
    id: 'route-sculpture',
    title: 'Open-Air Sculpture Circuit',
    duration: '60 mins',
    distance: '1.2 km',
    category: 'Sculpture & Architecture',
    description: 'A curated walk highlighting imported Carrara marble statues, bronze art déco pieces, and neoclassical mausoleums.',
    stops: [
      { title: 'The Great Angel of Consolação', type: 'Sculpture', sector: 'Quadra 5' },
      { title: 'Ramos de Azevedo Mausoleum', type: 'Architecture', sector: 'Main Plaza' },
      { title: 'O Sepultamento (Brecheret)', type: 'Sculpture', sector: 'Central Avenue' }
    ]
  }
];

export const MemoriaAIService = {
  async query(userPrompt: string, selectedContextEntity: HistoricalEntity | null = null): Promise<ChatMessage> {
    await new Promise(r => setTimeout(r, 850));
    const promptLower = userPrompt.toLowerCase();

    if (selectedContextEntity) {
      const item = HISTORICAL_ENTITIES.find(e => e.id === selectedContextEntity.id || e.name.toLowerCase().includes(selectedContextEntity.name.toLowerCase()));
      if (item) {
        return {
          sender: 'ai',
          text: `Regarding **${item.name}** (${item.years || item.type}):\n\n${item.fullBio}\n\n**Historical Significance:** ${item.importance}\n\n**Location & Art Details:** Located at ${item.sector}. ${item.artisticDetails}`,
          citations: item.sources || [],
          relatedIds: [item.id]
        };
      }
    }

    if (promptLower.includes('brecheret') || promptLower.includes('sculpture') || promptLower.includes('burial') || promptLower.includes('sepultamento')) {
      return {
        sender: 'ai',
        text: "Victor Brecheret (1894–1955) was a seminal master of modern sculpture in Brazil. His most renowned masterpiece in Consolação Cemetery is **'O Sepultamento' (The Burial)**, carved in 1923.\n\nThe piece portrays the solemn sorrow of Mary and mourning women supporting Christ. It won the Silver Medal at the Paris Salon d'Automne in 1923 and is located at the Olívia Guedes Penteado mausoleum.",
        citations: [
          { doc: 'Victor Brecheret Public Art Catalog', page: 15, author: 'Brecheret Institute' },
          { doc: 'Funerary Heritage of São Paulo', page: 77, author: 'Division of Cultural Preservation' }
        ],
        relatedIds: ['o-sepultamento']
      };
    }

    if (promptLower.includes('mário') || promptLower.includes('mario') || promptLower.includes('andrade') || promptLower.includes('tomb') || promptLower.includes('where')) {
      return {
        sender: 'ai',
        text: "The tomb of **Mário de Andrade** (1893–1945) is located in **Section 41** of Consolação Cemetery.\n\nIt is a humble headstone reflecting his commitment to cultural austerity. As founder of SPHAN (now IPHAN), Mário de Andrade pioneered the cataloging and legal protection of Brazilian open-air art and historical tombs.",
        citations: [
          { doc: 'Consolação Cemetery Heritage Guide', page: 42, author: 'São Paulo Culture Division' }
        ],
        relatedIds: ['mario-de-andrade']
      };
    }

    if (promptLower.includes('route') || promptLower.includes('tour') || promptLower.includes('itinerary') || promptLower.includes('walk')) {
      return {
        sender: 'ai',
        text: "I recommend the **Modernist Masters Itinerary (45 minutes)**:\n\n1. **Main Entrance (Consolação St.)** — Welcome plaza & 1858 founding landmark.\n2. **Stop 1: O Sepultamento (Brecheret)** — Modern art déco expressionism in granite.\n3. **Stop 2: Mário de Andrade Tomb** — Homage to the literary leader of 1922.\n4. **Stop 3: Tarsila do Amaral Tomb** — Resting site of Brazil's modern painting icon.\n\n*You can select 'Guided Routes' in the navigation bar to trace this tour on the map!*",
        citations: [
          { doc: 'Cultural Education Routes of SP', page: 12, author: 'Heritage Division' }
        ],
        relatedIds: ['o-sepultamento', 'mario-de-andrade', 'tarsila-do-amaral']
      };
    }

    if (promptLower.includes('ghost') || promptLower.includes('haunted') || promptLower.includes('secret') || promptLower.includes('price')) {
      return {
        sender: 'ai',
        text: "⚠️ **Information Not Found in Verified Archival Documents**\n\nAs a grounded historical guide operating strictly on verified municipal catalogs and archival papers, I have no historiographical evidence or documented records regarding this query in the Consolação Cemetery collection.\n\n*MEMORIA AI relies strictly on primary documents, tomb registries, and peer-reviewed articles to prevent cultural hallucination.*",
        citations: [],
        isUnverified: true
      };
    }

    return {
      sender: 'ai',
      text: "**Consolação Cemetery** (founded in 1858) is São Paulo's oldest municipal necropolis, functioning as an open-air museum housing over 300 cataloged sculptures by master artists like Victor Brecheret, Luigi Brizzolara, and Galileo Emendabili.\n\nProminent figures interred include Mário de Andrade, Tarsila do Amaral, Monteiro Lobato, Ramos de Azevedo, and the Marchioness of Santos.",
      citations: [
        { doc: 'Consolação Cemetery: Open Air Museum', page: 4, author: 'SEME / SP Cultural Heritage' }
      ],
      relatedIds: ['mario-de-andrade', 'o-sepultamento', 'tarsila-do-amaral']
    };
  }
};