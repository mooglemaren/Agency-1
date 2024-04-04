
/* 
//TODO

// make thumbnail for each post
    •  decrease amount of text shown
    •  use eclipse to show that there is more text
    •  make the card clickable

// function that handles data for the modal 
    • create function 
    • link to modal
    • within fuction build the modal

// make the modal 
*/


// Asynchronous function to fetch timeline data
async function getTimelineData() {
  try {
    // Constructing the endpoint URL for a specific post (post ID 60)
    const endPointResponse = `https://agency.marenjohansen.no/wp-json/wp/v2/posts`;

    // Fetching data from the constructed endpoint
    const response = await fetch(endPointResponse);

    // Parsing the response body as JSON
    const data = await response.json();

    data.forEach((data, index) => {
      const { title, id, featured_media, content } = data; 
      const div = document.createElement("div");
      /* const dialog = document.createElement("dialog");
      dialog.showModal(); */
      div.classList.add("container");
      if (index % 2 === 0) {
          div.classList.add("left");
      } else {
        div.classList.add("right");
      } 
        const shortContent = content.rendered.slice(0, 90)
      console.log("SE HER!!!!",shortContent);
      div.innerHTML = content.rendered;
      console.log(title);
      const timeLineContainer = document.querySelector("#timeLineId");
      
      timeLineContainer.appendChild(div);
    });
    /* console.log("SEHER", data); */
  } catch (error) {
    console.log(error.message);
  }
}

getTimelineData()

/*
const timeLineCard = document.createElement("div");
      const timeLineTitle = document.createElement("h1");
      timeLineCard.className = "cardTimeline";
        if (!featured_media) {
            timeLinePic.alt = "no image found"
            //<img alt="no image found"></img>
        } else [
            timeLinePic.src = featured_media
        ] */

      /* timeLineTitle.innerText = title.rendered;
      timeLineCard.append(timeLineTitle, timeLinePic);
      timeLineContainer.appendChild(timeLineCard); */