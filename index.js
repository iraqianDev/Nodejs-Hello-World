import express from "express"
const app = express()
const port = 6969

// Middleware to parse JSON bodies
app.use(express.json())

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!")
})

// Define another route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" })
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
