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

---
