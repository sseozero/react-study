# react-study


### :paperclips: index
- `src` > `chapter05` 
: 댓글 컴포넌트 만들기

- `src` > `chapter04`
: 시계 만들기

- `src` > `chapter03`
: JSX 코드 작성해보기


---------

### :boom: 내가 만난 오류

1. 이미지 엑박 오류
> 이미지 import로 선언 후 사용 or img src={require("경로")} 


> 참고 : https://gomgomkim.tistory.com/11


2. npm start 오류 - EJSONPARSE
> -package.json 파일에 쓸데없는 내용이 포함되어있는경우 지우면 해결 


> -나의 경우 불필요한 , 가 들어있어서 지웠더니 해결완료


> 참고 : https://hyeon-gomi.tistory.com/entry/Step3-1-npm-install%EC%97%90%EC%84%9C-%EB%B0%9C%EC%83%9D%ED%95%9C-code-EJSONPARSE-ERROR


------

### :memo: Summary 

- [ props ] : 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체

- props 특징 : read only = 값을 변경 할 수 없다

* 함수가 'pure' 하다 : 입력값(input)을 변경하지 않으며, 같은 입력값에 대해서는 항상 같은 출력값(output)을 리턴 <-> 'impure'

- 공식문서  => 모든 리액트 컴포넌트는 그들의 props에 관해서는 pure 함수같은 역할을 해야한다.


- Component 이름은  항상 대문자로 시작해야함! => 소문자는 HTML dom 태그로 인식하기 때문

- 컴포넌트 안에 여러개의 컴포넌트 사용 가능


- 컴포넌트 추출 장점 => 재사용성,개발속도 향상



