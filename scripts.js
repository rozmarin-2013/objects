function Lamp(power, costElectricPower) {
    let turnOn = false;
    let timePower = 0;
    function powerCounter () {
        let timeStart = 0,
            timeEnd = 0;

        timeStart = new Date();
        confirm('Лампочка Включена, ' +
            'пока вы не закроете это окно, ' +
            'лампочка будет включена, 1 секунда эквивалентна 1 часу реального времени');

        timeEnd = new Date();
        timePower += (timeEnd.getTime() - timeStart.getTime());
    }

    function getNumberFromPrompt(message) {
        let value;

        while (!(value = +prompt('Введите Мощность лампочки в Вт'))){

        }
        return value;
    }

    this.setPower = function () {
        return getNumberFromPrompt('Введите Мощность лампочки в Вт');
    }

    this.setCostElectricPower = function () {
        return getNumberFromPrompt('Введите тариф за 1 кВт.час');
    }

    this.getTimePower = function () {
        return timePower;
    }

    this.power = this.setPower();
    this.costElectricPower = this.setCostElectricPower();

    this.turn = function () {
        if(!turnOn) {
            console.log('Лампочка включена');
            turnOn = true;
            powerCounter();
        } else {
            console.log('Лампочка выключена');
            turnOn = false;
        }
    }

    this.totalRate = function () {
        return ((this.power / 1000) * (timePower / 100) * this.costElectricPower);
    }
}

let lamp = new Lamp();
lamp.turn();

console.log(`Лампочка горела ${lamp.getTimePower() / 100} часов
            Мощность лампочки - ${lamp.power}
            Тариф за 1 кВт.час - ${lamp.costElectricPower}
            Расход за горение лампочки ${lamp.totalRate()}`);

