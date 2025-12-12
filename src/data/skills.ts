import { projectsData, Project } from './projects';

export interface SkillData {
    name: string;
    category: 'Design' | 'Onderzoek' | 'Tech' | 'Management';
    projects: {
        id: number;
        title: string;
        year: number;
        slug: string;
    }[];
    count: number;
}

export function extractSkillsFromProjects(): SkillData[] {
    const skillMap = new Map<string, SkillData>();

    projectsData.forEach((project) => {
        // Extract from tags
        project.tags.forEach((tag) => {
            if (!skillMap.has(tag)) {
                skillMap.set(tag, {
                    name: tag,
                    category: tag as any,
                    projects: [],
                    count: 0
                });
            }

            const skill = skillMap.get(tag)!;
            skill.projects.push({
                id: project.id,
                title: project.title,
                year: project.year,
                slug: project.slug
            });
            skill.count++;
        });

        // Extract from role if present
        if (project.role) {
            const roleParts = project.role.split(/[&,]/).map(r => r.trim());
            roleParts.forEach((rolePart) => {
                // Map role keywords to categories
                const roleKeywords: Record<string, 'Design' | 'Onderzoek' | 'Tech' | 'Management'> = {
                    'Design': 'Design',
                    'Ontwerp': 'Design',
                    'Onderzoek': 'Onderzoek',
                    'Developer': 'Tech',
                    'Tech': 'Tech',
                    'Programmeur': 'Tech',
                    'Teamleider': 'Management',
                    'Planner': 'Management',
                    'Leider': 'Management'
                };

                Object.entries(roleKeywords).forEach(([keyword, category]) => {
                    if (rolePart.includes(keyword)) {
                        const skillName = category;
                        if (!skillMap.has(skillName)) {
                            skillMap.set(skillName, {
                                name: skillName,
                                category,
                                projects: [],
                                count: 0
                            });
                        }

                        const skill = skillMap.get(skillName)!;
                        // Avoid duplicates
                        if (!skill.projects.find(p => p.id === project.id)) {
                            skill.projects.push({
                                id: project.id,
                                title: project.title,
                                year: project.year,
                                slug: project.slug
                            });
                            skill.count++;
                        }
                    }
                });
            });
        }
    });

    return Array.from(skillMap.values()).sort((a, b) => b.count - a.count);
}

export function getSkillGrowthByYear(): { year: number; skills: { [key: string]: number } }[] {
    const yearData: { year: number; skills: { [key: string]: number } }[] = [];

    for (let year = 1; year <= 6; year++) {
        const yearProjects = projectsData.filter(p => p.year === year);
        const skills: { [key: string]: number } = {};

        yearProjects.forEach(project => {
            project.tags.forEach(tag => {
                skills[tag] = (skills[tag] || 0) + 1;
            });
        });

        yearData.push({ year, skills });
    }

    return yearData;
}
