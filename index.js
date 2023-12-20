document.addEventListener("DOMContentLoaded", function() {

    var userDataForm = document.querySelector("#userDataForm");
    var retrieveDataBtn = document.querySelector("#retrieveDataBtn");
    var displayArea = document.querySelector("#displayArea");
    var userDataTable = document.querySelector("#userDataTable");
  
    userDataForm.addEventListener("submit", function(event) {

      event.preventDefault();
      var name = document.querySelector("#name").value;
      var age = document.querySelector("#age").value;
  
      if (name && age) 
      {
        var userData = {
          name: name,
          age: age
        };
  
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Data Stored Successfully!");
      } 
      else 
      {
        alert("Please Enter Both Name and Age.");
      }

    });
  
    retrieveDataBtn.addEventListener("click", function() {

      var storedData = localStorage.getItem("userData");
  
      if (storedData) 
      {
        var userData = JSON.parse(storedData);
        displayStoredData(userData);
      } 
      else 
      {
        alert("No Data Found in Local Storage.");
      }

    });
  
    function displayStoredData(userData) {

      displayArea.style.display = "block";
      userDataTable.innerHTML = `
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>${userData.name}</td>
          <td>${userData.age}</td>
        </tr>
      `;
    }

  });
  