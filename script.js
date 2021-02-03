const clientWidthNumber = document.documentElement.clientWidth;
const clientHeightNumber = document.documentElement.clientHeight;

function showMetheMoney() {
    console.log('height:',clientHeightNumber, 'width:', clientWidthNumber)
}

clientWidthNumber.addEventListener('change', showMetheMoney);
clientHeightNumber.addEventListener('change', showMetheMoney);