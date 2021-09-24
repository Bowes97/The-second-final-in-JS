let login = /^admin$/;
let password = /^admin123$/
let number = /^\d$/
let f1 = document.forms.f1
let ol = document.forms.ol;
let ul = document.forms.ul;
$(function () {
    $('.bold').click(function () {
        $('.text p').toggleClass('boldText')
    })
    $('.italic').click(function () {
        $('.text p').toggleClass('italicText')
    })
    $('.underline').click(function () {
        $('.text p').toggleClass('underlineText')
    })
    $('.strikethrough').click(function () {
        $('.text p').toggleClass('strikethroughText')
    })
    $('.left-align').click(function () {
        $('.text p').addClass('left-align-text')
        $('.text p').removeClass('center-align-text')
        $('.text p').removeClass('right-align-text')
    })
    $('.center-align').click(function () {
        $('.text p').addClass('center-align-text')
        $('.text p').removeClass('left-align-text')
        $('.text p').removeClass('right-align-text')
    })
    $('.right-align').click(function () {
        $('.text p').addClass('right-align-text')
        $('.text p').removeClass('center-align-text')
        $('.text p').removeClass('left-align-text')
    })
    $('button').click(function () {
        $('button').removeClass('active');
        $(this).addClass('active')
    })
    $('.box').click(function () {
        let st = getComputedStyle(this)
        $('.text').css({
            color: st.backgroundColor
        })
    })
    $('.changeBackground input').click(function () {
        $('input').removeClass('activeColorChange');
        $(this).addClass('activeColorChange')
    })
    $('.boxBackgroundColor').click(function () {
        let st = getComputedStyle(this)
        let styleImage = st.backgroundImage;
        styleImage = 'none'
        $('.text').css({
            backgroundColor: st.backgroundColor,
            backgroundImage: styleImage
        })
    })
    $(".images").click(function () {
        $('.colorBackground').hide()
        $('.image').show()
        $('.personImage').hide()
    })
    $(".colors").click(function () {
        $('.colorBackground').show()
        $('.image').hide()
        $('.personImage').hide()
    })
    $(".files").click(function () {
        $('.colorBackground').hide()
        $('.image').hide()
        $('.personImage').show()
    })
    $('img').click(function () {
        let attr = $(this).attr('src')
        let url = `url(${attr})`
        console.log(attr);
        $('.text').css({
            backgroundImage: url
        })
    })
    $('.fontfamily button').click(function () {
        $('.fontfamily ul').toggle()
        $('.fontsize ul').hide()
    })
    $('.fontsize button').click(function () {
        $('.fontsize ul').toggle()
        $('.fontfamily ul').hide()
    })
    $('.fontfamily ul li:nth-child(1)').css({
        fontFamily: 'Arial'
    })
    $('.fontfamily ul li:nth-child(2)').css({
        fontFamily: 'Georgia'
    })
    $('.fontfamily ul li:nth-child(3)').css({
        fontFamily: 'Impact'
    })
    $('.fontfamily ul li:nth-child(4)').css({
        fontFamily: 'Tahoma'
    })
    $('.fontfamily ul li:nth-child(5)').css({
        fontFamily: 'Times New Roman'
    })
    $('.fontfamily ul li:nth-child(6)').css({
        fontFamily: 'Verdana'
    })
    $('.fontsize ul li:nth-child(1)').css({
        'font-size': '12px'
    })
    $('.fontsize ul li:nth-child(2)').css({
        'font-size': '14px'
    })
    $('.fontsize ul li:nth-child(3)').css({
        'font-size': '16px'
    })
    $('.fontsize ul li:nth-child(4)').css({
        'font-size': '18px'
    })
    $('.fontsize ul li:nth-child(5)').css({
        'font-size': '20px'
    })
    $('.fontsize ul li:nth-child(6)').css({
        'font-size': '22px'
    })
    $('.fontsize ul li:nth-child(7)').css({
        'font-size': '25px'
    })
    $('.fontsize ul li:nth-child(8)').css({
        'font-size': '30px'
    })
    $('.fontsize ul li').click(function () {
        let fontsize = $(this).text()
        console.log(fontsize);
        $('.text').css({
            'font-size': fontsize
        })
        $('.fontsize ul').hide()
    })
    $('.fontfamily ul li').click(function () {
        let fontfamily = $(this).html()
        $('.text').css({
            fontFamily: fontfamily
        })
        $('.fontfamily ul').hide()
    })
    $('input[type="submit"]').click(function () {
        let file = $('input[type="file"]')
        $('.text').css({
            backgroundImage: file.files
        })
    })
    function readURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $('.text').css({
                    "background-image": 'url("' + e.target.result + '") '
                })
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#file_input input[type='file']").change(function () {
        readURL(this);
    });
    $(".f1 input[type='submit']").click(function (e) {
        if (login.test(f1.login.value) === true) {
            $(".f1 input[type='text']").addClass('borderTrue')
            $(".f1 input[type='text']").removeClass('borderFalse')
        }
        else {
            $(".f1 input[type='text']").addClass('borderFalse')
            $(".f1 input[type='text']").removeClass('borderTrue')
        }
        if (password.test(f1.password.value) === true) {
            $(".f1 input[type='password']").addClass('borderTrue')
            $(".f1 input[type='password']").removeClass('borderFalse')
        }
        else {
            $(".f1 input[type='password']").addClass('borderFalse')
            $(".f1 input[type='password']").removeClass('borderTrue')
        }
        if (f1.login.value === '' & f1.password.value === '') {
            $('.null').remove()
            $(".append").append("<p class='appendClass null'>Value is empty</p>");
            $('.wrong').remove()
        } else if (login.test(f1.login.value) === false & password.test(f1.password.value) === false) {
            $('.wrong').remove()
            $(".append").append("<p class='appendClass wrong'>Please check your login or password</p>");
            $('.null').remove()
        }
        if (password.test(f1.password.value) === true & login.test(f1.login.value) === true) {
            $('.null').remove()
            $('.wrong').remove()
            $('#staticBackdrop1').modal('hide')
            $('.reg').hide()
            $('.logOf').show()
            $('.tableList button').removeAttr('disabled')
        }
        $(".f1").submit(function (e) {
            e.preventDefault();
        });
    })
    $('.signOut').click(function () {
        $('.reg').show()
        $('.logOf').hide()
        $('.tableList button').attr('disabled', 'disabled')
    })
    $('.tableList').click(function () {
        if (!$('.tableList button').attr('disabled')) {
            $('.edit').hide()
            $('.menu').show()
            $('.menuButton').addClass('flex')
            $('.text').hide()
        }
    })
})
let tableList = document.querySelector('.tableList');
let headerText = document.querySelector('.text');
let textArea = document.querySelector('.textInArea');
let save = document.querySelector('.save');
let create = $('.olCreateList');
tableList.addEventListener('click', function () {
    let text = f2.text.value;
    text = headerText.innerHTML
    textArea.innerHTML = text;
})
$('.save').click(function () {
    let text = f2.text.value;
    headerText.innerHTML = text;
    $('.edit').show()
    $('.menu').hide()
    $('.menuButton').removeClass('flex')
    $('.text').show()
})
$('.olCreateList').click(function () {
    if (ol.ol.value === '') {
        $('.wrongValue').remove()
        $(".append").append("<p class='appendClass wrongValue'>Invalid value</p>");
        $('.olInput').addClass('borderFalse')
        $('.olInput').removeClass('borderTrue')

    } else {
        $('.olInput').addClass('borderTrue')
        $('.olInput').removeClass('borderFalse')
        $('.wrongValue').remove()
    }
    if ($('.option').prop('selected') === true) {
        $('.selectOl').addClass('borderFalse')
        $('.selectOl').removeClass('borderTrue')
    } else {
        $('.selectOl').addClass('borderTrue')
        $('.selectOl').removeClass('borderFalse')
    }
    if (ol.ol.value != '' && $('.option').prop('selected') === false) {
        let CountLi = $('.olInput').val();
        let listOPT = $('.selectOl').val();
        textArea.innerHTML += `<ol type='${listOPT}'>`;
        for (let i = 1; i <= CountLi; i++) {
            let li = document.createElement('li');
            let textOl = 'person';
            li.textContent = textOl;
            let lists = ol.appendChild(li)
            textArea.innerHTML += lists.outerHTML;
        }
        textArea.innerHTML += '</ol>';
        $('.ol li').remove()
    }
})
$('.selectOl').click(function () {
    $('.option').attr('disabled', 'disabled')
})
$('.selectul').click(function () {
    $('.option1').attr('disabled', 'disabled')
})
$('.olReset').click(function () {
    ol.ol.value = '';
    $('select').each(function () {
        $(this).val($(this).find("option[selected]").val());
    });
    $('.olInput').removeClass('borderFalse')
    $('.olInput').removeClass('borderTrue')
    $('.selectOl').removeClass('borderTrue')
    $('.selectOl').removeClass('borderFalse')
    $('.wrongValue').remove()
})
$('.ulReset').click(function () {
    ul.ul.value = '';
    $('select').each(function () {
        $(this).val($(this).find("option[selected]").val());
    });
    $('.ulInput').removeClass('borderTrue')
    $('.ulInput').removeClass('borderFalse')
    $('.selectul').removeClass('borderFalse')
    $('.selectul').removeClass('borderTrue')
    $('.wrongValue').remove()

})
$('.ulCreateList').click(function () {
    if (ul.ul.value === '') {
        $('.wrongValue').remove()
        $(".append").append("<p class='appendClass wrongValue'>Invalid value</p>");
        $('.ulInput').addClass('borderFalse')
        $('.ulInput').removeClass('borderTrue')

    } else {
        $('.ulInput').addClass('borderTrue')
        $('.ulInput').removeClass('borderFalse')
        $('.wrongValue').remove()
    }
    if ($('.option1').prop('selected') === true) {
        $('.selectul').addClass('borderFalse')
        $('.selectul').removeClass('borderTrue')
    } else {
        $('.selectul').addClass('borderTrue')
        $('.selectul').removeClass('borderFalse')
    }
    if (ul.ul.value != '' && $('.option1').prop('selected') === false) {
        let CountLi = $('.ulInput').val();
        let listOPT = $('.selectul').val();
        textArea.innerHTML += `<ul type='${listOPT}'>`;
        for (let i = 1; i <= CountLi; i++) {
            let li = document.createElement('li');
            let textOl = 'person';
            li.textContent = textOl;
            let lists = ul.appendChild(li)
            textArea.innerHTML += lists.outerHTML;
        }
        textArea.innerHTML += '</ul>';
        $('.ul li').remove()
    }
})
$('.submitTable').click(function (e) {
    e.preventDefault();
    if ($('.tr').val() === '') {
        $('.tr').addClass('borderFalse')
        $('.tr').removeClass('borderTrue')
    } else {
        $('.tr').removeClass('borderFalse')
        $('.tr').addClass('borderTrue')
    }
    if ($('.widthTd').val() === '') {
        $('.widthTd').addClass('borderFalse')
        $('.widthTd').removeClass('borderTrue')
    } else {
        $('.widthTd').removeClass('borderFalse')
        $('.widthTd').addClass('borderTrue')
    }
    if ($('.widthBorder').val() === '') {
        $('.widthBorder').addClass('borderFalse')
        $('.widthBorder').removeClass('borderTrue')
    } else {
        $('.widthBorder').removeClass('borderFalse')
        $('.widthBorder').addClass('borderTrue')
    }
    if ($('.td').val() === '') {
        $('.td').addClass('borderFalse')
        $('.td').removeClass('borderTrue')
    } else {
        $('.td').removeClass('borderFalse')
        $('.td').addClass('borderTrue')
    }
    if ($('.heightTd').val() === '') {
        $('.heightTd').addClass('borderFalse')
        $('.heightTd').removeClass('borderTrue')
    } else {
        $('.heightTd').removeClass('borderFalse')
        $('.heightTd').addClass('borderTrue')
    }
    if ($('.first').prop('selected') === true) {
        $('.choose').addClass('borderFalse')
        $('.choose').removeClass('borderTrue')

    } else {
        $('.choose').removeClass('borderFalse')
        $('.choose').addClass('borderTrue')

    }
    if ($('.second').prop('selected') === true) {
        $('.chooses').addClass('borderFalse')
        $('.chooses').removeClass('borderTrue')

    } else {
        $('.chooses').removeClass('borderFalse')
        $('.chooses').addClass('borderTrue')
    }
})
$('.choose').click(function () {
    $('.first').attr('disabled', 'disabled')
    $('.second').attr('disabled', 'disabled')
})
$('.resetTable').click(function () {
    $('select').each(function () {
        $(this).val($(this).find("option[selected]").val());
    });
    $('.chooses').removeClass('borderFalse')
    $('.chooses').removeClass('borderTrue')
    $('.choose').removeClass('borderFalse')
    $('.choose').removeClass('borderTrue')
    $('.td').removeClass('borderFalse')
    $('.td').removeClass('borderTrue')
    $('.heightTd').removeClass('borderFalse')
    $('.heightTd').removeClass('borderTrue')
    $('.tr').removeClass('borderFalse')
    $('.tr').removeClass('borderTrue')
    $('.widthTd').removeClass('borderFalse')
    $('.widthTd').removeClass('borderTrue')
    $('.widthBorder').removeClass('borderFalse')
    $('.widthBorder').removeClass('borderTrue')
})
let tr = document.querySelector('.tr')
let widthTd = document.querySelector('.widthTd')
let widthBorder = document.querySelector('.widthBorder')
let heightTd = document.querySelector('.heightTd')
let td = document.querySelector('.td')
let resetTable = document.querySelector('.resetTable');
let choose = document.querySelector('.choose')
let chooses = document.querySelector('.chooses')
resetTable.addEventListener('click', function () {
    tr.value = ' ';
    widthTd.value = ' ';
    widthBorder.value = ' ';
    heightTd.value = ' ';
    td.value = ' ';
})
let createtable = document.querySelector('.submitTable');
createtable.addEventListener('click', function () {
    if (tr.value == '' || td.value == '' || widthTd.value == '' || heightTd.value == ' ' || widthBorder.value == ' ' || $('.second').prop('selected') === true || $('.first').prop('selected') === true) {
        alert('Заповніть таблицю')
    } else {
        let mainTR = tr.value;
        let mainTD = td.value;
        let textTr = '!!! ';
        let tables = '<table>';
        let widthTD = widthTd.value;
        let heightTD = heightTd.value;
        let Border = widthBorder.value;
        let ColorBorder = chooses.value;
        let BorderScope = choose.value;
        for (let i = 1; i <= mainTR; i++) {
            tables += '<tr>';
            for (let k = 1; k <= mainTD; k++) {
                tables += `<td style="width: ${widthTD}px; height: ${heightTD}px; border: ${Border}px ${BorderScope}; border-color: ${ColorBorder};">${textTr}</td>`;
            }
            tables += '</tr>';
        }
        tables += '</table>';
        textArea.innerHTML += tables
        $('#table').modal('hide')
    }
})
