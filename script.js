// 获取倒计时结束时间
var countDownDate = new Date("Jan 3, 2025 00:00:00").getTime();

// 更新倒计时
function updateCountdown() {
    // 获取当前时间
    var now = new Date().getTime();

    // 计算距离结束时间的时间差
    var distance = countDownDate - now;

    // 计算天数、小时、分钟和秒
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 显示倒计时
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // 如果倒计时结束，显示消息和按钮
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "生日快乐！";
        document.getElementById("gift-button").style.display = "block";
        document.getElementById("gift-button").addEventListener("click", function() {
            window.location.href = "https://example.com/happy-birthday"; // 替换为实际的生日祝福页面链接
        });
    } else {
        document.getElementById("gift-button").style.display = "none";
    }
}

// 每秒更新倒计时
var x = setInterval(updateCountdown, 1000);

// 自动播放视频
var video = document.getElementById("video");
video.play();

// 每隔 5 秒切换视频播放状态
setInterval(function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}, 5000);
