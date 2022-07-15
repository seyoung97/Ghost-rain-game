const heroElement = document.getElementById("hero");
// 용사에 접근하고 heroElement라는 변수에 추가
console.log(heroElement);

heroElement.className = "right";
// 용사의 class 이름을 right로 수정, 잘 바뀌었는 개발자 도구로 확인.
// html에 class ="right" 추가된거 확인할 수 있음.

heroElement.style.left = "30px";
