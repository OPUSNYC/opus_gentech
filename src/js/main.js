forge.logging.info("AWESHUM SAUCHE");

//choose colors for tabbar and topbar
var color1 = [0,108,204,255];
var color2 = [0,0,0,255];

//START TOPBAR CONFIGURATION
forge.topbar.setTitle("OPUS");
//forge.topbar.setTitleImage("images/logo strong.png");
forge.topbar.setTint(color1);

//START TABBAR CONFIGURATION
forge.tabbar.setTint(color2);

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
