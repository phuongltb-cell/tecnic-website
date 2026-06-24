import {
  HeartPulse,
  Zap,
  Layers,
  Mountain,
  Truck,
  type LucideIcon,
} from 'lucide-react'

export type Sector = {
  slug: string
  icon: LucideIcon
  name: string
  image: string
  desc: string
}

export const sectors: Sector[] = [
  {
    slug: 'y-te',
    icon: HeartPulse,
    name: 'Y tế',
    image: '/biz-medical.png',
    desc: 'Cung cấp giải pháp công nghệ và dịch vụ y tế tiên tiến, nâng cao chất lượng chăm sóc sức khỏe.',
  },
  {
    slug: 'nang-luong',
    icon: Zap,
    name: 'Năng lượng',
    image: '/biz-electric.png',
    desc: 'Phát triển hệ thống điện và năng lượng tái tạo, hướng tới tương lai phát triển bền vững.',
  },
  {
    slug: 'vat-lieu',
    icon: Layers,
    name: 'Vật liệu',
    image: '/biz-material.png',
    desc: 'Nghiên cứu và sản xuất vật liệu công nghệ cao phục vụ công nghiệp và xây dựng.',
  },
  {
    slug: 'khoang-san',
    icon: Mountain,
    name: 'Khoáng sản',
    image: '/biz-mineral.png',
    desc: 'Khai thác và chế biến khoáng sản hiệu quả, tối ưu tài nguyên gắn với trách nhiệm môi trường.',
  },
  {
    slug: 'logistics',
    icon: Truck,
    name: 'Logistics',
    image: '/biz-logistics.png',
    desc: 'Đầu tư hạ tầng logistics và vận tải, kết nối chuỗi cung ứng thông minh và hiệu quả.',
  },
]

export type Member = {
  brand: string
  name: string
  field: string
}

export const members: Member[] = [
  {
    brand: 'Tecnic Medical',
    name: 'Công Ty CP Công Nghệ Và Dịch Vụ Y Tế Tecnic',
    field: 'Y tế',
  },
  {
    brand: 'Tecnic Electric',
    name: 'Công Ty CP Năng Lượng Và Hệ Thống Điện Tecnic',
    field: 'Năng lượng',
  },
  {
    brand: 'Tecnic Mat',
    name: 'Công Ty CP Công Nghệ Vật Liệu Tecnic',
    field: 'Vật liệu',
  },
  {
    brand: 'Tecmin',
    name: 'Công Ty CP Khoáng Sản Tecmin',
    field: 'Khoáng sản',
  },
  {
    brand: 'Tecin Logistics',
    name: 'Công Ty CP Đầu Tư Hạ Tầng Logistics Và Vận Tải Tecin',
    field: 'Logistics',
  },
]

export type NewsItem = {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  author: string
  content: string[]
}

export const news: NewsItem[] = [
  {
    slug: 'tecnic-ky-ket-hop-tac-chien-luoc',
    title: 'TECNIC ký kết hợp tác chiến lược mở rộng hệ sinh thái công nghệ',
    excerpt:
      'Lễ ký kết đánh dấu bước tiến quan trọng trong chiến lược mở rộng quy mô và năng lực công nghệ của tập đoàn.',
    image: '/news-1.png',
    category: 'Tin tập đoàn',
    date: '2026-05-28',
    author: 'Ban Truyền thông TECNIC',
    content: [
      'Ngày 28/05/2026, Tập đoàn TECNIC chính thức ký kết thỏa thuận hợp tác chiến lược với các đối tác hàng đầu nhằm mở rộng hệ sinh thái công nghệ đa ngành. Sự kiện được tổ chức trang trọng với sự tham dự của lãnh đạo tập đoàn cùng đại diện các đơn vị thành viên.',
      'Thỏa thuận tập trung vào việc chia sẻ nguồn lực, chuyển giao công nghệ và phối hợp triển khai các dự án trọng điểm trong lĩnh vực y tế, năng lượng và logistics. Đây được xem là nền tảng quan trọng giúp TECNIC nâng cao năng lực cạnh tranh và phục vụ khách hàng tốt hơn.',
      'Phát biểu tại buổi lễ, đại diện lãnh đạo TECNIC khẳng định cam kết phát triển bền vững, lấy công nghệ và đổi mới sáng tạo làm động lực tăng trưởng dài hạn cho toàn tập đoàn.',
    ],
  },
  {
    slug: 'hoi-thao-cong-nghe-tecnic-2026',
    title: 'Hội thảo công nghệ TECNIC 2026: Định hình tương lai số',
    excerpt:
      'Hơn 500 chuyên gia và đối tác đã tham dự hội thảo thường niên về xu hướng công nghệ và chuyển đổi số.',
    image: '/news-2.png',
    category: 'Sự kiện',
    date: '2026-04-15',
    author: 'Ban Truyền thông TECNIC',
    content: [
      'Hội thảo công nghệ TECNIC 2026 đã diễn ra thành công với chủ đề "Định hình tương lai số", quy tụ hơn 500 chuyên gia, đối tác và khách hàng trong và ngoài nước.',
      'Tại hội thảo, các diễn giả đã chia sẻ những góc nhìn sâu sắc về xu hướng chuyển đổi số, ứng dụng trí tuệ nhân tạo và các giải pháp công nghệ bền vững cho doanh nghiệp.',
      'Sự kiện cũng là dịp để TECNIC giới thiệu các giải pháp công nghệ mới nhất, đồng thời thắt chặt quan hệ hợp tác với mạng lưới đối tác chiến lược.',
    ],
  },
  {
    slug: 'tecnic-electric-khoi-cong-du-an-nang-luong',
    title: 'Tecnic Electric khởi công dự án năng lượng tái tạo quy mô lớn',
    excerpt:
      'Dự án góp phần hiện thực hóa cam kết phát triển bền vững và trung hòa carbon của tập đoàn.',
    image: '/news-3.png',
    category: 'Dự án',
    date: '2026-03-02',
    author: 'Tecnic Electric',
    content: [
      'Công ty CP Năng lượng và Hệ thống điện Tecnic (Tecnic Electric) vừa chính thức khởi công dự án năng lượng tái tạo quy mô lớn, đánh dấu bước tiến quan trọng trong chiến lược phát triển năng lượng xanh của tập đoàn.',
      'Dự án ứng dụng các công nghệ tiên tiến trong khai thác năng lượng mặt trời và hệ thống lưu trữ thông minh, hướng tới tối ưu hiệu suất và giảm thiểu tác động môi trường.',
      'Khi hoàn thành, dự án sẽ đóng góp đáng kể vào nguồn cung năng lượng sạch, đồng thời hiện thực hóa cam kết phát triển bền vững và trung hòa carbon của TECNIC.',
    ],
  },
]

export type Job = {
  slug: string
  title: string
  department: string
  location: string
  type: string
  level: string
  salary: string
  posted: string
  summary: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
}

export const jobs: Job[] = [
  {
    slug: 'ky-su-he-thong-dien',
    title: 'Kỹ sư Hệ thống điện',
    department: 'Năng lượng',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    level: 'Trung cấp',
    salary: 'Thỏa thuận',
    posted: '2026-05-20',
    summary:
      'Tham gia thiết kế, triển khai và vận hành các hệ thống điện và năng lượng tái tạo cho các dự án của Tecnic Electric.',
    responsibilities: [
      'Thiết kế và tính toán hệ thống điện cho các dự án năng lượng',
      'Giám sát thi công và nghiệm thu công trình điện',
      'Phối hợp với các bộ phận kỹ thuật để tối ưu giải pháp',
      'Lập báo cáo kỹ thuật và đề xuất cải tiến',
    ],
    requirements: [
      'Tốt nghiệp đại học chuyên ngành Điện, Tự động hóa hoặc tương đương',
      'Tối thiểu 2 năm kinh nghiệm trong lĩnh vực hệ thống điện',
      'Thành thạo phần mềm thiết kế điện (AutoCAD, ETAP...)',
      'Kỹ năng làm việc nhóm và giải quyết vấn đề tốt',
    ],
    benefits: [
      'Mức lương cạnh tranh, thưởng theo hiệu quả công việc',
      'Bảo hiểm đầy đủ theo quy định và bảo hiểm sức khỏe',
      'Cơ hội đào tạo và phát triển nghề nghiệp',
      'Môi trường làm việc chuyên nghiệp, năng động',
    ],
  },
  {
    slug: 'chuyen-vien-kinh-doanh-y-te',
    title: 'Chuyên viên Kinh doanh thiết bị y tế',
    department: 'Y tế',
    location: 'TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    level: 'Nhân viên',
    salary: '15 - 25 triệu',
    posted: '2026-05-10',
    summary:
      'Phát triển thị trường và chăm sóc khách hàng trong lĩnh vực thiết bị, giải pháp công nghệ y tế của Tecnic Medical.',
    responsibilities: [
      'Tìm kiếm và phát triển khách hàng mới trong lĩnh vực y tế',
      'Tư vấn giải pháp và sản phẩm phù hợp cho khách hàng',
      'Xây dựng và duy trì quan hệ với bệnh viện, phòng khám',
      'Đạt chỉ tiêu doanh số được giao',
    ],
    requirements: [
      'Tốt nghiệp đại học các chuyên ngành liên quan',
      'Có kinh nghiệm kinh doanh thiết bị y tế là lợi thế',
      'Kỹ năng giao tiếp và đàm phán tốt',
      'Chủ động, nhiệt huyết và định hướng kết quả',
    ],
    benefits: [
      'Lương cứng cộng hoa hồng hấp dẫn',
      'Bảo hiểm đầy đủ và chế độ phúc lợi tốt',
      'Được đào tạo về sản phẩm và kỹ năng bán hàng',
      'Lộ trình thăng tiến rõ ràng',
    ],
  },
  {
    slug: 'nhan-vien-van-hanh-logistics',
    title: 'Nhân viên Vận hành Logistics',
    department: 'Logistics',
    location: 'Hải Phòng',
    type: 'Toàn thời gian',
    level: 'Nhân viên',
    salary: '12 - 18 triệu',
    posted: '2026-04-28',
    summary:
      'Điều phối và vận hành chuỗi cung ứng, đảm bảo hoạt động logistics hiệu quả cho Tecin Logistics.',
    responsibilities: [
      'Điều phối hoạt động kho bãi và vận tải',
      'Theo dõi và xử lý đơn hàng, chứng từ vận chuyển',
      'Phối hợp với đối tác vận tải và khách hàng',
      'Tối ưu quy trình vận hành logistics',
    ],
    requirements: [
      'Tốt nghiệp cao đẳng/đại học chuyên ngành Logistics, Kinh tế',
      'Ưu tiên có kinh nghiệm trong lĩnh vực chuỗi cung ứng',
      'Thành thạo tin học văn phòng',
      'Cẩn thận, có trách nhiệm và chịu được áp lực',
    ],
    benefits: [
      'Thu nhập ổn định và phụ cấp',
      'Bảo hiểm và phúc lợi theo quy định',
      'Môi trường làm việc hiện đại',
      'Cơ hội phát triển trong ngành logistics',
    ],
  },
  {
    slug: 'ky-su-nghien-cuu-vat-lieu',
    title: 'Kỹ sư Nghiên cứu vật liệu',
    department: 'Vật liệu',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    level: 'Trung cấp',
    salary: 'Thỏa thuận',
    posted: '2026-04-12',
    summary:
      'Nghiên cứu, phát triển và thử nghiệm các vật liệu công nghệ cao phục vụ sản xuất công nghiệp tại Tecnic Mat.',
    responsibilities: [
      'Nghiên cứu và phát triển vật liệu mới',
      'Thực hiện thử nghiệm và đánh giá chất lượng vật liệu',
      'Phân tích dữ liệu và lập báo cáo nghiên cứu',
      'Hỗ trợ chuyển giao công nghệ vào sản xuất',
    ],
    requirements: [
      'Tốt nghiệp đại học chuyên ngành Khoa học vật liệu, Hóa học',
      'Có kinh nghiệm nghiên cứu là lợi thế',
      'Tư duy phân tích và khả năng làm việc với dữ liệu',
      'Đam mê nghiên cứu và đổi mới sáng tạo',
    ],
    benefits: [
      'Mức lương cạnh tranh',
      'Môi trường nghiên cứu hiện đại',
      'Cơ hội tham gia các dự án công nghệ cao',
      'Chế độ đào tạo và phát triển chuyên môn',
    ],
  },
]

export type Customer = {
  name: string
  field: string
}

export const customers: Customer[] = [
  { name: 'Bệnh viện Đa khoa Quốc tế', field: 'Y tế' },
  { name: 'Tập đoàn Điện lực', field: 'Năng lượng' },
  { name: 'Khu công nghiệp công nghệ cao', field: 'Vật liệu' },
  { name: 'Công ty Khai khoáng Quốc gia', field: 'Khoáng sản' },
  { name: 'Cảng biển Quốc tế', field: 'Logistics' },
  { name: 'Hệ thống Y tế tư nhân', field: 'Y tế' },
  { name: 'Nhà máy Năng lượng tái tạo', field: 'Năng lượng' },
  { name: 'Tổng công ty Xây dựng', field: 'Vật liệu' },
]

export function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
