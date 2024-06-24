
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
            this.values = values;
            this.method(this.values);
            currentFunction = this;
        }
    }

    let functions: { [key: string]: BlockFunction } = {};
    let currentFunction: BlockFunction;

    function createFunction(name: string, args: string[], method: (args: any[]) => any) {
        functions[name] = new BlockFunction(method, args);
    }

    function getParameter(name: string) {
        return currentFunction.values[currentFunction.args.indexOf(name)];
    }
}