export function writeData() {
  const dataObj = {};

  document.querySelectorAll('.column').forEach((column) => {
    const title = column.querySelector('.column-title').textContent;
    const value = [];
    column.querySelectorAll('.card').forEach((card) => {
      value.push(card.querySelector('.card-text').textContent);
    });
    dataObj[title] = value;
  });

  localStorage.setItem('data', JSON.stringify(dataObj));
}

export function readData() {
  const dataJSON = localStorage.getItem('data');

  if (dataJSON === null) {
    return undefined;
  }
  try {
    return JSON.parse(dataJSON);
  } catch (e) {
    localStorage.removeItem('data');
    return undefined;
  }
}
