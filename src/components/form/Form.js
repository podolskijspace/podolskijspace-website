import React, {useRef} from "react";
import emailjs from 'emailjs-com';


const Form = () => {
  const sendForm = (event) => {
    event.preventDefault();
    const formData = new FormData(this);

    ajaxSend(formData)
        .then((response) => {
            // очищаем поля формы 
        })
        .catch((err) => console.error(err))
  }

  const ajaxSend = async (formData) => {
      const fetchResp = await fetch('http://react-podolskij.space//send.php', {
          method: 'POST',
          body: formData
      });
      if (!fetchResp.ok) {
          throw new Error(`Ошибка по адресу ${fetchResp.url}, статус ошибки ${fetchResp.status}`);
      }
      return await fetchResp.text();
  };
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_4g4xjyl', 'template_7iuybyf', e.target, 'user_Tn9ItxCZ1qZzAzyoqU4Ix')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  return (
    <form onSubmit={sendForm}>
      <input name="name" type="text"/>
      <input name="phone" type="text"/>
      <input type="submit"/>
    </form>
  )
}

export default Form;