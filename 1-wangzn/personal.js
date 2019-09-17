//导航栏切换
var navs = document.getElementsByClassName('subject_nav')[0].querySelectorAll('div');
// console.log(navs);
var contents = document.querySelectorAll('#subject_content>div');
// console.log(contents);
for(var i=0;i<navs.length;i++){
    navs[i].index = i;
    // console.log(i);
    navs[i].onclick = function(){
        if(this.className == "navbg"){
            this.className = "";
        }else{
            var navbgs = document.querySelector('.navbg');
            if(navbgs){//关闭其他导航样式
                navbgs.className = "";
            }
            for(var i=0;i<contents.length;i++){//关闭其他内容
                contents[i].style.display = 'none';
            }
            
            this.className = "navbg";
            contents[this.index].style.display = "block";
        }
    }
}

//意见栏切换
var adds_feedback = document.getElementsByClassName('option_text')[0].querySelector('.add_feedback');
console.log(adds_feedback);
var options = document.querySelector('#option');
console.log(options);
var my_feedback = document.getElementsByClassName('option_text_my')[0].querySelector('.my_feedback');
console.log(my_feedback);
var options_my = document.querySelector('#option_my');
console.log(options_my);
adds_feedback.onclick = function(){
    if (options.style.display == 'block'){
        options.style.display = 'none';
        options_my.style.display = 'block';
    }else{
        options.style.display = 'block';
        options_my.style.display = 'none';
    }
}
my_feedback.onclick = function () {
    if (options.style.display == 'block') {
        options.style.display = 'none';
        options_my.style.display = 'block';
    } else {
        options.style.display = 'block';
        options_my.style.display = 'none';
    }
}


//展开问题部分
var divs = document.getElementsByClassName('details_body')[0].querySelectorAll('li>div');
console.log(divs);
var lis = document.getElementsByClassName('details_body')[0].querySelectorAll('li');
console.log(lis);
for(var i=0;i<divs.length;i++){
    divs[i].index = i;
    console.log(i);
    divs[i].onclick = function(){
        
        if (lis[this.index].style.height == "55px"){
            lis[this.index].style.height = "25px";
            this.innerHTML = "展开问题︾";
        }else{
            lis[this.index].style.height = "55px";
            this.innerHTML = "收起问题︽";
        }
    }
}

//点击提交反馈
var sub = document.getElementsByClassName('details_title')[1].querySelectorAll('ul>li')[3].getElementsByTagName("input")[0];
console.log(sub);//获取提交按钮
var ul = document.getElementsByClassName('details_body')[0].querySelectorAll('ul')[0];
console.log(ul);//获取每一个ul
sub.onclick = function(){
    //跳转到我的意见反馈
    if (options.style.display == 'block') {
        options.style.display = 'none';
        options_my.style.display = 'block';
    } else {
        options.style.display = 'block';
        options_my.style.display = 'none';
    }

    //获取value
    var text_explain = document.querySelector('#option_text').value;
    var explain_text = document.querySelector('#options_explain').value;
    console.log(text_explain);
    console.log(explain_text);
    //追加
    li = document.createElement('li');
    li.innerHTML = `
                    <span>${text_explain}</span>
                    <span> 2019-9-9</span >
                    <span>未回复</span>
                    <div>展开问题︾</div> 
                    <span>
                        <p>${explain_text}</p>
                    </span>
                      `;
    ul.appendChild(li);
    
    //展开问题部分
    var divs = document.getElementsByClassName('details_body')[0].querySelectorAll('li>div');
    console.log(divs);
    var lis = document.getElementsByClassName('details_body')[0].querySelectorAll('li');
    console.log(lis);
    for (var i = 0; i < divs.length; i++) {
        divs[i].index = i;
        console.log(i);
        divs[i].onclick = function () {

            if (lis[this.index].style.height == "55px") {
                lis[this.index].style.height = "25px";
                this.innerHTML = "展开问题︾";
            } else {
                lis[this.index].style.height = "55px";
                this.innerHTML = "收起问题︽";
            }
        }
    }
    
    
}

