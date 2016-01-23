function fnRun() {
  setInterval(fnPrintDate, 1000);
}

function markElem(arr, e) {
for(var j=0; j<arr.length;j++){
      document.getElementById(e + j.toString()).className = document.getElementById(e + j.toString()).className.replace(" mdl-button--colored mdl-button--raised", "");
}

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] == "1") {
      //document.getElementById('h'+index).className();
      //console.log(hArray);
      document.getElementById(e + i.toString()).className += " mdl-button--colored mdl-button--raised";
      //console.log(document.getElementById('h'+index.toString()));
    } else {
      document.getElementById(e + i.toString()).className = document.getElementById(e + i.toString()).className.replace(" mdl-button--colored mdl-button--raised", "");
      //console.log(document.getElementById('h'+index.toString()));
    }
  }
}


function fnPrintDate() {
  var date = new Date();
  hArray = date.getHours().toString(2).split('');
  mArray = date.getMinutes().toString(2).split('');
  sArray = date.getSeconds().toString(2).split('');
  var hfArray = new Array(5-hArray.length);
  //var mhfArray = hfArray.fill(0);
  var fhArray = hfArray.fill(0).concat(hArray);
  var mfArray = new Array(6-mArray.length);
  var fmArray = mfArray.fill(0).concat(mArray);
  var sfArray = new Array(6-sArray.length);
  var fsArray = sfArray.fill(0).concat(sArray);
//  hArray.length=5;
//  mArray.length=6;
//  sArray.length=6;
  //console.log(date.getHours()+":"+fhArray);
  //  console.log(date.getMinutes()+":"+fmArray);
//  console.log(date.getSeconds()+":"+fsArray);
  markElem(fhArray.reverse(), 'h');
  document.getElementById('hb').innerHTML = date.getHours();
  markElem(fmArray.reverse(), 'm');
  document.getElementById('mb').innerHTML = date.getMinutes();
  markElem(fsArray.reverse(), 's');
  document.getElementById('sb').innerHTML = date.getSeconds();
}
