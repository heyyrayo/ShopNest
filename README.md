# ShopNest 🛒

A production-ready **MERN Stack E-Commerce Platform** built for small and medium businesses. ShopNest features a full shopping experience with product browsing, cart management, checkout, order tracking, and a dedicated admin dashboard.

---

## 🚀 Live Demo

| Layer    | URL |
|----------|-----|
| Frontend | _Coming soon (Vercel)_ |
| Backend  | _Coming soon (Render)_ |

---

## ✨ Features

### Customer
- Browse products with search, filter, and sort
- Product detail pages with related products
- Shopping cart (add, update, remove items)
- Checkout with full shipping address form
- Order placement & order history
- User authentication (register / login)
- Protected profile page

### Admin
- Admin dashboard with stats overview
- Full product management (Create / Read / Update / Delete)
- Image upload via Cloudinary
- Order management with status updates
- Role-based access control

---

## 🗂️ Project Structure

```
ShopNest/
├── client/                  # React frontend (Vite)
│   └── src/
│       ├── api/             # Axios instance
│       ├── components/      # Reusable UI & feature components
│       │   ├── admin/
│       │   ├── auth/
│       │   ├── cart/
│       │   ├── checkout/
│       │   ├── layout/      # Navbar, Footer
│       │   ├── products/
│       │   ├── product-details/
│       │   ├── sections/    # Hero, Features, CTA …
│       │   └── ui/          # Button, Card, Badge …
│       ├── context/         # AuthContext, CartContext, CheckoutContext
│       ├── hooks/           # useAuth, useCart, useProduct …
│       ├── pages/           # Home, Products, Cart, Checkout, Admin …
│       ├── routes/          # AppRoutes (protected + public)
│       └── services/        # API service functions
│
└── server/                  # Express backend
    └── src/
        ├── config/          # DB connection, Cloudinary config
        ├── controllers/     # Request handlers
        ├── middleware/      # Auth, admin, upload middleware
        ├── models/          # Mongoose schemas (User, Product, Order)
        ├── routes/          # Express route definitions
        └── utils/           # JWT token generator
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI library |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling |
| React Router DOM | 7 | Client-side routing |
| Axios | 1.x | HTTP client |
| Framer Motion | 12 | Animations |
| React Icons | 5 | Icon library |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js | 18+ | Runtime |
| Express | 5 | Web framework |
| MongoDB | Atlas | Database |
| Mongoose | 8 | ODM |
| JSON Web Token | 9 | Authentication |
| bcryptjs | 3 | Password hashing |
| Multer | 2 | File uploads |
| Cloudinary | 1.x | Image storage |
| dotenv | 17 | Environment config |
| CORS | 2 | Cross-origin policy |
| cookie-parser | 1.4 | Cookie handling |

---

## 📡 API Reference

Base URL: `http://localhost:5000`

### Auth — `/api/auth`
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/register` | Register a new user | Public |
| POST | `/login` | Login & receive JWT cookie | Public |

### Users — `/api/users`
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/profile` | Get current user profile | 🔒 User |

### Products — `/api/products`
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/` | Get all products (search/filter/sort) | Public |
| GET | `/:id` | Get single product | Public |
| POST | `/` | Create product | 🔒 Admin |
| PUT | `/:id` | Update product | 🔒 Admin |
| DELETE | `/:id` | Delete product | 🔒 Admin |

### Orders — `/api/orders`
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/` | Place a new order | 🔒 User |
| GET | `/my` | Get current user's orders | 🔒 User |
| GET | `/` | Get all orders | 🔒 Admin |
| GET | `/:id` | Get order by ID | 🔒 Admin |
| PUT | `/:id/status` | Update order status | 🔒 Admin |

### Admin — `/api/admin`
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/dashboard` | Dashboard stats | 🔒 Admin |

### Upload — `/api/upload`
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/` | Upload image to Cloudinary | 🔒 Admin |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account

### 1. Clone the repository

```bash
git clone https://github.com/heyyrayo/ShopNest.git
cd ShopNest
```

### 2. Backend setup

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the dev server:

```bash
npm run dev
```

### 3. Frontend setup

```bash
cd client
npm install
```

Create a `.env` file inside `client/`:

```env
VITE_API_URL=http://localhost:5000
```

Start the dev server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`.

---

## 🗃️ Data Models

### User
| Field | Type | Notes |
|---|---|---|
| name | String | 2–50 chars, required |
| email | String | Unique, lowercase |
| password | String | Hashed with bcrypt |
| role | String | `user` \| `admin` |

### Product
| Field | Type | Notes |
|---|---|---|
| name | String | max 100 chars |
| description | String | — |
| price | Number | min 0 |
| category | String | — |
| brand | String | — |
| stock | Number | min 0 |
| images | String[] | Cloudinary URLs |
| rating | Number | 0–5 |
| numReviews | Number | — |
| featured | Boolean | Homepage highlight |

### Order
| Field | Type | Notes |
|---|---|---|
| user | ObjectId | Ref → User |
| orderItems | Array | product, name, price, quantity |
| shippingAddress | Object | fullName, email, phone, address, city, state, zipCode, country |
| paymentMethod | String | Default: Cash on Delivery |
| itemsPrice | Number | — |
| shippingPrice | Number | — |
| taxPrice | Number | — |
| totalPrice | Number | — |
| orderStatus | String | Pending → Processing → Shipped → Delivered \| Cancelled |
| isPaid / isDelivered | Boolean | — |

---

## 🔐 Authentication Flow

1. User registers or logs in → server returns a signed **JWT** stored in an HTTP-only cookie.
2. Every protected request passes the cookie automatically → `authMiddleware` validates the token.
3. Admin routes additionally pass through `adminMiddleware` which checks `user.role === "admin"`.

---

## 📦 Deployment

| Layer | Platform | Notes |
|---|---|---|
| Frontend | Vercel | `npm run build` → `dist/` |
| Backend | Render | `npm start` (production) |
| Database | MongoDB Atlas | Cloud-hosted |
| Images | Cloudinary | Auto-managed |

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)
