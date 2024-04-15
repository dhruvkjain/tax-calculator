let submit_btn = document.getElementById('submit_btn');
const tax_form = document.getElementById('tax_form');

submit_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const formData = new FormData(tax_form);
    document.getElementsByClassName('error_message')[0].classList.remove('error_message_show');
    document.getElementsByClassName('error_message')[1].classList.remove('error_message_show');
    document.getElementsByClassName('error_message')[2].classList.remove('error_message_show');
    document.getElementsByClassName('error_message')[3].classList.remove('error_message_show');
    document.getElementsByClassName('final_output')[0].classList.remove('final_output_show');
    
    let err = false;
    if( formData.get('gai') == null || isNaN(formData.get('gai')) || formData.get('gai') == ""){
        
        document.getElementsByClassName('error_message')[0].classList.add('error_message_show');
        // console.log('error in gai');
        // console.log(formData.get('gai'));
        err = true;
    }
    if(formData.get('ei') == null || isNaN(formData.get('ei')) || formData.get('ei') == ""){
        document.getElementsByClassName('error_message')[1].classList.add('error_message_show');
        err = true;
    }
    if(formData.get('ageg') == null || isNaN(formData.get('ageg')) || formData.get('ageg') == ""){
        document.getElementsByClassName('error_message')[2].classList.add('error_message_show');
        err = true;
    }
    if(formData.get('deduct') == null || isNaN(formData.get('deduct')) || formData.get('deduct') == "" ){
        document.getElementsByClassName('error_message')[3].classList.add('error_message_show');
        err = true;
    }
    if(err){
        return;
    }     
    // console.log('Success');

    let gai = Number(formData.get('gai'));
    let ei = Number(formData.get('ei'));
    let deduct = Number(formData.get('deduct'));
    let ageg = Number(formData.get('ageg'));
    document.getElementsByClassName('final_output')[0].classList.add('final_output_show');

    if((gai + ei - deduct) >= 800000){
        // console.log('tax');
        if(ageg < 40){
            // console.log("tax = ",(gai + ei - deduct)*0.3 );
            document.getElementById('tax').innerText = (gai + ei - deduct)*0.3;
        }
        else if(ageg >= 40 && ageg < 60){
            // console.log("tax = ",(gai + ei - deduct)*0.4 );
            document.getElementById('tax').innerText = (gai + ei - deduct)*0.4;
        }
        else {
            // console.log("tax = ",(gai + ei - deduct)*0.1 );
            document.getElementById('tax').innerText = (gai + ei - deduct)*0.1;
        }
    }
    else if((gai + ei - deduct) < 0){
        // console.log('-ve');
        document.getElementById('tax').innerText = "negative, you messed UP";
    }
    else{
        // console.log('safe');
        document.getElementById('tax').innerText = 0;
    }
})

let close_btn = document.getElementById('close_btn');
close_btn.addEventListener('click',(e)=>{
    document.getElementsByClassName('gai')[0].value = "";
    document.getElementsByClassName('ei')[0].value = "";
    document.getElementsByClassName('ageg')[0].value = "";
    document.getElementsByClassName('deduct')[0].value = "";

    document.getElementsByClassName('error_message')[0].classList.remove('error_message_show');
    document.getElementsByClassName('error_message')[1].classList.remove('error_message_show');
    document.getElementsByClassName('error_message')[2].classList.remove('error_message_show');
    document.getElementsByClassName('error_message')[3].classList.remove('error_message_show');
    document.getElementsByClassName('final_output')[0].classList.remove('final_output_show');
});