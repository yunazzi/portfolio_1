        var totalData = 1000;    // 총 데이터 수
        var dataPerPage = 20;    // 한 페이지에 나타낼 데이터 수
        var pageCount = 3;        // 한 화면에 나타낼 페이지 수
        
        function paging(totalData, dataPerPage, pageCount, currentPage){
            
            console.log("currentPage : " + currentPage);
            
            var totalPage = Math.ceil(totalData/dataPerPage);    // 총 페이지 수
            var pageGroup = Math.ceil(currentPage/pageCount);    // 페이지 그룹
            
            console.log("pageGroup : " + pageGroup);
            
            var last = pageGroup * pageCount;    // 화면에 보여질 마지막 페이지 번호
            if(last > totalPage)
                last = totalPage;
            var first = last - (pageCount-1);    // 화면에 보여질 첫번째 페이지 번호
            var next = last+1;
            var prev = first-1;
            
            console.log("last : " + last);
            console.log("first : " + first);
            console.log("next : " + next);
            console.log("prev : " + prev);
     
            var $pingingView = $("#paging");
            
            var html = "";
            
            if(prev > 0)
                html += "<a href=# id='prev'><</a> ";
            
            for(var i=first; i <= last; i++){
                html += "<a href='#' id=" + i + ">" + i + "</a> ";
            }
            
            // if(last < totalPage)
            //     html += "<a href=# id='next'>></a>";
            
            $("#paging").html(html);    // 페이지 목록 생성
            $("#paging a").css({"color": "black","width":"20px","height":"40px","lineHeight":"40px","marginLeft":"15px","marginRight":"15px","textAlign":"center"});
            // $("#paging a:last-child").css({"marginRight":"none"});
            $("#paging a#" + currentPage).css({"text-decoration":"none", 
                                               "width":"20px", "height":"40px","lineHeight":"40px","border-bottom": "1px solid #000",
                                               "font-weight":"bold"});    // 현재 페이지 표시
                                               
            $("#paging a").click(function(){
                
                var $item = $(this);
                var $id = $item.attr("id");
                var selectedPage = $item.text();
                
                if($id == "next")    selectedPage = next;
                if($id == "prev")    selectedPage = prev;
                
                paging(totalData, dataPerPage, pageCount, selectedPage);
            });
                                               
        }
        
        $("document").ready(function(){        
            paging(totalData, dataPerPage, pageCount, 1);
        });