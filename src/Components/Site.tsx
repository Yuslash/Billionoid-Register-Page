const Site = () => {
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
                  <div className=" mt-10 flex flex-col gap-3">
                        <div className="flex gap-2 justify-between">
                          <input className="input-field w-full" placeholder="First Name"></input>
                          <input className="input-field w-full" placeholder="Last Name"></input>
                        </div>
                        <input className="input-field w-full" placeholder="Email"></input>
                        <input className="input-field w-full" placeholder="Phone Number"></input>
                        <textarea className="input-field w-full h-28" placeholder="Message"></textarea>
                        <button>Send To The Company CEO</button>
                  </div>
            </div>
            <div className="sambar">
                  <iframe src="https://infinite-world-alpha.vercel.app/" className="inner-sambar" allowFullScreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default Site
