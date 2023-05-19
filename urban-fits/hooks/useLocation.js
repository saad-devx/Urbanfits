import { useState } from "react";

export default function useLocation() {
    
    const [location, setLocation] = useState(() => {
        const location = localStorage.getItem("location")
        if (location) return location
        else return null
    })

    const getLocation = async () => {
        const location = localStorage.getItem("location")
        if (location) return location
        if (navigator.geolocation) {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                const { latitude, longitude } = await position.coords
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
                const location = await res.json()
                setLocation(location)
                localStorage.setItem("location", JSON.stringify(location))
                return location
            } catch (e) { console.log(e) }
        } else {
            console.log("Location API is not supported in this browser")
            return null
        }
    }

    console.log(location)

    return {location, getLocation}
}