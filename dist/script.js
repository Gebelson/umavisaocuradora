const dialog = document.getElementById('link-dialog');
const title = document.getElementById('dialog-title');
const copy = document.getElementById('dialog-copy');

document.querySelectorAll('[data-link]').forEach((button) => {
  button.addEventListener('click', () => {
    const isGroup = button.dataset.link === 'grupo';
    title.textContent = isGroup ? 'O convite do grupo será adicionado aqui.' : 'O link de compra será adicionado aqui.';
    copy.textContent = isGroup
      ? 'A editora ainda não informou o convite do grupo de WhatsApp.'
      : 'A editora ainda não informou o endereço para finalizar o pedido.';
    dialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-ok').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
