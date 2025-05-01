const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const billRoutes = require('./routes/bill.routes');
const feedbackRoutes = require('./routes/feedback.routes');
const corsMiddleware = require('./middleware/cors.middleware');
const authMiddleware = require('./middleware/auth.middleware');
const swaggerDocument = require('./swagger');

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use(authMiddleware);

// Routes
app.use('/api/bills', billRoutes);
app.use('/api/feedback', feedbackRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app; // ✅ Export the Express app only
