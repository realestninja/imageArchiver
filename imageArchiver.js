var token = 'token';

var telegram = require('telegram-bot-api');
var bot = new telegram ({
  token: token,
  updates: {
    enabled: true,
    get_interval: 1000
  }
});

console.log('bot is running');

function setOptions(file_id) {
  var url = 'api.telegram.org';
  var path = '/bot' + token + '/getFile?file_id=' + file_id;

  var options = {
    host: url,
    path: path
  }

  console.log(options);

  return options;
}

function getFilePath(file_id) {
  var https = require('https');
  var str = '';

  var options = setOptions(file_id);

  callback = function(response) {
    response.on('data', function(chunk) {
      str += chunk;
      console.log(str);
    });
  };


  https.request(options, callback).end();

  // muss irgendwie auf async warten
  /*
  console.log('str: ' + str);
  str = JSON.parse(str);
  str = str['result']['file_path'];
  console.log('str: ' + str);
  */
}

bot.on('message', function(message) {
  var chat_id = message.chat.id;
  //var file_id;

  if (message.photo) {
    // var highestRes = message.photo.length;
    // file_id = message.photo[highestRes].file_id;
    console.log('compressed photo received.');
    console.log('file_id: ' + message.photo[4].file_id);
  } else if (message.document.mime_type) {
    file_id = message.document.file_id;
    console.log('uncompressed image received.');
    console.log('file_id: ' + file_id);
    getFilePath(file_id);
  } else {
    console.log('message received');
  }
});