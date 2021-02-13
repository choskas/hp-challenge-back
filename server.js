const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const RateLimit = require('express-rate-limit');
const app = express();

// Middlewares
app.use(helmet());
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(
  cors({
    credentials: false,
    origin: ['http://localhost:3003', 'http://localhost:5000', 'http://localhost:3000', 'https://zen-jones-87ccd3.netlify.app/'],
  }),
);

// Middlewares for DDoS and bruteforce attacks
const limiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  delayMs: 0,
});

app.use(limiter);

// Routes
app.use(require('./routes/index'));
// // Websocket (si se necesitan)
// app.use(require('./routes/websockets'));

// Static
app.use(express.static(path.join(__dirname, 'public')));

// Listen server
app.listen(process.env.PORT || 3001, () => {
  console.log('listening on port', 3001);
});