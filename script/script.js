$(function(){

    // 로고 클릭시 최상단으로!!
    $(".logo").on("click",function(){
        $("html,body").stop().animate({scrollTop:0},400);
    });

    // 하단버튼 클릭시 최상단으로!!
    $(".btn_top").on("click",function(){
        $("html,body").stop().animate({scrollTop:0},400);
    });

    // 하단버튼이 500px 도달시 나타남!!
    $(window).scroll(function(){
        if($(this).scrollTop() > 500 ){
            $(".btn_top").fadeIn();
        }else {
            $(".btn_top").fadeOut();
        }
    });

    // 메뉴 클릭시 애니메이션으로 각 컨텐츠 위치 이동!!
    var menu = $(".menu>ul>li");
    var wrap = $("#center>div");
    menu.click(function(){
        var tg = $(this); //$(this) : 이벤트가 일어난 요소 선택
        var i = tg.index(); // 순서값 변환
        var section = wrap.eq(i); //eq - 내가 지정한 변수만 선택
        var top = section.offset().top; //.offset() : 전체문서를 기준으로 선택한 요소의 가로 세로 떨어진 위치의 좌표값 변경시 사용 (top, left만 사용가능)
        $("html,body").stop().animate({scrollTop:top});
    });
 /*여기서 this는 menu고 menu를 tg라고 지정한다음에 그 tg의 순서를 i라고 했을때  내가 지정한 i의 wrap에 있는 해당 부분으로 이동한다는거죠??
 예를 들어서 쿠폰메뉴랑 그 쿠폰 디브랑 같은 a1이라는걸로 연결되어 있어서 메뉴를 eq(i)값으로 지정하면 디브a1로 간다는게 맞나용?*/





});