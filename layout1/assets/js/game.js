class Game {
    constructor() {

    }
    start () {

    }
}
window.onload = () => {
    nav();
    startLoop();
    setInterval(() => {
        if (panel === "game") {
            game.game = new Game();
            game.game.start();
            panel = "game process";
        }
    }, 500)
};
window.onload = () => {
    checkStorage();
    nav();
    startLoop();
}
class Game {
    constructor() {
        this.name = name;
        this.$zone = $('.elements');
        this.elements = [];
        this.player = this.generate(Player)
    }
start () {
    this.loop();
}
updateElements() {
    this.elements.forEach(e => {
        e.update();
        e.draw();
    })
}
}
loop() {
    requestAnimationFrame(() => {
        this.setParams();
        this.loop();
    })
}
setParams() {
    let params = ['name'];
    let value = [this.name];

    params.forEach((e, i) => {
        $(`#${e}`).html(value[i]);
    })
}

class Drawble {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.h = 0;
        this.w = 0;
        this.offsets = {
            x: 0,
            y: 0
        }
    }
    createElement() {
        this.$element = $(`<div class="element" ${this.constructor.name.toLowerCase()}"></div>`);
        this.game.$zone.append(this.$element);
    }
    update() {
        this.x += this.offsets.x;
        this.y += this.offsets.y;
    }
    draw() {
        this.$element.css({
            left: this.x +"px",
            top: this.y + "px",
            width: this.w + "px",
            height: this.h + "px"
    })
    }
loop() {
    requestAnimationFrame(() => {
        this.updateElements();
        this.setParams();
        this.loop();
    }
}
class Player extends Drawble {
    constructor(game){
        super(game) {
            this.w = 244;
            this.h = 109;
            this.x = this.game.$zone.width() / 2 - this.w / 2;
            this.y = this.game.$zone.height() - this.h;
            this.createElement();
        }
    }
}
