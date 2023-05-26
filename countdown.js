const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];



//lastday class를 가진 html요소를 가져와서 lastday라고 선언을 해줌
//.textContent 이용

//document.write("오늘은" +tempDate.tempYear() + "년" + tempDate.tempMonth() + "월 " + tempDate.tempDay() + "일입니다."); // 현재 날짜를 반환함.


//종강 날짜의 월을 가져온 후에 , 최상단에 있는 months 배열을 이용해서 월의 이름(january)로 바꿔주세요
//종강 날짜의 요일은 weekdays 배열을 통해 가져와야 합니다.


//month 숫자
//배열 index 안에다가 momth를 넣으면 불러와진다 
//(련재 년도,현재 월, 현재 일+27, 종강시, 종강 분, 종강초)


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const lastday = document.querySelector('.lastday');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const futureDate = new Date(tempYear, tempMonth, tempDay + 28, 17, 45, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();


lastday.textContent = `End of Class: ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;


  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 1000 * 60;

  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t / oneDay) / oneHour);
  const minutes = Math.floor((t / oneHour) / oneMinute);
  const seconds = Math.floor((t / oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  const format = item => (item < 10 ? `0${item}` : item);

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">이미 종강을 하셨군요!축하드려요!</h4>`;
  }
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();





//math.floor

//1초마다 실행되게 해야함
//시간이 지났으면 지났다고 종강입니다 축하합니다 까지!!
//p가 0보다 작으면 .....!





//몇 밀리초인지....한시간은 몇 밀리초인지....









