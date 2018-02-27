$(document).ready(function(){

   
    // 변수 이름을 're_'로 정한것은 'Reguar Expression'의 머릿글자
	var re_id = /^[a-zA-Z0-9_-]{3,16}$/; // 아이디 검사식
	var re_pw = /^[a-zA-Z0-9_-]{6,18}.*[!,@,#,%,^,&,*,?,_,~])$/; // 비밀번호 검사식
    var re_pw2 = /^([a-zA-Z0-9].*[!,@,#,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/; //비밀번호 영문,숫자와 특수문자 포함 6~16자 영문 대소문자 구별
	var re_mail = /^([\w\.-]+)@([a-z\d\.-]+)\.([a-z\.]{2,6})$/; // 이메일 검사식
    var re_mail2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;//이메일 검사식2
	var re_url = /^(https?:\/\/)?([a-z\d\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/; // URL 검사식
	var re_tel = /^[0-9]{8,11}$/; // 전화번호 검사식
    
    // 쉼표를 이용해서 여러 변수를 한 번에 선언 
	var 
		form = $('.form'), 
		uid = $('#uid'), 
		upw = $('#upw'), 
		mail = $('#mail'), 
		url = $('#url'), 
		tel = $('#tel');
  
    
    // if 조건절 안의 '정규식.test(검사할값)' 형식은 true 또는 false를 반환한다
	// if 조건절 안의 검사 결과가 '!= true' 참이 아니면 {...} 실행
	// 사용자 입력 값이 참이 아니면 alert을 띄운다
	// 사용자 입력 값이 참이 아니면 오류가 발생한 input으로 포커스를 보낸다
	// 사용자 입력 값이 참이 아니면 form 서밋을 중단한다
	form.submit( function() {
		if (re_id.test(uid.val()) != true) { // 아이디 검사
			alert('[ID 입력 오류] 유효한 ID를 입력해 주세요.');
			uid.focus();
			return false;
		} else if(re_pw.test(upw.val()) != true) { // 비밀번호 검사
			alert('[PW 입력 오류] 유효한 PW를 입력해 주세요.');
			upw.focus();
			return false;
		} else if(re_mail2.test(mail.val()) != true) { // 이메일 검사
			alert('[Email 입력 오류] 유효한 이메일 주소를 입력해 주세요.');
			mail.focus();
			return false;
		} else if(re_url.test(url.val()) != true) { // URL 검사
			alert('[Web 입력 오류] 유효한 웹 사이트 주소를 입력해 주세요.');
			url.focus();
			return false;
		} else if(re_tel.test(tel.val()) != true) { // 전화번호 검사
			alert('[Tel 입력 오류] 유효한 전화번호를 입력해 주세요.');
			tel.focus();
			return false;
		}
	});

    /*
    // #uid 인풋에서 onkeyup 이벤트가 발생하면
	uid.keyup( function() {
        
		var s = $(this).next('strong'); // strong 요소를 변수에 할당
		if (uid.val().length == 0) { // 입력 값이 없을 때
			s.text(''); // strong 요소에 포함된 문자 지움
		} else if (uid.val().length < 3) { // 입력 값이 3보다 작을 때
			s.text('너무 짧아요.'); // strong 요소에 문자 출력
		} else if (uid.val().length > 16) { // 입력 값이 16보다 클 때
			s.text('너무 길어요.'); // strong 요소에 문자 출력
		} else if ( re_id.test(uid.val()) != true ) { // 유효하지 않은 문자 입력 시
			s.text('유효한 문자를 입력해 주세요.'); // strong 요소에 문자 출력
		} else { // 입력 값이 3 이상 16 이하일 때
			s.text('적당해요.'); // strong 요소에 문자 출력
		}
	});
    
    // #upw 인풋에서 onkeyup 이벤트가 발생하면
	upw.keyup( function() {
		var s = $(this).next('strong'); // strong 요소를 변수에 할당
		if (upw.val().length == 0) { // 입력 값이 없을 때
			s.text(''); // strong 요소에 포함된 문자 지움
		} else if (upw.val().length < 6) { // 입력 값이 6보다 작을 때
			s.text('너무 짧아요.'); // strong 요소에 문자 출력
		} else if (upw.val().length > 18) { // 입력 값이 18보다 클 때
			s.text('너무 길어요.'); // strong 요소에 문자 출력
		} else { // 입력 값이 6 이상 18 이하일 때
			s.text('적당해요.'); // strong 요소에 문자 출력
		}
	});
  */  
    // 하이픈(-) 키가 눌렸는지 확인
	// 하이픈(-) 키가 눌렸다면 입력 중단
	tel.keydown( function() {
		if(event.keyCode==109 || event.keyCode==189) {
			return false;
		}
	});
    
});