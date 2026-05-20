/* =====================================================
   VBHC Game – Game Engine & Question Bank  v2
   Môn: Xây dựng và Ban hành Văn bản
   Trường ĐH Kinh tế – Luật, ĐHQG TP.HCM
   Cập nhật:
     - Câu 'find': ẩn highlight đáp án trước khi trả lời
     - Thêm nút Tiếp theo / Quay lại ở mỗi câu
     - Kết quả: lưu / chia sẻ dưới dạng ảnh (html2canvas)
   ===================================================== */
 
'use strict';
 
/* ═══════════════════════════════════════════════════════
   QUESTION BANK
   ═══════════════════════════════════════════════════════ */
const QUESTIONS = [
 
  /* ─── 3.1.1  TÍNH KHÁCH QUAN ─────────────────────── */
  {
    sec:'3.1', tag:'Tính khách quan', type:'mcq',
    ttl:'Chọn câu đảm bảo tính khách quan',
    desc:'Bạn là chuyên viên phòng hành chính. Trưởng phòng yêu cầu soạn một câu thông báo về kết quả dự án. Câu nào đúng văn phong hành chính?',
    opts:[
      {t:'Dự án đã hoàn thành đúng tiến độ theo kế hoạch đề ra. Các cán bộ, viên chức tham gia đã thực hiện nhiệm vụ đúng chức trách và bảo đảm chất lượng công việc theo yêu cầu.',c:true},
      {t:'Chúng tôi rất vui mừng thông báo rằng dự án đã thành công rực rỡ và toàn bộ nhân viên đã làm việc cực kỳ xuất sắc!',c:false},
      {t:'Dự án thành công ngoài mong đợi, tập thể đáng được khen thưởng vì sự cống hiến tuyệt vời.',c:false},
      {t:'Nhờ nỗ lực tuyệt vời của tập thể, dự án đã đạt được thành tích đáng tự hào ngoài mong đợi.',c:false},
    ],
    exp:'Đáp án đúng dùng ngôn từ trung lập, dựa vào sự kiện thực tế. Các đáp án còn lại chứa từ biểu cảm ("vui mừng", "rực rỡ", "xuất sắc", "tuyệt vời").',
    pt:5,
  },
  {
    sec:'3.1', tag:'Tính khách quan', type:'rewrite',
    ttl:'Viết lại đoạn văn đảm bảo tính khách quan',
    desc:'Loại bỏ cảm xúc cá nhân, thay bằng dữ liệu và sự kiện cụ thể.',
    orig:'Chúng tôi thực sự rất lo lắng khi nhận thấy tình trạng đi trễ của một số cán bộ đang ngày càng trở nên nghiêm trọng và đáng báo động, ảnh hưởng xấu đến bầu không khí làm việc chung của toàn cơ quan.',
    model:'Trong tháng 10/2024, có 15 trường hợp cán bộ đi trễ so với giờ hành chính quy định, tăng 8 trường hợp so với tháng trước. Tình trạng này ảnh hưởng đến tiến độ xử lý công việc và kỷ luật lao động tại cơ quan.',
    kw:['trường hợp','tháng','cán bộ','ảnh hưởng','quy định'],
    exp:'Cần thay cảm xúc ("lo lắng", "đáng báo động") bằng số liệu cụ thể và dùng ngôn từ trung lập.',
    pt:10,
  },
 
  /* ─── 3.1.2  TÍNH NGẮN GỌN, CHÍNH XÁC ─────────────── */
  {
    sec:'3.1', tag:'Tính ngắn gọn, chính xác', type:'find',
    ttl:'Tìm từ/cụm từ mơ hồ trong đoạn văn',
    desc:'Bấm vào các cụm từ thiếu chính xác trong đoạn thông báo.',
    doc:[
      {t:'Đề nghị '},{t:'các đơn vị liên quan',e:true,l:'Không rõ đơn vị nào'},
      {t:' '},{t:'sớm',e:true,l:'Không rõ thời hạn'},
      {t:' gửi báo cáo về tình hình thực hiện kế hoạch. Báo cáo cần '},
      {t:'đầy đủ thông tin',e:true,l:'Không xác định nội dung gì'},
      {t:' và gửi về '},{t:'sớm',e:true,l:'Lặp lại, vẫn không cụ thể'},
      {t:' để đảm bảo tiến độ chung.'},
    ],
    te:4,
    exp:'Sửa: "các phòng, ban trực thuộc"; thời hạn "16h00 ngày 20/11/2024"; "theo mẫu ban hành kèm Công văn số 105/CV-VP"; gửi "về Văn phòng Cơ quan".',
    pt:10,
  },
  {
    sec:'3.1', tag:'Tính ngắn gọn, chính xác', type:'replace',
    ttl:'Thay thế cụm từ mơ hồ bằng thông tin cụ thể',
    desc:'Chọn cụm từ chính xác từ danh sách bên dưới để điền vào từng ô.',
    tbl:[
      {bad:'sớm nhất có thể',         ans:'trước 17h00 ngày 25/11/2024'},
      {bad:'một số lượng đáng kể',    ans:'62/80 đơn vị (chiếm 77,5%)'},
      {bad:'các cá nhân liên quan',   ans:'Trưởng các phòng chuyên môn thuộc Sở'},
      {bad:'kết quả khả quan',        ans:'đạt 95% kế hoạch năm'},
    ],
    choices:[
      'trước 17h00 ngày 25/11/2024','62/80 đơn vị (chiếm 77,5%)',
      'Trưởng các phòng chuyên môn thuộc Sở','đạt 95% kế hoạch năm',
      'trong khoảng cuối tháng','nhiều đơn vị đã thực hiện',
    ],
    exp:'VBHC phải dùng số liệu cụ thể, thời hạn rõ ràng, chủ thể xác định — không dùng từ ước lượng hay mơ hồ.',
    pt:10,
  },
 
  /* ─── 3.1.3  TÍNH KHUÔN MẪU, TIÊU CHUẨN ────────────── */
  {
    sec:'3.1', tag:'Tính khuôn mẫu, tiêu chuẩn', type:'rewrite',
    ttl:'Chuyển tin nhắn thành thông báo hành chính',
    desc:'Trưởng phòng nhắn Zalo cho nhân viên. Hãy soạn lại thành thông báo đúng thể thức.',
    orig:'Gửi các anh chị nhân viên! Chúng ta sẽ họp vào tuần tới để bàn về kế hoạch công việc. Anh chị nào có việc bận thì báo cho trưởng phòng biết trước nhé!',
    model:'Phòng Hành chính trân trọng thông báo: Cuộc họp triển khai kế hoạch công tác tháng 12/2024 sẽ được tổ chức vào lúc 08h00, ngày 02/12/2024 tại Phòng họp số 1. Đề nghị toàn thể viên chức, người lao động của Phòng tham dự đúng giờ. Trường hợp vắng mặt, đề nghị báo cáo Trưởng phòng trước ngày họp.',
    kw:['thông báo','cuộc họp','ngày','đề nghị','viên chức'],
    exp:'Thông báo HC phải có: tên đơn vị, thời gian/địa điểm cụ thể, danh xưng đúng ("viên chức, người lao động"), ngôn ngữ trang trọng.',
    pt:10,
  },
 
  /* ─── 3.1.4  TÍNH RÕ RÀNG, CỤ THỂ ──────────────────── */
  {
    sec:'3.1', tag:'Tính rõ ràng, cụ thể', type:'mcq',
    ttl:'Chọn câu đảm bảo tính rõ ràng, cụ thể',
    desc:'Phòng Hành chính cần yêu cầu các đơn vị nộp báo cáo. Câu nào đủ thông tin?',
    opts:[
      {t:'Kính đề nghị các phòng, ban trực thuộc gửi báo cáo tình hình thực hiện kế hoạch công tác quý IV/2024 về Văn phòng Cơ quan trước 16h00 ngày 20/11/2024. Báo cáo thực hiện theo mẫu ban hành kèm theo Công văn số 105/CV-VP ngày 01/11/2024.',c:true},
      {t:'Kính đề nghị các đơn vị liên quan sớm gửi báo cáo về tình hình thực hiện kế hoạch. Báo cáo cần đầy đủ thông tin và gửi về sớm để đảm bảo tiến độ chung.',c:false},
      {t:'Đề nghị các phòng ban gửi báo cáo cuối năm cho chúng tôi trong tuần này.',c:false},
      {t:'Yêu cầu nộp báo cáo đúng hạn. Chi tiết liên hệ Phòng Hành chính.',c:false},
    ],
    exp:'Đáp án A rõ: chủ thể ("các phòng, ban trực thuộc"), thời hạn ("16h00 ngày 20/11/2024"), nơi nhận ("Văn phòng Cơ quan"), mẫu biểu cụ thể.',
    pt:5,
  },
  {
    sec:'3.1', tag:'Tính rõ ràng, cụ thể', type:'find',
    ttl:'Tìm thông tin còn thiếu trong đoạn văn',
    desc:'Bấm vào các cụm từ mơ hồ, thiếu thông tin cụ thể.',
    doc:[
      {t:'Đề nghị '},{t:'các đơn vị liên quan',e:true,l:'Không rõ đơn vị nào'},
      {t:' gửi hồ sơ quyết toán về Phòng Tài chính '},
      {t:'sớm',e:true,l:'Không có thời hạn cụ thể'},
      {t:' để kịp tiến độ. Hồ sơ cần '},
      {t:'đầy đủ các giấy tờ cần thiết',e:true,l:'Không liệt kê giấy tờ gì'},
      {t:'.'},
    ],
    te:3,
    exp:'Cần ghi rõ: tên phòng/ban cụ thể, ngày giờ deadline, danh sách giấy tờ hoặc dẫn chiếu quy định.',
    pt:8,
  },
 
  /* ─── 3.1.5  TÍNH CÂN ĐỐI, LIÊN KẾT ────────────────── */
  {
    sec:'3.1', tag:'Tính cân đối, liên kết', type:'mcq',
    ttl:'Chọn đoạn văn có liên kết mạch lạc',
    desc:'Đoạn văn nào thống nhất chủ đề và có liên kết logic?',
    opts:[
      {t:'Trong Quý III/2024, phòng Nhân sự đã triển khai chương trình đào tạo nâng cao kỹ năng cho cán bộ. Bên cạnh đó, tỷ lệ nghỉ việc giảm 5% so với cùng kỳ năm trước, cho thấy tình hình nhân sự ổn định hơn.',c:true},
      {t:'Hoạt động nhân sự: Trong Quý III/2024, phòng Nhân sự đã triển khai đào tạo nhân viên. Cơ sở vật chất của công ty cũng được nâng cấp. Ngoài ra, doanh thu có xu hướng giảm nhẹ.',c:false},
      {t:'Phòng Nhân sự làm việc tốt. Doanh thu tăng. Mọi người đều vui vẻ.',c:false},
    ],
    exp:'Đáp án A: thống nhất chủ đề nhân sự, dùng từ nối "Bên cạnh đó" tạo liên kết mạch lạc. Đáp án B trộn 3 chủ đề không liên quan.',
    pt:5,
  },
  {
    sec:'3.1', tag:'Tính cân đối, liên kết', type:'order',
    ttl:'Sắp xếp các câu theo trình tự logic',
    desc:'Đánh số thứ tự (1→4) để tạo thành đoạn văn mạch lạc: câu chủ đề → triển khai → kết luận.',
    sentences:[
      'Việc ứng dụng phần mềm một cửa điện tử đã mang lại hiệu quả rõ rệt trong cải cách thủ tục hành chính tại UBND quận.',
      'Thời gian giải quyết hồ sơ giảm trung bình từ 7 ngày xuống còn 3 ngày làm việc.',
      'Tỷ lệ hài lòng của người dân đạt 89,3% theo khảo sát tháng 10/2024.',
      'Do đó, cần tiếp tục nhân rộng mô hình này sang các phường trong năm 2025.',
    ],
    correct:[0,1,2,3],
    exp:'(1) Câu chủ đề – nhận định chung → (2) Dẫn chứng 1 – thời gian xử lý → (3) Dẫn chứng 2 – khảo sát → (4) Câu kết – kết luận và đề xuất.',
    pt:10,
  },
 
  /* ─── 3.1.6  TÍNH PHỔ THÔNG ĐẠI CHÚNG ──────────────── */
  {
    sec:'3.1', tag:'Tính phổ thông đại chúng', type:'rewrite',
    ttl:'Việt hóa và loại bỏ đại từ nhân xưng',
    desc:'Viết lại đoạn văn sau: bỏ đại từ nhân xưng, Việt hóa từ ngoại lai.',
    orig:'Tôi muốn thông báo với các bạn rằng từ tuần tới, tất cả báo cáo phải được upload lên hệ thống online trước deadline. Team nào chưa submit kịp thì inbox cho tôi.',
    model:'Phòng Hành chính trân trọng thông báo: kể từ tuần tới, toàn bộ báo cáo phải được tải lên hệ thống quản lý văn bản điện tử trước thời hạn quy định. Đơn vị chưa hoàn thành đúng hạn đề nghị liên hệ trực tiếp Phòng Hành chính để được hỗ trợ.',
    kw:['thông báo','hệ thống','tải','thời hạn','đề nghị','liên hệ'],
    exp:'Bỏ "Tôi/các bạn". Việt hóa: upload→tải lên, online→điện tử, deadline→thời hạn, submit→hoàn thành/nộp, inbox→liên hệ.',
    pt:10,
  },
  {
    sec:'3.1', tag:'Tính phổ thông đại chúng', type:'replace',
    ttl:'Thay thế từ ngoại lai bằng tiếng Việt',
    desc:'Chọn từ tiếng Việt phù hợp để thay thế.',
    tbl:[
      {bad:'email',            ans:'thư điện tử'},
      {bad:'feedback',         ans:'phản hồi'},
      {bad:'deadline',         ans:'thời hạn'},
      {bad:'upgrade hệ thống', ans:'nâng cấp hệ thống'},
    ],
    choices:['thư điện tử','phản hồi','thời hạn','nâng cấp hệ thống','tin nhắn','cập nhật','hạn chót','thông báo'],
    exp:'Ưu tiên từ ngữ tiếng Việt phổ thông. Chỉ dùng từ gốc nước ngoài khi đã được chấp nhận rộng rãi và không có từ thuần Việt tương đương.',
    pt:10,
  },
 
  /* ─── 3.1.7  TÍNH TRANG TRỌNG, LỊCH SỰ ─────────────── */
  {
    sec:'3.1', tag:'Tính trang trọng, lịch sự', type:'match',
    ttl:'Bảng đối chiếu: phân loại mức độ lịch sự',
    desc:'Phân loại các câu vào đúng mức: Quá cứng nhắc / Phù hợp / Quá khách sáo.',
    items:[
      {t:'Yêu cầu nộp hồ sơ trước ngày 30/11.',                                                     ans:'Quá cứng nhắc'},
      {t:'Đề nghị nộp hồ sơ trước ngày 30/11/2024.',                                                 ans:'Phù hợp'},
      {t:'Kính mong quý vị hảo tâm vui lòng xem xét và ưu ái dành thời gian nộp hồ sơ.',            ans:'Quá khách sáo'},
      {t:'Kính đề nghị viên chức sắp xếp thời gian đến nhận Sổ BHXH.',                              ans:'Phù hợp'},
      {t:'Các bạn phải đến lấy Sổ BHXH ngay, không được chậm trễ.',                                 ans:'Quá cứng nhắc'},
      {t:'Rất mong được sự chiếu cố đặc biệt của quý cơ quan trong việc hỗ trợ giải quyết.',        ans:'Quá khách sáo'},
    ],
    cats:['Quá cứng nhắc','Phù hợp','Quá khách sáo'],
    exp:'VBHC cần trang trọng nhưng không khách sáo; lịch sự nhưng không cộc cằn. Dùng "Kính đề nghị", "Đề nghị" và danh xưng hành chính đúng.',
    pt:12,
  },
  {
    sec:'3.1', tag:'Tính trang trọng, lịch sự', type:'rewrite',
    ttl:'Soạn thông báo nhắc nhở đúng chuẩn',
    desc:'UBND phường cần nhắc hộ dân tại số 12 đường X chưa hoàn thiện hồ sơ ĐKKD dù đã hẹn 2 lần. Viết thông báo lịch sự nhưng rõ ràng.',
    orig:'Yêu cầu hộ kinh doanh tại số 12 đường X nhanh chóng hoàn thiện hồ sơ đăng ký kinh doanh. Đây là lần thứ 3 nhắc nhở, nếu không thực hiện sẽ bị xử lý.',
    model:'UBND phường Y kính đề nghị hộ kinh doanh tại số 12 đường X sắp xếp thời gian bổ sung, hoàn thiện hồ sơ đăng ký kinh doanh trước ngày 15/12/2024 theo hướng dẫn tại Thông báo số .../TB-UBND. Quá thời hạn nêu trên, UBND phường sẽ xem xét xử lý theo quy định hiện hành.',
    kw:['kính đề nghị','hộ kinh doanh','hoàn thiện','hồ sơ','trước ngày','quy định'],
    exp:'Dùng "kính đề nghị" thay "yêu cầu"; ghi thời hạn cụ thể; dẫn chiếu văn bản trước; hậu quả diễn đạt trung tính ("xem xét xử lý theo quy định").',
    pt:10,
  },
 
  /* ─── 3.2.1  SỬ DỤNG TỪ NGỮ ────────────────────────── */
  {
    sec:'3.2', tag:'Sử dụng từ đúng ngữ nghĩa', type:'mcq',
    ttl:'Chọn câu dùng từ đúng ngữ nghĩa',
    desc:'Từ nào được sử dụng chính xác trong ngữ cảnh hành chính?',
    opts:[
      {t:'Dự án đã được triển khai từ tháng 3/2024.',   c:true},
      {t:'Dự án đã được thực thi từ tháng 3/2024.',     c:false},
      {t:'Dự án đã được thi hành từ tháng 3/2024.',     c:false},
      {t:'Dự án đã được chấp hành từ tháng 3/2024.',    c:false},
    ],
    exp:'"Triển khai" dùng cho dự án/kế hoạch. "Thực thi/thi hành" dùng cho luật, quy định. "Chấp hành" dùng cho mệnh lệnh, kỷ luật.',
    pt:5,
  },
  {
    sec:'3.2', tag:'Sử dụng từ đúng văn phong', type:'replace',
    ttl:'Thay thế từ khẩu ngữ bằng từ hành chính',
    desc:'Chọn cụm từ phù hợp văn phong hành chính để thay thế.',
    tbl:[
      {bad:'chạy hết công suất để hoàn thành kế hoạch', ans:'nỗ lực tối đa để hoàn thành kế hoạch đúng tiến độ'},
      {bad:'cần upgrade hệ thống',                       ans:'cần nâng cấp hệ thống để đáp ứng yêu cầu'},
      {bad:'đạt được những kết quả khả quan',            ans:'đạt được những kết quả quan trọng như sau'},
    ],
    choices:[
      'nỗ lực tối đa để hoàn thành kế hoạch đúng tiến độ',
      'cần nâng cấp hệ thống để đáp ứng yêu cầu',
      'đạt được những kết quả quan trọng như sau',
      'cố gắng hết sức mình','cần update hệ thống mới','kết quả rất tích cực',
    ],
    exp:'Ưu tiên từ ngữ trung tính, tránh khẩu ngữ và từ ngoại lai khi có từ thuần Việt tương đương.',
    pt:8,
  },
  {
    sec:'3.2', tag:'Sử dụng từ đúng chính tả', type:'find',
    ttl:'Tìm lỗi chính tả trong đoạn văn',
    desc:'Bấm vào tất cả các từ bị viết sai chính tả.',
    doc:[
      {t:'Báo cáo về tình hình thực hiện '},
      {t:'kỉ thuật',e:true,l:'Đúng: kỹ thuật'},
      {t:' số trong '},
      {t:'chuyên nghành',e:true,l:'Đúng: chuyên ngành'},
      {t:' giáo dục. Kết quả '},
      {t:'nhứt trí',e:true,l:'Đúng: nhất trí'},
      {t:' thông qua tại cuộc họp ngày 15/11/2024. Đề nghị các đơn vị '},
      {t:'xử xự',e:true,l:'Đúng: xử sự'},
      {t:' đúng quy định và hoàn thành trước '},
      {t:'chủ nhựt',e:true,l:'Đúng: chủ nhật'},
      {t:' tuần tới.'},
    ],
    te:5,
    exp:'Các lỗi phổ biến: kỉ thuật→kỹ thuật, chuyên nghành→chuyên ngành, nhứt trí→nhất trí, xử xự→xử sự, chủ nhựt→chủ nhật.',
    pt:10,
  },
  {
    sec:'3.2', tag:'Sử dụng từ đúng kết hợp', type:'mcq',
    ttl:'Chọn câu dùng từ đúng kết hợp ngữ pháp',
    desc:'Câu nào sử dụng từ đúng quan hệ kết hợp trong văn bản hành chính?',
    opts:[
      {t:'Thực hiện biện pháp xử lý nghiêm theo quy định pháp luật.',                      c:true},
      {t:'Thực hiện biện pháp xử lý mạnh mẽ đối với các trường hợp vi phạm.',            c:false},
      {t:'Thực hiện biện pháp xử lý quyết liệt và triệt để nhất có thể.',                 c:false},
    ],
    exp:'"Xử lý nghiêm theo quy định pháp luật" — chính xác, đơn nghĩa. "Mạnh mẽ", "quyết liệt và triệt để nhất có thể" mơ hồ, thiếu cơ sở pháp lý.',
    pt:5,
  },
 
  /* ─── 3.2.2  KỸ THUẬT CÚ PHÁP ──────────────────────── */
  {
    sec:'3.2', tag:'Câu mạch lạc, chuẩn mực', type:'mcq',
    ttl:'Chọn câu mạch lạc nhất',
    desc:'Bệnh viện cần thông báo về sự cố mất điện. Câu nào gọn, rõ nhất?',
    opts:[
      {t:'Hiện tại, do sự cố mất điện, Bệnh viện không thể xử lý yêu cầu của khách hàng.',                                             c:true},
      {t:'Do sự cố mất điện, hiện tại Bệnh viện không thể xử lý yêu cầu của khách hàng mà khách hàng đã gửi trước đó.',                c:false},
      {t:'Bệnh viện thông báo vì mất điện nên yêu cầu khách hàng gửi trước đó của khách hàng chưa xử lý được.',                        c:false},
    ],
    exp:'Đáp án A: ngắn gọn, đủ ý, không lặp từ "khách hàng". Nguyên tắc: mỗi câu chỉ chứa một ý chính.',
    pt:5,
  },
  {
    sec:'3.2', tag:'Câu đúng ngữ pháp', type:'rewrite',
    ttl:'Sửa lỗi thiếu chủ ngữ và đại từ mơ hồ',
    desc:'Đoạn văn có 2 lỗi: thiếu chủ ngữ rõ ràng và dùng đại từ "họ" mơ hồ. Hãy viết lại.',
    orig:'Qua các nội dung nêu trên, cần hoàn thiện hồ sơ trước ngày 15/9/2024. Phó Giám đốc đã chỉ đạo các đơn vị nộp hồ sơ đúng hạn, nhưng đến nay họ vẫn chưa thực hiện.',
    model:'Qua các nội dung nêu trên, Phòng Hành chính quản trị cần hoàn thiện hồ sơ trước ngày 15/9/2024. Phó Giám đốc đã chỉ đạo các đơn vị nộp hồ sơ đúng hạn, nhưng đến nay các đơn vị vẫn chưa thực hiện.',
    kw:['Phòng','hoàn thiện','hồ sơ','các đơn vị','chưa thực hiện'],
    exp:'(1) Thêm chủ ngữ "Phòng Hành chính quản trị"; (2) Thay đại từ "họ" bằng "các đơn vị" để tránh nhầm lẫn.',
    pt:10,
  },
  {
    sec:'3.2', tag:'Tránh câu tối nghĩa', type:'mcq',
    ttl:'Chọn câu không gây tối nghĩa',
    desc:'Quyết định bổ nhiệm — câu nào diễn đạt rõ ràng nhất?',
    opts:[
      {t:'Ban Giám đốc đã quyết định bổ nhiệm ông Nguyễn Văn A làm Giám đốc bộ phận nhân sự vì ông có nhiều kinh nghiệm trong công tác quản lý.',c:true},
      {t:'Ban Giám đốc đã quyết định bổ nhiệm ông Nguyễn Văn A vì có nhiều kinh nghiệm trong công tác quản lý giám đốc bộ phận nhân sự.',       c:false},
      {t:'Ông Nguyễn Văn A được bổ nhiệm bởi Ban Giám đốc do kinh nghiệm quản lý nhân sự.',                                                      c:false},
    ],
    exp:'Đáp án A tách rõ: chức danh ("làm Giám đốc bộ phận nhân sự") và lý do ("vì ông có kinh nghiệm"). Đáp án B gây tối nghĩa: "quản lý giám đốc" hay "giám đốc bộ phận"?',
    pt:5,
  },
  {
    sec:'3.2', tag:'Câu khẳng định vs phủ định', type:'match',
    ttl:'Phân loại câu: Phù hợp hay Nên tránh?',
    desc:'Xác định câu nào nên dùng trong VBHC và câu nào nên tránh (phủ định kép, tối nghĩa).',
    items:[
      {t:'Ban Giám đốc chỉ xem xét và chấp thuận các đề xuất có tính khả thi.',   ans:'Phù hợp'},
      {t:'Ban Giám đốc không đồng ý với các đề xuất không có tính khả thi.',       ans:'Nên tránh'},
      {t:'Đề nghị các đơn vị thực hiện đúng quy trình đã ban hành.',              ans:'Phù hợp'},
      {t:'Các đơn vị không được phép không tuân thủ quy trình.',                  ans:'Nên tránh'},
    ],
    cats:['Phù hợp','Nên tránh'],
    exp:'Ưu tiên câu khẳng định khi có thể. Nếu buộc dùng phủ định, chỉ dùng một lần — tránh phủ định kép vì gây rối nghĩa.',
    pt:8,
  },
 
  /* ─── TỔNG HỢP ───────────────────────────────────────── */
  {
    sec:'3.2', tag:'Tổng hợp: Cứu văn bản', type:'find',
    ttl:'Tìm tất cả lỗi trong văn bản hỏng',
    desc:'Đây là thông báo vi phạm nhiều quy tắc. Bấm vào tất cả từ/cụm từ có vấn đề.',
    doc:[
      {t:'Kính gửi: '},
      {t:'Toàn thể anh chị em nhân viên yêu quý!',e:true,l:'Khẩu ngữ, sai danh xưng HC'},
      {t:'\n\n'},
      {t:'Chúng tôi vô cùng vui mừng',e:true,l:'Biểu cảm, vi phạm tính khách quan'},
      {t:' thông báo rằng dự án đã đạt được '},
      {t:'thành công ngoài mong đợi',e:true,l:'Mơ hồ, không có số liệu cụ thể'},
      {t:'. Toàn bộ '},
      {t:'staffs',e:true,l:'Từ ngoại lai — dùng "cán bộ, nhân viên"'},
      {t:' đã làm việc rất là tốt. Sắp tới, '},
      {t:'tôi',e:true,l:'Đại từ nhân xưng, không dùng trong VBHC'},
      {t:' muốn tổ chức một buổi '},
      {t:'celebration party',e:true,l:'Từ ngoại lai — dùng "buổi tiệc tri ân"'},
      {t:' để tri ân '},
      {t:'mọi người',e:true,l:'Khẩu ngữ, dùng danh xưng HC'},
      {t:'. Thời gian sẽ được thông báo '},
      {t:'sớm nhất có thể',e:true,l:'Mơ hồ, thiếu thời hạn cụ thể'},
      {t:'.'},
    ],
    te:8,
    exp:'8 lỗi: danh xưng sai, biểu cảm chủ quan, mơ hồ, từ ngoại lai (staffs, celebration party), đại từ nhân xưng, khẩu ngữ, thiếu thời hạn.',
    pt:15,
  },
];
 
 
/* ═══════════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════════ */
let ci  = 0;   // current question index
let sc  = 0;   // current score
let fe  = 0;   // errors found (find type)
let ans = false;
let log = [];  // [{tag, p, m}]
// Store per-question answered state so Back doesn't reset scoring
let states = new Array(QUESTIONS.length).fill(null);
 
const $ = id => document.getElementById(id);
 
 
/* ═══════════════════════════════════════════════════════
   HUD
   ═══════════════════════════════════════════════════════ */
function updHUD() {
  $('qc').innerHTML = (ci + 1) + '<small>/' + QUESTIONS.length + '</small>';
  $('sv').textContent = sc;
  $('pb').style.width = ((ci + 1) / QUESTIONS.length * 100) + '%';
  const d = $('dots');
  d.innerHTML = '';
  QUESTIONS.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i < ci ? ' done' : i === ci ? ' cur' : '');
    d.appendChild(dot);
  });
}
 
 
/* ═══════════════════════════════════════════════════════
   NAV BUTTONS  (Back / Next row below every question)
   ═══════════════════════════════════════════════════════ */
function appendNavRow(card) {
  const row = document.createElement('div');
  row.className = 'nav-row';
 
  // Back button
  const back = document.createElement('button');
  back.className = 'btn nav-back';
  back.innerHTML = '← Quay lại';
  back.disabled = ci === 0;
  back.onclick = () => { ci--; render(); };
 
  // Next / Result button (only after answering, otherwise skip-forward)
  const next = document.createElement('button');
  next.className = 'btn primary nav-next';
  next.innerHTML = ci < QUESTIONS.length - 1 ? 'Tiếp theo →' : 'Xem kết quả →';
  next.id = 'nav-next';
  // Initially disabled if not answered yet
  next.disabled = !ans;
  next.onclick = () => { ci++; render(); };
 
  row.appendChild(back);
  row.appendChild(next);
  card.appendChild(row);
  return next; // caller can enable after answering
}
 
function enableNext() {
  const btn = document.getElementById('nav-next');
  if (btn) btn.disabled = false;
}
 
 
/* ═══════════════════════════════════════════════════════
   FEEDBACK
   ═══════════════════════════════════════════════════════ */
function showFeedback(card, type, msg) {
  let f = card.querySelector('.fb-box');
  if (!f) { f = document.createElement('div'); f.className = 'fb-box'; card.appendChild(f); }
  f.className = 'fb-box ' + type;
  f.textContent = msg;
}
 
 
/* ═══════════════════════════════════════════════════════
   MAIN RENDER
   ═══════════════════════════════════════════════════════ */
function render() {
  if (ci >= QUESTIONS.length) { renderResult(); return; }
 
  const q = QUESTIONS[ci];
  ans = !!states[ci]; // restore answered state
  fe  = 0;
  updHUD();
 
  const area = $('qa');
  area.innerHTML = '';
  const card = document.createElement('div');
  card.className = 'card';
 
  const secLabel = q.sec === '3.1' ? 'Văn phong HC' : 'Ngôn ngữ HC';
  card.innerHTML =
    `<div class="pills">
       <span class="pill sec">${secLabel}</span>
       <span class="pill tag">${q.tag}</span>
     </div>
     <div class="q-title">${q.ttl}</div>
     <div class="q-desc">${q.desc}</div>`;
 
  switch (q.type) {
    case 'mcq':     renderMCQ(card, q);     break;
    case 'find':    renderFind(card, q);    break;
    case 'rewrite': renderRewrite(card, q); break;
    case 'replace': renderReplace(card, q); break;
    case 'match':   renderMatch(card, q);   break;
    case 'order':   renderOrder(card, q);   break;
  }
 
  area.appendChild(card);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
 
function markAnswered(q, p, m) {
  if (!states[ci]) {
    // First time answering this question — record score
    states[ci] = { p, m };
    sc += p;
    // Update log: replace entry at ci if exists
    log[ci] = { tag: q.tag, p, m };
    updHUD();
  }
  ans = true;
  enableNext();
}
 
 
/* ═══════════════════════════════════════════════════════
   MCQ
   ═══════════════════════════════════════════════════════ */
function renderMCQ(card, q) {
  const grid = document.createElement('div');
  grid.className = 'opts' + (q.opts.length <= 3 ? ' c1' : ' c2');
 
  const savedState = states[ci];
 
  q.opts.forEach((o, oi) => {
    const b = document.createElement('button');
    b.className = 'opt-btn';
    b.textContent = o.t;
 
    // Restore state if already answered
    if (savedState) {
      b.disabled = true;
      if (o.c) b.classList.add(savedState.p > 0 ? 'ok' : 'rv');
    }
 
    b.onclick = () => {
      if (ans) return;
      grid.querySelectorAll('.opt-btn').forEach((x, j) => {
        x.disabled = true;
        if (q.opts[j].c) x.classList.add('rv');
      });
      const pts = o.c ? q.pt : 0;
      if (o.c) { b.classList.remove('rv'); b.classList.add('ok'); }
      else     { b.classList.add('no'); }
      markAnswered(q, pts, q.pt);
      showFeedback(card, o.c ? 's' : 'e',
        o.c ? '✓ Chính xác! +' + q.pt + ' điểm. ' + q.exp
            : '✗ Chưa đúng. ' + q.exp);
    };
    grid.appendChild(b);
  });
 
  card.appendChild(grid);
  if (savedState) showFeedback(card, savedState.p > 0 ? 's' : 'e',
    savedState.p > 0 ? '✓ Đã trả lời đúng.' : '✗ Đã trả lời sai.');
  appendNavRow(card);
}
 
 
/* ═══════════════════════════════════════════════════════
   FIND ERRORS  — ẨN highlight trước khi trả lời
   ═══════════════════════════════════════════════════════ */
function renderFind(card, q) {
  const savedState = states[ci];
 
  const doc = document.createElement('div');
  doc.className = 'doc-box';
 
  const errSpans = [];
 
  q.doc.forEach(seg => {
    if (!seg.e) {
      doc.appendChild(document.createTextNode(seg.t));
    } else {
      const sp = document.createElement('span');
      // KEY FIX: start as plain text, NO err-span class yet
      sp.className = savedState ? 'err-span found' : 'err-clickable';
      sp.textContent = seg.t;
      sp.dataset.label = seg.l;
      errSpans.push(sp);
 
      sp.onclick = () => {
        if (ans || sp.classList.contains('found')) return;
        // Reveal this span as a found error
        sp.classList.remove('err-clickable');
        sp.classList.add('err-span', 'found');
        sp.title = seg.l;
        fe++;
        hint.textContent = 'Đã tìm ' + fe + '/' + q.te + ' lỗi';
        if (fe === q.te) {
          // All found
          markAnswered(q, q.pt, q.pt);
          showFeedback(card, 's', '✓ Tìm được tất cả ' + q.te + ' lỗi! +' + q.pt + ' điểm. ' + q.exp);
          skipBtn.disabled = true;
        }
      };
      doc.appendChild(sp);
    }
  });
 
  const hint = document.createElement('div');
  hint.className = 'hint-line';
  hint.textContent = savedState
    ? 'Đã hoàn thành — ' + q.te + '/' + q.te + ' lỗi'
    : 'Bấm vào từ/cụm từ có vấn đề — cần tìm ' + q.te + ' lỗi';
 
  card.appendChild(doc);
  card.appendChild(hint);
 
  const skipBtn = document.createElement('button');
  skipBtn.className = 'btn';
  skipBtn.textContent = 'Bỏ qua';
  skipBtn.style.marginTop = '.5rem';
  if (savedState) skipBtn.disabled = true;
 
  skipBtn.onclick = () => {
    if (ans) return;
    const p = Math.round(q.pt * fe / q.te);
    // Reveal all unfound errors
    errSpans.forEach(sp => {
      if (!sp.classList.contains('found')) {
        sp.classList.remove('err-clickable');
        sp.classList.add('err-span', 'found');
        sp.title = sp.dataset.label;
      }
    });
    hint.textContent = 'Đã hiển thị tất cả ' + q.te + ' lỗi';
    markAnswered(q, p, q.pt);
    const msg = p > 0
      ? `Tìm được ${fe}/${q.te} lỗi. +${p} điểm. ${q.exp}`
      : `Chưa tìm được lỗi nào. ${q.exp}`;
    showFeedback(card, p > 0 ? 'i' : 'e', msg);
    skipBtn.disabled = true;
  };
  card.appendChild(skipBtn);
  appendNavRow(card);
}
 
 
/* ═══════════════════════════════════════════════════════
   REWRITE
   ═══════════════════════════════════════════════════════ */
function renderRewrite(card, q) {
  const savedState = states[ci];
 
  const origBox = document.createElement('div');
  origBox.className = 'doc-box';
  origBox.innerHTML = '<span class="doc-label bad">Văn bản gốc cần sửa</span>' + q.orig;
  card.appendChild(origBox);
 
  const ta = document.createElement('textarea');
  ta.className = 'rw-area';
  ta.placeholder = 'Nhập phiên bản đã chỉnh sửa của bạn vào đây…';
  if (savedState) ta.disabled = true;
  card.appendChild(ta);
 
  const row = document.createElement('div');
  row.className = 'btn-row';
  const submitBtn = document.createElement('button');
  submitBtn.className = 'btn primary';
  submitBtn.textContent = 'Nộp bài';
  const skipBtn = document.createElement('button');
  skipBtn.className = 'btn';
  skipBtn.textContent = 'Xem đáp án';
 
  if (savedState) {
    submitBtn.disabled = true; skipBtn.disabled = true;
    appendModelBox(card, q);
    showFeedback(card, 'i', 'Đã nộp bài ở lần trước.');
  }
 
  submitBtn.onclick = () => {
    if (ans) return;
    const v = ta.value.trim().toLowerCase();
    if (v.length < 15) { showFeedback(card, 'e', 'Hãy viết đủ nội dung trước khi nộp.'); return; }
    ta.disabled = true;
    const hits = q.kw.filter(k => v.includes(k.toLowerCase()));
    const ratio = hits.length / q.kw.length;
    const p = Math.round(q.pt * ratio);
    markAnswered(q, p, q.pt);
    appendModelBox(card, q);
    showFeedback(card, ratio >= .6 ? 's' : 'i',
      `Bài viết có ${hits.length}/${q.kw.length} yếu tố chuẩn. +${p} điểm. ${q.exp}`);
    submitBtn.disabled = true; skipBtn.disabled = true;
  };
 
  skipBtn.onclick = () => {
    if (ans) return;
    ta.disabled = true;
    markAnswered(q, 0, q.pt);
    appendModelBox(card, q);
    showFeedback(card, 'i', q.exp);
    submitBtn.disabled = true; skipBtn.disabled = true;
  };
 
  row.appendChild(submitBtn); row.appendChild(skipBtn);
  card.appendChild(row);
  appendNavRow(card);
}
 
function appendModelBox(card, q) {
  const md = document.createElement('div');
  md.className = 'doc-box model';
  md.innerHTML = '<span class="doc-label good">Văn bản mẫu tham khảo</span>' + q.model;
  card.appendChild(md);
}
 
 
/* ═══════════════════════════════════════════════════════
   REPLACE
   ═══════════════════════════════════════════════════════ */
function renderReplace(card, q) {
  const savedState = states[ci];
  const tbl = document.createElement('table');
  tbl.className = 'mtbl';
  tbl.innerHTML = '<thead><tr><th>Từ/cụm từ cần thay</th><th>Thay bằng</th></tr></thead>';
  const tb = document.createElement('tbody');
  const gaps = [];
  let selGap = null;
 
  q.tbl.forEach((r, i) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td'); td1.textContent = r.bad;
    const td2 = document.createElement('td');
    const gp = document.createElement('span');
    gp.className = 'gap-slot' + (savedState ? ' filled' : '');
    gp.textContent = savedState ? r.ans : 'chọn…';
    gp.dataset.ans = r.ans;
    gaps.push(gp);
    if (!savedState) {
      gp.onclick = () => {
        if (gp.classList.contains('filled') || ans) return;
        selGap = gp;
        gaps.forEach(g => g.classList.toggle('active', g === gp));
      };
    }
    td2.appendChild(gp); tr.appendChild(td1); tr.appendChild(td2); tb.appendChild(tr);
  });
  tbl.appendChild(tb); card.appendChild(tbl);
 
  const chipsDiv = document.createElement('div'); chipsDiv.className = 'chips';
  q.choices.forEach(ch => {
    const chip = document.createElement('span'); chip.className = 'chip';
    chip.textContent = ch;
    if (savedState) chip.classList.add('used');
    chip.onclick = () => {
      if (!selGap || selGap.classList.contains('filled') || chip.classList.contains('used') || ans) return;
      if (ch === selGap.dataset.ans) {
        chip.classList.add('used');
        selGap.textContent = ch; selGap.classList.add('filled'); selGap.classList.remove('active');
        selGap = null;
        if (gaps.every(g => g.classList.contains('filled'))) {
          markAnswered(q, q.pt, q.pt);
          showFeedback(card, 's', '✓ Tuyệt vời! +' + q.pt + ' điểm. ' + q.exp);
          skipBtn.disabled = true;
        }
      } else { chip.classList.add('wrong'); setTimeout(() => chip.classList.remove('wrong'), 600); }
    };
    chipsDiv.appendChild(chip);
  });
  card.appendChild(chipsDiv);
 
  const skipBtn = document.createElement('button');
  skipBtn.className = 'btn'; skipBtn.textContent = 'Xem đáp án'; skipBtn.style.marginTop = '.25rem';
  if (savedState) skipBtn.disabled = true;
  skipBtn.onclick = () => {
    if (ans) return;
    const filled = gaps.filter(g => g.classList.contains('filled')).length;
    const p = Math.round(q.pt * filled / gaps.length);
    gaps.forEach(g => { if (!g.classList.contains('filled')) { g.textContent = g.dataset.ans; g.classList.add('filled'); } });
    markAnswered(q, p, q.pt);
    showFeedback(card, 'i', `Điền đúng ${filled}/${gaps.length} ô. +${p} điểm. ${q.exp}`);
    skipBtn.disabled = true;
  };
  card.appendChild(skipBtn);
  appendNavRow(card);
}
 
 
/* ═══════════════════════════════════════════════════════
   MATCH
   ═══════════════════════════════════════════════════════ */
function renderMatch(card, q) {
  const savedState = states[ci];
  let matched = 0;
  const tbl = document.createElement('table'); tbl.className = 'mtbl';
  tbl.innerHTML = '<thead><tr><th>Câu văn</th><th>Phân loại</th></tr></thead>';
  const tb = document.createElement('tbody'); const rows = [];
 
  q.items.forEach(it => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td'); td1.textContent = it.t;
    const td2 = document.createElement('td');
    const sel = document.createElement('select'); sel.className = 'match-sel';
    sel.innerHTML = '<option value="">— Chọn —</option>' + q.cats.map(c => `<option value="${c}">${c}</option>`).join('');
    if (savedState) { sel.value = it.ans; sel.disabled = true; sel.className = 'match-sel ok'; matched++; }
    sel.onchange = () => {
      if (ans) return;
      if (sel.value === it.ans) {
        sel.disabled = true; sel.className = 'match-sel ok'; matched++;
        if (matched === q.items.length) {
          markAnswered(q, q.pt, q.pt);
          showFeedback(card, 's', '✓ Phân loại đúng tất cả! +' + q.pt + ' điểm. ' + q.exp);
          skipBtn.disabled = true;
        }
      } else { sel.className = 'match-sel no'; setTimeout(() => { sel.className = 'match-sel'; sel.value = ''; }, 800); }
    };
    td2.appendChild(sel); tr.appendChild(td1); tr.appendChild(td2); tb.appendChild(tr);
    rows.push({ sel, ans: it.ans });
  });
  tbl.appendChild(tb); card.appendChild(tbl);
 
  const skipBtn = document.createElement('button'); skipBtn.className = 'btn'; skipBtn.textContent = 'Xem đáp án'; skipBtn.style.marginTop = '.25rem';
  if (savedState) skipBtn.disabled = true;
  skipBtn.onclick = () => {
    if (ans) return;
    const p = Math.round(q.pt * matched / q.items.length);
    rows.forEach(r => { r.sel.value = r.ans; r.sel.disabled = true; r.sel.className = 'match-sel show'; });
    markAnswered(q, p, q.pt);
    showFeedback(card, 'i', `Phân loại đúng ${matched}/${q.items.length}. +${p} điểm. ${q.exp}`);
    skipBtn.disabled = true;
  };
  card.appendChild(skipBtn);
  appendNavRow(card);
}
 
 
/* ═══════════════════════════════════════════════════════
   ORDER
   ═══════════════════════════════════════════════════════ */
function renderOrder(card, q) {
  const savedState = states[ci];
  const wrap = document.createElement('div'); wrap.style.marginBottom = '1rem';
  const indices = savedState
    ? q.correct.map((_, i) => i)  // show in correct order when revisiting
    : q.sentences.map((_, i) => i).sort(() => Math.random() - .5);
  const items = [];
 
  indices.forEach(origIdx => {
    const row = document.createElement('div'); row.className = 'order-row';
    const sel = document.createElement('select'); sel.className = 'order-sel';
    sel.innerHTML = '<option value="">?</option>' + q.sentences.map((_, i) => `<option value="${i+1}">${i+1}</option>`).join('');
    if (savedState) {
      sel.value = q.correct.indexOf(origIdx) + 1;
      sel.disabled = true; sel.className = 'order-sel ok';
    }
    const txt = document.createElement('span'); txt.className = 'order-txt'; txt.textContent = q.sentences[origIdx];
    row.appendChild(sel); row.appendChild(txt); wrap.appendChild(row);
    items.push({ sel, origIdx });
  });
  card.appendChild(wrap);
 
  const row2 = document.createElement('div'); row2.className = 'btn-row';
  const checkBtn = document.createElement('button'); checkBtn.className = 'btn primary'; checkBtn.textContent = 'Kiểm tra';
  const skipBtn  = document.createElement('button'); skipBtn.className  = 'btn';         skipBtn.textContent  = 'Xem đáp án';
  if (savedState) { checkBtn.disabled = true; skipBtn.disabled = true; }
 
  checkBtn.onclick = () => {
    if (ans) return;
    let correct = 0;
    items.forEach(it => {
      const picked = parseInt(it.sel.value) - 1;
      const expected = q.correct.indexOf(it.origIdx);
      it.sel.className = 'order-sel ' + (picked === expected ? 'ok' : 'no');
      it.sel.disabled = true;
      if (picked === expected) correct++;
    });
    const p = Math.round(q.pt * correct / items.length);
    markAnswered(q, p, q.pt);
    showFeedback(card, correct === items.length ? 's' : 'i', `Đúng ${correct}/${items.length} vị trí. +${p} điểm. ${q.exp}`);
    checkBtn.disabled = true; skipBtn.disabled = true;
  };
 
  skipBtn.onclick = () => {
    if (ans) return;
    items.forEach(it => { it.sel.value = q.correct.indexOf(it.origIdx) + 1; it.sel.disabled = true; it.sel.className = 'order-sel show'; });
    markAnswered(q, 0, q.pt);
    showFeedback(card, 'i', q.exp);
    checkBtn.disabled = true; skipBtn.disabled = true;
  };
 
  row2.appendChild(checkBtn); row2.appendChild(skipBtn); card.appendChild(row2);
  appendNavRow(card);
}
 
 
/* ═══════════════════════════════════════════════════════
   RESULT SCREEN + SHARE AS IMAGE
   ═══════════════════════════════════════════════════════ */
function renderResult() {
  $('pb').style.width = '100%';
  $('qc').innerHTML = QUESTIONS.length + '<small>/' + QUESTIONS.length + '</small>';
  $('sv').textContent = sc;
  const d = $('dots'); d.innerHTML = '';
  QUESTIONS.forEach(() => { const dot = document.createElement('div'); dot.className = 'dot done'; d.appendChild(dot); });
 
  const maxPt = QUESTIONS.reduce((s, q) => s + q.pt, 0);
  const pct   = sc / maxPt;
  let rankLabel, rankClass, rankEmoji;
  if      (pct >= .9) { rankLabel = 'Chuyên viên xuất sắc'; rankClass = 'excellent'; rankEmoji = '🏆'; }
  else if (pct >= .7) { rankLabel = 'Chuyên viên khá';      rankClass = 'good';      rankEmoji = '⭐'; }
  else if (pct >= .5) { rankLabel = 'Cần thực hành thêm';   rankClass = 'fair';      rankEmoji = '📝'; }
  else                { rankLabel = 'Cần ôn tập lý thuyết'; rankClass = 'poor';      rankEmoji = '📖'; }
 
  const SECS = [
    { label:'3.1 — Văn phong hành chính', sec:'3.1' },
    { label:'3.2 — Ngôn ngữ hành chính',  sec:'3.2' },
  ];
  let bdHtml = '';
  SECS.forEach(s => {
    const secLogs = log.filter((_, i) => QUESTIONS[i] && QUESTIONS[i].sec === s.sec);
    if (!secLogs.length) return;
    bdHtml += `<div class="bd-section">${s.label}</div>`;
    secLogs.forEach((entry) => {
      bdHtml += `<div class="bd-row"><span class="label">${entry.tag}</span><span class="pts">${entry.p} / ${entry.m}</span></div>`;
    });
  });
 
  $('qa').innerHTML = `
    <div class="card result" id="result-card">
      <div class="result-header">
        <p class="result-total-label">Tổng điểm đạt được</p>
        <div class="result-score">${sc}<small> / ${maxPt}</small></div>
        <div class="result-rank ${rankClass}">${rankEmoji} ${rankLabel}</div>
        <div class="result-pct">${Math.round(pct * 100)}% câu đúng</div>
      </div>
      <div class="breakdown">${bdHtml}</div>
      <div class="result-credit">
        <strong>Soạn thảo Văn bản Hành chính</strong><br>
        Trường ĐH Kinh tế – Luật, ĐHQG TP.HCM
      </div>
      <div class="btn-row result-actions">
        <button class="btn primary" onclick="restart()">↺ Chơi lại</button>
        <button class="btn btn-share" id="btn-save" onclick="saveAsImage()">📷 Lưu kết quả</button>
      </div>
      <div id="share-status" class="share-status"></div>
    </div>`;
}
 
 
/* ── Save result as image ────────────────────────────── */
async function saveAsImage() {
  const btn = $('btn-save');
  const status = $('share-status');
  btn.disabled = true;
  btn.textContent = '⏳ Đang tạo ảnh…';
  status.textContent = '';
 
  // Dynamically load html2canvas if not present
  if (!window.html2canvas) {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
 
  try {
    const card = $('result-card');
    // Temporarily hide action buttons for clean screenshot
    const actions = card.querySelector('.result-actions');
    const shareDiv = card.querySelector('#share-status');
    actions.style.display = 'none';
 
    const canvas = await html2canvas(card, {
      scale: 2,
      useCORS: true,
      backgroundColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-card').trim() || '#ffffff',
    });
 
    actions.style.display = '';
 
    // Try Web Share API (mobile / modern browsers)
    canvas.toBlob(async (blob) => {
      const filename = 'ket-qua-vbhc.png';
      const file = new File([blob], filename, { type: 'image/png' });
 
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            title: 'Kết quả Game Soạn thảo VBHC',
            text: `Tôi đạt ${sc} điểm trong Game Soạn thảo Văn bản Hành chính!`,
            files: [file],
          });
          status.textContent = '✓ Đã chia sẻ thành công!';
          status.className = 'share-status ok';
        } catch (e) {
          if (e.name !== 'AbortError') fallbackDownload(canvas, filename, status);
        }
      } else {
        fallbackDownload(canvas, filename, status);
      }
 
      btn.disabled = false;
      btn.textContent = '📷 Lưu kết quả';
    }, 'image/png');
 
  } catch (err) {
    btn.disabled = false;
    btn.textContent = '📷 Lưu kết quả';
    status.textContent = '⚠ Không thể tạo ảnh. Hãy thử chụp màn hình thủ công.';
    status.className = 'share-status err';
  }
}
 
function fallbackDownload(canvas, filename, status) {
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = filename;
  a.click();
  status.textContent = '✓ Đã tải ảnh xuống!';
  status.className = 'share-status ok';
}
 
 
/* ═══════════════════════════════════════════════════════
   RESTART
   ═══════════════════════════════════════════════════════ */
function restart() {
  ci = 0; sc = 0; fe = 0; ans = false;
  log    = [];
  states = new Array(QUESTIONS.length).fill(null);
  render();
}
 
document.addEventListener('DOMContentLoaded', render);
