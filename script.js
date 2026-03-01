document.getElementById("scrollToTool").onclick = () => {
    document.getElementById("tool").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("send").onclick = async () => {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");

    output.textContent = "Laden...";

    try {
        const res = await fetch("/api/ai?text=" + encodeURIComponent(input));
        const data = await res.json();
        output.textContent = data.result;
    } catch (err) {
        output.textContent = "Er ging iets mis.";
    }
};
