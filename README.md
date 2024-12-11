# Notes Application

## Frontend Setup (Angular)

### Prerequisites
- **Node.js**: Version 18 or higher
- **npm**: Comes with Node.js installation
- **Angular CLI**: Installed globally
  ```bash
  npm install -g @angular/cli
  ```

### Steps to Run the Frontend

1. **Clone the Repository**
   ```bash
   git clone https://github.com/goraneld/notes-app-frontend.git
   cd notes-app-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Proxy Configuration**
   - Ensure `src/proxy.conf.json` is configured to proxy API requests to the backend:
     ```json
     {
       "/api": {
         "target": "http://localhost:8080",
         "secure": false,
         "changeOrigin": true
       }
     }
     ```
   - Update `angular.json` to include the proxy configuration:
     ```json
     "architect": {
       "serve": {
         "options": {
           "proxyConfig": "src/proxy.conf.json"
         }
       }
     }
     ```

4. **Run the Application**
   ```bash
   ng serve
   ```
   The frontend server will start on `http://localhost:4200`.

5. **Access the Application**
   - Open your browser and navigate to `http://localhost:4200`.
   - Log in with the default credentials:
     - Username: `user`
     - Password: `password`

---

## Prerequisites Summary

### Backend:
- JDK 17+
- Maven 3.6+
- MongoDB (local or hosted)

### Frontend:
- Node.js 18+
- Angular CLI

