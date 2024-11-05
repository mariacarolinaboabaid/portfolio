export interface ProfessionalExperience {
    title:                  string;
    professionalExperience: Experience[];
}

export interface Experience {
    id:            string;
    period:        string;
    companyInfo:   string;
    role:          string;
    description:  string[];
}