Parse.initialize("TPf2kF11biPfcF5yIrEKqw6rTRxjFRibGgSKy73A", "NOwE5UK4nwCEM1Irrl6h1iCSEh4tdR5FJe19ML1m");

	//HTML job form text input
	var jobType = document.getElementById('jobType').value;
	var jobName = document.getElementById('jobName').value;
	var jobCompany = document.getElementById('jobCompany').value;

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
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    alert(birth);

    phone = parseInt(phone);

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
        alert('Signup sucessful!');
      },
        error: function(user, error) 
      {
        alert("Error: " + error.code + " " + error.message);
      } 
    });
}

function test()
{
    alert("WORKING");
}

// function testing()
// {
// 	var txt = 'HALLO';
// }

// function printTest()
// {
// 	alert('PrintTest');
// 	alert(txt);
// }


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
