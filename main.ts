
namespace blockFunctions {
    class BlockFunction {
        method: (args: any[]) => any;
        args: string[];
        values: any[];

        constructor(method: (args: any[]) => any, args: string[]) {
            this.method = method;
            this.args = args;
        }

        call(values: any[]) {
            this.method(this.values);
        }
    }

    let functions: { [key: string]: BlockFunction } = {};

    function createFunction(name: string, args: string[], method: (args: any[]) => any) {
        functions[name] = new BlockFunction(method, args);
    }
}