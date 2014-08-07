forge.logging.info("LOGGING INFO");

//START TOPBAR CONFIGURATION
forge.topbar.setTitle("OPUS");

//START TABBAR CONFIGURATION
array = ["0,0,255,255"]
forge.tabbar.setTint(array);

forge.tabbar.addButton({
  icon: "images/prof_icon.png",
  text: "Profile"
}, function (button) {
  button.onPressed.addListener(function () {
    window.location="studentprofile.html";
	forge.tabbar.removeButtons();
	forge.topbar.removeButtons();
  });
});

forge.tabbar.addButton({
  icon: "images/job_icon.png",
  text: "Jobs"
}, function (button) {
  button.onPressed.addListener(function () {
    window.location="jobs.html";
	forge.tabbar.removeButtons();
	forge.topbar.removeButtons();
  });
});