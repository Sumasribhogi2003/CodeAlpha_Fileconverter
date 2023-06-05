// Get file input element
var fileInput = document.getElementById("fileInput");

// Get result element
var result = document.querySelector(".result");

// Add event listener to convert button
document.getElementById("convertButton").addEventListener("click", convertToJSON);

function convertToJSON() {
  var file = fileInput.files[0];

  if (file) {
    var reader = new FileReader();

    reader.onload = function(e) {
      var contents = e.target.result;
      var lines = contents.split("\n");
      var jsonData = {};

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line !== "") {
          var parts = line.split(":");
          var key = parts[0].trim();
          var value = parts[1].trim();

          jsonData[key] = value;
        }
      }

      result.innerHTML = "<pre>" + JSON.stringify(jsonData, null, 2) + "</pre>";
    };

    reader.readAsText(file);
  }
}
