function fnRun() {
  //setInterval(fnPrintDate,1000);
}

function markElem(element, index, array) {
  if (element == "1") {
    //document.getElementById('h'+index).className();
    //document.getElementById('h'+index.toString()).className +=" mdl-button--colored";
    console.log(document.getElementById('h'+index.toString()));
  } else {
    //  document.getElementById('h'+index.toString()).className = document.getElementById('h'+index.toString()).className.replace(" mdl-button--colored","");
    console.log(document.getElementById('h'+index.toString()));
  }

}

function fnPrintDate() {
  var date = new Date();
  hArray = date.getHours().toString(2).split('');
  mArray = date.getMinutes().toString(2).split('');
  sArray = date.getSeconds().toString(2).split('');
  console.log(sArray);
  hArray.forEach(markElem);
  mArray.forEach(markElem);
  sArray.forEach(markElem);


}
