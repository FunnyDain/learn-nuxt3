import type { CourseWithPath } from '~/types/course';

interface courseReturn {
  // course: Course | undefined;
  // course가 없을 수도 있기때문에 undefined도 지정해줘야함, 이러한 경우는 많기 때문에 전역적으로 등록해주는 게 좋다.
  course: Maybe<CourseWithPath>; // Course | null | undefined
  prevCourse: Maybe<CourseWithPath>; // Course | null | undefined
  nextCourse: Maybe<CourseWithPath>; // Course | null | undefined
}

export const useCourse = (courseSlug: string): courseReturn => {
  const { courses } = useCourses();
  // const course = courses.find((course) => course.courseSlug === courseSlug);
  const index = courses.findIndex((course) => course.courseSlug === courseSlug);
  const course = courses[index];
  const prevCourse = index <= 0 ? null : courses[index - 1];
  const nextCourse = index >= courses.length - 1 ? null : courses[index + 1];
  return { course, prevCourse, nextCourse };
};
