import { projectsData } from "@/app/components/projects/ProjectsData";

export const findProject = (projectNameSlug) => {
  let project;

  if (projectNameSlug) {
    project = projectsData?.find(
      (project) => project.nameSlug === projectNameSlug
    );

    if (project) {
      return project;
    } else {
      return {};
    }
  }
};
