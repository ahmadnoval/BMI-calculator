function checkNumber(num) {
    return num == 0 ? false : true;
  }
  
  function checkBmi() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    if(checkNumber(weight) && checkNumber(height)){
      const bmi = (weight/Math.pow(height/100,2)).toFixed(1);
      let status;
      if(bmi< 18.5){
        status = "Kurus"
      }else if(bmi>=18.5 && bmi<24.9){
        status = "Normal"
      }
      else if(bmi>=25 && bmi<29.9){
        status = "Gemuk/Gendut"
      }
      else {
        (bmi>30 )
        status = "Obesitas"
      }
      document.getElementById("hasil").innerHTML = "Bmi-mu adalah <b>"+bmi+"</b> yang berarti kamu <b>"+status+"</b>";
    }
  }