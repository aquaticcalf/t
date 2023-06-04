
const first = document.querySelector(".first");
const iframe = document.querySelector("iframe");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  run();
});

first.addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
    });


document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "Enter") {
        run();
    }
});

function run() {
    var html = first.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
}


const preElement = document.querySelector(".first pre");


const htmlCode = `<!DOCTYPE html>
<html>
    <head>
        <style>
            // css here
        </style>
    </head>
    <body>
        hello, world!
        <!-- html here -->
        <script>
            // js here
        </script>
    </body>
</html>`;


preElement.textContent = htmlCode;

