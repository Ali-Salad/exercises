function changeImage() {
    const image = document.querySelector("#image");

    const url = prompt("Please enter your image URL:");
    if (!url) return;

    const borderColor = prompt("Please enter your desired border color:") || "black";
    const borderWidth = prompt("Please enter the border width (in pixels):") || "2";
    const width = prompt("Please enter the width of the image (in pixels):") || "300";
    const height = prompt("Please enter the height of the image (in pixels):") || "300";
    const borderRadius = prompt("Please enter the border radius (in pixels):") || "0";

    image.setAttribute("src", url);

    image.style.borderWidth = `${borderWidth}px`;
    image.style.borderStyle = "solid";
    image.style.borderColor = borderColor;

    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.borderRadius = `${borderRadius}px`;
    image.style.padding = "10px";
    image.style.backgroundColor = "#cfc2dc";
}
