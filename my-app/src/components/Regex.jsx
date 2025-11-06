export function handleSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const cardInput = document.getElementById("card");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const cvcInput = document.getElementById("cvc");
    const form = document.getElementById("form");

    const nameWrong = document.getElementById("nameWrong");
    const cardWrong = document.getElementById("cardWrong");
    const dateWrong = document.getElementById("dateWrong");
    const cvcWrong = document.getElementById("cvcWrong");


    const nameRegex = /^.{3,}[A-Z a-z']+$/
    const cardRegex = /\d{16}$/;
    const monthRegex = /^(0[1-9]|1[0-2])$/;
    const yearRegex = /^\d{2}$/;
    const cvcRegex = /\d{3}$/;

    const checkName = nameRegex.test(nameInput.value)
    const checkCard = cardRegex.test(cardInput.value)
    const checkMonth = monthRegex.test(monthInput.value)
    const checkYear = yearRegex.test(yearInput.value)
    const checkCvc = cvcRegex.test(cvcInput.value)



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


    const successfull = document.getElementById("successfull");
    if(checkName && checkMonth && checkYear && checkCvc && checkCvc){
        form.style.display = 'none'
        successfull.style.display = 'flex'
    }
}