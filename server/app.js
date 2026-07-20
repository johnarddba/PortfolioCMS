const express = require("express");
const cors = require("cors");

require("./database/init");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Portfolio CMS API Running"
    });
});

app.use("/api/projects", projectRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});