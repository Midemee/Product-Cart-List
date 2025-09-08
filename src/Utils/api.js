const API_BASE_URL = "http://localhost:5000/api"

//sending a request to backend
export const registerUser = async (userData) => {
    console.log(userData);
    console.log(`${API_BASE_URL}/user/signup`);

    try {
        const response = await fetch (`${API_BASE_URL}/user/signup`, {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(userData),
        });
        const data = await response.json()
        if (!response.ok) {
            throw new Error(data.message || "Signup failed")
            
        }
    } catch (error) {
        console.log(error);
        return {error: error.message}
        
    }
}