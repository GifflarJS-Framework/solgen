export = createValidator;
declare function createValidator(): {
    validate: (list: any) => void;
    messages: {
        /**
         * @param {string} arg
         */
        required: (arg: string) => string;
        /**
         * @param {string} arg
         * @param {string} type
         */
        wrongType: (arg: string, type: string, actualType: any) => string;
        /**
         * @param {string} arg
         * @param {string} type
         */
        wrongStructure: (arg: string, structure: any) => string;
    };
};
