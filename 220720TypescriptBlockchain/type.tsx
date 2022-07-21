//call signature
// type Add = (a: number, b: number) => number;
// const add: Add = (a, b) => a + b;

//nextjs에서 라이브러리 사용할 때 쓰는 예시
//

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};
//흠 인강과 다르게 안되네..왜지..
const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

///제너릭
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) =>
  // {
  //   arr.forEach((i) => console.log(i));
  // };
  arr[0];

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
