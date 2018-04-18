var APP_ID = '06pR7fWoOvfXOeBy8gC5LldX-gzGzoHsz';
var APP_KEY = 'i2daUuWhgRgJ6hsWa96kbgyQ';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
})

var query = new AV.Query('Message')
query.find()
    .then(function(messages) {
        let array = messages.map((item) => item.attributes)
        array.forEach(element => {
            if (element.name && element.content != '') {
                let $li1 = $('<li></li>').text(element.name)
                let $li2 = $('<li></li>').text(element.content)
                $("#messageList").append($li1)
                $li1.append("：")
                $("#messageList").append($li2)
                let $div1 = $('<div></div>')
                $("#commentAll").append($div1)
                console.log(1)
                $div1.addClass("chatHead")
                $img1 = $('<img src="./img/ChatHead.svg">')
                $div1.append($img1)
                $img1.addClass("headPortrait")
            }

        })
    })



$("#postMessageForm").on('submit', (function(e) {
    e.preventDefault()
    let name = $('input[name=name]').val()
    let content = $('input[name=content]').val()
    if (name && content != '') {
        var Message = AV.Object.extend('Message')
        var message = new Message()
        message.save({
                'name': name,
                'content': content
            })
            .then(function(object) {
                if (object.attributes.name && object.attributes.content != '') {
                    let $li1 = $('<li></li>').text(object.attributes.name)
                    let $li2 = $('<li></li>').text(object.attributes.content)
                    $("#messageList").append($li1)
                    $li1.append("：")
                    $("#messageList").append($li2)
                    $('input[name=content]').val("")
                }
            })
    }
}))
$('input[name=name]').bind('click', function() {
    console.log(1)
})