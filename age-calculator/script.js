const {DateTime, Interval} = luxon;
//initialize datepicker
flatpickr("#dob",{
dateFormat: "Y-m-d",
maxDate: "today"
});

function calculateAge(){
const input = document.getElementById("dob").value;
const errorDiv = document.getElementById("error");
const resultDiv = document.getElementById("result");

resultDiv.innerHTML = "";
errorDiv.innerHTML = "";

if(!input){
errorDiv.innerHTML="enter a date";
return;
}
const birthDate = DateTime.fromISO(input);
const today = DateTime.now();
 if(!birthDate.isValid){
 errorDiv.innerHTML ="invalid date";
 return;
 }
 if(birthDate>today){
  errorDiv.innerHTML ="birthdate cannot be in future";
  return;
 }
 const diff = today.diff(birthDate, ['years','months','days']).toObject();
 const years = Math.floor(diff.years);
 const months = Math.floor(diff.months);
 const days = Math.floor(diff.days);
 
 resultDiv.innerHTML =`
 you are <br>
 <span>${years}</span>Years,
  <span>${months}</span>Months,
   <span>${days}</span>Days old`
 }
 