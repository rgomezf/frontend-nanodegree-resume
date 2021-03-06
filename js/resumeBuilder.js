var work = {
	"jobs": [
	{
     "employer": "Saviorlabs",
     "position": "Technology Associate",
     "location": "Boxford, MA, US",
     "dates": "Oct 2015 - Present",
     "description": "Editing content for clients webpages.",
     "locUrl": "https://en.wikipedia.org/wiki/Boxford,_Massachusetts"
    },
    {
     "employer": "Envases Antillanos",
     "position": "Software Engineer",
     "location": "Santiago, Santiago, Dom. Rep.",
     "dates": "Sep 2011 - Jul 2015",
     "description": "Development of applications and reports.",
     "locUrl" : "https://en.wikipedia.org/wiki/Santiago_de_los_Caballeros"
    },
    {
     "employer": "Onemax",
     "position": "Information Manager",
     "location": "Santo Domingo, Santo Domingo, Dom. Rep.",
     "dates": "Oct 2010 – Jan 2011",
     "description": "Development of BI reports.",
     "locUrl" : "https://en.wikipedia.org/wiki/Santo_Domingo"
     }
   ]
};

var projects = {
	"online": [
     {
       "pTitle": "Nano-degree in Front-Web Development",
       "dates": "2015",
       "description": "This year I'll get this Nano-degree and be the best.",
       "images": ["images/my-first-website6.jpg","images/websitebuilder.jpg"]//,"images/Website_Building.jpg"]
     }
    ]
};

var bio = {
   "name" : "Ramon Gomez",
   "role" : "Front-Web Developer",
   "welcomeMsg" : "Greetings.  This is a page with my Resume.",
   "contacts" : {
   "mobile" : "978-641-8709",
   "email"  : "gomez.ramonant@gmail.com",
   "GitHub" : "rgomezf",
   "location" : "Salem"
   },

   "skills"  : ["JS", "HTML/CSS", "Bootstrap", "PL/SQL",
              "SQL", "Git/GitHub"],
   "bioPic" : "images/portfolio.jpg",
   "locUrl" : "https://en.wikipedia.org/wiki/Santiago_de_los_Caballeros"
};

var education = {
    "schools": [
     {
      "name": "PUCMM",
      "location": "Santiago, Santiago, D. R.",
      "degree": "BA",
      "major": "CompSci",
      "dates": 1999,
      "url": "http://www.pucmm.edu.do",
      "locUrl" : "https://en.wikipedia.org/wiki/Santo_Domingo"
     }
    ],

    "onlineCourses": [
       {
        "title": "XML Language Basics",
        "school": "Skillsoft Online",
        "dates": "2015",
        "url": "http://www.skillsoft.com/catalog/detail.asp?CourseCode=wd_xmle_a01_it_enus"
       },
       {
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
       },
       {
        "title": "Ruby",
        "school": "Codecademy",
        "dates": "2015",
        "url": "https://www.codecademy.com/learn/ruby"
       }
    ]
};

work.display = function () {

    for(var job = 0; job < work.jobs.length; job++) {

       $("#workExperience").append(HTMLworkStart);

       var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
       var formattedPosition  = HTMLworkTitle.replace("%data%",work.jobs[job].position);
       var formattedEmployerTitle = formattedEmployer + ' ' + formattedPosition;
       var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
       var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
       var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

       $(".work-entry:last").append(formattedEmployerTitle);
       $(".work-entry:last").append(formattedDates);
       $(".work-entry:last").append(formattedLocation);
       $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function () {

   for(var prj = 0; prj < projects.online.length; prj++) {
      $("#projects").append(HTMLprojectStart);

      var formattedpTitle = HTMLprojectTitle.replace("%data%", projects.online[prj].pTitle);
      var formattedpDates = HTMLprojectDates.replace("%data%", projects.online[prj].dates);
      var formattedpDscr  = HTMLprojectDescription.replace("%data%", projects.online[prj].description);

      $(".project-entry:last").append(formattedpTitle);
      $(".project-entry:last").append(formattedpDates);
      $(".project-entry:last").append(formattedpDscr);

      for(var img = 0; img < projects.online[prj].images.length; img++) {
         var formattedImg = HTMLprojectImage.replace("%data%", projects.online[prj].images[img]);
         $(".project-entry:last").append(formattedImg);
      }
    }
};

education.display = function () {

   for(var edu = 0; edu < education.schools.length; edu++) {
      var formattedSName = HTMLschoolName.replace("%data%",education.schools[edu].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
      var formattedSTitle = formattedSName + formattedDegree;
      var formattedMayor = HTMLschoolMajor.replace("%data%",education.schools[edu].major);
      var formattedSDates = HTMLschoolDates.replace("%data%",education.schools[edu].dates);
      var formattedSLocation = HTMLschoolLocation.replace("%data%",education.schools[edu].location);

      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedSTitle);
      $(".education-entry:last").append(formattedSDates);
      $(".education-entry:last").append(formattedSLocation);
      $(".education-entry:last").append(formattedMayor);
   };

   $(".education-entry:first").append(HTMLonlineClasses);

   for(var onC = 0; onC < education.onlineCourses.length; onC++) {
       var formattedOTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onC].title);
       var formattedOSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onC].school);
       var formattedODate = HTMLonlineDates.replace("%data%", education.onlineCourses[onC].dates);
       var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onC].url);
       var formattedOT = formattedOTitle + formattedOSchool;

       $(".education-entry:last").append(formattedOT);
       $(".education-entry:last").append(formattedODate);
       $(".education-entry:last").append(formattedUrl);
   };
};

bio.display = function (){

   var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
   var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
   var formattedPic  = HTMLbioPic.replace("%data%", bio["bioPic"]);
   var formattedMsg  = HTMLwelcomeMsg.replace("%data%", bio["welcomeMsg"]);
   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
   var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
   var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts["GitHub"]);
   var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);

   $("#topContacts").prepend(formattedLocation);
   $("#topContacts").prepend(formattedGitHub);
   $("#topContacts").prepend(formattedEmail);
   $("#topContacts").prepend(formattedMobile);
   $("#footerContacts").prepend(formattedLocation);
   $("#footerContacts").prepend(formattedGitHub);
   $("#footerContacts").prepend(formattedEmail);
   $("#footerContacts").prepend(formattedMobile);
   $("#header").prepend(formattedRole);
   $("#header").prepend(formattedName);
   $("#header").append(formattedPic);
   $("#header").append(bio.welcomeMsg);

   if(bio.skills.length > 0) {
     $("#header").append(HTMLskillsStart);
   }

   for(skill = 0; skill < bio.skills.length; skill++) {
       var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
       $("#skills").append(formattedSkills);
   }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);