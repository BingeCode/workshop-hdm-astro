import { useState } from "react"

const ContactCard = () =>{
    
    const [open, setOpen] = useState(false)

    return(
        <div className="relative">
            <button className="btn" onClick={()=>setOpen(true)}>Contact me</button>
            {open && <dialogue className="fixed bottom-[10vh] right-[26vw] right-256 z-10 bg-white rounded-lg shadow-lg border border-gray-300 p-10">
            <button onClick={()=>setOpen(false)} class="absolute top-[8px] right-[8px]  rounded-full bg-gray-300 px-[7px] text-white">
            ✖️
            </button>
                <p>📱 01762547374332</p>
                <p className="pt-3">📧 max-mustermann@gmail.com</p>
                <p className="pt-3">📍 Musterstraße 3, 70173 Stuttgart</p>
            </dialogue>}
        </div>
    )
}

export default ContactCard;