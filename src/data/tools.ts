import { AITool } from '../types';

export const aiTools: AITool[] = [
  // Texto
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Assistente de IA conversacional da OpenAI para textos e diálogos',
    image: 'https://arcoindustrial.com.br/wp-content/uploads/2023/03/chat-gpt.jpg',
    coverImage: 'https://arcoindustrial.com.br/wp-content/uploads/2023/03/chat-gpt.jpg',
    url: 'https://chat.openai.com',
    category: 'texto',
    featured: true,
    function: 'IA voltada para geração de textos criativos, respostas naturais e produtividade no dia a dia.',
    applications: [
      'Criar legendas e textos para redes sociais',
      'Automatizar e-mails ou propostas comerciais',
      'Gerar ideias para vídeos, posts e produtos',
      'Traduzir e adaptar conteúdo com contexto'
    ],
    videos: [
      {
        id: '1',
        title: 'Como Usar o CHAT GPT: Tutorial Para Iniciantes (inteligência artificial)',
        thumbnail: 'https://img.youtube.com/vi/iKknmEqawnI/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=iKknmEqawnI'
      },
      {
        id: '2',
        title: 'ChatGPT 2025: Tutorial COMPLETO',
        thumbnail: 'https://img.youtube.com/vi/46CUyuZyhlk/maxresdefault.jpg',
        url: 'https://www.youtube.com/watch?v=46CUyuZyhlk&t=50s'
      },
      {
        id: '3',
        title: 'Como utilizar o Chat GPT da Open AI',
        thumbnail: 'https://img.youtube.com/vi/e5dZQvPbIeE/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=e5dZQvPbIeE'
      }
    ],
    prompts: [
      {
        id: '1',
        title: 'Criação de Conteúdo para Redes Sociais',
        content: 'Crie 5 legendas criativas para Instagram sobre [TEMA], incluindo hashtags relevantes e call-to-action. O tom deve ser [DESCONTRAÍDO/PROFISSIONAL] e o público-alvo são [DESCREVER PÚBLICO].'
      },
      {
        id: '2',
        title: 'E-mail de Vendas Persuasivo',
        content: 'Escreva um e-mail de vendas para [PRODUTO/SERVIÇO] direcionado a [PÚBLICO-ALVO]. Inclua: assunto chamativo, problema que resolve, benefícios principais e call-to-action irresistível.'
      },
      {
        id: '3',
        title: 'Brainstorm de Ideias Criativas',
        content: 'Gere 10 ideias inovadoras para [PROJETO/CAMPANHA] considerando: orçamento [BAIXO/MÉDIO/ALTO], prazo de [X] dias e objetivo de [DESCREVER OBJETIVO]. Priorize soluções práticas e criativas.'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
  {
    id: '2',
    name: 'Claude',
    description: 'IA conversacional da Anthropic focada em segurança e utilidade',
    image: 'https://cdn.mos.cms.futurecdn.net/2SDL9AfTXNC6yKnAZzKrgD-1200-80.jpg',
    coverImage: 'https://cdn.mos.cms.futurecdn.net/2SDL9AfTXNC6yKnAZzKrgD-1200-80.jpg',
    url: 'https://claude.ai',
    category: 'texto',
    new: true,
    function: 'Assistente multimodal da Anthropic focado em segurança, raciocínio avançado, análise de documentos e geração de textos éticos e detalhados.',
  applications: [
    'Analisar e resumir PDFs, Excel ou imagens',
    'Responder perguntas complexas com passo‑a‑passo',
    'Gerar código ou assistentes automatizados',
    'Dialogar por voz ou texto com contexto amplo'
  ],
  videos: [
    {
      id: '1',
      title: 'Como Usar o Claude AI (Tutorial Completo da Ferramenta)',
      thumbnail: 'https://img.youtube.com/vi/Wd8xgg7-kmI/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Wd8xgg7-kmI'
    },
    {
      id: '2',
      title: 'TUTORIAL: Explorando o Claude AI',
      thumbnail: 'https://img.youtube.com/vi/Lrvi-7m3DNY/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Lrvi-7m3DNY'
    },
    {
      id: '3',
      title: 'LIBERADO - CLAUDE AI no BRASIL!! TUTORIAL ATUALIZADO!',
      thumbnail: 'https://img.youtube.com/vi/uyx3Qe2nwHA/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=uyx3Qe2nwHA'
    }
  ],
  prompts: [
    {
      id: '1',
      title: 'Resumo automático de documentos',
      content: 'Resuma este documento técnico [INSERIR TEXTO/URL] em até 200 palavras, destacando os principais pontos e conclusões.'
    },
    {
      id: '2',
      title: 'Resposta passo-a-passo',
      content: 'Explique passo a passo como resolver o problema: [DESCREVER SITUAÇÃO] com base nas melhores práticas e exemplos claros.'
    },
    {
      id: '3',
      title: 'Código automatizado',
      content: 'Escreva um script em Python que [DESCREVER FUNÇÃO], incluindo comentários e tratamento de erros.'
    }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '3',
    name: 'Jasper',
    description: 'Plataforma de copywriting e marketing com IA',
    image: 'https://waterbearlearning.com/wp-content/uploads/2024/10/jasper-ai-pros-cons.png',
    url: 'https://jasper.ai',
    category: 'texto',
    function: 'Plataforma de IA voltada para marketing e criação de conteúdo em escala, com foco em voz de marca e automação.',
  applications: [
    'Criar posts com voz de marca',
    'Escrever artigos e blog posts',
    'Automatizar e-mails de marketing',
    'Repurpose e SEO'
  ],
  videos: [
    {
      id: '1',
      title: 'Jasper AI Tutorial – Como começar a usar gratuitamente',
      thumbnail: 'https://img.youtube.com/vi/9VrKtMusbP4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=9VrKtMusbP4'
    },
    {
      id: '2',
      title: 'Jasper AI: Guia completo para iniciantes',
      thumbnail: 'https://img.youtube.com/vi/Kp1vQ8jM6XI/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Kp1vQ8jM6XI'
    },
    {
      id: '3',
      title: 'Ferramenta Jasper para SEO – Entenda sobre a ferramenta',
      thumbnail: 'https://img.youtube.com/vi/dC6V1Dtj7Q4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=dC6V1Dtj7Q4'
    }
  ],
  prompts: [
    {
      id: '1',
      title: 'Post para redes sociais',
      content: 'Crie 5 legendas criativas para Instagram sobre [TEMA], com hashtags e call‑to‑action. Tom: [DESCONTRAÍDO/PROFISSIONAL]; público-alvo: [DESCREVER].'
    },
    {
      id: '2',
      title: 'Artigo de blog otimizado',
      content: 'Escreva um artigo de blog de 800 palavras sobre [ASSUNTO], com introdução envolvente, subtítulos e SEO para palavra-chave [PALAVRA‑CHAVE].'
    },
    {
      id: '3',
      title: 'E-mail de vendas persuasivo',
      content: 'Escreva um e‑mail de vendas para [PRODUTO/SERVIÇO] direcionado a [PÚBLICO‑ALVO]. Inclua assunto chamativo, problema, benefícios e call‑to‑action.'
    }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '15',
    name: 'Gamma AP',
    description: 'Plataforma para criação de apresentações, documentos e páginas da web com IA.',
    image: 'https://cdn.mos.cms.futurecdn.net/cfo9wrPuw9H2NXugivFUJh.jpg',
    url: 'https://gamma.app/pt-br?gad_campaignid=22650306607&gad_source=1&gbraid=0AAAAAqWjqPTu9PKp1hIbPuU3M2mjUs8kg&gclid=CjwKCAjwkvbEBhApEiwAKUz6-7CEuv_LlQe4pPF-DND1t8lk9OPuD4rqqQSEzUeUWfc425l6jtI5WBoCeRwQAvD_BwE&utm_campaign=22650306607&utm_content=180288802003&utm_id=tw&utm_medium=search&utm_source=google&utm_term=gamma.app',
    category: 'texto',
    function: 'Ferramenta de IA para criar apresentações e conteúdo visual rapidamente, sem precisar de design avançado.',
  applications: [
    'Criar apresentações profissionais com IA',
  'Gerar documentos interativos',
  'Converter ideias em slides prontos',
  'Compartilhar links interativos e responsivos'
  ],
  videos: [
    {
      id: '1',
      title: 'Como Criar EBOOK com IA e Vender em 48 horas (de GRAÇA)',
      thumbnail: 'https://img.youtube.com/vi/F--LO12a3RE/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=F--LO12a3RE'
    },
    {
      id: '2',
      title: 'Como Usar a Gamma App Para Criar Ebook e Slides Com IA (Tutorial Completo)',
      thumbnail: 'https://img.youtube.com/vi/nnBEHMzsmvw/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=nnBEHMzsmvw'
    },
    {
      id: '3',
      title: 'Como criar apresentações incríveis usando o Gamma App',
      thumbnail: 'https://img.youtube.com/vi/aZs4t-k_1cs/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=aZs4t-k_1cs'
    }
  ],
  prompts: [
    {
  id: '1',
  title: 'Apresentação profissional com IA',
  content: 'Crie uma apresentação de [NÚMERO DE SLIDES] slides sobre [TEMA], com design moderno, texto claro e imagens sugestivas. Público-alvo: [DESCREVER].'
},
{
  id: '2',
  title: 'Resumo visual de relatório',
  content: 'Transforme o relatório sobre [ASSUNTO] em um resumo visual com gráficos, bullet points e destaques principais em formato de slides interativos.'
},
{
  id: '3',
  title: 'Pitch de vendas impactante',
  content: 'Crie um pitch de vendas em formato de apresentação para [PRODUTO/SERVIÇO], incluindo problema, solução, diferenciais e call-to-action, com tom [PROFISSIONAL/DESCONTRAÍDO].'
}
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '16',
    name: 'Clicopy',
    description: 'Plataforma para afiliados que clona e personaliza páginas de vendas com edição visual e integração fácil.',
    image: 'https://clicopy.com/wp-content/uploads/2023/10/imagem.png',
    url: 'https://clicopy.com/',
    category: 'texto',
    function: 'Ferramenta para clonagem rápida de páginas de vendas ou advertoriais, com editor visual e integração com WordPress ou hospedagem via Google Drive.',
  applications: [
    'Clonar landing pages, VSLs ou advertoriais',
  'Editar textos, links e imagens visualmente',
  'Inserir pixels de rastreamento e tags com um clique',
  'Publicar em WordPress ou hospedagem gratuita no Google Drive'
  ],
  videos: [
    {
      id: '1',
      title: 'Clicopy 2 em 1 - Clonador de Páginas!',
      thumbnail: 'https://img.youtube.com/vi/spN2TfnvNRU/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=spN2TfnvNRU'
    },
    {
      id: '2',
      title: 'Clicopy Clonador de Páginas de Vendas: Clonando e Editando Páginas em Minutos!',
      thumbnail: 'https://img.youtube.com/vi/tzElqOc4og8/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=tzElqOc4og8'
    },
    {
      id: '3',
      title: 'CLONE SEM MENSALIDADE EM SEGUNDOS Edita a clonagem e CRIE PRESELL - Clicopy 2.0',
      thumbnail: 'https://img.youtube.com/vi/8w10h_g6dyE/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=8w10h_g6dyE'
    }
  ],
  prompts: [
    {
  id: '1',
  title: 'Esta IA não trabalha com PROMPTS',
  content: 'N/A.'
},
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  // Imagem
  {
    id: '4',
    name: 'Midjourney',
    description: 'Gerador de imagens artísticas com IA via Discord',
    image: 'https://aipraktikum.com/wp-content/uploads/2024/10/Midjourney-AI-Praktikum.jpg',
    url: 'https://midjourney.com',
    category: 'imagem',
    featured: true,
    function: 'Ferramenta de IA generativa para criação de imagens a partir de descrições em texto, ideal para arte digital e conceituação visual.',
  applications: [
    'Criação de arte personalizada',
    'Mockups visuais',
    'Arte conceitual para games ou filmes',
    'Print‑on‑Demand'
  ],
  videos: [
    {
      id: '1',
      title: 'Como usar o MidJourney! Tutorial completo em português!',
      thumbnail: 'https://img.youtube.com/vi/OSvvqUIoozA/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=OSvvqUIoozA'
    },
    {
      id: '2',
      title: 'TUTORIAL COMPLETO DE MIDJOURNEY PARA INICIANTES',
      thumbnail: 'https://img.youtube.com/vi/xtd1HfEMFsw/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=xtd1HfEMFsw'
    },
    {
      id: '3',
      title: 'Curso de MIDJOURNEY Grátis (TUTORIAL COMPLETO 2024)',
      thumbnail: 'https://img.youtube.com/vi/gxH0Re01Tto/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=gxH0Re01Tto'
    }
  ],
  prompts: [
    {
      id: '1',
      title: 'Arte de personagem',
      content: 'Crie uma ilustração de um personagem futurista em estilo cyberpunk, com detalhes de luz neon e ambiente urbano, alta resolução.'
    },
    {
      id: '2',
      title: 'Mockup de campanha',
      content: 'Gere uma imagem de produto cosmético minimalista com fundo sólido branco, estilo clean e sofisticado.'
    },
    {
      id: '3',
      title: 'Cena conceitual',
      content: 'Crie uma cena animada de fantasia com dragão voando sobre montanhas ao pôr do sol, com cores vibrantes.'
    }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'  
  },
  {
    id: '5',
    name: 'DALL-E 3',
    description: 'Criador de imagens da OpenAI com alta qualidade',
    image: 'https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/8a957468-ab45-454c-a5ac-8474ecd91b39/Screenshot_2025-03-11_082902.png?t=1741692688',
    url: 'https://openai.com/dall-e-3',
    category: 'imagem',
    function: 'IA da OpenAI especializada em gerar imagens a partir de descrições de texto, com alta fidelidade e integração ao ChatGPT.',
  applications: [
    'Criar imagens realistas com base em descrição',
    'Ilustrações para redes sociais',
    'Visuals para projetos e blogs',
    'Design de anúncios com prompt contextual'
  ],
  videos: [
    {
      id: '1',
      title: 'Como usar o DALL‑E 3 (inteligência artificial)',
      thumbnail: 'https://img.youtube.com/vi/_Yn1oH8Nkq4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=_Yn1oH8Nkq4'
    },
    {
      id: '2',
      title: 'COMO USAR O DALL‑E 3 DE GRAÇA! (DOS MESMOS CRIADORES ...)',
      thumbnail: 'https://img.youtube.com/vi/qcd-TfuaZK8/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=qcd-TfuaZK8'
    },
    {
      id: '3',
      title: 'Como Criar Imagens com Inteligência Artificial usando DALL‑E 3',
      thumbnail: 'https://img.youtube.com/vi/lHT-dQ94Rp0/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=lHT-dQ94Rp0'
    }
  ],
  prompts: [
    { id: '1', title: 'Imagem de produto minimalista', content: 'Gere uma imagem de um produto elegante sobre fundo branco com sombra suave, estilo comercial clean.' },
    { id: '2', title: 'Cena futurista estilizada', content: 'Crie uma imagem de cidade futurista ao entardecer com néon e atmosfera ciberpunk.' },
    { id: '3', title: 'Mascote fofo para marca', content: 'Desenhe um mascote simpático para marca infantil, estilo cartoon com grupo de cores pastel.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '6',
    name: 'Leonardo AI',
    description: 'Plataforma completa para geração de imagens',
    image: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/27620a8b-e63f-49ba-a8f1-c7cc057ed1fa.jpg',
    url: 'https://leonardo.ai',
    category: 'imagem',
    new: true,
    function: 'Plataforma de geração de imagens por IA com foco em ilustração, arte digital e controle criativo avançado.',
  applications: [
    'Capas para ebooks e projetos',
    'Personagens estilizados e avatares',
    'Mockups realistas e branding',
    'Arte digital personalizável'
  ],
  videos: [
    {
      id: '1',
      title: 'Leonardo AI: MEGA TUTORIAL 100% GRATUITO passo a passo',
      thumbnail: 'https://img.youtube.com/vi/yeQ_5v1hBTo/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=yeQ_5v1hBTo'
    },
    {
      id: '2',
      title: 'Como USAR O LEONARDO AI para CRIAR IMAGENS',
      thumbnail: 'https://img.youtube.com/vi/hFUqWiAToBs/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=hFUqWiAToBs'
    },
    {
      id: '3',
      title: 'Leonardo AI vs Midjourney – Comparativo de qualidade',
      thumbnail: 'https://img.youtube.com/vi/FXJ-0szMeOY/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=FXJ-0szMeOY'
    }
  ],
  prompts: [
    { id: '1', title: 'Capa de livro misteriosa', content: 'Crie uma capa para livro de suspense com floresta escura e silhueta misteriosa ao fundo.' },
    { id: '2', title: 'Personagem estilo anime', content: 'Desenhe um personagem anime com cabelo azul, uniforme futurista e expressão confiante.' },
    { id: '3', title: 'Arte retrô anos 80', content: 'Gere arte com estética retrô dos anos 80 para pôster de evento tech.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  
  // Voz
  {
    id: '7',
    name: 'ElevenLabs',
    description: 'Síntese de voz realista com clonagem vocal',
    image: 'https://xraise.ai/blog/wp-content/uploads/2025/04/ElevenLabs-tool-for-startups-cover-image.jpg',
    url: 'https://elevenlabs.io',
    category: 'voz',
    featured: true,
    function: 'IA especializada em clonagem e síntese de voz humana realista, com suporte multilíngue, inclusive português.',
  applications: [
    'Narrar vídeos ou audiobook',
    'Locução para marketing',
    'Clonagem de voz para atendimento',
    'Leitura automática de textos'
  ],
  videos: [
    {
      id: '1',
      title: 'GUIA COMPLETO DE COMO USAR O ELEVENLABS',
      thumbnail: 'https://img.youtube.com/vi/EFTTgqEm34M/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=EFTTgqEm34M'
    },
    {
      id: '2',
      title: 'Como Usar o ElevenLabs – Criar locução com qualidade',
      thumbnail: 'https://img.youtube.com/vi/wZxdzIdyE5k/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=wZxdzIdyE5k'
    },
    {
      id: '3',
      title: 'COMO USAR O ELEVEN LABS! (CLONAR VOZ, DUBLAGEM ...)',
      thumbnail: 'https://img.youtube.com/vi/XfwS4IuW6Q0/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=XfwS4IuW6Q0'
    }
  ],
  prompts: [
  {
    id: '1',
    title: 'Locução Profissional para Vídeo de Vendas',
    content: 'Crie uma narração masculina com voz firme e entonação comercial para o seguinte roteiro de VSL: "[COLE O ROTEIRO AQUI]". A voz deve transmitir autoridade e confiança, como um apresentador de TV.'
  },
  {
    id: '2',
    title: 'Clonagem de Voz com Emoção Natural',
    content: 'Utilize um áudio de referência com a minha própria voz e gere variações com as seguintes instruções: mantenha o timbre, adicione emoção realista e simule pausas naturais. Ideal para vídeos pessoais e conteúdos autorais.'
  },
  {
    id: '3',
    title: 'Conversão de Texto para Voz Estilo Podcast',
    content: 'Transforme o seguinte texto em uma narração estilo podcast, com voz feminina suave, tom informal e cadência natural de conversa. Ideal para engajar ouvintes em plataformas como Spotify e YouTube.'
  }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '8',
    name: 'Murf AI',
    description: 'Gerador de narrações profissionais',
    image: 'https://media.cybernews.com/images/featured-big/2024/12/murf-ai-review.jpg',
    url: 'https://murf.ai',
    category: 'voz',
    function: 'Ferramenta de IA para transformar texto em voz com qualidade profissional para vídeos, cursos e apresentações.',
  applications: [
    'Locução para vídeos institucionais',
    'Narração de cursos online',
    'Comerciais motivacionais',
    'Vídeos de e‑learning com vozes neutras'
  ],
  videos: [
    {
      id: '1',
      title: 'How to Use Murf AI | Murf AI Tutorial 2025',
      thumbnail: 'https://img.youtube.com/vi/XsXF5BuGuBc/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=XsXF5BuGuBc'
    },
    {
      id: '2',
      title: 'Murf.ai Voiceover Tutorial (Create Your First Voice Over Demo)',
      thumbnail: 'https://img.youtube.com/vi/3ADPcgiGMvM/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=3ADPcgiGMvM'
    },
    {
      id: '3',
      title: 'Murf.AI Voice Changer Tutorial - How to Use The Voice',
      thumbnail: 'https://img.youtube.com/vi/xqJWdQSfaJQ/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=xqJWdQSfaJQ'
    }
  ],
  prompts: [
    {
      id: '1',
      title: 'Locução para Vídeo Institucional',
      content: 'Transforme este roteiro institucional em locução com voz clara e profissional, ideal para vídeo corporativo ou apresentação de marca.'
    },
    {
      id: '2',
      title: 'Voz motivacional',
      content: 'Crie uma narração energética para vídeo motivacional de 60 segundos com tom entusiasmado e engajante.'
    },
    {
      id: '3',
      title: 'Curso online narrado',
      content: 'Converta este texto educacional em voz neutra, clara e pausada para uso em aulas online e vídeos de treinamento.'
    }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '17',
    name: 'Natural Readers',
    description: 'Plataforma de conversão de texto em fala com vozes naturais e realistas, disponível em múltiplos idiomas.',
    image: 'https://cdn.prod.website-files.com/630533bb38a04b2d7788387f/674b4cb0ee29d2d16f7631a1_5THP1jKx_400x400.jpg',
    url: 'https://www.naturalreaders.com/',
    category: 'voz',
    function: 'Ferramenta de TTS (Text-to-Speech) que transforma textos, documentos e páginas da web em áudio com vozes naturais, ideal para acessibilidade, estudos e criação de conteúdo.',
  applications: [
     'Converter textos e documentos em áudio',
  'Criar narrações para vídeos e apresentações',
  'Auxiliar no aprendizado de idiomas',
  'Fornecer acessibilidade para pessoas com deficiência visual'
  ],
  videos: [
    {
      id: '1',
      title: 'Clonagem de Voz e Locuções Profissionais com IA - Natural Reader!',
      thumbnail: 'https://img.youtube.com/vi/IcPFeDj-A28/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=IcPFeDj-A28'
    },
    {
      id: '2',
      title: 'Como melhorar os seus textos | Natural Reader',
      thumbnail: 'https://img.youtube.com/vi/HF1BigTSkQ4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=HF1BigTSkQ4'
    },
    {
      id: '3',
      title: 'Como Usar O Natural Reader Para Criar Clone De Voz | Como Transformar Texto Em Voz Real',
      thumbnail: 'https://img.youtube.com/vi/464Oy97Q1z8/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=464Oy97Q1z8'
    }
  ],
  prompts: [
    {
  id: '1',
  title: 'Narrativa cinematográfica dramática',
  content: 'Use um tom dramático e intenso, com um estilo cinematográfico e cheio de emoção.'
},
{
  id: '2',
  title: 'Suspense em silêncio',
  content: 'Adote um tom silencioso e suspense, quase sussurrado, ideal para narrativas de terror.'
},
{
  id: '3',
  title: 'Conversa canadense descontraída',
  content: 'Imite uma voz alegre e conversacional com um forte sotaque canadense.'
}
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  
  // Vídeo
  {
    id: '9',
    name: 'Runway ML',
    description: 'Suite completa de ferramentas de IA para vídeo',
    image: 'https://aianimation.com/wp-content/uploads/2024/01/runway-ml-logo.jpg',
    url: 'https://runwayml.com',
    category: 'video',
    featured: true,
    function: 'Plataforma de criação multimodal com IA para vídeo, imagem e áudio, com edição colaborativa e efeitos criativos.',
  applications: [
    'Edição de vídeo com IA',
    'Green screen automático',
    'Motion graphics por prompt',
    'Visualizações criativas'
  ],
  videos: [
    {
      id: '1',
      title: 'Tutorial Completo de Imagem e Texto para vídeo usando a RUNWAY',
      thumbnail: 'https://img.youtube.com/vi/CmNBt9eov0o/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=CmNBt9eov0o'
    },
    {
      id: '2',
      title: 'RunWay ML: GERANDO VÍDEOS VIRAIS COM IA!',
      thumbnail: 'https://img.youtube.com/vi/lgGOlGVMR1g/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=lgGOlGVMR1g'
    },
    {
      id: '3',
      title: 'Runway ML Gen‑3 Tutorial Completo (em inglês)',
      thumbnail: 'https://img.youtube.com/vi/3pU2hZW4hUw/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=3pU2hZW4hUw'
    }
  ],
  prompts: [
    { id: '1', title: 'Efeito green screen automático', content: 'Remova automaticamente o fundo de um vídeo e substitua por uma cidade futurista usando Runway ML.' },
    { id: '2', title: 'Motion graphics por prompt', content: 'Crie uma animação curta com partículas flutuantes circulares usando um prompt textual.' },
    { id: '3', title: 'Transformação de imagem em vídeo', content: 'Gere um vídeo que transforme uma imagem estática em animações curtas e fluidas.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
  {
    id: '10',
    name: 'Synthesia',
    description: 'Criação de vídeos com avatares de IA',
    image: 'https://bizequals.com/media/com_jbusinessdirectory/pictures/companies/70/synthesia-logo-600x450.webp',
    url: 'https://synthesia.io',
    category: 'video',
     function: 'Ferramenta de vídeo com IA que permite criar vídeos com apresentadores virtuais e voz sintetizada.',
  applications: [
    'Aulas online com avatar virtual',
    'Tutoriais narrados sem câmera',
    'Vídeos institucionais e marketing',
    'Conteúdo corporativo automatizado'
  ],
  videos: [
    {
      id: '1',
      title: 'Tutorial Completo da Synthesia (IA Vídeo Maker)',
      thumbnail: 'https://img.youtube.com/vi/81cDEQ0iUQA/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=81cDEQ0iUQA'
    },
    {
      id: '2',
      title: 'Ferramenta incrível: Crie vídeos com IA (Synthesia)',
      thumbnail: 'https://img.youtube.com/vi/jj2qi1LUh48/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=jj2qi1LUh48'
    },
    {
      id: '3',
      title: 'Tutorial em inglês: Complete AI video maker',
      thumbnail: 'https://img.youtube.com/vi/ZEEIEs2ey_4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=ZEEIEs2ey_4'
    }
  ],
  prompts: [
    { id: '1', title: 'Script para apresentador virtual', content: 'Escreva um texto para avatar virtual apresentar [TEMA] com tom profissional e claro.' },
    { id: '2', title: 'Tutorial narrado estilo e‑learning', content: 'Crie um script passo a passo para ensinar [FERRAMENTA/PROCESSO] com voz fluida e direta.' },
    { id: '3', title: 'Mensagem institucional corporativa', content: 'Escreva uma mensagem institucional formal para clientes com tom sóbrio e envolvente.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
  
  // Automação
  {
    id: '11',
    name: 'Zapier',
    description: 'Automação de workflows entre aplicativos',
    image: 'https://sendbird.imgix.net/cms/Zapier-blog.png',
    url: 'https://zapier.com',
    category: 'automacao',
    function: 'Plataforma de automação que conecta apps e APIs para criar fluxos de trabalho sem código.',
  applications: [
    'Automatizar tarefas entre ferramentas',
    'Enviar notificações e e-mails automáticos',
    'Integrar CRMs, calendários e bancos',
    'Acionar IA automaticamente'
  ],
  videos: [
    {
      id: '1',
      title: 'Como Usar o Zapier: Tutorial Completo para Automatizar Tarefas',
      thumbnail: 'https://img.youtube.com/vi/IbbFHGwyxuY/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=IbbFHGwyxuY'
    },
    {
      id: '2',
      title: 'Zapier para iniciantes: 5 automações incríveis',
      thumbnail: 'https://img.youtube.com/vi/ElCFy_0lWmo/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=ElCFy_0lWmo'
    },
    {
      id: '3',
      title: 'O que é e como configurar o Zapier',
      thumbnail: 'https://img.youtube.com/vi/4g6yDevV7ec/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=4g6yDevV7ec'
    }
  ],
  prompts: [
    { id: '1', title: 'Automação de e-mail', content: 'Crie um fluxo no Zapier que envie e-mail quando um formulário do Google Forms for enviado.' },
    { id: '2', title: 'Integração com CRM', content: 'Configure zap para adicionar leads via Typeform diretamente no CRM.' },
    { id: '3', title: 'Notificação por Slack', content: 'Crie automação que envie mensagem no Slack ao registrar compra no WooCommerce.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
  {
    id: '12',
    name: 'Make',
    description: 'Plataforma visual para automação avançada',
    image: 'https://mma.prnewswire.com/media/2662866/Make_Logo.jpg?p=facebook',
    url: 'https://make.com',
    category: 'automacao',
    new: true,
    function: 'Ferramenta de automação visual (antiga Integromat) para criar fluxos avançados entre apps.',
  applications: [
    'Automatizar processos visuais',
    'Integrar APIs e dados',
    'Agendar tarefas automatizadas',
    'Fluxos complexos sem codar'
  ],
  videos: [
    {
      id: '1',
      title: 'Tutorial Make (Integromat): Passo a passo para iniciantes',
      thumbnail: 'https://img.youtube.com/vi/HkbO7mpxDmY/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=HkbO7mpxDmY'
    },
    {
      id: '2',
      title: 'MAKE INTEGROMAT: Passo a passo para iniciantes',
      thumbnail: 'https://img.youtube.com/vi/yYiP6RhQ9wM/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=yYiP6RhQ9wM'
    },
    {
      id: '3',
      title: 'Getting Started with Make (30‑Minute Crash Course)',
      thumbnail: 'https://img.youtube.com/vi/lKkGewKvXdo/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=lKkGewKvXdo'
    }
  ],
  prompts: [
    { id: '1', title: 'Integração visual inicial', content: 'Crie fluxo que extrai dados de Google Sheets e envia por e-mail automaticamente.' },
    { id: '2', title: 'Agendamento automático', content: 'Automatize postagens no Instagram a partir de itens marcados no Trello.' },
    { id: '3', title: 'API externa via webhook', content: 'Configure conexão com API externa para processar dados em tempo real no Make.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
  
  // Código
  {
    id: '13',
    name: 'GitHub Copilot',
    description: 'Assistente de código da Microsoft e GitHub',
    image: 'https://aps.autodesk.com/sites/default/files/2024-10/Screenshot%202024-10-03%20at%2015.34.40.png',
    url: 'https://github.com/features/copilot',
    category: 'codigo',
    featured: true,
    function: 'Assistente de codificação por IA integrado ao VS Code que sugere e escreve código automaticamente.',
  applications: [
    'Autocompletar funções em código',
    'Refatorar código e documentação',
    'Codificação assistida em tempo real',
    'Ajuda contextual durante programação'
  ],
  videos: [
    {
      id: '1',
      title: 'Introduction to GitHub Copilot (em português)',
      thumbnail: 'https://img.youtube.com/vi/aoyhoIZk56A/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=aoyhoIZk56A'
    },
    {
      id: '2',
      title: 'GitHub Copilot Tutorial In‑Depth',
      thumbnail: 'https://img.youtube.com/vi/m6VwoXAaiXI/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=m6VwoXAaiXI'
    },
    {
      id: '3',
      title: 'Getting Started with GitHub Copilot (VS Code)',
      thumbnail: 'https://img.youtube.com/vi/f8CkP7SC-kM/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=f8CkP7SC-kM'
    }
  ],
  prompts: [
    { id: '1', title: 'Autocompletar função', content: 'Use Copilot para gerar função em JS que filtre lista de objetos por valor da propriedade X.' },
    { id: '2', title: 'Refatoração de código', content: 'Peça para refatorar este código mantendo lógica e legibilidade: [INSERIR CÓDIGO].' },
    { id: '3', title: 'Documentação automática', content: 'Gere documentação JSDoc para a função abaixo: [INSERIR FUNÇÃO].' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
  {
    id: '14',
    name: 'Cursor',
    description: 'Editor de código com IA integrada',
    image: 'https://cdn.prod.website-files.com/65caf7635d745af6514ffcd8/6839f5caeb82f3e2a640a592_cursor-ai.jpg',
    url: 'https://cursor.sh',
    category: 'codigo',
    new: true,
    function: 'Assistente de IA para programação que ajuda a buscar código, resolver bugs e navegar em grandes bases de código.',
  applications: [
    'Buscar trechos de código em projetos grandes',
    'Resolver erros e sugerir melhorias',
    'Exibir exemplos de APIs',
    'Agilizar revisão de código'
  ],
  videos: [
    {
      id: '1',
      title: 'Tutorial Cursor AI para Iniciantes: Do Zero ao Primeiro Projeto',
      thumbnail: 'https://img.youtube.com/vi/g9DasSpTNrc/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=g9DasSpTNrc'
    },
    {
      id: '2',
      title: 'TUTORIAL CURSOR IDE – Aprenda a usar a IDE Cursor (em português)',
      thumbnail: 'https://img.youtube.com/vi/VZG95JS_Ab4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=VZG95JS_Ab4'
    },
    {
      id: '3',
      title: 'Cursor AI Course 2025 Edition (em inglês)',
      thumbnail: 'https://img.youtube.com/vi/3289vhOUdKA/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=3289vhOUdKA'
    }
  ],
  prompts: [
    { id: '1', title: 'Busca de função em código', content: 'Use o Cursor para encontrar onde está sendo usada a função "[NOME_FUNÇÃO]" num projeto grande.' },
    { id: '2', title: 'Correção de bug', content: 'Explique e corrija este erro no código: "[COLAR ERRO AQUI]".' },
    { id: '3', title: 'Exemplo de API', content: 'Mostre como usar a API pública de [NOME_API] com código claro e comentado.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  }
];