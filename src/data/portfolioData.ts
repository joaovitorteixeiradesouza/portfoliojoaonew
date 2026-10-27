export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'all' | 'fullstack' | 'backend' | 'frontend' | 'api';
  description: string;
  architectureDetails: string;
  technologies: string[];
  metrics: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  challengesSolved: string;
}

export interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  roleOrDegree: string;
  companyOrInstitution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface TechSkill {
  name: string;
  level: string;
  yearsOfExp: string;
  context: string;
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  skills: TechSkill[];
}

export const PERSONAL_INFO = {
  name: "João Vitor Souza",
  title: "Engenheiro de Software & Desenvolvedor Full Stack",
  headline: "Construindo sistemas de software resilientes, APIs de alta vazão e interfaces web modernas de alto impacto.",
  bio: "Desenvolvedor de sistemas especializado no ecossistema TypeScript, Node.js, React e bancos de dados relacionais e em memória. Foco rigoroso em arquitetura limpa, escalabilidade sob carga real e interfaces que proporcionam experiências digitais ágeis e intuitivas.",
  email: "joaovitorteixeiradesouza4@gmail.com",
  phone: "+55 (11) 98765-4321",
  whatsappUrl: "https://wa.me/5511987654321?text=Ol%C3%A1%20Jo%C3%A3o%20Vitor%2C%20encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.",
  linkedinUrl: "https://linkedin.com/in/joaovitorsouza-dev",
  githubUrl: "https://github.com/joaovitorsouza",
  location: "São Paulo, SP · Brasil",
  availability: "Disponível para novos projetos e posições Full Stack",
  avatarUrl: "/src/assets/images/dev_joao_portrait_1793120968255.jpg",
  stats: [
    { label: "Anos de Experiência", value: "4+" },
    { label: "Projetos em Produção", value: "24+" },
    { label: "Disponibilidade de Uptime", value: "99.9%" },
    { label: "Requisições Diárias", value: "500k+" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "cloudnet",
    title: "CloudNet Microservices Suite",
    tagline: "Painel distribuído para telemetria, orquestração e monitoramento de microsserviços em tempo real",
    category: "fullstack",
    description: "Plataforma corporativa full-stack de observabilidade e gestão operacional de clusters de microsserviços. Permite monitorar saúde de instâncias, latência P95/P99, consumo de CPU/Memória e vazão de tráfego com gráficos dinâmicos e alertas automatizados.",
    architectureDetails: "Arquitetura orientada a eventos estruturada em Node.js com ingestão via Redis Pub/Sub e persistência analítica em PostgreSQL particionado por data. Comunicação bidirecional com a interface React via WebSockets seguros com reconexão automática e backpressure handling.",
    technologies: ["React 19", "Node.js", "TypeScript", "Tailwind CSS", "Redis", "PostgreSQL", "Docker", "WebSockets"],
    metrics: "-35% de latência média · 99.98% de disponibilidade operacional",
    imageUrl: "/src/assets/images/project_nexus_cloud_1793120969260.jpg",
    demoUrl: "https://cloudnet-demo.dev",
    githubUrl: "https://github.com/joaovitorsouza/cloudnet-microservices",
    features: [
      "Monitoramento dinâmico de serviços com métricas de requisições por segundo",
      "Detecção automática de anomalias com emissão de notificações imediatas",
      "Painel de alocação de recursos em nuvem (Compute, Storage, Network)",
      "Registro estruturado de logs com filtros avançados de stack trace"
    ],
    challengesSolved: "Resolução de gargalos de renderização na interface ao receber mais de 1.200 eventos por segundo através de throttling adaptativo no cliente e virtualização de listas de logs."
  },
  {
    id: "payflow",
    title: "PayFlow Gateway & Financial Analytics",
    tagline: "Plataforma de processamento de pagamentos com conciliação bancária automatizada e dashboards de receita",
    category: "backend",
    description: "Sistema robusto de processamento financeiro com suporte a múltiplos adquirentes, emissão de cobranças recorrentes, split de pagamentos e conciliação bancária automatizada com precisão centesimal.",
    architectureDetails: "Camada de domínio isolada aplicando princípios de Clean Architecture e DDD. Mecanismo rigoroso de idempotência em cabeçalhos HTTP (`Idempotency-Key`), transações distribuídas gerenciadas com padrão Saga e isolamento SERIALIZABLE para transferências de saldo.",
    technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma ORM", "Redis Cache", "Jest", "Tailwind CSS"],
    metrics: "R$ 4.5M+ transacionados · P99 < 45ms em liquidação",
    imageUrl: "/src/assets/images/project_payflow_fintech_1793120970448.jpg",
    demoUrl: "https://payflow-preview.dev",
    githubUrl: "https://github.com/joaovitorsouza/payflow-gateway",
    features: [
      "Processamento de cartão, Pix instantâneo e boletos bancários com webhook seguro",
      "Algoritmo inteligente de retentativa para evitar cobranças duplicadas",
      "Dashboard analítico de volume transacionado, churn e taxas de conversão",
      "Módulo de auditoria com trilha imutável de eventos financeiros"
    ],
    challengesSolved: "Implementação de bloqueio pessimista e controle de concorrência com Redis distributed locks para evitar condições de corrida (race conditions) em saques concorrentes."
  },
  {
    id: "aetherflow",
    title: "AetherFlow Workflow & Sprint Engine",
    tagline: "Motor de orquestração de tarefas ágeis e automação de fluxos de trabalho para times de engenharia",
    category: "fullstack",
    description: "Ambiente colaborativo para gestão visual de pipelines de engenharia, integração contínua e fluxos condicionais de aprovação de software. Suporta diagramação interativa e Kanban com sincronização multi-usuário.",
    architectureDetails: "Frontend modular em React com motor de canvas para diagramação de nós de fluxo. Backend estruturado com GraphQL e subscriptions, mapeando grafos direcionados acíclicos (DAG) validados em tempo de compilação do fluxo.",
    technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS", "PostgreSQL", "Motion"],
    metrics: "+45% de agilidade em entregas de sprints · 15k tarefas orquestradas",
    imageUrl: "/src/assets/images/project_taskcraft_collab_1793120970740.jpg",
    demoUrl: "https://aetherflow-demo.dev",
    githubUrl: "https://github.com/joaovitorsouza/aetherflow-engine",
    features: [
      "Editor visual drag-and-drop de fluxos de automação de deployment",
      "Quadro Kanban de alta responsividade com atualizações otimistas",
      "Integração nativa com webhooks do GitHub, GitLab e Slack",
      "Controle de versões e rollback de pipelines com 1 clique"
    ],
    challengesSolved: "Validação matemática de ciclos infinitos em grafos de tarefas com algoritmo de busca em profundidade (DFS) executado no cliente com feedback em tempo real."
  },
  {
    id: "authguard",
    title: "AuthGuard Identity & Access Management",
    tagline: "Serviço centralizado de autenticação segura OAuth2/OIDC com RBAC granular e MFA",
    category: "api",
    description: "Microsserviço de segurança corporativa fornecendo emissão e rotação de tokens JWT com criptografia assimétrica RS256, autenticação multifator (TOTP via Google Authenticator) e controle de permissões baseado em papéis.",
    architectureDetails: "Construído sobre Fastify para máximo throughput de I/O não bloqueante. Validação de esquemas via TypeBox compilado em tempo de execução para garantir zero overhead de serialização JSON.",
    technologies: ["Node.js", "Fastify", "TypeScript", "Redis", "PostgreSQL", "Docker", "Vitest", "Argon2"],
    metrics: "Tempo de resposta P99 < 15ms · 100% de cobertura em testes de segurança",
    imageUrl: "/src/assets/images/project_nexus_cloud_1793120969260.jpg",
    githubUrl: "https://github.com/joaovitorsouza/authguard-iam",
    features: [
      "Autenticação sem senha (Magic Link) e suporte a TOTP MFA",
      "Taxa de rate limiting adaptativo por IP e usuário contra ataques de força bruta",
      "Revogação imediata de tokens com blacklist distribuída em Redis",
      "Suporte a multi-tenancy com isolamento de schemas de banco"
    ],
    challengesSolved: "Mitigação de ataques de timing attacks na comparação de hashes criptográficos através de buffers de tempo constante com algoritmo Argon2id."
  },
  {
    id: "devpulse",
    title: "DevPulse Component System & UI Core",
    tagline: "Sistema de design e biblioteca de componentes reutilizáveis para aplicações web acessíveis",
    category: "frontend",
    description: "Design system estruturado para padronizar interfaces em mais de 8 produtos web internos, com suporte total a acessibilidade (WCAG 2.1 AA), temas dinâmicos (Dark/Light) e tokens tipográficos consistentes.",
    architectureDetails: "Arquitetura baseada em composição de primitivos desacoplados do DOM. Empacotamento com Rollup em formato ESM e CJS, com tree-shaking rigoroso que mantém o bundle final abaixo de 24kB gzipped.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Framer Motion", "Playwright"],
    metrics: "100% acessibilidade WCAG AA · Bundle ultraleve de 22kB",
    imageUrl: "/src/assets/images/project_payflow_fintech_1793120970448.jpg",
    githubUrl: "https://github.com/joaovitorsouza/devpulse-ui",
    features: [
      "Mais de 35 componentes de interface testados contra leitores de tela",
      "Documentação interativa com controle de propriedades em tempo real",
      "Suporte a navegação por teclado e foco gerenciado em diálogos modais",
      "Tokens de design com compatibilidade total com Tailwind CSS v4"
    ],
    challengesSolved: "Gerenciamento de armadilhas de foco (focus trap) e retenção de acessibilidade em modais aninhados e gavetas de navegação móvel."
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend & Interfaces Web",
    description: "Desenvolvimento de interfaces modernas, performáticas, reativas e totalmente responsivas.",
    skills: [
      { name: "React 19 & Next.js", level: "Avançado", yearsOfExp: "4 anos", context: "Server Components, Hooks customizados e otimização de renderização" },
      { name: "TypeScript", level: "Avançado", yearsOfExp: "4 anos", context: "Tipagem estrita, generics complexos e validação de contratos" },
      { name: "Tailwind CSS", level: "Avançado", yearsOfExp: "3 anos", context: "Design systems modulares, temas dinâmicos e glassmorphism" },
      { name: "Motion & UI Animations", level: "Intermediário/Avançado", yearsOfExp: "3 anos", context: "Micro-interações fluídas a 60fps e transições de layout" },
      { name: "HTML5 Semântico & A11y", level: "Avançado", yearsOfExp: "4 anos", context: "Acessibilidade WCAG AA, SEO técnico e navegação por teclado" },
    ]
  },
  {
    id: "backend",
    title: "Backend, APIs & Microsserviços",
    description: "Construção de serviços de alta vazão, arquitetura limpa e regras de negócio complexas.",
    skills: [
      { name: "Node.js & Express / Fastify", level: "Avançado", yearsOfExp: "4 anos", context: "APIs RESTful de alta performance, middlewares e streaming" },
      { name: "Clean Architecture & DDD", level: "Avançado", yearsOfExp: "3 anos", context: "Desacoplamento de domínio, repositórios e inversão de dependência" },
      { name: "Arquitetura Orientada a Eventos", level: "Intermediário/Avançado", yearsOfExp: "2 anos", context: "Mensageria, filas com BullMQ e pub/sub assíncrono" },
      { name: "WebSockets & Tempo Real", level: "Avançado", yearsOfExp: "3 anos", context: "Streaming de dados bidirecional e sincronização multi-sessão" },
      { name: "GraphQL & REST", level: "Avançado", yearsOfExp: "3 anos", context: "Esquemas tipados, resolvers otimizados e documentação OpenAPI" },
    ]
  },
  {
    id: "database",
    title: "Bancos de Dados & Armazenamento",
    description: "Modelagem relacional e não-relacional com foco em integridade e tempos de resposta submilisegundo.",
    skills: [
      { name: "PostgreSQL", level: "Avançado", yearsOfExp: "4 anos", context: "Modelagem relacional, índices avançados, triggers e particionamento" },
      { name: "Redis", level: "Avançado", yearsOfExp: "3 anos", context: "Cache distribuído, rate limiting, pub/sub e bloqueio distribuído" },
      { name: "Prisma & Drizzle ORM", level: "Avançado", yearsOfExp: "3 anos", context: "Migrações versionadas e consultas type-safe otimizadas" },
      { name: "MongoDB", level: "Intermediário", yearsOfExp: "2 anos", context: "Documentos não estruturados e agregação de coleções analíticas" },
    ]
  },
  {
    id: "devops",
    title: "DevOps, Qualidade & Ferramentas",
    description: "Práticas de engenharia de software para entrega contínua estável e monitoramento.",
    skills: [
      { name: "Docker & Conteinerização", level: "Avançado", yearsOfExp: "3 anos", context: "Multi-stage builds, isolamento de ambientes e Docker Compose" },
      { name: "CI/CD & GitHub Actions", level: "Intermediário/Avançado", yearsOfExp: "3 anos", context: "Pipelines automatizados de lint, teste e deploy contínuo" },
      { name: "Testes Automatizados (Vitest/Jest)", level: "Avançado", yearsOfExp: "3 anos", context: "TDD, testes unitários, integração de APIs e mocking" },
      { name: "Git & Versionamento Ágil", level: "Avançado", yearsOfExp: "4 anos", context: "Gitflow, trunk-based development e revisões rigorosas de PR" },
      { name: "Cloud & Linux", level: "Intermediário", yearsOfExp: "3 anos", context: "Deploy em Cloud Run / AWS ECS, Nginx e servidores Linux" },
    ]
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "exp-1",
    type: "experience",
    roleOrDegree: "Desenvolvedor de Software Full Stack Pleno",
    companyOrInstitution: "TechVenture Solutions",
    period: "2023 — Presente",
    location: "São Paulo, SP (Remoto)",
    description: "Liderança técnica no desenvolvimento de soluções de software web corporativas e APIs financeiras, coordenando entregas com foco em resiliência e performance.",
    highlights: [
      "Arquitetei e liderei a migração de monólito legado para microsserviços Node.js, reduzindo tempo de build em 60%",
      "Implementei integração de pagamentos e conciliação em tempo real processando mais de 500k transações mensais",
      "Estruturei pipelines automatizados de CI/CD que elevaram a frequência de deploys de semanal para diária"
    ],
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Redis"]
  },
  {
    id: "exp-2",
    type: "experience",
    roleOrDegree: "Desenvolvedor de Sistemas Jr / Pleno",
    companyOrInstitution: "Inovare Tecnologia",
    period: "2021 — 2023",
    location: "São Paulo, SP",
    description: "Desenvolvimento de aplicações web responsivas, dashboards analíticos para clientes B2B e manutenção de APIs RESTful integradas a múltiplos bancos de dados.",
    highlights: [
      "Construí interfaces interativas em React reduzindo o tempo de carregamento de páginas em 40% com code-splitting",
      "Desenvolvi mais de 30 endpoints REST seguros com autenticação JWT e documentação Swagger padronizada",
      "Reduzi custos de infraestrutura em 25% através da otimização de consultas SQL e implementação de cache Redis"
    ],
    skills: ["React", "JavaScript", "Express", "PostgreSQL", "Tailwind CSS", "Git"]
  },
  {
    id: "edu-1",
    type: "education",
    roleOrDegree: "Bacharelado em Engenharia de Software / Análise de Sistemas",
    companyOrInstitution: "Universidade de Tecnologia e Ciências da Computação",
    period: "2020 — 2024",
    location: "São Paulo, SP",
    description: "Formação sólida em fundamentos da computação, estruturas de dados, algoritmos avançados, engenharia de requisitos e arquitetura de software orientada a objetos.",
    highlights: [
      "Trabalho de Conclusão de Curso com foco em tolerância a falhas em sistemas distribuídos sob alta concorrência",
      "Participação ativa em maratonas de programação e projetos de extensão comunitária de desenvolvimento web"
    ],
    skills: ["Algoritmos", "Estrutura de Dados", "Engenharia de Software", "Sistemas Distribuídos"]
  },
  {
    id: "edu-2",
    type: "education",
    roleOrDegree: "Certificação Profissional em Arquitetura de Nuvem e DevOps",
    companyOrInstitution: "Cloud Architecture Academy",
    period: "2023",
    location: "Certificação Internacional",
    description: "Especialização prática em conteinerização com Docker, orquestração de microsserviços, automação de infraestrutura como código e práticas modernas de observabilidade.",
    highlights: [
      "Implementação de clusters resilientes com zero-downtime deployment",
      "Domínio em segurança de redes, certificados SSL/TLS e segredos distribuídos"
    ],
    skills: ["Docker", "Kubernetes Fundamentos", "CI/CD", "Segurança em Nuvem"]
  }
];
