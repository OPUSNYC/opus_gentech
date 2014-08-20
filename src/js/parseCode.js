Parse.initialize("TPf2kF11biPfcF5yIrEKqw6rTRxjFRibGgSKy73A", "NOwE5UK4nwCEM1Irrl6h1iCSEh4tdR5FJe19ML1m");

	//HTML job form text input
	
	/* var jobType = document.getElementById('jobType').value;
	var jobName = document.getElementById('jobName').value;
	var jobCompany = document.getElementById('jobCompany').value; */

    //Parse Job Object
    var Jobs = Parse.Object.extend("jobs");
    var jobs = new Jobs();	

	getJobs();
	
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

//For testing
function testFunc()
{
    var hello = 'hello';
}

function testFunc2(hello)
{
    alert(hello);
}

// http://stackoverflow.com/questions/6280495/populate-html-table-using-javascript 
