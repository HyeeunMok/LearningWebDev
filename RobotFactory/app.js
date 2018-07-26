var number = 5;
var count = 0;

function changeHead(){
    var rotator = document.getElementById('head');
    var imageDir = 'images/';

    var images = ['head3.png', 'head4.png', 'head0.png', 'head1.png', 'head2.png'];
    
    count++;

    var length = images.length;
    if (count < number) {
        head.src = imageDir + images[count];
        }
    else if (count == length) {
                head.src = imageDir + images[0];
                count = 0;
     }
}

function changeBody(){
    var rotator = document.getElementById('body');
    var imageDir = 'images/';

    var images = ['body2.png', 'body3.png', 'body4.png', 'body0.png', 'body1.png'];
    
    count++;

    var length = images.length;
    if (count < number) {
        body.src = imageDir + images[count];
        }
    else if (count == length) {
                body.src = imageDir + images[0];
                count = 0;
     }
}


function changeLeg(){
    var rotator = document.getElementById('leg');
    var imageDir = 'images/';

    var images = ['leg4.png', 'leg0.png', 'leg1.png', 'leg2.png', 'leg3.png'];
    
    count++;

    var length = images.length;
    if (count < number) {
        leg.src = imageDir + images[count];
        }
    else if (count == length) {
                leg.src = imageDir + images[0];
                count = 0;
     }
}

function getInfor() {
    window.location.href = "Details.html";
    //window.location.replace("Details.html");
}