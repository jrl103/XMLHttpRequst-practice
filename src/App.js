// XMLHttpRequst 사용해서 통신하기
//  : 굉장히 오래된 방식
//  : promise를 반환해주지 않아서 쓰기 불편함

import React from 'react';


function App() {

  React.useEffect(() => {
    //1. 객체 만들기
    let xhr = new XMLHttpRequest();
    // jsp가 가지고있는 내장객체여서 따로 임포트 안해와도됨

    // --- readyState 0번 상태 : 객체는 만들었는데 open 을 호출하기 전의 상태

    //2. 요청 만들기
    xhr.open("GET","http://localhost:5001/sleep_times")
    // http 프로토콜 쓰므로 무조건 붙여줘야함 !

    // --- 1 : 호출 해놓은 상태

    //3. 통신 보내기
    xhr.send();
    // 개발자 도구의 network 탭 가서 sleep_times 들어갔는지 확인하기
    //  header : 어떤 헤더, 어떤 메소드, 어떤 Status Code~~ 나와있음
    // Preview : 받아온 데이터
    // Response : 펼쳐서 확인 가능

    //4. 응답값 받아오기(방법 2개)
    //4-1. onreadystatechange (0번 ~ 4번)  
    //     : 완벽하게 끝났을 때만 콜백 호출 X
    //     : XMLHttpRequst.readyState 가 변경될때마다 어떤 콜백함수를 호출해줌
    //      --> readyState ? 
    //           : XMLHttpRequst 의 상태를 반환해주는 것
    //             = 지금 요청이 어떻게 흘러가는지 상태값 반환


    // --- 2 : send는 해놓은 상태

    // --- 3 : 응답을 요청해놓고 그 응답을 기다리는 상태

    // --- 4: 요청이 끝난 상태 = 서버가 응답을 해서 데이터 받아옴 

    xhr.onreadystatechange = function(){
      // console.log(xhr.readyState);
      //상태가 바뀔때마다 호출이 됨

      if(xhr.readyState === 4){
        console.log(xhr.responseText);
        //데이터를 가지고 올 때는 이 객체에 응답도 담겨 있기 때문에 response 사용
      }
    }

    //4-2. onload
    //     : 완벽하게 서버 응답이 끝났을 때, 완료됐을 때만 호출

    xhr.onload = function(){
      //완료됐을 때 띄워줄 function
      console.log(xhr.responseText);
    }



  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
