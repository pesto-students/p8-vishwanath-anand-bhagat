# Exercise1.1

## When a user enters an URL in the browser, how does the browser fetch the desired result ? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same.
    

#### Main Funtionality of the Browser

- The main functions of web browser is to fetch or retrieve informative resources from
  World Wide Web to the client/ user on demand, translate those files received from web
  server and display those content to the user and allow the client /user to access all
  other relevant resources & information via hyperlinks.
- When the user inputs any URL (uniform resource locator) in the web browser,
  he user is navigated to that website by the browser quickly.
  Let us have a look on its processing. When user type any URL,
  for example https://msatechnosoft.in, the prefix of the URL decide how to retrieve it.
  The URL prefixes that the web browser is not able to handle directly is sent to related
  application. Like default email app is responsible to handle mailto: URL prefix.
  Following table gives an idea about some of the common URL prefixes:

  | URL Prefix | URL Interpretation                  |
  | :--------- | :---------------------------------- |
  | http:      | Hypertext transfer protocol         |
  | https:     | Secured hypertext transfer protocol |
  | ftp:       | File transfer protocol              |
  | file:      | Local file system                   |

- Web browser allow users to interact with web pages and other dynamic contents via
  hyperlinks that provides navigation facility i.e. to go to different locations by
  clicking on links that makes internet surfing easy.

![Functionality of Browser](https://www.ssl2buy.com/wp-content/uploads/2022/02/working-of-web-server.jpg)

---

#### High Level Components of a browser

- The user interface:  
   This component allows end-users to interact with all visual elements available on the web page. 
   The visual elements include the address bar, home button, next button, 
   and all other elements that fetch and display the web page requested by the end-user.
- The browser engine:  
   It is a core component of every web browser. The browser engine functions as an intermediary or 
   a bridge between the user interface and the rendering engine. 
   It queries and handles the rendering engine as per the inputs received from the user interface.
- The rendering engine :  
   As the name suggests, this component is responsible for rendering a specific web page requested by the user on their screen. 
   It interprets HTML and XML documents along with images that are styled or formatted using CSS, 
   and a final layout is generated, which is displayed on the user interface.
- Networking:  
   This component is responsible for managing network calls using standard protocols like HTTP or FTP. 
   It also looks after security issues associated with internet communication.
- JavaScript interpreter:  
   As the name suggests, it is responsible for parsing and executing the JavaScript code embedded in a website. 
   Once the interpreted results are generated, they are forwarded to the rendering engine for displaying on the user interface.
- UI backend:  
   This component uses the user interface methods of the underlying operating system. 
   It is mainly used for drawing basic widgets (windows and combo boxes).
- Data storage:  
   It is a persistent layer. A web browser needs to store various types of data locally, for example, cookies. 
   As a result, browsers must be compatible with data storage mechanisms such as WebSQL, IndexedDB, FileSystem, etc.

  ![Components of Browser](https://i.imgur.com/VcpjfPL.png)

---

#### Parsers (HTML, CSS, etc)
- A parser in a browser is a piece of software that is responsible for taking the code that makes up a website 
   (usually written in HTML, CSS, and JavaScript) and turning it into a format that the browser can understand and display to the user. 
- This typically involves breaking the code down into a tree-like structure and 
   then interpreting each element according to its specific rules and syntax. 
- The parser is an essential part of the rendering process in a browser, as it allows the browser to accurately and 
   efficiently display the content of a website to the user.
- There are several different types of parsers that might be used in a web browser, 
   depending on the type of code being processed. For example:
   - An HTML parser is used to analyze the structure of an HTML document, 
      and to build a representation of the document in memory that the browser can use to render the page.
   - A CSS parser is used to analyze the stylesheets associated with a web page, and to apply the styles to the page's content.
   - A JavaScript parser is used to analyze and execute the JavaScript code on a web page. 
      This allows the browser to respond to user events, such as clicks or keyboard input, and to update the page dynamically.
   In addition to these core parsers, a web browser might also use other specialized parsers for handling specific types of content, 
   such as images, videos, or audio files.
- Working of parser
   - When a user requests a web page, the browser sends a request to the web server for the desired page. 
      The server then responds by sending the HTML code for the page back to the browser.
   - The browser then uses an HTML parser to analyze the structure of the HTML code and to create a representation of the page in memory. 
      This representation, sometimes called the "DOM" (Document Object Model), is a tree-like structure that represents the hierarchical 
      relationship between the different elements on the page.
   - Once the HTML code has been parsed, the browser uses a CSS parser to analyze any associated stylesheets 
      and to apply the styles to the page's content. This determines the final layout and appearance of the page.
   - Finally, the browser uses a JavaScript parser to execute any JavaScript code on the page. 
      This allows the page to respond to user events, such as clicks or keyboard input, and to update dynamically.
   - Here is a diagram illustrating this process:
      ![Working of parser](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works/rendering.svg)
      
---

#### Rendering engine and its use

- Once a user requests a particular document, the rendering engine starts fetching the content of the requested document. 
    This is done via the networking layer. The rendering engine starts receiving the content of that specific document in 
    chunks of 8 KBs from the networking layer. After this, the basic flow of the rendering engine begins.
    ![Rendering engine basic flow](https://browserstack.wpenginepowered.com/wp-content/uploads/2019/11/Screenshot-2019-11-12-at-3.26.19-PM.png)
- Every browser has its own unique rendering engine. So naturally, every browser has its own way of interpreting web pages on a user’s screen.
- The primary job of a browser engine is to transform HTML documents and other resources of a web page into an interactive visual representation on a user's device.
- Once the browser receives these files, it begins the process of rendering the page. This process involves several steps:
   - Parsing the HTML: The browser starts by parsing the HTML file, which tells it how to structure the content on the page. 
      As it parses the HTML, the browser creates a tree-like structure called the "DOM" (Document Object Model) to represent the content of the page.
   - Applying styles with CSS: The browser then processes any linked CSS files, which specify the styling and layout of the page. 
      It applies these styles to the elements in the DOM tree to determine how they should look on the page.
   - Executing JavaScript: If the page includes any JavaScript, the browser will execute this code. 
      JavaScript can manipulate the DOM, as well as interact with the user and make requests to servers.
   - Layout and painting: After the DOM and CSS have been processed, the browser uses this information to determine the layout of the page, 
      including the size and position of each element. It then "paints" each element onto the screen, 
      starting with the background and working down to the text and other content.
   - Final rendering: Once all the elements have been painted, the browser displays the fully rendered page to the user. 
      If the page includes any dynamic content that can change over time (e.g., through user interaction or updates from the server), 
      the browser will continue to monitor and update the page as needed.
- This is a general overview of the rendering process in a browser. There are many factors that can affect the performance and speed of rendering, 
   such as the size and complexity of the page, the hardware and software capabilities of the user's device, and the efficiency of the code.

---

#### Script Processors

- In a web browser, a script processor is a component that is responsible for executing scripts, typically written in JavaScript. 
   When a web page is loaded, the browser's script processor will parse and execute any JavaScript code contained in the page. 
   This can include code that modifies the content or layout of the page, adds interactivity or functionality, 
   or communicates with the server or other external sources.
- The script processor is usually a part of the browser's rendering engine, which is responsible for parsing and 
   rendering the content of the web page. The rendering engine will parse the HTML and CSS to construct the DOM and CSSOM trees, 
   and then execute the JavaScript code using the script processor.
- There are different script processors used by different browsers. For example, Google Chrome uses the V8 JavaScript engine as its script processor, 
   while Mozilla Firefox uses the Spider Monkey engine. Each browser's script processor is optimized for performance and 
   has its own set of features and capabilities.
- Overall, the script processor plays a crucial role in the functioning of modern web applications and 
   is an important part of the browser's rendering and execution process.
- There are several factors that can affect the performance of the script processor, such as the size and complexity of the code, 
   the hardware and software capabilities of the user's device, and the efficiency of the code. 
   Developers can use tools and techniques to optimize their code and improve the performance of the script processor.
- The process of script processing in a browser involves several steps, which can be summarized as follows:
   - The browser encounters a script tag or external JavaScript file while parsing the HTML of a web page.
   - The script is passed to the script processor for execution.
   - The script processor begins by parsing the script and converting it into an abstract syntax tree (AST). 
      An AST is a tree-like representation of the code that makes it easier for the processor to understand and execute.
   - Next, the script processor converts the AST into machine code that can be executed by the computer's processor. 
      This step is known as compiling or JIT compiling (just-in-time compiling).
   - The script processor executes the machine code, which may make changes to the DOM or CSSOM trees and 
      handle events and user interactions on the page.
   - Once the script has finished executing, the script processor returns control to the browser. 
      The browser continues to render the page, incorporating any changes made by the script.
- This is a general overview of the process of script processing in a browser. 
   The specific steps and technologies used may vary depending on the browser and the JavaScript runtime environment.

---

#### Tree Construction

- Tree construction in a browser refers to the process of creating a tree-like structure in memory that represents the content, 
   style, and layout of a web page. There are two types of trees that are constructed in a browser: 
   the Document Object Model (DOM) tree and the CSS Object Model (CSSOM) tree.
- The DOM tree is a representation of the HTML structure of a web page. 
   It consists of a hierarchy of nodes, each of which corresponds to an HTML element on the page. 
   The root node of the DOM tree is the <html> element, and the other nodes are nested inside it according to the structure of the HTML. 
   The DOM tree is used by the browser to render the page and handle events and user interactions.
- The CSSOM tree is a representation of the CSS styles applied to a web page. 
   It consists of a hierarchy of nodes that corresponds to the DOM tree, with each node representing an element on the page. 
   The CSSOM tree includes information about the styles that are applied to each element, such as its font, color, and layout.
- Both the DOM tree and the CSSOM tree are constructed as the browser parses the HTML and CSS files for a web page. 
   The DOM tree is constructed as the browser parses the HTML, and the CSSOM tree is constructed as the browser parses the CSS. 
   Once both trees are complete, the browser uses them to render the page on the user's device.
- Here are the general steps involved in tree construction in a browser:
   - The browser receives the HTML file for a web page from the web server.
   - The browser begins parsing the HTML file, starting at the root element. 
      As it encounters each element in the HTML, it creates a corresponding node in the DOM tree.
   - The browser continues to parse the HTML and build the DOM tree until it reaches the end of the file.
   - As it builds the DOM tree, the browser also associates each element with its corresponding CSS styles and JavaScript behaviors.
   - Once the DOM tree is complete, the browser can begin rendering the page. 
      It does this by laying out the elements on the page according to their position and size, and painting them with the appropriate colors and styles.
   - The browser continues to render the page as the user scrolls and interacts with it. 
      It may also need to make additional requests for resources such as images or additional data from the server.
- This is a general overview of the tree construction process in a browser. 
   The DOM tree is a dynamic structure that can be modified by JavaScript code, so it may change as the user interacts with the page.
   ![Tree Construction](https://wpewebkit.org/assets/graphics-attachment.png)

---

#### Order of script processing

- The order in which scripts are processed by a browser can vary depending on a number of factors, 
   including the type of script being executed and the way it is included in the page.
- The order in which scripts are processed by a browser can vary depending on a number of factors, 
   including the type of script being executed and the way it is included in the page.
- Generally scripts are processed in the following order:
   - The browser loads and parses the HTML code for the page, and constructs the DOM (Document Object Model) in memory.
   - The browser loads and parses any external stylesheets that are included in the page, 
      and applies the styles to the page's content.
   - The browser loads and parses any external JavaScript files that are included in the page.
   - The browser evaluates any inline JavaScript code that is included directly in the HTML code for the page.
- In general, however, scripts are executed in the order in which they are encountered by the browser's parser. 
   This means that if multiple scripts are included in the HTML code for a page, 
      they will be executed in the order in which they appear in the code.
- For example, consider the following HTML code:
   ```
      <html>
         <head>
            <script src="script1.js"></script>
            <script src="script2.js"></script>
         </head>
         <body>
            <script src="script3.js"></script>
            <script src="script4.js"></script>
         </body>
      </html>
   ```
   In this case, the browser would first execute script1.js, then script2.js, then script3.js, and finally script4.js.
- However, it's important to note that this is a very simple example, 
   and in practice the execution order of scripts can be much more complex. 
   For example, if one of the scripts depends on the results of another script, 
   it may need to wait until the other script has finished executing before it can run. 
   Additionally, some scripts may be executed asynchronously, which means that they will run in parallel with other scripts, 
   rather than in a strict sequential order.

---

#### Layout and Painting

- The terms "layout" and "painting" refer to two different stages in the process of rendering a web page in a browser.
- The layout stage involves determining the size and position of each element on the page. 
   This is necessary in order to ensure that the page is displayed correctly, 
   with elements appearing in the correct place and with the correct dimensions.
- The painting stage involves actually drawing the elements on the page. 
   This involves filling in the content of each element (such as text or images) and applying any styles that have been specified, 
   such as colors, fonts, or backgrounds.
- Together, the layout and painting stages form the core of the rendering process in a web browser. 
   This process can be computationally intensive, and so modern browsers use a variety of techniques to optimize the performance of layout and painting, 
   such as caching, incremental rendering, and parallelization.
   
   ![Layout and Painting](https://i.stack.imgur.com/r2AIx.png)

---
