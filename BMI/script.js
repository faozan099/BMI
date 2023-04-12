// let button = document.getElementById('btn');

// button.addEventListener('click', () => {
//    let height = parseInt(document.getElementById('height').value);
//     let weight = parseInt(document.getElementById('weight').value);
//     let result = parseInt(document.getElementById('output'));
//     let height_status = false, weight_status = false;
//     if(height === '' || isNaN(height) || (height <= 0)){
//         document.getElementById('height-error').innerHTML = 'please provide a valid height';
//     } else{
//         document.getElementById('height-error').innerHTML = '';
//         height_status= true;
//         }
//     if(weight === '' || isNaN(height) || (height <= 0)){
//             document.getElementById('weight-error').innerHTML = 'please provide a valid weight';
//         } else{
//             document.getElementById('weight-error').innerHTML = ''
//             weight_status= true;
//         }
//     if(height_status && weight_status){
//         let heightCm = Math.pow(height/100, 2);
//         let bmi = (weight / heightCm).toFixed(1)
        
//  console.log(bmi);
//         if(bmi < 18.5){
//             result.innerHTML = 'Underweight:' + bmi;
//         } else if(bmi >= 18.5 && bmi <= 24.9){
//             result.innerHTML = 'Normal Weight' + bmi;
//         } else if (bmi >= 25 && bmi <= 29.9){
//             result.innerHTML = 'Overweight' + bmi;
//         } else { 
//             result.innerHTML = 'Obesity' + bmi;
//         }
//     }
//     }); 

let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height-error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height-error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight-error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight-error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        let heightCm = Math.pow(height/100, 2);
        let bmi = (weight / heightCm).toFixed(1);

        if(bmi < 18.6){
            result.innerHTML = 'Your BMI is ' + bmi + ' which you are UNDER WEIGHT';
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Your BMI is ' + bmi + ' which you are NORMAL';
        }else if(bmi >= 25 && bmi < 29.9){
            result.innerHTML = 'Your BMI is ' + bmi + ' which you are OVERWEIGHT';
        } else{
            result.innerHTML = 'Your BMI is ' + bmi + ' which you are OBESITY';
        }
        } else{
        result.innerHTML = '';
    }
});

document.getElementById('weight-error').style.color = 'red';
document.getElementById('height-error').style.color = 'red';
