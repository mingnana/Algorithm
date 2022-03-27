
# 알고리즘 참고사항

#프로그래밍 언어
Java, JavaScript, C언어

알고리즘 사이트
baekjoon: [https://www.acmicpc.net](https://www.acmicpc.net/)

폴더 구조
사이트 폴더 - 분류 폴더 - 문제 폴더 - 풀이방법 파일
예) backjoon - b200 - q10828 - SsangYoung.java
사이트 폴더: 사이트명을 영어로 작성
예) backjoon, programmers
분류 폴더: 포함되어 있는 문제들을 분류하는 숫자로 작성
예) b200, b1234
문제 폴더: 문제 고유 번호로 작성
예) q10828, q3522
소스코드: 파스칼 표기법으로 자신의 이름 뒤에 .확장자명을 붙여 작성
예) YouMe.java, HyeIn.java


Commit Rule
브랜치 생성: 이름_분류 번호_문제 번호
예) YouMe_200_10828
commit message는 자유롭게 작성
commit 전 프로젝트 pull 진행
pull request의 제목 및 내용은 자유롭게 작성
merge 후 해당 브랜치 삭제
커밋 후 바로 merge하는 것을 권장


Code Review
소스 코드 파일에 댓글을 달아 코드 리뷰 진행
작성시 상대방의 기분을 배려하며 근거를 포함
받은 리뷰를 공격적으로 받아들이지 않기


✅ 소스코드 파일 이름 규칙
자유롭게 작성
폴더명 또는 소스코드 파일명에 콜론 ":" 안됩니다 :D


✅ commit 규칙
commit 메세지: [문제 출처(플랫폼)] 문제이름 / 난이도 / 걸린시간
description: 문제 주소 (option)
터미널에서 작성법:
git commit -m "[BOJ] Hello World / 브론즈5 / 1분" -m "https://www.acmicpc.net/problem/2557"
플랫폼 작성법 통일:
[BOJ] - 백준
[PGS] - 프로그래머스
[LTC] - 리트코드
[CFS] - 코드포스
[SEA] - 삼성SW Expert Academy
[ETC] - 그외

