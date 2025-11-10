
export function handleRegex(e:any) {
    e.preventDefault();

    const nameInput:any = document.getElementById("name");
    const cardInput:any = document.getElementById("card");
    const monthInput:any = document.getElementById("month");
    const yearInput:any = document.getElementById("year");
    const cvcInput:any = document.getElementById("cvc");
    const form:any = document.getElementById("form");

    const nameWrong:any = document.getElementById("nameWrong");
    const cardWrong:any = document.getElementById("cardWrong");
    const dateWrong:any = document.getElementById("dateWrong");
    const cvcWrong:any = document.getElementById("cvcWrong");


    const nameRegex:RegExp = /^.{3,}[A-Z a-z']+$/
    const cardRegex:RegExp = /\d{16}$/;
    const monthRegex:RegExp = /^(0[1-9]|1[0-2])$/;
    const yearRegex:RegExp = /^\d{2}$/;
    const cvcRegex:RegExp = /\d{3}$/;

    const checkName:boolean = nameRegex.test(nameInput.value)
    const checkCard:boolean = cardRegex.test(cardInput.value)
    const checkMonth:boolean = monthRegex.test(monthInput.value)
    const checkYear :boolean= yearRegex.test(yearInput.value)
    const checkCvc:boolean = cvcRegex.test(cvcInput.value)



    if(!checkName){
        nameWrong.style.display = 'flex'
        nameWrong.innerText = 'Please enter a valid name.'
    }else{
        nameWrong.style.display = 'none'
    }


    if(!checkCard){
        cardWrong.style.display = 'flex'
        cardWrong.innerText = 'Please enter a valid card number.'
    }else{
        cardWrong.style.display = 'none'
    }


    if(!checkMonth || !checkYear){
        dateWrong.style.display = 'flex'
        dateWrong.innerText = 'Enter valid date.'
    }else{
        dateWrong.style.display = 'none'
    }


    if(!checkCvc){
        cvcWrong.style.display = 'flex'
        cvcWrong.innerText = 'Enter valid number.'
    }else{
        cvcWrong.style.display = 'none'
    }


    const successfull:any = document.getElementById("successfull");
    if(checkName && checkMonth && checkYear && checkCvc && checkCvc){
        form.style.display = 'none'
        successfull.style.display = 'flex'
    }
}