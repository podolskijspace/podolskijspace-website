<?
echo 'Ты молодец';
//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "2038372235:AAEk2j0sjJsM45ZLWqibzjGvboCk8Pv8l_U";

//Сюда вставляем chat_id
$chat_id = "-542298045";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone
    ); 

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    // if ($sendToTelegram) {
    //     echo('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    // }

//А здесь сообщение об ошибке при отправке
    // else {
    //     echo('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    // }
}