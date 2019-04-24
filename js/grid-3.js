// Test Argon grid. Add/remove blocks.
// https://github.com/tnt2ultra/argon-grid/

var numDiv = 1;
var divArray = [];
var numSelected = 0;

function onClick(el) {
    let idDiv = '#' + el.id;
    let id = Number.parseInt(el.id.substr(2));
    divArray[id] = 1 - divArray[id];
//    console.log(id + " " + idDiv);
    if (divArray[id] === 0) {
        $(idDiv).removeClass('bg-success');
        $(idDiv).addClass('bg-danger');
        numSelected++;
    } else {
        $(idDiv).removeClass('bg-danger');
        $(idDiv).addClass('bg-success');
        numSelected--;
    }
    updateScreen();
}

function addClick() {
    let str = '<div id="id' + numDiv + '" class="card text-white bg-success m-3" style="max-width: 18rem;" onclick="onClick(this)">' +
              '  <div class="card-body">' +
              '      <h5 class="card-title">Card ' + numDiv + '</h5>' +
              '      <p class="card-text">Some quick example text.</p>' +
              '  </div>' +
              '</div>';
    divArray[numDiv] = 1;
    numDiv++;
    $("#main").append(str);
    return false;
}

function deleteClick() {
    for (let i = 0; i <= divArray.length; i++) {
        if (divArray[i] === 0) {
            divArray[i] = -1;
            $("#id" + i).remove();
            numSelected--;
            if (numSelected === 0)
                break;
        }
    }
    updateScreen();
    return false;
}

function updateScreen() {
    if (numSelected === 0) {
        $("#delete").addClass("invisible");
//        $( "#delete" ).fadeIn( 3000 );
    } else {
        $("#delete").removeClass("invisible");
//        $( "#delete" ).fadeOut( 3000 );
    }
    $("#count").text("" + numSelected);
}