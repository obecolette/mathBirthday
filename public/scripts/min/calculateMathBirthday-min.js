var calculate=function(){for(var e=$("#day").val(),t=$("#month").val()-1,a=$("#year").val(),n=new Date(a,t,e),l=n.getTime(),o=new Date,p=o.getTime(),c=864e5,r=(p-l)/c,u=1,v=0;r>Math.pow(10,v);)v+=1,u=10*u;var h=c*Math.pow(10,v)+l,i=new Date(h);$("#math-birthday").empty().append(u),$("#next-date").empty().append(i.getMonth()+1+"/"+i.getDate()+"/"+i.getFullYear()+"!")};$("button").on("click",function(e){e.preventDefault(),calculate()});