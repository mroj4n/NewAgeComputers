Settled on Angular JS + NodeJS + Express + MongoDB

##  Frontend
 Install development tools **[Done]** 
  
 Create Angular App **[Done]** 

    1. Create project's folder  
    2. Install @angular/cli  
    3. Create App as frontend  

 Add Header **[Done]** 
    
    1. Generate Component
    2. Add Html
    3. Add CSS

 Create product models  **[Done]** (negotiation) 
  
    1. Create Item model
    2. Create data.ts
       1. Add sample items
    3. Add images to assets
    4. Create Item service
    5. Create Home component
       1. Add ts
       2. Add html
       3. Add css

 Search **[Done]** 
    
    Add method to Item service
    Add search route
    Show search result in Home component
    Generate search component
        Add to home component
        Add ts
        Add html
        Add css
   
 Tags Bar **[Done]** 
    
    1. Create Tag model
    2. Add sample tags to data.ts
    3. Item service: Add get all items by tag method
    4. Add tags route
    5. Show tag result in Home component
    6. Generate Tags component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css

 Item Page **[Done]** 
    
    Add method to item service
    Generate Item Page component
        Add Route
        Add ts
        Add html
        Add css

Cart Page **[Done]** 

    1. Create CartItem Model
    2. Create Cart Model Cart service
    3. Add to Cart Button in Item Page
    4. Generate Cart page component
        1. Add Route
        2. Add ts
        3. Add html
        4. Add css

 Category Bar (needs discussion)
    
    1. Create Category model
    2. Add sample Category to data.ts
    3. Item service: Add get all items by Category method
    4. Add Category route
    5. Show tag result in Home component
    6. Generate Category component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css

##  Backend

Connect To Backend **[Done]** 

    1.  Create backend folder
    2.  npm init
    3.  npm install typescript
    4.  Create tsconfig.json
    5.  Create .gitignore
    6.  Copy data.ts to backend/src
    7.  npm install express cors
    8.  Create server.ts
        1. install @types
        2. Add Apis
    9.  npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update item service

Login Page **[Done]** 

    1.  Generate Component
        1.  Add to routes
        2.  Add ts 
        3.  Add html
            1.  Import Reactive Forms Module
        4.  Add Css
    2.  Add Login Api
        1.  Use json
        2.  Add jsonwebtoken
        3.  Test Using Postman
    
    3.  Generate User Service
        1.  Generate User model
        2.  Add User Subject
        3.  Add Login Method   
            1.  Add User Urls
            2.  Generate IUserLogin interface
            3.  Add ngx-toastr
                1.  Import Module
                2.  Import BrowserAnimationsModule
                3.  Add styles in angular.json
            4.  Add to Header
        4. Add Local Storage methods
        5. Add Logout Method
           1. Add to Header


Make Components For Login Page **[Done]** 

    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button

Connect Login API To MongoDB Atlas **[Done]** 

    1. Moving Apis into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
       1. mongoose
       2. dotenv
       3. bcryptjs
       4. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis


Register User **[Done]** 

    1.  Add Register api
    2.  Add Register service method
    3.  Add Register link 
    4.  Add Register Component


Loading! **[Done]** 

    1.  Add Image 
    2.  Add Component
    3.  Add Service
    4.  Add Interceptor




Checkout Page **[Done]** 

    1.  Create Order Model
    2.  Create Checkout Page Component
        1.  Add To Router   
    3.  Add User to User Service 
    4.  Add Cart to Cart Service 
    5.  Create Order Items List Component
    6.  Adding Map To The Checkout Page
        1.  Add Leaflet npm package
            1.  Add @types/leaflet
            2.  Add Css to angular.json
        2.  Add AddressLatLng to Order Model
        3.  Create Map component
            1.  Add to checkout page
            2.  Add TS
                1.  Change app-map selector to map
            3.  Add Html
            4.  Add CSS
        4.  Add Auth Guard
    7.  Save Order
        1. Add Order Model
        2. Add Order Status Enum
        3. Add Auth Middleware
        4. Add Order Router
           1. Add create API
        5. Add Order Urls to urls.ts
        6. Add Order Service
           1. Add create Method
        7. Add Auth Interceptor

Payment Page

    1. Generate Component
    2. Add 'getOrderForCurrentUser' api 
    3. Add Order Service method
    4. Connect Component to Service
    5. Make the map component readonly

Adding Paypal
    
    1. Generate Component
       1. Add to payment page
    2. Get Paypal client Id
    3. Add Paypal JS to index.html
    4. Set up Paypal button
    5. Add Pay api to order router   
    6. Get Paypal sandbox account

Order Track Page

    1.  Generate Component
        1.  Add to routes
    2.  Add API
        1.  Add to urls.ts
    3.  Add method to order.service
    4.  Add HTML
    5.  Add CSS

Deploy On Heroku

    1.  OutputPath in angular.json
    2.  package.json
        1.  frontend
        2.  backend
        3.  root
    3.  BASE_URL in urls.ts
    4.  Public folder config in server.ts
    5.  Run commands
    6.  Add built folder to .gitignore
    7.  Commit and Push

Updating Packages (Optional)

    1.  Install npm-check-upates as a global package
    2.  Run ncu -u in the frontend folder
    3.  Downgrade typescript to version ~4.8.2
    4.  Run npm install --force
    5.  Run npm start
    6.  Run ncu -u in the backend folder
    7.  Run npm install
    8.  Run npm start



part8, add the specification and details
tags will be categories