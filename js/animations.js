const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
    // i — счетчик анимации. Он будет принимать значение от 0 до 5000 и каждый кадр анимации увеличиваться на 1.
    // element — html-элемент тега с числом. За один кадр анимации значение внутри element мы будем менять на i.
    // endNumber — значение, когда анимация остановится. В нашем случае — 5000.

    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }
        i += 100;
        setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED, i, element, endNumber)
    }

}

function initIncreaseNumberAnimation() {
    const element = document.querySelector('.features__clients-count')
    // document.getElementsByClassName('features__clients-count')[0]
    increaseNumberAnimationStep(0, element, 5000)
}

initIncreaseNumberAnimation();