const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for demo (replace with database later)
let contacts = [];
let contactIdCounter = 1;

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// POST /api/contact - Handle contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Store in memory (for demo)
    const newContact = {
      id: contactIdCounter++,
      name,
      email,
      phone,
      subject,
      message,
      created_at: new Date().toISOString(),
      status: 'pending'
    };
    
    contacts.push(newContact);

    console.log('New contact submission:', newContact);

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: newContact
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/contacts - Get all contact submissions (for admin)
app.get('/api/contacts', async (req, res) => {
  try {
    res.json({
      success: true,
      data: contacts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// PUT /api/contacts/:id/status - Update contact status
app.put('/api/contacts/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contactIndex = contacts.findIndex(c => c.id === parseInt(id));
    
    if (contactIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    contacts[contactIndex].status = status;

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: contacts[contactIndex]
    });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoints available:`);
  console.log(`  POST /api/contact - Submit contact form`);
  console.log(`  GET /api/contacts - Get all contacts`);
  console.log(`  GET /api/health - Health check`);
});
