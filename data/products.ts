export type ProductStatus =
  | "Live"
  | "Prototype"
  | "In Development"
  | "Experiment"
  | "Open Source"
  | "Private Build";

export type Product = {
  name: string;
  slug: string;
  subtitle?: string;
  status: ProductStatus;
  category: string;
  summary: string;
  description: string;
  problem?: string;
  solution?: string;
  whyItMatters?: string;
  targetUsers?: string[];
  useCases?: string[];
  techStack: string[];
  quickstart?: {
    heading: string;
    installHeading: string;
    note: string;
    installs: {
      label: string;
      code: string;
    }[];
    examples: {
      label: string;
      code: string;
    }[];
  };
  proofPoints?: {
    name: string;
    status: ProductStatus;
    category: string;
    description: string;
    details: string[];
    links?: {
      live?: string;
      github?: string;
      docs?: string;
    };
  }[];
  features: string[];
  examples?: {
    name: string;
    status: ProductStatus;
    category: string;
    summary: string;
    description: string;
    techStack: string[];
    links?: {
      github?: string;
      docs?: string;
    };
  }[];
  links?: {
    live?: string;
    github?: string;
    docs?: string;
    caseStudy?: string;
  };
  image?: string;
};

export const paygateProduct: Product = {
  name: "Paygate",
  slug: "paygate",
  subtitle: "Spring Boot starter for Lightning payment-gated APIs",
  status: "Open Source",
  category: "Developer Tool / Spring Boot Starter",
  summary:
    "Paygate is a Spring Boot starter that adds L402 and MPP payment-gated authentication to Java APIs.",
  description:
    "Paygate lets Spring Boot developers protect endpoints with a single annotation, issue HTTP 402 payment challenges, and accept Bitcoin Lightning credentials through L402 or the draft Payment authentication flow.",
  problem:
    "Most API monetization stacks are built around accounts, subscriptions, and human checkout flows. Agent and machine clients need a protocol-native way to pay per request without custom billing infrastructure.",
  solution:
    "Paygate auto-configures Spring Boot filters, protocol handlers, Lightning backends, credential validation, and observability. Developers add `@PaymentRequired`, configure LNbits or LND, and unpaid requests receive a 402 challenge instead of protected content.",
  whyItMatters:
    "As agents consume more APIs directly, payment and authorization need to become programmable, metered, and machine-readable. Paygate gives Java teams a concrete path to sell API access over Lightning without building the payment protocol layer from scratch.",
  targetUsers: [
    "Backend engineers",
    "Spring Boot teams",
    "API developers",
    "Agent platform builders",
    "AI infrastructure teams",
    "Lightning application builders",
  ],
  useCases: [
    "Protect premium API endpoints behind Lightning payments",
    "Add pay-per-use pricing with `@PaymentRequired` annotations",
    "Serve L402 and Payment challenges from the same endpoint",
    "Use dynamic pricing for expensive AI or data operations",
    "Integrate payment validation into Spring Security filter chains",
  ],
  techStack: [
    "Java 25",
    "Spring Boot",
    "Spring Security",
    "Lightning",
    "L402",
    "MPP",
    "LNbits",
    "LND",
  ],
  quickstart: {
    heading: "Add payment gating to a Spring Boot endpoint",
    installHeading: "Gradle first, Maven compatible",
    note:
      "Paygate is publicly available as a Spring Boot starter for payment-gated APIs. The examples below show the released developer experience.",
    installs: [
      {
        label: "Gradle",
        code: `dependencies {
    implementation("com.greenharborlabs:paygate-spring-boot-starter:0.1.4")
}`,
      },
      {
        label: "Maven",
        code: `<dependency>
  <groupId>com.greenharborlabs</groupId>
  <artifactId>paygate-spring-boot-starter</artifactId>
  <version>0.1.4</version>
</dependency>`,
      },
    ],
    examples: [
      {
        label: "Protect an endpoint",
        code: `@GetMapping("/trust/report")
@PaymentRequired(priceSats = 30)
TrustReport report(@RequestParam String domain) {
    return trustReports.generate(domain);
}`,
      },
      {
        label: "Unpaid request",
        code: `HTTP/1.1 402 Payment Required
WWW-Authenticate: L402 invoice="<bolt11>", macaroon="<token>"
WWW-Authenticate: Payment invoice="<bolt11>", amount="30sat"

{
  "error": "payment_required",
  "retry": "pay invoice and repeat the request"
}`,
      },
      {
        label: "Lightning backend",
        code: `paygate:
  backend: lnbits
  default-price-sats: 30
  lnbits:
    url: \${LNBITS_URL}
    api-key: \${LNBITS_API_KEY}
# backend: lnd is supported for node-direct deployments`,
      },
    ],
  },
  proofPoints: [
    {
      name: "Paygate Agent Trust",
      status: "Live",
      category: "Reference Service / Real LNbits Settlement",
      description:
        "A live reference service with real LNbits settlement shows the full unpaid request, Lightning invoice, paid retry, and signed JSON response loop.",
      details: [
        "Free catalog and quote endpoints before payment",
        "Payment-gated trust report generation through Paygate",
        "Real LNbits invoice settlement before retry",
        "Ed25519-signed JSON response after payment",
      ],
      links: {
        live: "https://paygate-agent-trust.fly.dev/",
        github: "https://github.com/greenharborlabs/paygate-agent-trust",
        docs: "https://github.com/greenharborlabs/paygate-agent-trust#readme",
      },
    },
  ],
  features: [
    "Single-dependency Spring Boot starter for Paygate auto-configuration",
    "Annotation-driven endpoint protection with `@PaymentRequired`",
    "Dual-protocol support for L402 and MPP with multiple `WWW-Authenticate` headers",
    "LNbits and LND Lightning backend modules",
    "Dynamic pricing through `PaygatePricingStrategy`",
    "Spring Security integration with authentication provider, filter, and token support",
    "Delegation caveats for path, method, and client IP restrictions",
    "Micrometer metrics, Actuator health integration, and `/actuator/paygate` runtime status",
    "Test mode for local development without a real Lightning node",
    "Fail-closed behavior when the Lightning backend is unavailable",
    "Macaroon V2 compatibility with Go macaroon tooling",
  ],
  examples: [
    {
      name: "Paygate Agent Trust",
      status: "Live",
      category: "Reference Service / Payment-Gated API",
      summary:
        "A Spring Boot reference service that sells signed agent trust reports behind Paygate payment challenges.",
      description:
        "Paygate Agent Trust exposes free catalog and quote APIs, then protects trust report generation with Paygate. Program clients can request a report, receive a Lightning payment challenge, pay the invoice, and retry for a signed JSON response.",
      techStack: ["Spring Boot", "Paygate", "Lightning", "LNbits", "Ed25519", "Agent APIs"],
      links: {
        github: "https://github.com/greenharborlabs/paygate-agent-trust",
        docs: "https://github.com/greenharborlabs/paygate-agent-trust#readme",
      },
    },
  ],
  links: {
    github: "https://github.com/greenharborlabs/spring-boot-starter-paygate",
    docs: "https://github.com/greenharborlabs/spring-boot-starter-paygate#readme",
  },
};

export const harborMindProduct: Product = {
  name: "Harbor Mind CLI",
  slug: "harbor-mind",
  subtitle: "Local-first knowledge infrastructure for Obsidian vaults",
  status: "Open Source",
  category: "AI Knowledge Tool / Developer Workflow",
  summary:
    "Harbor Mind turns an Obsidian vault into a searchable, evidence-grounded knowledge system for people and AI agents.",
  description:
    "Harbor Mind helps teams retrieve decisions and research from their own notes, capture new material with provenance, and maintain a more useful internal wiki without moving the vault out of their control.",
  problem:
    "Important context is often spread across project notes, meeting write-ups, research, and partially maintained wiki pages. Traditional search struggles with wording differences, while general-purpose AI tools cannot reliably show what they are grounding an answer in.",
  solution:
    "Harbor Mind combines hybrid semantic and keyword retrieval with wikilink graph expansion, then adds practical workflows for capture, compilation, linting, daily status, project briefs, and read-only MCP access.",
  whyItMatters:
    "A durable knowledge system should make existing work easier to find, inspect, and improve. Harbor Mind keeps the vault as the source of truth while making that context usable at the terminal and by compatible agents.",
  targetUsers: [
    "Developers who keep project knowledge in Obsidian",
    "Technical founders and small product teams",
    "Researchers managing a growing personal knowledge base",
    "Teams building grounded AI workflows around private notes",
  ],
  useCases: [
    "Recover a project’s decisions, next actions, and evidence before starting work",
    "Ask grounded questions and inspect the note paths behind the answer",
    "Capture meeting notes, files, and web research with provenance metadata",
    "Compile raw material into a structured wiki and find missing or stale concepts",
    "Give MCP-compatible agents read-only access to vault search and project briefs",
  ],
  techStack: ["Java 25", "Spring Boot", "Spring AI", "PGVector", "PostgreSQL", "LM Studio", "MCP", "Obsidian"],
  quickstart: {
    heading: "Turn an Obsidian vault into usable project context",
    installHeading: "Build and connect your local workspace",
    note:
      "Harbor Mind is designed to run beside your vault. It uses a local PGVector database and an OpenAI-compatible model endpoint by default, with optional cloud chat fallback.",
    installs: [
      {
        label: "Set the vault and start PGVector",
        code: `export HARBOR_MIND_VAULT_PATH=/absolute/path/to/your/obsidian-vault
docker compose up -d`,
      },
      {
        label: "Build Harbor Mind",
        code: `./gradlew build
alias hm='java -jar /absolute/path/to/harbor-mind-cli/build/libs/harbor-mind-cli.jar'`,
      },
    ],
    examples: [
      {
        label: "Check the local setup",
        code: `hm doctor
hm ingest`,
      },
      {
        label: "Start with a project brief",
        code: `hm brief --project harbor-mind
hm ask --show-sources "What did I decide about retrieval?"`,
      },
      {
        label: "Capture and curate new knowledge",
        code: `hm capture notes.md --project harbor-mind --topics "retrieval,rag"
hm lint --fix`,
      },
    ],
  },
  features: [
    "Hybrid vector and keyword retrieval with reciprocal-rank fusion",
    "Wikilink graph expansion to surface related vault context",
    "Grounded RAG answers with source-path visibility",
    "Deterministic project briefs with citations, diagnostics, and bounded output",
    "Capture workflow for files, stdin, and web sources with provenance metadata",
    "Raw-to-curated wiki compilation, linting, and missing-concept detection",
    "Read-only stdio MCP server for search, context, status, and project briefs",
    "Local-first defaults with optional OpenAI or Anthropic chat fallback",
  ],
  links: {
    github: "https://github.com/greenharborlabs/harbor-mind-cli",
    docs: "https://github.com/greenharborlabs/harbor-mind-cli#readme",
  },
};

export const products = [paygateProduct, harborMindProduct] as const satisfies readonly Product[];

export const featuredProduct = paygateProduct;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
