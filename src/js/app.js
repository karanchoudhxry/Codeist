window.onload = function () {
    window.editorHTML = ace.edit("HTML");
    window.editorCSS = ace.edit("CSS");
    window.editorJS = ace.edit("JS");
    editorHTML.setTheme("ace/theme/nord_dark");
    editorCSS.setTheme("ace/theme/nord_dark");
    editorJS.setTheme("ace/theme/nord_dark");
    editorHTML.session.setMode("ace/mode/markdown");
    editorCSS.session.setMode("ace/mode/css");
    editorJS.session.setMode("ace/mode/javascript");
    editorHTML.session.setUseWrapMode(true);
    editorCSS.session.setUseWrapMode(true);
    editorJS.session.setUseWrapMode(true);
    editorHTML.setShowPrintMargin(false);
    editorCSS.setShowPrintMargin(false);
    editorJS.setShowPrintMargin(false);
  
    editorHTML.getSession().on("change", function () {
      update();
    });
    editorCSS.getSession().on("change", function () {
      update();
    });
    editorJS.getSession().on("change", function () {
      update();
    });
    if (localStorage.getItem("weber-html-code-lc-store") != null) {
      editorHTML.setValue(localStorage.getItem("weber-html-code-lc-store"), 1);
      editorCSS.setValue(localStorage.getItem("weber-css-code-lc-store"), 1);
      editorJS.setValue(localStorage.getItem("weber-js-code-lc-store"), 1);
    } else {
      editorHTML.setValue(
        `<!DOCTYPE html>
    <html>
        <head>
            <title>Title</title>
        </head>
    
        <body>
    
        </body>
    
    </html>`,
        1
      );
      editorCSS.setValue(
        `body{
          
    }`,
        1
      );
      editorJS.setValue(
        `//Javascript goes here
      `,
        1
      );
    }
    function update() {
      document
        .querySelector(".output")
        .parentNode.removeChild(document.querySelector(".output"));
      var eleme = document.createElement("iframe");
      eleme.className = "output";
      document.querySelector(".container").appendChild(eleme);
      let output = document.querySelector(".output").contentWindow.document;
      document.querySelector(".output").innerHTML = "";
      document.querySelector(".output").contentWindow.location.reload(true);
      output.open();
      output.write(
        "<style>" +
          editorCSS.getValue() +
          "</style>" +
          editorHTML.getValue() +
        "<script>" +
          editorJS.getValue() +
          "</script>"
      );
      output.close();
    }
  };
  
  window.addEventListener("keyup", (e) => {
    localStorage.setItem("weber-html-code-lc-store", editorHTML.getValue());
    localStorage.setItem("weber-css-code-lc-store", editorCSS.getValue());
    localStorage.setItem("weber-js-code-lc-store", editorJS.getValue());
  });
 
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

document.getElementsByClassName("reset").addEventListener('click', resetCode)
function resetCode(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, reset it!'
  }).then((result) => {
    if (result.isConfirmed) {
      window.localStorage.removeItem('weber-html-code-lc-store');
      window.localStorage.removeItem('weber-css-code-lc-store');
      window.localStorage.removeItem('weber-js-code-lc-store');
      location.reload();
    }
  })
}

var day = document.getElementById("#day");
var night = document.getElementById("#night");

day.addEventListener('click', toggleDay())

function toggleDay(){
  editorHTML.setTheme("ace/theme/chrome");
  editorCSS.setTheme("ace/theme/chrome");
  editorJS.setTheme("ace/theme/chrome");
}

night.addEventListener('click',toggleNight())

function toggleNight(){
  editorHTML.setTheme("ace/theme/nord_dark");
  editorCSS.setTheme("ace/theme/nord_dark");
  editorJS.setTheme("ace/theme/nord_dark");
}
