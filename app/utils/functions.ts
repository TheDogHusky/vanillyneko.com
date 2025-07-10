const index = ref(0);

export const backgroundClasses = [
    "bg-secondary",
    "bg-primary",
    "bg-sea-200"
];

export const getBackgroundClass = (customIndex?: number): string => {
    return customIndex ? backgroundClasses[customIndex % backgroundClasses.length] as string : backgroundClasses[index.value++ % backgroundClasses.length] as string;
};