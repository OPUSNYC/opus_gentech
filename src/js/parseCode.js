Parse.initialize("TPf2kF11biPfcF5yIrEKqw6rTRxjFRibGgSKy73A", "NOwE5UK4nwCEM1Irrl6h1iCSEh4tdR5FJe19ML1m");

	//HTML job form text input
	
	/* var jobType = document.getElementById('jobType').value;
	var jobName = document.getElementById('jobName').value;
	var jobCompany = document.getElementById('jobCompany').value; */

    //Parse Job Object
    var Jobs = Parse.Object.extend("jobs");
    var jobs = new Jobs();	

	
	
function jobFields() 
{
	//parse columns set to text input
    jobs.set("type", jobType);
    jobs.set("name", jobName);
    jobs.set("company", jobCompany);

    //Pushes to parse
    jobs.save(null, {
    	success: function(jobs) 
    	{
    		alert("New job saved sucessfully:" + "\n Job Type: " + jobType + " \n Name: " + jobName +" \n Company: " + jobCompany);
    	},
    	error: function(jobs, error) 
    	{
    		alert('Failed to save job ' + error.message);
    	}
    });

    this.jobQuery = function()
    {
    	var query = new Parse.Query(Jobs);
    	query.find({
    		success: function(results)
    		{
    			alert("Successfully retrieved " + results.length + " jobs.");
    			for (var i = 0; i < results.length; i++) 
    			{
    				var listJob = results[i];
    				alert(listJob.id + ' - ' + listJob.get('company'));
    			}	
    		},

    		error: function(error)
    		{
    			alert("Error: " + error.code + " " + error.message);
    		}
    	});

    	alert("CAN QUERY!!");
    }
    jobQuery();
}

function signUp()
{
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
    var reEnter = document.getElementById('reEnter').value;

    user.set("firstName", firstName);
    user.set("lastName", lastName);
    user.set("birth", birth);
    user.set("school", school);
    user.set("phone", phone);
    user.set("username", email);
    user.set("email", email);
    user.set("password", password);

    // START Profile Picture upload
    var fileData = {base64: globalString};
    var parseFile = new Parse.File('photo.jpg', fileData, 'image/jpg');

    parseFile.save().then(function() {
        //alert('File saved to parseFile!'); 
    }, function(error) {
        alert('Could not save: ' + error);
    });

    user.set("profilePic", parseFile);
    // END Profile Picture upload

    if(password == reEnter)
    {
        user.signUp(null, {
          success: function(user) 
          {
            alert('Signup successful!');
			window.location.assign('studentprofile.html');
          },
          error: function(user, error) 
          {
            alert("Error: " + error.code + " " + error.message);
          } 
        });
    }
    else
    {
        alert('Passwords do not match. Please try again.');
    }
}

// for edit profile 
function update()
{
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
    var reEnter = document.getElementById('reEnter').value;

    user.set("firstName", firstName);
    user.set("lastName", lastName);
    user.set("birth", birth);
    user.set("school", school);
    user.set("phone", phone);
    user.set("username", email);
    user.set("email", email);
    user.set("password", password);
}

/*var query = new Parse.Query(users);
query.equalTo();
query.find({
	success: function(results) {
		for (var i = 0; i < results.length; i++) { 
			var object = results[i];
			alert("Success");
			} 
			}});
*/
		
        //RESERVED FOR BROWSER FUNCTIONALITY	
// function uploadPic()
// {
//     var user = new Parse.User();
// 	//Uploading photo to parse
//     var fileUpload = $("#profilePhoto")[0];
//     if (fileUpload.files.length > 0) 
//     {
//       var file = fileUpload.files[0];
//       var name = "photo.jpg";
//       var parseFile = new Parse.File(name, file);
//     }

//     parseFile.save().then(function() {
//       //alert('File uploaded!'); 
//     }, function(error) {
//       alert('The file either could not be read, or could not be saved to Parse');
//     });
//     user.set("profilePic", parseFile);
//     //Pushes photo to parse
//     user.save(null, {
//         success: function(user) 
//         {
//             //alert("Photo saved!"); 
//         },
//         error: function(user, error) 
//         {
//             alert('Failed to save photo ' + error.message);
//         }
//     });
// }


//for index.html (Logging in)
function logIn()
{
    var user = new Parse.User();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    Parse.User.logIn(email, password, {
      success: function(user) {
        window.location.assign('studentprofile.html');
         // Do stuff after successful login.
        },
      error: function(user, error) {
        alert("Login Failed \n Incorrect email or password");
        document.getElementById('login').href='#';
        // The login failed. Check error to see why.
        }
    });
}



//Adding jobs to table
function addRow(content0,content1,content2)
{
	  if (!document.getElementsByTagName) return;
	  tabBody=document.getElementsByTagName("tbody").item(0);
	  row=document.createElement("tr");

	  cell1 = document.createElement("td");
	  cell2 = document.createElement("td");
	  cell3 = document.createElement("td");

	  textnode1=document.createTextNode(content0);
	  textnode2=document.createTextNode(content1);
	  textnode3=document.createTextNode(content2);

	  cell1.appendChild(textnode1);
	  cell2.appendChild(textnode2);
	  cell3.appendChild(textnode3);

	  row.appendChild(cell1);
	  row.appendChild(cell2);
	  row.appendChild(cell3);

	  tabBody.appendChild(row);
}
// http://stackoverflow.com/questions/6280495/populate-html-table-using-javascript 
