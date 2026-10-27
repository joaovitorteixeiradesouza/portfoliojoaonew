# Portfólio Profissional de Engenharia de Software — João Vitor Souza

Plano arquitetural e estrutural completo para o desenvolvimento de um portfólio web de alta performance e apelo estético para o desenvolvedor full stack **João Vitor Souza**, projetado para destacar projetos de software robustos, domínio tecnológico aprofundado, histórico de carreira e canais diretos de contato profissional.

---

## Decisões Confirmadas e Revisão do Usuário

> [!IMPORTANT]
> As preferências centrais foram alinhadas na etapa de clarificação e orientam toda a arquitetura visual e funcional desta proposta:

- **Especialidade Principal**: Desenvolvedor Full Stack com foco em aplicações web modernas, APIs RESTful/GraphQL e arquitetura de sistemas escaláveis.
- **Estética & Visual**: *Dark Mode* contemporâneo com atmosfera translúcida de vidro (*glassmorphism* refinado), paleta profunda (`slate-950` / `zinc-900`) e realces sutis em ciano elétrico e índigo/violeta, respeitando a regra do 60-30-10 e a disciplina *anti-slop* (sem poluição de pills ou contadores artificiais).
- **Funcionalidades e Seções Interativas Confirmadas**:
  1. **Vitrine Dinâmica de Projetos**: Filtros interativos por tecnologia (Full Stack, Backend, APIs, Frontend) e Modal Expandido com ficha técnica, diagrama de arquitetura do projeto, desafios superados e links de código/demo.
  2. **Matriz de Tecnologias & Stacks**: Organização por camadas (Frontend, Backend & APIs, Banco de Dados, DevOps & Ferramentas) com tags tipográficas limpas.
  3. **Linha do Tempo Interativa de Carreira e Formação**: Experiência profissional, evolução técnica e certificações/graduação.
  4. **Central de Contato & Ações Diretas**: Formulário integrado com validação em tempo real e links imediatos para WhatsApp corporativo, LinkedIn e GitHub.

---

## 1. Visão Geral e Conceito Central

- **O Que É**: Uma plataforma web pessoal de engenharia de software rápida, responsiva e com alto índice de conversão profissional para recrutadores de tecnologia, líderes técnicos (*tech leads*) e clientes corporativos.
- **Público-Alvo**: Headhunters de tecnologia, gestores de engenharia, CTOs, fundadores e parceiros comerciais à procura de um desenvolvedor full stack autônomo e focado em qualidade.
- **Proposta de Valor**: Transmitir maturidade técnica e capacidade de entrega de software de ponta a ponta, demonstrando desde a experiência de interface até a estabilidade do backend e arquitetura de dados.

---

## 2. Experiência do Usuário e Design Visual

### Fluxos Chave de Navegação
1. **Primeiro Impacto (Hero & Posicionamento)**:
   - Acesso imediato à proposta de valor, resumo de especialidades e botões primários de ação ("Ver Projetos" e "Entrar em Contato").
   - Acesso com 1 clique aos perfis profissionais (GitHub, LinkedIn, WhatsApp).
2. **Exploração de Competências (Stack & Habilidades)**:
   - Exibição categorizada de tecnologias sem poluição visual. Cada tecnologia traz contexto de uso em produção.
3. **Imersão em Projetos de Software (Bento Grid com Filtros e Modal)**:
   - Alternância fluida entre categorias (Todos, Full Stack, Backend/APIs, Web Apps).
   - Ao clicar em qualquer projeto, abre-se um modal detalhado com contexto de negócio, stack completa, decisões de arquitetura e botões para demonstração ao vivo e repositório.
4. **Jornada Profissional (Linha do Tempo)**:
   - Visualização cronológica da trajetória com cargos, responsabilidades, impacto em métricas reais e formação acadêmica.
5. **Conversão & Contato**:
   - Formulário com campos para Nome, Email, Assunto e Mensagem, com feedback imediato de envio e atalho para conversa direta no WhatsApp ou envio de email.

### Identidade Visual e Estética
- **Paleta de Cores (Regra 60-30-10)**:
  - **60% Fundo Neutro Profundo**: Preto ardósia e grafite (`#090D16` e `#0F172A`) com gradiente radial sutil que confere profundidade espacial.
  - **30% Superfícies Estruturais e Vidro**: Cartões com fundo translúcido `rgba(15, 23, 42, 0.65)`, desfoque de fundo (*backdrop-blur-md*) e bordas discretas de 1px (`rgba(255, 255, 255, 0.08)`).
  - **10% Acentos Vivos & Foco**: Ciano elétrico (`#06B6D4`) e índigo moderno (`#6366F1`) para botões de ação principal, focos ativos de navegação e realces de destaque.
- **Tipografia**:
  - Títulos e Destaques: `Plus Jakarta Sans` ou `Outfit`, com peso semibold/bold e espaçamento balanceado.
  - Textos de Apoio e Parágrafos: `DM Sans` ou `Inter`, proporcionando leitura confortável (15px–16px, line-height 1.6).
  - Blocos de Código e Métricas: Fonte monoespaçada (`JetBrains Mono` / `tabular-nums`) para dados técnicos.
- **Disciplina Anti-Slop**:
  - Nada de pílulas coloridas estáticas ou badges em excesso; metadados de projetos e tecnologias usam separadores tipográficos limpos (`·`, `/`).
  - Sem contadores ou pontuações artificiais de "habilidade 95%". Em vez disso, evidências de software real com impacto descritivo e arquitetural.
- **Top Bar Contract**:
  - **Zona 1 (Marca)**: `João Vitor Souza` com subtexto sutil integrado na mesma linha conceitual.
  - **Zona 2 (Navegação)**: Links diretos em linha única: `Projetos`, `Tecnologias`, `Trajetória`, `Sobre`.
  - **Zona 3 (Ação Primária)**: Botão de destaque `Fale Comigo`.

---

## 3. Decisões de Produto e Trade-offs

- **Decisão 1: Apresentação de Projetos em Modal Detalhado vs. Páginas Separadas**:
  - *Abordagem*: Modal interativo rico em detalhes sobrepostos à página com URL/hash sincronizada.
  - *Justificativa*: Mantém o recrutador no mesmo fluxo contínuo de avaliação sem necessidade de recarregar páginas externas ou quebrar o ritmo da leitura.
  - *Alternativa descartada*: Múltiplas páginas estáticas desacopladas (aumentaria o atrito de navegação).
- **Decisão 2: Filtragem Client-Side Instantânea com Animação Fluida**:
  - *Abordagem*: Filtragem reativa instantânea utilizando estado no React com transições suaves via Motion.
  - *Justificativa*: Resposta em menos de 50ms, oferecendo sensação imediata de velocidade de produto.
- **Decisão 3: Linha do Tempo Unificada (Carreira + Formação)**:
  - *Abordagem*: Abas de alternância rápida entre "Experiência Profissional" e "Formação & Certificações".
  - *Justificativa*: Reduz a rolagem desnecessária e permite ao visitante focar no que mais lhe interessa no momento.

---

## 4. Arquitetura Técnica e Estrutura dos Componentes

### Diagrama Arquitetural de Componentes e Fluxo de Dados

```
┌────────────────────────────────────────────────────────────────────────┐
│                              Navbar                                    │
│  [ João Vitor Souza ]   [ Projetos · Stacks · Trajetória ]   [ Contato ]│
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                           Hero Section                                 │
│  - Apresentação Full Stack e Filosofia de Engenharia                   │
│  - CTAs Principais + Links Rápidos (GitHub, LinkedIn, WhatsApp, Email) │
│  - Resumo de Métricas de Entrega em Produção                           │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                         Projects Section                               │
│  - Barra de Filtros Segmentada: [ Todos | Full Stack | Backend | Web ] │
│  - Grid de Projetos com Imagens Geradas em Alta Fidelidade             │
│  - Metadados sem pílulas (Tempo · Stack Principal · Arquitetura)       │
│  - Gatilho do Modal de Especificação Técnica do Projeto                │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                      Tech Stack Matrix Section                         │
│  - Camada Frontend (React, TypeScript, Tailwind, Next.js)              │
│  - Camada Backend & APIs (Node.js, Express, NestJS, REST/GraphQL)      │
│  - Camada de Dados (PostgreSQL, MongoDB, Redis, Prisma/Drizzle)        │
│  - DevOps & Infra (Docker, CI/CD, Git, Cloud / Linux)                  │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                     Career & Education Timeline                        │
│  - Linha do tempo de cargos, impacto e projetos liderados              │
│  - Formação em Análise e Desenvolvimento de Sistemas / Eng. Software   │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        Contact & Conversion                            │
│  - Formulário com validação imediata e feedback visual                 │
│  - Acesso direto ao WhatsApp com mensagem pré-preenchida               │
│  - Copiar email institucional com 1 clique (com toast de confirmação)  │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                       Footer (Minimalista)                             │
│  - Direitos autorais, disponibilidade para projetos e links sociais    │
└────────────────────────────────────────────────────────────────────────┘
```

### Modelo de Dados dos Projetos e Experiências

```typescript
export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'fullstack' | 'backend' | 'frontend' | 'api';
  description: string;
  architectureDetails: string;
  technologies: string[];
  metrics: string; // Ex: "+40% de performance em consultas", "50k req/dia"
  imagePlaceholder: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
}

export interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface TechCategory {
  categoryName: string;
  description: string;
  items: {
    name: string;
    level: string;
    usageContext: string;
  }[];
}
```

### Mapeamento de Interatividades e Estados
- **Filtro de Projetos**: Estado reativo `selectedCategory` com animação de reordenação.
- **Modal de Detalhe de Projeto**: Estado `activeProject: Project | null` com bloqueio de scroll de fundo e fechamento via tecla `ESC` ou clique fora.
- **Formulário de Contato**: Validação de campos obrigatórios, simulação de envio em tempo real com estados `idle`, `submitting`, `success` e mensagem de confirmação.
- **Cópia Rápida de Informações**: Clique no email ou chave de contato copia para a área de transferência com toast discreto de confirmação.
