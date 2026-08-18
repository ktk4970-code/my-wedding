/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
  groom: {
    name: "균태",
    nameEn: "Groom",
    father: "김진호",
    mother: "정은주",
    fatherDeceased: false,
    motherDeceased: true
  },

  bride: {
    name: "지연",
    nameEn: "Bride",
    father: "차정환",
    mother: "이란주",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-11-07",
    time: "17:00",
    venue: "수원 마이어스",
    hall: "그레이스홀 3층",
    address: "경기도 수원시 권선구 경수대로 270 터미널동",
    tel: "031-267-5500"
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "초대합니다",
    content: "서로의 일상을 함께하며\n 하루의 기쁨이 되어주는 사람을 만났습니다.\n\n 이제 두 사람이 하나의 길 위에서\n 앞으로의 시간을 함께하려 합니다. \n\n 저희가 새로운 시작을 내딛는 순간을\n  따뜻한 마음으로 함께 해주세요."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "강릉 너무 힘들었어요\n 살려주세요\n\n여러분에게 우리를 소개할게요."
  },

  // ── 5. 오시는 길 ──
  mapLinks: {
    kakao: "https://place.map.kakao.com/621952280",
    naver: "https://naver.me/5WOQ8T7a"
  },

  // ── 6. 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김균태", bank: "토스뱅크", number: "1000-1720-4308" },
      { role: "아버지", name: "김진호", bank: "국민은행", number: "489725-89-122170" },
    ],
    bride: [
      { role: "신부", name: "차지연", bank: "카카오뱅크", number: "3333-19-9690626" },
      { role: "아버지", name: "차정환", bank: "우리은행", number: "080-325997-02-40-1" },
      { role: "어머니", name: "이란주", bank: "국민은행", number: "023501-04-132934" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2026년 5월 9일, 소중한 분들을 초대합니다."
  }
};
