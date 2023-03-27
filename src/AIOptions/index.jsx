export const arrayItems = [{
    name: 'Q&A',
    id: 'q&a',
    description: "Answer Question based on existing knowledge",
    option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
    }
},
{
    name: "Gramer Correction",
    id: "graeerCorrection",
    description: "corrects sentences into standard English",
},
{
    name: "Sunnarize for a 2nd grader",
    id: "summary",
    description: "Translates difficult text into simpler concepts",
},
{
    name: "English to other langvages",
    id: "translate",
    description: "Translates English text into French, Spanish and japense",
},
{
    name: "Text to Command",
    id: "Translate text into programming commands",
    description: "Translate text into programming commands",
},
{
    name: "Explain code",
    id: "explaincode",
    description: "Explain complicated piece of code.",
},
{
    name: "Calculate time Complexity",
    id: "calculatetime",
    description: "Find time complexity of a function."
},
];

