//story1
var postTimestamp = new Date('2024-07-10T21:41:00'); // 

document.getElementById("story1").innerHTML = (timeSincePost(postTimestamp));

//story2
var postTimestamp = new Date('2024-07-10T21:42:00'); // 

document.getElementById("story2").innerHTML = (timeSincePost(postTimestamp));

//story3
var postTimestamp = new Date('2024-07-10T21:43:00'); // 

document.getElementById("story3").innerHTML = (timeSincePost(postTimestamp));


//story4
var postTimestamp = new Date('2024-07-11T05:43:00'); // 

document.getElementById("story4").innerHTML = (timeSincePost(postTimestamp));

/*--CODE BREAK--*/

//function to download multiple files
function downloadFiles(fileUrls) {
  fileUrls.forEach(function(url) {
    var link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.click();
  });
}
//end function

//multiple files
var filesToDownload1 = [
  'pictureStory1.jpg',
  'pictureStory2.jpg',
  'pictureStory3.jpg',
  'pictureStory4.jpg'
];

/*function to control multiple files 0*/
$(document).ready(function() 
{ 
$("#myCarousel").carousel( 
{ 
interval: false 
}); 
}); 
/*end function to control multiple files 0*/

/*----------CODE BREAK---------*/

//function to calculate time content was uploaded
	 function timeSincePost(postTimestamp) {
  var seconds = Math.floor((new Date() - postTimestamp) / 1000);

  var interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 604800);
  if (interval > 1) {
    return interval + " weeks ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}
//End function to calculate time content was uploaded