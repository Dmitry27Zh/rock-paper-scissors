const initRPS = () => {
  const selectionButtons = document.querySelectorAll('[data-selection]')

  selectionButtons.forEach((selectionButton) => {
    selectionButton.addEventListener('click', () => {
      const selectionName = selectionButton.dataset.selection
      const selection = SELECTIONS.find((selection) => selection.name === selectionName)
      round(selection)
    })
  })
}

const SELECTIONS = [
  {
    name: 'rock',
    value: '✊',
    beats: 'scissors',
  },
  {
    name: 'paper',
    value: '✋',
    beats: 'rock',
  },
  {
    name: 'scissors',
    value: '✌',
    beats: 'paper',
  },
]

const round = (userSelection) => {
  console.log(userSelection)
}

initRPS()
