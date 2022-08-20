export interface ISuite {
  Name: string;
  Icon: string;
}

export interface ICard {
  Name: string;
  Icon: string;
  Suite: ISuite;
  SuiteIndex: number;
}

export const Suites = {
  Spades: {
    Name: 'Spades',
    Icon: '♠'
  },
  Hearts: {
    Name: 'Hearts',
    Icon: '♥'
  },
  Diamonds: {
    Name: 'Diamonds',
    Icon: '♦'
  },
  Clubs: {
    Name: 'Clubs',
    Icon: '♣'
  }
}

export const Deck: ICard[] = [
  {
    Name: 'Ace',
    Icon: '🂡',
    Suite: Suites.Spades,
    SuiteIndex: 1
  },
  {
    Name: 'Ace',
    Icon: '🂱',
    Suite: Suites.Hearts,
    SuiteIndex: 1
  },
  {
    Name: 'Ace',
    Icon: '🃁',
    Suite: Suites.Diamonds,
    SuiteIndex: 1
  },
  {
    Name: 'Ace',
    Icon: '🃑',
    Suite: Suites.Clubs,
    SuiteIndex: 1
  },
  {
    Name: 'Two',
    Icon: '🂢',
    Suite: Suites.Spades,
    SuiteIndex: 2
  },
  {
    Name: 'Two',
    Icon: '🂲',
    Suite: Suites.Hearts,
    SuiteIndex: 2
  },
  {
    Name: 'Two',
    Icon: '🃂',
    Suite: Suites.Diamonds,
    SuiteIndex: 2
  },
  {
    Name: 'Two',
    Icon: '🃒',
    Suite: Suites.Clubs,
    SuiteIndex: 2
  },
  {
    Name: 'Three',
    Icon: '🂣',
    Suite: Suites.Spades,
    SuiteIndex: 3
  },
  {
    Name: 'Three',
    Icon: '🂳',
    Suite: Suites.Hearts,
    SuiteIndex: 3
  },
  {
    Name: 'Three',
    Icon: '🃃',
    Suite: Suites.Diamonds,
    SuiteIndex: 3
  },
  {
    Name: 'Three',
    Icon: '🃓',
    Suite: Suites.Clubs,
    SuiteIndex: 3
  },
  { 
    Name: 'Four',
    Icon: '🂤',
    Suite: Suites.Spades,
    SuiteIndex: 4
  },
  { 
    Name: 'Four',
    Icon: '🂴',
    Suite: Suites.Hearts,
    SuiteIndex: 4
  },
  { 
    Name: 'Four',
    Icon: '🃄',
    Suite: Suites.Diamonds,
    SuiteIndex: 4
  },
  { 
    Name: 'Four',
    Icon: '🃔',
    Suite: Suites.Clubs,
    SuiteIndex: 4
  },
  {
    Name: 'Five',
    Icon: '🂥',
    Suite: Suites.Spades,
    SuiteIndex: 5
  },
  {
    Name: 'Five',
    Icon: '🂵',
    Suite: Suites.Hearts,
    SuiteIndex: 5
  },
  {
    Name: 'Five',
    Icon: '🃅',
    Suite: Suites.Diamonds,
    SuiteIndex: 5
  },
  {
    Name: 'Five',
    Icon: '🃕',
    Suite: Suites.Clubs,
    SuiteIndex: 5
  },
  {
    Name: 'Six',
    Icon: '🂦',
    Suite: Suites.Spades,
    SuiteIndex: 6
  },
  {
    Name: 'Six',
    Icon: '🂶',
    Suite: Suites.Hearts,
    SuiteIndex: 6
  },
  {
    Name: 'Six',
    Icon: '🃆',
    Suite: Suites.Diamonds,
    SuiteIndex: 6
  },
  {
    Name: 'Six',
    Icon: '🃖',
    Suite: Suites.Clubs,
    SuiteIndex: 6
  },
  {
    Name: 'Seven',
    Icon: '🂧',
    Suite: Suites.Spades,
    SuiteIndex: 7
  },
  {
    Name: 'Seven',
    Icon: '🂷',
    Suite: Suites.Hearts,
    SuiteIndex: 7
  },
  {
    Name: 'Seven',
    Icon: '🃇',
    Suite: Suites.Diamonds,
    SuiteIndex: 7
  },
  {
    Name: 'Seven',
    Icon: '🃗',
    Suite: Suites.Clubs,
    SuiteIndex: 7
  },
  {
    Name: 'Eight',
    Icon: '🂨',
    Suite: Suites.Spades,
    SuiteIndex: 8
  },
  {
    Name: 'Eight',
    Icon: '🂸',
    Suite: Suites.Hearts,
    SuiteIndex: 8
  },
  {
    Name: 'Eight',
    Icon: '🃈',
    Suite: Suites.Diamonds,
    SuiteIndex: 8
  },
  {
    Name: 'Eight',
    Icon: '🃘',
    Suite: Suites.Clubs,
    SuiteIndex: 8
  },
  {
    Name: 'Nine',
    Icon: '🂩',
    Suite: Suites.Spades,
    SuiteIndex: 9
  },
  {
    Name: 'Nine',
    Icon: '🂹',
    Suite: Suites.Hearts,
    SuiteIndex: 9
  },
  {
    Name: 'Nine',
    Icon: '🃉',
    Suite: Suites.Diamonds,
    SuiteIndex: 9
  },
  {
    Name: 'Nine',
    Icon: '🃙',
    Suite: Suites.Clubs,
    SuiteIndex: 9
  },
  {
    Name: 'Ten',
    Icon: '🂪',
    Suite: Suites.Spades,
    SuiteIndex: 10
  },
  {
    Name: 'Ten',
    Icon: '🂺',
    Suite: Suites.Hearts,
    SuiteIndex: 10
  },
  {
    Name: 'Ten',
    Icon: '🃊',
    Suite: Suites.Diamonds,
    SuiteIndex: 10
  },
  {
    Name: 'Ten',
    Icon: '🃚',
    Suite: Suites.Clubs,
    SuiteIndex: 10
  },
  {
    Name: 'Jack',
    Icon: '🂫',
    Suite: Suites.Spades,
    SuiteIndex: 11
  },
  {
    Name: 'Jack',
    Icon: '🂻',
    Suite: Suites.Hearts,
    SuiteIndex: 11
  },
  {
    Name: 'Jack',
    Icon: '🃋',
    Suite: Suites.Diamonds,
    SuiteIndex: 11
  },
  {
    Name: 'Jack',
    Icon: '🃛',
    Suite: Suites.Clubs,
    SuiteIndex: 11
  },
  {
    Name: 'Queen',
    Icon: '🂭',
    Suite: Suites.Spades,
    SuiteIndex: 12
  },
  {
    Name: 'Queen',
    Icon: '🂽',
    Suite: Suites.Hearts,
    SuiteIndex: 12
  },
  {
    Name: 'Queen',
    Icon: '🃍',
    Suite: Suites.Diamonds,
    SuiteIndex: 12
  },
  {
    Name: 'Queen',
    Icon: '🃝',
    Suite: Suites.Clubs,
    SuiteIndex: 12
  },
  {
    Name: 'King',
    Icon: '🂮',
    Suite: Suites.Spades,
    SuiteIndex: 13
  },
  {
    Name: 'King',
    Icon: '🂾',
    Suite: Suites.Hearts,
    SuiteIndex: 13
  },
  {
    Name: 'King',
    Icon: '🃎',
    Suite: Suites.Diamonds,
    SuiteIndex: 13
  },
  {
    Name: 'King',
    Icon: '🃞',
    Suite: Suites.Clubs,
    SuiteIndex: 13
  },
]

export const CardBackIcon: string = '🂠';