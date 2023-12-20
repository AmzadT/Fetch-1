document.addEventListener("DOMContentLoaded", function() {

    var fetchUsersBtn = document.querySelector("#fetchUsersBtn");
    var userList = document.querySelector("#userList");
  
    fetchUsersBtn.addEventListener("click", function() {
      fetch("https://reqres.in/api/users?page=1")
        .then(response => response.json())
        .then(data => {
          displayUsers(data.data);
        })
        .catch(error => {
          console.error("Error Fetching Users:", error);
        });
    });
  
    function displayUsers(users) 
    {
      userList.innerHTML = "";
      users.forEach(user => {
        var userCard = document.createElement("div");
        userCard.classList.add("user-card");
  
        var avatar = document.createElement("img");
        avatar.src = user.avatar;
        avatar.alt = "Avatar";
  
        var userName = document.createElement("h3");
        userName.textContent = `${user.first_name} ${user.last_name}`;
  
        var userEmail = document.createElement("p");
        userEmail.textContent = user.email;
  
        userCard.appendChild(avatar);
        userCard.appendChild(userName);
        userCard.appendChild(userEmail);
  
        userList.appendChild(userCard);
      });

    }
});
  