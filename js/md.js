window.onload = function() {
  document.addEventListener("keyup", function() {
    document.getElementById('polymermd').markdown = document.getElementById('md1').value;
  });
};
