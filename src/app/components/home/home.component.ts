import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="home">
      <!-- Header with background image -->
      <div class="hero">
        <div class="hero-content">
          <h1>🍕 Restaurant App</h1>
          <p class="tagline">Delicious food made just for you</p>
        </div>
      </div>

      <!-- Main content -->
      <main class="content">
        <div class="welcome-section">
          <h2>Welcome to Our Restaurant</h2>
          <p>We serve fresh, delicious meals made from high-quality ingredients. From appetizers to desserts, we have something for everyone!</p>
        </div>

        <!-- Quick navigation -->
        <div class="quick-links">
          <div class="link-card">
            <div class="link-icon">📋</div>
            <h3>Browse Menu</h3>
            <p>Check out our delicious offerings</p>
            <a routerLink="/menu" class="link-btn">View Menu</a>
          </div>
          
          <div class="link-card">
            <div class="link-icon">🛒</div>
            <h3>Your Cart</h3>
            <p>Review your selected items</p>
            <a routerLink="/cart" class="link-btn">View Cart</a>
          </div>
          
          <div class="link-card">
            <div class="link-icon">⭐</div>
            <h3>Specials</h3>
            <p>Today's special offers</p>
            <a routerLink="/menu" class="link-btn">See Offers</a>
          </div>
        </div>

        <!-- Simple call to action -->
        <div class="cta-section">
          <h3>Ready to order?</h3>
          <p>Get your favorite meals delivered to your door or pick them up in-store.</p>
          <div class="cta-buttons">
            <a routerLink="/menu" class="btn primary-btn">Order Now</a>
            <a routerLink="/cart" class="btn secondary-btn">Check Cart</a>
          </div>
        </div>
      </main>

      <!-- Simple footer -->
      <footer class="footer">
        <p>📍 123 Food Street, City</p>
        <p>📞 (123) 456-7890</p>
        <p>⏰ Open Daily: 11AM - 10PM</p>
      </footer>
    </div>
  `,
  styles: [`
    .home {
      font-family: 'Arial', sans-serif;
      min-height: 100vh;
      background: #f8f9fa;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                  url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 60px 20px;
      text-align: center;
    }

    .hero h1 {
      font-size: 2.5rem;
      margin: 0;
      color: white;
    }

    .tagline {
      font-size: 1.2rem;
      opacity: 0.9;
      margin-top: 10px;
    }

    /* Main Content */
    .content {
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    .welcome-section {
      text-align: center;
      margin-bottom: 50px;
    }

    .welcome-section h2 {
      color: #333;
      font-size: 2rem;
      margin-bottom: 20px;
    }

    .welcome-section p {
      color: #666;
      font-size: 1.1rem;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto;
    }

    /* Quick Links */
    .quick-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-bottom: 50px;
    }

    .link-card {
      background: white;
      border-radius: 12px;
      padding: 30px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .link-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }

    .link-icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    .link-card h3 {
      color: #333;
      margin: 10px 0;
      font-size: 1.3rem;
    }

    .link-card p {
      color: #666;
      margin-bottom: 20px;
      font-size: 0.95rem;
    }

    .link-btn {
      display: inline-block;
      background: #ff6b6b;
      color: white;
      padding: 10px 25px;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 500;
      transition: background 0.3s ease;
    }

    .link-btn:hover {
      background: #ff5252;
    }

    /* CTA Section */
    .cta-section {
      background: white;
      border-radius: 12px;
      padding: 40px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .cta-section h3 {
      color: #333;
      font-size: 1.8rem;
      margin-bottom: 15px;
    }

    .cta-section p {
      color: #666;
      margin-bottom: 25px;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      padding: 12px 35px;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }

    .primary-btn {
      background: #4caf50;
      color: white;
    }

    .primary-btn:hover {
      background: #45a049;
      transform: translateY(-2px);
    }

    .secondary-btn {
      background: transparent;
      color: #4caf50;
      border: 2px solid #4caf50;
    }

    .secondary-btn:hover {
      background: #4caf50;
      color: white;
      transform: translateY(-2px);
    }

    /* Footer */
    .footer {
      background: #333;
      color: white;
      text-align: center;
      padding: 30px 20px;
      margin-top: 60px;
    }

    .footer p {
      margin: 8px 0;
      opacity: 0.8;
      font-size: 0.9rem;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero {
        padding: 40px 20px;
      }

      .hero h1 {
        font-size: 2rem;
      }

      .quick-links {
        grid-template-columns: 1fr;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 200px;
        text-align: center;
      }
    }
  `]
})
export class HomeComponent {}