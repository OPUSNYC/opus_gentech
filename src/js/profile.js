Parse.initialize("TPf2kF11biPfcF5yIrEKqw6rTRxjFRibGgSKy73A", "NOwE5UK4nwCEM1Irrl6h1iCSEh4tdR5FJe19ML1m");

//Parse user functionality
function users()
{
    //parse user object
    var user = new Parse.User();

    //HTML user account info input
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
	var birthMonth = document.getElementById('birthMonth').value - 1;
    var birthDay = document.getElementById('birthDay').value; 
    var birthYear = document.getElementById('birthYear').value;  
       var birth = new Date(birthYear, birthMonth, birthDay) 

    var school = document.getElementById('school').value;

    var phone = document.getElementById('phone').value;
        phone = parseInt(phone);

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

	user.set("firstName", firstName);
    user.set("lastName", lastName);
    user.set("birth", birth);
    user.set("school", school);
    user.set("phone", phone);
    user.set("username", email);
    user.set("email", email);
    user.set("password", password);

    user.signUp(null, {
      success: function(user) 
      {
        alert('Signup successful!');
      },
        error: function(user, error) 
      {
        alert("Error: " + error.code + " " + error.message);
      } 
    });

    
	//Uploading photo to parse
    var fileUpload = $("#profilePhoto")[0];
    if (fileUpload.files.length > 0) 
    {
      var file = fileUpload.files[0];
      var name = "photo.jpg";
     
      var parseFile = new Parse.File(name, file);
    }

    parseFile.save().then(function() {
      //alert('File uploaded!'); too many popups
    }, function(error) {
      alert('The file either could not be read, or could not be saved to Parse');
    });

    user.set("profilePic", parseFile);

    //Pushes to parse
    user.save(null, {
        success: function(user) 
        {
            //alert("Photo saved!"); too many popups
        },
        error: function(user, error) 
        {
            alert('Failed to save photo ' + error.message);
        }
    });

}


var query = new Parse.Query(users);
query.equalTo();
query.find({
	success: function(results) {
		for (var i = 0; i < results.length; i++) { 
			var object = results[i];
			if (!document.getElementsByTagName) return;
			tabBody=document.getElementsByTagName("tbody").item(0);
			} 
			}});