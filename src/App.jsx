import "./index.css";

function App() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">
          QUADRANTS
        </a>

        <div className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#reservation" className="nav-button">
          Reserve a table
        </a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">CONTEMPORARY DINING · NEW DELHI</p>

          <h1>
            A different
            <br />
            perspective
            <br />
            <span>on dining.</span>
          </h1>

          <p className="hero-description">
            Thoughtful ingredients, contemporary cuisine, and an atmosphere
            designed to make you stay a little longer.
          </p>

          <div className="hero-actions">
            <a href="#menu" className="primary-button">
              Explore menu
            </a>

            <a href="#reservation" className="secondary-button">
              Reserve a table
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85"
            alt="Beautifully plated restaurant dish"
          />

          <div className="image-caption">
            <span>01</span>
            <span>THE QUADRANTS EXPERIENCE</span>
          </div>
        </div>
      </section>

      <section className="about" id="about">
  <div className="about-heading">
  <p className="eyebrow">OUR PHILOSOPHY</p>

  <h2>
    Food with
    <br />
    <span>perspective.</span>
  </h2>

  <div className="about-image">
    <img
      src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=85"
      alt="Interior of a contemporary restaurant"
    />
  </div>
</div>

  <div className="about-content">
    <p className="about-lead">
      At Quadrants, we believe a great meal is more than what's on the
      plate.
    </p>

    <p>
      Our kitchen brings together familiar ingredients, contemporary
      techniques, and unexpected combinations to create food that feels
      both considered and effortless.
    </p>

    <div className="about-details">
      <div>
        <strong>01</strong>
        <span>Thoughtful ingredients</span>
      </div>

      <div>
        <strong>02</strong>
        <span>Contemporary technique</span>
      </div>

      <div>
        <strong>03</strong>
        <span>An atmosphere to remember</span>
      </div>
    </div>
  </div>
</section>

<section className="menu-section" id="menu">
  <div className="menu-header">
    <div>
      <p className="eyebrow">FROM THE KITCHEN</p>

      <h2>
        Signature
        <br />
        <span>dishes.</span>
      </h2>
    </div>

    <p className="menu-intro">
      A selection of dishes that represent the way we think about food:
      familiar at first glance, unexpected once you taste them.
    </p>
  </div>

  <div className="menu-grid">
    <article className="menu-card menu-card-large">
      <div className="menu-image">
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
          alt="Fresh vegetable dish"
        />
      </div>

      <div className="menu-info">
        <div>
          <h3>Charred Garden</h3>
          <p>
            Seasonal vegetables, smoked yogurt, herbs and toasted seeds.
          </p>
        </div>

        <span>₹495</span>
      </div>
    </article>

    <article className="menu-card">
      <div className="menu-image">
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
          alt="Contemporary plated dish"
        />
      </div>

      <div className="menu-info">
        <div>
          <h3>Ember Chicken</h3>
          <p>Charred chicken, roasted garlic and house spice glaze.</p>
        </div>

        <span>₹645</span>
      </div>
    </article>

    <article className="menu-card">
      <div className="menu-image">
        <img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85"
          alt="Fresh seasonal salad"
        />
      </div>

      <div className="menu-info">
        <div>
          <h3>Green Theory</h3>
          <p>Garden greens, citrus dressing and toasted grains.</p>
        </div>

        <span>₹425</span>
      </div>
    </article>

    <article className="menu-card">
      <div className="menu-image">
        <img
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85"
          alt="Fresh pasta dish"
        />
      </div>

      <div className="menu-info">
        <div>
          <h3>Silk &amp; Smoke</h3>
          <p>Handmade pasta, wild mushrooms and aged parmesan.</p>
        </div>

        <span>₹575</span>
      </div>
    </article>

    <article className="menu-card">
      <div className="menu-image">
        <img
          src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=85"
          alt="Gourmet burger"
        />
      </div>

      <div className="menu-info">
        <div>
          <h3>Quadrant Burger</h3>
          <p>House-ground beef, aged cheddar and smoked onion.</p>
        </div>

        <span>₹595</span>
      </div>
    </article>

    <article className="menu-card">
      <div className="menu-image">
        <img
          src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85"
          alt="Dessert"
        />
      </div>

      <div className="menu-info">
        <div>
          <h3>Dark Matter</h3>
          <p>Dark chocolate, sea salt and vanilla cream.</p>
        </div>

        <span>₹395</span>
      </div>
    </article>
  </div>

  <div className="menu-bottom">
    <span>MENU CHANGES WITH THE SEASON</span>

    <a href="#reservation">
      View full menu →
    </a>
  </div>
</section>

<section className="experience" id="experience">
  <div className="experience-image">
    <img
      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85"
      alt="Quadrants restaurant interior"
    />
  </div>

  <div className="experience-content">
    <p className="eyebrow">THE EXPERIENCE</p>

    <h2>
      Stay for the
      <br />
      <span>experience.</span>
    </h2>

    <p className="experience-text">
      From the first plate to the last conversation, every detail at
      Quadrants is designed to feel considered without feeling formal.
    </p>

    <div className="experience-points">
      <div>
        <span>01</span>
        <p>Intimate dining spaces</p>
      </div>

      <div>
        <span>02</span>
        <p>Seasonal menus</p>
      </div>

      <div>
        <span>03</span>
        <p>Thoughtful hospitality</p>
      </div>
    </div>
  </div>
</section>

<section className="reservation" id="reservation">
  <div className="reservation-content">
    <p className="eyebrow">YOUR TABLE AWAITS</p>

    <h2>
      Make an evening
      <br />
      <span>of it.</span>
    </h2>

    <p>
      Join us for dinner, drinks, and everything in between.
    </p>

    <a href="tel:+911234567890" className="primary-button">
      Reserve a table
    </a>
  </div>
</section>

<footer className="site-footer">
  <div className="footer-top">
    <div>
      <a href="#" className="footer-logo">QUADRANTS</a>
      <p>Contemporary dining, thoughtfully considered.</p>
    </div>

    <div className="footer-links">
      <a href="#menu">Menu</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#reservation">Reservations</a>
    </div>

    <div className="footer-contact">
      <span>NEW DELHI, INDIA</span>
      <span>+91 12345 67890</span>
      <span>OPEN TUE — SUN</span>
    </div>
  </div>

  <div className="footer-bottom">
    <span>© 2026 Quadrants</span>

    <span>
      Designed &amp; developed by{" "}
      <strong>Sanskar Bhardwaj</strong>
    </span>
  </div>
</footer>

      <div className="hero-footer">
        <span>EST. 2026</span>
        <span>NEW DELHI · INDIA</span>
        <span>OPEN TUE — SUN</span>
      </div>
    </main>
  );
}

export default App;