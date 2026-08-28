const FACT_LAB_URL = 'https://fact-lab.hkust.edu.hk';

// Public biographies and contact details published on the FACT Lab website.
const PROFILE_DETAILS = {
  'ceyu-xu': {
    bio: 'His research lies at the intersection of computer architecture and machine learning, including efficient AI accelerators, large language models, compression and quantization, and AI for EDA.',
    email: 'eeentropy@ust.hk'
  },
  'xueqi-li': {
    bio: 'Her research focuses on compute-in-memory architectures and chips, domain-specific architectures, and hardware-software co-design.',
    email: 'eelixq@ust.hk'
  },
  'weikai-xu': {
    bio: 'His research focuses on emerging device-based in-memory computing and searching, as well as hardware-algorithm co-design for AI acceleration.',
    email: 'xwk@stu.pku.edu.cn'
  },
  'yiyang-yuan': {
    bio: 'His research interests include computing-in-memory, RISC-V, AI accelerators, and embodied intelligence.',
    email: 'sasasasatori@gmail.com'
  },
  'shirui-zhao': {
    bio: 'His research sits at the intersection of AI, computer architecture, and silicon implementation, with a focus on energy-efficient chips for edge AI.',
    email: 'shiruizhao.pro@gmail.com'
  },
  'zeyu-zhu': {
    bio: 'His research interests are efficient AI computing, with a focus on large language models, graph neural networks, and hardware-software co-design.',
    email: 'zzy2tt@163.com'
  },
  'ningzhi-ai': {
    bio: 'His research covers prefetchers and branch predictors for general-purpose computing, along with efficient hardware architectures for LLMs and embodied AI.',
    email: 'anz22@tsinghua.org.cn'
  },
  'xin-fan': {
    bio: 'Her research focuses on interconnects and communication, with a particular interest in data centers and scale-up systems.'
  },
  'yanqin-li': {
    bio: 'She is a Ph.D. student in the Department of ECE at HKUST and received her M.S. degree from the Institute of Computing Technology, Chinese Academy of Sciences.',
    email: 'maxpicca@qq.com'
  },
  'zihan-lin': {
    bio: 'His research interests include 3D vision and embodied AI, with an emphasis on real-world robotic applications.',
    email: 'zihan.lin@connect.ust.hk'
  },
  'qi-liu': {
    bio: 'His experience includes cryptographic and inference accelerators, FPGA backend optimization, and formal verification for hardware.'
  },
  'wenhao-sun': {
    bio: 'His primary research interests lie in architectural support for embodied AI and robotic systems.',
    email: 'sunwh1021@gmail.com'
  },
  'xiangfeng-sun': {
    bio: 'He specializes in computer architecture and VLSI, with an interest in research that is both meaningful and practical.'
  },
  'renati-tuerhong': {
    bio: 'His research interests include VLSI design and computer architecture, with a focus on emerging applications such as 3D Gaussian Splatting and embodied AI.',
    email: 'renati0423@gmail.com'
  },
  'hongyi-wang': {
    bio: 'His research interests include hardware-software co-design and FPGA-based accelerators.'
  },
  'yiran-xia': {
    bio: 'His research connects computer architecture and AI, including specialized hardware for embodied AI and large language models, and AI-assisted EDA.',
    email: 'yxiabl@connect.ust.hk'
  },
  'zhaohui-yang': {
    bio: 'His research focuses on quantum computer system design and fault-tolerant quantum computing, bridging algorithms and physical devices.',
    email: 'youngcius007@gmail.com'
  },
  'jiangnan-yu': {
    bio: 'Her research focuses on the relationship between hardware accelerators and high-performance computing.'
  },
  'ruiyun-zhang': {
    bio: 'Her research focuses on fault-tolerant quantum computing and quantum compiler design, especially for continuous-variable systems.',
    email: 'ryzhang233@gmail.com'
  },
  'ziyi-zhou': {
    bio: 'Her research interests include large language models, embodied AI, and hardware-software co-design for AI accelerators.',
    email: 'ziyizhou@hotmail.com'
  },
  'shiyu-huang': {
    bio: 'She is an undergraduate at Nanjing University and an incoming Ph.D. student at HKUST.',
    email: 'Cathyhhh18@gmail.com'
  },
  'yi-shi': {
    bio: 'She is an undergraduate student in integrated circuit design at Nanjing University and an incoming visiting student at HKUST.',
    email: '231180070@smail.nju.edu.cn'
  },
  'yi-sun': {
    bio: 'He is an incoming Ph.D. student whose research interests focus on computer architecture and AI for architecture.',
    email: 'ecesunyi@gmail.com'
  },
  'shiyi-liu': {
    bio: 'Shiyi Liu (刘时宜) is a Ph.D. student at the Hong Kong University of Science and Technology, specializing in AI-related computer architecture. His research focuses on optimizing both computational performance and energy efficiency within this rapidly evolving field. With a strong interest in both theoretical and practical aspects of computer architecture, he is dedicated to advancing the boundaries of AI technology. Beyond research, he is passionate about fostering innovation through collaboration and contributing to the broader academic and technological community.'
  }
};

const PROFILE_BIOS_ZH = {
  'ceyu-xu': '他的研究位于计算机体系结构与机器学习的交叉领域，包括高效 AI 加速器、大语言模型、压缩与量化，以及面向 EDA 的人工智能。',
  'xueqi-li': '她的研究聚焦存内计算架构与芯片、领域专用架构，以及软硬件协同设计。',
  'weikai-xu': '他的研究聚焦基于新兴器件的存内计算与检索，以及面向 AI 加速的算法与硬件协同设计。',
  'yiyang-yuan': '他的研究兴趣包括存内计算、RISC-V、AI 加速器和具身智能。',
  'shirui-zhao': '他的研究位于人工智能、计算机体系结构与芯片实现的交叉领域，重点关注面向边缘 AI 的高能效芯片。',
  'zeyu-zhu': '他的研究方向是高效 AI 计算，重点包括大语言模型、图神经网络和软硬件协同设计。',
  'ningzhi-ai': '他的研究涵盖通用计算中的预取器与分支预测器，以及面向大语言模型和具身智能的高效硬件架构。',
  'xin-fan': '她的研究聚焦互连与通信，尤其关注数据中心和 scale-up 系统。',
  'yanqin-li': '她是香港科技大学电子与计算机工程学系博士生，硕士毕业于中国科学院计算技术研究所。',
  'zihan-lin': '他的研究兴趣包括三维视觉与具身智能，重点关注真实世界中的机器人应用。',
  'qi-liu': '他的研究经历包括密码与推理加速器、FPGA 后端优化，以及面向硬件的形式化验证。',
  'wenhao-sun': '他的主要研究兴趣是面向具身智能与机器人系统的体系结构支持。',
  'xiangfeng-sun': '他专注于计算机体系结构与超大规模集成电路，并关注兼具意义与实践价值的研究。',
  'renati-tuerhong': '他的研究兴趣包括超大规模集成电路设计与计算机体系结构，重点关注三维高斯泼溅和具身智能等新兴应用。',
  'hongyi-wang': '他的研究兴趣包括软硬件协同设计和基于 FPGA 的加速器。',
  'yiran-xia': '他的研究连接计算机体系结构与人工智能，包括面向具身智能和大语言模型的专用硬件，以及 AI 辅助 EDA。',
  'zhaohui-yang': '他的研究聚焦量子计算机系统设计与容错量子计算，致力于连接算法与物理器件。',
  'jiangnan-yu': '她的研究聚焦硬件加速器与高性能计算之间的关系。',
  'ruiyun-zhang': '她的研究聚焦容错量子计算与量子编译器设计，尤其关注连续变量系统。',
  'ziyi-zhou': '她的研究兴趣包括大语言模型、具身智能，以及面向 AI 加速器的软硬件协同设计。',
  'shiyu-huang': '她是南京大学本科生，即将进入香港科技大学攻读博士学位。',
  'yi-shi': '她是南京大学集成电路设计专业本科生，即将以访问学生身份来到香港科技大学。',
  'yi-sun': '他即将进入博士阶段，研究兴趣聚焦计算机体系结构与 AI for Architecture。',
  'shiyi-liu': '刘时宜是香港科技大学博士生，专注于与人工智能相关的计算机体系结构。他的研究重点是在这一快速发展的领域中同时优化计算性能与能效。凭借对计算机体系结构理论与实践的浓厚兴趣，他致力于拓展人工智能技术的边界。在科研之外，他也热衷于通过合作促进创新，并为更广泛的学术与技术社群作出贡献。'
};

function officialProfile(name, englishName, role, slug, photoPath, extra = {}) {
  return {
    name,
    englishName,
    role,
    profileUrl: `${FACT_LAB_URL}/authors/${slug}/`,
    photoUrl: `${FACT_LAB_URL}${photoPath}`,
    ...PROFILE_DETAILS[slug],
    bioZh: PROFILE_BIOS_ZH[slug],
    ...extra
  };
}

export const WORKSTATION_ASSIGNMENTS = {
  S01: officialProfile('王鸿懿', 'Hongyi Wang', '博士生', 'hongyi-wang', '/media/authors/hongyi-wang_hu_15b8f62c25a5b942.jpeg'),
  S02: officialProfile('孙祥丰', 'Xiangfeng Sun', '博士生', 'xiangfeng-sun', '/media/authors/xiangfeng-sun_hu_8bc7fd0748731dff.jpg'),
  S03: { status: 'vacant' },
  S04: officialProfile('杨朝辉', 'Zhaohui Yang', '博士生', 'zhaohui-yang', '/media/authors/zhaohui-yang_hu_7fdaf2d75dd132dd.jpg'),
  S05: officialProfile('刘奇', 'Qi Liu', '博士生', 'qi-liu', '/media/authors/qi-liu_hu_775f1b971bab202c.jpg'),
  S06: officialProfile('张瑞芸', 'Ruiyun Zhang', '博士生', 'ruiyun-zhang', '/media/authors/ruiyun-zhang_hu_b3fa0e352226dc2a.jpg'),
  S07: officialProfile('李雪绮', 'Xueqi Li', '博士后研究员', 'xueqi-li', '/media/authors/xueqi-li_hu_9e6ca090f6773209.jpg'),
  S08: officialProfile('朱泽雨', 'Zeyu Zhu', '博士后研究员', 'zeyu-zhu', '/media/authors/zeyu-zhu_hu_3b6bd6ce77ed5539.png'),
  S09: officialProfile('夏一然', 'Yiran Xia', '博士生', 'yiran-xia', '/media/authors/yiran-xia_hu_b23fb79046a04836.jpg'),
  S10: {
    name: '刘时宜',
    englishName: 'Shiyi Liu',
    role: '博士生',
    photoUrl: './assets/people/shiyi-liu.jpg',
    profileUrl: 'https://fact-lab.hkust.edu.hk/authors/shiyi-liu/',
    bio: PROFILE_DETAILS['shiyi-liu'].bio,
    bioZh: PROFILE_BIOS_ZH['shiyi-liu']
  },
  S11: officialProfile('赵士瑞', 'Shirui Zhao', '博士后研究员', 'shirui-zhao', '/media/authors/shirui-zhao_hu_237130f613f8124d.webp', {
    markerPhotoPosition: 'center 22%'
  }),
  S12: officialProfile('范心', 'Xin Fan', '博士生', 'xin-fan', '/media/authors/xin-fan_hu_40a39f2291992fb9.webp'),
  S13: officialProfile('林梓涵', 'Zihan Lin', '博士生', 'zihan-lin', '/media/authors/zihan-lin_hu_5ebf5b29390a6878.jpg'),
  S14: officialProfile('徐策羽', 'Ceyu Xu', '研究助理教授', 'ceyu-xu', '/media/authors/ceyu-xu_hu_6a71ef46f64bfd00.jpg'),
  S15: officialProfile('袁易扬', 'Yiyang Yuan', '博士后研究员', 'yiyang-yuan', '/media/authors/yiyang-yuan_hu_dbc00f589ed1c391.png'),
  S16: officialProfile('孙燚', 'Yi Sun', 'Incoming Student', 'yi-sun', '/media/authors/yi-sun_hu_e17229e3830dde7d.jpg'),
  S17: { name: '李泊含', role: '交换生', note: '非实验室正式成员' },
  S18: officialProfile('余江南', 'Jiangnan Yu', '博士生', 'jiangnan-yu', '/media/authors/jiangnan-yu_hu_fa59b1ffa0ebe57d.jpg'),
  S19: officialProfile('徐伟凯', 'Weikai Xu', '博士后研究员', 'weikai-xu', '/media/authors/weikai-xu_hu_56721bbb67c8747a.jpg'),
  S20: officialProfile('李燕琴', 'Yanqin Li', '博士生', 'yanqin-li', '/media/authors/yanqin-li_hu_45311ad5c1081d46.png'),
  S21: officialProfile('施熠', 'Yi Shi', 'Incoming Student', 'yi-shi', '/media/authors/yi-shi_hu_9de2ed2b00a03d35.jpg'),
  S22: officialProfile('热纳提', 'Renati Tuerhong', '博士生', 'renati-tuerhong', '/media/authors/renati-tuerhong_hu_30cd46ea0efdbf5.jpg'),
  S23: officialProfile('艾宁智', 'Ningzhi Ai', '博士生', 'ningzhi-ai', '/media/authors/ningzhi-ai_hu_664bf51fa7a3dcfa.jpeg'),
  S24: officialProfile('黄诗宇', 'Shiyu Huang', 'Incoming Student', 'shiyu-huang', '/media/authors/shiyu-huang_hu_76af7003bcfa3558.jpg'),
  S25: officialProfile('周子易', 'Ziyi Zhou', '博士生', 'ziyi-zhou', '/media/authors/ziyi-zhou_hu_7e91a357af57de51.jpg'),
  S26: { status: 'vacant' },
  S27: officialProfile('孙文昊', 'Wenhao Sun', '博士生', 'wenhao-sun', '/media/authors/wenhao-sun_hu_a22b2dc81c32c914.jpg'),
  S28: { status: 'vacant' }
};
