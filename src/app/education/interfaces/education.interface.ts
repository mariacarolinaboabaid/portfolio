export interface Education {
    title:      string;
    formations: Formation[];
}

export interface Formation {
    id:          string;
    title:       string;
    period:      string;
    institution: string;
}