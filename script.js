function showClick(newPage)
{
  document.getElementById(newPage).style.border="1px solid #d6d6d6"
  document.getElementById(newPage).style.backgroundColor="rgb(16, 16, 16)"

  document.getElementById(currentPage).style.border="1px solid rgb(16, 16, 16)"
  document.getElementById(currentPage).style.backgroundColor="#1B262C"

  currentPage=newPage;
}

function showResume()
{
  document.getElementById("resume").style.display="block"
  document.getElementById("projects").style.display="none"
  document.getElementById("contact").style.display="none"

  showClick("resume-nav");
}

function showProjects()
{
  document.getElementById("resume").style.display="none"
  document.getElementById("projects").style.display="block"
  document.getElementById("contact").style.display="none"

  showClick("projects-nav");
}

function showContact()
{
  document.getElementById("resume").style.display="none"
  document.getElementById("projects").style.display="none"
  document.getElementById("contact").style.display="block"

  showClick("contact-nav");
}

function switchMode()
{
  console.log("darkMode");

  if(darkMode == true)
  {
    document.getElementById("dark-mode").innerHTML="DARK 🌚"
  }
  else
  {
    document.getElementById("dark-mode").innerHTML="LIGHT 🌞"
  }

  darkMode = !darkMode;
}


darkMode = true;

windowWidth = window.innerWidth

document.getElementById("view-body").style.width=windowWidth/2 + "px";

document.getElementById("nav").style.marginLeft=(windowWidth/4) - 170 + "px"

currentPage = "resume-nav";
document.getElementById(currentPage).style.border="1px solid #d6d6d6"
document.getElementById(currentPage).style.backgroundColor="rgb(16, 16, 16)"
