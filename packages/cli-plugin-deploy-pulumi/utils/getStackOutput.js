const execa = require("execa");
const mapStackOutput = require("./mapStackOutput");

const getOutputJson = async (stack, env) => {
    try {
        const { stdout } = await execa(
            "webiny",
            ["stack", "output", stack, "--env", env, "--json", "--no-debug"].filter(Boolean)
        );

        return JSON.parse(stdout);
    } catch (e) {
        return null;
    }
};

module.exports = async (stack, env, map) => {
    const output = await getOutputJson(stack, env);
    if (!output) {
        return output;
    }

    if (!map) {
        return output;
    }

    return mapStackOutput(output, map);
};