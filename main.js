const addTextbox = () => {

  const plus = document.getElementById("plus");
  const box = document.getElementById("box");
  const newP = document.createElement('p');

  newP.innerHTML = " <input id='pp' type='radio' onclick='remove(this)'> <input type='text' placeholder='오늘의 작업을 작성하세요✨'>";

  box.insertBefore(newP, plus);


}

const remove = (obj) => {
  document.getElementById('box').removeChild(obj.parentNode);
}






