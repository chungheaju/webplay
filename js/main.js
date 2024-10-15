const slideWrap = document.querySelector(".slide-wrap"),
  slideLists = slideWrap.querySelectorAll(".slide"),
  prev = document.querySelector(".btnPrev"),
  next = document.querySelector(".btnNext");

const deg = 45; //각각의 slide의 회전각도
let len = slideLists.length - 1;
let i = 0;
let num = 0;
let active = 0;

function activation(index, slideLists) {
  for (let el of slideLists) {
    el.classList.remove("on");
  }
  slideLists[index].classList.add("on");
}
// activation(2,slideLists)

// slide의 개수만큼 반복
for (let el of slideLists) {
  let pic = el.querySelector(".pic");
  // 각 slide용를 45도씩 회전하고 아래로 배치
  el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  // 각 slide에 이미지삽입
  pic.style.backgroundImage = `url(img/member${i + 1}.jpg)`;
  i++;
}

// prev버튼 클릭시
// prev.addEventListener("click",function(){})
prev.addEventListener("click", () => {
  num++;
  slideWrap.style.transform = `rotate(${deg * num}deg)`;
  console.log(num, `${deg * num}deg`);
  // 조건식? 참값: 거짓값
  active == 0 ? (active = len) : active--;
  console.log(active);
  activation(active, slideLists);
});
// next버튼 클릭시
next.addEventListener("click", () => {
  num--;
  slideWrap.style.transform = `rotate(${deg * num}deg)`;
  console.log(num, `${deg * num}deg`);
  active == len ? (active = 0) : active++;
  console.log(active);
  activation(active, slideLists);
});
