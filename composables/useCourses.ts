// courseData를 가져오는 composable함수
import coursesData from './coursesData';
import type { CourseWithPath } from '~/types/course';

// return 타입 체크
interface CoursesReturn {
  courses: CourseWithPath[];
}

export const useCourses = (): CoursesReturn => {
  const courses = coursesData.map((item) => ({
    ...item,
    rating: item.rating.toFixed(1), // 5.0
    reviewsCount: item.reviewsCount.toLocaleString(), // 1000 =>1,000
    studentCount: item.reviewsCount.toLocaleString(), // 12345 => 12,345
    path: `/course/${item.courseSlug}`,
  }));
  return {
    courses,
  };
};
