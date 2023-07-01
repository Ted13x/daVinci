# Technolologies & architecture:

    Technologien und Werkzeuge:
        Frontend: Next.js
        Backend: Node.js mit Express.js
        Datenbank: MongoDB
        Serverless Plattform: AWS Lambda
        Nachrichtenbroker: RabbitMQ
        CI/CD: GitLab CI/CD
        Authentifizierung: JWT. httpOnlyCookie 

    Microservices Architektur:
        Authentifizierung und Autorisierung
        Benutzer-Management
        Produkt-Management
        Preis-Management
        Bestellungs-Management
        Warenkorb-Management
        Bewertungs- und Feedback-Management
        Statistiken und Analysen

    API-Endpunkt-Struktur:
        Authentifizierung und Autorisierung: /api/auth
        Benutzer-Management: /api/users
        Produkt-Management: /api/products
        Preis-Management: /api/prices
        Bestellungs-Management: /api/orders
        Warenkorb-Management: /api/cart
        Bewertungs- und Feedback-Management: /api/reviews
        Statistiken und Analysen: /api/stats


# KONTEXT appStructure

0.  AURA_NEXT_DAVINCI (main folder) >
1.  api-gateway (api gateway) >
    1.1 config >
        1.1.1 models >
            1.1.1.1 application.json
            1.1.1.2 credentials.json
            1.1.1.3 user.json
        1.1.2 gateway.config.yml
        1.1.3 system.config.yaml
    1.2 node_mdoules > 
    1.3 .yo-rc.json
    1.4 package-lock.json 
    1.5 package.json
    1.6 server.mjs
2.  node modules > 
3.  services >
    3.1 cart
        3.1.1 controllers >
            3.1.1.1 cartCantroller.js
        3.1.2 models >
            3.1.2.1 Cart.js
        3.1.3 node_modules > 
        3.1.4 routes >
            3.1.4.1 cartRoutes.js
        3.1.5 .env
        3.1.6 package-lock.json 
        3.1.7 package.json
        3.1.8 server.js
    3.2 order >
        3.2.1 controllers >
            3.2.1.1 orderCantroller.js
        3.2.2 models >
            3.2.2.1 Order.js
        3.2.3 node_modules >
        3.2.4 routes >
            3.2.4.1 orderRoutes.js
        3.2.5 .env
        3.2.6 package-lock.json
        3.2.7 package.json
        3.2.8 server.js
    3.3 price >
        3.3.1 controllers >
            3.3.1.1 priceCantroller.js
        3.3.2 models > 
            3.3.2.1 Price.js
        3.3.3 node_modules >
        3.3.4 routes >
            3.3.4.1 priceRoutes.js
        3.3.5 .env
        3.3.6 package-lock.json
        3.3.7 package.json
        3.3.8 server.js
    3.4 product >
        3.4.1 controllers >
            3.4.1.1 productCantroller.js
        3.4.2 models >
            3.4.2.1 Product.js
        3.4.3 node_modules >
        3.4.4 routes >
            3.4.4.1 productRoutes.js
        3.4.5 tests >
            3.4.5.1 productController.test.js
        3.4.5 .env
        3.4.6 package-lock.json
        3.4.7 package.json
        3.4.8 server.js
    3.5 statistic >
        3.5.1 controllers
            3.5.1.1 statisticCantroller.js
        3.5.2 models >
            3.5.2.1 Statistic.js
        3.5.3 node_modules >
        3.5.4 routes >
            3.5.4.1 statisticRoutes.js
        3.5.5 .env
        3.5.6 package-lock.json
        3.5.7 package.json
        3.5.8 server.js
    3.6 theme >
        3.6.1 controllers >
            3.6.1.1 themeCantroller.js
        3.6.2 models >
            3.6.2.1 Theme.js
        3.6.3 node_modules >
        3.6.4 routes >
            3.6.4.1 themeRoutes.js
        3.6.5 .env
        3.6.6 package-lock.json
        3.6.7 package.json
        3.6.8 server.js
    3.7 user >
        3.7.1 controllers >
            3.7.1.1 userCantroller.js
        3.7.2 models >
            3.7.2.1 User.js
        3.7.3 node_modules >
        3.7.4 routes >
            3.7.4.1 userRoutes.js
        3.7.5 .env
        3.7.6 package-lock.json
        3.7.7 package.json
        3.7.8 server.js
    3.8 category >
        3.7.1 controllers >
            3.7.1.1 categoryCantroller.js
        3.7.2 models >
            3.7.2.1 Category.js
        3.7.3 node_modules >
        3.7.4 routes >
            3.7.4.1 categoryRoutes.js
        3.7.5 .env
        3.7.6 package-lock.json
        3.7.7 package.json
        3.7.8 server.js
4. client >
    4.1 .next >
    4.2 components >
        4.2.1 productForm >
            4.2.1.1 BaseFormField.jsx
            4.2.1.2 CategoryFormField.jsx
            4.2.1.3 ImageFormField.jsx
            4.2.1.4 MaterialFormField.jsx  
            4.2.1.5 PriceFormField.jsx
            4.2.1.6 ProductForm.jsx
            4.2.1.7 VideoFormFields.jsx
            4.2.1.8 useProductFormHandlers.js  
    4.3 node_modules > 
    4.4 pages >
        4.4.1 _app.jsx
        4.4.2 _document.js
        4.4.3 index.jsx
        4.4.4 login.jsx
        4.4.5 register.jsx
    4.5 public >
    4.6 services >
    4.7 styles >
    4.8 .eslint.json
    4.9 .gitignore
    4.10 jsonconfig.json
    4.11 next.config.js
    4.12 package-lock.json
    4.13 package.json
    4.14 README.md

5. notes.md
6. package-lock.json
7. package.json
8. ReadMe.md
9. .babelrc
10. .gitignore
11. .nvmrc (im Moment entfernt)
12. jest.config.js
13. lerna.json
