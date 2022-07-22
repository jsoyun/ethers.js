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

///제너릭generic
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) =>
  // {
  //   arr.forEach((i) => console.log(i));
  // };
  arr[0];

//이거를 함수로 바꿈
function superprint<V>(a: V[]) {
  return a[0];
}

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
//
type Player<E> = {
  name: string;
  //제너릭사용해서 얘는 아무거나 될 수 있음! any는 보호를 못하니까
  extraInfo: E;
};
