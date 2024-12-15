var textarea = $('.term');

var i = 0;
var count = 0;

var start = 'milo.lol'
var data = [
  './milo.lol',
  'milo',
  '********',
  'Yes\n',
  'milo',
  'milo',
  'milo',
  'milo@meowb.in\n\n',
]

var info = [
  "Please state the user you would like to add > milo",
  "Please set the password for 'milo123' > X$u50sF2#?$p>z*<->1?",
  "Shall we create a home directory for 'milo' > yes ",
  "Directory Created, time for your socials!\n\nPlease state your Telegram username, if none put N/A > meeeeoowwwwwwwww ",
  "Please state your Discord username, if none put 'N/A' > ihatemilo ",
  "Please state your Doxbin username, if none put 'N/A' > fwm ",
  "Please state your Email, if none put 'N/A' > milo@victim.wtf ",
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
  "debug: Creating user account 'milo'",
  "debug: Setting user account password",
  "debug: Creating user home directory, /home/milo",
  "debug: Granting sudo privileges to user 'milo'",
  "debug: Setting telegram account name 'meeeeoowwwwwwwww'",
  "debug: Setting Discord username 'ihatemilo'",
  "debug: Setting Doxbin username 'fwm'",
  "debug: Setting email address 'milo@victim.wtf'",
  "debug: Account initialized!"
];
