import { Link } from "gatsby";
import React from "react"

const Contact = () => {

    return(
        <section id="contact" className="bg-red-600 w-full">
            <div className="py-10 text-center">
                <p className="text-white mb-1">Warning: A clone, not an original, and its code is messy and hasn't been cleaned up.</p>
                <Link to='/' className="text-white mb-1 underline opacity-75">Go to Home</Link>
            </div>
        </section>
    )
}

export default Contact;
