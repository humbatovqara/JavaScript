function show() {
    var username, usernames,i;
    username = document.getElementById("username").value;
    usernames = document.getElementsByName("test");
    for (i = 0; i < usernames.length; i++)
        usernames[i].innerHTML = username;
}