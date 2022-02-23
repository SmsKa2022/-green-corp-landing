const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];
const BUBBLE_DENSITY = 500
// Как видно, он использует функцию Math.random, чтобы получить число в промежутке от left до right,
// а затем с помощью метода toFixed(2) мы оставляем от числа два знака после запятой

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateDecimalBetween(min, max) {
    return getRandomNumber(min, max).toFixed(2);
}

// класс описывает шарики, цвет, размер, координаты, скорость перемещения
class Bubble {
    constructor(canvas) {
        this.canvas = canvas
        this.getCanvasSize()
        this.init()

    }

    // вытаскивает из холста его размеры и сохраняет в переменные
    getCanvasSize() {
        this.canvasWidth = this.canvas.clientWidth
        this.canvasHeight = this.canvas.clientHeight
        console.log(this.canvasWidth, this.canvasHeight)
    }

    // инициализировать пузырек: выбирать ему один из случайных цветов, какой-то размер, начальное положение на холсте
    init() {
        this.color = COLORS[getRandomNumber(0, COLORS.length)]
        this.alpha = generateDecimalBetween(5, 10) / 10 // прозрачность
        this.size = generateDecimalBetween(1, 3) // посути радиус шарика
        this.translateX = generateDecimalBetween(0, this.canvasWidth) // позиция по Х
        this.translateY = generateDecimalBetween(0, this.canvasHeight) // позиция по Y
        this.velocity = generateDecimalBetween(20, 80) // скорость перемещения пузырька мик сек
        this.movementX = generateDecimalBetween(-2, 2) / this.velocity // смещение по Х
        this.movementY = generateDecimalBetween(1, 20) / this.velocity
    }

    // пересчитывает положение пузырька на холсте
    move() {
        this.translateX -= this.movementX
        this.translateY -= this.movementY
        // если шарик выходит за границы холста мы его инициализируем в новом случайном месте
        if (this.translateY < 0 || this.translateX < 0 || this.translateX > this.canvasWidth) {
            this.init();
            this.translateY = this.canvasHeight;
        }
    }
}

class CanvasBackground {
    constructor(id) {
        this.canvas = document.getElementById(id)
        this.ctx = this.canvas.getContext("2d")
        this.dpr = window.devicePixelRatio // отношение размера одного физического пикселя к размеру одного логического (CSS) пикселя
    }

    start() {
        this.canvasSize()
        this.generateBubbles()
        this.animate()
    }

    canvasSize() {
        // offsetWidth - возвращает ширину элемента, это значение, включающее горизонтальный отступ элемента, ширину вертикального скроллбара (если он есть) и CSS ширину
        // ширину и высоту для холста мы выставили, умножив ее на значение devicePixelRatio. Это важно, чтобы потом графика на холсте не отображалась мутно на мониторах с более высоким разрешением — как, например, на retina-дисплеях от Apple.
        this.width = this.canvas.offsetWidth * this.dpr
        this.height = this.canvas.offsetHeight * this.dpr
        // Метод scale() изменяет масштаб текущего графического объекта, делает его больше или меньше.
        this.ctx.scale(this.dpr, this.dpr)

    }

    generateBubbles() {
        this.bubblesList = []
        for (let i = 0; i < BUBBLE_DENSITY; i++) {
            this.bubblesList.push(new Bubble(this.canvas))
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight)

        this.bubblesList.forEach((bubble) => {
            bubble.move()
            // Метод translate() ретранслирует позицию (0,0) в новое место растрового холста
            this.ctx.translate(bubble.translateX, bubble.translateY)
            // начинаем рисовать, задем начальную точку, путь
            this.ctx.beginPath()
            // рисуем круг
            this.ctx.arc(0, 0, bubble.size, 0, Math.PI * 2)
            // назначаем цвет заливки
            this.ctx.fillStyle = `rgba(${bubble.color}, ${bubble.alpha})`
            // закрвшиваем пузырек
            this.ctx.fill()
            // учитываем масштаб позволяет масштабировать, поворачивать, передвигать и скручивать текущий контекст.
            // https://msiter.ru/references/html5-canvas/settransform
            this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)
        })
        // запускаем анимацию с контекстом, привязанным к текущему классу (this.animate.bind(this))
        requestAnimationFrame(this.animate.bind(this))
    }
}

const background = new CanvasBackground("orb-canvas")
background.start()
