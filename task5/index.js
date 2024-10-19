document.addEventListener('DOMContentLoaded', function () {
    const calculate = document.getElementById('calculate');
    const amount = document.getElementById('amount');
    const tovar = document.getElementById('tovar');
    const result = document.getElementById('answer');

    calculate.addEventListener('click', function () {
        const quantity = amount.value;
        const productPrice = parseInt(tovar.value);
        
        // Проверка корректности ввода количества товара
        const quantityRegex = /^[1-9]\d*$/;
        if (!quantityRegex.test(quantity)) {
            result.innerHTML = '<span id="error">Ошибка: введите корректное количество товара.</span>';
            return;
        }
        const totalPrice = productPrice * parseInt(quantity);
        result.innerHTML = `Стоимость заказа: ${totalPrice} руб.`;
    });
});