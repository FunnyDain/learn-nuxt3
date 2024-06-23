// course에 대한 타입 정의
export interface Course {
  title: string;
  subtitle: string;
  courseSlug: string;
  content: string;
  thumbnail: string;
  video: string;
  rating: number;
  reviewsCount: number;
  studentCount: number;
  reviewsUrl: string;
  inflearnUrl: string;
  gymcodingUrl: string;
}

// course에서 변경된 새로운 타입
// export interface CourseWithPath {
//   title: string;
//   subtitle: string;
//   courseSlug: string;
//   content: string;
//   thumbnail: string;
//   video: string;
//   rating: string;
//   reviewsCount: string;
//   studentCount: string;
//   reviewsUrl: string;
//   inflearnUrl: string;
//   gymcodingUrl: string;
//   path: string;
// }

// Course와 Course에서 변경된 타입인 CourseWithPath는 유사한 타입
// 이러할 경우 타입스크립트에서 제공하는 유틸리티 타입 중 하나인 Omit을 사용하면 편하다!
// 타입을 상속받고 확장하면 됌!
// 'rating' | 'reviewsCount' | 'studentCount' 특정 속성을 제외하고 새로운 타입 선언
export interface CourseWithPath
  extends Omit<Course, 'rating' | 'reviewsCount' | 'studentCount'> {
  path: string;
  rating: string;
  reviewsCount: string;
  studentCount: string;
}
