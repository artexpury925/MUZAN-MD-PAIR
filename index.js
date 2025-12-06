import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';

// Importing routers
import pairRouter from './pair.js';
import qrRouter from './qr.js';

const app = express();

// Resolve the current directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;

// Increase the maximum number of listeners (useful if you have many event listeners)
import('events').then(events => {
    events.EventEmitter.defaultMaxListeners = 500;
});

// Middleware to handle JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the current directory (useful for serving HTML, CSS, JS)
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pair.html'));  // Serve the pair.html file at the root route
});

app.use('/pair', pairRouter);  // Pair-related routes
app.use('/qr', qrRouter);  // QR-related routes

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('YouTube: @@arnoldkipruto-qn7jn');
    console.log('GitHub: @artexpury925');
});

export default app;