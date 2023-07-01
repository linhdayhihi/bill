
const get_time = document.querySelector('.time');

function getCurrentTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  // Định dạng giờ 24h và đảm bảo có hai chữ số cho giờ và phút
  var formattedHours = hours < 10 ? '0' + hours : hours;
  var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return formattedHours + ':' + formattedMinutes;
}

// Gọi hàm getCurrentTime mỗi giây để cập nhật giờ và phút
let get_updateDay = document.querySelector("#update-day");

function getCurrentDateTime1() {
  var now = new Date();

  // Lấy giờ, phút, giây
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Lấy ngày, tháng, năm
  var date = now.getDate();
  var month = now.getMonth() + 1; // Tháng được đánh số từ 0 đến 11, nên cộng thêm 1
  var year = now.getFullYear();

  // Định dạng và đảm bảo có hai chữ số cho giờ, phút, giây, ngày, tháng
  var formattedHours = hours < 10 ? "0" + hours : hours;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  var formattedDate = date < 10 ? "0" + date : date;
  var formattedMonth = month < 10 ? "0" + month : month;

  get_updateDay.innerHTML = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds + " , " + formattedDate + "/" + formattedMonth + "/" + year;
}
let trader_id = document.querySelector("#trader-id")
function generateTransactionCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  let code = '';

  // Tạo hai kí tự đầu tiên là chữ cái
  code = "FT";
  // Tạo phần còn lại với các số
  for (let i = 0; i < 14; i++) {
    code += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  trader_id.innerHTML = code;
}


let get_receive = document.getElementById("nguoi_nhan");
let name = document.getElementById("nam-receive");

let stk_receiv = document.getElementById("stk-receive");
let get_stk = document.getElementById("stk-nguoiNhan");

let id_send = document.getElementById("name");
let name_send = document.getElementById("name-send");
let select = document.querySelector("#font-size")
let font_Size = "";
select.oninput = function (e) {
  font_Size = select.value;
  let get_title2 = document.querySelector(".title2");
  get_title2.style.fontSize = font_Size + "px";

}


document.getElementById("done").onclick = function () {
  get_receive.innerHTML = name.value;
  get_stk.innerHTML = stk_receiv.value;
  generateTransactionCode();
  getCurrentDateTime1();
  document.querySelector(".stk_nguoi_gui").innerHTML = id_send.value;
  document.querySelector(".ten_nguoi_gui").innerHTML = name_send.value.toUpperCase();
  document.querySelector(".title2").innerHTML = document.getElementById("money-trader").value + " VND";
  document.getElementById("main-massage").innerHTML = document.getElementById("noi_dung_ck").value;
  const time_top = document.querySelector(".time");
  time_top.innerHTML = getCurrentTime();
  let get_title2 = document.querySelector(".title2");
  get_title2.style.fontSize = font_Size;
  console.log(font_Size);
};

// Đối tượng button capture
const captureBtn = document.getElementById("captureBtn");

// Đối tượng div cần chụp màn hình
const captureArea = document.getElementById("captureArea");

// Đối tượng link tải xuống
const downloadLink = document.getElementById("download-link");

// Sự kiện click nút Capture
captureBtn.addEventListener("click", () => {
  html2canvas(captureArea).then((canvas) => {
    // Tạo URL hình ảnh từ canvas
    const imageURL = canvas.toDataURL("image/png");

    // Gán URL hình ảnh vào link tải xuống
    downloadLink.href = imageURL;
    downloadLink.download = "screenshot.png";

    // Hiển thị link tải xuống
    downloadLink.style.display = "block";
    downloadLink.style.width = "100%";
    downloadLink.style.height = "50px";
    downloadLink.style.backgroundColor = "#294c9e";
    downloadLink.style.fontSize = "20px";
    downloadLink.style.textAlign = "center";
    downloadLink.style.textDecoration = "underline";
    downloadLink.style.display = "flex";
    downloadLink.style.justifyContent = "center";
    downloadLink.style.alignItems = "center";
    downloadLink.style.margin = "10px 0px";
    downloadLink.style.color = "white";
  });
});

