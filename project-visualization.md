# Products API Visualization

This document provides comprehensive visual representations of the Products API project using Mermaid diagrams, including both backend and frontend components.

## Complete Project Structure

```mermaid
graph TD
    A[mongoose] --> B[.env]
    A --> C[express.js]
    A --> D[package.json]
    A --> E[quotes.json]
    A --> F[controllers/]
    A --> G[middlewares/]
    A --> H[models/]
    A --> I[public/]
    A --> J[routes/]
    
    F --> F1[products.js]
    G --> G1[xss.js]
    H --> H1[products.js]
    J --> J1[routes.js]
    
    I --> I1[build/]
    I1 --> I2[static/]
    I1 --> I3[asset-manifest.json]
    I1 --> I4[index.html]
    I2 --> I5[js/]
    I5 --> I6[main.daa0ea01.js]
    I5 --> I7[main.daa0ea01.js.map]
    I5 --> I8[main.daa0ea01.js.LICENSE.txt]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style I1 fill:#bbf,stroke:#333,stroke-width:1px
    style F fill:#bfb,stroke:#333,stroke-width:1px
    style H fill:#bfb,stroke:#333,stroke-width:1px
    style J fill:#bfb,stroke:#333,stroke-width:1px
    style G fill:#bfb,stroke:#333,stroke-width:1px
```

## Detailed Application Architecture

```mermaid
flowchart TB
    subgraph Client ["Frontend (React)"]
        direction TB
        UI[UI Components]
        API[API Service]
        State[State Management]
        UI --> API
        API --> State
        State --> UI
    end
    
    subgraph Server ["Backend (Express)"]
        direction TB
        Express[Express Server]
        Routes[Routes]
        Controllers[Controllers]
        Models[Models]
        Middleware[Middleware]
        
        Express --> Routes
        Express --> Middleware
        Middleware --> Routes
        Routes --> Controllers
        Controllers --> Models
    end
    
    subgraph Database ["MongoDB"]
        Collections[Collections]
    end
    
    Client <-->|HTTP Requests/Responses| Server
    Models <-->|CRUD Operations| Database
    
    style Client fill:#bbf,stroke:#333,stroke-width:1px
    style Server fill:#bfb,stroke:#333,stroke-width:1px
    style Database fill:#fbb,stroke:#333,stroke-width:1px
```

## Controller Functions Flow

```mermaid
flowchart TD
    A[Products Controller] --> B[readAll]
    A --> C[read]
    A --> D[readbyId]
    A --> E[create]
    A --> F[deleteobj]
    
    B -->|product.find()| G[Returns all products]
    C -->|product.findOne()| H[Returns product by name]
    D -->|product.findById()| I[Returns product by ID]
    E -->|product.save()| J[Creates new product]
    F -->|product.deleteOne()| K[Deletes product by ID]
    
    style A fill:#f96,stroke:#333,stroke-width:2px
    style B fill:#9f6,stroke:#333,stroke-width:1px
    style C fill:#9f6,stroke:#333,stroke-width:1px
    style D fill:#9f6,stroke:#333,stroke-width:1px
    style E fill:#9f6,stroke:#333,stroke-width:1px
    style F fill:#9f6,stroke:#333,stroke-width:1px
```

## API Request-Response Flow

```mermaid
sequenceDiagram
    autonumber
    participant Client
    participant Express
    participant Router
    participant XSS
    participant Controller
    participant Model
    participant MongoDB
    
    Client->>Express: HTTP Request
    Express->>XSS: Apply XSS Protection
    XSS->>Router: Forward Clean Request
    Router->>Controller: Route to Handler Function
    
    alt GET /products
        Controller->>Model: product.find()
        Model->>MongoDB: Query All Products
        MongoDB-->>Model: Return Results
    else GET /products/name/:name
        Controller->>Model: product.findOne({name})
        Model->>MongoDB: Query by Name
        MongoDB-->>Model: Return Results
    else GET /products/id/:id
        Controller->>Model: product.findById(id)
        Model->>MongoDB: Query by ID
        MongoDB-->>Model: Return Results
    else POST /products
        Controller->>Model: new product(data).save()
        Model->>MongoDB: Insert Document
        MongoDB-->>Model: Return New Document
    else DELETE /products/:id
        Controller->>Model: product.deleteOne({_id})
        Model->>MongoDB: Delete Document
        MongoDB-->>Model: Confirm Deletion
        Controller->>Model: product.find()
        Model->>MongoDB: Query All Products
        MongoDB-->>Model: Return Updated Results
    end
    
    Model-->>Controller: Process Data
    Controller-->>Router: Return Response
    Router-->>Express: Format Response
    Express-->>Client: HTTP Response
```

## Error Handling Flow

```mermaid
flowchart TD
    A[Request] --> B{Try Block}
    B -->|Success| C[Process Data]
    B -->|Error| D[Catch Block]
    D --> E[Log Error]
    D --> F[Send Error Response]
    C --> G[Send Success Response]
    
    style A fill:#bbf,stroke:#333,stroke-width:1px
    style B fill:#fbb,stroke:#333,stroke-width:1px
    style D fill:#fbb,stroke:#333,stroke-width:1px
    style G fill:#bfb,stroke:#333,stroke-width:1px
    style F fill:#fbb,stroke:#333,stroke-width:1px
```

## Data Model Schema

```mermaid
classDiagram
    class Product {
        +String name
        +Number price
        +validate()
        +save()
        +find()
        +findOne()
        +findById()
        +deleteOne()
    }
    
    class Schema {
        +defineProperties()
        +validateSchema()
    }
    
    class Model {
        +create()
        +read()
        +update()
        +delete()
    }
    
    Schema <|-- Product
    Model <|-- Product
```

## Express Middleware Stack

```mermaid
flowchart LR
    Client([Client]) --> A[Request]
    A --> B[express.json()]
    B --> C[morgan]
    C --> D[cors]
    D --> E[XSS Protection]
    E --> F[Routes]
    F --> G[Response]
    G --> Client
    
    style A fill:#bbf,stroke:#333,stroke-width:1px
    style G fill:#bbf,stroke:#333,stroke-width:1px
    style F fill:#bfb,stroke:#333,stroke-width:1px
```

## Frontend-Backend Integration

```mermaid
sequenceDiagram
    participant React as React Frontend
    participant API as API Service
    participant Express as Express Server
    participant DB as MongoDB
    
    React->>API: User Action Triggers Request
    API->>Express: HTTP Request
    Express->>DB: Database Query
    DB-->>Express: Query Results
    Express-->>API: JSON Response
    API-->>React: Update State
    React->>React: Re-render UI Components
```

## Technology Stack Breakdown

```mermaid
pie title Technology Distribution
    "Express.js" : 25
    "MongoDB/Mongoose" : 25
    "Node.js" : 20
    "React.js" : 20
    "Middleware (Morgan, CORS)" : 10
```

## Development Workflow

```mermaid
graph LR
    A[Code Changes] --> B[npm run dev]
    B --> C[Express Server Running]
    C --> D[API Testing]
    D --> A
    
    E[Frontend Changes] --> F[React Build]
    F --> G[Static Files]
    G --> H[Express Serves Frontend]
    H --> E
    
    style A fill:#f9f,stroke:#333,stroke-width:1px
    style E fill:#bbf,stroke:#333,stroke-width:1px
```

## How to View These Diagrams

1. Install the "Markdown Preview Mermaid Support" extension for your IDE (VS Code or Cursor).
2. Open this markdown file.
3. Use the "Markdown: Open Preview" command to view the rendered diagrams.
   - In Cursor: Look for a preview button in the editor toolbar or use Ctrl+Shift+V (Windows) or Cmd+Shift+V (Mac)
   - Alternatively, right-click on the file and select "Open Preview"
4. You can also use the "Markdown Preview Enhanced" extension which supports Mermaid diagrams.

## Notes

- The diagrams above are generated using Mermaid syntax.
- You may need to refresh the preview if changes are made to the diagrams.
- For more complex diagrams, refer to the [Mermaid documentation](https://mermaid-js.github.io/mermaid/#/).
- Colors in diagrams represent different components:
  - 🟣 Purple: Main project components
  - 🟢 Green: Backend components
  - 🔵 Blue: Frontend components
  - 🟠 Orange: Function groups
  - 🔴 Red: Database or error handling 