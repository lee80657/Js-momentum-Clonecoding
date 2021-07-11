const quotes = [
  {
    quote:
      "당신이 어떤 새의 명칭을 세상의 모든 언어로 알 수는 있겠지만, 다 알게 된다 해도 그 새에 관한 어떤 것도 알지 못할 것이다. 이제 새를 보고 행동을 관찰해보자. 중요한 것은 바로 이것이다. 나는 매우 일찍부터 무언가의 명칭을 아는 것과 무언가를 아는 것의 차이를 습득했다.",
    author: "리처드 파인만",
  },
  {
    quote:
      "당신이 무언가를 정말로 원할 때, 전 우주가 당신을 도와 그것을 성취하도록 공모한다.",
    author: "파울로 코엘료",
  },
  {
    quote:
      "네가 누구인지, 무엇인지 말해줄 사람은 필요 없다. 너는 그냥 너 자신일 뿐이다.",
    author: "존 레논",
  },
  {
    quote: "성공한 사람이 아니라 가치있는 사람이 되기 위해 힘쓰라.",
    author: "알버트 아인슈타인",
  },
  {
    quote:
      "모두가 비슷한 생각을 한다는 것은, 아무도 생각하고 있지 않다는 말이다.",
    author: "알버트 아인슈타인",
  },
  {
    quote:
      "좋은 책을 읽는 것은 과거 몇 세기의 가장 훌륭한 사람들과 이야기를 나누는 것과 같다.",
    author: "르네 데카르트",
  },
  {
    quote:
      "내가 계속할 수 있었던 유일한 이유는 내가 하는 일을 사랑했기 때문이라 확신합니다. 여러분도 사랑하는 일을 찾으셔야 합니다. 당신이 사랑하는 사람을 찾아야 하듯 일 또한 마찬가지입니다.",
    author: "스티브 잡스",
  },
  {
    quote:
      "나는 과학에 위대한 아름다움이 있다고 생각하는 사람이다. 연구실 과학자는 단순한 기술자가 아니라 마치 동화처럼 자신에게 감명을 주는 자연 현상 앞에 선 어린 아이이기도 하다.",
    author: "마리 퀴리",
  },
  {
    quote:
      "어떤 것이 당신이 계획대로 되지 않는 다고 해서 그것이 불필요한 것은 아니다.",
    author: "토마스A.에디슨",
  },
  {
    quote:
      "선수 경력을 통틀어 나는 9000개 이상의 슛을 놓쳤다. 거의 300회의 경기에서 패배했다. 경기를 뒤집을 수 있는 슛 기회에서 26번 실패했다. 나는 살아오면서 계속 실패를 거듭했다. 그것이 내가 성공한 이유다.",
    author: "마이클 조던",
  },
];

const addQuote = mainScreen.querySelector(".quotes");
const addQuoteText = addQuote.querySelector(".quotes-text");
const addQuoteAuthor = addQuote.querySelector(".quotes-author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

addQuoteText.innerText = `${todaysQuote.quote}`;
addQuoteAuthor.innerText = `${todaysQuote.author}`;
