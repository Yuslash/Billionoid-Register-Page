import { useState } from "react"
import axios from "axios"

const Site = () => {

      const [formData, setFormData] = useState({
            firstName : '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: ''
      })

      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
            })
      }

      const handleSumbit = async (e) => {
            e.preventDefault()
            try {
                  const response = await axios.post('http://localhost:5000/submit-form', formData)
                  alert(response.data.message)
            } catch (error) {
                  console.log('There was an error submitting the form!', error)
            }
      }

  return (
    <div className="site-container">
        <div className=' text-center'> 
              <p className="get-in text-white text-5xl font-extrabold">Welcome To Billionoid</p>
              <p className="reach-out text-gray-500 mt-2 text-xl font-small">Reach out, and let's create a universe of possibilities together!</p>
        </div>
        <div className="body-color mt-16 text-white flex gap-8 p-5">
            <div className="inside-body p-10 flex flex-col gap-2 max-w-xl">
                  <h1 className=" font-semibold text-2xl">Let’s connect constellations</h1>
                  <h1 className="text-gray-500 text-xs">Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</h1>
                  <form onSubmit={handleSumbit} className=" mt-10 flex flex-col gap-3">
                        <div className="flex gap-2 justify-between">
                          <input 
                          className="input-field w-full"
                          name="firstName" 
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}                          
                          >
                          </input>
                          <input 
                          className="input-field w-full" 
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          >

                          </input>
                        </div>
                        <input 
                        className="input-field w-full" 
                        name="email"
                        placeholder="Email"
                        value={formData.email} 
                        onChange={handleChange}
                        >

                        </input>
                        <input 
                        className="input-field w-full"
                        name="phoneNumber" 
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        >

                        </input>
                        <textarea 
                        className="input-field w-full h-28" 
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        >

                        </textarea>
                        <button type="submit">Send To The Company CEO</button>
                  </form>
            </div>
            <div className="sambar">
                  <iframe src="https://infinite-world-alpha.vercel.app/" className="inner-sambar" allowFullScreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default Site
