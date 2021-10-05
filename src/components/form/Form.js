import React from "react";


const Form = () => {
  function sendForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

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

  return (
    <form onSubmit={sendForm}>
      <input name="name" type="text"/>
      <input name="phone" type="text"/>
      <input type="submit"/>
    </form>
  )
}

export default Form;