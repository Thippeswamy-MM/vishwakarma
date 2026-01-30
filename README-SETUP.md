# Contact Form Setup Instructions

## Backend Setup

1. **Install Backend Dependencies**
   ```bash
   npm install --save express cors body-parser pg dotenv
   npm install --save-dev nodemon
   ```

2. **Set up Environment Variables**
   - Copy `.env.example` to `.env`
   - Update with your database credentials:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=vishwakarma_foundry
   DB_USER=postgres
   DB_PASSWORD=your_password_here
   PORT=5000
   ```

3. **Set up PostgreSQL Database**
   - Create database: `vishwakarma_foundry`
   - The server will automatically create the `contacts` table on startup

4. **Start the Backend Server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## Frontend Setup

The frontend is already configured to work with the backend. The contact form will:
- Send data to `http://localhost:5000/api/contact`
- Show loading states during submission
- Display success/error messages
- Clear form on successful submission

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contact submissions (admin)
- `PUT /api/contacts/:id/status` - Update contact status (admin)
- `GET /api/health` - Health check

## Database Schema

The `contacts` table includes:
- `id` (SERIAL PRIMARY KEY)
- `name` (VARCHAR(255))
- `email` (VARCHAR(255))
- `phone` (VARCHAR(20))
- `subject` (VARCHAR(100))
- `message` (TEXT)
- `created_at` (TIMESTAMP)
- `status` (VARCHAR(20), default: 'pending')

## Testing

1. Start the backend server
2. Start the frontend development server
3. Navigate to the contact page
4. Fill out and submit the form
5. Check the database for the submitted data

## Features Implemented

✅ Backend API with Express.js
✅ PostgreSQL database integration
✅ Form validation
✅ Error handling
✅ Loading states
✅ Success/error messages
✅ Form reset on submission
✅ CORS enabled
✅ Environment variable support
