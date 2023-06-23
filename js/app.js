
/*tokei*/
function updateClock() {
    var now = new Date();
    var hours = addZero(now.getHours());
    var minutes = addZero(now.getMinutes());
    var seconds = addZero(now.getSeconds());

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    }

    function addZero(num) {
    return (num < 10) ? "0" + num : num;
    }
    setInterval(updateClock, 1000);

/*gazou*/
function hyoji(num)
{
    if (num == 0)
    {
    document.getElementById("disp").style.display="block";
    }
    else
    {
    document.getElementById("disp").style.display="none";
    }
}

