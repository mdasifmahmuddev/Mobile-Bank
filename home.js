

//  reusable function 

function getvalue(id){
    
     const amount  = document.getElementById(id); 
     const amountValue = amount.value ; 
     const amoutValueNum  = parseInt(amountValue);

     return amoutValueNum ; 


}

// function  to get innertext 

    function name(params) {
        
    }







document.getElementById('add_money_btn').addEventListener('click',function(e){

 e.preventDefault();

 

     const bank =document.getElementById('bank').value ;
     const accountNumber =document.getElementById('bank_number').value;

    // reusable function use 
     const amount = getvalue('amount_add') ;
     
     const pinNumber = parseInt(document.getElementById('pin_number').value);

      const availableBalance = parseInt(document.getElementById('available_balance').innerText );

  

    
      if(accountNumber.length < 4){
         alert('enter valid account number');
        return;  

      }if(pinNumber <4 ){
         alert('enter valid pin ');

      } 




      const totalBalance = amount + availableBalance; 

      document.getElementById('available_balance').innerText =totalBalance ; 




    // text showing change html file 
    // document.getElementById('available_balance').innerText = totalBalance ; 

    


})

// toggoling feature 

// add button 

// function handle toggle 

function handleToggle(id){ 

     const forms = document.getElementsByClassName('formClass')
    
     for(const form of  forms){ 
         form.style.display = 'none'

     }
     document.getElementById(id).style.display = "block";

}



document.getElementById('add-button').addEventListener('click',function(){ 
     
     
    const forms = document.getElementsByClassName('formClass')

    const formBtns =document.getElementsByClassName('formButtonClass');
     

    for(const btn of formBtns){
         btn.classList.remove("border-[#0874f2]", "bg-[#0874f2]/5");
          
         btn.classList.add("border-gray-300");
    }



    
     for(const form of  forms){ 
         form.style.display = 'none'
         


     }
     document.getElementById('add-money-parent').style.display = "block";

     
          document.getElementById("add-button").classList.remove("border-gray-300");

     document.getElementById("add-button").classList.add("border-[#0874f2]", "bg-[#0874f2]/5");



});


// cash out button 


// NOTE: usinge handle toggle function to make easy and short 


document.getElementById('cash-out-button').addEventListener('click',function(){ 

     handleToggle('cash-out-parent');
    
});
// transfer money  

document.getElementById('transfer_money_button').addEventListener('click',function(){ 

  document.getElementById('add-money-parent').style.display ="none" ;
    document.getElementById('cash-out-parent').style.display="none";

    document.getElementById('transfer_money_parent').style.display="block"


});






// cash out 


document.getElementById('cash-out-submit-button').addEventListener('click',function(e){

      //   cash out 
  e.preventDefault() ;

         const availableBalance = parseInt(document.getElementById('available_balance').innerText );

    const agent_number= document.getElementById('agent-number-id').value ; 
    const  cash_amount=parseInt(document.getElementById('amount-id').value);
    const pin_number=document.getElementById('pin-id').value;

    const cashoutBalance = availableBalance - cash_amount ;
    document.getElementById('available_balance').innerText =cashoutBalance ; 
    console.log(availableBalance, cashoutBalance);



})