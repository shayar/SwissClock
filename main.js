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
        var utc = (now.getTime() + (now.getTimezoneOffset() * 60000));
        var nd = new Date(utc + (3600000 * this.timeZone));
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
                hours = date.getHours() + (date.getMinutes() * 0.0166667);
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

//to create a dynamic clock
function clockCreater(id, timezone) {
    var clock = $("#click-np").clone();
    $(clock).removeAttr("id");
    $(clock).attr("id", id);
    $(clock).find("span").remove();
    $(clock).append("<span>" + id + "</span>");
    $(clock).append("<label class='zone-value' value='" + timezone + "' style='display:none;'></label>");
    $(".clock").parent().append(clock);
    $(".clock").parent().sortable();
    let t = new CreateClock("#" + id, timezone);
}


//to compare 
function comparer(otherArray) {
    return function (current) {
        return otherArray.filter(function (other) {
            return other.id == current.id && other.timezone == current.timezone
        }).length == 0;
    }
}


//to add url
function addUrl(ids) {

    var newUrl = window.location.href;

    var urlParams = new URLSearchParams(location.search);
    var zoneUrlId = urlParams.getAll('zones');
    
    var timeZone = urlParams.getAll('timeZone');
    $.each(ids,function(index,value){
        zoneUrlId.push(value.id);
        timeZone.push(value.timezone);
    });
    

    newUrl = '/?zones=' + zoneUrlId.join(',') + '&timeZone=' + timeZone.join(',');
    var queryString = decodeURIComponent(newUrl);
    window.location = queryString;
}

//to delete url
function deleteUrl(id, timezone) {

    var newUrl = '';

    var urlParams = new URLSearchParams(location.search);
    var zoneUrlId = urlParams.getAll('zones');
    var timeZone = urlParams.getAll('timeZone');
    if (zoneUrlId.length === 0) {
        window.location.reload();
    } else {
        var arrUrlId = zoneUrlId[0].split(',');
        var arrZonesValue = timeZone[0].split(',');

        if (arrUrlId.length === 1) {
            history.pushState({}, null, newUrl);
            window.location.reload();
        } else {
            arrUrlId.splice($.inArray(id, arrUrlId), 1);
            arrZonesValue.splice($.inArray(timezone, arrZonesValue), 1);
            newUrl = '?zones=' + arrUrlId.join(',') + '&timeZone=' + arrZonesValue.join(',');
            var queryString = decodeURIComponent(newUrl);

            history.pushState({}, null, queryString);

            window.location.reload();
        }
    }

}

//to copy url
function copyUrl() {
    var textarea = document.createElement('textarea');
    textarea.textContent = window.location.href;
    document.body.appendChild(textarea);

    var selection = document.getSelection();
    var range = document.createRange();
    //  range.selectNodeContents(textarea);
    range.selectNode(textarea);
    selection.removeAllRanges();
    selection.addRange(range);

    console.log('copy success', document.execCommand('copy'));
    selection.removeAllRanges();

    document.body.removeChild(textarea);
}

//to hide/show buttons
function mouseEvents() {
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
}

$(document).ready(function () {

    //collection of timezones
    var dt = new Date();
    var UTC = (dt.getTime() + (dt.getTimezoneOffset() * 60000));
    var timezones = {
        local: {
            id: "Local-Time",
            timezone: ((dt.getTime() - UTC) / 3600000)
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
            timezone: 5.5
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
            id: "Hong-Kong",
            timezone: 8
        },
        colombia: {
            id: "Colombia",
            timezone: -5
        },
        peru: {
            id: "Peru",
            timezone: -5
        },
        panama: {
            id: "Panama",
            timezone: -5
        },
        jamaica: {
            id: "Jamaica",
            timezone: -5
        },
        cuba: {
            id: "Cuba",
            timezone: -4
        },
        haiti: {
            id: "Haiti",
            timezone: -4
        },
        uruguay: {
            id: 'Uruguay',
            timezone: -3
        },
        paraguay: {
            id: 'Paraguay',
            timezone: -3
        },
        ghana: {
            id: 'Ghana',
            timezone: 0
        },
        senegal: {
            id: 'Senegal',
            timezone: 0
        },
        belgium: {
            id: 'Belgium',
            timezone: 1
        },
        italy: {
            id: 'Italy',
            timezone: 1
        },
        nepal:{
            id:'Nepal',
            timezone:5.75
        }

    };

    //adding timezones to array
    var allTime = [];
    for (var key in timezones) {
        allTime.push(timezones[key]);
    };

    //check url 
    var urlParams = new URLSearchParams(location.search);
    //get url
    var urlZones = urlParams.getAll('zones');
    var urlZonesValue = urlParams.getAll('timeZone');

    //if url has query string
    if (urlZones.length !== 0) {

        //split the url with ','

        var arrZones = urlZones[0].split(',');
        var arrZonesValue = urlZonesValue[0].split(',');
        var arrUrl = [];
        for (var p = 0; p < arrZones.length; p++) {
            arrUrl.push({
                'id': arrZones[p],
                'timezone': arrZonesValue[p]
            });
            var n = arrUrl[p];
            clockCreater(decodeURIComponent(n.id), n.timezone);
        }
        if (arrUrl.length < allTime.length) {

            //dropdown options
            var notSelectedZones = [];

            var onlyInA = allTime.filter(comparer(arrUrl));
            var onlyInB = arrUrl.filter(comparer(allTime));

            notSelectedZones = onlyInA.concat(onlyInB);

            for (var k = 0; k < notSelectedZones.length; k++) {
                var l = notSelectedZones[k];
                var data = '<option id="' + l.id + '" name="' + l.id + '" value="' + l.timezone + '">' + l.id + '</option>';
                $('.zones-list').append(data);
            }


        } else {
            $('#myBtn').prop('disabled', 'disabled').css({
                'background': '#dddddd'
            });

        }

    } else {

        var defaultSelectedTimeZones = [];
        for (var item = 0; item < 3; item++) {
            defaultSelectedTimeZones.push(allTime[item]);
        };
        
        addUrl(defaultSelectedTimeZones);

        // zones without default
        for (var item = 0; item < 3; item++) {
            allTime.shift();
        }

        //dropdown options
        for (y = 0; y < allTime.length; y++) {
            var l = allTime[y];
            var data = '<option id="' + l.id + '" name="' + l.id + '" value="' + l.timezone + '">' + l.id + '</option>';
            $('.zones-list').append(data);
        };


        

    }

    //mouse move events
    mouseEvents();

    //to drag Clock
    $('.clocks').sortable({
        update:function(event, ui){
            console.log(event)
            console.log(ui)
            console.log(ui.item.context.id)
            console.log(ui.item.context.lastChild)
        }
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

    //to add a clock
    $(document).on('click', '.add_more', function () {
        var zoneValue = $('.zones-list').val();
        var zoneId = $('.zones-list').find('option:selected').attr('id');
        modal.style.display = "none";
        var addedClock = [];
        addedClock.push({
            'id':zoneId,
            'timezone':zoneValue
        });
        addUrl(addedClock);
    });

    //to delete a clock
    $(document).on('click', '.delete', function () {
        var zoneId = $(this).parent().parent('div.clock').attr('id');
        var zoneValue = $(this).parent().parent('div.clock').find('.zone-value').attr('value');
        deleteUrl(zoneId, zoneValue);
    });

    //share url to facebook
    $(document).on('click', '.facebook', function () {

        var shareurl = window.location.href;
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + escape(shareurl) + '&t=' + document.title, '',
            'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;
    });

    //share url to linkedin
    $(document).on('click', '.linkedin', function () {
        var shareurl = window.location.href;
        window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + (shareurl) + '&title=CSS-Tricks&summary=Tips%2C+Tricks%2C+and+Techniques+on+using+Cascading+Style+Sheets.&source=CSS-Tricks', '', 'toolbar=0, status=0, width=626, height=436');
        return false;
    });

    //to copy url
    $(document).on('click', '.copy', function () {
        copyUrl();
        alert("Url Copied");
    });
});
