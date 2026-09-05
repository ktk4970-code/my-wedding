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
    hall: "그레이스홀 2층",
    address: "경기도 수원시 권선구 경수대로 270 터미널동",
    tel: "031-267-5500"
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "초대합니다",
    content: "서로의 일상을 함께하며\n기쁨이 되어주는 사람을 만났습니다.\n\n이제 두 사람이 하나의 길 위에서\n앞으로의 시간을 함께하려 합니다.\n\n저희가 새로운 시작을 내딛는 순간을\n따뜻한 마음으로 함께 해주세요."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "균태 ♥ 지연",
    content:  ""

  },

  // ── 5. 오시는 길 ──
  mapLinks: {
    kakao: "https://place.map.kakao.com/621952280",
    naver: "https://naver.me/5WOQ8T7a"
  },

  transportGuide: [
    {
      title: "지하철 이용시",
      items: [
        "1호선: 수원역 / 세류역",
        "세류역에서 버스 82-1번 (수원버스터미널 하차) / 도보시 15분",
        "수원역 6번출구에서 버스 환승 (수원버스터미널역 하차)",
        "분당선 망포역 하차 4번출구에서 버스 환승 (수원버스터미널 하차)"
      ]
    },
    {
      title: "버스 이용시",
      lead: "수원버스터미널정류장 하차",
      items: [
        "수원역 : 5, 5-1, 7-1, 7-2, 13-5, 88, 88-1, 112, 150, 900",
        "양재역 (7번출구), 강남역 (3번출구) : 3002, 3007",
        "사당 : 7001",
        "분당 야탑 : 4000",
        "세류역 : 82-1",
        "망포역 (4번출구) : 7-1, 13-5, 64"
      ]
    },
    {
      title: "자가용 이용시",
      items: [
        "NC몰 지하주차장 이용 (약 1000대 수용 가능)",
        "※ 2시간 무료 (터미널쪽 엘리베이터 이용)"
      ]
    }
  ],

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
  accountDescription: "직접 축하를 전하지 못하는 분들을 위해\n부득이하게 계좌번호를 기재하게 되었습니다.\n 넓은 아량으로 양해 부탁드립니다. \n",
  accountNotice: "소중한 축하의 마음만으로 충분합니다. \n 화환은 정중히 사양하오니 양해 부탁드립니다.",

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "균태 ♥ 지연 결혼합니다",
    description: "2026년 11월 7일, 소중한 분들을 초대합니다."
  }
};
