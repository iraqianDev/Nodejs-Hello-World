const express = require("express")
const helmet = require("helmet")
const compression = require("compression")
const morgan = require("morgan")
const winston = require("winston")

const app = express()
const port = process.env.PORT || 3069

// Middleware to parse JSON bodies
app.use(express.json())

// Security middleware
app.use(helmet())

// Compression middleware
app.use(compression())

// Logging middleware
app.use(morgan("combined", { stream: winston.stream.write }))

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!")
})

// Define another route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" })
})

// New route to handle POST request
app.post("/api/data", (req, res) => {
  const data = req.body
  res.json({
    message: "Data received",
    data: data,
  })
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
