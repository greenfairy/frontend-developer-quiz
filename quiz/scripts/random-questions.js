


   function randomQuestion(){


   var QA  = [ {question: "What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?",
                answer:"",
                type:"General"},
                {question: "Which version control systems are you familiar with?",
                answer:"",
                type:"General"},
                {question:"Can you describe your workflow when you create a web page?",
                answer:"",
                type:"General"},
                {question:"If you have 5 different stylesheets, how would you best integrate them into the site?",
                answer:"",
                type:"General"},
                {question:"Can you describe the difference between progressive enhancement and graceful degradation?",
                answer:"",
                type:"General"},
                {question:"How would you optimize a website's assets/resources?",
                answer:"",
                type:"General"},
                {question:"How many resources will a browser download from a given domain at a time?",
                answer:"",
                type:"General"},
                {question:"What are the exceptions?",
                answer:"",
                type:"General"},
                {question:"Name 3 ways to decrease page load (perceived or actual load time).",
                answer:"",
                type:"General"},
                {question:"If you jumped on a project and they used tabs and you used spaces, what would you do?",
                answer:"",
                type:"General"},
                {question:"Describe how you would create a simple slideshow page.",
                answer:"",
                type:"General"},
                {question:"If you could master one technology this year, what would it be?",
                answer:"",
                type:"General"},
                {question:"Explain the importance of standards and standards bodies.",
                answer:"",
                type:"General"},
                {question:"What is Flash of Unstyled Content? How do you avoid FOUC?",
                answer:"",
                type:"General"},
                {question:"Explain what ARIA and screenreaders are, and how to make a website accessible.",
                answer:"",
                type:"General"},
                {question:"Explain some of the pros and cons for CSS animations versus JavaScript animations.",
                answer:"",
                type:"General"},
                {question:"What does CORS stand for and what issue does it address?",
                answer:"",
                type:"General"},
                {question:"What does a doctype do?",
                answer:"",
                type:"HTML"},
                {question:"What's the difference between standards mode and quirks mode?",
                answer:"",
                type:"HTML"},
                {question:"What's the difference between HTML and XHTML?",
                answer:"",
                type:"HTML"},
                {question:"Are there any problems with serving pages as application/xhtml+xml?",
                answer:"",
                type:"HTML"},
                {question:"How do you serve a page with content in multiple languages?",
                answer:"",
                type:"HTML"},
                {question:"What kind of things must you be wary of when design or developing for multilingual sites?",
                answer:"",
                type:"HTML"},
                {question:"What are data - attributes good for?",
                answer:"",
                type:"HTML"},
                {question:"Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
                answer:"",
                type:"HTML"},
                {question:"Describe the difference between a cookie, sessionStorage and localStorage.",
                answer:"",
                type:"HTML"},
                {question:"Describe the difference between <script>, <script async> and <script defer>.",
                answer:"",
                type:"HTML"},
                {question:"Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?",
                answer:"",
                type:"HTML"},
                {question:"What is progressive rendering?",
                answer:"",
                type:"HTML"},
                {question:"Have you used different HTML templating languages before?",
                answer:"",
                type:"HTML"},
               ];

        var questions = new Array(20);
        for (i=0; i<20; i++){
            questions[i] = QA[Math.floor((Math.random() * QA.length) - 1 )];
        }
        return questions;
   }

function renderRandomQuestions()
{
    var questions = randomQuestion();
    var divs = new Array(40);

    for (i=0; i<40; i++)
    {
        divs[i] = document.createElement("div");
        divs[i].className = "question";
        divs[i].innerHTML = questions[i].question;
        i++;
        divs[i] = document.createElement("div");
        divs[i].className = "answer";
        divs[i].innerHTML = questions[i].answer;
    } 

}