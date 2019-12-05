var MoveUtility = {
    //单一变量匀速运动
    SimpleMove: function (param) {
        var obj = document.getElementById(param.Id);
        var curVal = param.From;//100
        var toVal = param.To;
        var speed = (param.To - param.From) / (param.LastTime / 20);
        var t = setInterval(function () {
            curVal += speed;
            if (Math.abs(curVal - toVal) < Math.abs(speed)) curVal = toVal;
            obj.style[param.Type] = curVal + 'px';
            if (curVal == toVal) {
                clearInterval(t);
            }
        }, 20);
    },
    //多变量匀速运动
    SimpleMoveMultiple: function (arrParam) {
        for (var i = 0; i < arrParam.length; i++) {
            var param = arrParam[i];

            param.Obj = document.getElementById(param.Id);
            param.Cur = param.From;
            param.Speed = (param.To - param.From) / (param.LastTime / 20);
            param.Finish = false;
        }

        var finishCount = 0;
        var t = setInterval(function () {
            if (finishCount == arrParam.length) {
                clearInterval(t);
            }

            for (var i = 0; i < arrParam.length; i++) {
                var param = arrParam[i];
                if (param.Finish) continue;

                param.Cur += param.Speed;
                if (Math.abs(param.Cur - param.To) < Math.abs(param.Speed)) {
                    param.Cur = param.To;
                    param.Finish = true;
                    finishCount++;
                }
                param.Obj.style[param.Type] = param.Cur + 'px';
                if (param.Cur == param.To) {
                }
            }
        }, 20);
    }
};