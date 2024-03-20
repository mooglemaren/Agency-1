
import "./utils.js";

// Selecting an HTML element with the class 'timelineDiv' and storing it in the 'out' constant
const out = document.querySelector("timelineDiv");

// Defining the API endpoint URL
const api = `https://agency.marenjohansen.no/wp/v2/posts`;

// Asynchronous function to fetch timeline data
async function getTimelineData() {
    try {
        // Constructing the endpoint URL for a specific post (post ID 60)
        const endPointResponse = `https://agency.marenjohansen.no/wp-json/wp/v2/posts/60`;
        
        // Fetching data from the constructed endpoint
        const response = await fetch(endPointResponse);
        
        // Parsing the response body as JSON
        const data = await response.json();
        
        // Logging the fetched data to the console
        console.log(data);
    } catch (error) {
        // Catching and logging any errors that occur during the fetching process
        console.log(error.message);
    }
}

// Logging a message to the console along with the getTimelineData function reference
console.log("LOOK HERE", getTimelineData);




/* async function fetchData() {
    
    try {
        if (!response.ok) {
            //const response = await fetch(`https://agency.marenjohansen.no/wp/v2/posts/60`)
            const response = await fetch(`$ curl https://agency.marenjohansen.no/wp-json/wp/v2/posts/60`)
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error(error);
    }
}

fetchData(); */