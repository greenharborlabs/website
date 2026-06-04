import { expect, test } from "@playwright/test";

test("renders the first viewport with brand, thesis, and CTAs", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: /Green Harbor Labs home/i })).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Building software at the edge of AI and engineering craft.",
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Start a technical prototype" })).toBeVisible();
  await expect(page.getByRole("link", { name: "View Project" })).toBeVisible();
  await expect(page.getByText("402 Payment Required")).toBeVisible();
  await expect(page.getByText("200 Signed trust report")).toBeVisible();
});

test("desktop navigation anchors reach the planned sections", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop navigation is hidden on mobile");

  await page.goto("/");

  const sections = [
    { linkName: "Approach", hash: "approach", heading: "AI as an Engineering Multiplier" },
    { linkName: "Capabilities", hash: "capabilities", heading: "Engineering Capabilities" },
    { linkName: "About", hash: "about", heading: "About Green Harbor Labs" },
    { linkName: "Contact", hash: "contact", heading: "Let's Build" },
  ];

  for (const section of sections) {
    await page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", { name: section.linkName }).click();
    await expect(page).toHaveURL(new RegExp(`#${section.hash}$`));
    await expect(page.getByRole("heading", { name: section.heading })).toBeVisible();
  }
});

test("mobile menu opens, closes with Escape, and exposes all links", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only behavior");

  await page.goto("/");
  const menuButton = page.getByRole("button", { name: "Toggle navigation menu" });

  await expect(menuButton).toBeVisible();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Paygate" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Contact" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
});

test("Paygate renders as the concrete proof point without dead optional project links", async ({ page }) => {
  await page.goto("/");
  const paygateSection = page.getByRole("region", { name: "Paygate" });

  await expect(paygateSection.getByRole("heading", { name: "Paygate", exact: true })).toBeVisible();
  await expect(paygateSection.getByText("In Development")).toBeVisible();
  await expect(paygateSection.getByText("Spring Boot", { exact: true })).toBeVisible();
  await expect(paygateSection.getByText("First service using Paygate")).toBeVisible();
  await expect(paygateSection.getByRole("heading", { name: "Paygate Agent Trust" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Open live project" })).toHaveCount(0);
});

test("Paygate product page shows Agent Trust as a built-with proof point", async ({ page }) => {
  await page.goto("/products/paygate");
  const examplesSection = page.getByLabel("Real services using the starter");

  await expect(page.getByRole("link", { name: "Start a technical prototype" })).toBeVisible();
  await expect(examplesSection.getByRole("heading", { name: "Real services using the starter" })).toBeVisible();
  await expect(examplesSection.getByRole("heading", { name: "Paygate Agent Trust" })).toBeVisible();
  await expect(examplesSection.getByText("Reference Service / Payment-Gated API")).toBeVisible();
  await expect(examplesSection.getByText("Program clients can request a report")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open live project" })).toHaveCount(0);
});

test("Paygate product page includes a practical developer quickstart", async ({ page }) => {
  await page.goto("/products/paygate");

  await expect(page.getByRole("heading", { name: "Add payment gating to a Spring Boot endpoint" })).toBeVisible();
  await expect(page.getByText("Gradle first, Maven compatible")).toBeVisible();
  await expect(page.getByText("implementation(\"com.greenharborlabs:paygate-spring-boot-starter:<version>\")")).toBeVisible();
  await expect(page.getByText("<artifactId>paygate-spring-boot-starter</artifactId>")).toBeVisible();
  await expect(page.getByText("@PaymentRequired(price = \"30sat\")")).toBeVisible();
  await expect(page.getByText("HTTP/1.1 402 Payment Required")).toBeVisible();
  await expect(page.getByText("backend: lnbits")).toBeVisible();
  await expect(page.getByText("backend: lnd is supported")).toBeVisible();
});

test("Paygate product page shows upcoming live LNbits proof without a live link", async ({ page }) => {
  await page.goto("/products/paygate");

  await expect(page.getByRole("heading", { name: "Live settlement proof is next" })).toBeVisible();
  await expect(page.getByText("reference service with real LNbits settlement")).toBeVisible();
  await expect(page.getByText("Coming soon")).toBeVisible();
  await expect(page.getByText("Real LNbits invoice settlement before retry")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open live service" })).toHaveCount(0);
});

test("not found page offers recovery links", async ({ page }) => {
  await page.goto("/missing-page");

  const recovery = page.getByLabel("This page is out of harbor.");

  await expect(page.getByRole("heading", { name: "This page is out of harbor." })).toBeVisible();
  await expect(recovery.getByRole("link", { name: "Back home" })).toHaveAttribute("href", "/");
  await expect(recovery.getByRole("link", { name: "View Paygate" })).toHaveAttribute(
    "href",
    "/products/paygate",
  );
  await expect(recovery.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/#contact");
});

test("contact section renders launch-ready contact links without placeholders", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Start a technical prototype" }).click();

  await expect(page.getByRole("heading", { name: "Let's Build" })).toBeVisible();
  await expect(page.getByText("focused technical prototype")).toBeVisible();
  await expect(page.getByRole("link", { name: "Email: contact@greenharbor.com" })).toHaveAttribute(
    "href",
    "mailto:contact@greenharbor.com",
  );
  await expect(page.getByRole("link", { name: "X: @greenharborlabs" })).toHaveAttribute(
    "href",
    "https://x.com/greenharborlabs",
  );
  await expect(page.getByText("Contact links coming soon.")).toHaveCount(0);
  await expect(page.locator('a[href=""], a[href="#"], a[href*="example.com"]')).toHaveCount(0);
});

test("layout has no horizontal overflow on key viewports", async ({ page }) => {
  for (const size of [
    { width: 390, height: 844 },
    { width: 768, height: 900 },
    { width: 1024, height: 900 },
    { width: 1440, height: 1200 },
  ]) {
    await page.setViewportSize(size);
    await page.goto("/");
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
  }
});

test("reduced motion keeps primary content visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "What Green Harbor Labs Builds" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AI as an Engineering Multiplier" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Let's Build" })).toBeVisible();
});
