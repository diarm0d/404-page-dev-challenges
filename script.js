const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;

function showMetheMoney() {
    console.log('height:',clientHeight, 'width:', clientWidth)
}

clientWidth.addEventListener('change', showMetheMoney);
clientWidth.addEventListener('change', showMetheMoney);