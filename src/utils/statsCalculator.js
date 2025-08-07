import { projectsData } from '../components/Projects.jsx';

// Utility functions untuk menghitung stats otomatis
export const getProjectsCount = () => {
  // Menghitung project yang tidak memiliki status comingSoon
  const completedProjects = projectsData.filter(project => !project.comingSoon);
  return completedProjects.length;
};

export const getFeaturedProjectsCount = () => {
  const featuredProjects = projectsData.filter(project => project.featured && !project.comingSoon);
  return featuredProjects.length;
};

export const getTechnologiesCount = () => {
  const allTechnologies = new Set();
  projectsData.forEach(project => {
    if (!project.comingSoon) {
      project.technologies.forEach(tech => allTechnologies.add(tech));
    }
  });
  return allTechnologies.size;
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getYearsOfExperience = () => {
  const startYear = 2021; // Tahun mulai programming/belajar
  const currentYear = getCurrentYear();
  return currentYear - startYear;
};
