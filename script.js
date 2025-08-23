// login button function 


 document.getElementById('login_button').addEventListener('click',function(e){

        e.preventDefault();

        const mobileNumber = 1234;
        const  pinNumber = 1234; 

        const mobilenumberValue = document.getElementById('mobile-number-id').value;
        const pinnumberValue =document.getElementById('pin-number-id').value;


        const mobilenumInt = parseInt (mobilenumberValue);
        const pinnumInt = parseInt (pinnumberValue);

         if(mobilenumInt === mobileNumber && pinnumInt === pinNumber){ 
            
            window.location.href='./home.html';


         } else { 
             alert('invalid credential');
         }


 })