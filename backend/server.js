const express=require("express");

const app = express();
const PORT = process.env.PORT || 5000;

// Simple route
app.get("/", (req, res) => {
  res.send("Hello World from Azure 🚀");
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
