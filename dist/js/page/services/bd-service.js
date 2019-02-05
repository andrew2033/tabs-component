
const tabs = [
  { 
  title: '1', 
  content: `Замысел эпопеи формировался задолго до начала работы над тем текстом, который известен под названием «Война и мир». В наброске предисловия к «Войне и миру» Толстой писал, что в 1856 г. начал писать повесть, «герой которой должен был быть декабрист, возвращающийся с семейством в Россию. Невольно от настоящего я перешёл к 1825 году… Но и в 1825 году герой мой был уже возмужалым, семейным человеком.`,
  },
  { 
    title: '2', 
    content: `Чтобы понять его, мне нужно было перенестись к его молодости, и молодость его совпала с … эпохой 1812 года… Ежели причина нашего торжества была не случайна, но лежала в сущности характера русского народа и войска, то характер этот должен был выразиться ещё ярче в эпоху неудач и поражений…» Так Лев Николаевич постепенно пришёл к необходимости начать повествование с 1805 года.

    `,
  },
  { 
    title: '3', 
    content: `Главная тема — историческая судьба русского народа в Отечественной войне 1812 года. В романе выведено более 550 персонажей, как вымышленных, так и исторических. Лучших своих героев Л. Н. Толстой изображает во всей их душевной сложности, в непрерывных поисках истины, в стремлении к самосовершенствованию. Таковы князь Андрей, Пьер, Наташа, Николай, княжна Марья. Отрицательные герои лишены развития, динамики, движений души: Элен, Анатоль.`,
  }
];


const bdService = {
  getAll() {
    return tabs;
  },
}

export default bdService;