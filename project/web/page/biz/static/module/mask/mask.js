module.exports = {
    init() {
        let dom = document.createElement("div");
        dom.id = "mask";
        dom.className="mask";
        document.getElementsByTagName('body')[0].appendChild(dom);
        document.getElementById("mask").innerHTML = "<div class='text'>Loading...</div>";
    },
    showMask() {
        document.getElementById("mask").style.display = "block";
    },
    hideMask() {
        document.getElementById("mask").style.display = "none";
    }
};