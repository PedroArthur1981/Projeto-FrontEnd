const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  document.getElementById('areadocliente').style.color = 'red';
  document.getElementById('modal').style.color = 'blue';
  document.getElementById('footer').style.backgroundColor = 'black';
  document.getElementById('rodape1').style.color = 'white';
}


// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");
  
  

  if (darkMode) {
    toggleDarkMode();
    
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();
  

  // Save or remove dark mode from localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
    document.getElementById('areadocliente').style.color = 'red';
    document.getElementById('modal').style.color = 'blue';
    document.getElementById('footer').style.backgroundColor = 'white';
    document.getElementById('rodape1').style.color = 'black';
  }
});
