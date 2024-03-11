let form = document.getElementById("form");
let popup = document.getElementById('popup')
let resultText = document.getElementById('result-text')

form.addEventListener('submit', formSend);

async function formSend(e){
    e.preventDefault();
    let error = formValidate(form);

    if(error === 0){
        let formData = new FormData(form);
        popup.classList.add('_sending');
        let response = await fetch('./php/form.php', {
            method: 'POST',
            body: formData
        });

        if(response.ok){
            let result = await response.text();
            popup.classList.remove('_sending');
            form.reset()
            showResult(result)
        }else{
            popup.classList.remove('_sending');
            form.reset()
            showResult("Произошла ошибка при отправке формы");
        }
    }
}

function formValidate(form){
    let error = 0;

    for(let i = 0; i < form.length; i++){
        const input = form[i];
        formRemoveError(input);

        if(input.classList.contains('tel')){
            if(phoneTest(input)){
                formAddError(input);
                error++;
                document.getElementById('tel-span').innerHTML='Введите корректный номер телефона';
            }else{
                document.getElementById('tel-span').innerHTML='';
            }
        }
        if(input.classList.contains('name')){
            if(input.value.length == 0){
                formAddError(input);
                error++;
                document.getElementById('name-span').innerHTML='Введите Имя';
            }else{
                document.getElementById('name-span').innerHTML='';

            }
        }
    }
    return error;
}

function formAddError(input) {
    input.parentElement.classList.add('_error');

}
function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
}
function phoneTest(input) {
    return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(input.value);
}

function showResult(result) {
    popup.classList.add('_sent');
    resultText.innerHTML = result
    setTimeout(() => {
        popup.classList.remove('_sent');
    }, 3000)
}