const Modal = {
    open() {
        //Abrir modal
        //para abrir o modal preciso adicionar a class active ao modal
        document.querySelector('.modal-overlay')
            .classList.add('active')
    },
    close() {
        //fechar o modal
        //remover a class active do modal
        document.querySelector('.modal-overlay')
            .classList.remove('active')
    }

}

function cadastra() {
  let name = document.getElementById("name").value;
  let age = parseInt(document.getElementById("age").value);
  let languages = document.getElementById("language").value;

  let showMessage = document.getElementById("bemVindo");
  const welcome = `"Olá ${name}, você tem  ${age} anos de idade e já esta aprendendo ${languages} !"`;
  showMessage.innerHTML = welcome;

  console.log(welcome);
}
