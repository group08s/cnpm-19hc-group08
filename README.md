# cnpm-19hc-group08
Đồ án công nghệ phần mềm
---

## Thông tin Thành Viên Nhóm:
---

| MSSV       | Họ Tên           | Email                         | Số Điện Thoại   |
| :---------:|:----------------:| :----------------------------:|:---------------:|
| 19424003   | Hồ Trung Hiếu    | 19424003@student.hcmus.edu.vn | 0345970278      |
| 19424052   | Hà Minh Bảo Toàn | 19424052@student.hcmus.edu.vn | 0327247666      |
| 19424021   | Nguyễn Thái Hiệp | nthiepgk123@gmail.com         | 0926061115      |

---
#### Link Project: https://github.com/group08s/cnpm-19hc-group08.git 
---
#### Link Demo Youtube: /thêm sau/
---
### Tài liệu tham khảo

+ ####  https://mongoosejs.com/	
+ ####  https://www.mongodb.com/



# branch stg
- Dùng để kết hợp code từ các branch forntend và backend tạo ra từ stg! Khi hoạt động ổn định sẽ merger vào barnch master.

# Tạo branch fontend từ stg cho phát triển tính năng frontend
- Xây dụng các tính năng cho giao diện người dùng
- khi làm tính năng thì tạo 1 branch mới từ branch stg. Sau khi phát triển xong tính năng mới thì merger code từ branch đó vào lại branch stg.
- Sau khi merge vào stg thấy chạy ổn thì tiếp tục merge branch đó vào master (do thời gian hạn hẹp nên không quản lý được! Nên sẽ làm vậy)
- note: tạo branch mới đặt tên theo tên "Fronend" + tên tính năng phát triển: Frontend_FeatureName
+ example: $git checkout -b Frontend_CreateMainPage

# Tạo branch backend từ stg cho phát triển tính năng backend
- Xây dụng các tính năng phía backend
- khi làm tính năng thì tạo 1 branch mới từ branch stg. Sau khi phát triển xong tính năng mới thì merger code từ branch đó vào lại branch stg.
- Sau khi merge vào stg thấy chạy ổn thì tiếp tục merge branch đó vào master (do thời gian hạn hẹp nên không quản lý được! Nên sẽ làm vậy)
- note: tạo branch mới đặt tên theo tên "Backend" + tên tính năng phát triển: Backend_FeatureName
+ example: $git checkout -b Backend_CreateApiGet

# quy định comment
- nội dung commit viết tiếng anh! Chú ý viết hoa chữ cái đầu ở [Backend], [Frontend], và [Feature Name].
- [FeatureName]/[nội dung chỉnh sửa]
- example: $git commit -m"[Create Main Page]/[Fix bug return api]"

# Hướng dẫn chạy chương trình:
- b1: clone về: $git clone https://github.com/group08s/cnpm-19hc-group08.git
- b2: cd CNPM_19CH_GROUP8
- b3: npm install
- b4: cd frontEnd
- b5: npm install (lâu)
- b6: tại ./CNPM_19CH_GROUP8 : $npm start
   - note: 
      - server: localhost:3000
      - client: localhost:4200
- note: để chạy riêng client: tại ./CNPM_19CH_GROUP8 : $npm run client
- note: để chạy riêng server: tại ./CNPM_19CH_GROUP8 : $npm run server
