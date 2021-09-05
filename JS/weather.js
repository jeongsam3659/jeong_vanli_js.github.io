const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const APIKEY ="4124a2c1d3ca2202a251331e5c9573f0";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  //위도와 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`;
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

  console.log(url);
}

function onGeoError(){
  alert("대상을 찾을 수 없습니다. ");
}

navigator.geolocation.getCurrentPosition(onGeoOk ,onGeoError);
// a :모든게 작동될때 실행 될 함수.
// b :에러가 발생시 실행될 함수.



