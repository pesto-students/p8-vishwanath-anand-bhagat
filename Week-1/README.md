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

#### Rendering engine and its use

- Once a user requests a particular document, the rendering engine starts fetching the content of the requested document. 
    This is done via the networking layer. The rendering engine starts receiving the content of that specific document in 
    chunks of 8 KBs from the networking layer. After this, the basic flow of the rendering engine begins.
    ![Rendering engine basic flow](https://browserstack.wpenginepowered.com/wp-content/uploads/2019/11/Screenshot-2019-11-12-at-3.26.19-PM.png)
- Every browser has its own unique rendering engine. So naturally, every browser has its own way of interpreting web pages on a user’s screen.
- The primary job of a browser engine is to transform HTML documents and other resources of a web page into an interactive visual representation on a user's device.

---
