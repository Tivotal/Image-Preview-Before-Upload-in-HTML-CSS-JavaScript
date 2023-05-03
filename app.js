/* Created by Tivotal */

let btn = document.querySelector(".btn");
let fileInput = document.querySelector(".fileInput");
let wrapper = document.querySelector(".wrapper");
let img = document.querySelector("img");
let cancelBtn = document.querySelector(".cancel-btn i");
let fileName = document.querySelector(".file-name");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

btn.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", (e) => {
  //getting first selected file
  let file = e.target.files[0];

  //if user selected file
  if (file) {
    //creating new file reader
    let reader = new FileReader();

    //once reader loads the file
    reader.onload = function () {
      //getting reader result
      let result = reader.result;

      //passing reader result to image source
      img.src = result;

      //adding active class to wrapper
      wrapper.classList.add("active");
    };

    cancelBtn.addEventListener("click", () => {
      //removing image source
      img.src = "";

      //removing active class from wrapper
      wrapper.classList.remove("active");
    });

    //passing selected file url to reader
    reader.readAsDataURL(file);
  }

  //displaying file name
  if (e.target.value) {
    let valueStore = e.target.value.match(regExp);
    fileName.textContent = valueStore;
  }
});
