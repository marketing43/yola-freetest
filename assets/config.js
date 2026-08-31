/* =====================================================================
   CẤU HÌNH CHUNG — file DUY NHẤT phải sửa khi đổi backend
   Mọi trang (trang chính, trang test, trang kết quả) đều đọc file này.

   API_URL = URL /exec của Apps Script Web App gắn với Sheet "YOLA Free Test Leads".
   Đổi URL khi tạo deployment mới (Deploy → Manage deployments → Edit → New version
   giữ nguyên URL; chỉ "New deployment" mới sinh URL khác).
   Mọi cấu hình vận hành khác (VietGuys, template ZNS, OTP_TEST_MODE) nằm ở
   Apps Script → Project Settings → Script Properties, không nằm trong web.
   ===================================================================== */
window.YOLA_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbzOVX6n_PR1_2ycMwpPJttjsnlmEEUYQmJYU3CiZ2rPmiRNLh1K6RsfOIwgBco0GiGbzw/exec'
};
