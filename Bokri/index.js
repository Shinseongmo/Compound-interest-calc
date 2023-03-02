let big_day='day'
let big_price='$'
let small_day='number of days'
let small_price="amount"
let small_rate="cumulative return rate"
let alert1="1"
let alert2="2"
let alert3="3"


const func= (num)=>{
    let cont=document.querySelector('html').lang
    let principal_text = document.querySelector('.principal_text')
    let duration_text= document.querySelector('.duration_text')
    let ror_text= document.querySelector('.ror_text')
    let button= document.querySelector('.button')
    let photo = document.querySelector('meta[property="og:image"]')
    let icon = document.querySelector('link[rel="icon"]')
    let fresh= document.querySelector('.fresh')
    principal_text.innerHTML=''
    duration_text.innerHTML=''
    ror_text.innerHTML=''
    button.innerHTML=''

    if(num == 0){
        cont="ni"
        principal_text.innerHTML='1. Iye'
        duration_text.innerHTML='2. Akoko (ni ojo)'
        ror_text.innerHTML="3. gini na fa'idodo"
        button.innerHTML='Biyal rikod'
        big_day='ruwa'
        big_price='₦'
        small_day='bilangan hari'
        small_price="jumlah"
        small_rate="Kadar Pertumbuhan Terkumpul"
        photo.setAttribute('content', 'logo_nigeria.png')
        icon.href='logo_nigeria.png'
        fresh.src='logo_nigeria.png'
        alert1: "Jọwọ fẹrẹ awọn nọmba ti o dara julọ"
        alert2: "Jọwọ fẹrẹ awọn nọmba ti o dara julọ"
        alert3: "Jọwọ fẹrẹ gbogbo awọn nọmba"
    }
    else if(num == 4){
        cont="id"
        principal_text.innerHTML='1. Pokok'
        duration_text.innerHTML='2. Periode (dalam hari)'
        ror_text.innerHTML='3. tingkat pengembalian'
        button.innerHTML='Lihat hasil'
        big_day='hari'
        big_price='Rp'
        small_day='jumlah hari'
        small_price="jumlah uang"
        small_rate="tingkat pengembalian kumulatif"
        photo.setAttribute('content', 'logo_indonesia.png')
        icon.href='logo_indonesia.png'
        fresh.src='logo_indonesia.png'
        alert1: "Harap masukkan nilai positif saja"
        alert2: "Harap masukkan nilai numerik saja"
        alert3: "Harap masukkan semua nilai"
    }
    else if(num == 1){
        cont="ko"
        principal_text.innerHTML='1. 원금'
        duration_text.innerHTML='2. 기간(일)'
        ror_text.innerHTML='3. 수익률'
        button.innerHTML='결과보기'
        big_day='일'
        big_price='원'
        small_day='일수'
        small_price="금액"
        small_rate="누적 수익률"
        photo.setAttribute('content', 'logo_korea.png')
        icon.href='logo_korea.png'
        fresh.src='logo_korea.png'
        alert1="모두 양수로 입력해주세요"
        alert2="모두 숫자로 입력해주세요"
        alert3='모두 입력해주세요'
    }
    else if(num == 5){
        cont="ms"
        principal_text.innerHTML='1. Modal'
        duration_text.innerHTML='2. Tempoh (dalam hari)'
        ror_text.innerHTML='3. kadar pulangan'
        button.innerHTML='Lihat hasil'
        big_day='hari'
        big_price='RM'
        small_day='bilangan hari'
        small_price="jumlah"
        small_rate="Kadar Pertumbuhan Terkumpul"
        photo.setAttribute('content', 'logo_malaysia.png')
        icon.href='logo_malaysia.png'
        fresh.src='logo_malaysia.png'
        alert1: "Sila masukkan nilai positif sahaja"
        alert2: "Sila masukkan nilai numerik sahaja"
        alert3: "Sila masukkan semua nilai"
    }
    else if(num == 3){
        cont="vi"
        principal_text.innerHTML='1. Vốn'
        duration_text.innerHTML='2. Khoảng thời gian<br>(trong ngày)'
        ror_text.innerHTML='3. tỷ lệ lợi nhuận'
        button.innerHTML='Xem kết quả'
        big_day='ngày'
        big_price='₫'
        small_day='số ngày'
        small_price="số tiền"
        small_rate="tỷ lệ sinh lời tích lũy"
        photo.setAttribute('content', 'logo_vietnam.png')
        icon.href='logo_vietnam.png'
        fresh.src='logo_vietnam.png'
        alert1: "Vui lòng chỉ nhập giá trị dương"
        alert2: "Vui lòng chỉ nhập giá trị số"
        alert3: "Vui lòng nhập đầy đủ các giá trị"
    }
    else if(num == 2){
        cont="en"
        principal_text.innerHTML='1. Principal'
        duration_text.innerHTML='2. Period (in days)'
        ror_text.innerHTML='3. rate of return'
        button.innerHTML='View results'
        big_day='day'
        big_price='$'
        small_day='number of days'
        small_price="amount"
        small_rate="cumulative return rate"
        photo.setAttribute('content', 'logo_english.png')
        icon.href='logo_english.png'
        fresh.src='logo_english.png'
        alert1: "Please enter only positive values"
        alert2: "Please enter only numerical values"
        alert3: "Please enter all values"
    }
    else if(num == 6){
        cont="ja"
        principal_text.innerHTML='1. 本金'
        duration_text.innerHTML='2. 期間（日数）'
        ror_text.innerHTML='3. 利回り'
        button.innerHTML='結果を表示'
        big_day='日'
        big_price='円'
        small_day='日数'
        small_price="金額"
        small_rate="累積収益率"
        photo.setAttribute('content', 'logo_japan.png')
        if (icon) {
            icon.href = 'logo_japan.png';
        }
        fresh.src='logo_japan.png'
        alert1= "正の値のみを入力してください"
        alert2= "数値のみを入力してください"
        alert3= "すべての値を入力してください"
    }
    else if(num == 7){
        cont="zh"
        principal_text.innerHTML='1. 本金'
        duration_text.innerHTML='2. 周期（天数）'
        ror_text.innerHTML='3. 收益率'
        button.innerHTML='查看结果'
        big_day='天'
        big_price='元'
        small_day='天数'
        small_price="金额"
        small_rate="累积回报率"
        photo.setAttribute('content', 'logo_china.png')
        if (icon) {
            icon.href = 'logo_china.png';
        }
        fresh.src='logo_china.png'
        alert1= "请输入正数值"
        alert2= "请输入数字值"
        alert3= "请输入所有值"
    }
}

const calc = (principal, duration, ror) => {
    let day = 1;
    let price = principal;

    const result = document.querySelector('.result');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    result.innerHTML = ''; 
    result.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);

    let row_1 = document.createElement('tr');

    let heading_1 = document.createElement('th');
    heading_1.innerHTML = `${small_day}`;

    let heading_2 = document.createElement('th');
    heading_2.innerHTML = `${small_price}`;

    let heading_3 = document.createElement('th');
    heading_3.innerHTML = `${small_rate}`;

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);

    for(let k = 0; k < duration; k++) { // Fix condition
            let row1 = document.createElement('tr');
            let value1 = document.createElement('td');
            value1.innerHTML = `${day} ${big_day}`; // Fix formatting
            row1.appendChild(value1);
            let value2 = document.createElement('td');
            let price1 = price + (price*(ror/100));
            value2.innerHTML = `${numberWithCommas1(price1)} ${big_price}`; // Fix formatting and add      toFixed()
            price = price1;
            row1.appendChild(value2);
            let value3 = document.createElement('td');
            let ror1 = ((price / principal) - 1) * 100; // Fix calculation
            value3.innerHTML = `${numberWithCommas1(ror1)} %`; // Fix formatting and add    toFixed()
            row1.appendChild(value3);
            tbody.appendChild(row1); // Fix appendChild()
            day++;
        }
    table.setAttribute('class', 'styled-table');
    }


const numberWithCommas = (x) => {
    return x.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const numberWithCommas1 = (x) => {
    return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const cal = () => {
    const principal = Number(document.querySelector('#principal').value); // Parse to Number
    const duration = Number(document.querySelector('#duration').value); // Parse to Number
    const ror = Number(document.querySelector('#ror').value); // Parse to Number


    const ror1=document.querySelector('#ror').value
    const duration1=document.querySelector('#duration').value
    const principal1=document.querySelector('#principal').value

    if(principal1 && duration1 && ror1){
        console.log(typeof(ror))
        if(typeof(principal) == 'number' && typeof(duration) == 'number' && typeof(ror)== 'number')
        {   if(principal>0 && duration>0 && ror >0){
                calc(principal, duration, ror)
                document.querySelector('#principal').   value=''
                document.querySelector('#duration').    value=''
                document.querySelector('#ror').value=''}
            else{
                confirm(`${alert1}`)
            }
        }
        else{
            confirm(`${alert2}`)
        }
    }
    else{
        confirm(`${alert3}`)
    }
};
