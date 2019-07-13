declare function $(selector: string): {
    on: (eventName: string, e?: () => void) => void
};
