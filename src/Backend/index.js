import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

// Initialize express
const app = express()

// Middleware
app.use(cors())
app.use(bodyParser.json())

// MongoDB connection
const MONGO_URI = 'mongodb://localhost:27017/sibi'
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err))

// Define a Mongoose schema
const ContactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    message: String
})

const Contact = mongoose.model('Contact', ContactSchema)

// Route to handle form submission
app.post('/submit-form', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body

    try {
        const newContact = new Contact({
            firstName,
            lastName,
            email,
            phoneNumber,
            message
        })

        await newContact.save()
        res.status(201).json({ message: 'Form submitted successfully!' })
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit form' })
    }
})

// Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
