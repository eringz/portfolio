export type Feature = { name: string; description: string};
export type StackItem = { name: string; frameworks: string};

export type Project = {
    num: string;
    title: string;
    background: string;
    solution: string;
    features: Feature[];
    stack: StackItem[];
    targets: string[];
    impacts: string[];
    image: string;
    live: string;
    github: string;
}


/**
 * Created Project Helper
 * Accepts partial data but requires num & title.
 * Provides sensible defaults for optional fields
 */
export const createProject = (
    project: Partial<Project> & { num: string; title: string }
): Project => {
    return {
        background: '',
        solution: '',
        features: [],
        stack: [],
        targets: [],
        impacts: [],
        image: '/assets/work/coming-soon.jpg',
        live: '',
        github: '',
        
        // Defaults override with provided values
        ...project
    }
}

