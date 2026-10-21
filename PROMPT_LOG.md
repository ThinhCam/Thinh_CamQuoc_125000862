# PROMPT_LOG.md — Nhật ký Prompt Engineering

**Dự án:** Portfolio cá nhân của Cam Quốc Thịnh  
**Mục tiêu:** Xây dựng website giới thiệu bản thân đáp ứng rubric: Git/GitHub Pages, Semantic HTML5, CSS Variables, Flexbox/Grid, Animate.css, AOS và nhật ký prompt.

> Đây là nhật ký mẫu ghi lại quy trình prompt/iteration đề xuất cho dự án. Trước khi nộp, hãy chỉnh sửa lại theo đúng những câu hỏi, kết quả và lỗi mà bạn thực sự gặp trong quá trình làm bài. Không trình bày nội dung minh họa như thể đó là lịch sử hội thoại đã diễn ra nếu bạn chưa thực hiện.

## Lần 1 — Xác định cấu trúc và yêu cầu

**Prompt**

> Hãy xây dựng website portfolio cá nhân cho sinh viên Công nghệ thông tin. Website cần có Giới thiệu, Kỹ năng, Dự án và Liên hệ. Ưu tiên HTML5 semantic, giao diện hiện đại, responsive và mã nguồn dễ đọc.

**Kết quả mong muốn**

- Có đầy đủ các section chính.
- Nội dung phù hợp với sinh viên đang học lập trình.
- Có cấu trúc rõ ràng để dễ chỉnh sửa.

**Tiêu chí tự kiểm tra**

- `header`, `nav`, `main`, `section`, `article`, `footer` được sử dụng đúng ngữ nghĩa.
- Các liên kết điều hướng trỏ đến đúng ID section.

## Lần 2 — Yêu cầu kiến trúc HTML/CSS rõ ràng

**Prompt tinh chỉnh**

> Tách mã thành `index.html`, `style.css` và `script.js`. Dùng semantic HTML5 thay vì dùng div cho mọi thành phần. Khai báo CSS Variables cho màu sắc, font và khoảng cách; dùng Flexbox/Grid cho bố cục. Thêm breakpoint cho tablet và điện thoại.

**Lý do tinh chỉnh**

Tách trách nhiệm giúp HTML dễ đọc, CSS dễ bảo trì và JavaScript chỉ xử lý tương tác. CSS Variables giúp thay đổi màu chủ đạo nhất quán.

**Kết quả cần xác nhận**

- `index.html` liên kết đúng `style.css` và `script.js`.
- CSS có `:root` chứa biến màu/font.
- Bố cục không tràn ngang trên màn hình nhỏ.

## Lần 3 — Thêm Animate.css và AOS

**Prompt**

> Tích hợp Animate.css cho phần hero khi tải trang và AOS cho các section xuất hiện khi cuộn. Giữ chuyển động ngắn, mượt, chỉ dùng ở các vị trí quan trọng. Thêm cấu hình giảm chuyển động cho người dùng có cài đặt prefers-reduced-motion.

**Cách triển khai**

- Animate.css được nạp trong `<head>` và dùng các class `animate__animated`, `animate__fadeInUp`.
- AOS CSS được nạp trong `<head>`.
- AOS JavaScript được nạp trước `script.js`.
- Gọi `AOS.init()` sau khi DOM sẵn sàng.

## Lần 4 — Debug prompt: AOS không chạy khi cuộn

**Tình huống có thể gặp**

Các phần tử có `data-aos` không xuất hiện hiệu ứng khi cuộn trang.

**Debug prompt**

> Hãy kiểm tra theo thứ tự: (1) URL CDN AOS CSS/JS có tải được không; (2) AOS JavaScript đã được nạp trước lệnh `AOS.init()` chưa; (3) `AOS.init()` có chạy sau DOMContentLoaded không; (4) phần tử có thuộc tính `data-aos` chưa; (5) Console có lỗi JavaScript không. Đưa ra bản sửa tối thiểu, không viết lại toàn bộ website.

**Cách xử lý trong mã nguồn**

1. Đặt `<script src="...aos.js"></script>` trước `script.js`.
2. Khởi tạo AOS trong sự kiện `DOMContentLoaded`.
3. Kiểm tra kết nối Internet vì CDN cần tải thư viện từ bên ngoài.
4. Mở DevTools → Console/Network để xem lỗi nếu hiệu ứng vẫn không hoạt động.

**Ghi chú khi nộp:** Chỉ ghi đây là lỗi thực tế nếu bạn thật sự gặp lỗi. Nếu không, hãy đổi tiêu đề thành “Tình huống kiểm thử dự phòng”.

## Lần 5 — Tinh chỉnh UI/UX và responsive

**Prompt**

> Rà soát giao diện trên điện thoại: menu điều hướng phải đóng/mở được, các card chuyển thành một cột, nút dễ bấm, nội dung không tràn ngang. Không thêm thư viện JavaScript mới. Giữ màu sắc và khoảng cách nhất quán bằng CSS Variables.

**Các điểm cần kiểm thử**

- Menu mobile mở/đóng được và tự đóng sau khi chọn mục.
- Card dự án hiển thị theo một cột ở màn hình nhỏ.
- Có trạng thái hover/focus dễ nhận biết.
- Không lạm dụng hiệu ứng và có hỗ trợ `prefers-reduced-motion`.

## Lần 6 — Chuẩn bị GitHub Pages

**Prompt**

> Kiểm tra cấu trúc để triển khai bằng GitHub Pages từ branch `main`, thư mục root. Xác nhận có `index.html` ở thư mục gốc, các đường dẫn CSS/JS tương đối, không dùng đường dẫn tuyệt đối phụ thuộc máy tính cá nhân. Liệt kê các bước kiểm tra sau deploy.

**Checklist**

- Repository đặt tên theo đúng mẫu giảng viên yêu cầu: `Ten_Ho_MSSV`.
- `index.html`, `style.css`, `script.js`, `PROMPT_LOG.md` ở thư mục gốc.
- Commit mô tả đúng nội dung thay đổi.
- Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
- Mở URL GitHub Pages và kiểm tra tất cả section, stylesheet, JavaScript và hiệu ứng.

## 3. Đánh giá cá nhân về quá trình Vibe Coding

### AI đã giúp tiết kiệm thời gian ở phần nào nhất?

AI hỗ trợ tạo khung HTML, đề xuất bố cục CSS, viết các breakpoint responsive và gợi ý cách tích hợp thư viện hiệu ứng. Nhờ đó, mình có thể dành nhiều thời gian hơn cho việc kiểm tra giao diện, chỉnh sửa nội dung và hiểu cấu trúc mã nguồn.

### Bài học rút ra khi đặt prompt cho AI

Prompt càng rõ về cấu trúc file, công nghệ được phép sử dụng, tiêu chí thiết kế và cách kiểm thử thì kết quả càng sát yêu cầu. Thay vì yêu cầu AI viết lại toàn bộ khi có lỗi, nên cung cấp lỗi cụ thể, vị trí xảy ra, kết quả mong muốn và yêu cầu sửa phần tối thiểu. Sau mỗi lần chỉnh sửa cần tự chạy thử, đọc mã và xác nhận kết quả.

### Tự đánh giá

- **Điểm tốt:** Có cấu trúc semantic, CSS Variables, Grid/Flexbox, responsive và thư viện hiệu ứng.
- **Cần cải thiện:** Thay thông tin mẫu bằng thông tin thật; bổ sung liên kết dự án thực tế; kiểm tra khả năng truy cập và hiệu năng.
- **Bằng chứng nên lưu:** Ảnh chụp giao diện trên máy tính/điện thoại, lịch sử commit và ảnh trang GitHub Pages sau khi triển khai.
