/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 청첩장의 주요 문구와 정보를 이 파일에서 관리합니다.
 * 이미지는 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조:
 *   images/hero/1.jpg
 *   images/story/1.jpg, 2.jpg, ...
 *   images/gallery/1.jpg, 2.jpg, ...
 *   images/location/1.jpg
 *   images/og/1.jpg
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,

  // ── 2. 메인 ──
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
    content: "서로의 일상을 함께하며\n하루의 기쁨이 되어주는 사람을 만났습니다.\n\n이제 두 사람이 하나의 길 위에서\n앞으로의 시간을 함께하려 합니다.\n\n저희가 새로운 시작을 내딛는 순간을\n따뜻한 마음으로 함께 해주세요."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content:  "어릴적부터 눈웃음이 매력인 그녀\n 아직도 막내 티를 벗어내지 못한 그\n\n 여러분에게 우리의 어릴 적 사진을 \n 함께 소개할게요."
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
      { role: "아버지", name: "김진호", bank: "국민은행", number: "489725-89-122170" }
    ],
    bride: [
      { role: "신부", name: "차지연", bank: "카카오뱅크", number: "3333-19-9690626" },
      { role: "아버지", name: "차정환", bank: "우리은행", number: "080-325997-02-40-1" },
      { role: "어머니", name: "이란주", bank: "국민은행", number: "023501-04-132934" }
    ]
  },

  accountNotice: "소중한 축하의 마음으로 충분합니다.\n화환은 정중히 사양하오니 양해 부탁드립니다.",

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "균태 ♥ 지연 결혼합니다",
    description: "2026년 11월 7일, 소중한 분들을 초대합니다."
  }
};
