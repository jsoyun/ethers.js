// class Player {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//     public nickname: string
//   ) {}
// }

// const nico = new Player("윤", "소", "이");

// nico.nickname;
// console.log(nico.nickname);

//추상클래스는 다른 클래스가 상속받을 수 있는 클래스이다.
//하지만 이 클래스는 직접 새로운 인스턴스를 만들어낼 수 없다 //new 이렇게 못쓴다는 뜻
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//player는 User로부터 상속받아서 안에 함수들을 쓸 수 있음.
class Player extends User {}
const nico = new Player("nico", "las", "니코");
nico.getFullName();
