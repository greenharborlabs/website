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
    status: ProductStatus | "Coming soon";
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
    "Lightning",
    "L402",
    "MPP",
    "LNbits",
    "LND",
  ],
  quickstart: {
    note:
      "Package coordinates are coming with the first public release. The API shape below shows the intended Spring Boot developer experience.",
    installs: [
      {
        label: "Gradle",
        code: `dependencies {
    implementation("com.greenharborlabs:paygate-spring-boot-starter:<version>")
}`,
      },
      {
        label: "Maven",
        code: `<dependency>
  <groupId>com.greenharborlabs</groupId>
  <artifactId>paygate-spring-boot-starter</artifactId>
  <version><!-- release version --></version>
</dependency>`,
      },
    ],
    examples: [
      {
        label: "Protect an endpoint",
        code: `@GetMapping("/trust/report")
@PaymentRequired(price = "30sat")
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
  price: 30sat
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
      status: "Coming soon",
      category: "Reference Service / Real LNbits Settlement",
      description:
        "A reference service with real LNbits settlement is being prepared to show the full unpaid request, Lightning invoice, paid retry, and signed JSON response loop.",
      details: [
        "Free catalog and quote endpoints before payment",
        "Payment-gated trust report generation through Paygate",
        "Real LNbits invoice settlement before retry",
        "Ed25519-signed JSON response after payment",
      ],
      links: {
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
