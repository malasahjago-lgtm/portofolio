// Portfolio Server - Risal Muhammad Rohman
// Node.js Expert | Cybersecurity Specialist | API Developer
// Running on port 2026

const express = require('express');
const path = require('path');
const app = express();

// Configuration
const PORT = process.env.PORT || 2026;
const HOST = '0.0.0.0';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files - serve public directory
app.use(express.static(path.join(__dirname, 'public')));

// Security headers
app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'RisalMR-Portfolio-Server');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// Logger middleware
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url} - IP: ${req.ip}`);
    next();
});

// Routes

// Main portfolio page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint - Server status
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        server: 'RisalMR Portfolio Server',
        port: PORT,
        uptime: process.uptime(),
        developer: 'Risal Muhammad Rohman',
        expertise: ['Node.js', 'Cybersecurity', 'DDoS Protection', 'API Development'],
        experience: '4 years with Node.js',
        message: 'Expert in persuasion with sharp arguments'
    });
});

// API endpoint - Portfolio info
app.get('/api/portfolio', (req, res) => {
    res.json({
        name: 'Risal Muhammad Rohman',
        role: 'Node.js Developer & Cybersecurity Specialist',
        education: {
            current: 'SMKN 1 Nawangan, Pacitan',
            major: 'Teknik Kendaraan Ringan (TKR)',
            grade: 'Kelas 10',
            previous: 'SMPN 9 Pekanbaru (Kelas 7, 2023)'
        },
        skills: {
            primary: 'Node.js (4 years experience)',
            languages: ['Node.js', 'SQL', 'NoSQL'],
            cybersecurity: ['DDoS Attacks', 'Botnet Development', 'Layer 7', 'Layer 4'],
            tools: ['Nginx', 'Web Servers', 'API Development']
        },
        achievements: {
            botnet_servers: 500,
            layer7_capacity: '4 million requests/second',
            layer4_capacity: '700 Gbps packet',
            age_milestone: 16
        },
        contact: {
            email: 'wanghaochy@proton.me',
            whatsapp: '+62 813-3140-898',
            donate: 'https://trakteer.id/haochyy'
        },
        quote: 'Expert in persuasion with sharp arguments - Building the future with code and cybersecurity'
    });
});

// API endpoint - Skills
app.get('/api/skills', (req, res) => {
    res.json({
        cybersecurity: {
            ddos_attack: 'Expert',
            botnet_development: 'Expert',
            layer7_attacks: 'Advanced',
            layer4_attacks: 'Advanced'
        },
        programming: {
            nodejs: '4 years experience',
            sql: 'Advanced',
            nosql: 'Intermediate',
            api_development: 'Expert'
        },
        tools: {
            nginx: 'Advanced',
            web_servers: 'Advanced',
            linux: 'Intermediate'
        }
    });
});

// API endpoint - Achievements
app.get('/api/achievements', (req, res) => {
    res.json({
        botnet: {
            servers: 500,
            description: 'Largest botnet connected devices at SMK level'
        },
        layer7: {
            capacity: '4,000,000 requests/second',
            description: 'API DDoS system sold in the market'
        },
        layer4: {
            capacity: '700 Gbps',
            description: 'Packet capacity for high traffic handling'
        },
        business: {
            product: 'DDoS API',
            income: 'Significant income from API sales',
            status: 'Sold in the market after school hours'
        },
        public_speaking: {
            certificate: 'School-level public speaking',
            skill: 'Expert persuasion and sharp arguments'
        }
    });
});

// API endpoint - Contact form handler
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Log the contact attempt
    console.log('Contact form submission:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // In production, you would send email or save to database here
    res.json({
        success: true,
        message: 'Thank you for contacting me! I will get back to you soon.',
        contact: {
            email: 'wanghaochy@proton.me',
            whatsapp: 'wa.me/628133140898'
        }
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested endpoint does not exist',
        suggestion: 'Check /api/status for server information'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Server error:', err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
        message: 'Something went wrong on the server',
        developer: 'Risal Muhammad Rohman'
    });
});

// Start server
app.listen(PORT, HOST, () => {
    console.log('\n=================================================');
    console.log('🚀 PORTFOLIO SERVER STARTED');
    console.log('=================================================');
    console.log(`Developer: Risal Muhammad Rohman`);
    console.log(`Role: Node.js Developer & Cybersecurity Specialist`);
    console.log(`Server: http://localhost:${PORT}`);
    console.log(`Host: ${HOST}`);
    console.log(`Port: ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Node Version: ${process.version}`);
    console.log(`=================================================`);
    console.log(`📧 Email: wanghaochy@proton.me`);
    console.log(`📱 WhatsApp: wa.me/628133140898`);
    console.log(`💰 Donate: https://trakteer.id/haochyy`);
    console.log(`=================================================`);
    console.log(`✨ "Expert in persuasion with sharp arguments"`);
    console.log(`🎯 4 Million Requests/Second | 700 Gbps Packet`);
    console.log(`🖥️  500 Botnet Servers | 4 Years Node.js`);
    console.log(`=================================================\n`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('\n\n=================================================');
    console.log('🛑 Server shutting down gracefully...');
    console.log('=================================================');
    console.log('Thank you for using RisalMR Portfolio Server');
    console.log('=================================================\n');
    process.exit(0);
});

// Export app for testing
module.exports = app;
