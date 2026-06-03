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
  status: "In Development",
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
    "L402",
    "MPP",
    "LNbits",
    "LND",
    "Macaroons",
    "Gradle",
    "Maven Central",
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
      status: "In Development",
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

export const products = [paygateProduct] as const satisfies readonly Product[];

export const featuredProduct = paygateProduct;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
