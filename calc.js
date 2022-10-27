class Calc {
    getTimestampInSeconds() {
        return Math.floor(Date.now() / 1000)
    }

    randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    createCommonPort(userId, cameraId) {
        let cu = this.getTimestampInSeconds();
        let min = 64500;
        let max = 65000;
        let temp_port = this.randomIntFromInterval(min, max);
        //let port =  Math.abs(Math.floor(cu / (userId + cameraId)) - max) ;

        let arrayForm = Array.from(String(userId + cameraId), Number);
        let final = 0;
        arrayForm.forEach((item) => {
            final += item;
        })

        let port = Math.ceil((temp_port + final));

        console.log('arrayForm : ', arrayForm);
        console.log('final : ', final);
        console.log('CU : ', cu);
        console.log('Port : ', port);

        return port;
    }
}

let cal = new Calc();
cal.createCommonPort(1545, 12346);
