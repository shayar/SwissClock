/** Our wonderfull little clock **/
class CreateClock {

  /**
   * Clock initialization
   */
  constructor(id, timeZone) {
    this.id = id;
    this.timeZone = timeZone;
    this.sound = new Audio("data:audio/wav;base64,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");
    this.hourHand = document.querySelector(this.id + ' .hour.hand', );
    this.minuteHand = document.querySelector(this.id + ' .minute.hand');
    this.secondHand = document.querySelector(this.id + ' .second.hand');
    this.timer();

    setInterval(() => this.timer(), 1000);
  }
  now() {
    var now = new Date();
    var utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000 * this.timeZone));
    // console.log(nd);
    return nd;

  }

  /**
   * Timer of the clock
   */
  timer() {
    this.sethandRotation('hour');
    this.sethandRotation('minute');
    this.sethandRotation('second');
  }

  /**
   * Changes the rotation of the hands of the clock
   * @param  {HTMLElement} hand   One of the hand of the clock
   * @param  {number}      degree degree of rotation of the hand
   */
  sethandRotation(hand) {
    let date = this.now(),
      hours, minutes, seconds, percentage, degree;

    switch (hand) {
      case 'hour':
        hours = date.getHours();
        hand = this.hourHand;
        percentage = this.numberToPercentage(hours, 12);
        break;
      case 'minute':
        minutes = date.getMinutes();
        hand = this.minuteHand;
        percentage = this.numberToPercentage(minutes, 60);
        break;
      case 'second':
        seconds = date.getSeconds();
        hand = this.secondHand;
        percentage = this.numberToPercentage(seconds, 60);
        // this.sound.play();
        break;
    }

    degree = this.percentageToDegree(percentage);
    hand.style.transform = `rotate(${degree}deg) translate(-50%, -50%)`;
  }

  /**
   * Converting a number to a percentage
   * @param  {number} number Number
   * @param  {number} max    Maximum value of the number
   * @return {number}        Return a percentage
   */
  numberToPercentage(number = 0, max = 60) {
    return (number / max) * 100;
  }

  /**
   * Converting a percentage to a degree
   * @param  {number} percentage Percentage
   * @return {number}            Return a degree
   */
  percentageToDegree(percentage = 0) {
    return (percentage * 360) / 100;
  }

}

function clockCreater(id, timezone) {
  var clock = $(".clock:nth-child(1)").clone();
  $(clock).removeAttr("id");
  $(clock).attr("id", id);
  $(clock).find("span").remove();
  $(clock).append("<span>" + id + "</span>");
  $(clock).append("<label style='display:none;'>" + timezone + "</label>");
  $(".clock").parent().append(clock);
  let t = new CreateClock("#" + id, timezone);
  $(".clock").parent().sortable();
}

function addUrl(id, timezone) {

  var newUrl = 'http://' + window.location.host;

  var urlParams = new URLSearchParams(location.search);
  var zoneUrlId = urlParams.getAll('zones');
  zoneUrlId.push(id);
  var timeZone = urlParams.getAll('timeZone');
  timeZone.push(timezone);

  newUrl = newUrl + '?zones=' + zoneUrlId.join(',') + '&timeZone=' + timeZone.join(',');
  var para = decodeURIComponent(newUrl);

  history.pushState({}, null, para);
}

// function deleteUrl(id,timezone){

//   var newUrl = 'http://' + window.location.host;

//   var urlParams = new URLSearchParams(location.search);
//   var zoneUrlId = urlParams.getAll('zones');
//   var timeZone = urlParams.getAll('timeZone');
//   zoneUrlId[0].split(',');
//   timeZone[0].split(',');
//   console.log(zoneUrlId);
//   zoneUrlId.pop(id);

//   timeZone.pop(timezone);

//   newUrl = newUrl +'?zones=' + zoneUrlId.join(',')+'&timeZone=' + timeZone.join(',');
//   var para = decodeURIComponent(newUrl);

//   history.pushState({},null,para);
// }

$(document).ready(function () {

  //timezones
  var timezones = {
    nepal: {
      id: "Nepal",
      timezone: 5.75
    },
    london: {
      id: "London",
      timezone: 0
    },
    newyork: {
      id: "New-York",
      timezone: -5
    },
    pak: {
      id: "Pakistan",
      timezone: 5
    },
    aus: {
      id: "Australia",
      timezone: 11
    },
    ind: {
      id: "India",
      timezone: 5.30
    },
    arab: {
      id: "Arabic",
      timezone: 3
    },
    cambodia: {
      id: "Cambodia",
      timezone: 7
    },
    china: {
      id: "China",
      timezone: 8
    },
    hongkong: {
      id: "Hong Kong",
      timezone: 8
    }
  };


  var allTime = [];
  for (var key in timezones) {
    allTime.push(timezones[key]);
  };

  var urlParams = new URLSearchParams(location.search);
  var urlZones = urlParams.getAll('zones');
  var urlZonesValue = urlParams.getAll('timeZone');
  console.log(urlZones);
  console.log(urlZonesValue);

  if (urlZones.length != 0) {
    var arrZones = urlZones[0].split(',');
    var arrZonesValue = urlZonesValue[0].split(',');
    var arr = [];
    for (var p = 0; p < arrZones.length; p++) {
      arr.push({
        'name': arrZones[p],
        'value': parseInt(arrZonesValue[p])
      });
      var n = arr[p];
       clockCreater(n.name, n.value);
    }

  } else {
    // //default time zones
    // var defaultTimeZones = {
    //   nepal: {
    //     id: 'Nepal',
    //     timezone: 5.75
    //   },
    //   london: {
    //     id: 'London',
    //     timezone: 0
    //   },
    //   newyork: {
    //     id: 'New-York',
    //     timezone: -5
    //   }
    // };

    var defaultSelectedTimeZones = [];
    for (var item = 0; item < 3; item++) {
      defaultSelectedTimeZones.push(allTime[item]);
    };
    for(var item = 0;item<3;item ++){
      allTime.shift();
    }  
    for (var z = 0; z < 3; z++) {
      var m = defaultSelectedTimeZones[z];
      clockCreater(m.id, m.timezone);
    }

  }

  $("#myBtn").hide();
  $(".delete").hide();
  $(".share-bar").hide();
  var a = null;
  var b = null;
  var c = null;
  $("html").mousemove(function () {
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
    $("#myBtn").show();
    $(".delete").show();
    $(".share-bar").show();
    a = setTimeout('$("#myBtn").hide();', 10000);
    b = setTimeout('$(".delete").hide();', 10000);
    c = setTimeout('$(".share-bar").hide()', 10000);
  }).mouseleave(function () {
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
    $("#myBtn").hide();
    $(".delete").hide();
    $(".share-bar").hide();
  });

  //dropdown options
   for (y = 0; y < allTime.length; y++) {
     var l = allTime[y];
     var data = '<option id="' + l.id + '" name="' + l.id + '" value="' + l.timezone + '">' + l.id + '</option>';
     $('.zones-list').append(data);
   };

  //to add clock
  $(".add_more").click(function () {
    defaultSelectedTimeZones = [];
     window.location.reload();
    var zoneValue = $('.zones-list').val();
    console.log(zoneValue);
    var zoneId = $('.zones-list').find('option:selected').attr('id');
    console.log(zoneId);
    var obj = {
      name :{
        id: zoneId,
        timezone:zoneValue
      }
    }
    modal.style.display = "none";
    defaultSelectedTimeZones.push(obj.name);
    
    addUrl(zoneId, zoneValue);
    // clockCreater(zoneId, zoneValue);
  });

  // to delete clock

  $(document).on('click', '.delete', function () {
    // var zoneValue = $('.clock label').text();
    // var zoneId = $('.clock').attr('id');
    // console.log(zoneValue);
    // console.log(zoneId);
    // deleteUrl(zoneId, zoneValue);
    $(this).parent().parent("div.clock").remove();
    alert("Clock has been deleted");
  });

  //to drag Clock
  $(window).on('load', function () {
    $('.clocks').sortable();
    $('.clocks').disableSelection();
  });



  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  //copy url to share
    // $(document).on('click', '.copy', function () {
    //     var url = window.location.href;
    //     $('#input-url').attr("value", url);

    //     var copyUrl = document.getElementById("input-url");
    //     copyUrl.select();
    //     document.execCommand("copy");

    // });
});

