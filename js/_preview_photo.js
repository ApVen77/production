// the iput file
const inpFile = document.getElementById("file");

// the div
const previewcontainer = document.getElementById("imagePreview");

// the image tag

const previwImage = previewcontainer.querySelector(".image_preview_img");

inpFile.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    previwImage.style.display = "block";

    reader.addEventListener("load", function () {
      console.log(this);
      previwImage.setAttribute("src", this.result);
    });

    reader.readAsDataURL(file);
  }
});
