function verificar(){
    var fser = document.getElementById('service')
    var res = document.getElementById('res')

    if(fser.value.length == 0){
        alert("erro, digite novamente")
    }else{
        var mid = document.getElementsByName('mid')
        var tip = document.getElementsByName('sex')
        
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.innerHTML = ''
        var autor = ''

        if(tip[0].checked && mid[0].checked){
            // seios + foto
            if(fser.value == "a" || fser.value == "A"){
            img.setAttribute('src','img/bob-a.png')
                 autor = '<a href="https://twitter.com/ennuigrl/status/1362571756523954179?s=20&t=e7yVJLa8HETmzFG2TVWXjw" target="_blank">autor</a>'
             }else if( fser.value == "g" || fser.value == "G"){
                img.setAttribute('src','img/bob-g.png')
                autor = '<a href="https://twitter.com/houtengeki/status/1493862653743476739?s=20&t=49MJHqH3SYazTa6HWoq3Zg" target="_blank">autor</a>'

             }else if( fser.value == "h" || fser.value == "H"){
                img.setAttribute('src','img/bob-h.png')

                autor = '<a href="https://twitter.com/oekakizuki_turi/status/1252468027708149760?s=20&t=CAICmAfOtbEq9u7-ttkuTQ" target="_blank">autor</a>'
             }
        }else if(tip[0].checked && mid[1].checked){
            // seio + gif
            if(fser.value == "a" || fser.value == "A"){
                img.setAttribute('src','img/bob-a.gif') 
                //FALTA COLCOAR + GIFS
            }
        }else if(tip[1].checked && mid[0].checked){
            //bunda + foto
            if(fser.value == "a" || fser.value == "A"){
                img.setAttribute('src','img/ass-a.png')
                autor = '<a href="https://danbooru.donmai.us/posts/5103496" target="_blank">autor</a>'

            }else if(fser.value == "g" || fser.value == "G"){
                img.setAttribute('src','img/ass-g.png')
                autor = '<a href="https://danbooru.donmai.us/posts/4338127" target="_blank">autor</a>'

                
            }else if(fser.value == "h"|| fser.value == "H"){
                img.setAttribute('src','img/ass-h.png')
                autor = '<a href="https://danbooru.donmai.us/posts/4283293" target="_blank">autor</a>'

            }
        }else if(tip[1].checked && mid[1].checked){
            alert("ok")
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Link do ${autor}`
        res.appendChild(img)
    }
}