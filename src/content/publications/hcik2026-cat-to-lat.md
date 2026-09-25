---
title: "CAT를 넘어 LAT로: LLM 번역 검수를 위한 인터페이스 Co-design"
titleEn: "Beyond CAT to LAT: Co-designing Interfaces for LLM-Based Machine Translation Post-Editing (MTPE)"
shortTitle: "CAT → LAT"
blurb: "Co-designing LLM translation post-editing interfaces with professional translators"
authors:
  - { name: 김정환, me: true }
  - { name: 서봉원 }
year: 2026
venue: "Proceedings of HCI KOREA 2026 (한국HCI학회 학술대회)"
venueShort: "HCI Korea 2026"
category: domestic
format: "Domestic Conference Paper"
pages: "41–49"
pdf: "/papers/2026-hcik-cat-to-lat.pdf"
teaser: "/images/publications/cat-to-lat.webp"
teaserAlt: "The LAT tool prototype: (A) chunk-based navigation, (B) sync-highlighting and alignment between source and translation, (C) context-aware AI suggestions with confidence, and (D) chunk re-translation"
tags: [hai, creative]
areas: [LLM Translation, Machine Translation Post-Editing, Computer-Aided Translation, Co-design Research, LLM-Assisted Translation]
selected: false
order: 1
lang: ko
url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12745756"
bibkey: kim2026catlat
---

대규모 언어 모델(LLM)은 번역 품질을 혁신하였으며, GPT와 Claude 등은 최신 WMT 평가에서 인간 수준의 성능을 입증하였다. 이에 따라 번역 산업의 중심축은 기계번역 후편집(Machine Translation Post-Editing, MTPE)으로 빠르게 이동하고 있다. 그러나 1990년대에 설계된 기존 컴퓨터 보조 번역(Computer-Aided Translation, CAT) 도구는 세그먼트(문장) 단위의 분절적 패러다임을 따르고 있어, 장문 컨텍스트 유지와 창의적 재구성을 특징으로 하는 LLM 번역을 효과적으로 지원하지 못한다. 본 연구는 이러한 한계를 극복하기 위해 LLM 보조 번역(LLM-Assisted Translation, LAT)이라는 새로운 인터페이스 패러다임을 제안한다. 3–10년 경력의 번역 전문가 5명과 개별 Co-design 세션을 통해 도출된 가이드라인을 기반으로, 자동 정렬 알고리즘과 양방향 상호작용 기능을 포함한 프로토타입을 구현 및 평가하였다. 연구 결과, 참여자들은 명시적 정렬 시각화를 통해 문장 탐색 인지 부하가 현저히 감소했음을 확인하였다. 또한 검수 과정이 순차적 오류 수정에서 전체적 맥락을 조율하는 협업적 디렉팅으로 전환되는 경험적 변화를 보고하였다. 본 연구는 LLM 시대에 적합한 번역 검수 인터페이스의 실증적 디자인 가이드라인과 기술적 구현 가능성을 제시한다.

*Large language models have transformed translation quality, shifting the industry toward machine translation post-editing (MTPE). Yet CAT tools designed in the 1990s follow a segment-level paradigm that cannot support the long-context, creatively restructured output of LLM translation. Through individual co-design sessions with five professional translators (3–10 years of experience), this paper proposes LLM-Assisted Translation (LAT) as a new interface paradigm, implements a prototype with automatic alignment and bidirectional interaction, and reports that explicit alignment visualization reduced navigation load and shifted review from sequential error correction toward collaborative directing of the whole text.*
