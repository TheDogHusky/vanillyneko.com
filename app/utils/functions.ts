const index = ref(0);

export const backgroundClasses = [
    "bg-secondary",
    "bg-blue-100",
    "bg-primary"
];

export const getBackgroundClass = (...args: any): string => {
    return backgroundClasses[index.value++ % backgroundClasses.length] as string;
};