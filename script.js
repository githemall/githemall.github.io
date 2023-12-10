function showImage(id) {
  var popup = document.getElementById(id);
  popup.style.display = 'block';
}

function closePopup(id) {
  var popup = document.getElementById(id);
  popup.style.display = 'none';
}

function showDetail(id) {
  document.getElementById(id).style.display = 'block';
}

function closeDetail(id) {
  document.getElementById(id).style.display = 'none';
}