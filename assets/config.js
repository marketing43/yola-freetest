/* =====================================================================
   CẤU HÌNH CHUNG — file DUY NHẤT phải sửa khi nối backend
   Mọi trang (trang chính, trang test, trang kết quả) đều đọc file này.

   CÁCH NỐI (1 lần):
   1. Tạo Google Sheet mới "YOLA Free Test Leads" → Extensions → Apps Script
      → dán Code.gs → Script Properties thêm: OTP_TEST_MODE = 1
   2. Deploy → New deployment → Web app · Execute as: Me · Access: Anyone
   3. Dán URL /exec vào API_URL bên dưới. Xong.

   Chế độ hiện tại (OTP_TEST_MODE=1 phía Apps Script):
   - OTP: không gọi vendor, backend chấp nhận đúng mã 123456
   - Lead + kết quả bài làm: ghi THẬT vào Google Sheet
   - ZNS mời thi thử: tự bỏ qua đến khi điền ZNS_INVITE_TEMPLATE
   Khi chạy thật: xóa OTP_TEST_MODE, điền bộ VG_* theo hướng dẫn trong Code.gs.
   ===================================================================== */
window.YOLA_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbzOVX6n_PR1_2ycMwpPJttjsnlmEEUYQmJYU3CiZ2rPmiRNLh1K6RsfOIwgBco0GiGbzw/exec'
};
