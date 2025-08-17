 function calculateBMI() {
      const weight = parseFloat(document.getElementById('weight').value);
      const height = parseFloat(document.getElementById('height').value) / 100;

      if (!weight && !height) {
        document.getElementById('result').innerText = "กรุณากรอกข้อมูลให้ครบถ้วน";
        return;
      }

      const bmi = weight / (height * height);
      let category = '';

      if (bmi < 18.5) category = "น้ำหนักน้อย";
      else if (bmi < 23) category = "น้ำหนักปกติ";
      else if (bmi < 25) category = "น้ำหนักเกิน";
      else if (bmi < 30) category = "โรคอ้วนระดับ 1";
      else category = "โรคอ้วนระดับ 2";

      document.getElementById('result').innerText = `BMI ของคุณคือ ${bmi.toFixed(2)} (${category})`;
    }