/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Suna Kim
 *      Student ID: 104690227
 *      Date:       Mar 23rd, 2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
// console.log({ artists, songs }, "App Data");

// 확인해본 결과 artists, songs는 배열로 관리되고 있었습니다.
// artists로 버튼들을 만들고, 그 버튼을 누르면 artists의 id로 songs 배열에서 맞는 id만 찾아서 보여줄 예정입니다.
// 자바스크립트에서 배열 안의 엘리먼트에 접근하는 방법은 여러가지가 있지만, 보통 3가지로 구분합니다.
// 1. for loop (단순반복), map() 메소드 (배열을 돌아서 새로운 배열이 필요할때), forEach() 메소드 (그냥 배열 안에 엘리먼트만 접근하고 싶을때)
// 이번에는 배열안의 엘리먼트들에 접근해서, 데이터만 뽑아낼 생각이라서 forEach()를 사용할 예정입니다.
// 기본 문법은 아래와 같습니다.

// 화살표함수 사용 o
/*
artists.forEach((artist)=>{
  console.log(artist)
})
*/
// 화살표함수 사용 x
/*
artists.forEach(function(artist){
  console.log(artist)
})
*/

// 단계 1. 카테고리 버튼을 만듭시다.
/*
// 화살표 함수를 사용할 예정입니다.
artists.forEach((artist)=>{
  // 우리는 이제 배열의 모든 엘리먼트에 접근했습니다.
  console.log(artist)

  // 이 엘리먼트는 가수들이므로, 가수들의 이름을 가지고 버튼을 만들겠습니다. ex) 제이팍, 아이유 ...
  // 일단 우리는 지금 for 문 안을 돌고 있다는걸 기억해야합니다.
  // 지금 이 글들은 한번밖에 안보이겠지만, 우리가 console.log("hi") 를 입력해보면, 해당 콘솔은 artists 배열의 길이만큼 나옵니다.

  // 이렇게 아래처럼 버튼 태그를 하나 생성해 줍니다. 한개처럼 보이지만, 배열의 길이만큼 생성이 됩니다.
  const buttonElement = document.createElement("button");

  // 버튼에 들어갈 이름을 정합니다. 이름은 이제 가수 이름을 가져옵니다. artist가 가수 하나하나의 정보고, 그 정보에서 name 필드를 빼옵니다.
  buttonElement.innerText = artist.name

  // doc에서 보니까, <nav id="menu"> 여기다가 버튼을 다이나믹하게 만들라 합니다.
  // 이럴때 이 엘리먼트의 id는 menu라서, 엘리먼트를 먼저 가져온 다음에, 그 엘리먼트의 자식(child)로 우리가 만든 버튼들을 집어넣어주면 됩니다.
  document.getElementById("menu").appendChild(buttonElement);

  // 여기까지 했으면 이제 버튼이 보일겁니다. (스타일링은 사쿠라 css라는 정의된 파일을 사용하고 있어서 안건드려도 될거같네요. )
})
*/

// 단계 2. 클릭하면 그 가수에 맞는 노래들이 콘솔창에 나오게합시다.
/*
artists.forEach((artist)=>{
  console.log(artist)

  const buttonElement = document.createElement("button");
  buttonElement.innerText = artist.name
  // 버튼을 최종적으로 만드는 과정이 바로 아래의 코드입니다.
  // 이 버튼이 만들어 지기전에 모든 로직을 끝내고 버튼을 만드는게 좋습니다.
  // 아래 버튼만드는 로직은 주석처리해서 예제로 쓰고, 실제 버튼 만들어지는 코드는 최하단에 있습니다.
  // document.getElementById("menu").appendChild(buttonElement);

  // 클릭하면 내 songs 배열을 가수의 id로 필터링 해줄 기능을 버튼을 만들기 전에 붙여서 보냅니다.
  // 바닐라 자바스크립트에서는 addEventListener 라는걸 사용해서 이벤트들을 관리합니다.
  // 이벤트의 종류로는 우리가 평소에 웹 브라우저에서 볼수있는 내용입니다..
  // ex) 마우스 클릭, 스크롤링, 드래그, 키보드 입력 등등등..
  // 우리가 아까 위에서 만든 버튼 엘리먼트에 이벤트를 추가해야하기 때문에,

  // 바로 아래처럼 이벤트가  추가됩니다.
  // buttonElement.addEventListener()

  // addEventListener()의 괄호 안 (파라미터) 에는 속성으로 처음에는 어떤 이벤트가 들어갈지, 그리고 다음에는 그 이벤트가 일어나면 뭐할지를 정해야합니다.
  // 클릭이 일어나면 console.log("click") 이런걸 띄워 보겠습니다.
  // 화살표함수 사용 합니다.

  // buttonElement.addEventListener('click',()=>{
  //   console.log("clicked")
  // })
  
  // 그러면 버튼을 눌러서 내가 누른 버튼의 이름 (artist의 이름) 을 띄워볼까요?
  // buttonElement.addEventListener('click',()=>{
  //   console.log(artist.name)
  // })

  // 여기까지 우리는 이제 버튼에 이벤트를 주는 법을 알게 되었습니다.
  // 다음은 버튼을 누르면, 그거에 맞는 노래들을 찾아서 콘솔창으로 띄워봅시다.
  // 순서가 항상 콘솔로 테스트를 진행하고 => actual view로 뽑아 주는게 좋다고 생각하네요.

  // 우리의 노래는 songs 배열에 있습니다.
  // 항상 배열 내부를 체크하는 습관을 갖도록 합니다.
  // 우리는 songs 배열의 내부 엘리먼트들을 접근하는 로직을 안만들어서 songs의 전체 배열이 나열될겁니다.
  // console.log(songs)

  // 여기서 우리는 내가 누른 artist의 id와 songs의 artistID필드가 같은걸 찾으면 되겠구나를 알 수 있습니다.
  // 자바스크립트의 배열 메소드중에 하나인 filter()를 사용할 예정입니다. 
  // filter()는 map()과 같이 새로운 배열을 만들어내지만, 둘의 차이점은 map()은 내부의 전체 데이터를 가지고 새로운걸 만들고,
  // filter()는 내부에서 로직으로 필요없는걸 버리고 나에게 중요한 애들로만 새로운 배열을 만들 수 있습니다.
  buttonElement.addEventListener('click',()=>{
    
    // 이 버튼 이벤트 내부에서 필터링이 진행됩니다.
    // 버튼을 누를때 마다 필터링이 진행되어야 하기 때문에.
    // 기본 문법 logic에는 실제 로직이 들어가야합니다.
    // songs.filter((element)=>{
    //   return logic
    // })

    // songs.filter((element)=>{
    //   // element 콘솔을 찍어봐도 좋겠습니다.
    //   // console.log(element)

    //   // 아까 말했지만, artist의 id와 songs의 artistID필드가 같은거만 찾으면 됩니다.
    //   console.log(artist.id === element.artistID)

    //   // return 은 지금 안쓰니 주석처리 합니다.
    //   // return
    // })

    // 말했지만, filter()는 새로운 배열을 만들어 냅니다. 우리는 이 새 배열을 저장할 저장고가 하나 있으면 좋겠네요.
    // 간단하게 filteredSongs 라고 이름을 짓겠습니다.
    const filteredSongs = songs.filter((element)=>{
      return artist.id === element.artistID
    })

    // 이제 아래 콘솔을 찍어보면, 우리는 데이터를 나누는데에 성공했네요.
    console.log(filteredSongs)
  })

  // 버튼을 만드는 최종 코드라인
  document.getElementById("menu").appendChild(buttonElement);
})
*/


// 단계 3. 내가 나눈 데이터를 테이블로 보여주기.
artists.forEach((artist)=>{
  console.log(artist)

  const buttonElement = document.createElement("button");
  buttonElement.innerText = artist.name

  buttonElement.addEventListener('click',()=>{
    const filteredSongs = songs.filter((element)=>{
      return artist.id === element.artistID
    })

    console.log(filteredSongs)

    // 바로 위의 콘솔까지가 데이터를 나누는 거였고, 이제 테이블을 생성합니다.
    // 테이블의 구조는 제일 아래에 두겠습니다.

    // 지금 하는거는 아까 단계 1 에서 버튼 만드는거랑 같습니다.
    // 어디에 element들을 넣을지 태그의 id 혹은 class를 가져오고, 거기다가 element 만들기
    // 또 forEach를 사용해서, 필터링된 데이터 내부를 하나하나 갑니다.

    // 이제 테이블을 보면 <tbody id="songs"> 여기다가 데이터를 주면 되겠네요.
    // 내 데이터가 들어가야할  태그에 접근해서 가져옵니다.
    const tableBodyElement = document.querySelector("#songs");

    // 데이터가 추가될때마다 데이터가 쌓이면 안되니까 내부를 청소해 줍니다.
    tableBodyElement.innerHTML = "";
    
    filteredSongs.forEach((song)=>{
      console.log(song)
      // 테이블에 들어갈 태그들을 생성합니다. tr태그와 td태그, 
      // 다시 말하지만 tr은 바디를 감싸줄 애에요. 아래 테이블 구조 보고오셨어야 합니다.
      const trElement = document.createElement("tr"); 

      // 바디 엘리먼트는, 이름, duration, 연도 이렇게 3가지가 필요해요.
      const nameElement = document.createElement("td");
      const durationElement = document.createElement("td");
      const yearElement = document.createElement("td");

      // 그러고 이제, 각자 element에 맞는 데이터들을 넣어줍니다.
      nameElement.innerText = song.title;
      durationElement.innerText = Math.floor(song.duration / 60) + " mins " + (song.duration % 60) + " secs";
      yearElement.innerText = song.year;

      // 감싸주는 애가 tr이니까 여기다가 내가 만든 데이터들을 넣어주고
      trElement.appendChild(nameElement);
      trElement.appendChild(durationElement);
      trElement.appendChild(yearElement);

      // 최종적으로 테이블 바디에 감싸주는애들 줍니다.
      tableBodyElement.appendChild(trElement)
    })
  })

  // 버튼을 만드는 최종 코드라인
  // 다시 읽어보니까 querySelector()를 사용하라는거 같아서 급하게 바꿨네요.
  //querySelector()로 id를 가진 태그에 접근할때는 #id 로 하고, class는 .class로 접근을 합니다.
  // 아래는 아이디로 접근하는 방법이에요.
  document.querySelector("#menu").appendChild(buttonElement);
})


/* 테이블 구조는 아래처럼 이루어져있고, 헤드 갯수랑 바디 갯수는 동일한게 좋습니다.

테이블
  헤드
    내용
    내용
  바디
    내용
    내용

내용은 좀 특별해서 하나의 태그로 감싸주어야 하는게 그게 tr 태그 입니다.

최종적인 코드는 아래와 같네요.

<table>
  <thead>
    <tr>
      <th>내용</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>내용</td>
    </tr>
  </tbody>

</table>


*/