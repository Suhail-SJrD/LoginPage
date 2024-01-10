let email = document.getElementById('input')
let password = document.getElementById('password')
let CheckSinups = document.getElementById('User_Name')
let Ok = document.getElementById('Ok')
let Ok2 = document.getElementById('Ok2')
let Ok1 = document.getElementById('Ok1')
let para1 = document.getElementById('para1')
let para2 = document.getElementById('para2')

let input = [
    "suhailsince2003@gmail.com",
    "satrunsince2003@gmail.com",
    "salmansince2003@gmail.com"
];
let User_Name = [
    "suhail",
    "salman",
    "saahid"
];
let passcord = [
    "suhail&6767",
    "8668151532",
    "Suhail&6767"
];

function CheckInput(){
    for(let val = 0 ; val < input.length; val++){
        if((email.value == input[val] || email.value == User_Name[val]) && password.value==passcord[val]){
            // email.style.border = '2px solid green'
            // email.style.outline = '2px solid green'
    
            Ok.style.display = 'inline-block'
            Ok1.style.display = 'inline-block'
            para1.style.display ='none'
            para2.style.display ='none'
            alert("Welcome You did it")
            break;
        }
        else{
            if(val == input.length-1){
                alert("Wrong credincial try again with diffrent input!")
                para1.style.display ='block'
                para2.style.display ='block'
                Ok.style.display = 'none'
                Ok1.style.display = 'none'
                break;
            }
        }
    }
    
}



let counter = 0;
let indigater = false;
function CheckSinup(){
    if(input.length==0){
        input[counter] = email.value;
        passcord[counter] = password.value;
        User_Name[counter] = CheckSinups.value;
        counter++;
    }
    else{
        for(let i = 0; i< input.length; i++){
            if(input[i] == email.value){
                alert('Enter valid Email');
                indigater = true;
                console.log(input);
                return;
            }
        }
        for(let j = 0; j< input.length; j++){
            if(User_Name[j] == CheckSinups.value){
                alert('Enter valid User Name');
                indigater = true;
                console.log(input);
                returnsz;
            }
        }
        if(indigater == false){
            alert("Account Created Successfully")
            Ok.style.display = 'inline-block'
            Ok1.style.display = 'inline-block'
            Ok2.style.display = 'inline-block'
            input[counter] = email.value;
            passcord[counter] = password.value;
            User_Name[counter] = CheckSinups.value;
            counter++;
        }
    }
}