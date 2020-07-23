///.....................52-57.....................

img=[]
img[0]=" file:///C:\Users\funto\Desktop\javascript chap\1.png"
img[1]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/2.jpg"
img[2]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/3.jpg"
img[3]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/4.jpg"
img[4]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/5.jpg"
img[5]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/6.jpg"
img[6]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/7.jpg"
img[7]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/8.jpg"
img[8]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/9.jpg"
img[9]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/10.jpg"
img[10]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/11.jpg"
img[11]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/12.jpg"
img[12]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/13.jpg"
img[13]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/14.jpg"
img[14]=" file:///C:/Users/starpc/Desktop/Saylani%20work/java3assign/image/others/15.jpg"
var modal = document.getElementById('modal');
for(i=0;i<15;i++){

    document.write(" <img src="+img[i]+" onclick="+modal.classList.add('modal-open'),modal.classList.remove('modal-close')+" > </img>" )
}