// Defining the API endpoint URL
const api = `https://agency.marenjohansen.no/wp/v2/posts`;

// Asynchronous function to fetch timeline data
async function getBlogPostData() {
  try {
    // Constructing the endpoint URL for a specific post (post ID 60)
    const endPointResponse = `https://agency.marenjohansen.no/wp-json/wp/v2/posts`;

    // Fetching data from the constructed endpoint
    const response = await fetch(endPointResponse);

    // Parsing the response body as JSON
    const data = await response.json();

    //gjør det samme som forEach funksjonen under
    /* for (let i = 0; i < data.length; i++){
        const title = data[i].title;
        console.log(title)
    } */
    data.forEach((data) => {
      const { title, id, featured_media } = data; //desrtucture array (i dette tilfelle "data")
      console.log(title);
      const blogPostContainer = document.querySelector("#blogPostContainer");
      const blogPostCard = document.createElement("div");
      const blogPostPic = document.createElement("img");
      const blogPostTitle = document.createElement("h1");
      blogPostCard.className = "card";
        if (!featured_media) {
            blogPostPic.alt = "no image found"
            //<img alt="no image found"></img>
        } else [
            blogPostPic.src = featured_media
        ]


      blogPostTitle.innerText = title.rendered;
      blogPostCard.append(blogPostTitle, blogPostPic);
      blogPostContainer.appendChild(blogPostCard);
    });
    // Displaying the fetched data on the webpage
    //displayBlogPosts(data);

    // Logging the fetched data to the console
    console.log("SEHER", data);
  } catch (error) {
    // Catching and logging any errors that occur during the fetching process
    console.log(error.message);
  }
}

/* function displayBlogPosts(data) {
  const blogPostContainer = document.querySelector("#blogPostContainer");
  const blogPostCard = document.createElement("div");
  const blogPostPic = document.createElement("img");
  const blogPostTitle = document.createElement("h2");
  blogPostPic.innerHTML = data.type;
  console.log(data[0].type);
  blogPostCard.append(blogPostPic, blogPostTitle);
  blogPostContainer.appendChild(blogPostCard);
} */
// Function to display blog post data on the webpage
/* function displayBlogPostData(data) {
  // Get the container element
  const blogPostContainer = document.getElementById("blogPostContainer");

  // Clear the container content
  blogPostContainer.innerHTML = "";

  // Create elements to display blog post data
  const titleElement = document.createElement("h1");
  titleElement.textContent = data.title.rendered;

  const contentElement = document.createElement("div");
  contentElement.innerHTML = data.content.rendered;

  // Append elements to the container
  blogPostContainer.append(titleElement,contentElement);
} */

// Call the function to fetch and display blog post data
getBlogPostData();
