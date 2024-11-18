export interface MyProjects {
    title:    string;
    projects: Project[];
}

export interface Project {
    name:        string;
    description: string;
    imagePath:   string;
    github:      string;
    deploy?:     string;
}