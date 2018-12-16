window.onload = function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.response);
    }
  };
  xhr.open("POST", "localhost:8080/log");
  xhr.send(
    JSON.stringify({
      url: window.location.href,
      referrer: document.referrer
    })
  );
};
