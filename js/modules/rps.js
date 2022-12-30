import { getRandomItem } from '../utils/array.js'

const initRPS = () => {
  const selectionButtons = document.querySelectorAll('[data-selection]')
  const resultsContainer = document.querySelector('[data-results')
  const userScoreElement = document.querySelector('[data-score="user"]')
  const computerScoreElement = document.querySelector('[data-score="computer"]')

  selectionButtons.forEach((selectionButton) => {
    selectionButton.addEventListener('click', () => {
      const selectionName = selectionButton.dataset.selection
      const selection = SELECTIONS.find((selection) => selection.name === selectionName)
      round(selection)
    })
  })

  const round = (userSelection) => {
    const computerSelection = getRandomItem(SELECTIONS)
    const isUserWinner = userSelection.beats === computerSelection.name
    const isComputerWinner = computerSelection.beats === userSelection.name
    updateScores([userScoreElement, computerScoreElement], [isUserWinner, isComputerWinner])
    renderRecentResults(userSelection, computerSelection, isUserWinner, isComputerWinner, resultsContainer)
  }
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

const createRecentTemplate = (userSelection, computerSelection, isUserWinner = false, isComputerWinner = false) => {
  const userWinnerClassString = isUserWinner ? 'winner' : ''
  const computerWinnerClassString = isComputerWinner ? 'winner' : ''

  return `
    <li class="rps__recent rps__results-columns">
      <div class="rps__results-selection ${userWinnerClassString}">${userSelection.value}</div>
      <div class="rps__results-selection ${computerWinnerClassString}">${computerSelection.value}</div>
    </li>
  `
}

const updateScores = (elementsList, isWinnerList) => {
  elementsList.forEach((element, index) => {
    const currentScore = Number(element.textContent)
    element.textContent = currentScore + isWinnerList[index]
  })
}

const renderRecentResults = (userSelection, computerSelection, isUserWinner, isComputerWinner, resultsContainer) => {
  const recentHTML = createRecentTemplate(userSelection, computerSelection, isUserWinner, isComputerWinner)
  resultsContainer.innerHTML = recentHTML + resultsContainer.innerHTML
}

initRPS()
