# 1. Backend Language: JavaScript (Express.js)
Why Express.js?

Express.js is a minimalist and fast Node.js framework ideal for building REST APIs.
It integrates well with modern tools like Prisma (ORM) and PostgreSQL.
Its flexibility and middleware support enable clean, maintainable API design.

# 2. Database: PostgreSQL
Why PostgreSQL?

PostgreSQL is a powerful open-source relational database ideal for structured data like products and orders.
Works seamlessly with Prisma for robust querying and schema migrations.
Easily containerized with Docker and supports volume-based persistence.

# 3. Frontend Framework: Node.js (with a frontend library/framework like React)
Why Node.js for Frontend?

Node.js allows you to run modern frontend tools and frameworks efficiently (e.g., React via Vite).
Supports building dynamic, SPA-style user interfaces that consume backend APIs.
Ideal for creating responsive UIs that fetch and display product/order data.

# 4. Message Queue: RabbitMQ
Why RabbitMQ?

RabbitMQ enables asynchronous communication between backend and worker services.
Helps decouple order processing logic from the main API for faster responses.
Ensures reliability with durable queues and message acknowledgments.

# 5. ORM: Prisma
Why Prisma?

Prisma is a type-safe ORM for Node.js that simplifies database access.
Provides clean data modeling, migrations, and querying for PostgreSQL.
Improves developer productivity with autocompletion and validation.

# 7. Containerization: Docker & Docker Compose
Why Containerize?

Containers ensure consistent development and deployment environments.
Docker Compose makes orchestration of backend, database, RabbitMQ, and worker easy.
Services can be independently scaled, monitored, and restarted.

# 8. Health Checks
Why Health Checks?

Health checks monitor container uptime and responsiveness.
Docker Compose can auto-restart services when unhealthy.
Boosts reliability and simplifies debugging.

# 9. Environment Variables (.env)
Why Use .env?

Keeps secrets and configuration out of source code.
Enables different setups (dev/staging/prod) without hardcoding.
Used for DB credentials, RabbitMQ URLs, and Prisma settings.

# 10. Volumes for Persistence
Why Volumes?

Volumes ensure PostgreSQL and RabbitMQ retain data across restarts.
Prevents data loss for critical entities like orders and products.
Supports long-term data integrity in containerized setups.

🌟 Conclusion
The bakery system architecture follows modern best practices:

✅ Decoupled services (API, Queue, Worker)
✅ Type-safe, efficient DB access (Prisma + PostgreSQL)
✅ Reliable communication (RabbitMQ)
✅ Scalable and maintainable (Docker + Health Checks + Volumes)

Each component was chosen for performance, flexibility, and long-term sustainability.

