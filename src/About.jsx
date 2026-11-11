
import { useContext } from "react";
import "./App.css";
import SiteContext from "./Sitecontext";
export default function About() {
  const { siteName } = useContext(SiteContext);

  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>{siteName} 🛍️</h1>
        <p>Your One-Stop Destination for Smart Shopping</p>
        <p>
          Discover quality products, explore new collections,
          and enjoy a simple and convenient shopping experience.
        </p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
            alt="Shopping store"
          />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>

          <p>
            Welcome to {siteName}! We believe shopping should be
            simple, enjoyable, and accessible to everyone.
          </p>

          <p>
            Our platform brings together a variety of products
            across different categories, helping customers find
            what they need in one place.
          </p>

          <p>
            Our goal is to provide a smooth shopping experience
            with quality products and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <h2>Why Choose {siteName}?</h2>

        <div className="features-container">

          <div className="feature-card">
            <h3>🛍️ Wide Collection</h3>
            <p>
              Explore products from different categories
              in one convenient place.
            </p>
          </div>

          <div className="feature-card">
            <h3>⭐ Quality Products</h3>
            <p>
              Find products selected to make your shopping
              experience better.
            </p>
          </div>

          <div className="feature-card">
            <h3>🚀 Easy Shopping</h3>
            <p>
              Browse products and enjoy a simple,
              user-friendly shopping experience.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <h3>{siteName} 🛍️</h3>
        <p>Making Shopping Simple and Enjoyable.</p>
        <p>© 2026 {siteName}. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

