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

// NAVIGATE HomePage
export const goToPublicArea = (navigate) => {
    navigate("/trips/list")
}
export const goToPrivateArea = (navigate) => {
    navigate("/admin/trips/list")
}