console.log("Hello World");

const LetSee: (test: string) => string = (test) => {
    return test;
};

const LetSee2 = (test: string): string => {
    return "test";
};

const x: string = LetSee("text");
