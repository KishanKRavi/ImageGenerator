# ImageGenerator

**ImageGenerator** is a Node.js-based web application that generates images based on search keywords. It utilizes the [Unsplash API](https://unsplash.com/developers) to fetch and display high-quality images.

---

## Features
- Search and display images by keywords
- Simple and clean interface
- Utilizes the Unsplash API for high-resolution images

---

## How to Run

Follow these steps to set up and run the project:

1. **Install Node.js**:  
   Ensure Node.js is installed on your system. You can download it from [here](https://nodejs.org/).

2. **Clone the repository**:  
   ```bash
   git clone https://github.com/KishanKRavi/ImageGenerator.git
   ```

3. **Set up API access**:
   Get an access key as explained in the "How to Get Access Key" section below.
4. **Run the application**:
   Start the server by running:
   ```bash
   node app.js
   ```
5. **Open in browser**:
   Open your browser and go to:
   ``` http://localhost:3000/home ```

## How to Get Access Key
1.**Register on Unsplash**:
   Visit the [Unsplash Developers](https://unsplash.com/developers) page, and create an account if you don’t have one.
2. **Create a new application**:

   -After logging in, go to Your Apps.
   -Click New Application.
   -Accept the API guidelines and fill in the required details.
3.**Get the Access Key**:
   After creating the application, you'll be given an *access_key*.
4.**Configure your project**:

   Copy the  *access key*.
   Paste it into the *.env* file in the project 
   ```
   bash
   ACCESS_KEY=your_access_key_here
   ```


## Technologies Used
   -Node.js: Server-side JavaScript runtime
   -Express.js: Web framework for Node.js
   -EJS: Embedded JavaScript templating
   -Unsplash API: Image provider API


------------------------------------------------------------------
   ~KishanKRavi





   
