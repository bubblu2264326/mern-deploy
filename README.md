# Products API

A RESTful API for managing products built with Express.js and MongoDB.

## Project Structure

```
mongoose/
├── .env                  # Environment variables
├── express.js           # Main application entry point
├── package.json         # Project dependencies and scripts
├── quotes.json          # Sample data
├── controllers/
│   └── products.js      # Product controller functions
├── middlewares/
│   └── xss.js           # XSS protection middleware
├── models/
│   └── products.js      # Product schema and model
├── public/              # Static files for front-end
└── routes/
    └── routes.js        # API endpoint definitions
```

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Morgan** - HTTP request logger middleware
- **CORS** - Cross-Origin Resource Sharing middleware

## API Endpoints

| Method | Endpoint         | Description                          |
|--------|------------------|--------------------------------------|
| GET    | /products        | Fetch all products                   |
| GET    | /products/name/:name | Fetch product by name            |
| GET    | /products/id/:id | Fetch product by ID                  |
| POST   | /products        | Create a new product                 |
| DELETE | /products/:id    | Delete product by ID                 |

## Data Model

### Product Schema

```javascript
{
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    min: [0, "Price cannot be negative"],
    max: [10000, "Price exceeds maximum allowed"],
    required: true
  }
}
```

## Setup and Usage

1. Install dependencies:
   ```
   npm install
   ```

2. Configure environment variables in `.env` file:
   ```
   public_path=./public
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Access the API at ``

## Database Connection

The application connects to a local MongoDB instance at:
```
mongodb://127.0.0.1:27017/ecommerece
``` 