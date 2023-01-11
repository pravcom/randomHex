function changeColor() {
    let hex_nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "A", "B", "C", "D", "E", "F"];

    let hexcode = '';
    // console.log(Math.floor(Math.random() * hex_nums.length) )

    for (let i = 0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * hex_nums.length)

        hexcode += hex_nums[random_index];
    }

    document.getElementById("hex-code").innerHTML = hexcode;
    document.getElementsByTagName("body")[0].style.background = '#' + hexcode;
}

document.querySelector('.btn').onclick = (event) => {
    changeColor()
}
