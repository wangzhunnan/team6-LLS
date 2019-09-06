// 1.构建DOM树
// 2.查找绑定事件的元素
// 3.绑定事件
// 4.查找修改的元素
// 5.修改样式
var title_switchs = document.getElementsByClassName('title_switch')[0].querySelectorAll('div a');
// console.log(title_switchs);
for(var i=0;i<title_switchs.length;i++){
    title_switchs[i].onclick = function(){
        if(this.className == "addbg"){
            this.className = "";
        }else{
            var addbgs = document.querySelector('.addbg');
            if(addbgs){
                addbgs.className = "";
            }
            var switch_page_bgs = document.querySelectorAll('#switch_page_bg>div');
            // console.log(switch_page_bgs);
            for (i = 0; i < switch_page_bgs.length; i++) {
                switch_page_bgs[i].style.display = "none";
            }
            var i = this.href.lastIndexOf("#");
            // console.log(i);
            var id = this.href.slice(i);
            // console.log(id);
            document.querySelector(id).style.display = "block";
            this.className = "addbg";
        }
    }
}

var vios = document.getElementsByClassName('right_bottom')[0].querySelectorAll('div a');
console.log(vios);
for (var i = 0; i < vios.length; i++) {
    vios[i].onclick = function () {
        var vioss = document.querySelectorAll('#page_two_left>div');
        console.log(vioss);
        for (i = 0; i < vioss.length; i++) {
            vioss[i].style.display = "none";
            }
            var i = this.href.lastIndexOf("#");
            console.log(i);
            var id = this.href.slice(i);
            console.log(id);
            document.querySelector(id).style.display = "block";
    }
}





