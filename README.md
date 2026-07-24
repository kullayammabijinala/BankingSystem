# Banking System Microservices Architecture

A microservices backend built with **Spring Boot 3**, **Spring Cloud Gateway**, and **Netflix Eureka**, designed to serve a JavaScript/HTML frontend via REST APIs.

## Service Registry & Ports

| Service | Port | Endpoint Prefix |
| :--- | :--- | :--- |
| **API Gateway** | `8080` | `http://localhost:8080/api/*` |
| **Discovery Server** | `8761` | `http://localhost:8761` |
| **Config Server** | `8888` | `http://localhost:8888` |
| **Auth Service** | `8081` | `/api/auth` |
| **Customer Service** | `8082` | `/api/customers` |
| **Account Service** | `8083` | `/api/accounts` |
| **Transaction Service** | `8084` | `/api/transactions` |
| **Loan Service** | `8085` | `/api/loans` |
| **Card Service** | `8086` | `/api/cards` |
| **Notification Service**| `8087` | `/api/notifications` |

## Frontend Integration (`api.js`)

All frontend requests MUST route through the **API Gateway** (`http://localhost:8080`):

```javascript
// Example fetch call from login.js
async function loginUser(username, password) {
  const response = await fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return await response.json();
}