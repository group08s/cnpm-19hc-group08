# cnpm-19hc-group08
Đồ án công nghệ phần mềm
---

## Thông tin Thành Viên Nhóm:
---

| MSSV       |     Họ Tên      |  Email                        | Số Điện Thoại   |
| :---------:|:---------------:| :----------------------------:|:---------------:|
| 19424003   | Hồ Trung Hiếu   | 19424003@student.hcmus.edu.vn | 0345970278      |

---
#### Link Project: https://github.com/group08s/cnpm-19hc-group08.git 
---
#### Link Demo Youtube: /thêm sau/
---
### Tài liệu tham khảo

+ ####  https://mongoosejs.com/	
+ ####  https://www.mongodb.com/



# branch stg
- Dùng để kết hợp code bên forntend và backend! Khi hoạt động ổn định sẽ merger vào barnch master.

# branch fontend
- Xây dụng các tính năng cho giao diện người dùng
- khi làm tính năng thì tạo 1 branch mới từ branch frontend. Sau khi phát triển xong tính năng mới thì merger code từ branch đó vào lại branch frontend.
- note: tạo branch mới đặt tên theo tên tính năng phát triển: FeatureName
+ example: $git checkout -b CreateApiGet

# branch backend
- Xây dụng các tính năng phía backend
- khi làm tính năng thì tạo 1 branch mới từ branch backend. Sau khi phát triển xong tính năng mới thì merger code từ branch đó vào lại branch backend.
- note: tạo branch mới đặt tên theo tên tính năng phát triển: FeatureName
+ example: $git checkout -b CreateMainPage

# quy định comment
- nội dung commit viết tiếng anh! Chú ý viết hoa chữ cái đầu ở [Backend], [Frontend], và [Feature Name].
- [Backend]/[FeatureName]/[nội dung chỉnh sửa]
- [Frontend]/[FeatureName]/[nội dung chỉnh sửa]
- example: $git commit -m"[Backend]/[Create Main Page]/[Fix bug return api]"

# Hướng dẫn chạy chương trình:
*b1: clone về: $git clone https://github.com/group08s/cnpm-19hc-group08.git
*b2: cd CNPM_19CH_GROUP8
*b3: npm install
*b4: cd frontEnd
*b5: npm install (lâu)
*b6: tại ./CNPM_19CH_GROUP8 : $npm start
    *note: server: localhost:3000
           client: localhost:4200
*note: để chạy riêng client: tại ./CNPM_19CH_GROUP8 : $npm run client
*note: để chạy riêng server: tại ./CNPM_19CH_GROUP8 : $npm run server