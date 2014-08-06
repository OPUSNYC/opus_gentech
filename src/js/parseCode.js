Parse.initialize("TPf2kF11biPfcF5yIrEKqw6rTRxjFRibGgSKy73A", "NOwE5UK4nwCEM1Irrl6h1iCSEh4tdR5FJe19ML1m");

//Parse Test Object
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("This message indicates parse.js runs. Check online for confirmation");
});



//Get input from HTML
function jobFields() 
{
	var jobType = document.getElementById('jobType').value;
	var jobName = document.getElementById('jobName').value;
	var jobCompany = document.getElementById('jobCompany').value;

    //Parse Job Object
	var Jobs = Parse.Object.extend("jobs");
    var jobs = new Jobs();

    jobs.set("type", jobType);
    jobs.set("name", jobName);
    jobs.set("company", jobCompany);

    jobs.save(null, {
	  success: function(jobs) 
	  {
	    alert("New job saved sucessfully:" + "\n Job Type: " + jobType + " \n Name: " + jobName +" \n Company: " + jobCompany);
	    addRow(jobType, jobName, jobCompany);
	  },
	  error: function(jobs, error) 
	  {
	    alert('Failed to save job ' + error.message);
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

<!-- http://stackoverflow.com/questions/6280495/populate-html-table-using-javascript -->
