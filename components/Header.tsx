"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products } from "@/data/products";
import { navItems, siteMetadata } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setProductsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!productsMenuRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-shell header-inner">
        <Link className="brand-mark" href="/" aria-label={`${siteMetadata.name} home`}>
          <Image
            className="brand-icon"
            src="/brand/icon-192.png"
            alt=""
            width={34}
            height={34}
            priority
            aria-hidden="true"
          />
          {siteMetadata.name}
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-menu" ref={productsMenuRef}>
            <button
              className="nav-menu-trigger"
              type="button"
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() => setProductsOpen((value) => !value)}
            >
              Products
              <span aria-hidden="true">⌄</span>
            </button>
            <div className={`nav-menu-panel ${productsOpen ? "is-open" : ""}`}>
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  onClick={() => setProductsOpen(false)}
                >
                  <span>{product.name}</span>
                  <small>{product.category}</small>
                </Link>
              ))}
            </div>
          </div>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-nav"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-group">
          <span>Products</span>
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              onClick={() => setOpen(false)}
            >
              {product.name}
            </Link>
          ))}
        </div>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
