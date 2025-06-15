const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
const directorRoutes = require('./routes/directorRoutes');
const actorRoutes = require('./routes/actorRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/movies', movieRoutes);
app.use('/api/directors', directorRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
