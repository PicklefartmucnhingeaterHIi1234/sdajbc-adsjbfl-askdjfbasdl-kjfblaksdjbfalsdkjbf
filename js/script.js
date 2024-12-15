var textarea = $('.term');

var i = 0;
var count = 0;

var start = 'enact.lol'
var data = [
  './enact.lol',
  'enact',
  '********',
  'Yes\n',
  'enact',
  'enact',
  'enact',
  'enact@meowb.in\n\n',
]

var info = [
  "Please state the user you would like to add > ",
  "Please set the password for 'enact123' > ",
  "Shall we create a home directory for 'enact' > ",
  "Directory Created, time for your socials!\n\nPlease state your Telegram username, if none put 'N/A' > ",
  "Please state your Discord username, if none put 'N/A' > ",
  "Please state your Doxbin username, if none put 'N/A' > ",
  "Please state your Email, if none put 'N/A' > ",
];

runner(start)
 
function runner(text) {
  if (text) textarea.append(`<span style="color: #FF69B4;">` + text.charAt(i) + `</span>`)

  i++;
  setTimeout(
    function() {
      if (i < text.length) {
        runner(text);
      } else {
        // textarea.append("</span>")
        textarea.append("<br>")
        i = 0;
        textarea.append(info[count])
        count++;
        runner(data[count])
        if (count >= data.length) {
          setTimeout(function() {feedbacker();}, 650);
        }
      }
    }, Math.floor(Math.random() * 80) + 55)
}

var count = 0;
var time = 1;

function feedbacker() {
  textarea.append("[" + count / 1000 + "] " + output[i] + "<br>");
  if (time % 2 == 0) {
    i++;
    textarea.append("[" + count / 1000 + "] " + output[i] + "<br>");
  }
  if (time == 3) {
    i++;
    textarea.append("[" + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[" + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[" + count / 1000 + "] " + output[i] + "<br>");
  }
  window.scrollTo(0, document.body.scrollHeight);  
  i++;
  time = Math.floor(Math.random() * 4) + 1;
  count += time;
  setTimeout(
    function() {
      if (i < output.length - 2)
        feedbacker();
      else {
        textarea.append("<br>Initialising...<br>");
        setTimeout(function() {$(".load").fadeOut(2000);}, 1000);
      }
    },time);
}

var output = [
  "\nInformation complete! Initializing database.",
  "debug: Creating user account 'enact'",
  "debug: Setting user account password",
  "debug: Creating user home directory, /home/enact",
  "debug: Granting sudo privileges to user 'enact'",
  "debug: Setting telegram account name 'EN1CT'",
  "debug: Setting Discord username 'en1ct'",
  "debug: Setting Doxbin username 'enact'",
  "debug: Setting email address 'enact@meowb.in'",
  "debug: Account initialized!"
];
