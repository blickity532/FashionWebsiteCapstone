
---

# Fashion Website Capstone – Dusti’s Closet

## Software Requirement Specification (SRS)

---

### 1. Introduction

#### 1.1 Purpose
The Fashion Website (Dusti’s Closet) for Women's Clothing aims to provide a seamless online shopping experience with an elegant UI, secure transactions, and efficient order management.

#### 1.2 Scope
- **Platform**: Web-based (ASP.NET Core MVC)
- **User Roles**: Customers, Admins
- **Core Features**: Product Catalog, Shopping Cart, Payments, Order Tracking, User Authentication
- **Database**: SQL Server with Entity Framework Core, Node.js, and XAMPP Apache MySQL
- **Payment Integration**: Stripe/PayPal API

#### 1.3 Technologies Used
- ASP.NET Core MVC
- Entity Framework Core
- Node.js
- XAMPP Apache MySQL
- Razor Pages
- HTML, CSS, JavaScript, Typescript
- Stripe/PayPal API

---

### 2. Functional Requirements

#### 2.1 User Management
- User Registration & Login (via Identity Framework)
- Profile Management (update info, address, orders)
- Role-Based Access (Customer/Admin)

#### 2.2 Product Catalog
- Display products with images, prices, description
- Filter & sort products (category, price range, size)
- Wishlist feature

#### 2.3 Shopping Cart & Checkout
- Add/remove items to the cart
- Apply promo codes
- Secure checkout with payment gateway integration (Stripe/PayPal)

#### 2.4 Order Processing & Tracking
- Admin panel for order management (approve/cancel)
- Customers can track order status (Processing, Shipped, Delivered)
- Invoice generation

#### 2.5 APIs for Mobile & Web Integration
- RESTful APIs for external apps
- API endpoints for product retrieval, user authentication, orders

---

### 3. Non-Functional Requirements

#### 3.1 Performance
- Fast loading times & optimized queries
- Caching is enabled via Redis for efficiency

#### 3.2 Security
- ASP.Net EntityFramework.Identity Core
- Secure transactions using HTTPS & SSL encryption
- Prevent SQL Injection & Cross-Site Scripting (XSS)

#### 3.3 Usability
- Mobile-friendly, Responsive UI
- Simple, intuitive design for a seamless shopping experience

#### 3.4 Scalability
- Capable of handling high traffic
- Cloud-ready deployment for automatic scaling

---

### 4. Database Design

- **Users Table:** (ID, Name, Email, Role)
- **Products Table:** (ID, Name, Price, Category)
- **Orders Table:** (OrderID, UserID, Status, TotalAmount)
- **Payments Table:** (PaymentID, OrderID, Status)
- **Cart Table:** (CartID, UserID, Items)

---

### 5. System Architecture

#### 5.1 MVC Architecture
- **Model:** EF Core handling data models
- **View:** Razor Pages rendering UI
- **Controller:** Handles user requests, connects UI with the database

#### 5.2 API Layer
- RESTful APIs for external integrations
- Authentication via JSON Web Tokens (JWT)

---

**Last updated: Week Seven**

---


                                     


                         

