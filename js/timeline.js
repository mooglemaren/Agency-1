
import "./utils.js";

// Selecting an HTML element with the class 'timelineDiv' and storing it in the 'out' constant
const out = document.querySelector("timelineDiv");

// Defining the API endpoint URL
const api = `https://agency.marenjohansen.no/wp/v2/posts`;

// Asynchronous function to fetch timeline data
async function getTimelineData() {
    try {
        // Constructing the endpoint URL for a specific post (post ID 60)
        const endPointResponse = `https://agency.marenjohansen.no/wp-json/wp/v2/posts`;
        
        // Fetching data from the constructed endpoint
        const response = await fetch(endPointResponse);
        
        // Parsing the response body as JSON
        const data = await response.json();
        
        // Logging the fetched data to the console
        
        displayTimelineData(data);

        console.log(data);

    } catch (error) {
        // Catching and logging any errors that occur during the fetching process
        console.log(error.message);
    }
}
function displayTimelineData(data) {
    const timelineDiv = document.getElementById('timelineDiv');
    let timelineHTML = '<h2>Timeline Data</h2>';
    timelineHTML += '<ul>';
    data.forEach(post => {
        timelineHTML += `<li><strong>Title:</strong> ${post.title.rendered}</li>`;
        timelineHTML += `<li><strong>Content:</strong> ${post.content.rendered}</li>`;
        // Add more fields as needed
    });
    timelineHTML += '</ul>';
    timelineDiv.innerHTML = timelineHTML;
}

// Call the function to fetch and display data when the page loads
window.onload = function() {
    getTimelineData();
};


/* 
// Logging a message to the console along with the getTimelineData function reference


function displayTimelineData(data) {
   const timeLineContainer = document.querySelector("#timelineId");
   const timeLineCard = document.createElement("div");
   const timeLineImage = document.createElement("img");
   const timeLineTitle = document.createElement("h1");
   const timeLineContent = document.createElement("p");
   timeLineImage.src = data.img;
   console.log(data[0].type);
   timeLineCard.append(timeLineImage, timeLineTitle, timeLineContent);
    timeLineContainer.appendChild(timeLineCard);
   /* timeLineContainer.innerHTML = ""; */

/*    const titleElement = document.createElement("h1");
    titleElement.innerHTML = data.title.rendered;

    const contentElement = document.createElement("breadText");
    contentElement.innerHTML = data.content.rendered;

    timeLineContainer.append(titleElement, contentElement); 


}
getTimelineData(); 
 */

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