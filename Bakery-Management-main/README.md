# 🍞 Bakery Management System

A complete bakery management solution built with a Node.js + Express backend and a React-based frontend. It includes user roles, product listings, cart functionality, and an order system powered by RabbitMQ and PostgreSQL.

## ✨ Highlights

### 🔧 Backend (Node.js + Express)
| Feature | Description |
|--------|-------------|
| **User Auth** | JWT-based login system • Admin/user role segregation |
| **Product Management** | Create, Read, Update, Delete functionality via Prisma ORM • PostgreSQL-powered |
| **Cart Module** | Interactive cart operations with validations |
| **Order Handling** | Message queue powered by RabbitMQ for efficient order processing |
| **Performance Optimizations** | Efficient DB access with Prisma • Docker-based microservice deployment |

### 🎨 Frontend (React)
- Login & sign-up support
- Product catalog with cart functionality
- JWT token session persistence
- Mobile-friendly and responsive interface
- API interaction via Axios
- Role-specific views (admin/user)

---

## ⚙️ Technology Stack

**Backend**  
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)

**Frontend**  
![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)

---

## 🚀 Getting Started

### Using Docker (Preferred)
```bash
# Build and launch all services
docker-compose up --build
```

**Access Points**
- API: http://localhost:3000  
- Frontend: http://localhost:3001  
- RabbitMQ UI: http://localhost:15672 (login: guest/guest)  
- PostgreSQL: localhost:5432  

---

## 🔍 Implementation Breakdown

**Prisma (ORM)**
- Declarative schema and migrations  
- Type-safe database interactions  

**RabbitMQ**
- Queue-based system for order handling  
- Enables scalable and asynchronous workflows  

**PostgreSQL**
- Relational database for persistent data  
- Managed through Prisma models  

**React App**
- Authentication using JWT  
- Real-time cart functionality  
- Product display and dashboard with access control  

---

## 💪 Local Development

**Backend**
```bash
cd backend
npm install
node src/index.js
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

---

## 📞 Environment Configuration

**Backend (`backend/.env`)**
```
DATABASE_URL=postgres://postgres:YOUR_PASSWORD@db:5432/bakery_db
JWT_SECRET=yourSuperSecretKey
RABBITMQ_URL=amqp://guest:guest@localhost:5672
ALLOW_ADMIN_CREATION=true
PORT=3000
```

**Frontend (`frontend/.env`)**
```
REACT_APP_API_URL=http://localhost:3000/api
```

