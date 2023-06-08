$(document).ready(function(){
    // pagination
    $("#next").css('background-color','#ff5e14');
    $("#prev").click(function() {
        $("#next").css('background-color','#000');
        $("#prev").css('background-color','#ff5e14');
    });
    $("#next").click(function() {
        $("#prev").css('background-color','#000');
        $("#next").css('background-color','#ff5e14');
    });
    //comment
    //name
        var vEmptyName=$("#empty-name").hide();
        var vValidName=$("#valid-name").hide();
    //email
        var vEmptyEmail=$("#empty-email").hide();
        var vValidEmail=$("#valid-email").hide();
    //website
        var vEmptywebsite=$("#empty-website").hide();
        var vValidwebsite=$("#valid-website").hide();
    //comment
        var vEmptycomment=$("#empty-comment").hide();
        var vValidcomment=$("#valid-comment").hide();
    $("#btn_submit").on("click",function(){
        onBtnSubmitClick();
    })
    function onBtnSubmitClick(){
    "use strict";
    //khai báo 
    var vObject={
        name:"",
        email:"",
        website:"",
        comment:""
    }
    //thu thập dữ liệu
        getDataFromInput(vObject);
        console.log(vObject);
    //kiểm tra dữ liệu thu thập
        var vCheck = validateData(vObject);
    }
    //thu thập dữ liệu trên form
    function getDataFromInput(paramObject){
        "use strict";
        var vFullName= $("#name").val();
        paramObject.name=vFullName;

        var vEmail= $("#email").val();
        paramObject.email=vEmail;

        var vwebsite= $("#website").val();
        paramObject.website=vwebsite;

        var vcomment= $("#comment").val();
        paramObject.comment=vcomment;
    }
    //kiểm tra và trả kq
    function validateData(paramObject){
        "use strict";
        var vResult=true;

        var vFullName=paramObject.name.trim();
        var vEmail=paramObject.email.trim();
        var vwebsite=paramObject.website.trim();
        var vcomment=paramObject.comment.trim();

        var vEmptyName=$("#empty-name").val();
        var vValidName=$("#valid-name").val();

        var vEmptyEmail=$("#empty-email").val();
        var vValidEmail=$("#valid-email").val();
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        
        var vEmptywebsite=$("#empty-website").val();
        var vValidwebsite=$("#valid-website").val();

        var vEmptycomment=$("#empty-comment").val();
        var vValidcomment=$("#valid-comment").val();

        var vValidSend=$("#valid-send").val();
        
        if(vFullName==""){
            $("#valid-name").hide();
            $("#empty-name").show();
            $("#empty-name").css("color","red");
            vResult=false;
        }
        if(vFullName!=""){
            $("#empty-name").hide();
            $("#valid-name").show();
            $("#valid-name").css("color","#1ee998");
        }
        if(IsInvalidEmail(vEmail)!=true){
            $("#valid-email").hide();
            $("#empty-email").show();
            $("#empty-email").css("color","red");
            vResult=false;
        }
        if(IsInvalidEmail(vEmail)==true){
            $("#empty-email").hide();
            $("#valid-email").show();
            $("#valid-email").css("color","#1ee998");
            vResult=false;
        }
        if(vwebsite==""){
            $("#valid-website").hide();
            $("#empty-website").show();
            $("#empty-website").css("color","red");
            vResult=false;
        }
        if(vwebsite!=""){
            $("#empty-website").hide();
            $("#valid-website").show();
            $("#valid-website").css("color","#1ee998");
            vResult=false;
        }
        if(vcomment==""){
            $("#valid-comment").hide();
            $("#empty-comment").show();
            $("#empty-comment").css("color","red");
            vResult=false;
        }
        if(vcomment!=""){
            $("#empty-comment").hide();
            $("#valid-comment").show();
            $("#valid-comment").css("color","#1ee998");
            vResult=false;
        }
        if((vFullName!="")&&(IsInvalidEmail(vEmail)==true)&&(vwebsite!="")&&(vcomment!="")){
            alert('Your comment has been sent !');
            vResult=true;
        }
        else{
            vResult=false;
        }
        return vResult;
    }
    //kiểm tra email
    function IsInvalidEmail(the_email) {
        var at = the_email.indexOf("@");
        var dot = the_email.lastIndexOf(".");
        var space = the_email.indexOf(" ");
        
        if ((at != -1) && //có ký tự @
            (at != 0) && //ký tự @ không nằm ở vị trí đầu
            (dot != -1) && //có ký tự .
            (dot > at + 1) && (dot < the_email.length - 1) //phải có ký tự nằm giữa @ và . không nằm cuối cùng
            &&
            (space == -1)) //không có khoẳng trắng 
            {
                return true;
            } else {
                return false;
            }
        }
});