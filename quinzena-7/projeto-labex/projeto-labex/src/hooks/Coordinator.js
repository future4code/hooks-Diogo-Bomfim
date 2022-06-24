// NAVIGATE goBack
export const goBack = (navigate) => {
    navigate(-1)
}

// NAVIGATE ListTripsPage
export const goToApplicationForm = (navigate) => {
    navigate("/trips/application")
}

// NAVIGATE AdminHomePage
export const goToCreateTrip = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToHome = (navigate) => {
    navigate("/")
}

export const goToSeeTripDetail = (navigate) => {
    navigate(`/admin/trips/${localStorage.getItem("tripId")}`)
}

// NAVIGATE HomePage
export const goToPublicArea = (navigate) => {
    navigate("/trips/list")
}

// PRIVATE AREA HOOK
export const goToPrivateArea = (navigate) => {
    const token = localStorage.getItem("token")
    
    if (token === null) {
        navigate("/login")
    }
    
    else {
        navigate("/admin/trips/list")
    }
}

