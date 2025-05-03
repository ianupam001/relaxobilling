const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const billRoutes = require('./routes/bill.routes');
const feedbackRoutes = require('./routes/feedback.routes');
const authRoutes = require('./routes/auth.routes');
const corsMiddleware = require('./middleware/cors.middleware');
const swaggerDocument = require('./swagger');

const app = express();

app.use(express.json());
app.use(corsMiddleware);

// ✅ Swagger should be mounted before protected routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/auth', authRoutes);       // No auth
app.use('/api/bills', billRoutes);      // Protected inside route file
app.use('/api/feedback', feedbackRoutes); // Same here

module.exports = app;
