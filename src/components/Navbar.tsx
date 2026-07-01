import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#services", label: "SERVICES" },
  { href: "#timeline", label: "JOURNEY" },
  { href: "#projects", label: "WORK" },
  { href: "#stack", label: "STACK" },
  { href: "#contact", label: "CONTACT" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        let elem = e.currentTarget as HTMLAnchorElement;
        let sectionId = elem.getAttribute("data-href");
        if (sectionId) {
          const target = document.querySelector(sectionId);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
        setMobileOpen(false);
      });
    });
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className={`header ${scrolled ? "header-scrolled" : ""}`}
      >
        <a href="/#" className="navbar-title" data-cursor="disable">
          AS
        </a>
        {/* Mobile hamburger */}
        <button
          className={`navbar-hamburger ${mobileOpen ? "hamburger-active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          data-cursor="disable"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={mobileOpen ? "nav-mobile-open" : ""}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a data-href={link.href} href={link.href}>
                <HoverLinks text={link.label} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
