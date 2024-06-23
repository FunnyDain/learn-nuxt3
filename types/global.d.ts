export {}

// 전역이기때문에 바로 사용 가능
declare global{
  // 제네릭으로 받은 타입 T거나 null이거나 undefined
  type Maybe<T> = T | null | undefined
}